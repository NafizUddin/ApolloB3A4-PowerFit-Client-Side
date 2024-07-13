import { AiFillCheckCircle } from "react-icons/ai";
import { useGetSingleProductQuery } from "../redux/features/products/productsApi";
import { useParams } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaCircleXmark } from "react-icons/fa6";
import QuantitySelector from "../components/QuantitySelector/QuantitySelector";
import { useEffect, useState } from "react";
import Loading from "../components/Loading/Loading";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { addProduct } from "../redux/features/products/productSlice";
import toast from "react-hot-toast";
import useWarnIfCartNotEmpty from "../CustomHooks/useWarnIfCartNotEmpty";

const ProductDetails = () => {
  useWarnIfCartNotEmpty();
  const { id } = useParams();

  const { data, isLoading } = useGetSingleProductQuery(id);

  const singleProduct = data?.data;
  const dispatch = useAppDispatch();

  const [quantity, setQuantity] = useState(0);
  const [inStock, setInStock] = useState(singleProduct?.stockQuantity || 0);

  const { product } = useAppSelector((state) => state.products);

  useEffect(() => {
    if (singleProduct?.stockQuantity) {
      setInStock(singleProduct.stockQuantity);
    }
  }, [singleProduct]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const increment = () => {
    if (inStock > 1) {
      setQuantity((prev) => prev + 1);
      setInStock((prev: number) => prev - 1);
    }
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
      setInStock((prev: number) => prev + 1);
    }
  };

  const handleAddToCart = () => {
    const existingProduct = product.find((p) => p.id === singleProduct?._id);

    if (existingProduct) {
      // Product already exists in the cart
      toast.error("This product is already in your cart.");
    } else {
      // Product does not exist in the cart, proceed with dispatching
      const productInfo = {
        id: singleProduct?._id,
        name: singleProduct?.name,
        price: singleProduct?.price,
        quantity,
        image: singleProduct?.image,
        inStock,
      };

      dispatch(addProduct(productInfo));
      toast.success("Product added to cart successfully.");
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {/* Food Details */}
      <div className="mt-8 mx-6 xl:mx-0">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-5 my-10">
          <div className="lg:col-span-4">
            <img
              src={singleProduct?.image}
              className="h-[430px] object-contain w-full"
            />
          </div>
          <div className="lg:col-span-2 lg:ml-6 text-center lg:text-left">
            <h1 className="text-3xl font-bold mt-5 mb-2">
              {singleProduct?.name}
            </h1>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="text-sm text-gray-500">
                (435 Customer Reviews)
              </span>
            </div>
            <p className="text-2xl font-medium mt-3">
              <span className="">${singleProduct?.price}.00</span>
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Buy in monthly payments with Affirm on orders over $300. Learn
              more.
            </p>
            <p className="text-xl mt-2 font-medium">
              Category: <span className="">{singleProduct?.category}</span>
            </p>
            <p className="text-xl mt-2 font-medium">
              Stock Quantity: <span className="">{inStock}</span>
            </p>

            <div className="flex flex-col items-center lg:items-start mt-2">
              {inStock ? (
                <div className="flex gap-2 xl:gap-4 items-center lg:items-start xl:items-center">
                  <div className="text-xl xl:text-2xl text-green-600 mt-1 xl:mt-0">
                    <AiFillCheckCircle></AiFillCheckCircle>
                  </div>
                  <p className="text-lg xl:text-xl text-green-600">In Stock</p>
                </div>
              ) : (
                <div className="flex gap-4 items-center lg:items-start xl:items-center">
                  <div className="text-xl xl:text-2xl text-red-600 lg:mt-1 xl:mt-0">
                    <FaCircleXmark />
                  </div>
                  <p className="text-lg xl:text-xl text-red-600">
                    Out of Stock
                  </p>
                </div>
              )}
              <div className="flex gap-2 xl:gap-4 items-center lg:items-start xl:items-center mt-3">
                <div className="text-xl xl:text-2xl text-green-600 lg:mt-1 xl:mt-0">
                  <AiFillCheckCircle></AiFillCheckCircle>
                </div>
                <p className="text-lg xl:text-xl text-green-600">
                  Free Delivery Available
                </p>
              </div>
            </div>
            <div className="mt-5 md:w-[280px] md:mx-auto lg:w-full lg:mx-auto">
              <QuantitySelector
                quantity={quantity}
                increment={increment}
                decrement={decrement}
                inStock={inStock}
              />
            </div>
            <div className="flex items-center justify-center lg:justify-start mt-5 md:w-[280px] md:mx-auto lg:w-full lg:mx-auto">
              <label htmlFor="my-drawer-4" className="drawer-button">
                <span
                  onClick={handleAddToCart}
                  className={`flex items-center gap-2 px-6 py-3  rounded-lg w-full justify-center ${
                    inStock && quantity
                      ? "bg-[#e08534] btn-custom text-white cursor-pointer"
                      : "cursor-not-allowed bg-gray-300 text-gray-500"
                  }`}
                >
                  <BsCart3></BsCart3> <span>Add to cart</span>
                </span>
              </label>
            </div>
          </div>
        </div>
        {/* Description */}
        <div className="flex lg:flex-row flex-col gap-8 my-20">
          <div className="flex-1 space-y-6">
            <h1 className="text-3xl lg:text-4xl text-[#033955] border-l-[10px] border-[#e08534] pl-2 font-bold">
              Description
            </h1>
            <p>{singleProduct?.description}</p>
          </div>
          <div className="flex-1 space-y-6">
            <h1 className="text-3xl lg:text-4xl text-[#033955] border-l-[10px] border-[#e08534] pl-2 font-bold">
              Advantages
            </h1>
            <p className="text-gray-600">{singleProduct?.benefits}</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="https://cdn2.geckoandfly.com/wp-content/uploads/2017/07/health-quotes-05.jpg"
            className="mb-14 xl:w-full xl:h-[450px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
