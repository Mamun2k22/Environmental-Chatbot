const { api } = require("../api/api");

const chatApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getHistory: builder.query({
      query: (token) => ({
        url: "/api/chat/history",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getUser: builder.query({
      query: (token) => ({
        url: "/api/users",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    approveUser: builder.query({
      query: (info) => ({
        url: `/api/approve/${info?.id}`,
        headers: {
          Authorization: `Bearer ${info?.token}`,
        },
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: `/api/login`,
        method: "POST",
        body: data,
      }),
    }),
    registerUser: builder.mutation({
      query: (data) => ({
        url: `/api/register`,
        method: "POST",
        body: data,
      }),
    }),
    sendRequest: builder.mutation({
      query: (data) => ({
        url: `api/chat/response`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${data?.token}`,
          "content-type": "application/json",
        },
        body: { question: data.question },
      }),
    }),
  }),
});

export const {
  useGetHistoryQuery,
  useLoginUserMutation,
  useSendRequestMutation,
  useRegisterUserMutation,
  useGetUserQuery,
  useApproveUserQuery,
} = chatApi;
export default chatApi;
