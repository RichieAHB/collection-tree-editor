// @flow

import * as React from 'react';
import get from 'lodash/fp/get';
import { type RendererProps } from './utils/TreeUtils';

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

type RenderNodeProps = RendererProps & {
  titleKey?: string
};

const RenderNode = ({
  node,
  getDragProps,
  getDropProps,
  children,
  canDrag,
  canDrop,
  parentType,
  allowedType,
  titleKey = 'title'
}: RenderNodeProps) => (
  <div>
    {canDrag && (
      <DragZone {...getDragProps()}>
        <h3>{get(titleKey, node)}</h3>
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
