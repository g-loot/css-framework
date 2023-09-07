import React, { useContext, useState } from "react";

import Link from "next/link";
import { UiContext } from "@/contexts/ui";
import { VariablesContext } from "@/contexts/variables";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import PremiumLogo from "@/components/PremiumLogo/PremiumLogo";

const TokensLItems = [
  {
    tokenNumber: 400,
    amount: "4.49 €",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1672159333/Stryda/currencies/Reward-centered-token-small.png",
    special: null,
  },
  {
    tokenNumber: 800,
    amount: "7.99 €",
    previousAmount: "8.99 €",
    save: "11%",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1672159789/Stryda/currencies/Reward-centered-token-medium.png",
    special: "mostpopular",
  },
  {
    tokenNumber: 2000,
    amount: "18.49 €",
    previousAmount: "22.49 €",
    save: "17%",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1672159789/Stryda/currencies/Reward-centered-token-large.png",
    special: "bestvalue",
  },
  {
    tokenNumber: 800,
    amount: "4.45 €",
    previousAmount: "8.99 €",
    save: "50%",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1672159789/Stryda/currencies/Reward-centered-token-medium.png",
    special: "premiumoffer",
  },
];
const PowerTokensLItems = [
  {
    tokenNumber: 45,
    amount: "2.79 €",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1672159333/Stryda/currencies/Reward-centered-powertoken-small.png",
    special: null,
  },
  {
    tokenNumber: 105,
    amount: "6.49 €",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1672159789/Stryda/currencies/Reward-centered-powertoken-medium.png",
    special: "mostpopular",
  },
  {
    tokenNumber: 255,
    amount: "15.79 €",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1672159789/Stryda/currencies/Reward-centered-powertoken-large.png",
    special: "bestvalue",
  },
  {
    tokenNumber: 105,
    amount: "2.2 €",
    previousAmount: "6.495 €",
    save: "50%",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1672159789/Stryda/currencies/Reward-centered-powertoken-medium.png",
    special: "premiumoffer",
  },
];

/*
special: "bestvalue",
special: "mostpopular",
*/

export default function ModalBuyTokens(props) {
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

  function Bundle(item, itemIndex) {
    return (
      <div
        key={itemIndex}
        className={`rounded-xl flex-1 min-w-[250px] flex flex-col animate-fade-in animate-delay p-1 ${
          item.special === "bestvalue" ? "surface surface-ui-700" : ""
        } ${
          item.special === "mostpopular" ? "border border-ui-700 bg-main" : ""
        } ${
          item.special === "premiumoffer"
            ? "border border-ui-700 bg-premium-500"
            : ""
        } ${!item.special ? "surface" : ""}`}
        style={{ "--delay": "calc(" + itemIndex + " * 0.05s)" }}
      >
        <div className="px-2 pt-1 pb-2 text-sm text-center font-bold">
          {item.special === "bestvalue" && (
            <span className="text-main">Best value</span>
          )}
          {item.special === "mostpopular" && (
            <span className="text-ui-800">Most popular</span>
          )}
          {item.special === "premiumoffer" && (
            <span className="text-ui-800">Premium offer</span>
          )}
          {!item.special && <span className="opacity-0">—</span>}
        </div>
        <div className="bg-ui-800 rounded-lg px-3 pb-3 flex-1 flex flex-col">
          <div className="flex-1">
            <img
              className="w-auto h-36 mx-auto -mb-4"
              src={item.image}
              width="auto"
              height="auto"
              alt=""
            />
            <h2 className="h5">{item.tokenNumber} tokens</h2>
            {item.previousAmount && (
              <>
                <div className="flex gap-2 my-1 text-center justify-center">
                  <span className="line-through text-ui-300">
                    {item.previousAmount}
                  </span>
                  <span className="text-main">{item.amount}</span>
                </div>
                <div className="text-sm uppercase text-ui-200 font-bold">
                  Save {item.save}
                </div>
              </>
            )}
            {!item.previousAmount && (
              <>
                <div className="flex gap-2 my-1 text-center justify-center">
                  <span className="text-ui-200">{item.amount}</span>
                </div>
              </>
            )}
          </div>

          <div className="border-t border-ui-700 mt-4 pt-4">
            <button
              className={`button button-secondary button-currency button-coin w-full ${
                submitting ? "is-loading" : ""
              }`}
              onClick={closeModalWithDelay}
              disabled={selectedGamesCount === 0}
            >
              <div>
                <span>Buy</span>
              </div>
              <div>
                <span>{item.amount}</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative z-10 max-w-xl w-full">
        <div className="modal surface-transparent max-w-xl">
          <button
            type="button"
            className="button button-secondary button-close"
            onClick={uiContext.closeModal}
          >
            <span className="icon icon-e-remove" />
          </button>
          <div className="modal-content p-0 md:p-4">
            <div className="modal-body text-center">
              <div className="surface surface-highlight-premium rounded-lg overflow-hidden flex flex-col md:flex-row items-center md:gap-8 p-4 mt-8 mb-4">
                <PremiumLogo
                  src="https://res.cloudinary.com/gloot/image/upload/v1672241197/Stryda/logos/stryda-premium-logo-main-white-animated.svg"
                  width="210"
                  height="auto"
                />
                <div className="leading-tight py-2 text-center md:text-left mt-4 md:mt-0">
                  Premium subscribers get up to 300 extra tokens every time they
                  make a token bundle purchase
                </div>
                <div />
                <div className="py-4">
                  <Link href={`/prototype/premium${prototype.getURLparams()}`}>
                    <a className="button button-premium whitespace-nowrap">
                      <span>Subscribe now</span>
                    </a>
                  </Link>
                </div>
              </div>

              <div>
                <div className="my-4">
                  <h2 className="h3">Tokens</h2>
                  <p className="m-0 leading-tight">
                    Use Tokens to compete in all Ladders, except Power Play
                    Ladders.
                  </p>
                </div>
                <div className="overflow-y-hidden overflow-x-auto scrollbar-desktop flex">
                  <div className="flex flex-row gap-4 items-stretch justify-center mx-auto mb-8 xl:w-full">
                    {TokensLItems.map((item, itemIndex) => (
                      <>{Bundle(item, itemIndex)}</>
                    ))}
                  </div>
                </div>
                <div className="my-4">
                  <h2 className="h3">Power Tokens</h2>
                  <p className="m-0 leading-tight">
                    Use Power tokens exclusively to compete in Power Play
                    Ladders, where the winner takes it all.
                  </p>
                </div>
                <div className="overflow-y-hidden overflow-x-auto scrollbar-desktop flex">
                  <div className="flex flex-row gap-4 items-stretch justify-center mx-auto mb-8 xl:w-full">
                    {PowerTokensLItems.map((item, itemIndex) => (
                      <>{Bundle(item, itemIndex)}</>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
