import SectionTitle from "../components/sectionTitle/SectionTitle";
import fitnessImg from "../assets/fitness.png";
import { useGetProductsQuery } from "../redux/features/products/productsApi";
import FeaturedProductLoading from "../components/FeaturedProductLoading/FeaturedProductLoading";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FaSort } from "react-icons/fa";
import { TProduct } from "../types/productType";
import HomeProductCard from "../components/HomeProductCard/HomeProductCard";
import categoryJson from "../jsons/productCategory.json";
import { BiCategoryAlt } from "react-icons/bi";
import Slider from "react-slider";
import { IoIosPricetags } from "react-icons/io";
import "../layouts/mainLayout/MainLayout.css";
import useWarnIfCartNotEmpty from "../CustomHooks/useWarnIfCartNotEmpty";

const AllProducts = () => {
  useWarnIfCartNotEmpty();
  const [selectedSort, setSelectedSort] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isResetButtonEnabled, setIsResetButtonEnabled] = useState(false);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1200);

  // for pagination
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [checkedState, setCheckedState] = useState(
    categoryJson.reduce((acc, category) => {
      acc[category?.categoryName] = false;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const [queryObj, setQueryObj] = useState({
    sort: selectedSort,
    searchTerm: searchTerm,
    categories: checkedState,
    priceRange: {
      minPrice: minValue,
      maxPrice: maxValue,
    },
    page: currentPage,
    limit: itemsPerPage,
  });

  const {
    data: productsResponse,
    isLoading,
    refetch,
  } = useGetProductsQuery(queryObj);
  const allProducts = productsResponse?.data;
  const meta = productsResponse?.meta;
  const totalPagesArray = [...Array(meta?.totalPage || 1).keys()];

  const handleSelectChange = (event: FormEvent) => {
    const target = event.target as HTMLSelectElement;
    setSelectedSort(target.value);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchProduct = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsResetButtonEnabled(true);
    event.currentTarget.reset();
  };

  const handleCheckboxChange = (categoryName: string) => {
    setCheckedState((prevState) => {
      const newState = {
        ...prevState,
        [categoryName]: !prevState[categoryName],
      };
      setIsResetButtonEnabled(
        Object.values(newState).some((checked) => checked)
      );
      return newState;
    });
  };

  const handleReset = () => {
    const resetState = Object.keys(checkedState).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {} as Record<string, boolean>);
    setCheckedState(resetState);
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

  const handleCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = async () => {
    if (currentPage < totalPagesArray.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    // Update queryObj whenever selectedSort changes
    setQueryObj({
      sort: selectedSort,
      searchTerm: searchTerm,
      categories: checkedState,
      priceRange: {
        minPrice: minValue,
        maxPrice: maxValue,
      },
      page: currentPage,
      limit: itemsPerPage,
    });
    refetch();
  }, [
    selectedSort,
    searchTerm,
    checkedState,
    minValue,
    maxValue,
    currentPage,
    refetch,
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

                  {/*All Category starts */}
                  <div className="mt-7">
                    <div className="flex gap-3 items-center">
                      <BiCategoryAlt className="text-3xl" />
                      <h1 className="text-xl md:text-2xl xl:text-3xl font-semibold">
                        Categories
                      </h1>
                    </div>

                    <div className="flex flex-col gap-3 mt-5">
                      {categoryJson?.map((singleCategory) => (
                        <div key={singleCategory.categoryName}>
                          <label className="inline-flex items-center">
                            <input
                              type="checkbox"
                              className="hidden"
                              checked={
                                checkedState[singleCategory.categoryName]
                              }
                              onChange={() =>
                                handleCheckboxChange(
                                  singleCategory.categoryName
                                )
                              }
                            />
                            <span
                              className={`w-6 h-6 inline-block rounded-full border-2 ${
                                checkedState[singleCategory.categoryName]
                                  ? "border-orange-500 bg-orange-500"
                                  : "border-gray-300"
                              } flex items-center justify-center cursor-pointer`}
                            >
                              {checkedState[singleCategory.categoryName] && (
                                <svg
                                  className="w-4 h-4 text-white"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )}
                            </span>
                            <span className="select-none ml-3 md:text-lg xl:text-xl">
                              {singleCategory.categoryName}
                            </span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* All Category ends */}

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
                  <div className="flex justify-center items-center flex-wrap mt-16 mb-10">
                    {totalPagesArray?.length > 1 && (
                      <div className="join pb-10">
                        <button
                          onClick={handlePrevPage}
                          className="join-item btn"
                        >
                          Previous
                        </button>
                        {totalPagesArray?.map((page) => (
                          <button
                            key={page}
                            onClick={() => handleCurrentPage(page)}
                            className={
                              currentPage === page + 1
                                ? "join-item btn selected bg-[#e08534] text-white"
                                : "join-item btn"
                            }
                          >
                            {page + 1}
                          </button>
                        ))}
                        <button
                          onClick={handleNextPage}
                          className="join-item btn"
                        >
                          Next
                        </button>
                      </div>
                    )}
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
