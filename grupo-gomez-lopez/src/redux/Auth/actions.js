import { GET_LOGIN, SET_LOGIN } from "./types";

export const showIsLog = () => {
  return {
    type: GET_LOGIN,
  };
};

export const setIsLoading = () => {
  return {
    type: SET_LOGIN,
    isLogged: true,
  };
};

export const setIsLoadingFalse = () => {
  return {
    type: SET_LOGIN,
    isLogged: false,
  };
};
