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
      el('collection'),
      el('articleFragment'),
      el('articleFragment', 'supporting')
    ]}
  />,
  document.getElementById('root')
);
