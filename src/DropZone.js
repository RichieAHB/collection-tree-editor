import React from 'react';

const DropZone = ({ children, onDrop }) => (
  <div
    style={{ border: '2px dashed white', margin: '5px 0', padding: '10px' }}
    onDragOver={e => e.preventDefault()}
    onDrop={onDrop}
  >
    {children}
  </div>
);

export default DropZone;
