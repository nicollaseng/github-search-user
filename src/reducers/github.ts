import { ActionType } from "../ts/types";
import { SET_USER } from "../actions/action-types";

const initialState = {
  user: null,
  error: false,
  loading: false
};

export default function(state = initialState, action: ActionType) {
  const resolveReducer = (...args) => {
    const [payload] = args;
    return { ...state, ...payload };
  };

  switch (action.type) {
    case SET_USER:
      return resolveReducer({ user: action.payload });
    default:
      return state;
  }
}
