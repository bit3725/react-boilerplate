import {combineReducers} from 'redux';

import sample from './sample';
import query from './query';

const rootReducer = combineReducers({
  sample,
  query,
});

export default rootReducer;
