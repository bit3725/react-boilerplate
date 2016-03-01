import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux'

import sample from './sample';
import query from './query';

const rootReducer = combineReducers({
  sample,
  query,
  routing,
});

export default rootReducer;
