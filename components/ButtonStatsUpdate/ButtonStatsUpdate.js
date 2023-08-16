import React, { useContext, useEffect, useState } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";

export default function ButtonStatsUpdate(props) {
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const [submitting, setSubmitting] = useState(false);
  const [isMoreProminent, setIsMoreProminent] = useState(false);

  useEffect(() => {
    handleMoreProminent(5000);
  }, []);

  function addToastWithDelay(toast) {
    setSubmitting(true);
    setIsMoreProminent(false);

    setTimeout(() => {
      uiContext.openToastr(toast);
      setSubmitting(false);
      handleMoreProminent(15000);
    }, 2500);
  }

  function handleMoreProminent(duration) {
    setTimeout(() => {
      setIsMoreProminent(true);
    }, duration);
  }

  return (
    <>
      <div
        className={`md:tooltip-left ${
          isMoreProminent && !submitting ? "tooltip tooltip-attention" : ""
        }`}
        data-tooltip={`${
          isMoreProminent ? "Missing progress? Click here!" : ""
        }${
          submitting
            ? "This might take up to 15 minutes. Make sure the match you’re trying to fetch is 100% completed."
            : ""
        }`}
      >
        <button
          className={`w-full button button-xs ${
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
          <span>Update my stats</span>
        </button>
      </div>
    </>
  );
}
