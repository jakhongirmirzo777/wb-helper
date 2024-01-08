import { combineReducers } from "redux";
import { commonApi } from "./api/api";
import advertReducer from "./slices/advert";
import regionReducer from "./slices/region";

const rootReducer = combineReducers({
  advert: advertReducer,
  region: regionReducer,
  [commonApi.reducerPath]: commonApi.reducer,
});

export default rootReducer;
