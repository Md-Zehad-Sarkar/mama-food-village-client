import { createSlice } from "@reduxjs/toolkit";

type TCart = {
  _id: string;
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  quantity?: number;
};

type TCartState = {
  cart: TCart[];
};

const initialCartState: TCartState = {
  cart: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.findIndex(
        (cart) => cart._id === action.payload._id
      );

      if (existingItem !== -1) {
        state.cart[existingItem].quantity! += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
