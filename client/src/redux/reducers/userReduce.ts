import { IUserAction, IUserReduce } from "../actions/user/IUser";
import { userTypeAction } from "../actions/user/userActions";

const initialStore: IUserReduce = { loading: false, data: {}, error: null };

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

    default:
      return { ...state };
  }
};

export default userReduce;
