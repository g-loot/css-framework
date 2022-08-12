import React, { useContext } from "react";

import ModalToastProvider from "./ModalToastProvider";
import { PrototypeProvider } from "../contexts/prototype";
import UiContextProvider from "../contexts/ui.js";
import VariablesContextProvider from "../contexts/variables";
import { useRouter } from "next/router";

const SiteLayout = ({ children }) => {
  const { query } = useRouter();
  const oldColors = query.oldcolors ? true : false;
  return (
    <>
      <div className={`${oldColors ? "oldcolors" : ""}`}>{children}</div>
    </>
  );
};

export const getLayout = (page) => {
  return (
    <SiteLayout>
      <UiContextProvider>
        <VariablesContextProvider>
          <PrototypeProvider>
            <ModalToastProvider>{page}</ModalToastProvider>
          </PrototypeProvider>
        </VariablesContextProvider>
      </UiContextProvider>
    </SiteLayout>
  );
};

export default SiteLayout;
