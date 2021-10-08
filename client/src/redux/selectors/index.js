/* eslint-disable no-unused-vars */
import { get } from "lodash";
export const userSelector = (state) => state.user.data;
export const isUserSelector = (state) => !!Object.keys(state.user.data).length;
export const userLoadingSelectro = (state) => state.user.loading;
export const userFetchErrorSelector = (state) => state.user.error;
export const isAuthErrorSelector = (state) => state.user.isAuthError;
