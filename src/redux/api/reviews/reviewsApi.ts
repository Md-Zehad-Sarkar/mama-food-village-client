import { tagTypes } from "@/redux/tagTypes";
import baseApi from "../baseApi";

export const reviewsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllReviews: builder.query({
      query: () => ({
        url: "reviews",
        method: "GET",
      }),
      providesTags: [tagTypes.reviews],
    }),
  }),
});

export const { useGetAllReviewsQuery } = reviewsApi;
