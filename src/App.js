import * as React from 'react';
import Collection from './Collection';
import RenderNode from './RenderNode';
import { buildTree } from './utils/TreeUtils';

class App extends React.Component {
  constructor(props) {
    super(props);
    const { normalizedData, rootId, rootKey, structure } = this.props;
    this.state = {
      tree: buildTree(normalizedData, rootKey, rootId, structure)
    };
  }

  static getDerivedStateFromProps = ({
    normalizedData,
    rootId,
    rootKey,
    structure
  }) => ({
    tree: buildTree(normalizedData, rootKey, rootId, structure)
  });

  handleChange = tree =>
    this.setState({
      tree
    });

  render() {
    return (
      <Collection
        tree={this.state.tree}
        structure={this.props.structure}
        onChange={this.handleChange}
        renderers={{
          // these don't have to be the same type
          root: props => <RenderNode {...props} />,
          collection: props => <RenderNode {...props} />,
          articleFragment: props => <RenderNode {...props} />
        }}
      />
    );
  }
}

export default App;
