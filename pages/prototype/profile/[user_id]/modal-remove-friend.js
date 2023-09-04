import React, { useContext, useState } from "react";

import { UiContext } from "@/contexts/ui.js";
import { usePrototypeData } from "@/contexts/prototype.js";

export default function ModalRemoveFriend(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const [submitting, setSubmitting] = useState(false);
  function closeModalWithDelay() {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr({
        size: "medium",
        text: "Friend removed successfully",
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
      <div className="modal max-w-sm modal-center">
        <button
          type="button"
          className="button button-secondary button-close"
          onClick={uiContext.closeModal}
        >
          <span className="icon icon-e-remove" />
        </button>
        <div className="modal-content">
          <div className="modal-body">
            <h2 className="modal-title">Unfollow {prototype.getUserByID(props.id)?.nickname}?</h2>
            <p>
              You are about to remove{" "}
              {prototype.getUserByID(props.id)?.nickname} from your followers.
              <br />
              Are you sure?
            </p>
          </div>
          <div className="modal-action">
            <button
              type="button"
              className={`button button-primary ${
                submitting ? "is-loading" : ""
              }`}
              onClick={closeModalWithDelay}
            >
              <span>Remove as follower</span>
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
    </>
  );
}
