/* eslint-disable  */
import axios, { AxiosInstance, CancelTokenSource } from "axios";
import { IForm } from "../redux/actions/user/IUser";

export const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_URL_SERVER,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

interface IRequest {
  url: string;
  method?: "get" | "delete" | "post" | "put" | "patch";
  props?: { [k: string]: any };
}
interface IRequestCancel extends IRequest {
  cancelToken: CancelTokenSource;
}

export const request = ({ url, method = "get", props = {} }: IRequest) => {
  return instance[method](url, props);
};
export const requestCancel = ({
  url,
  method = "get",
  cancelToken,
  props = {},
}: IRequestCancel) => {
  return instance[method](url, {
    cancelToken: cancelToken.token,
    ...props,
  });
};
const createCancelToken = () => {
  // it was like this let cancelToken: CancelTokenSource = new axios.CancelToken.source()
  let cancelToken: CancelTokenSource = axios.CancelToken.source();
  return () => {
    if (cancelToken) cancelToken.cancel("");
    cancelToken = axios.CancelToken.source();
    return cancelToken;
  };
};
//example how use CancelToken
// const instanceWithToken = createCancelToken();
// const request_name = () =>
//   requestCancel({
//     url
//     cancelToken: instanceWithToken(),
//   });
export const fetchUserApi = () => request({ url: "/api/users" });
export const signInApi = (form: IForm) =>
  request({
    url: "/api/auth/authorization",
    props: {
      params: form,
    },
  });
export const signUpApi = (form: IForm) =>
  request({
    url: "/api/auth/registration",
    method: "post",
    props: form,
  });
