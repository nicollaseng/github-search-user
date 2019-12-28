import { createAction } from "redux-actions";
import { setProperties } from "../functions/setProperty";

const SET_USER = "SET_USER";

export const setUser = createAction(SET_USER, setProperties);
