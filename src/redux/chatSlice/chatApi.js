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
    loginUser: builder.mutation({
      query: (data) => ({
        url: `/api/login`,
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
} = chatApi;
export default chatApi;
