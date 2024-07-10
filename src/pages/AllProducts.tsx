import SectionTitle from "../components/sectionTitle/SectionTitle";
import fitnessImg from "../assets/fitness.png";
import { useGetProductsQuery } from "../redux/features/products/productsApi";
import FeaturedProductLoading from "../components/FeaturedProductLoading/FeaturedProductLoading";
import { FormEvent, useEffect, useState } from "react";
import { FaSort } from "react-icons/fa";
import { TProduct } from "../types/productType";
import HomeProductCard from "../components/HomeProductCard/HomeProductCard";

const AllProducts = () => {
  const [selectedSort, setSelectedSort] = useState("all");
  const [queryObj, setQueryObj] = useState({ sort: selectedSort });

  const { data: productsResponse, isLoading } = useGetProductsQuery(queryObj);
  const allProducts = productsResponse?.data;

  const handleSelectChange = (event: FormEvent) => {
    // Update the state with the selected value
    setSelectedSort(event.target.value);
  };

  useEffect(() => {
    // Update queryObj whenever selectedSort changes
    setQueryObj({ sort: selectedSort });
  }, [selectedSort]);

  return (
    <div className="mt-8">
      <SectionTitle
        sub="Ultimate Fitness Gear"
        heading="Explore Our Collection"
        description="Discover the complete range of PowerFit accessories designed to enhance your workout experience and achieve your fitness goals."
      />

      <div>
        {isLoading ? (
          <FeaturedProductLoading />
        ) : (
          <div>
            {allProducts?.length > 0 ? (
              <div className="mt-14 grid grid-cols-1 lg:grid-cols-6 gap-6 xl:mx-0 mx-6">
                <div className="lg:col-span-2 pb-8 mb-7 px-5 rounded-md">
                  {/* SearchBar starts */}
                  <form className="max-w-md mx-auto">
                    <label
                      htmlFor="default-search"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-[#033955]"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-[#033955] focus:border-[#033955]"
                        placeholder="Search Products..."
                        required
                      />
                      <button
                        type="submit"
                        className="text-white absolute end-2.5 bottom-2.5 bg-[#e08534] hover:bg-[#c3732c] font-medium rounded-lg text-sm px-4 py-2"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                  {/* SearchBar ends */}
                  <div className="my-6">
                    <img src="https://demo.ishithemes.com/opencart/OPC162/OPC162/image/cache/catalog/other/Left-banner-367x416.png" />
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <div>
                    <div className="w-full flex justify-start items-center text-xl mt-3 font-semibold">
                      <FaSort />
                      <select
                        value={selectedSort}
                        onChange={handleSelectChange}
                      >
                        <option value="all">Sort By Price</option>
                        <option value="ascending">Low to High</option>
                        <option value="descending">High to Low</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                    {allProducts?.map((singleProduct: TProduct) => (
                      <HomeProductCard
                        key={singleProduct?._id}
                        {...singleProduct}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center flex-col lg:py-14">
                <div className="">
                  <img src={fitnessImg} className="w-52" />
                </div>
                <p className="max-w-xl text-center text-4xl font-bold mt-6 mb-24">
                  Sorry, Products Unavailable.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
