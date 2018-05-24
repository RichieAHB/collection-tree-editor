import * as React from 'react';
import { pathSpec } from './utils/PathUtils';
import get from 'lodash/fp/get';

const Node = ({
  node,
  path,
  attach,
  detach,
  renderers,
  schema: { childrenKey, type, renderer, childType: schema = {} } = {}
}) => {
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
      canDrop
        ? {
            onDragOver: e => e.preventDefault(),
            onDrop: attach([...path, pathSpec(childrenKey, i, childType)])
          }
        : {},
    canDrag,
    canDrop,
    parentType: type,
    allowedType: childType,
    children: (get(childrenKey, node) || []).map((child, i) => (
      <Node
        key={child[childIdKey] || i}
        node={child}
        path={[...path, pathSpec(childrenKey, i, childType)]}
        attach={attach}
        detach={detach}
        renderers={renderers}
        schema={schema}
      />
    ))
  });
};

export default Node;
