import { useContext, useEffect, useState } from "react";
import Structure from "@/pages/stryda/components/Structure";
import { useRouter } from "next/router";
import { UiContext } from "@/contexts/ui";
import ModalBuyPremium from "./modal-buypremium";
import PremiumLogo from "@/components/PremiumLogo/PremiumLogo";
import { usePrototypeData } from "@/contexts/prototype";
import { dataPremiumBenefits } from "@/mock-data/data-premium";
import Tooltip from "@/components/Tooltip/Tooltip";
import useInViewport from "@/components/Hook/useInViewport";

export default function Premium() {
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const modalBuyPremium = query.modalpremium === "true" ? true : false;
  const isPremium = prototype.isPremium;
  const uiContext = useContext(UiContext);

  useInViewport();

  useEffect(() => {
    if (modalBuyPremium) {
      openModalFavoriteGames();
    }
  }, [modalBuyPremium]);

  function openModalBuyPremium() {
    uiContext.openModal(<ModalBuyPremium></ModalBuyPremium>);
  }

  const premiumTableItems = [
    {
      name: "Free gift card",
      tooltip: "Get an instant giftcard with your subscription purchase.",
    },
    {
      name: "Additional Tokens for Token purchases",
    },
    {
      name: "25% XP Boost",
    },
    {
      name: "No ads",
    },
    {
      name: "Battle Pass speed boost",
      tooltip: "Get Battle Pass rewards faster.",
    },
    {
      name: "Battle Pass Premium rewards",
      tooltip: "Unlock exclusive rewards on your Battle Pass.",
    },
    {
      name: "Premium Ladders access",
      tooltip: "Compete in exclusive Ladders for Premium users.",
    },
    {
      name: "Mission discards",
      tooltip: "Reroll your Missions.",
    },
    {
      name: "Full overview of your stats",
    },
  ];

  const premiumParagraphItems = [
    {
      name: "Battle Pass",
      title:
        "https://res.cloudinary.com/gloot/image/upload/v1700657413/Stryda/illustrations/Premium_paragraph_logo_battle_pass.svg",
      subtitle: "Get more rewards with the Stryda Battle Pass!",
      description:
        "Every Battle Pass will bring you extra Premium rewards such as avatar frames, profile banners, Tokens or coins. Each extra Token and coin you will get you closer to a gift card. Head over to the shop for gift cards.",
      image:
        "https://res.cloudinary.com/gloot/image/upload/v1700657886/Stryda/illustrations/Premium_marketing_perks_battle_pass.webp",
    },
    {
      name: "XP boost",
      title:
        "https://res.cloudinary.com/gloot/image/upload/v1700657413/Stryda/illustrations/Premium_paragraph_logo_xp_boost.svg",
      subtitle: "Get a 25% XP boost on our platform",
      description:
        "With an increased XP you will complete the Battle Pass and unlock rewards quicker. XP boost can be gained through Missions and Ladder matches.",
      image:
        "https://res.cloudinary.com/gloot/image/upload/v1700651120/Stryda/illustrations/Premium_marketing_perks_xp_boost.webp",
    },
    {
      name: "Skins",
      title:
        "https://res.cloudinary.com/gloot/image/upload/v1700657413/Stryda/illustrations/Premium_paragraph_logo_skins.svg",
      subtitle: "Buy skins with Stryda gift cards",
      description:
        "Buy gift cards from the shop with Stryda coins, which you earn through the Battle Pass and Ladders. The gift cards will help you unlock new skins in your favorite games. We have a variation of gift cards that can be used on Steam, Amazon, Riot or PUBG. ",
      image:
        "https://res.cloudinary.com/gloot/image/upload/v1700651120/Stryda/illustrations/Premium_marketing_perks_skins.webp",
    },
  ];

  return (
    <>
      <Structure title="Premium">
        {isPremium ? (
          <>
            <section className="relative z-10">
              <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start justify-center my-12">
                <PremiumLogo
                  src="https://res.cloudinary.com/gloot/image/upload/v1672241197/Stryda/logos/stryda-premium-logo-main-white-animated.svg"
                  width="275"
                  height="auto"
                />
                <div className="lg:border-l lg:border-ui-500 lg:pl-10 text-center lg:text-left">
                  <h2 className="h1 max-w-[30ch] mx-auto text-5xl lg:text-7xl">
                    Enjoy the full potential of Stryda gaming experience
                  </h2>
                </div>
              </div>
            </section>

            <section className="relative z-10 px-4 md:px-0 my-20 flex flex-col md:flex-row items-stretch gap-8 max-w-md mx-auto animate-slide-in-bottom">
              <div className="flex-1 surface rounded flex flex-col items-stretch justify-start">
                <h2 className="h5 text-center p-3 border-b border-ui-700">
                  Subscription details
                </h2>
                <div className="p-4 flex-1 flex flex-col items-stretch">
                  <div className="surface-ui-600 rounded p-4 text-center flex-1 flex flex-col items-center justify-center">
                    <p>
                      Premium:{" "}
                      <span className="text-premium-500 font-bold">
                        trial activated
                      </span>
                    </p>
                    <p className="text-sm text-ui-300">
                      Trial ends on May 19, 2023
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 surface rounded flex flex-col items-stretch justify-start">
                <h2 className="h5 text-center p-3 border-b border-ui-700">
                  Payment method
                </h2>
                <div className="p-4 flex-1 flex flex-col items-stretch">
                  <div className="surface-ui-600 rounded p-4 text-center flex-1 flex flex-col items-center justify-center">
                    <p>Free trial</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            <section className="max-w-2xl mx-auto flex flex-col lg:flex-row items-stretch gap-8 mt-12 mb-24">
              <div className="surface sm:rounded pr-4 py-6 pl-6 flex-1 flex flex-col justify-around">
                <PremiumLogo
                  src="https://res.cloudinary.com/gloot/image/upload/v1672241197/Stryda/logos/stryda-premium-logo-main-white-animated.svg"
                  width="240"
                  height="auto"
                  className="mx-auto"
                />
                <p className="text-center leading-tight mt-4 mb-8">
                  Make the best out of your gaming
                  <br />
                  with Stryda Premium
                </p>
                <ul className="child:flex child:items-stretch child:border-b child:border-ui-500 text-sm leading-tight">
                  <li className="border-none child:pb-3 child:pt-2">
                    <div className="flex-1">Features</div>
                    <div className="w-24 text-center hidden sm:block">Freemium</div>
                    <div className="w-24 text-center text-premium-500 border-x border-t border-ui-500 bg-ui-600 rounded-t">
                      Premium
                    </div>
                  </li>
                  {premiumTableItems.map((item, itemIndex) => (
                    <li key={itemIndex} className="">
                      <div className="flex-1 flex items-center gap-2">
                        <span className="icon icon-crown text-premium-500 text-xl" />
                        <span>{item.name}</span>
                        {item.tooltip && (
                          <Tooltip
                            tooltip={
                              <div className="max-w-xs text-sm text-center leading-tight">
                                {item.tooltip}
                              </div>
                            }
                          >
                            <button className="text-ui-300 text-0">
                              <span className="icon text-sm icon-c-info" />
                            </button>
                          </Tooltip>
                        )}
                      </div>
                      <div className="w-24 text-center hidden sm:flex items-center justify-center">
                        <span className="icon icon-e-remove" />
                      </div>
                      <div className="w-24 text-center flex items-center justify-center text-premium-500 border-x border-ui-500 bg-ui-600 py-2">
                        <span className="icon icon-f-check" />
                      </div>
                    </li>
                  ))}
                  <li className="border-none child:pb-3 child:pt-1">
                    <div className="flex-1" />
                    <div className="w-24 text-center" />
                    <div className="w-24 border-x border-b border-ui-500 bg-ui-600 rounded-b h-4" />
                  </li>
                </ul>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={openModalBuyPremium}
                    className="button button-lg button-premium is-shining my-4 group"
                  >
                    <span>Get Premium</span>
                    <span className="icon icon-arrow-right transition-all group-hover:translate-x-2" />
                  </button>
                  <p className="text-xs text-ui-300">
                    Cancel anytime.{" "}
                    <a className="underline cursor-pointer">
                      Terms and conditions
                    </a>{" "}
                    apply.
                  </p>
                </div>
              </div>
              <div className="flex-1 xl:flex-2">
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch justify-around text-center gap-4 mt-8 mb-4">
                  <div>
                    <div
                      className="text-sm blockreveal animate-paused animate-delay"
                      style={{
                        "--delay": "calc(6 * 0.05s)",
                      }}
                    >
                      <span>Premium rewards in</span>
                    </div>
                    <div
                      className="h1 text-mono-100 text-6xl blockreveal animate-paused animate-delay"
                      style={{
                        "--delay": "calc(8 * 0.05s)",
                      }}
                    >
                      <span>Battle Pass</span>
                    </div>
                  </div>
                  <div className="">
                    <div
                      className="text-sm blockreveal animate-paused animate-delay"
                      style={{
                        "--delay": "calc(10 * 0.05s)",
                      }}
                    >
                      <span>25% more</span>
                    </div>
                    <div
                      className="h1 text-mono-100 text-6xl blockreveal animate-paused animate-delay"
                      style={{
                        "--delay": "calc(12 * 0.05s)",
                      }}
                    >
                      <span>XP Boost</span>
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-sm blockreveal animate-paused animate-delay"
                      style={{
                        "--delay": "calc(14 * 0.05s)",
                      }}
                    >
                      <span>Get free</span>
                    </div>
                    <div
                      className="h1 text-mono-100 text-6xl blockreveal animate-paused animate-delay"
                      style={{
                        "--delay": "calc(15 * 0.05s)",
                      }}
                    >
                      <span>skins</span>
                    </div>
                  </div>
                </div>
                <img
                  src="https://res.cloudinary.com/gloot/image/upload/v1700650933/Stryda/illustrations/Premium_marketing_top.webp"
                  className="w-full h-auto animate-slide-in-bottom"
                  alt=""
                />
              </div>
            </section>
            {premiumParagraphItems.map((item, itemIndex) => (
              <section
                key={itemIndex}
                className="max-w-2xl mx-auto flex flex-col md:flex-row items-center mb-24 animate-slide-in-bottom animate-paused px-4 md:px-0"
              >
                <div
                  className={`relative z-20 flex-1 py-8 flex flex-col items-center md:items-start text-center md:text-left order-1 ${
                    itemIndex % 2 === 0 ? "md:order-2" : ""
                  }`}
                >
                  <div
                    className="blockreveal animate-paused animate-delay"
                    style={{
                      "--delay": "calc(4 * 0.05s)",
                    }}
                  >
                    <img
                      src={item.title}
                      alt={item.name}
                      className="w-auto h-20 mb-3"
                    />
                  </div>
                  <p
                    className="my-2 text-premium-500 text-xl blockreveal animate-paused animate-delay"
                    style={{
                      "--delay": "calc(8 * 0.05s)",
                    }}
                  >
                    <span>{item.subtitle}</span>
                  </p>
                  <p className="my-2 text-ui-200 text-lg">{item.description}</p>
                  <button
                    type="button"
                    onClick={openModalBuyPremium}
                    className="button button-lg button-premium my-4 group"
                  >
                    <span>Get Premium</span>
                    <span className="icon icon-arrow-right transition-all group-hover:translate-x-2" />
                  </button>
                  <p className="text-xs text-ui-300">
                    Cancel anytime.{" "}
                    <a className="underline cursor-pointer">
                      Terms and conditions
                    </a>{" "}
                    apply.
                  </p>
                </div>
                <figure
                  className={`flex-2 w-full relative z-10 order-2 animate-paused animate-delay ${
                    itemIndex % 2 === 0 ? "md:order-1 md:pr-16 animate-slide-in-left" : "md:pl-16 animate-slide-in-right"
                  }`}
                    style={{
                      "--delay": "calc(10 * 0.05s)",
                    }}
                >
                  <img src={item.image} alt="" className="w-full h-auto" />
                </figure>
              </section>
            ))}
            {/* <section className="relative z-10">
              <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start justify-center my-12">
                <PremiumLogo
                  src="https://res.cloudinary.com/gloot/image/upload/v1672241197/Stryda/logos/stryda-premium-logo-main-white-animated.svg"
                  width="275"
                  height="auto"
                />
                <div className="lg:border-l lg:border-ui-500 lg:pl-10 text-center lg:text-left">
                  <h2 className="h1 max-w-[19ch] mx-auto lg:text-8xl">
                    Make your GG more rewarding
                  </h2>
                  <button
                    type="button"
                    onClick={openModalBuyPremium}
                    className="button button-lg button-premium is-shining my-4"
                  >
                    <span>View premium plans</span>
                  </button>
                  <p className="text-sm">
                    Cancel anytime.{" "}
                    <a className="underline cursor-pointer">
                      Terms and conditions
                    </a>{" "}
                    apply.
                  </p>
                </div>
              </div>
            </section> */}
          </>
        )}

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
                  id="feed-premium"
                  defaultChecked={prototype.isPremium}
                  onClick={() => prototype.togglePremium()}
                />
                <label htmlFor="feed-premium">Premium state</label>
              </div>
            </div>
          </section>
        )}
      </Structure>
    </>
  );
}
