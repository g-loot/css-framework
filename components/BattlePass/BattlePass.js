import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";

import ModalClaimBattlepassReward from "../../pages/prototype/home/modal-claim-battlepassrewards";
import { UiContext } from "../../contexts/ui";
import { DataBattlepass } from "../../mock-data/data-battlepass";
import { DataBattlepassRewards } from "../../mock-data/data-battlepass";
import { usePrototypeData } from "../../contexts/prototype";
import { useRouter } from "next/router";
import Link from "next/link";
import Avatar from "../Avatar/Avatar";
import AnimatedNumber from "../AnimatedNumber/AnimatedNumber";
import CarouselSingle, { CarouselItem } from "../Carousel/CarouselSingle";
import ResetsIn from "../Countdown/ResetsIn";

export default function Battlepass(props) {
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const isPremium = query.premium === "true" ? true : false;
  const [finishedState, setFinishedState] = useState(false);

  const size = props.size || "battlepass-lg";
  const selectedBattlepass = props.id || 0;
  const [currentStep, setCurrentStep] = useState(1);
  const [activeStep, setActiveStep] = useState(1);
  const [originStep, setOriginStep] = useState(0);
  const [maxSteps, setmaxSteps] = useState(9);
  const [loading, setLoading] = useState(true);
  const uiContext = useContext(UiContext);

  function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, RandomNumber(300, 3000));
    }
  }, [loading]);

  const componentRef = useRef();

  const handleResize = useCallback(() => {
    setTimeout(() => {
      const divWidthResized = componentRef?.current?.offsetWidth;
      if (divWidthResized > 1288) {
        setmaxSteps(9);
      } else if (divWidthResized < 1288 && divWidthResized > 1160) {
        setmaxSteps(7);
      } else if (divWidthResized < 1160 && divWidthResized > 992) {
        setmaxSteps(7);
      } else if (divWidthResized < 992 && divWidthResized > 848) {
        setmaxSteps(4);
      } else if (divWidthResized < 848 && divWidthResized > 750) {
        setmaxSteps(3);
      } else if (divWidthResized < 750) {
        setmaxSteps(2);
      }
    }, 50);
  }, [componentRef]);

  useEffect(() => {
    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("load", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, [componentRef, handleResize]);

  useEffect(() => {
    console.log(getBattlepassByID(selectedBattlepass).meta.name);
    setCurrentStep(getBattlepassByID(selectedBattlepass).currentStep);
    setActiveStep(getBattlepassByID(selectedBattlepass).currentStep);
    if (getBattlepassByID(selectedBattlepass).currentStep > maxSteps) {
      setOriginStep(getBattlepassByID(selectedBattlepass).currentStep - 1);
    } else {
      setOriginStep(0);
    }
  }, [selectedBattlepass]);

  const getBattlepassByID = (id) => {
    return DataBattlepass.find((battlepasses) => {
      return battlepasses.id === parseInt(id);
    });
  };

  const getBattlepassStepByID = (id) => {
    return getBattlepassByID(selectedBattlepass).steps.find((step) => {
      return step.id === parseInt(id);
    });
  };

  const getBattlepassRewardByID = (id) => {
    return DataBattlepassRewards.find((reward) => {
      return reward.id === parseInt(id);
    });
  };

  function handleProgress(item) {
    if (item.id < currentStep) {
      return 100;
    } else if (item.id === currentStep) {
      return getBattlepassByID(selectedBattlepass).currentProgress;
    } else {
      return 0;
    }
  }

  function handlePrev() {
    const step = activeStep - 1;
    setActiveStep(step);
    handlePrevBatch();
  }

  function contentClick(step) {
    if (size === "battlepass-md" && step.id < currentStep && !step.hasClaimed) {
      if (step.isPremium && !isPremium) {
        window.location.href = `/prototype/premium`;
      } else {
        openModalClaimBattlepassRewards(step.reward);
      }
    } else {
      setActiveStep(step.id);
    }
  }

  function handleNext() {
    const step = activeStep + 1;
    setActiveStep(step);
    handleNextBatch();
  }

  function handleForward() {
    if (activeStep < maxSteps) {
      const step = maxSteps + 2;
      setActiveStep(step);
      setOriginStep(step);
    }
  }

  function handlePrevBatch() {
    if (activeStep === originStep + 1) {
      setOriginStep(originStep - maxSteps);
    }
  }

  function handleNextBatch() {
    if (activeStep === originStep + maxSteps) {
      setOriginStep(activeStep);
    }
  }

  function openModalClaimBattlepassRewards(rewardID) {
    uiContext.openModal(<ModalClaimBattlepassReward rewardID={rewardID} />);
  }

  function calculPercent(currentValue) {
    const currentTarget = 300 + 100 * currentValue;
    const previousTarget = 300 + 100 * (currentValue - 1);
    const currentMinusPrevious = Math.round(currentTarget - previousTarget);
    const currentProgress =
      getBattlepassByID(selectedBattlepass).currentProgress;
    const percent = Math.round((currentProgress * currentMinusPrevious) / 100);
    return Math.round(previousTarget + percent);
  }

  return (
    <>
      <div
        className={`battlepass-container relative z-10 ${
          loading ? "is-loading" : ""
        } ${size === "battlepass-md" ? "battlepass-md" : ""}`}
        ref={componentRef}
      >
        {getBattlepassByID(selectedBattlepass).isFinished && (
          <div className="battlepass-summary">
            {finishedState ? (
              <>
                <h4 onClick={() => setFinishedState(!finishedState)}>
                  Battlepass completed
                </h4>
                <p className="text-ui-300">
                  Congratulations for reaching the end of the Battlepass!
                </p>
              </>
            ) : (
              <>
                <h4 onClick={() => setFinishedState(!finishedState)}>
                  Battlepass finished
                </h4>
                <p className="text-ui-300">
                  Congratulations on reaching Tier 9
                </p>
              </>
            )}
            <ul>
              <li>
                <img
                  src={`https://res.cloudinary.com/gloot/image/upload/v1680426016/Stryda/illustrations/battlepass/${
                    getBattlepassRewardByID(41).image
                  }.png`}
                  width="100%"
                  height="auto"
                  alt=""
                />
                <div className="battlepass-reward">
                  <span>Total XP</span>
                  <span>
                    <AnimatedNumber number={2240} />
                  </span>
                </div>
              </li>
              <li>
                <img
                  src={`https://res.cloudinary.com/gloot/image/upload/v1680426016/Stryda/illustrations/battlepass/${
                    getBattlepassRewardByID(7).image
                  }.png`}
                  width="100%"
                  height="auto"
                  alt=""
                />
                <div className="battlepass-reward">
                  <span>Coins</span>
                  <span>
                    <AnimatedNumber number={1411} />
                  </span>
                </div>{" "}
              </li>
              <li>
                <img
                  src={`https://res.cloudinary.com/gloot/image/upload/v1680426016/Stryda/illustrations/battlepass/${
                    getBattlepassRewardByID(10).image
                  }.png`}
                  width="100%"
                  height="auto"
                  alt=""
                />
                <div className="battlepass-reward">
                  <span>Tokens</span>
                  <span>
                    <AnimatedNumber number={879} />
                  </span>
                </div>{" "}
              </li>
              <li>
                <CarouselSingle autoPlay={false}>
                  <CarouselItem>
                    <img
                      src={`https://res.cloudinary.com/gloot/image/upload/v1680426016/Stryda/illustrations/battlepass/${
                        getBattlepassRewardByID(17).image
                      }.png`}
                      width="100%"
                      height="auto"
                      alt=""
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src={`https://res.cloudinary.com/gloot/image/upload/v1680426016/Stryda/illustrations/battlepass/${
                        getBattlepassRewardByID(16).image
                      }.png`}
                      width="100%"
                      height="auto"
                      alt=""
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src={`https://res.cloudinary.com/gloot/image/upload/v1680426016/Stryda/illustrations/battlepass/${
                        getBattlepassRewardByID(15).image
                      }.png`}
                      width="100%"
                      height="auto"
                      alt=""
                    />
                  </CarouselItem>
                </CarouselSingle>
                <div className="battlepass-reward">
                  <span>Avatar frames</span>
                  <span>3</span>
                </div>{" "}
              </li>
              <li>
                <CarouselSingle autoPlay={false}>
                  <CarouselItem>
                    <img
                      src={`https://res.cloudinary.com/gloot/image/upload/v1680426016/Stryda/illustrations/battlepass/${
                        getBattlepassRewardByID(36).image
                      }.png`}
                      width="100%"
                      height="auto"
                      alt=""
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src={`https://res.cloudinary.com/gloot/image/upload/v1680426016/Stryda/illustrations/battlepass/${
                        getBattlepassRewardByID(31).image
                      }.png`}
                      width="100%"
                      height="auto"
                      alt=""
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src={`https://res.cloudinary.com/gloot/image/upload/v1680426016/Stryda/illustrations/battlepass/${
                        getBattlepassRewardByID(33).image
                      }.png`}
                      width="100%"
                      height="auto"
                      alt=""
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src={`https://res.cloudinary.com/gloot/image/upload/v1680426016/Stryda/illustrations/battlepass/${
                        getBattlepassRewardByID(35).image
                      }.png`}
                      width="100%"
                      height="auto"
                      alt=""
                    />
                  </CarouselItem>
                </CarouselSingle>
                <div className="battlepass-reward">
                  <span>Profile banners</span>
                  <span>4</span>
                </div>
              </li>
            </ul>
            <p className="text-ui-300">
              <ResetsIn label="New Battlepass" status={2} />
            </p>
          </div>
        )}
        <div
          className={`battlepass-viewer ${
            size === "battlepass-md" ? "!hidden" : ""
          }`}
        >
          <div className="battlepass-reward">
            <div className="battlepass-reward-image">
              <i
                style={{
                  "-webkit-mask-image":
                    "url(https://res.cloudinary.com/gloot/image/upload/v1680426016/Stryda/illustrations/battlepass/" +
                    getBattlepassRewardByID(
                      getBattlepassStepByID(activeStep).reward
                    ).image +
                    ".png)",
                }}
              />
              <img
                src={`https://res.cloudinary.com/gloot/image/upload/v1680426016/Stryda/illustrations/battlepass/${
                  getBattlepassRewardByID(
                    getBattlepassStepByID(activeStep).reward
                  ).image
                }.png`}
                width="100%"
                height="auto"
                alt={
                  getBattlepassRewardByID(
                    getBattlepassStepByID(activeStep).reward
                  ).name
                }
              />
            </div>
            <p className="battlepass-reward-name">
              {size === "battlepass-md" && (
                <span className="uppercase text-ui-300">
                  {getBattlepassStepByID(activeStep).name}:{" "}
                </span>
              )}
              {
                getBattlepassRewardByID(
                  getBattlepassStepByID(activeStep).reward
                ).name
              }
            </p>
          </div>
          <div className="battlepass-reward-info">
            <Link href={`/prototype/profile/1${prototype.getURLparams()}`}>
              <div className="flex items-center gap-4 interactive">
                <Avatar
                  id={1}
                  hasTooltip={false}
                  hasLevel={false}
                  size="avatar-xs"
                />
                <div
                  className={`rounded-full bg-ui-700 border border-ui-600 text-ui-100 -ml-10 h-8 pr-3 flex gap-2 items-center whitespace-nowrap`}
                >
                  <span className="pl-8">
                    <span
                      className={` ${
                        isPremium ? "text-premium-500" : "text-ui-300"
                      }`}
                    >
                      {calculPercent(
                        getBattlepassByID(selectedBattlepass).currentStep
                      )}
                    </span>{" "}
                    <span>
                      / {300 + 100 * getBattlepassStepByID(activeStep).id}
                    </span>
                  </span>
                  <span className="icon icon-xp-symbol text-3xl" />
                </div>
              </div>
            </Link>
          </div>
          <div className="battlepass-reward-action">
            {getBattlepassStepByID(activeStep).id < currentStep ? (
              <>
                {!getBattlepassStepByID(activeStep).hasClaimed && (
                  <>
                    {getBattlepassStepByID(activeStep).isPremium ? (
                      <>
                        {isPremium ? (
                          <button
                            type="button"
                            className="button button-claim"
                            onClick={openModalClaimBattlepassRewards.bind(
                              this,
                              getBattlepassStepByID(activeStep).reward
                            )}
                          >
                            <span className="icon icon-present animate-bounce" />
                            <span>Claim reward</span>
                          </button>
                        ) : (
                          <Link
                            href={`/prototype/premium${prototype.getURLparams()}`}
                          >
                            <button
                              type="button"
                              className="button button-premium animate-shake"
                            >
                              <span className="icon icon-crown" />
                              <span>Get Premium</span>
                            </button>
                          </Link>
                        )}
                      </>
                    ) : (
                      <button
                        type="button"
                        className="button button-claim"
                        onClick={openModalClaimBattlepassRewards.bind(
                          this,
                          getBattlepassStepByID(activeStep).reward
                        )}
                      >
                        <span className="icon icon-present animate-bounce" />
                        <span>Claim reward</span>
                      </button>
                    )}
                  </>
                )}
              </>
            ) : (
              <button
                type="button"
                className="button button-tertiary is-disabled"
              >
                <span className="icon icon-lock" />
                <span>Claim reward</span>
              </button>
            )}
            {!isPremium && (
              <div className="battlepass-premium">
                <Link href={`/prototype/premium${prototype.getURLparams()}`}>
                  <a className="text-premium-500 flex items-center gap-2 whitespace-nowrap rounded-full leading-none p-2 bg-ui-850/90">
                    <span className="icon icon-crown text-lg" />
                    <span className="link text-sm">
                      {getBattlepassByID(selectedBattlepass).currentStep > 1 ? (
                        <>Get Premium to claim 1 locked tier</>
                      ) : (
                        <>Get Premium</>
                      )}
                    </span>
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
        <ul className="battlepass">
          {getBattlepassByID(selectedBattlepass)
            .steps.slice(originStep, originStep + maxSteps)
            .map((item, itemIndex) => (
              <li
                key={itemIndex}
                className={`battlepass-step ${
                  item.isPremium ? `is-premium` : ""
                } ${item.isPremium && !isPremium ? `is-locked` : ""} ${
                  item.isBonus ? `is-bonus` : ""
                } ${item.isSeparator ? `is-separator` : ""} ${
                  activeStep === item.id ? `is-active` : ""
                }
                        ${
                          getBattlepassByID(selectedBattlepass).currentStep ===
                          item.id
                            ? `is-current`
                            : ""
                        }
                        ${
                          getBattlepassByID(selectedBattlepass).currentStep >
                          item.id
                            ? `is-past`
                            : ""
                        }
                        `}
              >
                <div
                  className="battlepass-info"
                  data-tooltip={
                    size === "battlepass-md"
                      ? `${calculPercent(
                          getBattlepassByID(selectedBattlepass).currentStep
                        )} / ${300 + 100 * item.id} XP`
                      : ""
                  }
                >
                  <div
                    className="progressbar progressbar-sm"
                    style={{ "--percent": handleProgress(item) }}
                  >
                    <div />
                  </div>
                </div>
                <button
                  type="button"
                  className="battlepass-content"
                  data-tooltip={
                    size === "battlepass-md"
                      ? getBattlepassRewardByID(item.reward).name
                      : ""
                  }
                  onClick={contentClick.bind(this, item)}
                >
                  <div className="battlepass-decoration">
                    <span>{item.name}</span>
                  </div>
                  <div className="battlepass-body">
                    {!item.hasClaimed &&
                      item.id <
                        getBattlepassByID(selectedBattlepass).currentStep && (
                        <>
                          {item.isPremium ? (
                            <>
                              {isPremium && (
                                <button
                                  type="button"
                                  className="button button-sm whitespace-nowrap button-claim"
                                >
                                  <span className="icon icon-present animate-bounce" />
                                  <span>Claim</span>
                                </button>
                              )}
                            </>
                          ) : (
                            <>
                              {size === "battlepass-md" ? (
                                <button
                                  type="button"
                                  className="button button-sm whitespace-nowrap button-claim"
                                >
                                  <span className="icon icon-present animate-bounce" />
                                  <span>Claim</span>
                                </button>
                              ) : (
                                <div className="bg-main rounded-full w-12 h-12 grid place-content-center text-2xl text-ui-900">
                                  <span className="icon icon-present animate-bounce" />
                                </div>
                              )}
                            </>
                          )}
                        </>
                      )}
                    <img
                      src={`https://res.cloudinary.com/gloot/image/upload/v1680426016/Stryda/illustrations/battlepass/${
                        getBattlepassRewardByID(item.reward).image
                      }.png`}
                      width="100%"
                      height="auto"
                      alt={getBattlepassRewardByID(item.reward).name}
                    />
                  </div>
                </button>
              </li>
            ))}
        </ul>
        <div className="battlepass-nav-container">
          <button
            type="button"
            className="button button-tertiary rounded-full button-sm"
            onClick={() => handlePrev()}
            disabled={activeStep === 1}
          >
            <span className="icon icon-ctrl-double-left" />
          </button>
          <div className="battlepass-nav">
            <button
              type="button"
              className="button button-ghost rounded-full button-sm"
              onClick={() => handlePrev()}
              disabled={activeStep === 1}
            >
              <span className="icon icon-ctrl-left" />
            </button>
            <span>
              {activeStep} /{" "}
              {
                getBattlepassByID(selectedBattlepass).steps.filter((value) => {
                  return value.isBonus !== true;
                }).length
              }
            </span>
            <button
              type="button"
              className="button button-ghost rounded-full button-sm"
              onClick={() => handleNext()}
              disabled={
                activeStep ===
                getBattlepassByID(selectedBattlepass).steps.length
              }
            >
              <span className="icon icon-ctrl-right" />
            </button>
          </div>
          <button
            type="button"
            className="button button-tertiary rounded-full button-sm"
            onClick={() => handleForward()}
            disabled={
              activeStep + maxSteps >
              getBattlepassByID(selectedBattlepass).steps.length
            }
          >
            <span className="icon icon-ctrl-double-right" />
          </button>
        </div>
      </div>
    </>
  );
}
