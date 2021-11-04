import { Issue } from '../../config/Axios';
import { GET_ISSUES, GET_ISSUES_ERROR, GET_ISSUES_SUCCESS } from './actions';

export interface GetIssuesAction {
  type: typeof GET_ISSUES;
  payload: { page: number };
}

export interface GetIssuesSuccess {
  type: typeof GET_ISSUES_SUCCESS;
  payload: Issue[];
}

export interface GetIssuesError {
  type: typeof GET_ISSUES_ERROR;
  payload: Error | string | null;
}

export type IssueActionTypes = GetIssuesAction | GetIssuesSuccess | GetIssuesError;
