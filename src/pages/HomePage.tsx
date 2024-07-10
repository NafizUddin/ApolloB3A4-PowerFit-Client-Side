import { useEffect } from "react";
import Banner from "../sections/HomeSections/Banner/Banner";
import ProductCategory from "../sections/HomeSections/Category/ProductCategory";
import Gallery from "../sections/HomeSections/Gallery/Gallery";
import FeaturedProducts from "../sections/HomeSections/FeaturedProducts/FeaturedProducts";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Banner />
      <ProductCategory />
      <FeaturedProducts />
      <Gallery />
    </div>
  );
};

export default HomePage;
