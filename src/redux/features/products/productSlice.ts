import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TProductRedux = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  inStock: number;
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
    removeProduct: (state, action: PayloadAction<string>) => {
      state.product = state.product.filter(
        (item) => item.id !== action.payload
      );
    },
    updateProduct: (
      state,
      action: PayloadAction<{ id: string; updatedData: Partial<TProductRedux> }>
    ) => {
      const { id, updatedData } = action.payload;
      state.product = state.product.map((product) =>
        product.id === id ? { ...product, ...updatedData } : product
      );
    },
  },
});

export const { addProduct, removeProduct, updateProduct } =
  productSlice.actions;

export default productSlice.reducer;