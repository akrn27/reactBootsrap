import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StateProps from './components/state-and-props/StateProps';
import Map from './components/map/Map';
import Lifecycle from './components/lifecycle/Lifecycle';

import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './components/crud';

ReactDOM.render(
  <React.StrictMode>
    <Crud />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
