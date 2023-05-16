import React, { useContext, useState, useEffect } from "react";
import { UiContext } from "../../../../contexts/ui.js";
import { usePrototypeData } from "../../../../contexts/prototype.js";
import { dataVouchers } from "../../../../mock-data/data-vouchers.js";
import Lottie from "lottie-react";
import LottieExplosion from "../../../../assets/animations/explosion_stryda_10.json";

export default function ModalPurchaseCompleted(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const [submitting, setSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const vouchers = dataVouchers;
  const voucher = props.voucher || 1;
  const section = props.section || 1;
  const giftcard = props.giftcard || 1;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 10);
  }, []);

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

  function closeModalWithDelay() {
    setSubmitting(true);
    setTimeout(() => {
      uiContext.openToastr({
        size: "small",
        text: "Purchase successfull",
        color: "green",
        autoDelete: true,
        autoDeleteDelay: 2500,
      });
      setSubmitting(false);
      uiContext.closeModal();
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
        <>
          <div className="relative z-10 max-w-sm w-full">
            <div className="modal w-full">
              <div className="modal-content">
                <div className="modal-body text-center">
                  <h2 className="modal-title !pr-0">Purchase successful</h2>
                  <div className="mt-4">
                    <h4>
                      {getVoucherByID(voucher).name}{" "}
                      {
                        getVoucherGiftcardByID(voucher, section, giftcard)
                          .amount
                      }
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
                          Valid in{" "}
                          {getVoucherSectionByID(voucher, section).name}
                        </span>
                      </div>
                    </div>
                    <img
                      src={getVoucherByID(voucher).image}
                      alt=""
                      className="w-full h-auto rounded animate-scale-in"
                    />
                  </div>
                  <div className="leading-normal">
                    <p>
                      Thank you for your purchase, your code will be emailed to
                      this address within 24h:
                    </p>
                    <p className="text-sm">{prototype.getUserByID(1).email}</p>
                  </div>
                </div>
                <div className="modal-action">
                  <button
                    className={`button button-primary flex-1 ${
                      submitting ? "is-loading" : ""
                    }`}
                    onClick={() => closeModalWithDelay()}
                  >
                    <span>Got it</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-20 flex items-center justify-center pointer-events-none">
            <div className="lottie-blur h-[75vh] w-[75vh] flex items-center justify-center">
              <Lottie
                animationData={LottieExplosion}
                loop={false}
                autoplay={true}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
