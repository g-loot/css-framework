import React, { useContext, useEffect, useState } from "react";

import ModalClaimLadderRewards from "../../pages/prototype/home/modal-claim-ladderrewards";
import { UiContext } from "../../contexts/ui";
import { VariablesContext } from "../../contexts/variables";
import { usePrototypeData } from "../../contexts/prototype";
import { useRouter } from "next/router";

export default function RewardLadder(props) {
  const [step, setStep] = useState(1);
  const maxStep = 11;
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);
  const [showWellDone, setShowWellDone] = useState(false);
  const prototype = usePrototypeData();
  const { query } = useRouter();
  const isPremium = query.premium === "true" ? true : false;

  function openModalClaimLadderRewards() {
    uiContext.openModal(<ModalClaimLadderRewards></ModalClaimLadderRewards>);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative">
        <div
          className={`absolute inset-0 z-50 backdrop-blur-sm bg-ui-900/80 gap-2 flex items-center justify-center overflow-hidden transition-opacity duration-500 ${
            props.hasReward && !variablesContext.rewardClaimed
              ? ""
              : "pointer-events-none opacity-0"
          }`}
        >
          {!variablesContext.rewardClaimed && (
            <>
              <div
                className="relative z-10 flex flex-col items-center justify-center gap-3 animate-slide-in-bottom animate-delay"
                style={{ "--delay": "calc(1 * 0.05s)" }}
              >
                <h2>2 rewards available</h2>
                <button
                  type="button"
                  className="button button-claim is-shining"
                  onClick={openModalClaimLadderRewards}
                >
                  <span className="icon icon-present animate-bounce" />
                  <span>Claim rewards</span>
                </button>
              </div>
            </>
          )}
          {variablesContext.rewardClaimed && showWellDone && (
            <div
              className="flex flex-col items-center justify-center gap-3 animate-slide-in-bottom animate-delay"
              style={{ "--delay": "calc(1 * 0.05s)" }}
            >
              <div
                className="relative z-10 flex flex-col items-center justify-center gap-3 animate-slide-in-bottom animate-delay"
                style={{ "--delay": "calc(1 * 0.05s)" }}
              >
                <h2 onClick={variablesContext.unclaimReward}>Well done!</h2>
                <p className="text-ui-200">
                  You have claimed all rewards available for this week.
                </p>
              </div>
              <div className="absolute z-0 inset-0 pointer-events-none">
                <img
                  className="absolute top-10 left-[calc(50%-300px)] -rotate-[33deg]"
                  src="https://res.cloudinary.com/gloot/image/upload/v1660128022/Marketing/2022_prototype/3Dobjects/3dobject-star-1.webp"
                  width="100"
                  height="auto"
                  alt=""
                />
                <img
                  className="absolute bottom-10 left-[calc(50%-200px)] -rotate-[120deg]"
                  src="https://res.cloudinary.com/gloot/image/upload/v1660128022/Marketing/2022_prototype/3Dobjects/3dobject-star-2.webp"
                  width="60"
                  height="auto"
                  alt=""
                />
                <img
                  className="absolute bottom-24 right-[calc(50%-250px)] rotate-[45deg]"
                  src="https://res.cloudinary.com/gloot/image/upload/v1660128022/Marketing/2022_prototype/3Dobjects/3dobject-star-1.webp"
                  width="50"
                  height="auto"
                  alt=""
                />
                <img
                  className="absolute top-12 right-[calc(50%-350px)] rotate-[33deg]"
                  src="https://res.cloudinary.com/gloot/image/upload/v1660128022/Marketing/2022_prototype/3Dobjects/3dobject-star-2.webp"
                  width="110"
                  height="auto"
                  alt=""
                />
              </div>
            </div>
          )}
        </div>

        <div
          className="ladder-container scrollbar-hidden"
          style={{ "--max": maxStep, "--step": step }}
        >
          <div className="ladder-avatar py-2">
            <div>
              <div>
                <div
                  className={`chip chip-sm ${
                    isPremium ? "chip-premium chip-inverted" : "chip-xp"
                  }`}
                >
                  <span className="pl-2">550</span>
                  <span className="icon icon-xp-symbol" />
                </div>
                <div
                  className={`avatar avatar-circle avatar-xs ${
                    isPremium ? "avatar-premium" : ""
                  }`}
                >
                  <div>
                    <img src={prototype.getUserByID(1)?.avatar} alt="" />
                  </div>
                  <i className="radar" />
                </div>
              </div>
            </div>
          </div>
          <ul className="ladder ladder-sm">
            <li className={`${step === 1 ? `is-active` : ""}`}>
              <div className="ladder-info">
                <div>
                  <span>1</span>
                </div>
              </div>

              <div className="ladder-milestone">
                <div className="chip chip-ghost">
                  <span>200</span>
                  <span className="icon icon-xp-symbol" />
                </div>
              </div>
              <div className="ladder-content">
                <div className="ladder-decoration"></div>
                <div className="ladder-body">
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1672157995/Stryda/currencies/Reward-centered-token-unique.png"
                    width="100%"
                    height="auto"
                    alt="Reward"
                  />
                  <span>1 token</span>
                </div>
              </div>
            </li>
            <li className={`${step === 2 ? `is-active` : ""}`}>
              <div className="ladder-info">
                <div>
                  <span>1</span>
                </div>
              </div>
              <div className="ladder-milestone">
                <div className="chip chip-ghost">
                  <span>200</span>
                  <span className="icon icon-xp-symbol" />
                </div>
              </div>
              <div className="ladder-content">
                <div className="ladder-decoration"></div>
                <div className="ladder-body">
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1672157995/Stryda/currencies/Reward-centered-coin-unique.png"
                    width="100%"
                    height="auto"
                    alt="Reward"
                  />
                  <span>1 coin</span>
                </div>
              </div>
            </li>
            <li className={`${step === 3 ? `is-active` : ""}`}>
              <div className="ladder-info">
                <div>
                  <span>2</span>
                </div>
              </div>
              <div className="ladder-milestone">
                <div className="chip chip-ghost">
                  <span>500</span>
                  <span className="icon icon-xp-symbol" />
                </div>
              </div>
              <div className="ladder-content">
                <div className="ladder-decoration"></div>
                <div className="ladder-body">
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1672157995/Stryda/currencies/Reward-centered-token-unique.png"
                    width="100%"
                    height="auto"
                    alt="Reward"
                  />
                  <span>1 token</span>
                </div>
              </div>
            </li>
            <li className={`${step === 4 ? `is-active` : ""}`}>
              <div className="ladder-info">
                <div>
                  <span>3</span>
                </div>
              </div>
              <div className="ladder-milestone">
                <div className="chip chip-ghost">
                  <span>800</span>
                  <span className="icon icon-xp-symbol" />
                </div>
              </div>
              <div className="ladder-content">
                <div className="ladder-decoration"></div>
                <div className="ladder-body">
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1672157994/Stryda/currencies/Reward-centered-coin-small.png"
                    width="100%"
                    height="auto"
                    alt="Reward"
                  />
                  <span>50 coins</span>
                </div>
              </div>
            </li>
            <li className={`${step === 5 ? `is-active` : ""}`}>
              <div className="ladder-info">
                <div>
                  <span>4</span>
                </div>
              </div>
              <div className="ladder-milestone">
                <div className="chip chip-ghost">
                  <span>1100</span>
                  <span className="icon icon-xp-symbol" />
                </div>
              </div>
              <div className="ladder-content">
                <div className="ladder-decoration"></div>
                <div className="ladder-body">
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1672157995/Stryda/currencies/Reward-centered-token-unique.png"
                    width="100%"
                    height="auto"
                    alt="Reward"
                  />
                  <span>1 token</span>
                </div>
              </div>
            </li>
            <li className={`${step === 6 ? `is-active` : ""}`}>
              <div className="ladder-info">
                <div>
                  <span>5</span>
                </div>
              </div>
              <div className="ladder-milestone">
                <div className="chip chip-ghost">
                  <span>1400</span>
                  <span className="icon icon-xp-symbol" />
                </div>
              </div>
              <div className="ladder-content">
                <div className="ladder-decoration"></div>
                <div className="ladder-body">
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1672157995/Stryda/currencies/Reward-centered-token-unique.png"
                    width="100%"
                    height="auto"
                    alt="Reward"
                  />
                  <span>1 token</span>
                </div>
              </div>
            </li>
            <li className={`${step === 7 ? `is-active` : ""}`}>
              <div className="ladder-info">
                <div>
                  <span>6</span>
                </div>
              </div>
              <div className="ladder-milestone">
                <div className="chip chip-ghost">
                  <span>1700</span>
                  <span className="icon icon-xp-symbol" />
                </div>
              </div>
              <div className="ladder-content">
                <div className="ladder-decoration"></div>
                <div className="ladder-body">
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1672157994/Stryda/currencies/Reward-centered-coin-medium.png"
                    width="100%"
                    height="auto"
                    alt="Reward"
                  />
                  <span>100 coins</span>
                </div>
              </div>
            </li>
            <li className={`${step === 8 ? `is-active` : ""}`}>
              <div className="ladder-info">
                <div>
                  <span>7</span>
                </div>
              </div>
              <div className="ladder-milestone">
                <div className="chip chip-ghost">
                  <span>2000</span>
                  <span className="icon icon-xp-symbol" />
                </div>
              </div>
              <div className="ladder-content">
                <div className="ladder-decoration"></div>
                <div className="ladder-body">
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1671799703/Stryda/currencies/Reward-centered-token-extrasmall.png"
                    width="100%"
                    height="auto"
                    alt="Reward"
                  />
                  <span>2 tokens</span>
                </div>
              </div>
            </li>
            <li className={`is-lockedNO ${step === 9 ? `is-active` : ""}`}>
              <div className="ladder-info">
                <div>
                  <span>8</span>
                </div>
              </div>
              <div className="ladder-milestone">
                <div className="chip chip-ghost">
                  <span>2300</span>
                  <span className="icon icon-xp-symbol" />
                </div>
              </div>
              <div className="ladder-content">
                <div className="ladder-decoration"></div>
                <div className="ladder-body">
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1671800047/Stryda/currencies/Reward-centered-mixed-medium.png"
                    width="100%"
                    height="auto"
                    alt="Reward"
                  />
                  <span>
                    250 coins
                    <br />2 tokens
                  </span>
                </div>
              </div>
            </li>
            <li className={`is-lockedNO ${step === 10 ? `is-active` : ""}`}>
              <div className="ladder-info">
                <div>
                  <span>9</span>
                </div>
              </div>
              <div className="ladder-milestone">
                <div className="chip chip-ghost">
                  <span>2800</span>
                  <span className="icon icon-xp-symbol" />
                </div>
              </div>
              <div className="ladder-content">
                <div className="ladder-decoration"></div>
                <div className="ladder-body">
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1671800047/Stryda/currencies/Reward-centered-mixed-medium.png"
                    width="100%"
                    height="auto"
                    alt="Reward"
                  />
                  <span>
                    250 coins
                    <br />2 tokens
                  </span>
                </div>
              </div>
            </li>
            <li className={`is-lockedNO ${step === 11 ? `is-active` : ""}`}>
              <div className="ladder-info">
                <div>
                  <span>10</span>
                </div>
              </div>
              <div className="ladder-milestone">
                <div className="chip chip-ghost">
                  <span>3100</span>
                  <span className="icon icon-xp-symbol" />
                </div>
              </div>
              <div className="ladder-content">
                <div className="ladder-decoration"></div>
                <div className="ladder-body">
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1671800047/Stryda/currencies/Reward-centered-mixed-large.png"
                    width="100%"
                    height="auto"
                    alt="Reward"
                  />
                  <span>
                    500 coins
                    <br />2 tokens
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
