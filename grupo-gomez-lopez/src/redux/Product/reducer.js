import {
  SHOW_PRODUCTS,
  SET_PRODUCTS,
  SHOW_ONE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  SET_ISLOADING,
  DISMISS_ISLOADING,
} from './types';

const INITIAL_STATE = {
  isLoadingProducts: false,
  product: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_PRODUCTS:
      return {
        ...state,
        product: action.payload,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        product: action.payload,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case SET_ISLOADING:
      return {
        ...state,
        isLoadingProducts: true,
      };
    case DISMISS_ISLOADING:
      return {
        ...state,
        isLoadingProducts: false,
      };

    default:
      return state;
  }
};

export default reducer;
