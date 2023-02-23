import React, { useState, useContext, useEffect } from "react";
import Lottie from "lottie-react";
import LottieExplosion from "../../assets/animations/explosion_stryda_1.json";
import Tooltip from "../Tooltip/Tooltip";
import { usePrototypeData } from "../../contexts/prototype";
import { useRouter } from "next/router";
import { VariablesContext } from "../../contexts/variables";
import Countdown from "../Countdown/Countdown";
import ModalClaimMission from "../../pages/prototype/home/modal-claim-mission";
import { UiContext } from "../../contexts/ui";
import XPBoostList from "../XPBoostList/XPBoostList";

export default function CardMissionSecondary(props) {
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);
  const mission = props.mission;
  const index = props.index;
  const { query } = useRouter();
  const isPremium = query.premium === "true" ? true : false;
  const modalClaimMission = query.modalclaimmission === "true" ? true : false;
  const gameSlug = props.gameSlug || "valorant";
  const [hasClaimed, setHasClaimed] = useState(mission.hasClaimed);

  useEffect(() => {
    if (modalClaimMission) {
      openModalClaimMission();
    }
  }, [modalClaimMission]);

  const [MissionRetrieved, setMissionRetrieved] = useState(false);

  function handleGetMission() {
    setMissionRetrieved(!MissionRetrieved);
    variablesContext.incrementAvailableMissions(1);
  }

  function openModalClaimMission() {
    setHasClaimed(true);
    uiContext.openModal(
      <ModalClaimMission mission={mission}></ModalClaimMission>
    );
  }

  function calculatePercent(current, max) {
    return (100 * max) / current;
  }

  return (
    <>
      <div
        className={`revealer ${mission.isVisible === true ? "is-active" : ""} ${
          MissionRetrieved === true ? "is-active" : ""
        }`}
        key={mission}
      >
        <div className="revealer-front">
          <div className="card-mission card-secondary">
            <div className="card-overlay">
              {variablesContext.availableMissions < 2 ? (
                <>
                  {!MissionRetrieved && (
                    <><button
                      className="button button-secondary mx-auto"
                      onClick={handleGetMission.bind(this)}
                    >
                      <span>Get new mission</span>
                    </button>
                    <div className="text-sm mt-2">{2 - variablesContext.availableMissions} mission{variablesContext.availableMissions < 1 && (<>s</>)} available</div>
                    </>
                  )}
                </>
              ) : (
                <div className="text-ui-100">
                  <div>New missions in</div>
                  <Countdown
                    hasLabels={true}
                    labelsAbbr={true}
                    hasDays={false}
                    hasHours={true}
                    hasMinutes={true}
                    hasSeconds={false}
                    labelClassName="text-base mr-2"
                    className="text-4xl"
                  />
                </div>
              )}
            </div>
            <div className="card-bg">
              <span
                style={{
                  backgroundImage:
                    "url(https://res.cloudinary.com/gloot/image/upload/v1672672455/Stryda/demo/mission-back-" +
                    gameSlug +
                    ".jpg)",
                }}
              />
            </div>
          </div>
        </div>
        <div className="revealer-back">
          <div
            className={`card-mission card-secondary ${
              mission.target === mission.current && hasClaimed ? "is-inactive" : ""
            } ${mission.category === 1 ? 'card-mission-cat-1' : ''} ${mission.category === 2 ? 'card-mission-cat-2' : ''} ${mission.category === 3 ? 'card-mission-cat-3' : ''} ${mission.category === 4 ? 'card-mission-cat-4' : ''} ${mission.category === 5 ? 'card-mission-cat-5' : ''}`}
          >
            {/*
            {!hasClaimed && mission.target === mission.current && (
              <div className="card-overlay">
                <div>
                  <button
                    type="button"
                    className="button button-claim is-shining"
                    onClick={openModalClaimMission}
                  >
                    <span className="icon icon-present animate-bounce" />
                    <span>Claim reward</span>
                  </button>
                </div>
              </div>
            )}
            */}
            <div className="card-decoration"></div>
            <div className="card-body">
              <div className="card-category">
                {mission.category === 1 && (
                  
                  
                  <div className="rarity">
                    <span className="icon icon-category-1" />
                    <span>common</span>
                  </div>
                )}
                {mission.category === 2 && (
                  <div className="flex items-center text-sm text-gold-500 gap-1">
                    <img
                      className="animate-rotate"
                      src="https://res.cloudinary.com/gloot/image/upload/v1672650689/Stryda/logos/mission-category-2.svg"
                      width="20"
                      height="20"
                      alt=""
                    />
                    <span>rare</span>
                  </div>
                )}
                {mission.category === 3 && (
                  <div className="flex items-center text-sm text-purple-500 gap-1">
                    <img
                      className="animate-rotate"
                      src="https://res.cloudinary.com/gloot/image/upload/v1672650689/Stryda/logos/mission-category-3.svg"
                      width="20"
                      height="20"
                      alt=""
                    />
                    <span>epic</span>
                  </div>
                )}
                {mission.category === 4 && (
                  <div className="flex items-center text-sm text-teal-500 gap-1">
                    <img
                      className="animate-rotate"
                      src="https://res.cloudinary.com/gloot/image/upload/v1672650689/Stryda/logos/mission-category-4.svg"
                      width="20"
                      height="20"
                      alt=""
                    />
                    <span>legendary</span>
                  </div>
                )}
              </div>
              <div className="card-title"><span>{mission.name}</span></div>
              <div className="card-meta">
                {!hasClaimed && mission.target === mission.current ? (
                  <div>
                    <button
                      type="button"
                      className="button button-claim is-shining mt-2 mb-3"
                      onClick={openModalClaimMission}
                    >
                      <span className="icon icon-present animate-bounce" />
                      <span>Claim reward</span>
                    </button>
                  </div>
                ) : (
                  <>
                    {isPremium ? (
                      <Tooltip
                        placement="top"
                        tooltip={
                          <XPBoostList
                            isCompleted={
                              mission.target === mission.current ? true : false
                            }
                            size="sm"
                            xp={mission.xp}
                          />
                        }
                      >
                        <button
                          type="button"
                          className={`chip chip-sm ${
                            mission.target === mission.current
                              ? "chip-xp chip-inverted"
                              : "chip-secondary"
                          }`}
                        >
                          <span>{Math.round(mission.xp * 1.65)}</span>
                          <span className="icon icon-xp-symbol" />
                        </button>
                      </Tooltip>
                    ) : (
                      <div className="flex gap-1 items-center">
                        {mission.target === mission.current ? (
                          <Tooltip
                            placement="top"
                            tooltip={
                              <XPBoostList
                                isCompleted={
                                  mission.target === mission.current
                                    ? true
                                    : false
                                }
                                size="sm"
                                xp={mission.xp}
                              />
                            }
                          >
                            <button
                              type="button"
                              className={`chip chip-sm chip-xp`}
                            >
                              <span>{mission.xp}</span>
                              <span className="icon icon-xp-symbol" />
                            </button>
                          </Tooltip>
                        ) : (
                          <div className="chip chip-ghost chip-sm">
                            <span>{mission.xp}</span>
                            <span className="icon icon-xp-symbol" />
                          </div>
                        )}
                        <Tooltip
                          placement="top"
                          tooltip={
                            <div className="w-56 flex gap-4 text-sm">
                              <div className="relative -mt-3">
                                <span className="icon icon-crown text-6xl text-premium-500" />
                                <div className="lottie-premium absolute -inset-1">
                                  <Lottie
                                    animationData={LottieExplosion}
                                    loop={false}
                                    autoplay={true}
                                  />
                                </div>
                              </div>
                              <div className="flex-1">
                                Subscribe to Premium to earn an additional{" "}
                                <span className="text-premium-500">50% XP</span>{" "}
                                on each completed mission.
                              </div>
                            </div>
                          }
                        >
                          <button
                            type="button"
                            className="chip chip-premium chip-sm"
                          >
                            <span>+{mission.xp / 2}</span>
                            <span className="icon icon-crown text-sm" />
                          </button>
                        </Tooltip>
                      </div>
                    )}
                  </>
                )}
              </div>
              {!hasClaimed && mission.target === mission.current ? (
                <></>
              ) : (
                <div className="card-progress">
                  <div className={`${mission.target === mission.current && hasClaimed ? 'opacity-0' : ''}`}>
                    <div className="text-sm text-ui-300">
                      {mission.current}/{mission.target}
                    </div>
                    <div
                      className="progressbar progressbar-sm"
                      style={{
                        "--percent": calculatePercent(
                          mission.target,
                          mission.current
                        ),
                      }}
                    >
                      <div />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="card-bg">
              <span
                style={{
                  backgroundImage: "url(" + mission.image + ")",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
