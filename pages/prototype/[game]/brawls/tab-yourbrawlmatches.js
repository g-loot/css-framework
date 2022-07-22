import React, { useEffect, useRef, useState } from "react";

import HowToBrawl from "../../../../components/HowTo/HowToBrawl";
import Lottie from "lottie-react";
import LottieExplosion from "../../../../assets/animations/explosion-2.json";
import LottieExplosion2 from "../../../../assets/animations/explosion-1.json";
import { useRouter } from "next/router";

const enrollSteps = [
  {
    step: 1,
  },
  {
    step: 2,
  },
  {
    step: 3,
  },
];

export default function TabBrawlsYourBrawlMatches() {
  const { query } = useRouter();
  const hasAds = query.ads === "true" ? true : false;
  const selectedGame = !query.game ? 0 : query.game;
  const elementRef = useRef(null);
  const [heightValue, setHeightValue] = useState(0);

  useEffect(() => {
    if (elementRef.current) {
      setHeightValue(elementRef.current.clientHeight);
    }
  }, [elementRef]);

  const [stepNumber, setStepNumber] = useState(0);
  const maxStep = 3;

  function clickHandlerStepNumber(varTarget) {
    setStepNumber(varTarget);
  }

  return (
    <>
      <section className="pb-4">
        <HowToBrawl />
      </section>
      <section
        className="relative pb-4 animate-slide-in-bottom animate-delay"
        style={{ "--delay": "calc( 1 * 0.05s)" }}
      >
        <div className="relative z-10">
          <div className="text-center py-8">
            <div
              className={`overflow-hidden transition-all transform-gpu duration-500 ease-[cubic-bezier(.7,0,.3,1)]`}
              style={{ height: `${stepNumber === 0 ? heightValue : 0}px` }}
            >
              <div ref={elementRef}>
                <h2 className="text-2xl max-w-[25ch] mx-auto">
                  Play at least{" "}
                  <span className="text-main">3 Brawl matches</span> to join the
                  leaderboard
                </h2>
                <p className="text-sm text-ui-300 mt-4 mb-6">
                  1 Brawl match = 1 match in your game
                </p>
                <hr className="separator-gradient max-w-md" />
              </div>
            </div>
            <div className="mt-6 mb-12 leading-none relative">
              <div>
                <h3 className="text-xl not-italic text-ui-200 uppercase">
                  Your Brawl points
                </h3>
                <div className="text-blue-300 text-7xl font-headings mt-4 mb-2">
                  0
                </div>
                <div className="text-blue-300 text-xl font-headings uppercase">
                  kills
                </div>
              </div>
              <div className="absolute w-44 -top-2 left-[calc(50%-14rem)]">
                <img className="absolute object-fill animate-floating animate-delay" style={{ '--delay': 'calc( 0 * 0.85s)'}} src="https://res.cloudinary.com/gloot/image/upload/v1658393885/Marketing/2022_prototype/Tournament_wings-1.svg" width="100%" height="auto" alt="" />
                <img className="absolute object-fill animate-floating animate-delay top-3" style={{ '--delay': 'calc( 1 * 0.85s)'}} src="https://res.cloudinary.com/gloot/image/upload/v1658393885/Marketing/2022_prototype/Tournament_wings-2.svg" width="100%" height="auto" alt="" />
                <img className="absolute object-fill animate-floating animate-delay top-5" style={{ '--delay': 'calc( 2 * 0.85s)'}} src="https://res.cloudinary.com/gloot/image/upload/v1658393885/Marketing/2022_prototype/Tournament_wings-3.svg" width="100%" height="auto" alt="" />
                <img className="absolute object-fill animate-floating animate-delay top-8" style={{ '--delay': 'calc( 3 * 0.85s)'}} src="https://res.cloudinary.com/gloot/image/upload/v1658393885/Marketing/2022_prototype/Tournament_wings-4.svg" width="100%" height="auto" alt="" />
              </div>
              <div className="absolute w-44 -top-2 right-[calc(50%-14rem)] -scale-x-100">
                <img className="absolute object-fill animate-floating animate-delay" style={{ '--delay': 'calc( 0 * 0.85s)'}} src="https://res.cloudinary.com/gloot/image/upload/v1658393885/Marketing/2022_prototype/Tournament_wings-1.svg" width="100%" height="auto" alt="" />
                <img className="absolute object-fill animate-floating animate-delay top-3" style={{ '--delay': 'calc( 1 * 0.85s)'}} src="https://res.cloudinary.com/gloot/image/upload/v1658393885/Marketing/2022_prototype/Tournament_wings-2.svg" width="100%" height="auto" alt="" />
                <img className="absolute object-fill animate-floating animate-delay top-5" style={{ '--delay': 'calc( 2 * 0.85s)'}} src="https://res.cloudinary.com/gloot/image/upload/v1658393885/Marketing/2022_prototype/Tournament_wings-3.svg" width="100%" height="auto" alt="" />
                <img className="absolute object-fill animate-floating animate-delay top-8" style={{ '--delay': 'calc( 3 * 0.85s)'}} src="https://res.cloudinary.com/gloot/image/upload/v1658393885/Marketing/2022_prototype/Tournament_wings-4.svg" width="100%" height="auto" alt="" />
              </div>
            </div>
          </div>
          <div className="relative flex flex-col md:flex-row gap-4 items-stretch justify-center px-2">
            {enrollSteps.map((step, stepIndex) => (
              <>
                <div className={`relative z-10 animate-slide-in-bottom animate-delay`}
                    style={{ "--delay": "calc( 2 * 0.05s)" }}>
                  <div
                    key={step}
                    className={`surface rounded-xl p-4 transition transform-gpu duration-500 ease-[cubic-bezier(.7,0,.3,1)] md:w-60 ${stepIndex <= stepNumber ? "" : "scale-90 opacity-30 pointer-events-none"}`}
                  >
                    <div className="py-4 flex justify-center">
                      <div className="rounded-full bg-gradient-to-b from-ui-900 to-ui-700 inline-flex items-center justify-center p-3 border border-ui-700 shadow-sm overflow-hidden">
                        <div
                          className={`absolute duration-500 ease-in-out ${
                            stepNumber >= step.step
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-2"
                          }`}
                        >
                          <div className="absolute inset-0 flex items-center justify-center p-4">
                            <span className="text-xs text-center text-ui-300 leading-tight">
                              Waiting for your match results...
                            </span>
                          </div>
                          <div role="loading" className="loader loader-lg">
                            <span className="sr-only">Loading...</span>
                          </div>
                        </div>
                        { stepNumber === stepIndex && (
                          <>
                            <div className={`absolute z-20 h-36 w-36 lottie-blur`}>
                              <Lottie animationData={LottieExplosion2} loop={true} />
                            </div>
                          </>
                        )}
                        
                        <div
                          className={`relative z-10 rounded-full bg-gradient-radial-spotlight from-interaction-300 to-blue-300 flex items-center h-24 w-24 justify-center transition-opacity duration-300 ease-in-out ${
                            stepNumber >= step.step ? "opacity-0" : ""
                          }`}
                        >
                          <span className="icon icon-lock text-ui-800 text-4xl" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-ui-700">
                      <div className="relative">
                        <div
                          className={`absolute inset-0 flex justify-center items-center text-sm text-ui-200 gap-2 transition duration-300 ${
                            stepNumber >= step.step
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-2"
                          }`}
                        >
                          <span>Results not showing?</span>
                          <span className="icon icon-c-info" />
                        </div>
                        <div
                          className={`relative z-0 transition-opacity duration-300 ${
                            stepNumber >= step.step
                              ? "opacity-0 pointer-events-none"
                              : "opacity-100"
                          }`}
                        >
                          <button
                            type="button"
                            className={`button button-primary button-currency button-token w-full ${stepIndex <= stepNumber ? "" : "is-disabled"}`}
                            onClick={clickHandlerStepNumber.bind(
                              this,
                              stepIndex+1
                            )}
                          >
                            <div>
                              <span>Activate</span>
                            </div>
                            <div>
                              <img
                                className="dropshadow-xs"
                                src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_token.png"
                                width="34"
                                height="34"
                                alt="token"
                              />
                              <span>1</span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
            <div className="absolute z-0 rounded-full bg-gradient-to-r from-main via-blue-700 to-main/0 w-36 h-28 scale-y-75 blur-2xl transform-gpu -rotate-45 -bottom-6 left-[calc(50%-20rem)]"></div>
            <div className="absolute z-0 rounded-full bg-gradient-to-r from-main via-blue-700 to-main/0 w-36 h-36 scale-y-75 blur-2xl transform-gpu -top-8 right-[calc(50%-24rem)] rotate-180 "></div>
          </div>
          <div className="my-8 max-w-md mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="h-px flex-1 bg-gradient-to-tr from-ui-600/0 via-ui-600 to-ui-600" />
              <span className="font-bold uppercase">or</span>
              <span className="h-px flex-1 bg-gradient-to-tl from-ui-600/0 via-ui-600 to-ui-600" />
            </div>
            <button
              type="button"
              className={`button button-primary button-currency button-token max-w-xs w-full mx-auto ${stepNumber === maxStep ? "is-disabled" : ""}`}
              onClick={clickHandlerStepNumber.bind(this, 3)}
            >
              <div>
                <span>Activate all 3 matches</span>
              </div>
              <div>
                <img
                  className="dropshadow-xs"
                  src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_token.png"
                  width="34"
                  height="34"
                  alt="token"
                />
                <span>2</span>
              </div>
            </button>
          </div>
          <div
            className={`transition-all duration-500 ease-in-out ${
              stepNumber >= 1
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2"
            }`}
          >
            <div className="bg-gradient-to-r from-interaction-300 to-blue-300 rounded-lg mt-8 p-4 flex gap-2 justify-center items-center max-w-sm mx-auto text-ui-800">
              <span className="icon icon-handheld-console-2 text-xl" />
              <span>Launch your game and play in game mode:</span>
              <span className="rounded bg-ui-900/90 px-2 py-1 font-bold text-blue-300">
                competitive
              </span>
            </div>
          </div>
          <div className="text-center my-8">
            <p className="max-w-sm mx-auto">
              Once you are on the leaderboard, you can keep playing Brawl
              matches to improve your ranking. The combined points from your
              best matches decide your place on the leaderboard.
            </p>
          </div>
          <hr className="separator-gradient max-w-md my-8" />
          <div className="text-center my-8">
            <h2 className="text-2xl max-w-[25ch] mx-auto mb-4">
              Your personal <span className="text-main">best</span>
            </h2>
            <div className="mx-auto gap-4 flex items-stretch justify-center mb-8">
              <div className="flex-1 surface surface-dimmed rounded-lg px-4 pt-4 flex flex-col items-center justify-center max-w-xs">
                <div className="text-5xl font-headings text-blue-300 mb-1">
                  2235
                </div>
                <div className="leading-none text-sm text-ui-300 uppercase flex-1">
                  all time best Brawl points
                </div>
              </div>
              <div className="flex-1 surface surface-dimmed rounded-lg px-4 pt-4 flex flex-col items-center justify-center max-w-xs">
                <div className="text-5xl font-headings text-blue-300 mb-1">
                  14
                </div>
                <div className="leading-none text-sm text-ui-300 uppercase flex-1">
                  times in top 5
                </div>
              </div>
              <div className="flex-1 surface surface-dimmed rounded-lg p-4 flex flex-col items-center justify-center max-w-xs">
                <div className="text-5xl font-headings text-blue-300 mb-1">
                  53
                </div>
                <div className="leading-none text-sm text-ui-300 uppercase flex-1">
                  most Brawl matches played in a week
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 text-left">
              <img
                src="https://play.gloot.com/dae4971e16db5ae2a3c310a757fe2f34.svg"
                width="100"
                height="auto"
                alt=""
              />
              <span className="mb-4">
                Brawl protected by
                <br />
                G-Loot Player Protection
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
