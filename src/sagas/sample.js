import {takeEvery} from 'redux-saga';
import {call, put, select} from 'redux-saga/effects';

import {fetchSample} from '../api';
import {getQuerySelector} from './selectors';
import {receiveSample} from '../actions';
import {FETCH_SAMPLE} from '../actions/types';

function* fetchSampleSaga() {
  try {
    const query = yield select(getQuerySelector);
    const response = yield call(fetchSample, query);
    yield put(receiveSample([response]));
  } catch(error) {
    yield put(receiveSample([]))
  }
}

export function* watchSample() {
  yield* takeEvery(FETCH_SAMPLE, fetchSampleSaga);
}
