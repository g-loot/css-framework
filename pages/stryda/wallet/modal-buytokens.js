import React, { useContext, useState, useEffect } from "react";

import Link from "next/link";
import { UiContext } from "@/contexts/ui";
import { VariablesContext } from "@/contexts/variables";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import PremiumLogo from "@/components/PremiumLogo/PremiumLogo";

const TokensItems = [
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
const TokensBlackFridayItems = [
  {
    tokenNumber: 400,
    amount: "4.49 €",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1700227913/Stryda/currencies/Currencies_Token_400.webp",
    special: null,
  },
  {
    tokenNumber: 600,
    amount: "4.99 €",
    save: "26%",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1700227913/Stryda/currencies/Currencies_Token_600_Black_Friday.webp",
    special: "specialoffer",
  },
  {
    tokenNumber: 800,
    amount: "7.99 €",
    // save: "11%",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1700227913/Stryda/currencies/Currencies_Token_800.webp",
    special: "",
  },
  {
    tokenNumber: 2000,
    amount: "18.49 €",
    // save: "17%",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1700227913/Stryda/currencies/Currencies_Token_2000.webp",
    special: "",
  },
];
const PowerTokensItems = [
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
  // {
  //   tokenNumber: 105,
  //   amount: "2.2 €",
  //   previousAmount: "6.495 €",
  //   save: "50%",
  //   image:
  //     "https://res.cloudinary.com/gloot/image/upload/v1672159789/Stryda/currencies/Reward-centered-powertoken-medium.png",
  //   special: "premiumoffer",
  // },
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
  const [isBlackFriday, setIsBlackFriday] = useState(false);
  const [selectedList, setSelectedList] = useState(TokensItems);
  const [selectedGamesCount, setSelectedGamesCount] = useState(
    prototype.games.filter((g) => g.isFavorite).length
  );
  const [disabled, setDisable] = useState(false);

  useEffect(() => {
    if (isBlackFriday) {
      setSelectedList(TokensItems);
    } else {
      setSelectedList(TokensBlackFridayItems);
    }
  }, [isBlackFriday]);

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
          item.special === "specialoffer" ? "border border-ui-700 bg-main" : ""
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
          {item.special === "specialoffer" && (
            <span className="text-ui-800">Limited offer</span>
          )}
          {item.special === "premiumoffer" && (
            <span className="text-ui-800">Premium offer</span>
          )}
          {!item.special && <span className="opacity-0">—</span>}
        </div>
        <div className="bg-ui-800 rounded-lg px-3 pb-3 flex-1 flex flex-col">
          <div className="flex-1">
            <img
              className="w-auto h-48 aspect-square mx-auto mb-4"
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
                  <span className="text-ui-200 text-lg">{item.amount}</span>
                  {item.save && (
                    <div className="chip chip-sliced chip-xs bg-main">
                      <span className="ml-0 mr-0">Save {item.save}</span>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          <div className="border-t border-ui-700 mt-4 pt-4">
            <button
              className={`button button-primary button-currency button-coin w-full ${
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
                <div className="flex-1 leading-tight py-2 text-center md:text-left mt-4 md:mt-0">
                  Premium subscribers get up to 300 extra tokens every time they
                  make a token bundle purchase
                </div>
                <div />
                <div className="py-4">
                  <Link href={`/stryda/premium${prototype.getURLparams()}`}>
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
                <div className="overflow-y-hidden overflow-x-auto scrollbar-desktop flex -mx-4 xl:mx-0">
                  <div className="flex flex-row gap-4 items-stretch justify-center mx-auto mb-8 xl:w-full">
                    {selectedList.map((item, itemIndex) => (
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
                <div className="overflow-y-hidden overflow-x-auto scrollbar-desktop flex -mx-4 xl:mx-0">
                  <div className="flex flex-row gap-4 items-stretch justify-center mx-auto mb-8 xl:w-full">
                    {PowerTokensItems.map((item, itemIndex) => (
                      <>{Bundle(item, itemIndex)}</>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* for demo purposes only */}
      {prototype.showDemo && (
        <section className="fixed z-[9999] bottom-4 left-4 surface-ui-500 rounded shadow-md p-4 pr-16 text-sm text-ui-100 flex flex-col items-start">
          <div className="absolute top-1 right-1">
            <button
              type="button"
              className="button button-sm button-secondary button-close"
              onClick={() => prototype.setShowDemo(!prototype.showDemo)}
            >
              <span className="icon icon-e-remove" />
            </button>
          </div>
          <div className="form-group pl-4">
            <div className="form-xs form-toggle">
              <input
                type="checkbox"
                name="feed"
                id="feed-empty"
                defaultChecked={isBlackFriday}
                onChange={() => {
                  setIsBlackFriday(!isBlackFriday);
                }}
              />
              <label htmlFor="feed-empty">Black Friday</label>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
