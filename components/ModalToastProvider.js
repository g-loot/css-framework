import React, { useContext } from "react";

import ModalContainer from "./Modal/ModalContainer";
import ToastContainer from "./Toast/ToastContainer";
import AlertContainer from "./Alert/AlertContainer";
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
      {uiContext.displayedAlerts?.length > 0 && (
        <AlertContainer alerts={uiContext.displayedAlerts} />
      )}
      {children}
    </>
  );
};
export default ModalToastProvider;
