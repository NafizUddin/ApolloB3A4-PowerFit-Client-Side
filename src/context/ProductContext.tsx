import { createContext } from "react";
import { TProduct } from "../types/productType";

export type TProductContextProps = {
  products: TProduct[];
  isLoading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setQueryObj: (queryObj: any) => void;
};

const ProductContext = createContext<TProductContextProps>({
  products: [],
  isLoading: false,
  setQueryObj: () => {},
});

export default ProductContext;
