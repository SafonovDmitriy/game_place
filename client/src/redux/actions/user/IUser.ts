import { userTypeAction } from "./userActions";

export interface IUserReduce {
  loading: boolean;
  error: string | null;
  data: IUser | {};
  isAuthError: boolean | null;
}

interface IFETCH_USER_SUCCESS {
  type: userTypeAction.FETCH_USER_SUCCESS;
  payload: IUser;
}
interface IFETCH_USER_ERROR {
  type: userTypeAction.FETCH_USER_ERROR;
  payload: string;
}
interface ISET_LOADING_USER {
  type: userTypeAction.SET_LOADING_USER;
  payload: boolean;
}
interface ISET_IS_AUTH_ERROR {
  type: userTypeAction.SET_IS_AUTH_ERROR;
  payload: boolean;
}
export interface ISIGN_IN_USER {
  type: userTypeAction.SIGN_IN_USER;
  payload: IForm;
}
export interface ISIGN_UP_USER {
  type: userTypeAction.SIGN_UP_USER;
  payload: IForm;
}
export interface ICLEAR_DATA {
  type: userTypeAction.CLEAR_DATA;
}

export interface IUser {
  email: string;
  name: string;
  surname?: string;
  age?: number;
  role?: string;
  photo?: string;
  balance: number;
}
export type IUserAction =
  | IFETCH_USER_SUCCESS
  | ISET_LOADING_USER
  | IFETCH_USER_ERROR
  | ISIGN_IN_USER
  | ISIGN_UP_USER
  | ISET_IS_AUTH_ERROR
  | ICLEAR_DATA;

export interface IForm {
  [k: string]: string | boolean;
}
