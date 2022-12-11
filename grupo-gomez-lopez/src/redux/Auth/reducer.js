import { GET_LOGIN, SET_LOGIN } from "./types";

const INITIAL_STATE = {
  isLogged: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        isLogged: true,
      };
    case GET_LOGIN:
      return {
        ...state,
        isLogged: false,
      };

    default:
      return state;
  }
};

export default reducer;
