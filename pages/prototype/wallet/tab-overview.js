import { useContext, useEffect, useState } from "react";

import Accordion from "../../../components/Accordion/Accordion";
import Link from "next/link";
import ModalBuyTokens from "./modal-buytokens";
import { UiContext } from "../../../contexts/ui";
import { usePrototypeData } from "../../../contexts/prototype";
import { useRouter } from "next/router";

const WalletItems = [
  {
    id: 1,
    name: "coins",
    icon: "icon-coin",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1674640634/Stryda/currencies/Reward-coin-face.png",
    amount: "1328",
    use: "To purchase items in the <b>Shop</b>.",
    get: "From <b>Daily Login Streak</b> and <b>Ladders</b>.",
    color: "text-currency-1-500",
    button: "visitshop",
    buttonLabel: "Visit shot",
  },
  {
    id: 2,
    name: "tokens",
    icon: "icon-token",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1674640634/Stryda/currencies/Reward-token-face.png",
    amount: "37",
    use: "To enter rounds in the <b>Ladders</b>.",
    get: "From <b>Missions, Daily Login Streak</b> or buy them directly from the <b>Wallet</b>.",
    color: "text-currency-2-500",
    button: "buy",
    buttonLabel: "Buy tokens",
  },
  {
    id: 3,
    name: "power tokens",
    icon: "icon-powertoken",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1674640634/Stryda/currencies/Reward-powertoken-face.png",
    amount: "15",
    use: "To enter rounds in the <b>Power Plays</b>.",
    get: "Buy them directly from the <b>Wallet</b>.",
    color: "text-currency-3-500",
    button: "buy",
    buttonLabel: "Buy power tokens",
  },
  {
    id: 4,
    name: "prize money",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1676628558/Stryda/currencies/Reward-centered-wallet-unique.png",
    amount: "0€",
    use: false,
    get: false,
    color: "text-ui-100",
    button: "#",
    buttonLabel: "Withdraw",
  },
  /*
  {
    id: 3,
    name: "tickets",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1654171544/Marketing/2022_prototype/CurrencyRewards/Reward-centered-ticket-unique.png",
    amount: "2",
    use: "To enter <b>Monthly Tournaments</b>.",
    get: "From <b>Ladders</b>.",
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
*/
];

