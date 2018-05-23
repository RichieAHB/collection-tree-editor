import React from 'react';
import produce from 'immer';
import Node from './Node';
import { isSubPath } from './utils/PathUtils';
import { insert, remove, dedupe } from './utils/TreeUtils';
import { INTERNAL_TRANSFER_TYPE } from './Constants';

class Collection extends React.Component {
  state = {
    tree: null,
    draftTree: null
  };

  static getDerivedStateFromProps = ({ tree }) => ({
    tree
  });

  onDragEnd = () => {
    this.setState({
      draftTree: null
    });
  };

  get dropMappers() {
    return {
      [INTERNAL_TRANSFER_TYPE]: data => JSON.parse(data),
      ...this.props.dropMappers
    };
  }

  async getDropData(e) {
    const [type, mapper] = Object.entries(this.dropMappers).find(([t]) =>
      e.dataTransfer.getData(t)
    );
    return mapper(e.dataTransfer.getData(type));
  }

  detach = (path, type, node) => e => {
    const data = JSON.stringify({
      data: node,
      type,
      path
    });
    e.dataTransfer.setData(INTERNAL_TRANSFER_TYPE, data);
    try {
      const tree = produce(this.state.tree, draftTree => {
        remove(draftTree, null, path);
      });
      this.setState({
        draftTree: tree
      });
    } catch (e) {
      console.log(`Couldn't detach: ${e.message}`);
    }
  };

  attach = path => async e => {
    e.preventDefault();
    let spec;

    try {
      spec = await this.getDropData(e);
    } catch (error) {
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

    try {
      // this could probably just be draft tree
      const tree = produce(
        this.state.draftTree || this.state.tree,
        draftTree => {
          edits.push(...insert(draftTree, sourcePath, path, data, type));
          // this will catch previous detaches
          edits.push(...dedupe(draftTree, this.props.structure, data, type));
          // TODO: flatten
        }
      );

      console.log(JSON.stringify(edits));

      this.props.onChange(tree, edits);
    } catch (error) {
      console.log(`Couldn't attach: ${e.message}`);
    }
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
