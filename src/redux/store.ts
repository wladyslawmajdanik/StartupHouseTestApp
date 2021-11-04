import { applyMiddleware, combineReducers, createStore } from "redux";
import { issueReducer } from "./reducers/reducers";
import createSagaMiddleware from "redux-saga";
import { issuesSaga } from "./saga/sagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  issues: issueReducer
});
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(issuesSaga);

