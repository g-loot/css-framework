import React, { useContext, useState } from "react";
import { UiContext } from "../../../../contexts/ui.js";
import { VariablesContext } from "../../../../contexts/variables";
import { usePrototypeData } from "../../../../contexts/prototype.js";
import ModalProfileBannerPurchaseCompleted from "./modal-profilebannerpurchasecompleted.js";

export default function ModalProfileBannerPurchaseConfirmation(props) {
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);
  const [submitting, setSubmitting] = useState(false);
  const id = props.id || 1;
  const prototype = usePrototypeData();
  const selectedItem = prototype.getShopitemByID(2, id);

  function closeModalWithDelay(id) {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      uiContext.closeModal();
      uiContext.openModal(<ModalProfileBannerPurchaseCompleted id={id} />);
    }, 1000);
  }

  function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

  return (
    <>
      <div className="relative z-10 max-w-md w-full">
        <div className="modal w-full">
          <div className="modal-content">
            <div className="modal-body text-center">
              <h2 className="modal-title">Purchase confirmation</h2>
              <p>You are about to purchase the following item:</p>
              <div className="border-t border-ui-700 mt-4 pt-8 pb-4">
                <img src={selectedItem.image} alt={selectedItem.name} className="aspect-[12/2] rounded object-cover surface mb-2" />
                <div className="text-ui-300 uppercase text-xl">
                  {selectedItem.name}
                </div>
              </div>
            </div>
            <div className="modal-action justify-center">
              <button
                type="button"
                onClick={closeModalWithDelay.bind(this, selectedItem.id)}
                className={`flex-1 button button-primary button-currency button-coin ${
                  submitting ? "is-loading" : ""
                }`}
              >
                <div>
                  <span>Confirm</span>
                </div>
                <div>
                  <span className="icon icon-coin" />
                  <span>{numberWithSpaces(selectedItem.price)}</span>
                </div>
              </button>
              <button
                className="flex-1 button button-secondary w-32"
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
