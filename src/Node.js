import * as React from 'react';
import { pathSpec } from './utils/PathUtils';
import { INTERNAL_TRANSFER_TYPE } from './constants';

const Node = ({
  node,
  type,
  path,
  attach,
  detach,
  renderers,
  structure: [{ childrenKey, childrenType } = {}, ...structure]
}) => (
  <React.Fragment>
    {renderers[type]({
      node,
      onDragStart: detach(path),
      dragType: INTERNAL_TRANSFER_TYPE,
      dragData: {
        data: node,
        type: type,
        path
      },
      onChildDrop: i => attach([...path, pathSpec(childrenKey, i, childrenType)]),
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
    })}
  </React.Fragment>
);

export default Node;
