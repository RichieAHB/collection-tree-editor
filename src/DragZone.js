import React from 'react';

class DragZone extends React.Component {
  state = {
    dragging: false
  };

  onDragStart = e => {
    e.dataTransfer.setData('data', JSON.stringify(this.props.data));
    this.props.onDragStart(e);
    this.setState({
      dragging: true
    });
  };

  onDragEnd = e => {
    this.props.onDragEnd(e);
    this.setState({
      dragging: false
    });
  };

  render() {
    return (
      <div
        style={{
          cursor: 'pointer',
        }}
        draggable
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
      >
        {this.props.children}
      </div>
    );
  }
}

DragZone.defaultProps = {
  onDragEnd: () => {},
  onDragStart: () => {}
};

export default DragZone;
