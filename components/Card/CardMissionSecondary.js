import React, { useState, useContext, useEffect } from "react";
import Lottie from "lottie-react";
import LottieExplosion from "../../assets/animations/explosion_stryda_1.json";
import Tooltip from "../Tooltip/Tooltip";
import { usePrototypeData } from "../../contexts/prototype";
import { useRouter } from "next/router";
import { VariablesContext } from "../../contexts/variables";
import Countdown from "../Countdown/Countdown";
import ModalClaimMission from "../../pages/prototype/home/modal-claim-mission";
import ModalReshuffleMission from "../../pages/prototype/home/modal-reshuffle-mission";
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

  function handleReshuffle() {
    uiContext.openModal(
      <ModalReshuffleMission mission={mission}></ModalReshuffleMission>
    );
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
                    <>
                      <button
                        className="button button-secondary mx-auto"
                        onClick={handleGetMission.bind(this)}
                      >
                        <span>Get new mission</span>
                      </button>
                      <div className="text-sm mt-2">
                        {2 - variablesContext.availableMissions} mission
                        {variablesContext.availableMissions < 1 && <>s</>}{" "}
                        available
                      </div>
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
              mission.target === mission.current && hasClaimed
                ? "is-inactive"
                : ""
            } ${mission.category === 1 ? "rarity-category-1" : ""} ${
              mission.category === 2 ? "rarity-category-2" : ""
            } ${mission.category === 3 ? "rarity-category-3" : ""} ${
              mission.category === 4 ? "rarity-category-4" : ""
            }`}
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
              <div className="absolute z-10 top-1 right-1">
                <Tooltip
                  tooltip={
                    <span className="text-sm">Reshuffle mission</span>
                  }
                >
                  <button
                    type="button"
                    className={`button button-ghost rounded-full`}
                    onClick={handleReshuffle}
                  >
                    <span className="icon icon-refresh-02 text-ui-400" />
                  </button>
                </Tooltip>
              </div>
              <div className="card-category">
                <div
                  className={`rarity ${
                    mission.category === 1 ? "rarity-category-1" : ""
                  } ${mission.category === 2 ? "rarity-category-2" : ""} ${
                    mission.category === 3 ? "rarity-category-3" : ""
                  } ${mission.category === 4 ? "rarity-category-4" : ""}`}
                >
                  <span
                    className={`icon ${
                      mission.category === 1 ? "icon-category-1" : ""
                    } ${mission.category === 2 ? "icon-category-2" : ""} ${
                      mission.category === 3 ? "icon-category-3" : ""
                    } ${mission.category === 4 ? "icon-category-4" : ""}`}
                  />
                  <span>
                    {mission.category === 1 && <>common</>}
                    {mission.category === 2 && <>rare</>}
                    {mission.category === 3 && <>epic</>}
                    {mission.category === 4 && <>legendary</>}
                  </span>
                </div>
              </div>
              <div className="card-title">
                <span>{mission.name}</span>
              </div>
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
                  <div
                    className={`${
                      mission.target === mission.current && hasClaimed
                        ? "opacity-0"
                        : ""
                    }`}
                  >
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
              <div className="rounded bg-ui-800/90 p-0.5 absolute z-10 top-1 left-1 right-auto bottom-auto">
                <div className="ml-0 p-1 border border-ui-700 rounded-sm bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
                  <span
                    className={`icon text-xl ${
                      prototype.getGameBySlug(gameSlug).slug === "apexlegends"
                        ? "icon-game-apexlegends-symbol text-game-apexlegends"
                        : ""
                    } ${
                      prototype.getGameBySlug(gameSlug).slug === "csgo"
                        ? "icon-game-csgo-symbol text-game-csgo"
                        : ""
                    }  ${
                      prototype.getGameBySlug(gameSlug).slug === "dota2"
                        ? "icon-game-dota2-symbol text-game-dota2"
                        : ""
                    }  ${
                      prototype.getGameBySlug(gameSlug).slug ===
                      "leagueoflegends"
                        ? "icon-game-leagueoflegends-symbol text-game-leagueoflegends"
                        : ""
                    }  ${
                      prototype.getGameBySlug(gameSlug).slug === "rocketleague"
                        ? "icon-game-rocketleague-symbol text-game-rocketleague"
                        : ""
                    } ${
                      prototype.getGameBySlug(gameSlug).slug === "pubg"
                        ? "icon-game-pubg-symbol text-game-pubg"
                        : ""
                    }  ${
                      prototype.getGameBySlug(gameSlug).slug === "valorant"
                        ? "icon-game-valorant-symbol text-game-valorant"
                        : ""
                    }`}
                  />
                </div>
              </div>
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
