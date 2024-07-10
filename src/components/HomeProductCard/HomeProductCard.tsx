import { Link } from "react-router-dom";
import { TProduct } from "../../types/productType";

const HomeProductCard = ({
  _id,
  name,
  price,
  description,
  stockQuantity,
  image,
}: TProduct) => {
  return (
    <div>
      <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg md:h-[470px] lg:h-[465px] xl:h-[460px]">
        <div className="relative">
          <img
            className="w-full object-contain h-[268px] md:h-[246px] lg:h-[219px] xl:h-[217px]"
            src={image}
            alt="Product Image"
          />
          <div>
            {stockQuantity > 0 ? (
              <div className="absolute top-0 right-0 bg-[#e08534] text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                SALE
              </div>
            ) : (
              <div className="absolute top-0 right-0 bg-[#033955] text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                STOCK OUT
              </div>
            )}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-gray-500 text-sm mb-4 md:h-[95px] lg:h-[115px]">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">${price}.00</span>
            <Link to={`/productDetails/${_id}`}>
              <button className="bg-[#e08534] text-white font-bold py-2 px-4 rounded btn-custom">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProductCard;
