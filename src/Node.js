import * as React from 'react';
import DragZone from './DragZone';
import DropZone from './DropZone';

const Indent = ({ children }) => (
  <div style={{ marginLeft: '10px' }}>{children}</div>
);

const ChildDropZone = ({
  path,
  attach,
  structure,
  childrenKey,
  modelKey,
  index
}) =>
  path.length <= structure.length + 2 && (
    <DropZone onDrop={attach([...path, [childrenKey, index]])}>
      Drop {modelKey}
    </DropZone>
  );

const Node = ({
  node,
  path = [],
  attach,
  detach,
  structure: [{ childrenKey, modelKey } = {}, ...structure]
}) => (
  <React.Fragment>
    <DragZone
      onDragStart={detach(path)}
      data={{
        data: node,
        path
      }}
    >
      {node.title}
    </DragZone>
    <Indent>
      {(node[childrenKey] || []).map((child, i) => (
        <React.Fragment key={child.id}>
          <ChildDropZone
            path={path}
            structure={structure}
            childrenKey={childrenKey}
            modelKey={modelKey}
            attach={attach}
            index={i}
          />
          <Node
            node={child}
            path={[...path, [childrenKey, i]]}
            attach={attach}
            detach={detach}
            structure={structure}
          />
        </React.Fragment>
      ))}
      <ChildDropZone
        path={path}
        structure={structure}
        childrenKey={childrenKey}
        modelKey={modelKey}
        attach={attach}
        index={(node[childrenKey] || []).length}
      />
    </Indent>
  </React.Fragment>
);

export default Node;
