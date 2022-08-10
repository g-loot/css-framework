import "../assets/styles/globals.css";

import App from "next/app";
import { PrototypeProvider } from "../contexts/prototype";
import React from "react";
import SiteLayout from "../components/SiteLayout";
import UiContextProvider from "../contexts/ui.js";
import VariablesContextProvider from "../contexts/variables";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    const getLayout =
      Component.getLayout ||
      ((page) => (
        <SiteLayout>
          <UiContextProvider>
            <VariablesContextProvider>
              <PrototypeProvider>{page}</PrototypeProvider>
            </VariablesContextProvider>
          </UiContextProvider>
        </SiteLayout>
      ));

    return getLayout(<Component {...pageProps} />);
  }
}

export default MyApp;
