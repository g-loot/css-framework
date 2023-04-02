import React, { useContext, useEffect, useState } from "react";

import ModalClaimLadderRewards from "../../pages/prototype/home/modal-claim-ladderrewards";
import { UiContext } from "../../contexts/ui";
import { VariablesContext } from "../../contexts/variables";
import { DataBattlePass } from "../../mock-data/data-battlepass";
import { DataBattlePassRewards } from "../../mock-data/data-battlepass";
import { usePrototypeData } from "../../contexts/prototype";
import { useRouter } from "next/router";
import Avatar from "../Avatar/Avatar";

export default function BattlePass(props) {
  const [currentStep, setCurrentStep] = useState(1);
  const [activeStep, setActiveStep] = useState(1);
  const [originStep, setOriginStep] = useState(0);
  const [maxSteps, setmaxSteps] = useState(5);

  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);

  useEffect(() => {
    setCurrentStep(getBattlePassByID(0).currentStep);
    setActiveStep(getBattlePassByID(0).currentStep);
  }, []);

  const getBattlePassByID = (id) => {
    return DataBattlePass.find((battlepasses) => {
      return battlepasses.id === parseInt(id);
    });
  };
  const getBattlePassStepByID = (id) => {
    return getBattlePassByID(0).steps.find((step) => {
      return step.id === parseInt(id);
    });
  };
  const getBattlePassRewardByID = (id) => {
    return DataBattlePassRewards.find((reward) => {
      return reward.id === parseInt(id);
    });
  };

  function handleProgress(item) {
    if (item.id < currentStep) {
      return 100;
    } else if (item.id === currentStep) {
      return getBattlePassByID(0).currentProgress;
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
    console.log("prevBatch1");
    if (activeStep === originStep + 1) {
      console.log("prevBatch2");
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
      <div className="battlepass-container scrollbar-desktop">
        <div className="battlepass-viewer">
          <div className="battlepass-reward">
            <i
              style={{
                "-webkit-mask-image": "url(https://res.cloudinary.com/gloot/image/upload/v1680426016/Stryda/illustrations/battlepass/" + getBattlePassRewardByID(
                  getBattlePassStepByID(activeStep).reward
                ).image + ".png)",
              }}
            />
            <img
              src={`https://res.cloudinary.com/gloot/image/upload/v1680426016/Stryda/illustrations/battlepass/${
                getBattlePassRewardByID(
                  getBattlePassStepByID(activeStep).reward
                ).image
              }.png`}
              width="100%"
              height="auto"
              alt={
                getBattlePassRewardByID(
                  getBattlePassStepByID(activeStep).reward
                ).name
              }
            />
          </div>
          <h3>
            {
              getBattlePassRewardByID(getBattlePassStepByID(activeStep).reward)
                .name
            }
          </h3>
        </div>
        <ul className="battlepass">
          {getBattlePassByID(0)
            .steps.slice(originStep, originStep + maxSteps)
            .map((item, itemIndex) => (
              <li
                key={itemIndex}
                className={`battlepass-step ${
                  item.isPremium ? `is-premium` : ""
                } ${activeStep === item.id ? `is-active` : ""}
                        
                        ${
                          getBattlePassByID(0).currentStep === item.id
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
                        getBattlePassRewardByID(item.reward).image
                      }.png`}
                      width="100%"
                      height="auto"
                      alt={getBattlePassRewardByID(item.reward).name}
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
            {activeStep} / {getBattlePassByID(0).steps.length}
          </span>
          <button
            type="button"
            className="button button-ghost rounded-full button-sm"
            onClick={() => handleNext()}
            disabled={activeStep === getBattlePassByID(0).steps.length}
          >
            <span className="icon icon-ctrl-right" />
          </button>
        </div>
      </div>
    </>
  );
}
