import { TProduct } from "@/types/productType";
import FeaturedProductLoading from "../../../components/FeaturedProductLoading/FeaturedProductLoading";
import { useGetProductsQuery } from "../../../redux/features/products/productsApi";

const FeaturedProducts = () => {
  const { data: products, isLoading } = useGetProductsQuery(undefined);

  const featuredProducts = products?.data.slice(0, 8);

  console.log(featuredProducts);

  return (
    <div className="mb-28 mx-7 md:mx-8 xl:mx-0">
      <h1 className="text-3xl lg:text-4xl text-[#033955] border-l-[10px] border-[#e08534] pl-2 font-bold">
        Our Best Sellers
      </h1>
      <div>{isLoading && <FeaturedProductLoading />}</div>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {featuredProducts.map((singleProduct: TProduct) => (
          <div>
            <h1>{singleProduct?.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
