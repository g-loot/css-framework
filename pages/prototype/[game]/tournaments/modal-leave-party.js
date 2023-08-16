import React, { useContext, useState } from "react";

import { UiContext } from "@/contexts/ui.js";
import { useRouter } from "next/router";

export default function ModalLeaveParty(props) {
  const router = useRouter();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const hasAds = query.ads === "true" ? true : false;
  const { tab } = router.query;
  const { game_id } = router.query;
  const { tournament_id } = router.query;
  const [submitting, setSubmitting] = useState(false);

  const removeQueryParam = (param) => {
    const { pathname, query } = router;
    const params = new URLSearchParams(query);
    params.delete(param);
    router.replace(
        { pathname, query: params.toString() },
        undefined, 
        { shallow: true }
    );
};

  function closeModalWithDelay() {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr({size: "medium", text: "You have unregistered from the tournament", color: "green", autoDelete: true, autoDeleteDelay: 2500});
      removeQueryParam('registered');
      uiContext.closeModal();
      setSubmitting(false);
    }, 3000);
  }

  return (
    <>
      <div className="relative z-10 max-w-sm w-full">
        <div className="modal">
          <button
            type="button"
            className="button button-secondary button-close"
            onClick={uiContext.closeModal}
          >
            <span className="icon icon-e-remove" />
          </button>
          <div className="modal-content">
            <div className="modal-body text-center">
              <h2 className="modal-title">Leave party?</h2>
              <p>
              You are about to leave the party. This may cause your party to be disqualified from their current tournament or competition.
              </p>
            </div>
            <div className="modal-action justify-center">
              {/* 
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
                <span>Leave party</span>
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
      </div>
    </>
  );
}
