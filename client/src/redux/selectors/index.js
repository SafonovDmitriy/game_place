/* eslint-disable no-unused-vars */
import { get } from "lodash";
export const isUserSelector = (state) => !!Object.keys(state.user.data).length;
