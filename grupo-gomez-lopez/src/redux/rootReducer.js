import { combineReducers } from "redux";

import productReducer from "./Product/reducer";
import isLoggedReducer from "./Auth/reducer";

const rootReducer = combineReducers({
  product: productReducer,
  isLog: isLoggedReducer,
});

export default rootReducer;
