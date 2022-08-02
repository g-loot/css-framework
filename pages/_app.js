import "../assets/styles/globals.css";

import App from "next/app";
import { PrototypeProvider } from "../contexts/prototype";
import React from "react";
import SiteLayout from "../components/SiteLayout";
import UiContextProvider from "../contexts/ui.js";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    const getLayout =
      Component.getLayout ||
      ((page) => (
        <SiteLayout>
          <UiContextProvider>
            <PrototypeProvider>{page}</PrototypeProvider>
          </UiContextProvider>
        </SiteLayout>
      ));

    return getLayout(<Component {...pageProps} />);
  }
}

export default MyApp;
