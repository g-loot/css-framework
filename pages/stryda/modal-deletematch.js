import React, { useContext, useState } from "react";

import InputNumber from "@/components/InputNumber/InputNumber.js";
import { UiContext } from "@/contexts/ui.js";
import { usePrototypeData } from "@/contexts/prototype.js";
import Avatar from "@/components/Avatar/Avatar";
import FeedItemMatchTabSummary from "./components/FeedItemMatchTabSummary";

export default function ModalDeleteMatch(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const match = props.match;
  const item = props.item;
  const [submitting, setSubmitting] = useState(false);
  function closeModalWithDelay() {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr({
        size: "medium",
        text: `The match has been deleted successfully.`,
        color: "green",
        autoDelete: true,
        autoDeleteDelay: 2500,
      });
      uiContext.closeModal();
      setSubmitting(false);
    }, 3000);
  }

  return (
    <>
    {match && (
      <div className="modal max-w-sm modal-center">
        <div className="modal-content">
          <div className="modal-body">
            <h2 className="modal-title h4">Delete match?</h2>
            <div className="max-w-sm rounded surface overflow-hidden">
              <FeedItemMatchTabSummary match={match} item={item} />
            </div>
          </div>
          <div className="modal-action">
            <button
              type="button"
              className={`button button-primary ${
                submitting ? "is-loading" : ""
              }`}
              onClick={closeModalWithDelay}
            >
              <span>Delete match</span>
            </button>
            <button
              type="button"
              className="button button-secondary"
              onClick={uiContext.closeModal}
            >
              <span>Cancel</span>
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
