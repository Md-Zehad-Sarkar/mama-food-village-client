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

      const existingProduct = state.products.find(
        (product) => product._id === products?._id
      );

      if (!existingProduct) {
        state.products.push({ ...products });
      }
    },

    removeWhiteListProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
  },
});

export const { addWhiteListedProduct, removeWhiteListProduct } =
  whiteListSlice.actions;
export default whiteListSlice.reducer;
