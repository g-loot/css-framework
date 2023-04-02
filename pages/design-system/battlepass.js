import React, { useContext, useState, useEffect } from "react";

import ModalClaimLadderRewards from "../prototype/home/modal-claim-dailyrewards";
import ModalContainer from "../../components/Modal/ModalContainer";
import { UiContext } from "../../contexts/ui";
import { VariablesContext } from "../../contexts/variables";
import { getLayout } from "../../components/DesignSystem/DSLayout";

import { DataBattlePass } from "../../mock-data/data-battlepass";
import { DataBattlePassRewards } from "../../mock-data/data-battlepass";
import BattlePass from "../../components/BattlePass/BattlePass";

const DSpage = () => {
  const [currentStep, setcurrentStep] = useState(1);
  const [activeStep, setactiveStep] = useState(1);
  const [randomNum2, setRandomNum2] = useState(3);
  const maxNum = 10;
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);

  useEffect(() => {
    setcurrentStep(getBattlePassByID(0).currentStep);
    setactiveStep(getBattlePassByID(0).currentStep);
  }, []);

  const getBattlePassByID = (id) => {
    return DataBattlePass.find((battlepasses) => {
      return battlepasses.id === parseInt(id);
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
    setactiveStep(step);
  }

  function clickHandlerNum1(varTarget, max) {
    if (varTarget === max) {
      setactiveStep((varTarget = 1));
    } else {
      setactiveStep(varTarget + 1);
    }
  }

  function openModalClaimLadderRewards() {
    uiContext.openModal(<ModalClaimLadderRewards></ModalClaimLadderRewards>);
  }

  return (
    <>
      <h1 className="mb-2">Battle Pass</h1>

      {/* Battle Pass */}
      <div className="mb-12" id="battle-pass">
        <div className="pt-4">
          <div className="">
            <div className="flex gap-4 flex-col">
              <BattlePass />

              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/c1nbf68L/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
