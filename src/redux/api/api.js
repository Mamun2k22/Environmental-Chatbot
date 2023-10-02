import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://real-mosquito-immensely.ngrok-free.app/",
  }),
  tagTypes: ["chat"],
  endpoints: () => ({}),
});