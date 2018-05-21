import React from 'react';
import ReactDOM from 'react-dom';
import Collection from './Collection';
import model from './model';

ReactDOM.render(
  <Collection
    normalizedData={model}
    rootKey="fronts"
    rootId={1}
    structure={[
      {
        childrenKey: 'collections',
        modelKey: 'collections'
      },
      {
        childrenKey: 'articleFragments',
        modelKey: 'articleFragments'
      },
      {
        childrenKey: 'supporting',
        modelKey: 'articleFragments'
      }
    ]}
  />,
  document.getElementById('root')
);
