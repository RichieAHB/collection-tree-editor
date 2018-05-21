import React from 'react';

class DropZone extends React.Component {
  render() {
    return (
      <div
        style={{ border: '2px dashed white', margin: '5px 0', padding: '10px' }}
        onDragOver={e => e.preventDefault()}
        onDrop={this.props.onDrop}
      >
        {this.props.children}
      </div>
    );
  }
}

export default DropZone;
