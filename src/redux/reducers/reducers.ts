import { GET_ISSUES, GET_ISSUES_ERROR, GET_ISSUES_SUCCESS } from "../actions/actions";
import { Issue } from "../../config/Axios";
import { IssueActionTypes } from "../actions/actionTypes";

export interface RootState {
  issues: IssueState;
}

export interface IssueState {
  issues: Issue[],
  page: number,
  pending: boolean,
  error: Error | string | null
}

const initialState: IssueState = {
  issues: [],
  page: 1,
  pending: false,
  error: null
};

export function issueReducer(state: IssueState = initialState, action: IssueActionTypes) {
  switch (action.type) {
    case GET_ISSUES:
      return {
        ...state,
        pending: true
      };
    case GET_ISSUES_SUCCESS:
      return {
        ...state,
        issues: [...state.issues, ...action.payload],
        error: false,
        pending: false,
        page: state.page + 1
      };
    case GET_ISSUES_ERROR:
      return {
        ...state,
        pending: false,
        error: true
      };
    default:
      return state;
  }
}
