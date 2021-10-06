import { userTypeAction } from "./userActions";

export interface IUserReduce {
  loading: boolean;
  error: string | null;
  data: IUser | {};
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

export interface IUser {
  name: string;
  surname?: string;
  age?: number;
  balance: number;
}
export type IUserAction =
  | IFETCH_USER_SUCCESS
  | ISET_LOADING_USER
  | IFETCH_USER_ERROR;
