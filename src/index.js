import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import model from './model';

const el = (
  childrenType,
  childrenKey = `${childrenType}s`,
  modelKey = `${childrenType}s`
) => ({
  childrenType,
  modelKey,
  childrenKey
});

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
