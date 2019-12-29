import { actionCreator } from "./generator-action";

import { SET_USER } from "./action-types";

export const dispatchUserInfo = (data: any) => async dispatch =>
  actionCreator(SET_USER, data, dispatch);
