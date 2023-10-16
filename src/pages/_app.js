
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "../redux/store";
import Navbar from "@/Components/Shared/NavBar/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navbar />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}
