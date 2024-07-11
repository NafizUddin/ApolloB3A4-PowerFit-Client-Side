import { useContext, useEffect } from "react";
import ProductContext from "../../../context/ProductContext";
import FeaturedProductLoading from "../../../components/FeaturedProductLoading/FeaturedProductLoading";
import BenefitCard from "../../../components/BenefitProductCard/BenefitCard";
import { TProduct } from "../../../types/productType";

const BenefitProduct = () => {
  const { products, isLoading, setQueryObj } = useContext(ProductContext);
  const featuredProducts = products?.slice(0, 8);

  useEffect(() => {
    setQueryObj({ sort: "descending" });
  }, [setQueryObj]);

  return (
    <div className="mb-28 mx-7 md:mx-8 xl:mx-0">
      <h1 className="text-3xl lg:text-4xl text-[#033955] border-l-[10px] border-[#e08534] pl-2 font-bold">
        Top Product Perks
      </h1>
      <div className="mt-10">{isLoading && <FeaturedProductLoading />}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-16">
        {featuredProducts?.map((singleProduct: TProduct, index) => (
          <BenefitCard key={index} {...singleProduct} />
        ))}
      </div>
    </div>
  );
};

export default BenefitProduct;
