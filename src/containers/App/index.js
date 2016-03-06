import React, {PropTypes} from 'react';
import {Router, Route} from 'react-router'

import Home from '../Home';

const App = ({history}) => {
  return (
    <Router history={history}>
      <Route
        path="/"
        component={Home}
      />
    </Router>
  );
}

App.propTypes = {
  history: PropTypes.object.isRequired
}

export default App;
