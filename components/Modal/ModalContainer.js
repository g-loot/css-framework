import React, { Fragment, useContext } from 'react';

import ReactDOM from 'react-dom';
import { UiContext } from '../../contexts/ui.js';

function overlayClickHandler() {
  console.log('overlayClickHandler');
}

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClick}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div onClick={overlayClickHandler} className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};
const ModalContainer = (props) => {

  const portalElement = document.getElementById('overlays');

  const uiContext = useContext(UiContext);
  function backdropClickHandler() {
    console.log('backdropClickHandler');
    uiContext.closeModal();
  }
  console.log('props.children of ModalContainer::', props.children);
  // const modalToDisplay = ModalComponents.find((m) => m === props.children);
  console.log('modalToDisplay');
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