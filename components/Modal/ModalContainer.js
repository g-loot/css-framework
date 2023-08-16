import React, { Fragment, useContext } from "react";

import ReactDOM from "react-dom";
import { UiContext } from "@/contexts/ui.js";

function overlayClickHandler() {
  
}

const Backdrop = (props) => {
  return <div className="modal-backdrop" onClick={props.onClick}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div onClick={overlayClickHandler} className="modal-container">
      <div className="modal-dialog">
        {props.children}
      </div>
    </div>
  );
};
const ModalContainer = (props) => {
  const portalElement = document.getElementById("overlays");

  const uiContext = useContext(UiContext);
  function backdropClickHandler() {
    uiContext.closeModal();
  }
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={backdropClickHandler} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default ModalContainer;
