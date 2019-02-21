import es6promise from "es6-promise";
import fetch from "isomorphic-unfetch";
import { put, takeLatest } from "redux-saga/effects";

import { actionTypes, loadDataError, loadDataSucess } from "./actions";

es6promise.polyfill();

function* loadDataSaga() {
  try {
    const res = yield fetch("https://jsonplaceholder.typicode.com/users");
    const data = yield res.json();
    yield put(loadDataSuccess(data));
  } catch (err) {
    yield put(loadDataError(err));
  }
}

export default takeLatest(actionTypes.LOAD_DATA, loadDataSaga);
