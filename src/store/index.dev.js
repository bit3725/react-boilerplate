import {createStore, applyMiddleware, compose} from 'redux';

import rootReducer from '../reducers/index.dev';
import sagaMiddleware from '../sagas';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

module.hot.accept('../reducers/index.dev', () => {
  System.import('../reducers/index.dev')
    .then(nextRootReducer => {
      const rootReducer = nextRootReducer.default;
      store.replaceReducer(rootReducer)
    });
});

export default store;
