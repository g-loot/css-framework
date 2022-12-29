import React, { useContext, useState } from "react";

import Link from "next/link";
import { UiContext } from "../../../contexts/ui";
import { VariablesContext } from "../../../contexts/variables";
import { usePrototypeData } from "../../../contexts/prototype";
import { useRouter } from "next/router";
import PremiumLogo from "../../../components/PremiumLogo/PremiumLogo";

const Offers = [
  {
    tokenNumber: 60,
    amount: "17€",
    previousAmount: "34€",
    save: "50%",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1672160318/Stryda/currencies/Reward-centered-token-small.png",
    special: "bestvalue",
  },
  {
    tokenNumber: 10,
    amount: "4.30€",
    previousAmount: "5.70€",
    save: "24%",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1672159789/Stryda/currencies/Reward-centered-token-medium.png",
    special: "mostpopular",
  },
  {
    tokenNumber: 3,
    amount: "1.70€",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1672159333/Stryda/currencies/Reward-centered-token-large.png",
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
              <PremiumLogo className="mx-auto mb-4" src="https://res.cloudinary.com/gloot/image/upload/v1672241197/Stryda/logos/stryda-premium-logo-main-white-animated.svg" width="230" height="auto" />
              <h2 className="modal-title">Choose your Premium plan</h2>
              <div className="flex flex-col md:flex-row gap-4 items-stretch justify-center mx-auto mt-4">
                {Offers.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`rounded-xl flex-1 flex flex-col animate-fade-in animate-delay p-1 ${
                      item.special === "bestvalue"
                        ? "surface surface-ui-700"
                        : ""
                    } ${
                      item.special === "mostpopular"
                        ? "border border-ui-700 bg-main"
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
                        <img
                          className="w-auto h-52 mx-auto -mt-2 -mb-4 drop-shadow-2xl"
                          src={item.image}
                          width="auto"
                          height="auto"
                          alt="tokens"
                        />
                        <h2 className="mb-4 h3">{item.tokenNumber} tokens</h2>
                        {item.previousAmount && (
                          <>
                            <div className="flex gap-2 text-3xl text-center justify-center">
                              <span className="line-through text-ui-300">
                                {item.previousAmount}
                              </span>
                              <span className="text-main">
                                {item.amount}
                              </span>
                            </div>
                            <div className="text-sm uppercase text-ui-200 font-bold">
                              Save {item.save}
                            </div>
                          </>
                        )}
                        {!item.previousAmount && (
                          <>
                            <div className="flex gap-2 text-3xl text-center justify-center">
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
                          <span>Buy</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
