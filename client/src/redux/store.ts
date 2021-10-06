import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { rootSagaWatcher } from "./actions";
import userReduce from "./reducers/userReduce";

const saga = createSagaMiddleware();
const reducers = combineReducers({
  user: userReduce,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(saga)));
saga.run(rootSagaWatcher);
export type RootType = ReturnType<typeof reducers>;
export default store;
