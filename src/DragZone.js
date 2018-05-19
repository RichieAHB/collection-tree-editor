import React from 'react';

class DragZone extends React.Component {
  render() {
    return (
      <div
        draggable
        onDragStart={e => {
          e.dataTransfer.setData('data', JSON.stringify(this.props.data));
          this.props.onDragStart(e);
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

DragZone.defaultProps = {
  onDragStart: () => {}
};

export default DragZone;
