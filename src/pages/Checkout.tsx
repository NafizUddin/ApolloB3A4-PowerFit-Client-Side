import { TProduct } from "@/types/productType";
import Loading from "../components/Loading/Loading";
import {
  useGetProductsQuery,
  useUpdateProductMutation,
} from "../redux/features/products/productsApi";
import {
  clearCart,
  removeProduct,
} from "../redux/features/products/productSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { ReactNode, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaCircleXmark } from "react-icons/fa6";
import { RiErrorWarningFill } from "react-icons/ri";
import { useAddOrderMutation } from "../redux/features/orders/ordersApi";

const Checkout = () => {
  const { handleSubmit, formState, register, reset } = useForm();
  const { errors } = formState;
  const dispatch = useAppDispatch();

  const [togglePayment, setTogglePayment] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<TProduct[]>([]);
  const [updateProduct] = useUpdateProductMutation();
  const [addOrder] = useAddOrderMutation();

  const queryObj = {
    sort: "",
    searchTerm: "",
  };

  const { data: productsResponse, isLoading } = useGetProductsQuery(queryObj);

  const allProducts = productsResponse?.data;

  const {
    product: stateProducts,
    quantities,
    subtotal,
  } = useAppSelector((state) => state.products);

  useEffect(() => {
    if (!isLoading) {
      const stateProductIds = stateProducts.map((product) => product.id);
      const filtered = allProducts.filter((product) =>
        stateProductIds.includes(product?._id)
      );
      setFilteredProducts(filtered);
    }
  }, [allProducts, stateProducts, isLoading]);

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeProduct(id));
    toast.success("Product removed successfully!");
  };

  const shipping = subtotal * 0.01;
  const taxes = subtotal * 0.05;
  const total = subtotal + shipping + taxes;

  const handlePlaceOrder = async (formData) => {
    if (!togglePayment) {
      return toast.error("Please select delivery method");
    }

    try {
      const orderData = {
        name: formData.name,
        email: formData.email,
        address: formData.address,
        phone: formData.phone,
        delivery: "Cash",
        products: [] as string[],
      };
      // Update quantities in the filtered products
      for (const stateProduct of stateProducts) {
        const { id } = stateProduct;
        const quantity = quantities[id] || 0;
        const filteredProduct = filteredProducts.find(
          (product) => product._id === id
        );

        if (filteredProduct) {
          const { stockQuantity, ...restData } = filteredProduct;
          const updatedProduct = {
            ...restData,
            stockQuantity: filteredProduct.stockQuantity - quantity,
          };

          const options = {
            id,
            data: updatedProduct,
          };

          await updateProduct(options).unwrap();

          // adding product ID to orderData's products array
          orderData.products.push(id);
        }
      }

      await addOrder(orderData).unwrap();
      dispatch(clearCart());
      reset();
      toast.success("Order placed successfully!");
    } catch (error) {
      toast.error("Failed to place order. Please try again.");
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <main className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={handleSubmit(handlePlaceOrder)}
          className="max-w-2xl mx-auto lg:max-w-none"
        >
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl text-[#033955] border-l-[10px] border-[#e08534] pl-2 font-bold">
              Checkout
            </h1>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
            <div>
              <div>
                <h2 className="text-lg font-medium text-gray-900">
                  Contact information
                </h2>

                <div className="mt-4">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "User Email is required",
                        },
                      })}
                      className="block w-full bg-transparent p-2 border border-gray-300 outline-none invalid:border-orange-500 transition placeholder-slate-400 focus:ring-1 focus:border-orange-500 rounded-lg focus:ring-[#e08534]"
                    />
                    <p className="text-sm text-red-600 font-medium  mt-2">
                      {errors?.email?.message as ReactNode}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-gray-200 pt-10">
                <h2 className="text-lg font-medium text-gray-900">
                  Shipping information
                </h2>

                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        {...register("name", {
                          required: {
                            value: true,
                            message: "Name is required",
                          },
                        })}
                        className="block w-full bg-transparent p-2 border border-gray-300 outline-none invalid:border-orange-500 transition placeholder-slate-400 focus:ring-1 focus:border-orange-500 rounded-lg focus:ring-[#e08534]"
                      />
                      <p className="text-sm text-red-600 font-medium  mt-2">
                        {errors?.name?.message as ReactNode}
                      </p>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        {...register("address", {
                          required: {
                            value: true,
                            message: "Address is required",
                          },
                        })}
                        className="block w-full bg-transparent p-2 border border-gray-300 outline-none invalid:border-orange-500 transition placeholder-slate-400 focus:ring-1 focus:border-orange-500 rounded-lg focus:ring-[#e08534]"
                      />
                      <p className="text-sm text-red-600 font-medium  mt-2">
                        {errors?.address?.message as ReactNode}
                      </p>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        {...register("phone", {
                          required: {
                            value: true,
                            message: "Phone Number is required",
                          },
                        })}
                        className="block w-full bg-transparent p-2 border border-gray-300 outline-none invalid:border-orange-500 transition placeholder-slate-400 focus:ring-1 focus:border-orange-500 rounded-lg focus:ring-[#e08534]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-gray-200 pt-10">
                <fieldset>
                  <div className="flex gap-3">
                    <legend className="text-lg font-medium text-gray-900">
                      Delivery method
                    </legend>
                    {!togglePayment && (
                      <div className="flex gap-2 items-center">
                        <RiErrorWarningFill className="text-[#e08534]" />
                        <h1 className="text-sm text-[#e08534]">
                          Please select delivery method
                        </h1>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                    <label
                      onClick={() => setTogglePayment(!togglePayment)}
                      className={`relative border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none ${
                        togglePayment ? "bg-green-200" : "bg-white"
                      }`}
                    >
                      <div className="flex-1 flex">
                        <div className="flex flex-col">
                          <span
                            id="delivery-method-0-label"
                            className="block text-sm font-medium text-gray-900"
                          >
                            {" "}
                            Cash on Delivery{" "}
                          </span>
                          <span
                            id="delivery-method-0-description-0"
                            className="mt-1 flex items-center text-sm text-gray-500"
                          >
                            {" "}
                            4–10 business days{" "}
                          </span>
                          <span
                            id="delivery-method-0-description-1"
                            className="mt-6 text-sm font-medium text-gray-900"
                          >
                            {" "}
                            ${shipping}{" "}
                          </span>
                        </div>
                      </div>

                      <svg
                        className="h-5 w-5 text-[#e08534]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <div
                        className="absolute -inset-px rounded-lg border-2 pointer-events-none"
                        aria-hidden="true"
                      ></div>
                    </label>

                    <label className="relative bg-white border rounded-lg shadow-sm p-4 flex focus:outline-none cursor-not-allowed">
                      <div className="flex-1 flex">
                        <div className="flex flex-col">
                          <span
                            id="delivery-method-1-label"
                            className="block text-sm font-medium text-gray-900"
                          >
                            {" "}
                            Stripe Payment{" "}
                          </span>
                          <span
                            id="delivery-method-1-description-0"
                            className="mt-1 flex items-center text-sm text-gray-500"
                          >
                            {" "}
                            Currently Unavailable{" "}
                          </span>
                          <span
                            id="delivery-method-1-description-1"
                            className="mt-6 text-sm font-medium text-gray-900"
                          >
                            {" "}
                            <span className="line-through">$16.00</span>
                          </span>
                        </div>
                      </div>

                      <FaCircleXmark className="text-lg text-[#e08534]" />

                      <div
                        className="absolute -inset-px rounded-lg border-2 pointer-events-none"
                        aria-hidden="true"
                      ></div>
                    </label>
                  </div>
                </fieldset>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <h2 className="text-lg font-medium text-gray-900">
                Order summary
              </h2>

              <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <div>
                  {stateProducts.length > 0 &&
                    stateProducts.map((singleProduct) => (
                      <div key={singleProduct.id}>
                        <ul role="list" className="divide-y divide-gray-200">
                          <li className="flex py-6 px-4 sm:px-6">
                            <div className="flex-shrink-0">
                              <img
                                src={singleProduct.image}
                                alt=""
                                className="w-20 rounded-md object-contain"
                              />
                            </div>

                            <div className="ml-6 flex-1 flex flex-col">
                              <div className="flex">
                                <div className="min-w-0 flex-1">
                                  <h4 className="text-sm">
                                    <a
                                      href="#"
                                      className="text-gray-700 text-lg font-semibold"
                                    >
                                      {" "}
                                      {singleProduct.name}{" "}
                                    </a>
                                  </h4>
                                  <p className="mt-1 text-sm text-gray-500">
                                    x{quantities[singleProduct.id]}
                                  </p>
                                </div>

                                <div className="ml-4 flex-shrink-0 flow-root">
                                  <FaCircleXmark
                                    onClick={() =>
                                      handleRemoveFromCart(singleProduct.id)
                                    }
                                    className="text-[#033955] cursor-pointer text-lg"
                                  />
                                </div>
                              </div>

                              <div className="flex-1 pt-2 flex items-end justify-between">
                                <p className="mt-1 text-sm font-medium text-gray-900">
                                  ${singleProduct.price}.00
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    ))}
                  <div className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                    <div className="flex items-center justify-between">
                      <dt className="text-sm">Subtotal</dt>
                      <dd className="text-sm font-medium text-gray-900">
                        ${subtotal.toFixed(2)}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-sm">Shipping</dt>
                      <dd className="text-sm font-medium text-gray-900">
                        ${shipping}.00
                      </dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-sm">Taxes</dt>
                      <dd className="text-sm font-medium text-gray-900">
                        ${taxes.toFixed(2)}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                      <dt className="text-base font-medium">Total</dt>
                      <dd className="text-base font-medium text-gray-900">
                        ${total.toFixed(2)}
                      </dd>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                  <button
                    type="submit"
                    className="w-full bg-[#e08534] btn-custom border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-orange-500"
                  >
                    Confirm order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Checkout;
