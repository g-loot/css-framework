import React, { useContext, useState } from "react";

import { UiContext } from "../../../../contexts/ui.js";
import { VariablesContext } from "../../../../contexts/variables";
import { useRouter } from "next/router";

export default function ModalInfoBeforeYouPlay(props) {
  const router = useRouter();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);
  const hasAds = query.ads === "true" ? true : false;
  const { tab } = router.query;
  const [submitting, setSubmitting] = useState(false);

  function closeModalWithDelay() {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr({size: "small", text: "You have successfully registered to the tournament", color: "green", autoDelete: true, autoDeleteDelay: 2500});
      router.push(
        `${router.asPath}${
          hasAds || tab !== undefined ? "&" : "?"
        }registered=true`
      );
      variablesContext.incrementBrawlStep(props.incrementNumber);
      uiContext.closeModal();
      setSubmitting(false);
    }, 1000);
  }

  return (
    <>
      <div className="relative z-10">
        <div className="modal">
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
                backgroundImage:
                  "url(https://res.cloudinary.com/gloot/image/upload/v1660127469/Marketing/2022_prototype/modal-brawl-info.webp)",
              }}
            />
          </div>
          <div className="modal-content">
            <div className="modal-body">
              <h2 className="modal-title">Before you play</h2>
              <div className="alert alert-sm alert-orange mt-2 mb-3">
                <div>
                  <span className="icon icon-24 icon-c-info"></span>
                  <span>Tracker required.</span>
                </div>
                <div className="flex-none">
                  <button
                    type="button"
                    className="button button-sm button-tertiary"
                  >
                    <span>Download</span>
                  </button>
                </div>
              </div>
              <p>
                The Brawl match starts when you play your next match in the
                correct game mode and is counted when the match is over.
              </p>
              <p>
                Play at least 3 or more Brawl matches for the best chance to
                win. The combined points from your best matches decide your
                place on the leaderboard.
              </p>
              <div className="flex justify-center md:justify-start">
                <div className="form-checkbox mt-3">
                  <input type="checkbox" name="policy" id="skip" />
                  <label htmlFor="skip">Got it! Skip this next time</label>
                </div>
              </div>
            </div>
            <div className="modal-action">
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
                <span>Let&#39;s play!</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
