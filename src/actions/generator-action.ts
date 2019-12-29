type DispatchRedux = (param?: object) => any;

type ActionObject = {
  type: string;
  payload: any;
  dispatch: DispatchRedux;
};

export const actionCreator = (
  type: string,
  payload: any,
  dispatch: DispatchRedux
): ActionObject => dispatch({ type, payload });
