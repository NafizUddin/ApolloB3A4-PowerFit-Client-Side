/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { Controller, useForm } from "react-hook-form";

const UpdateProductModal = ({ product, handleUpdateProduct, onClose }: any) => {
  const { handleSubmit, formState, control, register } = useForm();
  const { errors } = formState;
  const { _id, name, price, stockQuantity, category, description, benefits } =
    product;

  return (
    <dialog id="my_modal_2" className="modal" open>
      <div className="modal-box max-w-2xl h-[550px]">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            onClick={onClose}
            className="bg-[#e08534] btn-circle  absolute right-3 top-3 text-white"
          >
            ✕
          </button>
        </form>
        <div className="flex flex-col justify-center text-gray-900">
          <h3 className="font-bold text-3xl md:mt-5 text-center mt-10">
            🏋️ Update {name}
          </h3>
          <form
            onSubmit={handleSubmit(handleUpdateProduct)}
            className="space-y-4 md:space-y-6 mt-7"
            noValidate
            method="dialog"
          >
            <input type="hidden" value={_id} {...register("id")} />
            <div>
              <div className="flex">
                <label
                  htmlFor="name"
                  className="block md:text-xl font-semibold text-gray-900 w-36 mt-1"
                >
                  Product Name
                </label>
                <span className="mr-5 text-xl font-semibold text-gray-900 mt-1">
                  :
                </span>

                <input
                  type="text"
                  defaultValue={name}
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Product Name is required",
                    },
                  })}
                  className="w-[420px] lg:w-[400px] bg-transparent p-2 border border-gray-300 outline-none invalid:border-orange-500 transition placeholder-slate-400 focus:ring-1 focus:border-orange-500 rounded-lg focus:ring-[#e08534]"
                  placeholder="Enter Product Name"
                />
              </div>
              <p className="text-sm text-red-600 font-medium ml-28 md:ml-44 mt-2">
                {errors?.name?.message as ReactNode}
              </p>
            </div>

            <div>
              <div className="flex">
                <label
                  htmlFor="price"
                  className="block md:text-xl font-semibold text-gray-900 w-36 mt-1"
                >
                  Product Price
                </label>
                <span className="mr-5 text-xl font-semibold text-gray-900 mt-1">
                  :
                </span>

                <input
                  type="number"
                  defaultValue={price}
                  {...register("price", {
                    required: {
                      value: true,
                      message: "Product Price is required",
                    },
                  })}
                  className="w-[420px] lg:w-[400px] bg-transparent p-2 border border-gray-300 outline-none invalid:border-orange-500 transition placeholder-slate-400 focus:ring-1 focus:border-orange-500 rounded-lg focus:ring-[#e08534]"
                  placeholder="Enter Product Price"
                />
              </div>
              <p className="text-sm text-red-600 font-medium ml-28 md:ml-44 mt-2">
                {errors?.price?.message as ReactNode}
              </p>
            </div>

            <div>
              <div className="flex">
                <label
                  htmlFor="name"
                  className="block md:text-xl font-semibold text-gray-900 w-36 mt-1"
                >
                  Stock Quantity
                </label>
                <span className="mr-5 text-xl font-semibold text-gray-900 mt-1">
                  :
                </span>

                <input
                  type="text"
                  defaultValue={stockQuantity}
                  {...register("stockQuantity", {
                    required: {
                      value: true,
                      message: "Product Stock Quantity is required",
                    },
                  })}
                  className="w-[420px] lg:w-[400px] bg-transparent p-2 border border-gray-300 outline-none invalid:border-orange-500 transition placeholder-slate-400 focus:ring-1 focus:border-orange-500 rounded-lg focus:ring-[#e08534]"
                  placeholder="Enter Stock Quantity"
                />
              </div>
              <p className="text-sm text-red-600 font-medium ml-28 md:ml-44 mt-2">
                {errors?.stockQuantity?.message as ReactNode}
              </p>
            </div>

            <div>
              <div className="flex">
                <label
                  htmlFor="name"
                  className="block md:text-xl font-semibold text-gray-900 md:w-36 mt-1 mr-2 md:mr-0"
                >
                  Category
                </label>
                <span className="mr-5 text-xl font-semibold text-gray-900 mt-1">
                  :
                </span>

                <Controller
                  name="category"
                  control={control}
                  defaultValue={category}
                  rules={{ required: "Category is required" }}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="w-[420px] lg:w-[400px] bg-transparent p-2 border border-gray-300 outline-none invalid:border-orange-500 transition placeholder-slate-400 focus:ring-1 focus:border-orange-500 rounded-lg focus:ring-[#e08534]"
                    >
                      <option value="">Select Product Category</option>
                      <option value="Strength Training">
                        Strength Training
                      </option>
                      <option value="Cardio">Cardio</option>
                      <option value="Bodyweight Training">
                        Bodyweight Training
                      </option>
                      <option value="Mobility Tools">Mobility Tools</option>
                      <option value="Functional Training">
                        Functional Training
                      </option>
                      <option value="Wearable Technology">
                        Wearable Technology
                      </option>
                      <option value="Outdoor Gear">Outdoor Gear</option>
                      <option value="Boxing and Martial Arts">
                        Boxing and Martial Arts
                      </option>
                    </select>
                  )}
                />
              </div>
              <p className="text-sm text-red-600 font-medium ml-28 md:ml-44 mt-2">
                {errors?.category?.message as ReactNode}
              </p>
            </div>

            <div>
              <div className="flex">
                <label
                  htmlFor="description"
                  className="block md:text-xl font-semibold text-gray-900 md:w-36 mt-[2px] md:mr-0"
                >
                  Description
                </label>
                <span className="mr-3 md:mr-5 text-xl font-semibold text-gray-900">
                  :
                </span>

                <textarea
                  typeof="text"
                  defaultValue={description}
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Product Description is required",
                    },
                  })}
                  className="w-full md:w-[420px] lg:w-[400px] bg-transparent p-2 border border-gray-300 outline-none invalid:border-orange-500 transition placeholder-slate-400 focus:ring-1 focus:border-orange-500 rounded-lg focus:ring-[#e08534]"
                  placeholder="Enter Product Description"
                />
              </div>
              <p className="text-sm text-red-600 font-medium ml-28 md:ml-44 mt-2">
                {errors?.description?.message as ReactNode}
              </p>
            </div>

            <div>
              <div className="flex">
                <label
                  htmlFor="benefits"
                  className="block md:text-xl font-semibold text-gray-900 md:w-36 mt-1 mr-4 md:mr-0"
                >
                  Benefits
                </label>
                <span className="mr-5 text-xl font-semibold text-gray-900">
                  :
                </span>

                <textarea
                  typeof="text"
                  defaultValue={benefits}
                  {...register("benefits", {
                    required: {
                      value: true,
                      message: "Product Benefits is required",
                    },
                  })}
                  className="w-full md:w-[420px] lg:w-[400px] bg-transparent p-2 border border-gray-300 outline-none invalid:border-orange-500 transition placeholder-slate-400 focus:ring-1 focus:border-orange-500 rounded-lg focus:ring-[#e08534]"
                  placeholder="Enter Product Benefits"
                />
              </div>
              <p className="text-sm text-red-600 font-medium ml-28 md:ml-44 mt-2">
                {errors?.benefits?.message as ReactNode}
              </p>
            </div>

            <div>
              <div className="flex">
                <label
                  htmlFor="name"
                  className="block md:text-xl font-semibold text-gray-900 mt-3 md:w-36 md:mr-0"
                >
                  Product Image
                </label>
                <span className="mr-5 text-xl font-semibold text-gray-900 mt-3">
                  :
                </span>

                <input
                  id="example1"
                  type="file"
                  required
                  accept="image/*"
                  {...register("image", {
                    required: {
                      value: true,
                      message: "Product Photo is required",
                    },
                  })}
                  className="mt-2 block text-sm file:mr-4 file:rounded-md file:border-0 file:bg-[#e08534] file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:hover:bg-[#c3732c] focus:outline-none disabled:pointer-events-none disabled:opacity-60"
                />
              </div>
              <p className="text-sm text-red-600 font-medium ml-28 md:ml-44 mt-2">
                {errors?.image?.message as ReactNode}
              </p>
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="rounded-full px-5 py-3 flex items-center justify-center text-white bg-[#e08534] btn-custom font-bold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default UpdateProductModal;
