import React, { useContext } from "react";

import ModalContainer from "./Modal/ModalContainer";
import ToastContainer from "./Toast/ToastContainer";
import { UiContext } from "../contexts/ui";

const ModalToastProvider = ({ children }) => {
  const uiContext = useContext(UiContext);
  return (
    <>
      {uiContext.displayedModal && (
        <ModalContainer>{uiContext.displayedModal}</ModalContainer>
      )}
      {uiContext.displayedToasts?.length > 0 && (
        <ToastContainer toasts={uiContext.displayedToasts} />
      )}
      {children}
    </>
  );
};
export default ModalToastProvider;
