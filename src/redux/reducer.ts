import { combineReducers } from "@reduxjs/toolkit";
import baseApi from "./api/baseApi";
import userSlice from "./features/userSlice";
import whiteListSlice from "./features/whiteListSlice";
import cartSlice from "./features/cartSlice";

// export const rootReducer = {
//   [baseApi.reducerPath]: baseApi.reducer,
//   user: userSlice,
// };

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  user: userSlice,
  whiteListProducts: whiteListSlice,
  carts: cartSlice,
});
