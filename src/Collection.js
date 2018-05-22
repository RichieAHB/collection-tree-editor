import React from 'react';
import produce from 'immer';
import Node from './Node';
import { findAtPath, isSubPath, pathForMove } from './utils/PathUtils';
import { dedupe } from './utils/TreeUtils';
import { INTERNAL_TRANSFER_TYPE } from './constants';

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

  get dropMappers() {
    return {
      [INTERNAL_TRANSFER_TYPE]: data => JSON.parse(data),
      ...this.props.dropMappers
    };
  }

  async getDropData(e) {
    const [type, mapper] = Object.entries(this.dropMappers).find(
      ([type, mapper]) => e.dataTransfer.getData(type)
    );
    return mapper(e.dataTransfer.getData(type));
  }

  attach = path => async e => {
    e.preventDefault();
    let spec;

    try {
      spec = await this.getDropData(e);
    } catch (e) {
      console.log(`error parsing the drag data`);
      return;
    }

    if (!spec) {
      return;
    }

    const { data, path: sourcePath, type } = spec;

    if (sourcePath && isSubPath(sourcePath, path)) {
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
          const newPath = sourcePath ? pathForMove(sourcePath, path) : path;
          const { key, index } = newPath.pop();
          const parent = findAtPath(draftTree, newPath);
          parent[key].splice(index, 0, data);

          // TODO: build this stuff out
          edits.push({
            action: 'INSERT',
            payload: {
              id: data.id,
              type,
              data
            }
          });

          edits.push(
            ...dedupe(draftTree, this.props.structure, data, type)
          );

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

Collection.defaultProps = {
  dropMappers: {}
};

export default Collection;
