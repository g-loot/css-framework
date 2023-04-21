import React, { useState, useContext } from "react";
import { UiContext } from "../../../../contexts/ui";

export default function ButtonReminder(props) {
  const label = props.label || "button";
  const toastMessage = props.toastMessage || false;
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const uiContext = useContext(UiContext);

  function handleLoading() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDisabled(true);
      if(toastMessage) {
        uiContext.openToastr({
          size: "medium",
          text: toastMessage,
          color: "green",
          autoDelete: true,
          autoDeleteDelay: 2500,
        });
      }
    }, 3000);
  }

  return (
    <button
      type="button"
      className={`button ${props.className} ${
        loading ? "is-loading" : ""
      }`}
      disabled={disabled}
      onClick={handleLoading}
    >
      <span>{label}</span>
    </button>
  );
}
