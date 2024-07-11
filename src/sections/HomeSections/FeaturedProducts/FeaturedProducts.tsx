import { TProduct } from "@/types/productType";
import FeaturedProductLoading from "../../../components/FeaturedProductLoading/FeaturedProductLoading";
import HomeProductCard from "../../../components/HomeProductCard/HomeProductCard";
import { useContext, useEffect } from "react";
import ProductContext from "../../../context/ProductContext";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const { products, isLoading } = useContext(ProductContext);

  const featuredProducts = products?.slice(0, 8);

  return (
    <div className="mb-28 mx-7 md:mx-8 xl:mx-0">
      <h1 className="text-3xl lg:text-4xl text-[#033955] border-l-[10px] border-[#e08534] pl-2 font-bold">
        Our Best Sellers
      </h1>
      <div className="mt-10">{isLoading && <FeaturedProductLoading />}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mt-16">
        {featuredProducts?.map((singleProduct: TProduct) => (
          <HomeProductCard key={singleProduct?._id} {...singleProduct} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-14">
        <Link to="/products">
          <button className="bg-[#e08534] text-white font-bold py-2 px-4 rounded btn-custom">
            View All Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProducts;
