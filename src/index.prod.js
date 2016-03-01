import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory} from 'react-router';

import App from './containers/App';
import store from './store/index.prod';

ReactDOM.render(
  <Provider store={store}>
    <App history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
