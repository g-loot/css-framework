import React, { useContext, useState } from "react";

import { UiContext } from "../../../contexts/ui.js";
import { VariablesContext } from "../../../contexts/variables";
import { useRouter } from "next/router";
import { usePrototypeData } from "../../../contexts/prototype.js";

export default function ModalRecruitPlayer(props) {
  const router = useRouter();
  const prototype = usePrototypeData();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);
  const hasAds = query.ads === "true" ? true : false;
  const { tab } = router.query;
  const [submitting, setSubmitting] = useState(false);
  const userID = props.userID || 3;

  function closeModalWithDelay() {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr({
        size: "small",
        text: `${
          prototype.getUserByID(userID)?.nickname
        } has been invited to join your clan.`,
        color: "green",
        autoDelete: true,
        autoDeleteDelay: 2500,
      });
      router.push(
        `${router.asPath}${
          hasAds || tab !== undefined ? "&" : "?"
        }invited=${userID}`
      );
      variablesContext.incrementLadderStep(props.incrementNumber);
      uiContext.closeModal();
      setSubmitting(false);
    }, 1000);
  }

  return (
    <>
      <div className="relative z-10">
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
              <h2 className="modal-title">Recruit player?</h2>
              <p>
                You are about to invite{" "}
                {prototype.getUserByID(userID)?.nickname} to your clan.
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
                <span>Recruit player</span>
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
