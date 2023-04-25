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
import Tooltip from "../Tooltip/Tooltip";

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
  const { width, height } = useResize(componentRef);

  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);

  useEffect(() => {
    setCurrentStep(getBattlepassByID(selectedBattlepass).currentStep);
    setActiveStep(getBattlepassByID(selectedBattlepass).currentStep);
    if (getBattlepassByID(selectedBattlepass).currentStep > maxSteps) {
      setOriginStep(getBattlepassByID(selectedBattlepass).currentStep - 1);
    }
  }, []);

  useEffect(() => {
    if (width > 0) {
      if (width > 1288) {
        setmaxSteps(9);
      } else if (width < 1288 && width > 1160) {
        setmaxSteps(8);
      } else if (width < 1160 && width > 992) {
        setmaxSteps(7);
      } else if (width < 992 && width > 848) {
        setmaxSteps(6);
      } else if (width < 848 && width > 750) {
        setmaxSteps(5);
      } else if (width < 750 && width > 350) {
        setmaxSteps(3);
      } else {
        setmaxSteps(2);
      }
    }
  }, [width]);

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

  function handleActive(step) {
    setActiveStep(step);
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
    if (size === "battlepass-md" && step.id < currentStep) {
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
          className={`battlepass-container ${loading ? 'is-loading' : ''} ${
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
            <div className="battlepass-reward-info">
              {getBattlepassStepByID(activeStep).id < currentStep && (
                <span>
                  <span className="text-ui-300">
                    {1000 + 100 * getBattlepassStepByID(activeStep).id} /
                  </span>{" "}
                  <span className="text-ui-100">
                    {1000 + 100 * getBattlepassStepByID(activeStep).id} XP
                  </span>
                </span>
              )}
              {getBattlepassStepByID(activeStep).id === currentStep && (
                <span>
                  <span className="text-ui-300">
                    {1000 + 100 * getBattlepassStepByID(activeStep).id - 75} /
                  </span>{" "}
                  <span className="text-ui-100">
                    {1000 + 100 * getBattlepassStepByID(activeStep).id} XP
                  </span>
                </span>
              )}

              {getBattlepassStepByID(activeStep).id > currentStep && (
                <span>
                  <span className="text-ui-300">0 /</span>{" "}
                  <span className="text-ui-100">
                    {1000 + 100 * getBattlepassStepByID(activeStep).id} XP
                  </span>
                </span>
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
                  } ${item.isBonus ? `is-bonus` : ""} ${
                    item.isSeparator ? `is-separator` : ""
                  } ${activeStep === item.id ? `is-active` : ""}
                        
                        ${
                          getBattlepassByID(0).currentStep === item.id
                            ? `is-current`
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
                      size === "battlepass-md" && item.id >= currentStep
                        ? getBattlepassRewardByID(item.reward).name
                        : ""
                    }
                    onClick={contentClick.bind(this, item)}
                  >
                    {size === "battlepass-md" && item.id < currentStep && (
                      <div className="absolute inset-0 z-50 flex items-center justify-center p-2 bg-ui-900/90">
                        {item.isPremium ? (
                          <>
                            {isPremium ? (
                              <button
                                type="button"
                                className="button button-sm whitespace-nowrap button-claim"
                              >
                                <span className="icon icon-present animate-bounce" />
                                <span>Claim</span>
                              </button>
                            ) : (
                              <button
                                type="button"
                                className="button button-sm whitespace-nowrap button-tertiary is-disabled"
                              >
                                <span className="icon icon-lock" />
                                <span className="">Claim</span>
                              </button>
                            )}
                          </>
                        ) : (
                          <button
                            type="button"
                            className="button button-sm whitespace-nowrap button-claim"
                          >
                            <span className="icon icon-present animate-bounce" />
                            <span>Claim</span>
                          </button>
                        )}
                      </div>
                    )}
                    <div className="battlepass-decoration">{item.name}</div>
                    <div className="battlepass-body">
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
