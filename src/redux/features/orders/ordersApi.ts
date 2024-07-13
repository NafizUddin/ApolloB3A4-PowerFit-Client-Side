/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addOrder: builder.mutation({
      query: (data) => {
        return {
          url: "/orders",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["order"],
    }),
  }),
});

export const { useAddOrderMutation } = orderApi;
