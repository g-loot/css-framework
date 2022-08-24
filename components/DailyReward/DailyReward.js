import React, { useContext, useEffect, useState } from "react";

import ModalClaimDailyRewards from "../../pages/prototype/home/modal-claim-dailyrewards";
import { UiContext } from "../../contexts/ui";
import { VariablesContext } from "../../contexts/variables";

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
      "https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-token-unique.png",
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
      "https://res.cloudinary.com/gloot/image/upload/v1654171544/Marketing/2022_prototype/CurrencyRewards/Reward-centered-coin-small.png",
  },
  {
    name: "Day 5",
    reward: "",
    rewardImage:
      "https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-token-unique.png",
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
      "https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-token-unique.png",
  },
];

export default function DailyReward(props) {
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);

  function openModalClaimDailyRewards() {
    uiContext.openModal(<ModalClaimDailyRewards></ModalClaimDailyRewards>);
  }

  return (
    <>
      <div className="w-full relative overflow-hidden">
        <div
          className={`absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-ui-800/90 backdrop-blur-md transition-all duration-300 ease-in-out ${
            variablesContext.dailyRewardClaimed
              ? "pointer-events-none opacity-0"
              : ""
          }`}
        >
          <button
            type="button"
            className="button button-claim is-shining"
            onClick={openModalClaimDailyRewards}
          >
            <span>Claim reward</span>
          </button>
        </div>

        <ul className="dailyreward z-0">
          {DailyRewards.map((reward, rewardIndex) => (
            <li
              key={rewardIndex}
              className={`${
                rewardIndex === 0 || (variablesContext.dailyRewardClaimed && rewardIndex === 1)
                  ? `is-active`
                  : ""
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
                  {rewardIndex === 1 ? (
                    <span className="text-sm text-main uppercase">
                      Today
                    </span>
                  ) : (
                    <span className="text-sm text-ui-400 uppercase">
                      {reward.name}
                    </span>
                  )}
                  <div className="checkmark checkmark-sm">
                    <i></i>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
