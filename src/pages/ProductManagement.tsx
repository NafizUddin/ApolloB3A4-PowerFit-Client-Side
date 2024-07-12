import { Controller, SubmitHandler, useForm } from "react-hook-form";
import SectionTitle from "../components/sectionTitle/SectionTitle";
import { FaPlus } from "react-icons/fa";
import { ReactNode, useEffect } from "react";
import axios from "axios";
import {
  useAddProductMutation,
  useDeleteProductMutation,
  useGetProductsQuery,
  useUpdateProductMutation,
} from "../redux/features/products/productsApi";
import { ImSpinner6 } from "react-icons/im";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { CiCircleMore } from "react-icons/ci";
import fitness from "../assets/fitness.png";
import { TProduct } from "../types/productType";
import Loading from "../components/Loading/Loading";
import Swal from "sweetalert2";

const image_hosting_key = "d00e0bab8af22de69cd828138698409d";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

interface FormData {
  name: string;
  price: string;
  stockQuantity: string;
  description: string;
  image: FileList;
  benefits: string;
  category: string;
}

const ProductManagement = () => {
  const { handleSubmit, formState, control, register, reset } = useForm();
  const { errors } = formState;
  const queryObj = {
    sort: "",
    searchTerm: "",
  };

  const [addProduct, { isLoading, data: addedProduct }] =
    useAddProductMutation();

  const [updateProduct, { data: updatedProduct }] = useUpdateProductMutation();

  const [deleteProduct] = useDeleteProductMutation();

  const { data: productsResponse, isLoading: isProductLoading } =
    useGetProductsQuery(queryObj);

  const products = productsResponse?.data;

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddProduct: SubmitHandler<FormData> = async (formData) => {
    const imageFile = { image: formData?.image[0] };

    try {
      const res = await axios.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      // Receives price and stockQuantity as strings, so convert them to numbers
      const price = parseFloat(formData?.price);
      const stockQuantity = parseFloat(formData?.stockQuantity);

      if (res.data.success) {
        const productData = {
          name: formData.name,
          price: price,
          stockQuantity: stockQuantity,
          description: formData.description,
          image: res.data.data.display_url,
          benefits: formData.benefits,
          category: formData.category,
        };

        const result = await addProduct(productData).unwrap();

        if (result.success) {
          toast.success(result.message, {
            duration: 4000,
          });
          navigate("/productManagement");
        }
      }
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  const handleDeleteRequest = async (id: string) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#2e8b57",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const res = await deleteProduct(id).unwrap();
        if (res.success) {
          toast.success(res.message, {
            duration: 4000,
          });
        }
      }
    } catch (error) {
      console.error("Error deleting the donation:", error);
      toast.error("There was an error deleting the file.");
    }
  };

  if (isProductLoading) {
    return <Loading />;
  }

  return (
    <div className="mb-28 mx-7 md:mx-8 xl:mx-0 mt-8">
      <SectionTitle
        sub="Seamless Management"
        heading="Manage Your Gear"
        description=""
      />

      <div className="flex items-center justify-end mb-12">
        <button
          className="modal-toggle"
          onClick={() => document.getElementById("my_modal_1").showModal()}
          className="flex items-center gap-2 px-4 py-3 btn-custom rounded-full text-white bg-[#e08534] "
        >
          <FaPlus className="text-xl mr-1" />
          <span className="">Add New Product</span>
        </button>
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box max-w-2xl h-[550px]">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="bg-[#e08534] btn-circle  absolute right-3 top-3 text-white">
              ✕
            </button>
          </form>
          <div className="flex flex-col justify-center text-gray-900">
            <h3 className="font-bold text-3xl md:mt-5 text-center mt-10">
              🏋️ Add New Product
            </h3>
            <form
              onSubmit={handleSubmit(handleAddProduct)}
              className="space-y-4 md:space-y-6 mt-7"
              noValidate
              method="dialog"
            >
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
                    {...register("price", {
                      required: {
                        value: true,
                        message: "Product Price is required",
                      },
                    })}
                    className="lg:w-96 bg-transparent p-2 border border-gray-300 outline-none invalid:border-orange-500 transition placeholder-slate-400 focus:ring-1 focus:border-orange-500 rounded-lg focus:ring-[#e08534]"
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
                    {...register("stockQuantity", {
                      required: {
                        value: true,
                        message: "Product Stock Quantity is required",
                      },
                    })}
                    className="lg:w-96 bg-transparent p-2 border border-gray-300 outline-none invalid:border-orange-500 transition placeholder-slate-400 focus:ring-1 focus:border-orange-500 rounded-lg focus:ring-[#e08534]"
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
                    rules={{ required: "Category is required" }}
                    render={({ field }) => (
                      <select
                        {...field}
                        className="lg:w-96 bg-transparent p-2 border border-gray-300 outline-none invalid:border-orange-500 transition placeholder-slate-400 focus:ring-1 focus:border-orange-500 rounded-lg focus:ring-[#e08534]"
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
                    {...register("description", {
                      required: {
                        value: true,
                        message: "Product Description is required",
                      },
                    })}
                    className="w-full md:w-96 bg-transparent p-2 border border-gray-300 outline-none invalid:border-orange-500 transition placeholder-slate-400 focus:ring-1 focus:border-orange-500 rounded-lg focus:ring-[#e08534]"
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
                    {...register("benefits", {
                      required: {
                        value: true,
                        message: "Product Benefits is required",
                      },
                    })}
                    className="w-full md:w-96 bg-transparent p-2 border border-gray-300 outline-none invalid:border-orange-500 transition placeholder-slate-400 focus:ring-1 focus:border-orange-500 rounded-lg focus:ring-[#e08534]"
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
                  {errors?.name?.message as ReactNode}
                </p>
              </div>

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="rounded-full px-5 py-3 flex items-center justify-center text-white bg-[#e08534] btn-custom font-bold"
                >
                  {isLoading ? (
                    <ImSpinner6 className="animate-spin m-auto text-xl" />
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>

      <div>
        {products?.length > 0 ? (
          <div>
            <div className="overflow-x-auto pb-16">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th className="xl:text-lg font-semibold">Product Image</th>
                    <th className="xl:text-lg font-semibold">Product Name</th>
                    <th className="xl:text-lg font-semibold">Category</th>
                    <th className="xl:text-lg font-semibold">Price</th>
                    <th className="xl:text-lg font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {products?.map((singleProduct: TProduct, index: number) => (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>
                        <img
                          src={singleProduct?.image}
                          className="w-20 h-20 object-contain"
                        />
                      </td>
                      <td className="xl:text-lg font-semibold">
                        {singleProduct?.name}
                      </td>
                      <td className="xl:text-lg font-semibold">
                        {singleProduct?.category}
                      </td>
                      <td className="xl:text-lg font-semibold">
                        ${singleProduct?.price}.00
                      </td>

                      <td className="xl:text-lg font-semibold">
                        {/* <button onClick={handleDeleteReq}>HEllo</button> */}
                        <div className="dropdown dropdown-left">
                          <label tabIndex={0} className="m-1">
                            <CiCircleMore className="text-3xl" />
                          </label>
                          <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32"
                          >
                            <Link
                              to={`/dashboard/updateDonation/${singleProduct?._id}`}
                            >
                              <li>
                                <span className="">Edit</span>
                              </li>
                            </Link>

                            <li>
                              <span
                                onClick={() =>
                                  handleDeleteRequest(singleProduct?._id)
                                }
                                className=""
                              >
                                Delete
                              </span>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col lg:py-14">
            <div className="">
              <img src={fitness} className="w-52" />
            </div>
            <p className="max-w-xl text-center text-4xl font-bold mt-6 mb-24">
              Sorry, Products Unavailable.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductManagement;
