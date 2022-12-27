import React, { useContext, useState } from "react";

import DailyReward from "../../components/DailyReward/DailyReward";
import ModalClaimDailyRewards from "../prototype/home/modal-claim-dailyrewards";
import ModalContainer from "../../components/Modal/ModalContainer";
import { UiContext } from "../../contexts/ui";
import { VariablesContext } from "../../contexts/variables";
import { getLayout } from "../../components/DesignSystem/DSLayout";

const DailyRewards = [
  {
    name: "Day 1",
    reward: "",
    rewardImage:
      "https://res.cloudinary.com/gloot/image/upload/v1653393860/Marketing/2022_prototype/CurrencyRewards/Reward-coin-unique.png",
  },
  {
    name: "Day 2",
    reward: "",
    rewardImage:
      "https://res.cloudinary.com/gloot/image/upload/v1672157994/Stryda/currencies/Reward-centered-coin-unique.png",
  },
  {
    name: "Day 3",
    reward: "",
    rewardImage:
      "https://res.cloudinary.com/gloot/image/upload/v1653393860/Marketing/2022_prototype/CurrencyRewards/Reward-coin-unique.png",
  },
  {
    name: "Day 4",
    reward: "",
    rewardImage:
      "https://res.cloudinary.com/gloot/image/upload/v1672157994/Stryda/currencies/Reward-centered-coin-small.png",
  },
  {
    name: "Day 5",
    reward: "",
    rewardImage:
      "https://res.cloudinary.com/gloot/image/upload/v1672157994/Stryda/currencies/Reward-centered-coin-unique.png",
  },
  {
    name: "Day 6",
    reward: "",
    rewardImage:
      "https://res.cloudinary.com/gloot/image/upload/v1654171544/Marketing/2022_prototype/CurrencyRewards/Reward-centered-mixed-small.png",
  },
  {
    name: "Day 7",
    reward: "",
    rewardImage:
      "https://res.cloudinary.com/gloot/image/upload/v1672157994/Stryda/currencies/Reward-centered-coin-unique.png",
  },
];

const DSpage = () => {
  const [randomNum1, setRandomNum1] = useState(0);
  const [randomNum2, setRandomNum2] = useState(0);
  const maxNum = 7;
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);

  function clickHandlerNum1(varTarget, max) {
    if (varTarget === max) {
      setRandomNum1((varTarget = 0));
    } else {
      setRandomNum1(varTarget + 1);
    }
  }
  function clickHandlerNum2(varTarget, max) {
    if (varTarget === max) {
      setRandomNum2((varTarget = 0));
    } else {
      setRandomNum2(varTarget + 1);
    }
  }
  function openModalClaimDailyRewards() {
    uiContext.openModal(<ModalClaimDailyRewards></ModalClaimDailyRewards>);
  }

  return (
    <>
      <h1 className="mb-2">Daily Reward</h1>

      {/* Structure */}
      <div className="mb-12" id="structure">
        <h2 className="h3 mb-3">Structure</h2>
        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col">
              <div className="flex-1 space-y-4">
                <div className="max-w-sm surface rounded-lg p-2 mx-auto">
                  <ul className="dailyreward">
                    {DailyRewards.map((reward, rewardIndex) => (
                      <li
                        key={rewardIndex}
                        className={`${
                          randomNum1 > rewardIndex ? `is-active` : ""
                        }`}
                      >
                        <div className="mx-auto flip">
                          <div className="flip-front">
                            <span className="text-sm text-ui-300 uppercase">
                              {reward.name}
                            </span>
                            <img src={reward.rewardImage} alt={reward.name} />
                          </div>
                          <div className="flip-back">
                            <span className="text-sm text-ui-400 uppercase">
                              {reward.name}
                            </span>
                            <div className="checkmark checkmark-sm">
                              <i></i>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={clickHandlerNum1.bind(this, randomNum1, maxNum)}
                  >
                    <span>Next day</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/2jxumtby/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With claim */}
      <div className="mb-12" id="with-claim">
        <h2 className="h3 mb-3">With claim</h2>
        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col">
              <div className="flex-1 space-y-4">
                <div className="max-w-sm surface rounded-lg p-2 mx-auto">
                  <DailyReward />
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/oyneg1v8/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
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
