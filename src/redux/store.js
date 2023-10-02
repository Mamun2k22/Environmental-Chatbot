import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./chatSlice/chatSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { api } from "./api/api";

const persistConfig = {
  key: "root",
  storage,
};

const persistedChatReducer = persistReducer(persistConfig, chatReducer);

const store = configureStore({
  reducer: {
    chat: persistedChatReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export const persistor = persistStore(store);
export default store;
