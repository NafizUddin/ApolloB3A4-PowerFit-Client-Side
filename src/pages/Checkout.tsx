import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCircleXmark } from "react-icons/fa6";

const Checkout = () => {
  const { handleSubmit, formState, control, register, reset } = useForm();
  const { errors } = formState;

  const [togglePayment, setTogglePayment] = useState(false);

  return (
    <div>
      <main className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl text-[#033955] border-l-[10px] border-[#e08534] pl-2 font-bold">
              Checkout
            </h1>
          </div>

          <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
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
                      id="email-address"
                      name="email-address"
                      autoComplete="email"
                      className="block w-full bg-transparent p-2 border border-gray-300 outline-none invalid:border-orange-500 transition placeholder-slate-400 focus:ring-1 focus:border-orange-500 rounded-lg focus:ring-[#e08534]"
                    />
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
                        id="first-name"
                        name="first-name"
                        autoComplete="given-name"
                        className="block w-full bg-transparent p-2 border border-gray-300 outline-none invalid:border-orange-500 transition placeholder-slate-400 focus:ring-1 focus:border-orange-500 rounded-lg focus:ring-[#e08534]"
                      />
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
                        id="first-name"
                        name="first-name"
                        autoComplete="given-name"
                        className="block w-full bg-transparent p-2 border border-gray-300 outline-none invalid:border-orange-500 transition placeholder-slate-400 focus:ring-1 focus:border-orange-500 rounded-lg focus:ring-[#e08534]"
                      />
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
                        id="first-name"
                        name="first-name"
                        autoComplete="given-name"
                        className="block w-full bg-transparent p-2 border border-gray-300 outline-none invalid:border-orange-500 transition placeholder-slate-400 focus:ring-1 focus:border-orange-500 rounded-lg focus:ring-[#e08534]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-gray-200 pt-10">
                <fieldset>
                  <legend className="text-lg font-medium text-gray-900">
                    Delivery method
                  </legend>

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
                            $5.00{" "}
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
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <div
                        className="absolute -inset-px rounded-lg border-2 pointer-events-none"
                        aria-hidden="true"
                      ></div>
                    </label>

                    <label className="relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none">
                      <input
                        type="radio"
                        name="delivery-method"
                        value="Express"
                        className="sr-only"
                        aria-labelledby="delivery-method-1-label"
                        aria-describedby="delivery-method-1-description-0 delivery-method-1-description-1"
                      />
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
                <h3 className="sr-only">Items in your cart</h3>
                <ul role="list" className="divide-y divide-gray-200">
                  <li className="flex py-6 px-4 sm:px-6">
                    <div className="flex-shrink-0">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg"
                        alt=""
                        className="w-20 rounded-md"
                      />
                    </div>

                    <div className="ml-6 flex-1 flex flex-col">
                      <div className="flex">
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm">
                            <a
                              href="#"
                              className="font-medium text-gray-700 hover:text-gray-800"
                            >
                              {" "}
                              Basic Tee{" "}
                            </a>
                          </h4>
                          <p className="mt-1 text-sm text-gray-500">Black</p>
                          <p className="mt-1 text-sm text-gray-500">Large</p>
                        </div>

                        <div className="ml-4 flex-shrink-0 flow-root">
                          <button
                            type="button"
                            className="-m-2.5 bg-white p-2.5 flex items-center justify-center text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Remove</span>

                            <svg
                              className="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="flex-1 pt-2 flex items-end justify-between">
                        <p className="mt-1 text-sm font-medium text-gray-900">
                          $32.00
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
                <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">Subtotal</dt>
                    <dd className="text-sm font-medium text-gray-900">
                      $64.00
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">Shipping</dt>
                    <dd className="text-sm font-medium text-gray-900">$5.00</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">Taxes</dt>
                    <dd className="text-sm font-medium text-gray-900">$5.52</dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                    <dt className="text-base font-medium">Total</dt>
                    <dd className="text-base font-medium text-gray-900">
                      $75.52
                    </dd>
                  </div>
                </dl>

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
          </form>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
