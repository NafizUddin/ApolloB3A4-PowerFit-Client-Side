import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (category) => {
        if (category) {
          return {
            url: `/products?category=${category}`,
            method: "GET",
          };
        }

        return {
          url: "/products",
          method: "GET",
        };
      },
      providesTags: ["product"],
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
