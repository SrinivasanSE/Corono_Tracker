import { createStore, applyMiddleware } from "redux";
import { reducer } from "../reducers/reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import promise from "redux-promise-middleware";

export const store = createStore(
  reducer,
  applyMiddleware(promise, thunk, logger)
);
