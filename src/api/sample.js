import 'isomorphic-fetch'

import {API_ROOT} from './consts';

export function fetchSample(query) {
  return fetch(`${API_ROOT}?q=${query}`);
}
