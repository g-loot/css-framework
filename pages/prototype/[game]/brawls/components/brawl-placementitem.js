import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Lottie from "lottie-react";
import LottieExplosion1 from "../../../../../assets/animations/explosion_stryda_9.json";
import LottieExplosion2 from "../../../../../assets/animations/explosion_stryda_1.json";
import { VariablesContext } from "../../../../../contexts/variables";
import Tooltip from "../../../../../components/Tooltip/Tooltip";
import XPBoostList from "../../../../../components/XPBoostList/XPBoostList";

export default function BrawlPlacementItem(props) {
  const variablesContext = useContext(VariablesContext);
  const { query } = useRouter();
  const [StartAnim, setStartAnim] = useState(false);
  const [resultsDone, setResultsDone] = useState(false);
  const [shining, setShining] = useState(false);
  const isPremium = query.premium === "true" ? true : false;

  useEffect(() => {
    setStartAnim(true);
    const timer = setTimeout(() => {
      handleStartAnim();
    }, 2300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setShining(false);
    const timer = setTimeout(() => {
      setShining(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [variablesContext.brawlStep]);

  useEffect(() => {
    if (variablesContext.brawlStep <= 3) {
      if (variablesContext.brawlStep >= props.item?.step) {
        setResultsDone(false);
        const timer = setTimeout(() => {
          setResultsDone(true);
        }, 5000);
        return () => clearTimeout(timer);
      }
    } else {
      if (variablesContext.brawlStep === props.item?.step) {
        setResultsDone(false);
        const timer = setTimeout(() => {
          setResultsDone(true);
        }, 5000);
        return () => clearTimeout(timer);
      }
    }
  }, [variablesContext.brawlStep]);

  function handleStartAnim() {
    setStartAnim(true);
    const timer = setTimeout(() => {
      setStartAnim(false);
    }, 1000);
    return () => clearTimeout(timer);
  }

  function incrementBrawlStep(value) {
    if (variablesContext.brawlStep < 9) {
      variablesContext.incrementBrawlStep(value);
      if (variablesContext.brawlStep >= 3) {
      }
    } else {
      variablesContext.incrementBrawlStep(-9);
    }
  }

  return (
    <>
      <Tooltip
        className="perspective shrink-0 ml-4 my-4 last:mr-20 animate-slide-in-right animate-delay"
        tooltip={
          variablesContext.brawlStep >= props.item?.step ? (
            <XPBoostList
              isCompleted={false}
              size="sm"
              xp={300}
              type="Brawl match"
            />
          ) : undefined
        }
        style={{
          "--delay": "calc((" + props.item?.step + ") * 0.05s)",
        }}
      >
        <div
          className={`w-44 h-16 flip flip-vertical animate-delay ${
            variablesContext.brawlStep >= props.item?.step ? "animate-flip" : ""
          }`}
          style={
            props.item?.step <= 3
              ? { "--delay": "calc((" + props.item?.step + ") * 0.2s)" }
              : {}
          }
        >
          <div
            className={`flip-front rounded-lg surface-ui-700 shadow-lg flex items-center justify-between px-2 gap-2 w-44 h-16 transition-opacity duration-100 ${
              props.item?.step > 3 &&
              variablesContext.brawlStep + 1 < props.item?.step
                ? "opacity-25"
                : ""
            }`}
          >
            {props.item?.step > 3 &&
              variablesContext.brawlStep + 1 === props.item?.step && (
                <div className="absolute z-20 inset-0 p-4 flex items-center justify-center overflow-hidden rounded-lg">
                  <button
                    type="button"
                    className={`button button-sm button-primary button-currency button-token w-full animate-slide-in-bottom ${
                      shining ? "is-shining" : ""
                    }`}
                    onClick={incrementBrawlStep.bind(this, 1)}
                  >
                    <div>
                      <span>Activate</span>
                    </div>
                    <div>
                      <span className="icon icon-token " />
                      <span>1</span>
                    </div>
                  </button>
                </div>
              )}
            {variablesContext.brawlStep >= props.item?.step && (
              <div className="absolute z-10 inset-0 pl-2 flex items-center justify-end lottie-blur">
                <Lottie
                  animationData={LottieExplosion2}
                  loop={false}
                  className="h-16 w-16 mr-2"
                />
              </div>
            )}
            <div
              className={`uppercase text-ui-300 whitespace-nowrap ${
                props.item?.step > 3 &&
                variablesContext.brawlStep + 1 === props.item?.step
                  ? "opacity-0"
                  : ""
              }`}
            >
              Match {props.item?.step}
            </div>
            <div
              className={`${
                props.item?.step > 3 &&
                variablesContext.brawlStep + 1 === props.item?.step
                  ? "opacity-0"
                  : ""
              }`}
            >
              {isPremium ? (
                <Tooltip
                  placement="top"
                  tooltip={
                    undefined
                  }
                >
                  <div className="chip chip-sm chip-secondary chip-ghost">
                    <span>{Math.round(300 * 1.65)}</span>
                    <span className="icon icon-xp-symbol" />
                  </div>
                </Tooltip>
              ) : (
                <div className="flex flex-col items-end -space-y-1">
                  <div className="chip chip-sm chip-secondary chip-ghost">
                    <span>{300}</span>
                    <span className="icon icon-xp-symbol" />
                  </div>
                  <Tooltip
                    placement="top"
                    tooltip={
                      <div className="w-56 flex gap-4 text-sm">
                        <div className="relative -mt-3">
                          <span className="icon icon-crown text-6xl text-premium-500" />
                          <div className="lottie-premium absolute -inset-1">
                            <Lottie
                              animationData={LottieExplosion2}
                              loop={false}
                              autoplay={true}
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          Subscribe to Premium to earn an additional{" "}
                          <span className="text-premium-500">50% XP</span> on
                          each completed mission.
                        </div>
                      </div>
                    }
                  >
                    <button type="button" className="chip chip-sm chip-premium chip-ghost">
                      <span>+{300 / 2}</span>
                      <span className="icon icon-crown" />
                    </button>
                  </Tooltip>
                </div>
              )}
            </div>
            {/*
            <div
              className={`w-12 h-12 rounded-full bg-main flex items-center justify-center ${
                props.item?.step > 3 &&
                variablesContext.brawlStep + 1 === props.item?.step
                  ? "opacity-0"
                  : ""
              }`}
            >
              <span className="icon icon-lock text-xl text-ui-600" />
            </div>
            */}
          </div>

          <div
            className={`flip-back rounded-lg shadow-lg flex items-center justify-between pl-2 gap-2 w-44 h-16 overflow-hidden ${
              !resultsDone
                ? "animate-pulse surface-ui-600 surface surface-halo"
                : "surface-ui-700"
            }`}
          >
            <div
              className={`uppercase text-ui-300 whitespace-nowrap ${
                resultsDone ? "text-ui-100" : "text-ui-300"
              }`}
            >
              Match {props.item?.step}
            </div>
            <div className="flex flex-col items-end justify-end leading-none">
              {resultsDone && (
                <>
                  <div
                    className="flex items-center gap-1 text-main animate-slide-in-right animate-delay mr-2"
                    style={{ "--delay": "calc(0 * 0.05s)" }}
                  >
                    <span className="text-xl text-right">
                      {props.item?.kills}
                    </span>
                    <span>pts</span>
                  </div>
                  <div
                    className={`flex text-sm items-center gap-1 ${
                      isPremium ? "text-ui-100" : "text-ui-300"
                    } animate-slide-in-right animate-delay`}
                    style={{ "--delay": "calc(2 * 0.05s)" }}
                  >
                    <div className="chip chip-sm chip-ghost">
                      <span>
                        {isPremium
                          ? Math.round(300 * 1.65)
                          : Math.round(300 * 1)}
                      </span>
                      <span className="icon icon-xp-symbol" />
                      <span className="icon icon-c-info text-xs" />
                    </div>
                  </div>
                </>
              )}
              {!resultsDone && (
                <>
                  {isPremium ? (
                    <Tooltip
                      placement="top"
                      tooltip={
                        <XPBoostList isCompleted={false} size="sm" xp={300} />
                      }
                    >
                      <div className="chip chip-sm chip-xp chip-ghost">
                        <span>{Math.round(300 * 1.65)}</span>
                        <span className="icon icon-xp-symbol" />
                      </div>
                    </Tooltip>
                  ) : (
                    <div className="flex flex-col items-end -space-y-1">
                      <div className="chip chip-sm chip-ghost">
                        <span>{300}</span>
                        <span className="icon icon-xp-symbol" />
                      </div>
                      <Tooltip
                        placement="top"
                        tooltip={
                          <div className="w-56 flex gap-4 text-sm">
                            <div className="relative -mt-3">
                              <span className="icon icon-crown text-6xl text-premium-500" />
                              <div className="lottie-premium absolute -inset-1">
                                <Lottie
                                  animationData={LottieExplosion2}
                                  loop={false}
                                  autoplay={true}
                                />
                              </div>
                            </div>
                            <div className="flex-1">
                              Subscribe to Premium to earn an additional{" "}
                              <span className="text-premium-500">50% XP</span>{" "}
                              on each completed mission.
                            </div>
                          </div>
                        }
                      >
                        <button type="button" className="chip chip-sm chip-premium chip-ghost">
                          <span>+{300 / 2}</span>
                          <span className="icon icon-crown" />
                        </button>
                      </Tooltip>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </Tooltip>
      {props.item?.step === 3 && (
        <div className="ml-4 my-4 flex items-center">
          <div className="w-9 h-9 rounded-full border border-ui-500 flex items-center justify-center">
            <span className="icon icon-arrow-right text-ui-300" />
          </div>
        </div>
      )}
    </>
  );
}
