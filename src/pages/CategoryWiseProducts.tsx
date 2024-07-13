import FeaturedProductLoading from "../components/FeaturedProductLoading/FeaturedProductLoading";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoIosPricetags } from "react-icons/io";
import Slider from "react-slider";
import { FaSort } from "react-icons/fa";
import HomeProductCard from "../components/HomeProductCard/HomeProductCard";
import { TProduct } from "../types/productType";
import fitnessImg from "../assets/fitness.png";
import { useGetProductsQuery } from "../redux/features/products/productsApi";
import useWarnIfCartNotEmpty from "../CustomHooks/useWarnIfCartNotEmpty";

const CategoryWiseProducts = () => {
  useWarnIfCartNotEmpty();
  const { category } = useParams();

  const [selectedSort, setSelectedSort] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isResetButtonEnabled, setIsResetButtonEnabled] = useState(false);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1200);

  const [queryObj, setQueryObj] = useState({
    sort: selectedSort,
    searchTerm: searchTerm,
    category: category,
    priceRange: {
      minPrice: minValue,
      maxPrice: maxValue,
    },
  });

  const { data: productsResponse, isLoading } = useGetProductsQuery(queryObj);
  const allProducts = productsResponse?.data;

  const handleSelectChange = (event: FormEvent) => {
    // Update the state with the selected value
    setSelectedSort(event.target.value);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchProduct = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // setSearchTerm(event.target.value);
    setIsResetButtonEnabled(true);
    event.target.reset();
  };

  const handleReset = () => {
    setIsResetButtonEnabled(false);
    setMinValue(0);
    setMaxValue(1200);
    setSearchTerm("");
  };

  const handleSliderChange = (values: number[]) => {
    setIsResetButtonEnabled(true);
    setMinValue(values[0]);
    setMaxValue(values[1]);
  };

  useEffect(() => {
    // Update queryObj whenever selectedSort changes
    setQueryObj({
      sort: selectedSort,
      searchTerm: searchTerm,
      category: category,
      priceRange: {
        minPrice: minValue,
        maxPrice: maxValue,
      },
    });
  }, [selectedSort, searchTerm, minValue, maxValue, category]);

  console.log(productsResponse);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="relative h-[300px] md:h-[250px] mb-16 mt-2">
        <img
          src="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute inset-0 object-cover object-center w-full h-full rounded-md"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-70 h-full rounded-md">
          <div className="flex items-center justify-center h-full">
            <h1 className="text-white text-5xl md:text-6xl font-bold">
              {category}
            </h1>
          </div>
        </div>
      </div>

      <div>
        {isLoading ? (
          <FeaturedProductLoading />
        ) : (
          <div>
            {allProducts?.length > 0 ? (
              <div className="mt-14 grid grid-cols-1 lg:grid-cols-6 gap-6 xl:mx-0 mx-6">
                <div className="lg:col-span-2 pb-8 mb-7 px-5 rounded-md">
                  {/* SearchBar starts */}
                  <form
                    onSubmit={handleSearchProduct}
                    className="max-w-md mx-auto"
                  >
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
                        type="text"
                        id="default-search"
                        onBlur={handleInputChange}
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

                  <div className="mt-7 space-y-7">
                    <div className="flex gap-3 items-center">
                      <IoIosPricetags className="text-3xl" />
                      <h1 className="md:text-2xl xl:text-3xl font-semibold">
                        Price
                      </h1>
                    </div>

                    <Slider
                      className="slider"
                      min={0}
                      max={1200}
                      step={1} // adjust step value for finer control
                      value={[minValue, maxValue]}
                      onChange={handleSliderChange}
                    />

                    <p className="xl:text-xl font-medium">
                      Price Range: ${minValue} - ${maxValue}
                    </p>
                  </div>

                  <div className="mt-7">
                    <button
                      onClick={handleReset}
                      disabled={!isResetButtonEnabled}
                      className={`mt-5 px-4 py-2 rounded ${
                        isResetButtonEnabled
                          ? "bg-[#e08534] btn-custom text-white cursor-pointer"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      Reset Filters
                    </button>
                  </div>

                  {/* Category image starts */}
                  <div className="my-6 justify-center items-center">
                    <img
                      src="https://demo.ishithemes.com/opencart/OPC162/OPC162/image/cache/catalog/other/Left-banner-367x416.png"
                      className="md:max-w-lg md:mx-auto object-cover"
                    />
                  </div>
                  {/* Category image ends */}
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

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-10">
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

export default CategoryWiseProducts;