export default function TabWalletOverview() {
  const prototype = usePrototypeData();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const alernativeLayout = query.alternativelayout === "true" ? true : false;
  const modaBuyTokens = query.modalbuytokens === "true" ? true : false;
  const [isMobile, setIsMobile] = useState(false);
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function openModalBuyTokens() {
    uiContext.openModal(<ModalBuyTokens></ModalBuyTokens>);
  }

  useEffect(() => {
    if (modaBuyTokens) {
      openModalBuyTokens();
    }
  }, [modaBuyTokens]);

  function handleResize() {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!alernativeLayout && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {WalletItems.map((item, itemIndex) => (
              <div
                key={item.id}
                className="surface rounded flex flex-col items-stretch p-2 w-full mx-auto animate-slide-in-bottom animate-delay"
                style={{ "--delay": "calc(" + itemIndex + " * 0.05s)" }}
              >
                <div
                  className={`flex items-center justify-center my-8 leading-none ${item.color}`}
                >
                  {item.video ? (
                    <video
                      autoPlay
                      playsinline
                      muted
                      loop
                      preload
                      className="w-32 h-32 mr-4"
                    >
                      <source src={item.video.webm} type="video/webm" />
                      <source src={item.video.mp4} type="video/mp4" />
                      <img src={item.image} />
                    </video>
                  ) : (
                    <img src={item.image} alt="" className="h-32 w-32" />
                  )}
                  <div>
                    <span className="text-3xl">{item.amount}</span>{" "}
                    <span className="text-lg">{item.name}</span>
                  </div>
                </div>
                <div className="text-sm leading-tight text-ui-300 mt-3 mb-6 flex-1">
                  {item.use && (
                    <div className="flex py-3 border-b border-ui-700/50 px-2 gap-2 max-w-xs mx-auto">
                      <div className="w-1/4 uppercase text-ui-200">Use</div>
                      <div
                        className="flex-1 text-ui-300"
                        dangerouslySetInnerHTML={{
                          __html: item.use,
                        }}
                      />
                    </div>
                  )}
                  {item.get && (
                    <div className="flex py-3 px-2 gap-2 max-w-xs mx-auto">
                      <div className="w-1/4 uppercase text-ui-200">Get</div>
                      <div
                        className="flex-1 text-ui-300"
                        dangerouslySetInnerHTML={{
                          __html: item.get,
                        }}
                      />
                    </div>
                  )}
                </div>
                {item.button && (
                  <>
                    {item.button === "buy" && (
                      <button
                        type="button"
                        className="button button-primary w-full"
                        onClick={openModalBuyTokens}
                      >
                        <span>{item.buttonLabel}</span>
                      </button>
                    )}
                    {item.button === "visitshop" && (
                      <Link href={`/prototype/shop${prototype.getURLparams()}`}>
                        <button
                          type="button"
                          className="button button-secondary w-full"
                        >
                          <span>{item.buttonLabel}</span>
                        </button>
                      </Link>
                    )}
                    {item.button === "#" && (
                      <button
                        type="button"
                        className="button button-primary w-full is-disabled"
                      >
                        <span>{item.buttonLabel}</span>
                      </button>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </>
      )}
      {alernativeLayout && (
        <>
          <div className="space-y-4">
            {WalletItems.map((item, itemIndex) => (
              <>
                <div
                  className="accordion accordion-highlighted surface sm:rounded-lg overflow-hidden animate-slide-in-bottom animate-delay"
                  style={{ "--delay": "calc(" + itemIndex + " * 0.05s)" }}
                >
                  <Accordion
                    isNoHover={true}
                    buttonActivation={true}
                    isopen={isMobile}
                    header={
                      <>
                        <div className="flex gap-8 items-center justify-between">
                          <div className="flex gap-2 items-center justify-start lg:w-96">
                            <div className="w-28 flex justify-center">
                              <span className={`icon ${item.icon}`} />
                            </div>
                            <div className={`${item.color}`}>
                              <span className="text-3xl">{item.amount}</span>
                              {"  "}
                              <span className="text-lg">{item.name}</span>
                            </div>
                          </div>
                          <div className="flex-1 flex justify-start items-center">
                            <div className="lg:w-40 hidden lg:block">
                              {item.button && (
                                <>
                                  {item.button === "buy" && (
                                    <button
                                      type="button"
                                      className="button button-primary w-full"
                                      onClick={openModalBuyTokens}
                                    >
                                      <span>{item.buttonLabel}</span>
                                    </button>
                                  )}
                                  {item.button === "visitshop" && (
                                    <Link
                                      href={`/prototype/shop${prototype.getURLparams()}`}
                                    >
                                      <button
                                        type="button"
                                        className="button button-secondary w-full"
                                      >
                                        <span>{item.buttonLabel}</span>
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
                    <div className="p-4 lg:px-0 lg:py-8 flex flex-col lg:flex-row gap-4 lg:gap-8 items-start leading-tight">
                      <div className="flex gap-2 items-start justify-start lg:w-96">
                        <div className="hidden md:block w-28" />
                        <div className="flex gap-4">
                          <div className="uppercase">Use</div>
                          <div
                            className="text-ui-300"
                            dangerouslySetInnerHTML={{
                              __html: item.use,
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 items-start justify-start lg:w-96">
                        <div className="hidden md:block w-28" />
                        <div className="uppercase">Get</div>
                        <div
                          className="text-ui-300"
                          dangerouslySetInnerHTML={{
                            __html: item.get,
                          }}
                        />
                      </div>
                      <div className="block lg:hidden">
                        {item.button && (
                          <>
                            {item.button === "buy" && (
                              <button
                                type="button"
                                className="button button-primary w-full"
                                onClick={openModalBuyTokens}
                              >
                                <span>{item.buttonLabel}</span>
                              </button>
                            )}
                            {item.button === "visitshop" && (
                              <Link
                                href={`/prototype/shop${prototype.getURLparams()}`}
                              >
                                <button
                                  type="button"
                                  className="button button-secondary w-full"
                                >
                                  <span>{item.buttonLabel}</span>
                                </button>
                              </Link>
                            )}
                          </>
                        )}
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
