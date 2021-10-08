import { IUserAction, IUserReduce } from "../actions/user/IUser";
import { userTypeAction } from "../actions/user/userActions";

const initialStore: IUserReduce = {
  loading: false,
  data: {},
  error: null,
  isAuthError: null,
};

const userReduce = (
  state: IUserReduce = initialStore,
  action: IUserAction
): IUserReduce => {
  switch (action.type) {
    case userTypeAction.FETCH_USER_SUCCESS:
      return {
        ...state,
        data: { ...state.data, ...action.payload },
      };

    case userTypeAction.SET_LOADING_USER:
      return {
        ...state,
        loading: action.payload,
      };
    case userTypeAction.FETCH_USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case userTypeAction.SET_IS_AUTH_ERROR:
      return {
        ...state,
        isAuthError: action.payload,
      };
    case userTypeAction.CLEAR_DATA:
      return {
        ...state,
        data: initialStore.data,
      };

    default:
      return { ...state };
  }
};

export default userReduce;
