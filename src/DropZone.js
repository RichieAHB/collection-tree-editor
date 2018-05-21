import React from 'react';

class DropZone extends React.Component {
  render() {
    return (
      <div
        style={{ border: '2px dashed blue', padding: '10px' }}
        onDragOver={e => e.preventDefault()}
        onDrop={this.props.onDrop}
      >
        {this.props.children}
      </div>
    );
  }
}

export default DropZone;
