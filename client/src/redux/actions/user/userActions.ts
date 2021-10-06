import { call, put, takeEvery } from "redux-saga/effects";
import { fetchUserApi } from "../../../api/httpService";
import { IUser } from "./IUser";

export enum userTypeAction {
  FETCH_USER = "FETCH_USER",
  FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
  FETCH_USER_ERROR = "FETCH_USER_ERROR",
  SET_LOADING_USER = "SET_LOADING_USER",
}

export const userSagaWorker = [
  takeEvery(userTypeAction.FETCH_USER, fetchUserAction),
];

export const userFetch = () => ({
  type: userTypeAction.FETCH_USER,
});

export const userFetchSuccess = (payload: IUser) => ({
  type: userTypeAction.FETCH_USER_SUCCESS,
  payload,
});

export const userFetchError = (payload: string) => ({
  type: userTypeAction.FETCH_USER_ERROR,
  payload,
});

export const setLoadingFlag = (payload: boolean) => ({
  type: userTypeAction.SET_LOADING_USER,
  payload,
});

function* fetchUserAction() {
  yield put(setLoadingFlag(true));
  try {
    const { data } = yield call(fetchUserApi);
    yield console.log(`data`, data);
  } catch (error) {
    yield call(setError, error);
  } finally {
    yield put(setLoadingFlag(false));
  }
}

function* setError(error: any) {
  if (error.response) {
    const { message } = error.response.data;
    yield put(userFetchError(message));
  }
}
