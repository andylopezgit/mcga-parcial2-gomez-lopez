import {
  SHOW_PRODUCTS,
  SET_PRODUCTS,
  SHOW_ONE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  SET_ISLOADING,
  DISMISS_ISLOADING,
} from "./types";

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: {
      products: products,
    },
  };
};

export const showProducts = (products) => {
  return {
    type: SHOW_PRODUCTS,
    payload: {
      products: products,
    },
  };
};

export const setIsLoading = () => {
  return {
    type: SET_ISLOADING,
    isLoadingProducts: true,
  };
};

export const dismissIsLoading = () => {
  return {
    type: DISMISS_ISLOADING,
    isLoadingProducts: false,
  };
};
