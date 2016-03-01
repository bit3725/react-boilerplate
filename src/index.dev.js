import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import store from './store/index.dev';

const history = syncHistoryWithStore(browserHistory, store);
const rootElement = document.getElementById('root');
const hotRender = () => {
  try {
    System.import('./containers/App')
      .then(App => {
        const AppContainer = App.default;
        ReactDOM.render(
          <Provider store={store}>
            <AppContainer history={history} />
          </Provider>,
          rootElement
        );
      });
  } catch(error) {
    System.import('redbox-react')
      .then(RedBox => {
        ReactDOM.render(
          <RedBox error={error} />,
          rootElement
        )
      });
  }
}

module.hot.accept(
  './containers/App',
  () => {
    setTimeout(() => {
      hotRender();
    });
  }
);
hotRender();
