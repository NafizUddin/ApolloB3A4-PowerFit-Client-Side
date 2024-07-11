import { TProduct } from "@/types/productType";
import { ImCheckboxChecked } from "react-icons/im";
import { Link } from "react-router-dom";

const BenefitCard = ({ _id, name, image, benefits }: TProduct) => {
  const benefitsArray = benefits
    .split(". ")
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence);

  return (
    <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg md:h-[590px] lg:h-[575px] xl:h-[540px]">
      <div className="relative">
        <img
          className="w-full object-contain h-[268px] md:h-[246px] lg:h-[219px] xl:h-[217px]"
          src={image}
          alt="Product Image"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-4">{name}</h3>
        <div className="flex gap-3 items-center mb-2">
          <ImCheckboxChecked className="text-lg" />
          <h3 className="text-lg font-semibold">Product Edge:</h3>
        </div>

        <div className="md:h-[180px] lg:h-[195px] xl:h-[160px]">
          {benefitsArray?.slice(0.3)?.map((benefit, index) => (
            <div className="flex gap-3">
              <p className="text-gray-500 mb-2">
                {index + 1}.{benefit}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-6 md:mt-0">
          <Link to={`/productDetails/${_id}`}>
            <button className="bg-[#e08534] text-white font-bold py-2 px-4 rounded btn-custom">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
