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
  rootStructure
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
