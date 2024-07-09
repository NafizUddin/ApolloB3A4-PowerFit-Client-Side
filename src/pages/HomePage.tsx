import { useEffect } from "react";
import Banner from "../sections/HomeSections/Banner/Banner";
import ProductCategory from "../sections/HomeSections/Category/ProductCategory";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Banner />
      <ProductCategory />
    </div>
  );
};

export default HomePage;
