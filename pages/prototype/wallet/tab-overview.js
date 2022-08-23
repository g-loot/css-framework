import { useContext, useEffect } from "react";

import Accordion from "../../../components/Accordion/Accordion";
import Link from "next/link";
import ModalBuyTokens from "./modal-buytokens";
import { UiContext } from "../../../contexts/ui";
import { useRouter } from "next/router";

const WalletItems = [
  {
    id: 1,
    name: "tokens",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1654171544/Marketing/2022_prototype/CurrencyRewards/Reward-centered-token-unique.png",
    amount: "245",
    use: "To enter rounds in the <b>Weekly Brawls</b>.",
    get: "From <b>Missions, Daily Loot Streak</b> or buy them directly from the <b>Wallet</b>.",
    color: "text-purple-500",
    button: "buy",
  },
  {
    id: 2,
    name: "coins",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1654171544/Marketing/2022_prototype/CurrencyRewards/Reward-centered-coin-unique.png",
    amount: "50000",
    use: "To purchase items in the <b>Shop</b>.",
    get: "From <b>Daily Loot Streak</b> and <b>Weekly Brawls</b>.",
    color: "text-gold-500",
    button: "visitshop",
  },
  {
    id: 3,
    name: "tickets",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1654171544/Marketing/2022_prototype/CurrencyRewards/Reward-centered-ticket-unique.png",
    amount: "2",
    use: "To enter <b>Monthly Tournaments</b>.",
    get: "From <b>Weekly Brawls</b>.",
    color: "text-bronze-500",
  },
  {
    id: 4,
    name: "prize money",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1657618864/Marketing/2022_prototype/CurrencyRewards/Reward-centered-wallet-unique.png",
    amount: "0.00€",
    use: "To purchase <b>Tokens</b> or <b>withdraw</b> them to your <b>bank</b> or <b>PayPal</b> account.",
    get: "From <b>Tournaments</b>.",
    color: "text-ui-300",
    button: "buy",
  },
];

export default function TabWalletOverview() {
  const { query } = useRouter();
  const hasAds = query.ads === "true" ? true : false;
  const uiContext = useContext(UiContext);
  const alernativeLayout = query.alternativelayout === "true" ? true : false;
  const modaBuyTokens = query.modalbuytokens === "true" ? true : false;

  function openModalBuyTokens() {
    uiContext.openModal(<ModalBuyTokens></ModalBuyTokens>);
  }

  useEffect(() => {
    if (modaBuyTokens) {
      openModalBuyTokens();
    }
  }, [modaBuyTokens]);
  return (
    <>
      {alernativeLayout && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {WalletItems.map((item, itemIndex) => (
              <div
                key={item.id}
                className="surface rounded-xl flex flex-col items-stretch p-2 w-full max-w-xs lg:max-w-xl mx-auto animate-slide-in-right animate-delay"
                style={{ "--delay": "calc(" + itemIndex + " * 0.05s)" }}
              >
                <div className="bg-gradient-to-b from-ui-900/50 to-ui-900/5 rounded overflow-hidden">
                  <div className="flex gap-2 items-center justify-center">
                    <img
                      className={`${
                        item.name === "tickets" ? "-mx-4" : "-mx-8"
                      }`}
                      src={item.image}
                      width="140"
                      height="auto"
                      alt={item.name}
                    />
                    <div className={`font-headings font-bold ${item.color}`}>
                      <span className="text-3xl">{item.amount}</span>{" "}
                      <span className="text-lg">{item.name}</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm leading-tight text-ui-300 mt-3 mb-6 flex-1">
                  <div className="flex py-3 border-b border-ui-700/50 px-2 gap-2">
                    <div className="w-1/4 font-bold uppercase text-ui-200">
                      Use
                    </div>
                    <div
                      className="flex-1 text-ui-300"
                      dangerouslySetInnerHTML={{
                        __html: item.use,
                      }}
                    />
                  </div>
                  <div className="flex py-3 px-2 gap-2">
                    <div className="w-1/4 font-bold uppercase text-ui-200">
                      Get
                    </div>
                    <div
                      className="flex-1 text-ui-300"
                      dangerouslySetInnerHTML={{
                        __html: item.get,
                      }}
                    />
                  </div>
                </div>
                {item.button && (
                  <>
                    {item.button === "buy" && (
                      <button
                        type="button"
                        className="button button-primary w-full"
                        onClick={openModalBuyTokens}
                      >
                        <span>Buy tokens</span>
                      </button>
                    )}
                    {item.button === "visitshop" && (
                      <Link
                        href={`/prototype/shop${hasAds ? "?ads=true" : ""}`}
                      >
                        <button
                          type="button"
                          className="button button-secondary w-full"
                        >
                          <span>Visit shop</span>
                        </button>
                      </Link>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </>
      )}
      {!alernativeLayout && (
        <>
          <div className="space-y-4">
            {WalletItems.map((item, itemIndex) => (
              <>
                <div
                  className="accordion surface sm:rounded-lg overflow-hidden animate-slide-in-bottom animate-delay"
                  style={{ "--delay": "calc(" + itemIndex + " * 0.05s)" }}
                >
                  <Accordion
                    buttonActivation={true}
                    header={
                      <>
                        <div className="flex gap-8 items-center justify-between">
                          <div className="flex gap-2 items-center justify-start lg:w-96">
                            <div className="w-28 flex justify-center">
                              <img
                                className={`-my-5 w-30 ${
                                  item.name === "tickets" ? "" : ""
                                }`}
                                src={item.image}
                                width="120"
                                height="auto"
                                alt={item.name}
                              />
                            </div>
                            <div className={`font-headings ${item.color}`}>
                              <span className="text-3xl">{item.amount}</span>
                              {"  "}
                              <span className="text-lg">{item.name}</span>
                            </div>
                          </div>
                          <div className="flex-1 flex justify-start items-center">
                            <div className="lg:w-40">
                              {item.button && (
                                <>
                                  {item.button === "buy" && (
                                    <button
                                      type="button"
                                      className="button button-primary w-full"
                                      onClick={openModalBuyTokens}
                                    >
                                      <span>Buy tokens</span>
                                    </button>
                                  )}
                                  {item.button === "visitshop" && (
                                    <Link
                                      href={`/prototype/shop${
                                        hasAds ? "?ads=true" : ""
                                      }`}
                                    >
                                      <button
                                        type="button"
                                        className="button button-secondary w-full"
                                      >
                                        <span>Visit shop</span>
                                      </button>
                                    </Link>
                                  )}
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                    }
                  >
                    <div className="py-8 flex flex-col lg:flex-row gap-4 lg:gap-8 items-start leading-tight">
                      <div className="flex gap-2 items-start justify-start lg:w-96">
                        <div className="w-28" />
                        <div className="flex gap-4">
                          <div className="font-bold uppercase">Use</div>
                          <div
                            className="text-ui-300"
                            dangerouslySetInnerHTML={{
                              __html: item.use,
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 items-start justify-start lg:w-96">
                        <div className="w-28 lg:hidden" />
                        <div className="font-bold uppercase">Get</div>
                        <div
                          className="text-ui-300"
                          dangerouslySetInnerHTML={{
                            __html: item.get,
                          }}
                        />
                      </div>
                    </div>
                  </Accordion>
                </div>
              </>
            ))}
          </div>
        </>
      )}
    </>
  );
}
