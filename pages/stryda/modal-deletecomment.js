import React, { useContext, useState } from "react";

import { UiContext } from "@/contexts/ui.js";

export default function ModalDeleteComment() {
  const uiContext = useContext(UiContext);
  const [submitting, setSubmitting] = useState(false);
  function closeModalWithDelay() {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr({
        size: "medium",
        text: `The comment has been deleted successfully.`,
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
        <div className="modal-content">
          <div className="modal-body">
            <h2 className="modal-title h4">Delete comment?</h2>
            <p>You are about to delete the comment. Are you sure?</p>
          </div>
          <div className="modal-action">
            <button
              type="button"
              className={`button flex-1 button-primary ${
                submitting ? "is-loading" : ""
              }`}
              onClick={closeModalWithDelay}
            >
              <span>Delete comment</span>
            </button>
            <button
              type="button"
              className="button flex-1 button-secondary"
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
