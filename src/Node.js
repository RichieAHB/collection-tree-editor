// @flow

import * as React from 'react';
import { pathSpec } from './utils/PathUtils';
import get from 'lodash/fp/get';
import { type Path } from './utils/PathUtils';
import { type SchemaNode } from './utils/TreeUtils';

type NodeProps = {
  node: Object,
  path: Path,
  attach: (path: Path) => (e: DragEvent) => any,
  detach: (path: Path, type: string, data: any) => (e: DragEvent) => void,
  schema: SchemaNode
};

const Node = ({ node, path, attach, detach, schema }: NodeProps) => {
  const { childrenKey, type, renderer, childType: childSchema = {} } = schema;
  const { type: childType, idKey: childIdKey } = schema;

  const canDrag = path.length > 0;
  const canDrop = !!childrenKey;

  return renderer({
    node,
    getDragProps: () =>
      canDrag
        ? {
            draggable: true,
            onDragStart: detach(path, type, node)
          }
        : {},
    getDropProps: i =>
      !!childrenKey
        ? {
            onDragOver: e => e.preventDefault(),
            onDrop: attach([...path, pathSpec(childrenKey, i, childType)])
          }
        : {},
    canDrag,
    canDrop,
    parentType: type,
    allowedType: childType,
    children: !!childrenKey
      ? (get(childrenKey, node) || []).map((child, i) => (
          <Node
            key={child[childIdKey] || i}
            node={child}
            path={[...path, pathSpec(childrenKey, i, childType)]}
            attach={attach}
            detach={detach}
            schema={schema}
          />
        ))
      : []
  });
};

export default Node;
