import React from 'react';
import Route from 'react-router';

import App from './pages/App/App';

export default  function getRoutes () {
  return (
    <Route component={App}></Route>
  );
}