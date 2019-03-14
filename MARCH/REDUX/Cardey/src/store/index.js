import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers";
import createSagaMiddleware from "redux-saga";
import { watchFetchUserProfile } from "../sagas";
import logger from "redux-logger";

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(watchFetchUserProfile);

export default store;
