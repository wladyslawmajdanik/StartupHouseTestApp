import { Issue } from '../../config/Axios';
import { ActionCreator } from 'redux';
import { IssueActionTypes } from './actionTypes';

export const GET_ISSUES = 'GET_ISSUES';
export const GET_ISSUES_SUCCESS = 'GET_ISSUES_SUCCESS';
export const GET_ISSUES_ERROR = 'GET_ISSUES_ERROR';

export const getIssuesAction: ActionCreator<IssueActionTypes> = (page: number) => {
  return {
    type: GET_ISSUES,
    payload: { page },
  };
};
export const getIssuesSuccess: ActionCreator<IssueActionTypes> = (payload: Issue[]) => {
  return {
    type: GET_ISSUES_SUCCESS,
    payload,
  };
};
export const getIssuesError: ActionCreator<IssueActionTypes> = (payload: Error | string) => {
  return {
    type: GET_ISSUES_ERROR,
    payload,
  };
};
