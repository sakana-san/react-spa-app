import React from 'react';
import ReactDOM from 'react-dom';
import {Router, match, browserHistory } from 'react-router';
import getRoutes from './routes';


const routes = getRoutes();
const mountNode = document.getElementById('app');

match( {history: browserHistory, routes }, () => {
  ReactDOM.render(<Router {...renderProps} />, mountNode);
});