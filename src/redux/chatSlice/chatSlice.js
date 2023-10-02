import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isLogin: false,
  responses: [],
  chats: {
    history: null,
    question: null,
    answer: null,
  },
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    isLoggedIn: (state, action) => {
      state.token = action.payload;
      state.isLogin = true;
    },

    setHistory: (state, action) => {
      state.chats.history = action.payload;
    },
    removeHistory: (state, action) => {
      state.chats.history = null;
    },
    setQuestion: (state, action) => {
      state.chats.question = action.payload;
    },
    setAnswer: (state, acton) => {
      state.chats.answer = acton.payload;
    },
    removeChat: (state, action) => {
      state.responses.length = 0;
    },
    setResponse: (state, action) => {
      state.responses.push(action.payload);
    },
  },
});

export const {
  isLoggedIn,
  setHistory,
  removeChat,
  removeHistory,
  setResponse,
} = chatSlice.actions;

export default chatSlice.reducer;
