import React, {
  Component,
  PropTypes,
} from 'react';
import {Router, Route} from 'react-router'

import Home from '../Home';

export default class App extends Component {
  render() {
    const {history} = this.props
    return (
      <Router history={history}>
        <Route
          path="/"
          component={Home}
        />
      </Router>
    )
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired
}
