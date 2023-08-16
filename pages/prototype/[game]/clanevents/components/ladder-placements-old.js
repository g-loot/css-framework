import React, { useContext, useEffect, useRef, useState } from "react";

import { UiContext } from "@/contexts/ui";
import { VariablesContext } from "@/contexts/variables";
import { useRouter } from "next/router";
import ModalInfoBeforeYouPlay from "../modal-info-claneventenroll";
import LadderPlacementItem from "./ladder-placementitem";
import ModalBuyTokens from "../../../wallet/modal-buytokens";
import Link from "next/link";
import MatchToggle from "../../../../../components/MatchToggle/MatchToggle";
import { usePrototypeData } from "@/contexts/prototype";

const enrollSteps = [
  {
    step: 1,
    kills: 121,
  },
  {
    step: 2,
    kills: 433,
  },
  {
    step: 3,
    kills: 24,
  },
  {
    step: 4,
    kills: 621,
  },
  {
    step: 5,
    kills: 111,
  },
  {
    step: 6,
    kills: 91,
  },
  {
    step: 7,
    kills: 443,
  },
  {
    step: 8,
    kills: 234,
  },
  {
    step: 9,
    kills: 117,
  },
];

export default function LadderPlacements() {
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);
  const modalInfoBeforeYouPlay =
    query.modalinfobeforeyouplay === "true" ? true : false;
  const freeEntry = query.freeentry === "true" ? true : false;
  const [heightValue, setHeightValue] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const sliderWrapper = useRef(null);
  const sliderItem = useRef(null);
  const sliderContainer = useRef(null);
  const [sliderContainerWidth, setSliderContainerWidth] = useState(192);
  const [sliderItemWidth, setSliderItemWidth] = useState(192);
  const [resultsDone, setResultsDone] = useState(false);
  const isPremium = prototype.isPremium;

  function openModalInfoBeforeYouPlay(number) {
    uiContext.openModal(
      <ModalInfoBeforeYouPlay incrementNumber={number}></ModalInfoBeforeYouPlay>
    );
  }

  useEffect(() => {
    if (modalInfoBeforeYouPlay) {
      openModalInfoBeforeYouPlay();
    }
  }, [modalInfoBeforeYouPlay]);

  const [slideLeft, setSlideLeft] = useState(0);

  const moveRight = () => {
    setSlideLeft((sliderWrapper.current.scrollLeft += sliderItemWidth));
  };

  const moveLeft = () => {
    setSlideLeft((sliderWrapper.current.scrollLeft -= sliderItemWidth));
  };

  const moveLeftFull = () => {
    setSlideLeft((sliderWrapper.current.scrollLeft -= 2000));
  };

  useEffect(() => {
    if (sliderContainer.current) {
      setSliderContainerWidth(sliderContainer.current.clientWidth);
    }
  }, [sliderContainer]);

  function incrementLadderStep(value) {
    if (variablesContext.ladderStep < enrollSteps.length) {
      variablesContext.incrementLadderStep(value);
      if (variablesContext.ladderStep >= 3) {
        moveRight();
      }
    } else {
      variablesContext.incrementLadderStep(-enrollSteps.length);
      moveLeftFull();
    }
  }

  function addToastWithDelay(toast) {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr(toast);
      setSubmitting(false);
    }, 1000);
  }

  function openModalBuyTokens() {
    uiContext.openModal(<ModalBuyTokens></ModalBuyTokens>);
  }

  useEffect(() => {
    setResultsDone(false);
    const timer = setTimeout(() => {
      setResultsDone(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [variablesContext.ladderStep]);

  return (
    <>
      <section className="surface sm:rounded-lg mb-4">
        <div className="relative rounded-t-lg overflow-hidden">
          <div
            className={`hidden md:flex absolute z-10 left-0 inset-y-0 self-stretch items-center bg-gradient-to-r from-ui-800 via-ui-800 to-ui-800/0 p-2 transition-opacity duration-300 ${
              slideLeft > 0 ? "" : "opacity-0 pointer-events-none"
            }`}
          >
            <button
              type="button"
              onClick={moveLeft}
              className="button button-lg button-ghost rounded-full"
            >
              <span className="icon icon-ctrl-left"></span>
            </button>
          </div>
          <div
            className={`hidden md:flex absolute z-10 right-0 inset-y-0 self-stretch items-center bg-gradient-to-l from-ui-800 via-ui-800 to-ui-800/0 p-2 transition-opacity duration-300 ${
              slideLeft < sliderContainerWidth
                ? ""
                : "opacity-0 pointer-events-none"
            }`}
          >
            <button
              type="button"
              onClick={moveRight}
              className="button button-lg button-ghost rounded-full"
            >
              <span className="icon icon-ctrl-right"></span>
            </button>
          </div>

          <div
            ref={sliderWrapper}
            className="overflow-x-auto scrollbar-hidden last:after:content-[''] last:after:w-24 last:after:block"
          >
            <div className="flex" ref={sliderContainer}>
              {enrollSteps.map((step, stepIndex) => (
                <LadderPlacementItem
                  ref={sliderItem}
                  item={step}
                  className="last:mr-20"
                  key={step.step}
                />
              ))}
              <div className="ml-4 my-4">
                <div className="w-44 h-16 flex items-center gap-1 pl-12">
                  <div className="w-1 h-1 bg-ui-400 animate-pulse" />
                  <div className="w-1 h-1 bg-ui-400 animate-pulse" />
                  <div className="w-1 h-1 bg-ui-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex px-4 pb-4 text-sm">
          <div>
            <p>
              You have{" "}
              <span className="whitespace-nowrap text-gold-500">
                <span className="translate-y-1 icon icon-token text-lg"></span>{" "}
                <span className="font-bold">{prototype.getUserByID(1)?.wallet.tokens} tokens</span>
              </span>{" "}
              available.{" "}
              <a
                onClick={openModalBuyTokens}
                className="link text-sm text-ui-300"
              >
                Get more tokens
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-y-2 items-center justify-between px-4 pb-4">
        {freeEntry ? (
              <MatchToggle isFreeEntry={freeEntry} />
            ) : (
              <MatchToggle />
            )}
          {variablesContext.ladderStep >= 3 && !resultsDone && (
            <div className="animate-slide-in-bottom">
              <div className="text-center text-main text-sm animate-pulse">
                {variablesContext.ladderStep <= 3 ? (
                  <>
                    Waiting for <b className="text-lg">3</b> match results
                  </>
                ) : (
                  <>
                    Waiting for <b className="text-lg">1</b> match result
                  </>
                )}
              </div>
            </div>
          )}
          
          {variablesContext.ladderStep >= 3 && (
            <div className="flex gap-3">
              <button
                type="button"
                className={`button button-sm button-secondary ${
                  submitting ? "is-loading" : ""
                }`}
                onClick={addToastWithDelay.bind(this, {
                  size: "small",
                  icon: "f-check",
                  color: "green",
                  text: "Your stats have been updated.",
                  autoDelete: true,
                  autoDeleteDelay: 2500,
                })}
              >
                <span className="icon icon-refresh-01" />
                <span>Update my stats</span>
              </button>
              <button
                type="button"
                className="button button-sm button-ghost rounded-full"
              >
                <span className="icon icon-c-info" />
              </button>
              </div>
          )}
         
        </div>
      </section>
    </>
  );
}
