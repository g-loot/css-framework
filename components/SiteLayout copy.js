import React, { useContext } from "react";

import { PrototypeProvider } from "../contexts/prototype";
import ToastContainer from "./Toast/ToastContainer";
import { UiContext } from "../contexts/ui.js";
import UiContextProvider from "../contexts/ui.js";
import VariablesContextProvider from "../contexts/variables";
import { useRouter } from "next/router";

const SiteLayout = ({ children }) => {
  const uiContext = useContext(UiContext);
  const { query } = useRouter();
  const oldColors = query.oldcolors ? true : false;
  return (
    <>
    {uiContext.displayedToasts?.length > 0 && (
      <ToastContainer toasts={uiContext.displayedToasts} />
    )}
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
          {page}
        </PrototypeProvider>
      </VariablesContextProvider>
    </UiContextProvider>
  </SiteLayout>
  )
};

export default SiteLayout;
