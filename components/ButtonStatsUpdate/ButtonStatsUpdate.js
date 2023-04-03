import React, { useContext, useEffect, useState } from "react";
import { UiContext } from "../../contexts/ui";
import { usePrototypeData } from "../../contexts/prototype";
import { useRouter } from "next/router";

export default function ButtonStatsUpdate(props) {
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const [submitting, setSubmitting] = useState(false);
  const [isMoreProminent, setIsMoreProminent] = useState(false);

  useEffect(() => {
    handleMoreProminent(4000);
  }, []);

  function addToastWithDelay(toast) {
    setSubmitting(true);

    setTimeout(() => {
      setIsMoreProminent(false);
      uiContext.openToastr(toast);
      setSubmitting(false);
      handleMoreProminent(8000);
    }, 1000);
  }

  function handleMoreProminent(duration) {
    setTimeout(() => {
      setIsMoreProminent(true);
    }, duration);
  }

  return (
    <>
      <div
        className={`${
          isMoreProminent ? "tooltip tooltip-attention tooltip-left" : ""
        }`}
        data-tooltip={isMoreProminent ? 'Missing progress? Press here!' : ''}
      >
        <button
          className={`button button-xs ${
            isMoreProminent ? "button-primary" : "button-secondary"
          } ${submitting ? "is-loading" : undefined}`}
          onClick={addToastWithDelay.bind(this, {
            icon: "f-check",
            color: "green",
            text: "Your stats have been updated.",
            autoDelete: true,
            autoDeleteDelay: 2500,
          })}
        >
          <span className="icon icon-16 icon-refresh-02" />
          <span className="hidden sm:block">Request a stats update</span>
          <span className="block sm:hidden">Update</span>
        </button>
      </div>
    </>
  );
}
