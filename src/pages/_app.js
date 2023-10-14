import Navbar, { NavbarDefault, } from "@/Components/Shared/NavBar/NavBar";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "../redux/store";

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
