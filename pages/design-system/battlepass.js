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
      <h1 className="mb-2">Battle Pass</h1>

      {/* Battle Pass */}
      <div className="mb-12" id="battle-pass">
        <div className="pt-4">
          <div className="">
            <div className="flex gap-4 flex-col">
              <div className="flex-1 space-y-4">
                <div
                  className="battlepass-container scrollbar-desktop"
                  style={{ "--max": maxNum, "--step": randomNum1 }}
                >
                  <div className="battlepass-avatar">
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
                      <div className="battlepass-info">
                        <div>
                          <span>1</span>
                          <span>0/200</span>
                        </div>
                      </div>
                      <div className="battlepass-content">
                        <div className="battlepass-decoration"></div>
                        <div className="battlepass-body">
                          <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                            <span>500</span>
                            <span className="icon icon-xp-symbol-outline" />
                          </div>
                          <img
                            src="https://res.cloudinary.com/gloot/image/upload/v1672157994/Stryda/currencies/Reward-centered-coin-unique.png"
                            width="100%"
                            height="auto"
                            alt="Reward"
                          />
                          <span>1 token</span>
                        </div>
                      </div>
                    </li>
                    <li className={`${randomNum1 === 2 ? `is-active` : ""}`}>
                      <div className="battlepass-info">
                        <div>
                          <span>2</span>
                          <span>0/200</span>
                        </div>
                      </div>
                      <div className="battlepass-content">
                        <div className="battlepass-decoration"></div>
                        <div className="battlepass-body">
                          <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                            <span>500</span>
                            <span className="icon icon-xp-symbol-outline" />
                          </div>
                          <img
                            src="https://res.cloudinary.com/gloot/image/upload/v1672157994/Stryda/currencies/Reward-centered-coin-unique.png"
                            width="100%"
                            height="auto"
                            alt="Reward"
                          />
                          <span>1 token</span>
                        </div>
                      </div>
                    </li>
                    <li className={`${randomNum1 === 3 ? `is-active` : ""}`}>
                      <div className="battlepass-info">
                        <div>
                          <span>3</span>
                          <span>0/200</span>
                        </div>
                      </div>
                      <div className="battlepass-content">
                        <div className="battlepass-decoration"></div>
                        <div className="battlepass-body">
                          <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                            <span>800</span>
                            <span className="icon icon-xp-symbol-outline" />
                          </div>
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
                    <li className={`${randomNum1 === 4 ? `is-active` : ""}`}>
                      <div className="battlepass-info">
                        <div>
                          <span>4</span>
                          <span>0/200</span>
                        </div>
                      </div>
                      <div className="battlepass-content">
                        <div className="battlepass-decoration"></div>
                        <div className="battlepass-body">
                          <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                            <span>1100</span>
                            <span className="icon icon-xp-symbol-outline" />
                          </div>
                          <img
                            src="https://res.cloudinary.com/gloot/image/upload/v1672157994/Stryda/currencies/Reward-centered-coin-unique.png"
                            width="100%"
                            height="auto"
                            alt="Reward"
                          />
                          <span>1 token</span>
                        </div>
                      </div>
                    </li>
                    <li className={`${randomNum1 === 5 ? `is-active` : ""}`}>
                      <div className="battlepass-info">
                        <div>
                          <span>5</span>
                          <span>0/200</span>
                        </div>
                      </div>
                      <div className="battlepass-content">
                        <div className="battlepass-decoration"></div>
                        <div className="battlepass-body">
                          <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                            <span>1400</span>
                            <span className="icon icon-xp-symbol-outline" />
                          </div>
                          <img
                            src="https://res.cloudinary.com/gloot/image/upload/v1672157994/Stryda/currencies/Reward-centered-coin-unique.png"
                            width="100%"
                            height="auto"
                            alt="Reward"
                          />
                          <span>1 token</span>
                        </div>
                      </div>
                    </li>
                    <li className={`${randomNum1 === 6 ? `is-active` : ""}`}>
                      <div className="battlepass-info">
                        <div>
                          <span>6</span>
                          <span>0/200</span>
                        </div>
                      </div>
                      <div className="battlepass-content">
                        <div className="battlepass-decoration"></div>
                        <div className="battlepass-body">
                          <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                            <span>1700</span>
                            <span className="icon icon-xp-symbol-outline" />
                          </div>
                          <img
                            src="https://res.cloudinary.com/gloot/image/upload/v1672157994/Stryda/currencies/Reward-centered-coin-small.png"
                            width="100%"
                            height="auto"
                            alt="Reward"
                          />
                          <span>100 coins</span>
                        </div>
                      </div>
                    </li>
                    <li className={`${randomNum1 === 7 ? `is-active` : ""}`}>
                      <div className="battlepass-info">
                        <div>
                          <span>7</span>
                          <span>0/200</span>
                        </div>
                      </div>
                      <div className="battlepass-content">
                        <div className="battlepass-decoration"></div>
                        <div className="battlepass-body">
                          <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                            <span>2000</span>
                            <span className="icon icon-xp-symbol-outline" />
                          </div>
                          <img
                            src="https://res.cloudinary.com/gloot/image/upload/v1672157995/Stryda/currencies/Reward-centered-token-extrasmall.png"
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
                      <div className="battlepass-info">
                        <div>
                          <span>8</span>
                          <span>0/200</span>
                        </div>
                      </div>
                      <div className="battlepass-content">
                        <div className="battlepass-decoration"></div>
                        <div className="battlepass-body">
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
                      <div className="battlepass-info">
                        <div>
                          <span>9</span>
                          <span>0/200</span>
                        </div>
                      </div>
                      <div className="battlepass-content">
                        <div className="battlepass-decoration"></div>
                        <div className="battlepass-body">
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
                      <div className="battlepass-info">
                        <div>
                          <span>10</span>
                          <span>0/200</span>
                        </div>
                      </div>
                      <div className="battlepass-content">
                        <div className="battlepass-decoration"></div>
                        <div className="battlepass-body">
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

    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
