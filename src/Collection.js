import React from 'react';
import produce from 'immer';
import Node from './Node';
import {
  findAtPath,
  isSubPath,
  buildTree,
  pathForMove
} from './utils/TreeUtils';

class Collection extends React.Component {
  state = {
    tree: null,
    draftTree: null
  };

  constructor(props) {
    super(props);
    const { normalizedData, rootId, rootKey, structure } = this.props;
    this.state = {
      tree: buildTree(normalizedData, rootKey, rootId, structure)
    };
  }

  detach = path => () => {
    const tree = produce(this.state.tree, draftTree => {
      const newPath = path.slice();
      const [key, index] = newPath.pop();
      const parent = findAtPath(draftTree, newPath);
      parent[key].splice(index, 1);
    });

    this.setState({
      draftTree: tree,
      didDrop: true
    });
  };

  attach = path => e => {
    let json;

    try {
      json = JSON.parse(e.dataTransfer.getData('data'));
    } catch (e) {
      return;
    }

    const { data, path: sourcePath } = json;

    if (isSubPath(sourcePath, path)) {
      return;
    }

    // this could probably just be draft tree
    const tree = produce(this.state.draftTree || this.state.tree, draftTree => {
      const newPath = pathForMove(sourcePath, path);
      console.log(newPath);
      const [key, index] = newPath.pop();
      const parent = findAtPath(draftTree, newPath);
      parent[key].splice(index, 0, data);
    });

    this.setState({
      tree,
      didDrop: true
    });
  };

  onDragEnd = () => {
    if (!this.state.didDrop) {
      this.setState({
        draftTree: null,
        tree: this.state.draftTree || this.state.tree,
        didDrop: false
      });
    } else {
      this.setState({
        didDrop: false
      });
    }
  };

  render() {
    const { attach, detach, onDragEnd } = this;
    const { structure } = this.props;
    const { tree } = this.state;

    return (
      <div onDragEnd={onDragEnd}>
        <Node
          node={tree}
          structure={structure}
          attach={attach}
          detach={detach}
          path={[]}
        />
      </div>
    );
  }
}

export default Collection;
