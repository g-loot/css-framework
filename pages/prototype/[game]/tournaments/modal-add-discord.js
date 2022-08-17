import React, { useContext, useState } from "react";

import { UiContext } from "../../../../contexts/ui.js";
import { useRouter } from "next/router";

export default function ModalAddDiscord(props) {
  const router = useRouter();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const hasAds = query.ads === "true" ? true : false;
  const { tab } = router.query;
  const [submitting, setSubmitting] = useState(false);

  function closeModalWithDelay() {
    setSubmitting(true);

    setTimeout(() => {
      router.push(
        `${router.asPath}${hasAds || tab !== undefined ? "&" : "?"}registered=true`
      );
      uiContext.closeModal();
      setSubmitting(false);
    }, 3000);
  }

  return (
    <>
      <div className="relative z-10 max-w-sm w-full">
        <div className="modal surface">
          <button
            type="button"
            className="button button-secondary button-close"
            onClick={uiContext.closeModal}
          >
            <span className="icon icon-e-remove" />
          </button>
          <div className="modal-content">
            <div className="modal-body">
              <h2 className="modal-title">Add your Discord username</h2>
              <p>
                Enter your Discord username and join our Discord to make sure
                you get important updates about your tournament and party.
              </p>
              <div className="border-t border-ui-700 pt-4 mt-3">
                <div className="form-group">
                  <label htmlFor="discord">Discord username</label>
                  <div className="input-group">
                    <span>
                      <span className="icon icon-discord" />
                    </span>
                    <input
                      type="text"
                      name="discord"
                      id="discord"
                      placeholder="Example: Gloot#123"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="uppercase text-ui-300 text-sm font-bold">
                    Discord link
                  </div>
                  <a
                    className="link"
                    href="https://discord.gg/gloot"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    discord.gg/gloot
                  </a>
                </div>
                <div className="mt-4">
                  <div className="text-ui-300 text-sm">
                    For more information, go to{" "}
                    <a
                      className="link"
                      href="https://help.gloot.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      help.gloot.com
                    </a>
                  </div>
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
                <span>Submit</span>
              </button>
              <button
                type="button"
                className="button button-secondary"
                onClick={uiContext.closeModal}
              >
                <span>Skip</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
