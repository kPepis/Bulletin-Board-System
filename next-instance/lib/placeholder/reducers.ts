import { Action } from "redux";

import { actionTypes } from "./actions";

export const initialState = {
  data: null,
  error: false,
};

interface IAction extends Action {
  data?: any;
  error?: any;
}

function reducer(state = initialState, action: IAction) {
  switch (action.type) {
    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ data: action.data },
      };

    case actionTypes.LOAD_DATA_ERROR:
      return {
        ...state,
        ...{ error: action.error },
      };

    default:
      return state;
  }
}

export default reducer;
