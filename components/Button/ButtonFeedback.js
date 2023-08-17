import React, { useState, useContext } from "react";
import { UiContext } from "@/contexts/ui";

export default function ButtonFeedback(props) {
  const uiContext = useContext(UiContext);
  const [buttonFeedbackMessage, setButtonFeedbackMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const variant =
    props.variant !== undefined
      ? props.variant
      : "rounded-full button-secondary";
  const value = props.value || "";
  const label = props.label;
  const delay = props.delay || 0;
  const message = props.message !== undefined ? props.message : "success";
  const type = props.type !== undefined ? props.type : "success";
  const icon =
    props.icon !== undefined ? props.icon : "icon-network-communication";
  const feedbackDelay = 4000;

  function handleButtonFeedback(message) {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      uiContext.openToastr({
        text: message,
        color: "green",
        autoDelete: true,
        autoDeleteDelay: 2500,
      });
      navigator.clipboard.writeText(value);
      setButtonFeedbackMessage(message);
      setTimeout(() => {
        setButtonFeedbackMessage("");
      }, feedbackDelay);
    }, delay);
  }

  return (
    <button
      className={`button before:!hidden ${variant} ${
        submitting ? "is-loading" : undefined
      }`}
      data-feedback={buttonFeedbackMessage}
      data-feedback-icon={type}
      onClick={handleButtonFeedback.bind(this, message)}
    >
      <span className={`icon ${icon}`} />
      {label && <span>{label}</span>}
    </button>
  );
}
