import React, { useContext, useState } from "react";

import ModalClaimLadderRewards from "../prototype/home/modal-claim-dailyrewards";
import ModalContainer from "../../components/Modal/ModalContainer";
import { UiContext } from "../../contexts/ui";
import { VariablesContext } from "../../contexts/variables";
import { getLayout } from "../../components/DesignSystem/DSLayout";

const DSpage = () => {
  const [randomNum1, setRandomNum1] = useState(1);
  const [randomNum2, setRandomNum2] = useState(3);
  const maxNum = 10;
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);

  function clickHandlerNum1(varTarget, max) {
    if (varTarget === max) {
      setRandomNum1((varTarget = 1));
    } else {
      setRandomNum1(varTarget + 1);
    }
  }
  function clickHandlerNum2(varTarget, max) {
    if (varTarget === max) {
      setRandomNum2((varTarget = 1));
    } else {
      setRandomNum2(varTarget + 1);
    }
  }
  function openModalClaimLadderRewards() {
    uiContext.openModal(<ModalClaimLadderRewards></ModalClaimLadderRewards>);
  }

  return (
    <>
      <h1 className="mb-2">Reward ladder</h1>

      {/* Reward ladder */}
      <div className="mb-12" id="reward-ladder">
        <div className="pt-4">
          <div className="">
            <div className="flex gap-4 flex-col">
              <div className="flex-1 space-y-4">
                <div
                  className="ladder-container scrollbar-desktop"
                  style={{ "--max": maxNum, "--step": randomNum1 }}
                >
                  <div className="ladder-avatar">
                    <div>
                      <div>
                        <div className="avatar avatar-circle avatar-sm">
                          <div>
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png"
                              alt=""
                            />
                          </div>
                          <i className="radar" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="ladder">
                    <li className={`${randomNum1 === 1 ? `is-active` : ""}`}>
                      <div className="ladder-info">
                        <div>
                          <span>1</span>
                          <span>0/200</span>
                        </div>
                      </div>
                      <div className="ladder-content">
                        <div className="ladder-decoration"></div>
                        <div className="ladder-body">
                          <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                            <span>500</span>
                            <span className="icon icon-xp-symbol-outline" />
                          </div>
                          <img
                            src="https://res.cloudinary.com/gloot/image/upload/v1671720890/Stryda/currencies/currency-3D-coin-face.png"
                            width="100%"
                            height="auto"
                            alt="Reward"
                          />
                          <span>1 token</span>
                        </div>
                      </div>
                    </li>
                    <li className={`${randomNum1 === 2 ? `is-active` : ""}`}>
                      <div className="ladder-info">
                        <div>
                          <span>2</span>
                          <span>0/200</span>
                        </div>
                      </div>
                      <div className="ladder-content">
                        <div className="ladder-decoration"></div>
                        <div className="ladder-body">
                          <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                            <span>500</span>
                            <span className="icon icon-xp-symbol-outline" />
                          </div>
                          <img
                            src="https://res.cloudinary.com/gloot/image/upload/v1671720890/Stryda/currencies/currency-3D-coin-face.png"
                            width="100%"
                            height="auto"
                            alt="Reward"
                          />
                          <span>1 token</span>
                        </div>
                      </div>
                    </li>
                    <li className={`${randomNum1 === 3 ? `is-active` : ""}`}>
                      <div className="ladder-info">
                        <div>
                          <span>3</span>
                          <span>0/200</span>
                        </div>
                      </div>
                      <div className="ladder-content">
                        <div className="ladder-decoration"></div>
                        <div className="ladder-body">
                          <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                            <span>800</span>
                            <span className="icon icon-xp-symbol-outline" />
                          </div>
                          <img
                            src="https://res.cloudinary.com/gloot/image/upload/v1671799703/Stryda/currencies/Reward-centered-coin-small.png"
                            width="100%"
                            height="auto"
                            alt="Reward"
                          />
                          <span>50 coins</span>
                        </div>
                      </div>
                    </li>
                    <li className={`${randomNum1 === 4 ? `is-active` : ""}`}>
                      <div className="ladder-info">
                        <div>
                          <span>4</span>
                          <span>0/200</span>
                        </div>
                      </div>
                      <div className="ladder-content">
                        <div className="ladder-decoration"></div>
                        <div className="ladder-body">
                          <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                            <span>1100</span>
                            <span className="icon icon-xp-symbol-outline" />
                          </div>
                          <img
                            src="https://res.cloudinary.com/gloot/image/upload/v1671720890/Stryda/currencies/currency-3D-coin-face.png"
                            width="100%"
                            height="auto"
                            alt="Reward"
                          />
                          <span>1 token</span>
                        </div>
                      </div>
                    </li>
                    <li className={`${randomNum1 === 5 ? `is-active` : ""}`}>
                      <div className="ladder-info">
                        <div>
                          <span>5</span>
                          <span>0/200</span>
                        </div>
                      </div>
                      <div className="ladder-content">
                        <div className="ladder-decoration"></div>
                        <div className="ladder-body">
                          <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                            <span>1400</span>
                            <span className="icon icon-xp-symbol-outline" />
                          </div>
                          <img
                            src="https://res.cloudinary.com/gloot/image/upload/v1671720890/Stryda/currencies/currency-3D-coin-face.png"
                            width="100%"
                            height="auto"
                            alt="Reward"
                          />
                          <span>1 token</span>
                        </div>
                      </div>
                    </li>
                    <li className={`${randomNum1 === 6 ? `is-active` : ""}`}>
                      <div className="ladder-info">
                        <div>
                          <span>6</span>
                          <span>0/200</span>
                        </div>
                      </div>
                      <div className="ladder-content">
                        <div className="ladder-decoration"></div>
                        <div className="ladder-body">
                          <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                            <span>1700</span>
                            <span className="icon icon-xp-symbol-outline" />
                          </div>
                          <img
                            src="https://res.cloudinary.com/gloot/image/upload/v1671799703/Stryda/currencies/Reward-centered-coin-small.png"
                            width="100%"
                            height="auto"
                            alt="Reward"
                          />
                          <span>100 coins</span>
                        </div>
                      </div>
                    </li>
                    <li className={`${randomNum1 === 7 ? `is-active` : ""}`}>
                      <div className="ladder-info">
                        <div>
                          <span>7</span>
                          <span>0/200</span>
                        </div>
                      </div>
                      <div className="ladder-content">
                        <div className="ladder-decoration"></div>
                        <div className="ladder-body">
                          <div className="chip chip-reward chip-xp chip-inverted chip-sm">
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
                    <li
                      className={`is-locked ${
                        randomNum1 === 8 ? `is-active` : ""
                      }`}
                    >
                      <div className="ladder-info">
                        <div>
                          <span>8</span>
                          <span>0/200</span>
                        </div>
                      </div>
                      <div className="ladder-content">
                        <div className="ladder-decoration"></div>
                        <div className="ladder-body">
                          <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                            <span>2000</span>
                            <span className="icon icon-xp-symbol-outline" />
                          </div>
                          <img
                            src="https://res.cloudinary.com/gloot/image/upload/v1671800047/Stryda/currencies/Reward-centered-mixed-small.png"
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
                    <li
                      className={`is-locked ${
                        randomNum1 === 9 ? `is-active` : ""
                      }`}
                    >
                      <div className="ladder-info">
                        <div>
                          <span>9</span>
                          <span>0/200</span>
                        </div>
                      </div>
                      <div className="ladder-content">
                        <div className="ladder-decoration"></div>
                        <div className="ladder-body">
                          <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                            <span>2000</span>
                            <span className="icon icon-xp-symbol-outline" />
                          </div>
                          <img
                            src="https://res.cloudinary.com/gloot/image/upload/v1671800047/Stryda/currencies/Reward-centered-mixed-small.png"
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
                    <li
                      className={`is-locked ${
                        randomNum1 === 10 ? `is-active` : ""
                      }`}
                    >
                      <div className="ladder-info">
                        <div>
                          <span>10</span>
                          <span>0/200</span>
                        </div>
                      </div>
                      <div className="ladder-content">
                        <div className="ladder-decoration"></div>
                        <div className="ladder-body">
                          <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                            <span>2000</span>
                            <span className="icon icon-xp-symbol-outline" />
                          </div>
                          <img
                            src="https://res.cloudinary.com/gloot/image/upload/v1671800047/Stryda/currencies/Reward-centered-mixed-medium.png"
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

                <div className="text-center">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={clickHandlerNum1.bind(this, randomNum1, maxNum)}
                  >
                    <span>Next step</span>
                  </button>
                </div>
              </div>
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

      {/* With overlay - claim */}
      <div className="mb-12" id="with-overlay-claim">
        <div className="pt-4">
          <div className="">
            <div className="flex gap-4 flex-col">
              <div className="flex-1 space-y-4">
                <div className="relative">
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
                            onClick={openModalClaimLadderRewards}
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
                          <h2>Well done!</h2>
                          <p className="text-ui-200">
                            You have claimed all rewards available for this
                            week.
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
                    className="ladder-container scrollbar-desktop"
                    style={{ "--max": maxNum, "--step": randomNum2 }}
                  >
                    <div className="ladder-avatar">
                      <div>
                        <div>
                          <div className="avatar avatar-circle avatar-sm">
                            <div>
                              <img
                                src="https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png"
                                alt=""
                              />
                            </div>
                            <i className="radar" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="ladder">
                      <li className={`${randomNum2 === 1 ? `is-active` : ""}`}>
                        <div className="ladder-info">
                          <div>
                            <span>1</span>
                            <span>0/200</span>
                          </div>
                        </div>
                        <div className="ladder-content">
                          <div className="ladder-decoration"></div>
                          <div className="ladder-body">
                            <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                              <span>500</span>
                              <span className="icon icon-xp-symbol-outline" />
                            </div>
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1671720890/Stryda/currencies/currency-3D-coin-face.png"
                              width="100%"
                              height="auto"
                              alt="Reward"
                            />
                            <span>1 token</span>
                          </div>
                        </div>
                      </li>
                      <li className={`${randomNum2 === 2 ? `is-active` : ""}`}>
                        <div className="ladder-info">
                          <div>
                            <span>2</span>
                            <span>0/200</span>
                          </div>
                        </div>
                        <div className="ladder-content">
                          <div className="ladder-decoration"></div>
                          <div className="ladder-body">
                            <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                              <span>500</span>
                              <span className="icon icon-xp-symbol-outline" />
                            </div>
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1671720890/Stryda/currencies/currency-3D-coin-face.png"
                              width="100%"
                              height="auto"
                              alt="Reward"
                            />
                            <span>1 token</span>
                          </div>
                        </div>
                      </li>
                      <li className={`${randomNum2 === 3 ? `is-active` : ""}`}>
                        <div className="ladder-info">
                          <div>
                            <span>3</span>
                            <span>0/200</span>
                          </div>
                        </div>
                        <div className="ladder-content">
                          <div className="ladder-decoration"></div>
                          <div className="ladder-body">
                            <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                              <span>800</span>
                              <span className="icon icon-xp-symbol-outline" />
                            </div>
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1671799703/Stryda/currencies/Reward-centered-coin-small.png"
                              width="100%"
                              height="auto"
                              alt="Reward"
                            />
                            <span>50 coins</span>
                          </div>
                        </div>
                      </li>
                      <li className={`${randomNum2 === 4 ? `is-active` : ""}`}>
                        <div className="ladder-info">
                          <div>
                            <span>4</span>
                            <span>0/200</span>
                          </div>
                        </div>
                        <div className="ladder-content">
                          <div className="ladder-decoration"></div>
                          <div className="ladder-body">
                            <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                              <span>1100</span>
                              <span className="icon icon-xp-symbol-outline" />
                            </div>
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1671720890/Stryda/currencies/currency-3D-coin-face.png"
                              width="100%"
                              height="auto"
                              alt="Reward"
                            />
                            <span>1 token</span>
                          </div>
                        </div>
                      </li>
                      <li className={`${randomNum2 === 5 ? `is-active` : ""}`}>
                        <div className="ladder-info">
                          <div>
                            <span>5</span>
                            <span>0/200</span>
                          </div>
                        </div>
                        <div className="ladder-content">
                          <div className="ladder-decoration"></div>
                          <div className="ladder-body">
                            <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                              <span>1400</span>
                              <span className="icon icon-xp-symbol-outline" />
                            </div>
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1671720890/Stryda/currencies/currency-3D-coin-face.png"
                              width="100%"
                              height="auto"
                              alt="Reward"
                            />
                            <span>1 token</span>
                          </div>
                        </div>
                      </li>
                      <li className={`${randomNum2 === 6 ? `is-active` : ""}`}>
                        <div className="ladder-info">
                          <div>
                            <span>6</span>
                            <span>0/200</span>
                          </div>
                        </div>
                        <div className="ladder-content">
                          <div className="ladder-decoration"></div>
                          <div className="ladder-body">
                            <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                              <span>1700</span>
                              <span className="icon icon-xp-symbol-outline" />
                            </div>
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1671799703/Stryda/currencies/Reward-centered-coin-small.png"
                              width="100%"
                              height="auto"
                              alt="Reward"
                            />
                            <span>100 coins</span>
                          </div>
                        </div>
                      </li>
                      <li className={`${randomNum2 === 7 ? `is-active` : ""}`}>
                        <div className="ladder-info">
                          <div>
                            <span>7</span>
                            <span>0/200</span>
                          </div>
                        </div>
                        <div className="ladder-content">
                          <div className="ladder-decoration"></div>
                          <div className="ladder-body">
                            <div className="chip chip-reward chip-xp chip-inverted chip-sm">
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
                      <li
                        className={`is-locked ${
                          randomNum2 === 8 ? `is-active` : ""
                        }`}
                      >
                        <div className="ladder-info">
                          <div>
                            <span>8</span>
                            <span>0/200</span>
                          </div>
                        </div>
                        <div className="ladder-content">
                          <div className="ladder-decoration"></div>
                          <div className="ladder-body">
                            <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                              <span>2000</span>
                              <span className="icon icon-xp-symbol-outline" />
                            </div>
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1671800047/Stryda/currencies/Reward-centered-mixed-small.png"
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
                      <li
                        className={`is-locked ${
                          randomNum2 === 9 ? `is-active` : ""
                        }`}
                      >
                        <div className="ladder-info">
                          <div>
                            <span>9</span>
                            <span>0/200</span>
                          </div>
                        </div>
                        <div className="ladder-content">
                          <div className="ladder-decoration"></div>
                          <div className="ladder-body">
                            <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                              <span>2000</span>
                              <span className="icon icon-xp-symbol-outline" />
                            </div>
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1671800047/Stryda/currencies/Reward-centered-mixed-small.png"
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
                      <li
                        className={`is-locked ${
                          randomNum2 === 10 ? `is-active` : ""
                        }`}
                      >
                        <div className="ladder-info">
                          <div>
                            <span>10</span>
                            <span>0/200</span>
                          </div>
                        </div>
                        <div className="ladder-content">
                          <div className="ladder-decoration"></div>
                          <div className="ladder-body">
                            <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                              <span>2000</span>
                              <span className="icon icon-xp-symbol-outline" />
                            </div>
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1671800047/Stryda/currencies/Reward-centered-mixed-medium.png"
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
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/d869h7g1/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With overlay - claimed */}
      <div className="mb-12" id="with-overlay-claimed">
        <div className="pt-4">
          <div className="">
            <div className="flex gap-4 flex-col">
              <div className="flex-1 space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 z-50 backdrop-blur-sm bg-gradient-radial from-ui-900/90 via-ui-900/90 to-ui-900/60 gap-2 flex items-center justify-center overflow-hidden">
                    <div
                      className="flex flex-col items-center justify-center gap-3 animate-slide-in-bottom animate-delay"
                      style={{ "--delay": "calc(1 * 0.05s)" }}
                    >
                      <div
                        className="relative z-10 flex flex-col items-center justify-center gap-3 animate-slide-in-bottom animate-delay"
                        style={{ "--delay": "calc(1 * 0.05s)" }}
                      >
                        <h2>Well done!</h2>
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
                  </div>
                  <div
                    className="ladder-container scrollbar-desktop"
                    style={{ "--max": maxNum, "--step": randomNum2 }}
                  >
                    <div className="ladder-avatar">
                      <div>
                        <div>
                          <div className="avatar avatar-circle avatar-sm">
                            <div>
                              <img
                                src="https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png"
                                alt=""
                              />
                            </div>
                            <i className="radar" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="ladder">
                      <li className={`${randomNum2 === 1 ? `is-active` : ""}`}>
                        <div className="ladder-info">
                          <div>
                            <span>1</span>
                            <span>0/200</span>
                          </div>
                        </div>
                        <div className="ladder-content">
                          <div className="ladder-decoration"></div>
                          <div className="ladder-body">
                            <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                              <span>500</span>
                              <span className="icon icon-xp-symbol-outline" />
                            </div>
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1671720890/Stryda/currencies/currency-3D-coin-face.png"
                              width="100%"
                              height="auto"
                              alt="Reward"
                            />
                            <span>1 token</span>
                          </div>
                        </div>
                      </li>
                      <li className={`${randomNum2 === 2 ? `is-active` : ""}`}>
                        <div className="ladder-info">
                          <div>
                            <span>2</span>
                            <span>0/200</span>
                          </div>
                        </div>
                        <div className="ladder-content">
                          <div className="ladder-decoration"></div>
                          <div className="ladder-body">
                            <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                              <span>500</span>
                              <span className="icon icon-xp-symbol-outline" />
                            </div>
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1671720890/Stryda/currencies/currency-3D-coin-face.png"
                              width="100%"
                              height="auto"
                              alt="Reward"
                            />
                            <span>1 token</span>
                          </div>
                        </div>
                      </li>
                      <li className={`${randomNum2 === 3 ? `is-active` : ""}`}>
                        <div className="ladder-info">
                          <div>
                            <span>3</span>
                            <span>0/200</span>
                          </div>
                        </div>
                        <div className="ladder-content">
                          <div className="ladder-decoration"></div>
                          <div className="ladder-body">
                            <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                              <span>800</span>
                              <span className="icon icon-xp-symbol-outline" />
                            </div>
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1671799703/Stryda/currencies/Reward-centered-coin-small.png"
                              width="100%"
                              height="auto"
                              alt="Reward"
                            />
                            <span>50 coins</span>
                          </div>
                        </div>
                      </li>
                      <li className={`${randomNum2 === 4 ? `is-active` : ""}`}>
                        <div className="ladder-info">
                          <div>
                            <span>4</span>
                            <span>0/200</span>
                          </div>
                        </div>
                        <div className="ladder-content">
                          <div className="ladder-decoration"></div>
                          <div className="ladder-body">
                            <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                              <span>1100</span>
                              <span className="icon icon-xp-symbol-outline" />
                            </div>
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1671720890/Stryda/currencies/currency-3D-coin-face.png"
                              width="100%"
                              height="auto"
                              alt="Reward"
                            />
                            <span>1 token</span>
                          </div>
                        </div>
                      </li>
                      <li className={`${randomNum2 === 5 ? `is-active` : ""}`}>
                        <div className="ladder-info">
                          <div>
                            <span>5</span>
                            <span>0/200</span>
                          </div>
                        </div>
                        <div className="ladder-content">
                          <div className="ladder-decoration"></div>
                          <div className="ladder-body">
                            <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                              <span>1400</span>
                              <span className="icon icon-xp-symbol-outline" />
                            </div>
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1671720890/Stryda/currencies/currency-3D-coin-face.png"
                              width="100%"
                              height="auto"
                              alt="Reward"
                            />
                            <span>1 token</span>
                          </div>
                        </div>
                      </li>
                      <li className={`${randomNum2 === 6 ? `is-active` : ""}`}>
                        <div className="ladder-info">
                          <div>
                            <span>6</span>
                            <span>0/200</span>
                          </div>
                        </div>
                        <div className="ladder-content">
                          <div className="ladder-decoration"></div>
                          <div className="ladder-body">
                            <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                              <span>1700</span>
                              <span className="icon icon-xp-symbol-outline" />
                            </div>
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1671799703/Stryda/currencies/Reward-centered-coin-small.png"
                              width="100%"
                              height="auto"
                              alt="Reward"
                            />
                            <span>100 coins</span>
                          </div>
                        </div>
                      </li>
                      <li className={`${randomNum2 === 7 ? `is-active` : ""}`}>
                        <div className="ladder-info">
                          <div>
                            <span>7</span>
                            <span>0/200</span>
                          </div>
                        </div>
                        <div className="ladder-content">
                          <div className="ladder-decoration"></div>
                          <div className="ladder-body">
                            <div className="chip chip-reward chip-xp chip-inverted chip-sm">
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
                      <li
                        className={`is-locked ${
                          randomNum2 === 8 ? `is-active` : ""
                        }`}
                      >
                        <div className="ladder-info">
                          <div>
                            <span>8</span>
                            <span>0/200</span>
                          </div>
                        </div>
                        <div className="ladder-content">
                          <div className="ladder-decoration"></div>
                          <div className="ladder-body">
                            <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                              <span>2000</span>
                              <span className="icon icon-xp-symbol-outline" />
                            </div>
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1671800047/Stryda/currencies/Reward-centered-mixed-small.png"
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
                      <li
                        className={`is-locked ${
                          randomNum2 === 9 ? `is-active` : ""
                        }`}
                      >
                        <div className="ladder-info">
                          <div>
                            <span>9</span>
                            <span>0/200</span>
                          </div>
                        </div>
                        <div className="ladder-content">
                          <div className="ladder-decoration"></div>
                          <div className="ladder-body">
                            <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                              <span>2000</span>
                              <span className="icon icon-xp-symbol-outline" />
                            </div>
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1671800047/Stryda/currencies/Reward-centered-mixed-small.png"
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
                      <li
                        className={`is-locked ${
                          randomNum2 === 10 ? `is-active` : ""
                        }`}
                      >
                        <div className="ladder-info">
                          <div>
                            <span>10</span>
                            <span>0/200</span>
                          </div>
                        </div>
                        <div className="ladder-content">
                          <div className="ladder-decoration"></div>
                          <div className="ladder-body">
                            <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                              <span>2000</span>
                              <span className="icon icon-xp-symbol-outline" />
                            </div>
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1671800047/Stryda/currencies/Reward-centered-mixed-medium.png"
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
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/gewc6vLb/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With overlay - error */}
      <div className="mb-12" id="with-overlay-error">
        <div className="pt-4">
          <div className="">
            <div className="flex gap-4 flex-col">
              <div className="flex-1 space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 z-50 backdrop-blur-sm bg-gradient-radial from-ui-900/90 via-ui-900/90 to-ui-900/60 gap-2 flex items-center justify-center overflow-hidden">
                    <div
                      className="flex flex-col items-center justify-center gap-3 animate-slide-in-bottom animate-delay"
                      style={{ "--delay": "calc(1 * 0.05s)" }}
                    >
                      <div
                        className="relative z-10 flex flex-col items-center justify-center gap-3 animate-slide-in-bottom animate-delay"
                        style={{ "--delay": "calc(1 * 0.05s)" }}
                      >
                        <h2>Oops</h2>
                        <p className="text-ui-200">
                          Something went wrong, try refreshing the page.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="ladder-container scrollbar-desktop"
                    style={{ "--max": maxNum, "--step": randomNum2 }}
                  >
                    <div className="ladder-avatar">
                      <div>
                        <div>
                          <div className="avatar avatar-circle avatar-sm">
                            <div>
                              <img
                                src="https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png"
                                alt=""
                              />
                            </div>
                            <i className="radar" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="ladder">
                      <li className={`${randomNum2 === 1 ? `is-active` : ""}`}>
                        <div className="ladder-info">
                          <div>
                            <span>1</span>
                            <span>0/200</span>
                          </div>
                        </div>
                        <div className="ladder-content">
                          <div className="ladder-decoration"></div>
                          <div className="ladder-body">
                            <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                              <span>500</span>
                              <span className="icon icon-xp-symbol-outline" />
                            </div>
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1671720890/Stryda/currencies/currency-3D-coin-face.png"
                              width="100%"
                              height="auto"
                              alt="Reward"
                            />
                            <span>1 token</span>
                          </div>
                        </div>
                      </li>
                      <li className={`${randomNum2 === 2 ? `is-active` : ""}`}>
                        <div className="ladder-info">
                          <div>
                            <span>2</span>
                            <span>0/200</span>
                          </div>
                        </div>
                        <div className="ladder-content">
                          <div className="ladder-decoration"></div>
                          <div className="ladder-body">
                            <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                              <span>500</span>
                              <span className="icon icon-xp-symbol-outline" />
                            </div>
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1671720890/Stryda/currencies/currency-3D-coin-face.png"
                              width="100%"
                              height="auto"
                              alt="Reward"
                            />
                            <span>1 token</span>
                          </div>
                        </div>
                      </li>
                      <li className={`${randomNum2 === 3 ? `is-active` : ""}`}>
                        <div className="ladder-info">
                          <div>
                            <span>3</span>
                            <span>0/200</span>
                          </div>
                        </div>
                        <div className="ladder-content">
                          <div className="ladder-decoration"></div>
                          <div className="ladder-body">
                            <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                              <span>800</span>
                              <span className="icon icon-xp-symbol-outline" />
                            </div>
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1671799703/Stryda/currencies/Reward-centered-coin-small.png"
                              width="100%"
                              height="auto"
                              alt="Reward"
                            />
                            <span>50 coins</span>
                          </div>
                        </div>
                      </li>
                      <li className={`${randomNum2 === 4 ? `is-active` : ""}`}>
                        <div className="ladder-info">
                          <div>
                            <span>4</span>
                            <span>0/200</span>
                          </div>
                        </div>
                        <div className="ladder-content">
                          <div className="ladder-decoration"></div>
                          <div className="ladder-body">
                            <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                              <span>1100</span>
                              <span className="icon icon-xp-symbol-outline" />
                            </div>
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1671720890/Stryda/currencies/currency-3D-coin-face.png"
                              width="100%"
                              height="auto"
                              alt="Reward"
                            />
                            <span>1 token</span>
                          </div>
                        </div>
                      </li>
                      <li className={`${randomNum2 === 5 ? `is-active` : ""}`}>
                        <div className="ladder-info">
                          <div>
                            <span>5</span>
                            <span>0/200</span>
                          </div>
                        </div>
                        <div className="ladder-content">
                          <div className="ladder-decoration"></div>
                          <div className="ladder-body">
                            <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                              <span>1400</span>
                              <span className="icon icon-xp-symbol-outline" />
                            </div>
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1671720890/Stryda/currencies/currency-3D-coin-face.png"
                              width="100%"
                              height="auto"
                              alt="Reward"
                            />
                            <span>1 token</span>
                          </div>
                        </div>
                      </li>
                      <li className={`${randomNum2 === 6 ? `is-active` : ""}`}>
                        <div className="ladder-info">
                          <div>
                            <span>6</span>
                            <span>0/200</span>
                          </div>
                        </div>
                        <div className="ladder-content">
                          <div className="ladder-decoration"></div>
                          <div className="ladder-body">
                            <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                              <span>1700</span>
                              <span className="icon icon-xp-symbol-outline" />
                            </div>
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1671799703/Stryda/currencies/Reward-centered-coin-small.png"
                              width="100%"
                              height="auto"
                              alt="Reward"
                            />
                            <span>100 coins</span>
                          </div>
                        </div>
                      </li>
                      <li className={`${randomNum2 === 7 ? `is-active` : ""}`}>
                        <div className="ladder-info">
                          <div>
                            <span>7</span>
                            <span>0/200</span>
                          </div>
                        </div>
                        <div className="ladder-content">
                          <div className="ladder-decoration"></div>
                          <div className="ladder-body">
                            <div className="chip chip-reward chip-xp chip-inverted chip-sm">
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
                      <li
                        className={`is-locked ${
                          randomNum2 === 8 ? `is-active` : ""
                        }`}
                      >
                        <div className="ladder-info">
                          <div>
                            <span>8</span>
                            <span>0/200</span>
                          </div>
                        </div>
                        <div className="ladder-content">
                          <div className="ladder-decoration"></div>
                          <div className="ladder-body">
                            <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                              <span>2000</span>
                              <span className="icon icon-xp-symbol-outline" />
                            </div>
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1671800047/Stryda/currencies/Reward-centered-mixed-small.png"
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
                      <li
                        className={`is-locked ${
                          randomNum2 === 9 ? `is-active` : ""
                        }`}
                      >
                        <div className="ladder-info">
                          <div>
                            <span>9</span>
                            <span>0/200</span>
                          </div>
                        </div>
                        <div className="ladder-content">
                          <div className="ladder-decoration"></div>
                          <div className="ladder-body">
                            <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                              <span>2000</span>
                              <span className="icon icon-xp-symbol-outline" />
                            </div>
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1671800047/Stryda/currencies/Reward-centered-mixed-small.png"
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
                      <li
                        className={`is-locked ${
                          randomNum2 === 10 ? `is-active` : ""
                        }`}
                      >
                        <div className="ladder-info">
                          <div>
                            <span>10</span>
                            <span>0/200</span>
                          </div>
                        </div>
                        <div className="ladder-content">
                          <div className="ladder-decoration"></div>
                          <div className="ladder-body">
                            <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                              <span>2000</span>
                              <span className="icon icon-xp-symbol-outline" />
                            </div>
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1671800047/Stryda/currencies/Reward-centered-mixed-medium.png"
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
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/q74xL29v/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
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
