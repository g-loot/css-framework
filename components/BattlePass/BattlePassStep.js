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
import Avatar from "../Avatar/Avatar";


export default function BattlePassStep(props) {
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const isPremium = prototype.isPremium;

  return (
    <li className={`battlepass-step ${
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
  );
}
