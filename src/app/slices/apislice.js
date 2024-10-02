import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    replicate: builder.mutation({
      query: (data) => ({
        url: "/replicate/text-to-image",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useReplicateMutation } = apiSlice;
