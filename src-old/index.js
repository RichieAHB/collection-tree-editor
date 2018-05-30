import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import model from './model';
import { RenderNode, el } from './lib';

const renderNode = props => <RenderNode titleKey="webTitle" {...props} />;

ReactDOM.render(
  <App
    normalizedData={model}
    rootKey="fronts"
    rootId={1}
    schema={el(
      'front',
      renderNode,
      el(
        'collection',
        renderNode,
        el('articleFragment', renderNode, el('articleFragment', renderNode), {
          childrenKey: 'supporting'
        })
      )
    )}
  />,
  document.getElementById('root')
);
