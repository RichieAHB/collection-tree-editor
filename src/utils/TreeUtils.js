import * as Actions from '../Actions';
import { toPathStr, pathForMove } from './PathUtils';
import get from 'lodash/fp/get';
import set from 'lodash/fp/set';

const el = (type, childrenKey, idKey = 'id') => ({
  type,
  childrenKey,
  idKey
});

const buildTree = (_entities, rootType, rootId, _structure) => {
  const buildNode = (entities, nodeType, nodeId, [spec, ...structure]) => {
    const node = entities[nodeType][nodeId];

    const [childSpec] = structure;

    if (!childSpec) {
      return node;
    }

    const { childrenKey } = spec;
    const { type: childType } = childSpec;

    return set(
      childrenKey,
      (get(childrenKey, node) || []).map(childId =>
        buildNode(entities, `${childType}s`, childId, structure)
      ),
      node
    );
  };

  console.log(buildNode(_entities, rootType, rootId, _structure));

  return buildNode(_entities, rootType, rootId, _structure);
};

const TO_REMOVE = Symbol();

const dedupeTree = (
  rootNode,
  rootStructure,
  // dedupeTypes = [],
  // node = null,
  // nodeType = null
) => {
  const dedupeNode = (
    node,
    [{ type, childrenKey, idKey } = {}, ...structure],
    edits = [],
    seen = {}
  ) => {
    const id = node[idKey];

    if ((seen[type] || []).indexOf(id) > -1) {
      return [TO_REMOVE, [...edits, Actions.remove(id, type)], seen];
    }

    const seenWithNew = {
      ...seen,
      [type]: [...(seen[type] || []), id]
    };

    if (!childrenKey) {
      return [node, edits, seenWithNew];
    }

    const children = get(childrenKey, node);

    if (!children) {
      return [node, edits, seenWithNew];
    }

    const [newChildren, newEdits, newSeen] = children.reduce(
      ([curChildren, curEdits, curSeen], child) => {
        const [newChild, nextEdits, nextSeen] = dedupeNode(
          child,
          structure,
          curEdits,
          curSeen
        );
        return [[...curChildren, newChild], nextEdits, nextSeen];
      },
      [[], edits, seenWithNew]
    );
    const filteredChildren = newChildren.filter(child => child !== TO_REMOVE);

    const newNode = set(childrenKey, filteredChildren, node);

    return [newNode, newEdits, newSeen];
  };

  const [newTree, edits] = dedupeNode(rootNode, rootStructure);

  return [newTree, edits];
};

const insert = (tree, sourcePath, path, data, type) => {
  // should walk schema for path here, this will be the only way to get the parent type
  const newPath = sourcePath ? pathForMove(sourcePath, path) : path;
  const [pathStr, index] = toPathStr(newPath, true);
  const arr = get(pathStr, tree) || [];
  const newTree = set(
    pathStr,
    [...arr.slice(0, index), data, ...arr.slice(index)],
    tree
  );
  return [newTree, [Actions.insert(data.id, data, type)]];
};

// will return an action with undefined keys if id and type are missing
const remove = (tree, sourcePath, path, id, type) => {
  const newPath = sourcePath ? pathForMove(sourcePath, path) : path;
  const [pathStr, index] = toPathStr(newPath, true);
  const arr = get(pathStr, tree) || [];
  const newTree = set(
    pathStr,
    [...arr.slice(0, index), ...arr.slice(index + 1)],
    tree
  );
  return [newTree, [Actions.remove(id, type)]];
};

export { insert, remove, dedupeTree, buildTree, el };
