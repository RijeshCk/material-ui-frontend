import React from 'react';
import ReactDOM from 'react-dom';
import Main from './mainbar.jsx';
import DialogExampleSimple from './signup.jsx';
import './index.css';

ReactDOM.render(
  <Main/>,
  document.getElementById('app')
);
ReactDOM.render(
  <DialogExampleSimple/>,
  document.getElementById('app2')
);