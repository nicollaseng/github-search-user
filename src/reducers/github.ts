import { ActionType } from "../ts/types";

const initialState = {
  user: null,
  error: false,
  loading: false
};

export default function(state = initialState, action: ActionType) {
  console.log(action);
  const resolveReducer = (...args) => {
    const [payload, ...rest] = args;
    return { ...state, ...payload };
  };

  switch (action.type) {
    case "SET_USER":
      return resolveReducer({ user: action.payload });
    default:
      return state;
  }
}
