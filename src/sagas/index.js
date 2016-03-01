import createSagaMiddleware from 'redux-saga';

import {watchSample} from './sample';

const sagaMiddleware = createSagaMiddleware(
  watchSample
);
export default sagaMiddleware;
