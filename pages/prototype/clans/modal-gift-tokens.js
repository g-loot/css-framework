import React, { useContext, useState } from "react";

import InputNumber from "../../../components/InputNumber/InputNumber.js";
import { UiContext } from "../../../contexts/ui.js";
import { usePrototypeData } from "../../../contexts/prototype.js";

export default function ModalGiftTokens(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const [submitting, setSubmitting] = useState(false);
  function closeModalWithDelay() {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr({size: "medium", text: "Tokens gifted successfully", color: "green", autoDelete: true, autoDeleteDelay: 2500});
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
            <h2 className="modal-title">Gift tokens</h2>
            <img className="mx-auto -mt-4 -mb-6" src="https://res.cloudinary.com/gloot/image/upload/v1672159789/Stryda/currencies/Reward-centered-token-medium.png" width="175" height="175" alt="" />
            <p>
              You currently have: <span className="text-ui-100"><span className="text-2xl">{prototype.getUserByID(1)?.wallet.tokens}</span> <span className="text-xl">tokens</span></span>
            </p>
            <p className="font-bold">
              How many tokens do you want to gift {props.selectedUser}?
            </p>
            <div className="form-group w-56 mx-auto mt-6">
              <InputNumber />
            </div>
          </div>
          <div className="modal-action">
          
            <button
              type="button"
              className={`button button-primary ${
                submitting ? "is-loading" : ""
              }`}
              onClick={closeModalWithDelay}
            >
              <span>Gift token(s)</span>
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
