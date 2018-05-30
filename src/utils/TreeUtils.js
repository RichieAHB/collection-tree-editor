// @flow

import * as React from 'react';
import * as Edits from '../Edits';
import { type Edit } from '../Edits';
import {
  toPathStr,
  toPathStrAndIndex,
  pathForMove,
  pathSpec
} from './PathUtils';
import { type Path, type PathSpec } from './PathUtils';
import get from 'lodash/fp/get';
import set from 'lodash/fp/set';

type DragProps = {
  draggable?: boolean,
  onDragOver?: (e: DragEvent) => void
};

type DropProps = {
  onDragOver?: (e: DragEvent) => void,
  onDrop?: (e: DragEvent) => void
};

type RendererProps = {
  node: Object,
  getDragProps: () => DragProps,
  getDropProps: (index: number) => DropProps,
  canDrag: boolean,
  canDrop: boolean,
  parentType: string,
  allowedType: string,
  children: React.Node[]
};

type Renderer = (props: RendererProps) => React.Node;

type SchemaNode = {
  type: string,
  childrenKey: ?string,
  idKey: string,
  childType: ?SchemaNode,
  renderer: Renderer
};

type EntityMap = {
  [string]: {
    [string]: Object
  }
};

const buildTree = (
  _entities: EntityMap,
  rootType: string,
  rootId: string,
  rootSchema: SchemaNode
) => {
  const buildNode = (
    entities,
    modelKey,
    nodeId,
    { childrenKey, type, childType: schema } = {}
  ) => {
    const node = entities[modelKey][nodeId];

    if (!schema || !childrenKey) {
      return node;
    }

    const { type: childType } = schema;

    return set(
      childrenKey,
      (get(childrenKey, node) || []).map((childId: string) =>
        buildNode(entities, `${childType}s`, childId, schema)
      ),
      node
    );
  };

  return buildNode(_entities, rootType, rootId, rootSchema);
};

const defaults = {
  idKey: 'id'
};

const el = (
  type: string,
  renderer: Renderer,
  childType: ?SchemaNode = undefined,
  opts: Object = {}
): SchemaNode => ({
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

type Seen = {
  [string]: string[]
};

const dedupeTree = (
  tree: Object,
  rootSchema: SchemaNode
  // dedupeTypes = [],
  // node = null,
  // modelKey = null
) => {
  const dedupeNode = (
    node: Object,
    schema: SchemaNode,
    edits: Edit[] = [],
    seen: Seen = {},
    path: Path = [],
    tree: Object = node,
    rootSchema: SchemaNode = schema
  ) => {
    const { childrenKey, type, idKey, childType: childSchema } = schema;

    const id = node[idKey];

    if ((seen[type] || []).indexOf(id) > -1) {
      const parents = getParents(tree, rootSchema, path);
      return [TO_REMOVE, [...edits, Edits.remove(id, type, parents)], seen];
    }

    const seenWithNew = {
      ...seen,
      [type]: [...(seen[type] || []), id]
    };

    if (!childSchema || !childrenKey) {
      return [node, edits, seenWithNew];
    }

    const children: Object[] = get(childrenKey, node);

    if (!children) {
      return [node, edits, seenWithNew];
    }

    const [newChildren, newEdits, newSeen] = children.reduce(
      ([curChildren: *, curEdits: Edit[], curSeen: Seen], child: *, i) => {
        const [newChild, nextEdits, nextSeen] = dedupeNode(
          child,
          childSchema,
          curEdits,
          curSeen,
          [...path, pathSpec(childrenKey, i)],
          tree,
          rootSchema
        );
        return [[...curChildren, newChild], nextEdits, nextSeen];
      },
      [[], edits, seenWithNew]
    );
    const filteredChildren = newChildren.filter(child => child !== TO_REMOVE);

    const newNode = set(childrenKey, filteredChildren, node);

    return [newNode, newEdits, newSeen];
  };

  const [newTree, edits] = dedupeNode(tree, rootSchema);

  return [newTree, edits];
};

const schemaAtDepth = (schema: SchemaNode, depth: number): ?SchemaNode => {
  let newSchema = schema;
  for (let i = 0; i < depth; i += 1) {
    if (!newSchema) {
      return null;
    }
    newSchema = newSchema.childType;
  }
  return newSchema;
};

type ParentSpec = {
  id: string,
  type: string
};

const getParents = (
  tree: Object,
  schema: SchemaNode,
  path: Path
): ParentSpec[] => {
  const [parents] = path.reduce(
    (
      [curParents: ParentSpec[], curPath: Path, curSchema: ?SchemaNode],
      pathSpec: PathSpec,
      i
    ): [ParentSpec[], Path, ?SchemaNode] => {
      const pathStr = toPathStr(curPath);
      return [
        [
          ...(curParents || []),
          {
            id: (pathStr ? get(pathStr, tree) : tree)[(curSchema || {}).idKey],
            type: (curSchema || {}).type
          }
        ],
        [...curPath, pathSpec],
        (curSchema || {}).childType
      ];
    },
    [[], [], schema]
  );
  return parents;
};

type ParentContext = {
  type: string,
  idKey: string,
  parents: ParentSpec[],
  pathStr: string,
  index: number,
  children: Object[]
};

const getContext = (
  tree: Object,
  schema: SchemaNode,
  sourcePath: ?Path,
  path: Path
): ParentContext => {
  const newPath = sourcePath ? pathForMove(sourcePath, path) : path;
  const parents = getParents(tree, schema, newPath);
  const [pathStr, index] = toPathStrAndIndex(newPath);
  const { type, idKey } = schemaAtDepth(schema, newPath.length) || {};
  const children = get(pathStr, tree) || [];

  return {
    type,
    idKey,
    parents,
    pathStr,
    index,
    children
  };
};

const insert = (
  tree: Object,
  schema: SchemaNode,
  sourcePath: ?Path,
  path: Path,
  data: any
): [Object, Edit[]] => {
  const { type, idKey, parents, pathStr, index, children } = getContext(
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
  return [newTree, [Edits.insert(data[idKey], type, data, parents, index)]];
};

// will return an edit with undefined keys if id and type are missing
const remove = (
  tree: Object,
  schema: SchemaNode,
  sourcePath: ?Path,
  path: Path,
  data: any
): [Object, Edit[]] => {
  const { type, idKey, parents, pathStr, index, children } = getContext(
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
  return [newTree, [Edits.remove(data[idKey], type, parents)]];
};

export { insert, remove, dedupeTree, buildTree, el };
export type { SchemaNode, ParentSpec, RendererProps };
