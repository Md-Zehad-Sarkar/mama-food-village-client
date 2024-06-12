import { url } from "inspector";
import baseApi from "../baseApi";
import { tagTypes } from "@/redux/tagTypes";

const foodApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFoods: builder.query({
      query: (args) => ({
        url: `/foods?category=${args}`,
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return {
          data: response?.data,
        };
      },
      providesTags: [tagTypes.foods],
    }),
  }),
});

export const { useGetAllFoodsQuery } = foodApi;
