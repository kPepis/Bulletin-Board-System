import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import sagaMiddleware from "redux-saga";

import { reducer } from "./states/announcement/reducer";

export const initStore = initialState => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );
};
