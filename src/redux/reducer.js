import { combineReducers } from "redux";
import clothsReducer from "./cloths/clothsReducer";

export const rootReducer = combineReducers({
  cloths: clothsReducer,
});

export default rootReducer;
