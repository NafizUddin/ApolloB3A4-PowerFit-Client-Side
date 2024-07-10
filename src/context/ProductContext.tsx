import { createContext } from "react";
import { TProduct } from "../types/productType";

export type TProductContextProps = {
  products: TProduct[];
  isLoading: boolean;
};

const ProductContext = createContext<TProductContextProps>({
  products: [],
  isLoading: false,
});

export default ProductContext;
