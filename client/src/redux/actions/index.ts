import { all } from "redux-saga/effects";
import { userSagaWorker } from "./user/userActions";

export function* rootSagaWatcher() {
  yield all([...userSagaWorker]);
}
