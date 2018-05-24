import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { el } from './lib';
import model from './model';

ReactDOM.render(
  <App
    normalizedData={model}
    rootKey="fronts"
    rootId={1}
    structure={[
      el('root', 'collections'),
      el('collection', 'articleFragments'),
      el('articleFragment', 'supporting'),
      el('articleFragment')
    ]}
  />,
  document.getElementById('root')
);
