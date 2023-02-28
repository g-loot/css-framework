import React, { useState, useContext } from "react";
import { UiContext } from "../../contexts/ui";

export default function ButtonFeedback(props) {
  const uiContext = useContext(UiContext);
  const [buttonFeedbackMessage, setButtonFeedbackMessage] = useState("");
  const variant =
    props.variant !== undefined
      ? props.variant
      : "rounded-full button-secondary";
  const message = props.message !== undefined ? props.message : "success";
  const type = props.type !== undefined ? props.type : "success";
  const icon =
    props.icon !== undefined ? props.icon : "icon-network-communication";
  const delay = 4000;

  function handleButtonFeedback(message) {
    uiContext.openToastr({
      text: message,
      color: "green",
      autoDelete: true,
      autoDeleteDelay: 2500,
    });
    setButtonFeedbackMessage(message);
    const interval = setTimeout(() => {
      setButtonFeedbackMessage("");
    }, delay);
    return () => clearTimeout(interval);
  }

  return (
    <button
      className={`button before:!hidden ${variant}`}
      data-feedback={buttonFeedbackMessage}
      data-feedback-icon={type}
      onClick={handleButtonFeedback.bind(this, message)}
    >
      <span className={`icon ${icon}`} />
    </button>
  );
}
