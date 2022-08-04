import React, { useContext, useState } from "react";

import { UiContext } from "../../../contexts/ui.js";

const Modal1 = (props) => {
  const uiContext = useContext(UiContext);
  const [submitting, setSubmitting] = useState(false);
  function closeModalWithDelay() {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.closeModal();
      setSubmitting(false);
    }, 1000);
  }

  return (
    <>
      <div className="modal surface">
        <button
          type="button"
          className="button button-secondary button-close"
          onClick={uiContext.closeModal}
        >
          <span className="icon icon-e-remove" />
        </button>
        <div className="modal-image">
          <span
            style={{
              backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644831593/Marketing/202109_gloot2/tournament-pubg_1.jpg)`,
            }}
          />
        </div>
        <div className="modal-content">
          <div className="modal-body">
            <h2 className="modal-title">Leave party?</h2>
            <p>
              We are looking to find you the best match. Leaving the party means
              you lose your spot in the queue for the tournament.
            </p>
          </div>
          <div className="modal-action">
            { /*
            {submitting && <span>...Submitting</span>}
            {!submitting && (
              <button type="button" onClick={closeModalWithDelay}>
                Ok
              </button>
            )}
            */}
            <button
              type="button"
              className={`button button-primary ${
                submitting ? "is-loading" : ""
              }`}
              onClick={closeModalWithDelay}
            >
              <span>Stay in party</span>
            </button>
            <button
              type="button"
              className="button button-secondary"
              onClick={uiContext.closeModal}
            >
              <span>Leave party</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal1;
