import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";

// const sagaMiddleware = createSagaMiddleware();
// onlineUsers = [boardId: string, onlineUsers: User[]]

export default function configureStore(initialState = {onlineUsers: []}) {
  // store.sagaTask = sagaMiddleware.run(rootSaga);
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(),
    // composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );
}
