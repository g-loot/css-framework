import React, { useContext, useEffect, useState } from "react";

import ModalClaimDailyRewards from "../../pages/prototype/home/modal-claim-dailyrewards";
import ModalContainer from "../../components/Modal/ModalContainer";
import { UiContext } from "../../contexts/ui";
import { VariablesContext } from "../../contexts/variables";

export default function RewardLadder(props) {
  const [step, setStep] = useState(1);
  const maxStep = 10;
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);

  function openModalClaimDailyRewards() {
    uiContext.openModal(<ModalClaimDailyRewards></ModalClaimDailyRewards>);
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
        {props.hasReward && (
          <div className="absolute inset-0 z-50 backdrop-blur-sm bg-gradient-radial from-ui-900/90 via-ui-900/90 to-ui-900/60 gap-2 flex items-center justify-center overflow-hidden">
            {!variablesContext.rewardClaimed && (
              <>
                <div
                  className="relative z-10 flex flex-col items-center justify-center gap-3 animate-slide-in-bottom animate-delay"
                  style={{ "--delay": "calc(1 * 0.05s)" }}
                >
                  <h2>2 rewards available</h2>
                  <button
                    type="button"
                    className="button button-claim"
                    onClick={openModalClaimDailyRewards}
                  >
                    <span>Claim rewards</span>
                  </button>
                </div>
                <div className="absolute z-0 inset-0 pointer-events-none">
                  <img
                    className="absolute top-6 left-[calc(50%-300px)] -rotate-[33deg]"
                    src="https://res.cloudinary.com/gloot/image/upload/v1660128022/Marketing/2022_prototype/3Dobjects/3dobject-gift-1.webp"
                    width="100"
                    height="auto"
                    alt=""
                  />
                  <img
                    className="absolute bottom-10 left-[calc(50%-200px)] -rotate-[120deg]"
                    src="https://res.cloudinary.com/gloot/image/upload/v1660128022/Marketing/2022_prototype/3Dobjects/3dobject-gift-2.webp"
                    width="60"
                    height="auto"
                    alt=""
                  />
                  <img
                    className="absolute bottom-18 right-[calc(50%-250px)] rotate-[45deg]"
                    src="https://res.cloudinary.com/gloot/image/upload/v1660128022/Marketing/2022_prototype/3Dobjects/3dobject-gift-1.webp"
                    width="50"
                    height="auto"
                    alt=""
                  />
                  <img
                    className="absolute top-12 right-[calc(50%-350px)] rotate-[33deg]"
                    src="https://res.cloudinary.com/gloot/image/upload/v1660128022/Marketing/2022_prototype/3Dobjects/3dobject-gift-2.webp"
                    width="110"
                    height="auto"
                    alt=""
                  />
                  <div className="absolute z-0 rounded-full bg-gradient-to-b from-main/25 via-blue-700/75 to-main/0 w-32 h-24 blur-xl transform-gpu left-[calc(50%-4rem)] top-[calc(50%+1.5rem)]" />
                </div>
              </>
            )}
            {variablesContext.rewardClaimed && (
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
        )}

        <div
          className="ladder-container scrollbar-desktop"
          style={{ "--max": maxStep, "--step": step }}
        >
          <div className="ladder-avatar py-2">
            <div>
              <div>
                <figure className="avatar avatar-circle avatar-xs">
                  <div>
                    <img
                      src="https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png"
                      alt=""
                    />
                  </div>
                  <i className="radar" />
                </figure>
              </div>
            </div>
          </div>
          <ul className="ladder ladder-sm">
            <li className={`${step === 1 ? `is-active` : ""}`}>
              <div className="ladder-info">
                <div>
                  <span>1</span>
                  <span>0/200</span>
                </div>
              </div>
              <div className="ladder-content">
                <div className="ladder-decoration"></div>
                <div className="ladder-body">
                  <div className="chip chip-xs chip-reward chip-xp chip-inverted chip-sm">
                    <span>500</span>
                    <span className="icon icon-xp-symbol-outline" />
                  </div>
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-token-unique.png"
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
                  <span>2</span>
                  <span>0/200</span>
                </div>
              </div>
              <div className="ladder-content">
                <div className="ladder-decoration"></div>
                <div className="ladder-body">
                  <div className="chip chip-xs chip-reward chip-xp chip-inverted chip-sm">
                    <span>500</span>
                    <span className="icon icon-xp-symbol-outline" />
                  </div>
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-token-unique.png"
                    width="100%"
                    height="auto"
                    alt="Reward"
                  />
                  <span>1 token</span>
                </div>
              </div>
            </li>
            <li className={`${step === 3 ? `is-active` : ""}`}>
              <div className="ladder-info">
                <div>
                  <span>3</span>
                  <span>0/200</span>
                </div>
              </div>
              <div className="ladder-content">
                <div className="ladder-decoration"></div>
                <div className="ladder-body">
                  <div className="chip chip-xs chip-reward chip-xp chip-inverted chip-sm">
                    <span>800</span>
                    <span className="icon icon-xp-symbol-outline" />
                  </div>
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-coin-small.png"
                    width="100%"
                    height="auto"
                    alt="Reward"
                  />
                  <span>50 coins</span>
                </div>
              </div>
            </li>
            <li className={`${step === 4 ? `is-active` : ""}`}>
              <div className="ladder-info">
                <div>
                  <span>4</span>
                  <span>0/200</span>
                </div>
              </div>
              <div className="ladder-content">
                <div className="ladder-decoration"></div>
                <div className="ladder-body">
                  <div className="chip chip-xs chip-reward chip-xp chip-inverted chip-sm">
                    <span>1100</span>
                    <span className="icon icon-xp-symbol-outline" />
                  </div>
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-token-unique.png"
                    width="100%"
                    height="auto"
                    alt="Reward"
                  />
                  <span>1 token</span>
                </div>
              </div>
            </li>
            <li className={`${step === 5 ? `is-active` : ""}`}>
              <div className="ladder-info">
                <div>
                  <span>5</span>
                  <span>0/200</span>
                </div>
              </div>
              <div className="ladder-content">
                <div className="ladder-decoration"></div>
                <div className="ladder-body">
                  <div className="chip chip-xs chip-reward chip-xp chip-inverted chip-sm">
                    <span>1400</span>
                    <span className="icon icon-xp-symbol-outline" />
                  </div>
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-token-unique.png"
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
                  <span>6</span>
                  <span>0/200</span>
                </div>
              </div>
              <div className="ladder-content">
                <div className="ladder-decoration"></div>
                <div className="ladder-body">
                  <div className="chip chip-xs chip-reward chip-xp chip-inverted chip-sm">
                    <span>1700</span>
                    <span className="icon icon-xp-symbol-outline" />
                  </div>
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-coin-small.png"
                    width="100%"
                    height="auto"
                    alt="Reward"
                  />
                  <span>100 coins</span>
                </div>
              </div>
            </li>
            <li className={`${step === 7 ? `is-active` : ""}`}>
              <div className="ladder-info">
                <div>
                  <span>7</span>
                  <span>0/200</span>
                </div>
              </div>
              <div className="ladder-content">
                <div className="ladder-decoration"></div>
                <div className="ladder-body">
                  <div className="chip chip-xs chip-reward chip-xp chip-inverted chip-sm">
                    <span>2000</span>
                    <span className="icon icon-xp-symbol-outline" />
                  </div>
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-token-extrasmall.png"
                    width="100%"
                    height="auto"
                    alt="Reward"
                  />
                  <span>2 tokens</span>
                </div>
              </div>
            </li>
            <li className={`is-locked ${step === 8 ? `is-active` : ""}`}>
              <div className="ladder-info">
                <div>
                  <span>8</span>
                  <span>0/200</span>
                </div>
              </div>
              <div className="ladder-content">
                <div className="ladder-decoration"></div>
                <div className="ladder-body">
                  <div className="chip chip-xs chip-reward chip-xp chip-inverted chip-sm">
                    <span>2000</span>
                    <span className="icon icon-xp-symbol-outline" />
                  </div>
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-mixed-extrasmall.png"
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
            <li className={`is-locked ${step === 9 ? `is-active` : ""}`}>
              <div className="ladder-info">
                <div>
                  <span>9</span>
                  <span>0/200</span>
                </div>
              </div>
              <div className="ladder-content">
                <div className="ladder-decoration"></div>
                <div className="ladder-body">
                  <div className="chip chip-xs chip-reward chip-xp chip-inverted chip-sm">
                    <span>2000</span>
                    <span className="icon icon-xp-symbol-outline" />
                  </div>
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-mixed-extrasmall.png"
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
            <li className={`is-locked ${step === 10 ? `is-active` : ""}`}>
              <div className="ladder-info">
                <div>
                  <span>10</span>
                  <span>0/200</span>
                </div>
              </div>
              <div className="ladder-content">
                <div className="ladder-decoration"></div>
                <div className="ladder-body">
                  <div className="chip chip-xs chip-reward chip-xp chip-inverted chip-sm">
                    <span>2000</span>
                    <span className="icon icon-xp-symbol-outline" />
                  </div>
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-mixed-small.png"
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
