import "../assets/styles/globals.css";
import "aos/dist/aos.css";

import React from "react";
import App from "next/app";
import ModalToastProvider from "../components/ModalToastProvider";
import { PrototypeProvider } from "../contexts/prototype";
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
              <PrototypeProvider>
                <ModalToastProvider>{page}</ModalToastProvider>
              </PrototypeProvider>
            </VariablesContextProvider>
          </UiContextProvider>
        </SiteLayout>
      ));

    return getLayout(<Component {...pageProps} />);
  }
}

export default MyApp;