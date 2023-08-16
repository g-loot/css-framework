import React, { useContext, useState } from "react";

import Link from "next/link";
import { UiContext } from "@/contexts/ui";
import { VariablesContext } from "@/contexts/variables";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import PremiumLogo from "@/components/PremiumLogo/PremiumLogo";

export default function ModalReferSendInvite({onLoad}) {
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const [submitting, setSubmitting] = useState(false);
  const [emailStr, setEmailStr] = useState(0);

  function closeModalWithDelay() {
    setSubmitting(true);
    setTimeout(() => {
      uiContext.openToastr({
        size: "",
        text: "Invite sent",
        color: "green",
        autoDelete: true,
        autoDeleteDelay: 2500,
      });
      onLoad(emailStr);
      setSubmitting(false);
      uiContext.closeModal();
    }, 1000);
  }

  function isEmail(str) {
    const expression =
      /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return expression.test(String(str).toLowerCase());
  }

  return (
    <>
      <div className="modal modal-center max-w-sm">
        <button
          type="button"
          className="button button-secondary button-close"
          onClick={uiContext.closeModal}
        >
          <span className="icon icon-e-remove" />
        </button>
        <div className="modal-content">
          <div className="modal-body">
            <h2 className="h3 pr-4 leading-tight mx-4 mb-2">
              Boost you and your friends with{" "}
              <span className="whitespace-nowrap text-gold-500 px-1">
                <span className="translate-y-1 icon icon-coin"></span>{" "}
                <span>500</span>
              </span>
            </h2>
            <p>
              Invite your friends to Stryda. Once their Stryda account reaches
              Lv 10, you and your friend can claim 500 coins. Simply enter your
              friend&#39;s email address and hit “Send invite”.
            </p>
            <div className="form-group mt-4" data-success={isEmail(emailStr)}>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                autoFocus
                onChange={(event) => setEmailStr(event.target.value)}
              />
            </div>
          </div>
          <div className="modal-action">
            <button
              type="button"
              className={`button flex-1 button-primary ${
                submitting ? "is-loading" : ""
              }`}
              disabled={!isEmail(emailStr)}
              onClick={closeModalWithDelay}
            >
              <span>Send invite</span>
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
