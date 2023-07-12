import React, { useContext, useState, useEffect } from "react";
import { UiContext } from "../../../../contexts/ui.js";
import { usePrototypeData } from "../../../../contexts/prototype.js";
import ModalPurchaseCompleted from "./modal-purchasecompleted.js";
import { dataVouchers } from "../../../../mock-data/data-vouchers.js";

export default function ModalPurchaseConfirmation(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const [submitting, setSubmitting] = useState(false);
  const voucher = props.voucher || 1;
  const section = props.section || 1;
  const giftcard = props.giftcard || 1;

  const getVoucherByID = (id) => {
    return dataVouchers.find((voucher) => {
      return voucher.id === parseInt(id);
    });
  };

  const getVoucherSectionByID = (voucherID, id) => {
    const voucher = getVoucherByID(voucherID);
    const selectedSection = voucher?.sections?.find((section) => {
      return section.id === parseInt(id);
    });
    return selectedSection;
  };

  const getVoucherGiftcardByID = (voucherID, section, id) => {
    const selectedSection = getVoucherSectionByID(voucherID, section);
    const selectedGiftcard = selectedSection?.giftcards?.find((giftcard) => {
      return giftcard.id === parseInt(id);
    });
    return selectedGiftcard;
  };

  function closeModalWithDelay(voucher, section, giftcard) {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      uiContext.closeModal();
      uiContext.openModal(
        <ModalPurchaseCompleted
          voucher={voucher}
          section={section}
          giftcard={giftcard}
        />
      );
    }, 1000);
  }

  function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

  return (
    <>
      {dataVouchers && (
        <div className="relative z-10 max-w-sm w-full">
          <div className="modal w-full">
            <div className="modal-content">
              <div className="modal-body text-center">
                <h2 className="modal-title !pr-0">
                  You are about to purchase:
                </h2>
                <div className="mt-4">
                  <h4>
                    {getVoucherByID(voucher).name}{" "}
                    {getVoucherGiftcardByID(voucher, section, giftcard).amount}
                  </h4>
                  <div className="flex items-center justify-center gap-2">
                    <p>Cost:</p>
                    <div className="flex items-center whitespace-nowrap gap-1">
                      <span className="icon icon-coin text-currency-1-500" />
                      <span
                        className={`text-currency-1-500 ${props.textClassNames}`}
                      >
                        {numberWithSpaces(
                          getVoucherGiftcardByID(voucher, section, giftcard)
                            .price
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-72 mx-auto my-4 space-y-4">
                  <div className="alert alert-orange animate-fade-in">
                    <div>
                      <span className="icon icon-24 icon-warning-sign" />
                      <span>
                        Valid in {getVoucherSectionByID(voucher, section).name}
                      </span>
                    </div>
                  </div>
                  <img
                    src={getVoucherByID(voucher).image}
                    alt=""
                    className="w-full h-auto shadow-2xl rounded animate-scale-in"
                  />
                </div>
                <div className="leading-normal">
                  <p>
                    Your code will be emailed to this address within 24 hours:
                  </p>
                  <p className="text-sm">{prototype.getUserByID(1).email}</p>
                </div>
                <div className="mt-2">
                  <h5>Are you sure?</h5>
                  <p>Stryda will not refund purchased gift cards.</p>
                </div>
              </div>
              <div className="modal-action justify-center">
                <button
                  type="button"
                  onClick={closeModalWithDelay.bind(
                    this,
                    voucher,
                    section,
                    giftcard
                  )}
                  className={`flex-1 button button-primary button-currency button-coin ${
                    submitting ? "is-loading" : ""
                  }`}
                >
                  <div>
                    <span>Confirm</span>
                  </div>
                  <div>
                    <span className="icon icon-coin" />
                    <span>
                      {numberWithSpaces(
                        getVoucherGiftcardByID(voucher, section, giftcard).price
                      )}
                    </span>
                  </div>
                </button>
                <button
                  className="flex-1 button button-secondary w-32"
                  onClick={uiContext.closeModal}
                >
                  <span>Cancel</span>
                </button>
              </div>
              <div className="text-sm text-ui-300 text-center mt-4">
                By clicking Confirm, you agree to our{" "}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-underline"
                >
                  Terms &amp; Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
