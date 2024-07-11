import { useEffect } from "react";
import Banner from "../sections/HomeSections/Banner/Banner";
import ProductCategory from "../sections/HomeSections/Category/ProductCategory";
import Gallery from "../sections/HomeSections/Gallery/Gallery";
import FeaturedProducts from "../sections/HomeSections/FeaturedProducts/FeaturedProducts";
import { useGetProductsQuery } from "../redux/features/products/productsApi";
import ProductContext from "../context/ProductContext";

const HomePage = () => {
  const queryObj = {
    sort: "",
    searchTerm: "",
    categories: "",
  };

  const { data: productsResponse, isLoading } = useGetProductsQuery(queryObj);

  const products = productsResponse?.data;

  const value = { products, isLoading };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProductContext.Provider value={value}>
      <div>
        <Banner />
        <ProductCategory />
        <FeaturedProducts />
        <Gallery />
      </div>
    </ProductContext.Provider>
  );
};

export default HomePage;
