import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AdvertState, setAdvert } from "@/store/slices/advert";
import { Region, setRegions } from "@/store/slices/region";

export const commonApi = createApi({
  reducerPath: "commonApi",
  baseQuery: fetchBaseQuery({}),
  endpoints: (builder) => ({
    getAdverts: builder.query<
      AdvertState,
      { input: string; region_id?: number }
    >({
      query({ input, region_id }) {
        const params: {
          type: number;
          input?: string;
          region_id?: number | null;
        } = {
          type: 6,
        };
        if (input) params["input"] = input;
        if (region_id) params["region_id"] = region_id;
        return {
          url: "/api/products",
          params: params,
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setAdvert(data as any));
        } catch (error) {
          console.error(error);
        }
      },
      providesTags: ["Advert"],
      keepUnusedDataFor: 0,
    }),
    getRegion: builder.query<Region[], void>({
      query: () => "/api/region",
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setRegions(data as any));
        } catch (error) {
          console.error(error);
        }
      },
      providesTags: ["Region"],
      keepUnusedDataFor: 0,
    }),
    loginUser: builder.mutation<unknown, void>({
      query: () => "/api/login",
    }),
  }),
  tagTypes: ["Advert", "Region"],
});

export const {
  useGetAdvertsQuery,
  useLazyGetAdvertsQuery,
  useGetRegionQuery,
  useLazyGetRegionQuery,
  useLoginUserMutation,
} = commonApi;
