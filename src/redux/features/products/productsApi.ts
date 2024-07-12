/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (queryObj) => {
        const { searchTerm, sort, categories, priceRange, category } =
          queryObj || {};

        // map() iterates through the filtered key-value pairs and directly extracts the key (category) using array destructuring with [key].

        let url = "/products";
        // URLSearchParams used to construct the query string dynamically. It simplifies appending multiple query parameters.
        let params = new URLSearchParams();

        if (searchTerm) {
          params.append("searchTerm", searchTerm);
        }

        const filteredCategories = categories
          ? Object.entries(categories)
              .filter(([key, value]) => value === true)
              .map(([key]) => key)
          : [];

        filteredCategories.forEach((category) => {
          params.append("category", category);
        });

        if (category) {
          params.append("category", category);
        }

        if (priceRange) {
          const { minPrice, maxPrice } = priceRange;
          if (minPrice !== undefined) {
            params.append("minPrice", minPrice);
          }
          if (maxPrice !== undefined) {
            params.append("maxPrice", maxPrice);
          }
        }

        if (sort) {
          if (sort === "descending") {
            params.append("sort", "-price");
          } else if (sort === "ascending") {
            params.append("sort", "price");
          } else {
            params.append("sort", "-createdAt");
          }
        }

        if (params.toString()) {
          url += `?${params.toString()}`;
        }

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["product"],
    }),
    getSingleProduct: builder.query({
      query: (id) => {
        let url = `/products/${id}`;

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["product"],
    }),
    addProduct: builder.mutation({
      query: (data) => {
        return {
          url: "/products",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: (options) => ({
        url: `/products/${options.id}`,
        method: "PUT",
        body: options.data,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
