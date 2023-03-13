import React, { Fragment, useContext } from "react";

import ReactDOM from "react-dom";
import Toast from "./Toast.js";

const ToastContainer = (props) => {
  const portalElement = document.getElementById("toasts");
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className="toast-container">
          {props.toasts?.map((toast, toastIndex) => (
            <Toast
              key={toast.id}
              status={toast.status}
              id={toast.id}
              size={toast.size}
              color={toast.color}
              icon={toast.icon}
              title={toast.title}
              text={toast.text}
              dismissable={toast.dismissable}
              autoDelete={toast.autoDelete}
              autoDeleteDelay={toast.autoDeleteDelay}
            />
          ))}
        </div>,
        portalElement
      )}
    </Fragment>
  );
};
export default ToastContainer;
