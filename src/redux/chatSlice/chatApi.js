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
      providesTags:["chat"]
    }),
    approveUser: builder.mutation({
      query: (info) => ({
        url: `/api/approve`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${info?.token}`,
        },
        body:{
          id: info.id
        }
      }),
      invalidatesTags: ["chat"],
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
    resetPasswordRequest: builder.mutation({
      query: (data) => ({
        url: `api/check_email_exists`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${data?.token}`,
          "content-type": "application/json",
        },
        body: { email: data.email },
      }),
    }),
    checkOtp: builder.mutation({
      query: (data) => ({
        url: `api/check_otp`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${data?.token}`,
          "content-type": "application/json",
        },
        body: { email: data.email, otp: data.otp },
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: `api/set_new_password`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${data?.token}`,
          "content-type": "application/json",
        },
        body: { email: data.email, otp: data.otp, password: data.password },
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
  useResetPasswordRequestMutation,
  useResetPasswordMutation,
  useCheckOtpMutation,
  useApproveUserMutation
} = chatApi;
export default chatApi;
