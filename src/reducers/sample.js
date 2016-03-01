import {RECEIVE_SAMPLE} from '../actions/types';

export default function sample(
  state=[],
  action
) {
  switch (action.type) {
    case RECEIVE_SAMPLE:
      return action.sample;

    default:
      return state;
  }
}
