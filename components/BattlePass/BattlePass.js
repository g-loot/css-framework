import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";

import ModalClaimBattlepassReward from "../../pages/prototype/home/modal-claim-battlepassrewards";
import { UiContext } from "../../contexts/ui";
import { VariablesContext } from "../../contexts/variables";
import { DataBattlepass } from "../../mock-data/data-battlepass";
import { DataBattlepassRewards } from "../../mock-data/data-battlepass";
import { usePrototypeData } from "../../contexts/prototype";
import { useRouter } from "next/router";
import Link from "next/link";
import Avatar from "../Avatar/Avatar";

const useResize = (myRef) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleResize = useCallback(() => {
    setWidth(myRef.current.offsetWidth);
    setHeight(myRef.current.offsetHeight);

  }, [myRef]);

  useEffect(() => {
    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("load", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, [myRef, handleResize]);

  return { width, height };
};

export default function Battlepass(props) {
  const [mounted, setMounted] = useState();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const isPremium = query.premium === "true" ? true : false;

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, []);

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
  const { divWidth, setDivWidth } = useState(0);

  const handleResize = useCallback(() => {
    const divWidthResized = componentRef.current.offsetWidth;
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
    setCurrentStep(getBattlepassByID(selectedBattlepass).currentStep);
    setActiveStep(getBattlepassByID(selectedBattlepass).currentStep);
    if (getBattlepassByID(selectedBattlepass).currentStep > maxSteps) {
      setOriginStep(getBattlepassByID(selectedBattlepass).currentStep - 1);
    }
  }, []);

  const getBattlepassByID = (id) => {
    return DataBattlepass.find((battlepasses) => {
      return battlepasses.id === parseInt(id);
    });
  };

  const getBattlepassStepByID = (id) => {
    return getBattlepassByID(0).steps.find((step) => {
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
      return getBattlepassByID(0).currentProgress;
    } else {
      return 0;
    }
  }

  function handlePrev() {
    const step = activeStep - 1;
    setActiveStep(step);
    handlePrevBatch();
    console.log(
      step,
      "active " + activeStep,
      "origin " + originStep,
      "max " + maxSteps
    );
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
    console.log(
      step,
      "active " + activeStep,
      "origin " + originStep,
      "max " + maxSteps
    );
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

  return (
    <>
      {mounted && (
        <div
          className={`battlepass-container ${loading ? "is-loading" : ""} ${
            size === "battlepass-md" ? "battlepass-md" : ""
          }`}
          ref={componentRef}
        >
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
                        1425
                      </span>{" "}
                      <span>
                        / {1000 + 100 * getBattlepassStepByID(activeStep).id}
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
                        <Link href={`/prototype/premium`}>
                          <button
                            type="button"
                            className="button button-tertiary"
                          >
                            <span className="icon icon-crown text-premium-500" />
                            <span className="text-premium-500">
                              Get Premium
                            </span>
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
              ) : (
                <button
                  type="button"
                  className="button button-tertiary is-disabled"
                >
                  <span className="icon icon-lock" />
                  <span>Claim reward</span>
                </button>
              )}
            </div>
          </div>
          <ul className="battlepass">
            {getBattlepassByID(0)
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
                          getBattlepassByID(0).currentStep === item.id
                            ? `is-current`
                            : ""
                        }
                        ${
                          getBattlepassByID(0).currentStep > item.id
                            ? `is-past`
                            : ""
                        }
                        `}
                >
                  <div className="battlepass-info">
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
                      {!item.hasClaimed && item.id < currentStep && (
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
              <span className="icon icon-ctrl-backward" />
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
                  getBattlepassByID(0).steps.filter((value) => {
                    return value.isBonus !== true;
                  }).length
                }
              </span>
              <button
                type="button"
                className="button button-ghost rounded-full button-sm"
                onClick={() => handleNext()}
                disabled={activeStep === getBattlepassByID(0).steps.length}
              >
                <span className="icon icon-ctrl-right" />
              </button>
            </div>
            <button
              type="button"
              className="button button-tertiary rounded-full button-sm"
              onClick={() => handleForward()}
              disabled={
                activeStep + maxSteps > getBattlepassByID(0).steps.length
              }
            >
              <span className="icon icon-ctrl-forward" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
