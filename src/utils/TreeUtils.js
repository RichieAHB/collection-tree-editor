import * as Actions from '../Actions';
import { toPathStr, pathForMove } from './PathUtils';
import get from 'lodash/fp/get';
import set from 'lodash/fp/set';

const buildTree = (_entities, rootType, rootId, _structure) => {
  const buildNode = (
    entities,
    modelKey,
    nodeId,
    { childrenKey, type, childType: schema = {} } = {}
  ) => {
    const node = entities[modelKey][nodeId];

    const { type: childType } = schema;

    if (!childType) {
      return node;
    }

    return set(
      childrenKey,
      (get(childrenKey, node) || []).map(childId =>
        buildNode(entities, `${childType}s`, childId, schema)
      ),
      node
    );
  };

  return buildNode(_entities, rootType, rootId, _structure);
};

const defaults = {
  idKey: 'id'
};

const el = (type, renderer, childType = undefined, opts = {}) => ({
  childrenKey: childType ? `${childType.type}s` : undefined,
  ...{
    ...defaults,
    ...opts
  },
  childType,
  type,
  renderer
});

const TO_REMOVE = Symbol();

const dedupeTree = (
  rootNode,
  rootSchema
  // dedupeTypes = [],
  // node = null,
  // modelKey = null
) => {
  const dedupeNode = (
    node,
    { childrenKey, type, idKey, childType: schema = {} } = {},
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
          schema,
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

  const [newTree, edits] = dedupeNode(rootNode, rootSchema);

  return [newTree, edits];
};

const schemaAtDepth = (schema, depth) => {
  let newSchema = schema;
  for (let i = 0; i < depth; i += 1) {
    newSchema = newSchema.childType;
  }
  return newSchema;
};

const getParents = (tree, schema, path) => {
  const parentPath = path.slice(0, path.length - 1);
  const [parents] = parentPath.reduce(
    ([curParents, curPath, curSchema], pathSpec) => {
      const pathStr = toPathStr(curPath);
      return [
        [
          ...curParents,
          {
            parentId: (pathStr ? get(pathStr, tree) : tree).id,
            parentType: curSchema.type
          }
        ],
        [...curPath, pathSpec],
        curSchema.childType
      ];
    },
    [[], [], schema]
  );
  return parents;
};

const getContext = (tree, schema, sourcePath, path) => {
  const newPath = sourcePath ? pathForMove(sourcePath, path) : path;
  const parents = getParents(tree, schema, newPath);
  const [pathStr, index] = toPathStr(newPath, true);
  const { type } = schemaAtDepth(schema, newPath.length);
  const children = get(pathStr, tree) || [];

  return {
    type,
    parents,
    pathStr,
    index,
    children
  };
};

const insert = (tree, schema, sourcePath, path, data) => {
  const { type, parents, pathStr, index, children } = getContext(
    tree,
    schema,
    sourcePath,
    path
  );

  const newTree = set(
    pathStr,
    [...children.slice(0, index), data, ...children.slice(index)],
    tree
  );
  return [newTree, [Actions.insert(data.id, type, data, parents)]];
};

// will return an action with undefined keys if id and type are missing
const remove = (tree, schema, sourcePath, path, id) => {
  const { type, parents, pathStr, index, children } = getContext(
    tree,
    schema,
    sourcePath,
    path
  );

  const newTree = set(
    pathStr,
    [...children.slice(0, index), ...children.slice(index + 1)],
    tree
  );
  return [newTree, [Actions.remove(id, type, parents)]];
};

export { insert, remove, dedupeTree, buildTree, el };
