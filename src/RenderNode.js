import * as React from 'react';
import DragZone from './DragZone';
import DropZone from './DropZone';

const Indent = ({ children }) => (
  <div style={{ marginLeft: '10px' }}>{children}</div>
);

const RenderNode = ({
  node,
  onDragStart,
  dragData,
  children,
  onChildDrop,
  canDrag,
  canDrop,
  parentType,
  allowedType
}) => (
  <div>
    {canDrag && (
      <DragZone onDragStart={onDragStart} data={dragData}>
        <h3>{node.title}</h3>
      </DragZone>
    )}
    <Indent>
      {children.map((child, i) => (
        <React.Fragment key={i}>
          {canDrop && (
            <DropZone onDrop={onChildDrop(i)}>
              Drop {allowedType} in {parentType} at index: {i}
            </DropZone>
          )}
          {child}
        </React.Fragment>
      ))}
      {canDrop && (
        <DropZone onDrop={onChildDrop(children.length)}>
          Drop {allowedType} in {parentType} at index: {children.length}
        </DropZone>
      )}
    </Indent>
  </div>
);

export default RenderNode;
