import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (queryObj) => {
        const { searchTerm, sort } = queryObj || {};
        let url = "/products";

        if (searchTerm) {
          url += `?searchTerm=${searchTerm}`;
        }

        if (sort) {
          const sortValue = sort === "descending" ? "-price" : "price";
          url += searchTerm ? `&sort=${sortValue}` : `?sort=${sortValue}`;
        }

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["product"],
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
