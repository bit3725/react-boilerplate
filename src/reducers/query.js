import {UPDATE_QUERY} from '../actions/types';

export default function query(
  state='test',
  action
) {
  switch (action.type) {
    case UPDATE_QUERY:
      return action.query;

    default:
      return state;
  }
}
