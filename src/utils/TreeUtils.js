import * as Actions from '../Actions';
import { pathSpec, findAtPath, pathForMove } from './PathUtils';

const buildTree = (entities, rootType, rootId, structure) => {
  const buildNode = (entities, nodeType, nodeId, [childSpec, ...structure]) => {
    const node = entities[nodeType][nodeId];

    if (!childSpec) {
      return node;
    }

    const { childrenKey, modelKey } = childSpec;

    return {
      ...node,
      [childrenKey]: (node[childrenKey] || []).map(childId =>
        buildNode(entities, modelKey, childId, structure)
      )
    };
  };

  return buildNode(entities, rootType, rootId, structure);
};

const el = (
  childrenType,
  childrenKey = `${childrenType}s`,
  modelKey = `${childrenType}s`
) => ({
  childrenType,
  modelKey,
  childrenKey
});

const walkTree = structure =>
  function*(tree) {
    function* walk(
      node,
      [{ childrenKey, childrenType } = {}, ...structure],
      path = []
    ) {
      const children = node[childrenKey] || [];

      let i = 0;

      while (i < children.length) {
        const child = children[i];
        const childPath = [...path, pathSpec(childrenKey, i)];
        const didDelete = yield {
          node: child,
          type: childrenType,
          path: childPath
        };

        // if we deleted (mutation) then the item at this index is not the next
        // item
        if (didDelete) {
          continue;
        }

        yield* walk(child, structure, childPath);
        i++;
      }
    }

    yield* walk(tree, structure);
  };

const insert = (tree, sourcePath, path, data, type) => {
  const newPath = sourcePath ? pathForMove(sourcePath, path) : path;
  const { key, index } = newPath.pop();
  const parent = findAtPath(tree, newPath);
  parent[key].splice(index, 0, data);
  return [Actions.insert(data.id, data, type)];
};

// will return an action with undefined keys if id and type are missing
const remove = (tree, sourcePath, path, id, type) => {
  const newPath = sourcePath ? pathForMove(sourcePath, path) : path;
  const { key, index } = newPath.pop();
  const parent = findAtPath(tree, newPath);
  parent[key].splice(index, 1);
  return [Actions.remove(id, type)];
};

// this mutates the tree and is expected to be used with immer
// optionally pass a newNode and newNodeType to make sure we don't delete
// the new node
const dedupe = (tree, structure, newNode = false, newNodeType = null) => {
  const seen = {};
  const edits = [];

  const gen = walkTree(structure)(tree);
  let result = gen.next();

  while (!result.done) {
    const { node, type, path } = result.value;
    seen[type] = seen[type] || [];
    let didDelete = false;

    if (
      (node !== newNode && node.id === newNode.id && type === newNodeType) ||
      seen[type].indexOf(node.id) > -1
    ) {
      console.log(node)
      edits.push(remove(tree, null, path, node.id, type));
      didDelete = true;
    } else {
      seen[type].push(node.id);
    }

    result = gen.next(didDelete);
  }

  return edits;
};

export { buildTree, insert, remove, dedupe, el };
