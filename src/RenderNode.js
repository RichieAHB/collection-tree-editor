import * as React from 'react';

const DragZone = props => (
  <div
    style={{
      background: 'white',
      color: '#221133',
      cursor: 'pointer',
      padding: '10px',
      margin: '5px 0'
    }}
    {...props}
  />
);

const DropZone = props => (
  <div
    style={{ border: '2px dashed white', margin: '5px 0', padding: '10px' }}
    {...props}
  />
);

const Indent = ({ children }) => (
  <div style={{ marginLeft: '10px' }}>{children}</div>
);

const isObj = val => val !== null && typeof val === 'object';

const nested = (obj, path) =>
  (Array.isArray(path) ? path : [path]).reduce(
    (acc, key) => (isObj(acc) ? acc[key] : acc),
    obj
  ) || '';

const RenderNode = ({
  node,
  getDragProps,
  getDropProps,
  children,
  onChildDrop,
  canDrag,
  canDrop,
  parentType,
  allowedType,
  titleKey = 'title'
}) => (
  <div>
    {canDrag && (
      <DragZone {...getDragProps()}>
        <h3>{nested(node, titleKey)}</h3>
      </DragZone>
    )}
    <Indent>
      {children.map((child, i) => (
        <React.Fragment key={i}>
          {canDrop && (
            <DropZone {...getDropProps(i)}>
              Drop {allowedType} in {parentType} at index: {i}
            </DropZone>
          )}
          {child}
        </React.Fragment>
      ))}
      {canDrop && (
        <DropZone {...getDropProps(children.length)}>
          Drop {allowedType} in {parentType} at index: {children.length}
        </DropZone>
      )}
    </Indent>
  </div>
);

export default RenderNode;
