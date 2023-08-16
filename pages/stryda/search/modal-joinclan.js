import React, { useContext, useState } from "react";

import { UiContext } from "@/contexts/ui.js";
import { VariablesContext } from "@/contexts/variables";
import { useRouter } from "next/router";
import { usePrototypeData } from "@/contexts/prototype.js";

export default function ModalJoinClan(props) {
  const router = useRouter();
  const prototype = usePrototypeData();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);
  const hasAds = query.ads === "true" ? true : false;
  const { tab } = router.query;
  const [submitting, setSubmitting] = useState(false);
  const clanID = props.clanID || 3;

  function closeModalWithDelay() {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr({
        size: "small",
        text: `You have joined the ${
          prototype.getClanByID(clanID)?.nickname
        } clan has been sent.`,
        color: "green",
        autoDelete: true,
        autoDeleteDelay: 2500,
      });
      router.push(
        `${router.asPath}${
          hasAds || tab !== undefined ? "&" : "?"
        }joined=${clanID}`
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
              <h2 className="modal-title">Join clan?</h2>
              <p>
                You are about to join the{" "}
                {prototype.getClanByID(clanID)?.nickname} clan.
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
                <span>Join clan</span>
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
