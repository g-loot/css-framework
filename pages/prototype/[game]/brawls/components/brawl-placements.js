import React, { useContext, useEffect, useRef, useState } from "react";

import { UiContext } from "../../../../../contexts/ui";
import { VariablesContext } from "../../../../../contexts/variables";
import { useRouter } from "next/router";
import ModalInfoBeforeYouPlay from "../modal-info-beforeyouplay";
import BrawlPlacementItem from "./brawl-placementitem";
import ModalBuyTokens from "../../../wallet/modal-buytokens";

const enrollSteps = [
  {
    step: 1,
    kills: 21,
  },
  {
    step: 2,
    kills: 33,
  },
  {
    step: 3,
    kills: 4,
  },
  {
    step: 4,
    kills: 21,
  },
  {
    step: 5,
    kills: 11,
  },
  {
    step: 6,
    kills: 9,
  },
  {
    step: 7,
    kills: 43,
  },
  {
    step: 8,
    kills: 4,
  },
  {
    step: 9,
    kills: 17,
  },
];

export default function BrawlPlacements() {
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);
  const modalInfoBeforeYouPlay =
    query.modalinfobeforeyouplay === "true" ? true : false;
  const [heightValue, setHeightValue] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const sliderWrapper = useRef(null);
  const sliderItem = useRef(null);
  const sliderContainer = useRef(null);
  const [sliderContainerWidth, setSliderContainerWidth] = useState(192);
  const [sliderItemWidth, setSliderItemWidth] = useState(192);
  const [resultsDone, setResultsDone] = useState(false);

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

  function incrementBrawlStep(value) {
    if (variablesContext.brawlStep < enrollSteps.length) {
      variablesContext.incrementBrawlStep(value);
      if (variablesContext.brawlStep >= 3) {
        moveRight();
      }
    } else {
      variablesContext.incrementBrawlStep(-enrollSteps.length);
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
  }, [variablesContext.brawlStep]);

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
                <BrawlPlacementItem
                  ref={sliderItem}
                  item={step}
                  className="last:mr-20"
                  key={step.step}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-y-2 items-center justify-between px-4 pb-4">
          <div className="flex items-center gap-3">
            {variablesContext.brawlStep < 3 ? (
              <button
                type="button"
                className="button button-sm button-primary button-currency button-token"
                onClick={openModalInfoBeforeYouPlay.bind(this, 3)}
              >
                <div>
                  <span>Activate 3 matches</span>
                </div>
                <div>
                  <img
                    className="dropshadow-xs"
                    src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_token.png"
                    width="34"
                    height="34"
                    alt="coin"
                  />
                  <span>2</span>
                </div>
              </button>
            ) : (
              <button
                type="button"
                className="button button-sm button-primary button-currency button-token hidden"
                onClick={incrementBrawlStep.bind(this, 1)}
              >
                <div>
                  <span>Activate 1 match</span>
                </div>
                <div>
                  <img
                    className="dropshadow-xs"
                    src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_token.png"
                    width="34"
                    height="34"
                    alt="coin"
                  />
                  <span>1</span>
                </div>
              </button>
            )}
            <a
              onClick={openModalBuyTokens}
              className="link text-sm text-ui-300"
            >
              Buy more tokens
            </a>
          </div>
          {variablesContext.brawlStep >= 3 && !resultsDone && (
            <div className="animate-slide-in-bottom">
              <div className="text-center text-blue-300 text-sm animate-pulse">
                {variablesContext.brawlStep <= 3 ? (
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
          <div className="flex gap-3">
            {variablesContext.brawlStep >= 3 && (
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
                <span>Request status update</span>
              </button>
            )}
            <button
              type="button"
              className="button button-sm button-ghost rounded-full"
            >
              <span className="icon icon-c-info" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
