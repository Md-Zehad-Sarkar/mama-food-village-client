import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TInitialProduct = {
  _id?: string;
  id?: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  ratings?: string;
  quantity?: number;
};

type TProducts = {
  products: TInitialProduct[];
};

const initialProducts: TProducts = {
  products: [],
};

const whiteListSlice = createSlice({
  name: "whiteListProducts",
  initialState: initialProducts,
  reducers: {
    addWhiteListedProduct: (state, action: PayloadAction<TInitialProduct>) => {
      const products = action.payload;

      const existingProduct = state.products.findIndex(
        (product) => product._id === products?._id
      );

      if (existingProduct !== -1) {
        state.products[existingProduct].quantity =
          (state.products[existingProduct].quantity || 0) + 1;
      } else {
        state.products.push({ ...products, quantity: 1 });
      }
    },
  },
});

export const { addWhiteListedProduct } = whiteListSlice.actions;
export default whiteListSlice.reducer;
