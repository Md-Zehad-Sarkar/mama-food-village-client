import { combineReducers } from "@reduxjs/toolkit";
import baseApi from "./api/baseApi";
import userSlice from "./features/userSlice";

// export const rootReducer = {
//   [baseApi.reducerPath]: baseApi.reducer,
//   user: userSlice,
// };

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  user: userSlice,
});
