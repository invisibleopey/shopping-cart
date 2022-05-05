import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/shopping-cart">
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
