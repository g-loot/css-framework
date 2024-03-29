import { useContext, useEffect, useState } from "react";
import Structure from "@/pages/stryda/components/Structure";
import { useRouter } from "next/router";
import { UiContext } from "@/contexts/ui";
import ModalBuyPremium from "./modal-buypremium";
import PremiumLogo from "@/components/PremiumLogo/PremiumLogo";
import { usePrototypeData } from "@/contexts/prototype";
import { dataPremiumBenefits } from "@/mock-data/data-premium";

export default function Premium() {
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const modalBuyPremium = query.modalpremium === "true" ? true : false;
  const isPremium = prototype.isPremium;
  const uiContext = useContext(UiContext);
  useEffect(() => {
    if (modalBuyPremium) {
      openModalFavoriteGames();
    }
  }, [modalBuyPremium]);

  function openModalBuyPremium() {
    uiContext.openModal(<ModalBuyPremium></ModalBuyPremium>);
  }

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
            <section className="relative z-10">
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
                  <p className="text-sm text-ui-300">
                    Cancel anytime.{" "}
                    <a className="underline cursor-pointer">
                      Terms and conditions
                    </a>{" "}
                    apply.
                  </p>
                </div>
              </div>
            </section>
          </>
        )}

        <section className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-y-4 justify-center mb-24 max-w-lg mx-auto text-center leading-none min-h-[800px]">
          {dataPremiumBenefits.map((item, itemIndex) => (
            <div
              className={`animate-slide-in-bottom animate-delay ${
                itemIndex + 1 === dataPremiumBenefits.length ? "lg:col-start-2" : ""
              }`}
              key={itemIndex}
              style={{
                "--delay": "calc((" + itemIndex + " + 5) * 0.05s)",
              }}
            >
              <img
                className="mx-auto block"
                src={item.image}
                width="300"
                height="225"
                alt=""
              />
              <p className="text-ui-100 max-w-[25ch] mx-auto">{item.name}</p>
            </div>
          ))}
        </section>

        <section className="relative z-10 pt-12 md:pt-20 mb-40 container max-w-lg mx-auto">
          <img
            className="hidden lg:block absolute pointer-events-none z-20 top-0 -right-14 rotate-[33deg]"
            src="https://res.cloudinary.com/gloot/image/upload/v1672157995/Stryda/currencies/Reward-coin-side_1.png"
            width="190"
            height="auto"
            alt=""
          />

          <img
            className="hidden lg:block absolute pointer-events-none z-20 -bottom-32 -right-8 blur-sm rotate-[120deg]"
            src="https://res.cloudinary.com/gloot/image/upload/v1672157995/Stryda/currencies/Reward-coin-side_2.png"
            width="179"
            height="auto"
            alt=""
          />
          <img
            className="hidden lg:block absolute pointer-events-none z-20 -top-14 left-8 blur-sm -rotate-[33deg] opacity-50"
            src="https://res.cloudinary.com/gloot/image/upload/v1672157995/Stryda/currencies/Reward-coin-side_1.png"
            width="140"
            height="auto"
            alt=""
          />
          <img
            className="hidden lg:block absolute pointer-events-none z-20 -bottom-14 -left-12 -rotate-[143deg]"
            src="https://res.cloudinary.com/gloot/image/upload/v1672157995/Stryda/currencies/Reward-coin-side_1.png"
            width="144"
            height="auto"
            alt=""
          />
          <img
            className="hidden lg:block absolute pointer-events-none z-20 top-32 -left-5 -rotate-[74deg]"
            src="https://res.cloudinary.com/gloot/image/upload/v1672157995/Stryda/currencies/Reward-coin-side_2.png"
            width="49"
            height="auto"
            alt=""
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-stretch gap-16 px-4 md:px-0">
            <div className="max-w-sm hidden flex-1 lg:flex flex-col bg-ui-800 rounded-xl p-2">
              <div className="text-center pt-2 text-premium-500 ">
                <span className="h4">Free</span>
              </div>
              <div className="flex-1 flex-col rounded-lg p-4 lg:p-8">
                <ul className="flex-1 space-y-8 my-8 leading-snug text-left">
                  <li className="flex gap-4 items-start">
                    <span className="icon text-2xl icon-verified text-premium-500" />
                    <span className="text-ui-200">
                      Track your stats across all supported games and build your
                      player identity.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="icon text-2xl icon-verified text-premium-500" />
                    <span className="text-ui-200">
                      Compete in missions and ladders with rewards.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="icon text-2xl icon-e-remove text-ui-400" />
                    <span className="text-ui-400">
                      Get an instant gift card.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="icon text-2xl icon-e-remove text-ui-400" />
                    <span className="text-ui-400">
                      Get free extra tokens for each token purchase.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="icon text-2xl icon-e-remove text-ui-400" />
                    <span className="text-ui-400">
                      Unlock rewards faster by earning an additional 50% XP on
                      each completed mission and played ladder.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="icon text-2xl icon-e-remove text-ui-400" />
                    <span className="text-ui-400">
                      Create a Discord profile to describe who you are as a
                      gamer and find a clan.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="icon text-2xl icon-e-remove text-ui-400" />
                    <span className="text-ui-400">
                      Enjoy an ad-free experience on Stryda.
                    </span>
                  </li>
                </ul>
                <div className="button button-tertiary button-lg w-full pointer-events-none">
                  <span>Current Plan</span>
                </div>
              </div>
            </div>
            <div className="max-w-sm flex-1 flex flex-col bg-premium-500 rounded-xl p-2">
              <div className="flex items-center gap-4 pb-2 text-ui-800 pl-7">
                <span className="icon icon-crown text-3xl" />
                <span className="h4 text-ui-800">Premium</span>
              </div>
              <div className="flex-1 flex-col surface rounded-lg p-4 lg:p-8">
                <ul className="flex-1 space-y-8 my-8 leading-snug text-left">
                  <li className="flex gap-4 items-start">
                    <span className="icon text-2xl icon-verified text-premium-500" />
                    <span className="text-ui-200">
                      Track your stats across all supported games and build your
                      player identity.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="icon text-2xl icon-verified text-premium-500" />
                    <span className="text-ui-200">
                      Compete in missions and ladders with rewards.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="icon text-2xl icon-verified text-premium-500" />
                    <span className="text-ui-200">
                      Get an instant gift card.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="icon text-2xl icon-verified text-premium-500" />
                    <span className="text-ui-200">
                      Get free extra tokens for each token purchase.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="icon text-2xl icon-verified text-premium-500" />
                    <span className="text-ui-200">
                      Unlock rewards faster by earning an additional 50% XP on
                      each completed mission and played ladder.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="icon text-2xl icon-verified text-premium-500" />
                    <span className="text-ui-200">
                      Create a Discord profile to describe who you are as a
                      gamer and find a clan.
                    </span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="icon text-2xl icon-verified text-premium-500" />
                    <span className="text-ui-200">
                      Enjoy an ad-free experience on Stryda.
                    </span>
                  </li>
                </ul>

                <button
                  onClick={openModalBuyPremium}
                  type="button"
                  className="button button-premium is-shining button-lg w-full"
                >
                  <span>View Premium Plans</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <video
          className="absolute z-0 right-0 top-0 h-full w-full md:h-auto object-cover opacity-30 pointer-events-none select-none mix-blend-lighten"
          autoPlay
          playsInline
          muted
          loop
          preload="true"
        >
          <source src="https://res.cloudinary.com/gloot/video/upload/v1688630053/Stryda/videos/premium_glitter.mp4" />
        </video>

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
