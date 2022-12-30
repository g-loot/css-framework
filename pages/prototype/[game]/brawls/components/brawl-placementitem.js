import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Lottie from "lottie-react";
import LottieExplosion1 from "../../../../../assets/animations/explosion-4.json";
import LottieExplosion2 from "../../../../../assets/animations/explosion-2.json";
import { VariablesContext } from "../../../../../contexts/variables";

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
    }, 2000);
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
      <div
        className="perspective shrink-0 ml-4 my-4 last:mr-20 animate-slide-in-right animate-delay"
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
                      shining ? "is-shining" : "pointer-events-none"
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
              <div className="absolute z-10 inset-x-0 top-0 bottom-1 flex items-center justify-center lottie-blur">
                <Lottie animationData={LottieExplosion1} loop={false} />
                <Lottie animationData={LottieExplosion2} loop={false} />
              </div>
            )}
            <div
              className={`h5 text-ui-300 ${
                props.item?.step > 3 &&
                variablesContext.brawlStep + 1 === props.item?.step
                  ? "opacity-0"
                  : ""
              }`}
            >
              Match {props.item?.step}
            </div>
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
          </div>
          <div
            className={`flip-back rounded-lg shadow-lg flex items-center justify-between px-2 gap-2 w-44 h-16 overflow-hidden ${
              !resultsDone
                ? "animate-pulse surface-ui-600 surface surface-halo"
                : "surface-ui-700"
            }`}
          >
            <div
              className={`h6 text-ui-300 ${
                resultsDone ? "text-ui-100" : "text-ui-300"
              }`}
            >
              Match {props.item?.step}
            </div>
            <div className="pl-2 border-l border-ui-600 flex flex-col items-end gap-1 justify-end leading-none">
              {resultsDone && (
                <>
                  <div
                    className="flex items-center gap-1 text-main animate-slide-in-right animate-delay"
                    style={{ "--delay": "calc(0 * 0.05s)" }}
                  >
                    <span className="text-xl text-right">
                      {props.item?.kills}
                    </span>
                    <span>pts</span>
                  </div>
                  <div
                    className={`flex items-center gap-1 ${isPremium ? 'text-premium-500' : ''} animate-slide-in-right animate-delay`}
                    style={{ "--delay": "calc(2 * 0.05s)" }}
                  >
                    <span className="text-right">+300</span>
                    <span>XP</span>
                  </div>
                </>
              )}
              {!resultsDone && (
                <div className="flex items-center gap-1 text-main">
                  <span className="text-3xl">--</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
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
