import { call, put, takeLatest } from 'redux-saga/effects';
import { getIssues, IssueData } from '../../config/Axios';
import { GET_ISSUES, getIssuesError, getIssuesSuccess } from '../actions/actions';
import { GetIssuesAction } from '../actions/actionTypes';

function* fetchIssues(action: GetIssuesAction) {
  try {
    const response: IssueData = yield call(getIssues, action.payload.page);
    yield put(getIssuesSuccess(response.data));
  } catch (e: unknown) {
    if (typeof e === 'string') {
      yield put(getIssuesError(e.toUpperCase()));
    } else if (e instanceof Error) {
      yield put(getIssuesError(e.message));
    }
  }
}

export function* issuesSaga() {
  yield takeLatest(GET_ISSUES, fetchIssues);
}
