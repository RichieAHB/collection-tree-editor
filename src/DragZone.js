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
          background: 'white',
          boxShadow: this.state.dragging
            ? '0 2px 5px 0 rgba(0, 0, 0, 0.5)'
            : '0 2px 2px 0 rgba(0, 0, 0, 0.5)',
          color: '#221133',
          cursor: 'pointer',
          padding: '10px',
          margin: '5px 0'
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
