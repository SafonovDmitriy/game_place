import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchUserApi,
  logOutApi,
  signInApi,
  signUpApi,
} from "../../../api/httpService";
import { IForm, ISIGN_IN_USER, ISIGN_UP_USER, IUser } from "./IUser";

export enum userTypeAction {
  FETCH_USER = "FETCH_USER",
  FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
  FETCH_USER_ERROR = "FETCH_USER_ERROR",
  SET_LOADING_USER = "SET_LOADING_USER",
  SIGN_IN_USER = "SIGN_IN_USER",
  SIGN_UP_USER = "SIGN_UP_USER",
  SET_IS_AUTH_ERROR = "SET_IS_AUTH_ERROR",
  LOGOUT = "LOGOUT",
  CLEAR_DATA = "CLEAR_DATA",
}

export const userSagaWorker = [
  takeEvery(userTypeAction.FETCH_USER, fetchUserAction),
  takeEvery(userTypeAction.SIGN_IN_USER, signInUserAction),
  takeEvery(userTypeAction.SIGN_UP_USER, signUpUserAction),
  takeEvery(userTypeAction.LOGOUT, logOutAction),
];

export const userFetch = () => ({
  type: userTypeAction.FETCH_USER,
});
export const dataClear = () => ({
  type: userTypeAction.CLEAR_DATA,
});

export const setIsAuthError = (payload: boolean) => ({
  type: userTypeAction.SET_IS_AUTH_ERROR,
  payload,
});
export const userFetchSuccess = (payload: IUser) => ({
  type: userTypeAction.FETCH_USER_SUCCESS,
  payload,
});

export const userFetchError = (payload: string | null) => ({
  type: userTypeAction.FETCH_USER_ERROR,
  payload,
});

export const setLoadingFlag = (payload: boolean) => ({
  type: userTypeAction.SET_LOADING_USER,
  payload,
});
export const signInAuth = (payload: IForm) => ({
  type: userTypeAction.SIGN_IN_USER,
  payload,
});
export const signUpAuth = (payload: IForm) => ({
  type: userTypeAction.SIGN_UP_USER,
  payload,
});

export const logOut = () => ({
  type: userTypeAction.LOGOUT,
});

function* fetchUserAction() {
  yield put(setLoadingFlag(true));
  try {
    const { data } = yield call(fetchUserApi);
    const { user } = data;
    yield put(userFetchSuccess(user));
    yield put(userFetchError(null));
    yield put(setIsAuthError(false));
  } catch (error) {
    yield put(setIsAuthError(true));
  } finally {
    yield put(setLoadingFlag(false));
  }
}
function* signInUserAction(action: ISIGN_IN_USER) {
  try {
    yield call(signInApi, action.payload);
    const { data } = yield call(fetchUserApi);
    const { user } = data;
    yield put(userFetchSuccess(user));
    yield put(userFetchError(null));
    yield put(setIsAuthError(false));
  } catch (error) {
    yield call(setError, error);
  }
}
function* signUpUserAction(action: ISIGN_UP_USER) {
  try {
    yield call(signUpApi, action.payload);
    const { data } = yield call(fetchUserApi);
    const { user } = data;
    yield put(userFetchSuccess(user));
    yield put(userFetchError(null));
    yield put(setIsAuthError(false));
  } catch (error) {
    yield call(setError, error);
  }
}
function* logOutAction() {
  try {
    yield call(logOutApi);
    yield put(userFetchError(null));
    yield put(setIsAuthError(true));
    yield put(dataClear());
  } catch (error) {
    yield call(setError, error);
  }
}

function* setError(error: any) {
  if (error.response) {
    const { message } = error.response.data;
    yield put(userFetchError(message));
  }
}
