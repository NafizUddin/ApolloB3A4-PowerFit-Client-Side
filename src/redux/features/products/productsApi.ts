import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (queryObj) => {
        if (queryObj?.sort) {
          const sortValue = queryObj.sort;

          if (sortValue === "descending") {
            return {
              url: "/products?sort=-price",
              method: "GET",
            };
          } else {
            return {
              url: "/products?sort=price",
              method: "GET",
            };
          }
        }

        // if (queryObj?.category) {
        //   return {
        //     url: `/products?category=${queryObj?.category}`,
        //     method: "GET",
        //   };
        // }

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
