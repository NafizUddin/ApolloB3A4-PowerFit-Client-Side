import { Link } from "react-router-dom";
import productCategory from "../../../jsons/productCategory.json";

const ProductCategory = () => {
  return (
    <div className="mb-28 mx-7 md:mx-8 xl:mx-0">
      <h1 className="text-3xl md:text-4xl text-[#033955] border-l-[10px] border-[#e08534] pl-2 font-bold">
        Shop By Category
      </h1>
      <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {productCategory.map((category, index) => (
          <div key={index}>
            <Link to={`/categoryProducts/${category.categoryName}`}>
              <div className="relative max-w-xl mx-auto cursor-pointer group overflow-hidden">
                <img
                  className="h-[300px] w-full object-cover rounded-md group-hover:scale-110 transition duration-300"
                  src={category.image}
                  alt="Random image"
                />
                <div className="absolute inset-0 bg-gray-700 opacity-65 rounded-md"></div>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <h2 className="text-white text-3xl font-bold text-center mx-5">
                    {category.categoryName}
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
