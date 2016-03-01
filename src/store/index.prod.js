import {createStore, applyMiddleware} from 'redux';

import rootReducer from '../reducers/index.prod';
import sagaMiddleware from '../sagas';

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

export default store;
