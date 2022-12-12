import { GET_LOGIN, SET_LOGIN, SET_LOGIN_OUT } from "./types";

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

    case SET_LOGIN_OUT:
      return {
        ...state,
        isLogged: false,
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
