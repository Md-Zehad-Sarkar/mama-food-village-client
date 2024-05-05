import { url } from "inspector";
import baseApi from "../baseApi";

const foodApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFoods: builder.query({
      query: () => ({
        url: "/foods",
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return {
          data: response?.data,
        };
      },
    }),
  }),
});

export const { useGetAllFoodsQuery } = foodApi;
