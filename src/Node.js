import * as React from 'react';
import { pathSpec } from './utils/PathUtils';

const Node = ({
  node,
  type,
  path,
  attach,
  detach,
  renderers,
  structure: [{ childrenKey, childrenType } = {}, ...structure]
}) =>
  renderers[type]({
    node,
    getDragProps: () => ({
      draggable: true,
      onDragStart: detach(path, type, node)
    }),
    getDropProps: i => ({
      onDragOver: e => e.preventDefault(),
      onDrop: attach([...path, pathSpec(childrenKey, i, childrenType)])
    }),
    canDrag: path.length > 0,
    canDrop: path.length <= structure.length + 2,
    parentType: type,
    allowedType: childrenType,
    children: (node[childrenKey] || []).map((child, i) => (
      <Node
        key={child.id}
        node={child}
        type={childrenType}
        path={[...path, pathSpec(childrenKey, i, childrenType)]}
        attach={attach}
        detach={detach}
        renderers={renderers}
        structure={structure}
      />
    ))
  });

export default Node;
