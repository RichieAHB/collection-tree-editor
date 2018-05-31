import React from 'react';
import DragZone from './DragZone';
import { urlToArticle } from './GUUtils';
import { Collection, RenderNode, el } from '../../../src';

const renderNode = props => <RenderNode titleKey="webTitle" {...props} />;

class App extends React.Component {
  state = {
    tree: {
      id: 1,
      webTitle: 'Front 1',
      collections: [
        {
          id: 1,
          webTitle: 'Collection 1',
          articleFragments: [
            {
              id: 1,
              webTitle: 'Article 1',
              supporting: [
                { id: 2, webTitle: 'Article 2' },
                { id: 3, webTitle: 'Article 3' }
              ]
            },
            { id: 4, webTitle: 'Article 4', supporting: [] }
          ]
        },
        { id: 2, webTitle: 'Collection 2', articleFragments: [] }
      ]
    }
  };

  handleChange = (tree, edits) =>
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
          schema={el(
            'front',
            renderNode,
            el(
              'collection',
              renderNode,
              el(
                'articleFragment',
                renderNode,
                el('articleFragment', renderNode),
                {
                  childrenKey: 'supporting'
                }
              )
            )
          )}
          onChange={this.handleChange}
          dropMappers={{
            text: text => urlToArticle(text)
          }}
        />
      </React.Fragment>
    );
  }
}

export default App;
