import * as React from 'react';
import { Collection, RenderNode, buildTree } from './lib';
import capiQuery from './capi';

const capi = capiQuery();

const searchById = async id =>
  (await capi.search({
    ids: id,
    'api-key': 'teleporter-view'
  })).response.results[0];

const isGuardianURL = url => {
  const [, id] = url.match(/https:\/\/www.theguardian\.com\/(.*)\??/) || [];

  return {
    url,
    id
  };
};

const urlToArticle = async text => {
  const { id } = isGuardianURL(text);

  return (
    !!id && {
      data: await searchById(id),
      type: 'articleFragment'
    }
  );
};

class DragZone extends React.Component {
  state = {
    dragging: false
  };

  onDragStart = e => {
    const data = this.props.json
      ? JSON.stringify(this.props.data)
      : this.props.data;
    e.dataTransfer.setData(this.props.type, data);
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
  onDragStart: () => {},
  type: 'text'
};

class App extends React.Component {
  state = {};

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
      <React.Fragment>
        <DragZone data="https://www.theguardian.com/society/2018/may/22/benefit-sanctions-found-to-be-ineffective-and-damaging">
          Article
        </DragZone>
        <Collection
          tree={this.state.tree}
          structure={this.props.structure}
          onChange={this.handleChange}
          renderers={{
            // these don't have to be the same component
            root: props => <RenderNode titleKey="webTitle" {...props} />,
            collection: props => <RenderNode titleKey="webTitle" {...props} />,
            articleFragment: props => (
              <RenderNode titleKey="webTitle" {...props} />
            )
          }}
          dropMappers={{
            text: text => urlToArticle(text)
          }}
        />
      </React.Fragment>
    );
  }
}

export default App;
