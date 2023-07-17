import React, { useContext, useState } from "react";

import { UiContext } from "../../../contexts/ui.js";
import { usePrototypeData } from "../../../contexts/prototype.js";

export default function ModalClanInvite(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const [submitting, setSubmitting] = useState(false);
  function closeModalWithDelay() {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr({
        size: "medium",
        text: "Link copied to your clipboard",
        color: "green",
        autoDelete: true,
        autoDeleteDelay: 2500,
      });
      uiContext.closeModal();
      setSubmitting(false);
    }, 500);
  }

  return (
    <>
      <div className="modal modal-center">
        <button
          type="button"
          className="button button-secondary button-close"
          onClick={uiContext.closeModal}
        >
          <span className="icon icon-e-remove" />
        </button>
        <div className="modal-content">
          <div className="modal-body">
            <h2 className="modal-title">Invite players</h2>
            <p>A new link has been generated for you.</p>
            <div className="flex gap-4 items-center justify-center mt-4">
              <button
                type="button"
                className={`button button-primary w-42 ${
                  submitting ? "is-loading" : ""
                }`}
                onClick={closeModalWithDelay}
              >
                <span>Copy link</span>
              </button>
              <button
                type="button"
                className="button button-secondary w-42"
                onClick={uiContext.closeModal}
              >
                <span>Cancel</span>
              </button>
            </div>

            <p className="text-sm text-ui-400 max-w-sm mx-auto mt-5">
              Copy and send the invite link to everyone you want to invite to
              your Clan. Players must be logged in to Stryda to access the link.
              This link is valid for 24 hours.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
