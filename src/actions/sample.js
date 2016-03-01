import {
  FETCH_SAMPLE,
  RECEIVE_SAMPLE,
} from './types';

export function fetchSample(query) {
  return {
    type: FETCH_SAMPLE,
    query
  }
}

export function receiveSample(sample) {
  return {
    type: RECEIVE_SAMPLE,
    sample
  }
}
