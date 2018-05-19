import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import model from './model';

ReactDOM.render(
  <App normalizedData={model} frontId={1} />,
  document.getElementById('root')
);
