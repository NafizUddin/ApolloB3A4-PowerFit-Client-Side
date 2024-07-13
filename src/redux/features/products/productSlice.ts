import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TProductRedux = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type TInitialState = {
  product: TProductRedux[];
};

const initialState: TInitialState = {
  product: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<TProductRedux>) => {
      state.product.push({ ...action.payload });
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
