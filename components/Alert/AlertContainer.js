import React, { Fragment, useContext } from "react";

import ReactDOM from "react-dom";
import Alert from "./Alert.js";

const AlertContainer = (props) => {
  const portalElement = document.getElementById("alerts");
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <>
          {props.alerts?.map((alert, alertIndex) => (
            <Alert
              key={alert.id}
              status={alert.status}
              id={alert.id}
              size={alert.size}
              color={alert.color}
              icon={alert.icon}
              title={alert.title}
              text={alert.text}
              dismissable={alert.dismissable}
              autoDelete={alert.autoDelete}
              autoDeleteDelay={alert.autoDeleteDelay}
            />
          ))}
        </>,
        portalElement
      )}
    </Fragment>
  );
};
export default AlertContainer;
