import React, { useContext, useState } from "react";

import Link from "next/link";
import { UiContext } from "../../../contexts/ui";
import { VariablesContext } from "../../../contexts/variables";
import { usePrototypeData } from "../../../contexts/prototype";
import { useRouter } from "next/router";

const Offers = [
  {
    monthsAmount: 12,
    amount: "429.00kr",
    previousAmount: "1068.00kr",
    onlyPerMonth:  "35.75kr",
    save: "60%",
    special: "bestvalue",
  },
  {
    monthsAmount: 3,
    amount: "199.00kr",
    previousAmount: "267.00kr",
    onlyPerMonth:  "66.33kr",
    save: "26%",
    special: "mostpopular",
  },
  {
    monthsAmount: 1,
    amount: "89.00kr",
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
    console.log(event.target.checked);
    if (event.target.checked) {
      setSelectedGamesCount(selectedGamesCount + 1);
    } else {
      setSelectedGamesCount(selectedGamesCount - 1);
    }
  };

  function closeModalWithDelay() {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr({size: "", text: "Tokens bought successfully", color: "green", autoDelete: true, autoDeleteDelay: 2500});
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
              <h2 className="modal-title mb-2">Choose your Premium plan</h2>
              <div className="overflow-x-auto scrollbar-desktop">
                <div className="flex flex-col md:flex-row gap-4 items-stretch justify-center mx-auto">
                  {Offers.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={`rounded-xl flex-1 max-w-[350px] flex flex-col animate-fade-in animate-delay p-1 ${
                        item.special === "bestvalue"
                          ? "surface surface-ui-700"
                          : ""
                      } ${
                        item.special === "mostpopular"
                          ? "border border-ui-700 bg-gradient-to-b from-blue-300 to-blue-500/25"
                          : ""
                      } ${!item.special ? "surface" : ""}`}
                      style={{ "--delay": "calc(" + itemIndex + " * 0.05s)" }}
                    >
                      <div className="px-2 pb-3 pt-2 text-center font-bold">
                        {item.special === "bestvalue" && (
                          <span className="text-gold-500">Best value</span>
                        )}
                        {item.special === "mostpopular" && (
                          <span className="text-ui-800">Most popular</span>
                        )}
                        {!item.special && <span className="opacity-0">—</span>}
                      </div>
                      <div className="bg-ui-800 rounded-lg px-3 pb-3 flex-1 flex flex-col">
                        <div className="flex-1">
                          <h2 className="mt-6 mb-4 h3">{item.monthsAmount} month{item.monthsAmount > 1 && (<>s</>)}</h2>
                          {item.previousAmount && (
                            <>
                              <div className="flex gap-2 text-3xl text-center justify-center font-headings">
                                <span className="line-through text-ui-300">
                                  {item.previousAmount}
                                </span>
                                <span className="text-blue-500">
                                  {item.amount}
                                </span>
                              </div>
                              <div className="text-sm text-ui-300 uppercase">
                                {item.onlyPerMonth && (
                                  <>Only {item.onlyPerMonth} per month</>
                                )}
                              </div>
                              <div className="h5">
                                Save {item.save}
                              </div>
                            </>
                          )}
                          {!item.previousAmount && (
                            <>
                              <div className="flex gap-2 text-3xl text-center justify-center font-headings">
                                <span className="text-ui-200">
                                  {item.amount}
                                </span>
                              </div>
                            </>
                          )}
                        </div>

                        <div className="border-t border-ui-700 mt-3 pt-3">
                          <button
                            className={`button button-primary w-full ${
                              submitting ? "is-loading" : ""
                            }`}
                            onClick={closeModalWithDelay}
                            disabled={selectedGamesCount === 0}
                          >
                            <span>Choose Plan</span>
                          </button>
                          <div className="text-sm uppercase mt-2">
                            Renews every 90 days
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
