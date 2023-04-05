import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";

import ModalClaimLadderRewards from "../../pages/prototype/home/modal-claim-ladderrewards";
import { UiContext } from "../../contexts/ui";
import { VariablesContext } from "../../contexts/variables";
import { DataBattlepass } from "../../mock-data/data-battlepass";
import { DataBattlepassRewards } from "../../mock-data/data-battlepass";
import { usePrototypeData } from "../../contexts/prototype";
import { useRouter } from "next/router";
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
  const size = props.size || "battlepass-lg";
  const selectedBattlepass = props.id || 0;
  const [currentStep, setCurrentStep] = useState(1);
  const [activeStep, setActiveStep] = useState(1);
  const [originStep, setOriginStep] = useState(0);
  const [maxSteps, setmaxSteps] = useState(5);

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
      console.log(width);
      if (width > 992) {
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

  return (
    <>
      <div
        className={`battlepass-container ${
          size === "battlepass-md" ? "battlepass-md" : ""
        }`}
        ref={componentRef}
      >
        <div className="battlepass-viewer">
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
                <span className="uppercase text-ui-300">{getBattlepassStepByID(activeStep).name}:{" "}</span>
              )}
              {
                getBattlepassRewardByID(
                  getBattlepassStepByID(activeStep).reward
                ).name
              }
            </p>
          </div>
          <div className="battlepass-reward-info">
            {getBattlepassStepByID(activeStep).id < currentStep && (
              <button type="button" className="button button-claim">
                <span className="icon icon-present animate-bounce" />
                <span>Claim reward</span>
              </button>
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
                } ${
                  item.isBonus ? `is-bonus` : ""
                } ${
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
                  onClick={handleActive.bind(this, item.id)}
                >
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
            {activeStep} / {getBattlepassByID(0).steps.filter((value)=>{return value.isBonus !== true}).length}
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
      </div>
    </>
  );
}
