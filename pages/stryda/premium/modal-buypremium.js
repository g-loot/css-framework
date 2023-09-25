import React, { useContext, useState } from "react";

import Link from "next/link";
import { UiContext } from "@/contexts/ui";
import { VariablesContext } from "@/contexts/variables";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import PremiumLogo from "@/components/PremiumLogo/PremiumLogo";

const Offers = [
  {
    monthNumber: 1,
    pricePerMonth: "9.49€",
    giftAmount: "5€",
    renewDays: 30,
    type: "regular",
  },
  {
    monthNumber: 3,
    pricePerMonth: "7.50€",
    amount: "22.49€ quarterly",
    previousAmount: "28.47€",
    giftAmount: "10€",
    save: 22,
    renewDays: 90,
    type: "mostpopular",
  },
  {
    monthNumber: 12,
    pricePerMonth: "6.25€",
    amount: "74.99€ annually",
    previousAmount: "113.88€",
    giftAmount: "20€",
    save: 35,
    renewDays: 365,
    type: "bestvalue",
  },
];

export default function ModalBuyPremium(props) {
  const { query } = useRouter();
  const hasAds = query.ads === "true" ? true : false;
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const variablesContext = useContext(VariablesContext);
  const [submitting, setSubmitting] = useState(false);
  const [selectedGamesCount, setSelectedGamesCount] = useState(
    prototype.games.filter((g) => g.isFavorite).length
  );
  const [disabled, setDisable] = useState(false);

  const handlechange = (event) => {
    if (event.target.checked) {
      setSelectedGamesCount(selectedGamesCount + 1);
    } else {
      setSelectedGamesCount(selectedGamesCount - 1);
    }
  };

  function closeModalWithDelay() {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr({
        size: "",
        text: "Tokens bought successfully",
        color: "green",
        autoDelete: true,
        autoDeleteDelay: 2500,
      });
      uiContext.closeModal();
      setSubmitting(false);
    }, 1000);
  }

  function clearSelectedGame() {
    setSelectedGamesCount(0);
  }

  return (
    <>
      <div className="relative z-10 max-w-lg w-full">
        <div className="modal surface-transparent max-w-lg">
          <button
            type="button"
            className="button button-secondary button-close"
            onClick={uiContext.closeModal}
          >
            <span className="icon icon-e-remove" />
          </button>
          <div className="modal-content">
            <div className="modal-body text-center">
              <PremiumLogo
                className="mx-auto mb-4"
                src="https://res.cloudinary.com/gloot/image/upload/v1672241197/Stryda/logos/stryda-premium-logo-main-white-animated.svg"
                width="230"
                height="auto"
              />
              <h2 className="modal-title">Choose your Premium plan</h2>
              <div className="w-full flex flex-col md:flex-row gap-4 items-stretch justify-center mx-auto mt-4">
                {Offers.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`rounded-xl flex-1 flex flex-col animate-fade-in animate-delay p-1 ${
                      item.type === "bestvalue" ? "surface surface-ui-700" : ""
                    } ${
                      item.type === "mostpopular"
                        ? "border border-ui-700 bg-gradient-to-b from-interaction-300 via-interaction-500 to-interaction-500"
                        : ""
                    } ${!item.type ? "surface" : ""}`}
                    style={{ "--delay": "calc(" + itemIndex + " * 0.05s)" }}
                  >
                    <div className="px-2 pb-3 pt-2 text-center font-bold">
                      {item.type === "regular" && (
                        <span className="opacity-0">—</span>
                      )}
                      {item.type === "bestvalue" && (
                        <span className="text-main">Best value</span>
                      )}
                      {item.type === "mostpopular" && (
                        <span className="text-ui-800">Most popular</span>
                      )}
                    </div>
                    <div className="bg-ui-800 rounded-lg px-3 pb-3 flex-1 flex flex-col">
                      <div className="flex-1 flex-col items-center justify-between leading-none">
                        <div className="flex-1 my-12">
                          <h2 className="h3 mb-6">
                            {item.monthNumber} month
                            {item.monthNumber > 1 && <>s</>}
                          </h2>
                          <div className="flex justify-center items-baseline gap-1.5 text-center">
                            <div
                              className={`font-bold text-main ${
                                item.type === "regular" ? "text-[2.1rem]" : ""
                              } ${
                                item.type === "mostpopular"
                                  ? "text-[2.3rem]"
                                  : ""
                              } ${
                                item.type === "bestvalue" ? "text-[2.5rem]" : ""
                              }`}
                            >
                              {item.pricePerMonth}
                            </div>
                            <div className="uppercase">
                              / per month
                            </div>
                          </div>
                          <label className="text-sm text-ui-300">
                            {!item.amount ? (
                              <>billed monthly</>
                            ) : (
                              <>billed {item.amount}</>
                            )}
                          </label>
                        </div>
                        <div>
                          <div className="flex items-center justify-center leading-none gap-2 mb-4">
                            <div className="text-main font-bold text-[2.25rem] text-right">
                              {item.giftAmount}
                            </div>
                            <div className="text-left">
                              <div className="uppercase font-bold text-xl text-ui-100">
                                Free gift card
                              </div>
                              <div className="text-xs text-ui-300">
                                included with this subscription*
                              </div>
                            </div>
                          </div>
                          <img
                            src="https://res.cloudinary.com/gloot/image/upload/v1695642734/Stryda/illustrations/premium-giftcards.webp"
                            alt=""
                          />
                        </div>

                        {/* 
                        
                        <div className="flex justify-center gap-2 text-center text-3xl">
                          {item.previousAmount && (
                            <div className="text-ui-300 line-through">
                              {item.previousAmount}
                            </div>
                          )}
                          <div className="text-attention-300">
                            {item.amount}
                          </div>
                        </div>
                        <label className="text-sm text-ui-300">
                          {item.pricePerMonth && (
                            <>only {item.pricePerMonth} </>
                          )}
                          per month
                        </label>
                        {item.save && (
                          <h5
                            className={`mt-4 ${
                              item.type === "mostpopular"
                                ? "text-main"
                                : "text-premium-500"
                            }`}
                          >
                            Save {item.save}%
                          </h5> 
                          )}
                        */}
                      </div>

                      <div className="border-t border-ui-700 mt-3 pt-3">
                        <button
                          className={`button button-main w-full ${
                            submitting ? "is-loading" : ""
                          }`}
                          onClick={closeModalWithDelay}
                          disabled={selectedGamesCount === 0}
                        >
                          <span>Choose plan</span>
                        </button>
                        <div className="mt-2 text-xs text-ui-300">
                          Renews every {item.renewDays} days
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 text-center text-sm space-y-2 text-ui-300">
                <p>
                  You can cancel your subscription at any time via your Stryda
                  profile. Unless canceled, your subscription will be
                  automatically renewed at the end of each period.{" "}
                  <a
                    href="https://stryda.gg/terms-conditions?noRedirect=true"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Terms and Conditions and Payment Policies
                  </a>{" "}
                  apply.
                </p>
                <p>
                  *Please note: The gift cards we offer in our store do not
                  cater to all regions allowed on Stryda e.g. Riot cards
                  specifically for India. Please be sure to check our regional
                  availability and ensure that any gift card your purchase works
                  in your region. Everyone is able to use coins for profile
                  customization items and our Global gift card selection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
