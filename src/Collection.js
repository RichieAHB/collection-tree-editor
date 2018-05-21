import React from 'react';
import produce from 'immer';
import Node from './Node';
import { findAtPath, isSubPath, pathForMove } from './utils/TreeUtils';

class Collection extends React.Component {
  state = {
    tree: null,
    draftTree: null
  };

  static getDerivedStateFromProps = ({ tree }) => ({
    tree
  });

  detach = path => () => {
    try {
      const tree = produce(this.state.tree, draftTree => {
        const newPath = path.slice();
        const { key, index } = newPath.pop();
        const parent = findAtPath(draftTree, newPath);
        parent[key].splice(index, 1);
      });
      this.setState({
        draftTree: tree
      });
    } catch (e) {
      console.log(`Couldn't detach: ${e.message}`);
    }
  };

  attach = path => e => {
    let json;

    try {
      json = JSON.parse(e.dataTransfer.getData('data'));
    } catch (e) {
      console.log(`error parsing the drag data`);
      return;
    }

    const { data, path: sourcePath, type } = json;

    if (isSubPath(sourcePath, path)) {
      console.log(`can't drop into itself`);
      return;
    }

    const allowedType = path[path.length - 1].type;

    if (type !== allowedType) {
      console.log(`can't drop ${type}, expecting ${allowedType}`);
      return;
    }

    const edits = [];

    // check whether the type being dropped suits the place it's being dropped

    try {
      // this could probably just be draft tree
      const tree = produce(
        this.state.draftTree || this.state.tree,
        draftTree => {
          const newPath = pathForMove(sourcePath, path);
          const { key, index } = newPath.pop();
          const parent = findAtPath(draftTree, newPath);
          parent[key].splice(index, 0, data);

          // TODO: build this stuff out
          edits.push({
            type: 'MOVE',
            data
          });

          // dedupe
          // flatten
        }
      );

      this.props.onChange(tree);
    } catch (e) {
      console.log(`Couldn't attach: ${e.message}`);
    }
  };

  onDragEnd = () => {
    this.setState({
      draftTree: null
    });
  };

  render() {
    const { attach, detach, onDragEnd } = this;
    const { structure, renderers } = this.props;
    const { tree } = this.state;

    return (
      <div onDragEnd={onDragEnd}>
        <Node
          node={tree}
          type="root"
          path={[]}
          attach={attach}
          detach={detach}
          renderers={renderers}
          structure={structure}
        />
      </div>
    );
  }
}

export default Collection;
