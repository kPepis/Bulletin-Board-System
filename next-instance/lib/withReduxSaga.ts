import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
  // store.sagaTask = sagaMiddleware.run(rootSaga);
  return createStore(
    rootReducer,
    initialState,
    // composeWithDevTools(),
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );
}

// export default function(BaseComponent: React.ComponentType<any>) {
//   return withRedux(configureStore)(nextReduxSaga(BaseComponent));
// }
