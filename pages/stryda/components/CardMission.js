import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Lottie from "lottie-react";
import LottieExplosion from "@/assets/animations/explosion-1.json";
import LottieExplosionLvl from "@/assets/animations/Mission_Reveal_Lvl_1_1100ms.json";
import LottieExplosionLvl1 from "@/assets/animations/Mission_Reveal_Lvl_1_1100ms.json";
import LottieExplosionLvl2 from "@/assets/animations/Mission_Reveal_Lvl_2_1600ms.json";
import LottieExplosionLvl3 from "@/assets/animations/Mission_Reveal_Lvl_3_1900ms.json";
import LottieExplosionLvl4 from "@/assets/animations/Mission_Reveal_Lvl_4_2900ms.json";
import Tooltip from "@/components/Tooltip/Tooltip";
import { usePrototypeData } from "@/contexts/prototype";
import { VariablesContext } from "@/contexts/variables";
import Countdown from "@/components/Countdown/Countdown";
import ModalClaimMission from "../home/modal-claim-mission";
import ModalDiscardMission from "../home/modal-discard-mission";
import { UiContext } from "@/contexts/ui";
import XPBoostList from "@/components/XPBoostList/XPBoostList";

export default function CardMission(props) {
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);
  const mission = props.mission;
  const size = props.size || "";
  const { query } = useRouter();
  const isPremium = prototype.isPremium;
  const modalClaimMission = query.modalclaimmission === "true" ? true : false;
  const modalDiscardMission =
    query.modaldiscardmission === "true" ? true : false;
  const gameSlug = props.gameSlug || "valorant";
  const [isLoading, setIsLoading] = useState(false);
  const [isCapped, setIsCapped] = useState(false);

  useEffect(() => {
    if (modalClaimMission) {
      openModalClaimMission();
    }
  }, [modalClaimMission]);

  useEffect(() => {
    if (mission.isVisible) {
      setMissionRetrieved(true);
    }
  }, [mission]);

  const [MissionRetrieved, setMissionRetrieved] = useState(false);

  function handleGetMission() {
    if (variablesContext.availableMissions > 0 && !MissionRetrieved) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setMissionRetrieved(!MissionRetrieved);
        variablesContext.incrementAvailableMissions(1);
      }, 500);
    }
  }

  function openModalClaimMission() {
    uiContext.openModal(
      <ModalClaimMission mission={mission}></ModalClaimMission>
    );
  }

  function calculatePercent(current, max) {
    return (100 * max) / current;
  }

  function handleReset() {
    variablesContext.incrementAvailableMissions(5);
  }

  useEffect(() => {
    if (modalDiscardMission) {
      openModalDiscardMission();
    }
  }, [modalDiscardMission]);

  function openModalDiscardMission() {
    setMissionRetrieved(!MissionRetrieved);
    variablesContext.incrementAvailableMissions(-1);
    uiContext.openModal(
      <ModalDiscardMission mission={mission} />
    );
  }

  return (
    <>
      {mission && (
        <div
          className={`revealer ${MissionRetrieved === true ? "is-active" : ""}`}
          onClick={handleGetMission.bind(this)}
          key={mission}
        >
          <div className="revealer-front">
            <div
              className={`card-mission card-secondary ${size} ${
                variablesContext.availableMissions > 0 && !MissionRetrieved
                  ? "is-highlighted"
                  : ""
              }  ${isLoading ? "is-loading" : ""}`}
            >
              <div className="card-overlay">
                {variablesContext.availableMissions > 0 ? (
                  <>
                    {!MissionRetrieved && (
                      <>
                        <span
                          className={`icon text-4xl mb-2 ${
                            prototype.getGameBySlug(gameSlug).slug ===
                            "apexlegends"
                              ? "icon-game-apexlegends-symbol"
                              : ""
                          } ${
                            prototype.getGameBySlug(gameSlug).slug === "csgo"
                              ? "icon-game-csgo-symbol"
                              : ""
                          }  ${
                            prototype.getGameBySlug(gameSlug).slug === "dota2"
                              ? "icon-game-dota2-symbol"
                              : ""
                          }  ${
                            prototype.getGameBySlug(gameSlug).slug ===
                            "leagueoflegends"
                              ? "icon-game-leagueoflegends-symbol"
                              : ""
                          }  ${
                            prototype.getGameBySlug(gameSlug).slug ===
                            "rocketleague"
                              ? "icon-game-rocketleague-symbol"
                              : ""
                          } ${
                            prototype.getGameBySlug(gameSlug).slug === "pubg"
                              ? "icon-game-pubg-symbol"
                              : ""
                          }  ${
                            prototype.getGameBySlug(gameSlug).slug ===
                            "valorant"
                              ? "icon-game-valorant-symbol"
                              : ""
                          }`}
                        />
                        <h4>Reveal mission</h4>
                        <div className="text-sm mt-1">
                          {variablesContext.availableMissions} new available
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {isCapped ? (
                      <>
                        <div className="text-ui-100" onClick={handleReset}>
                          <div className="text-xl">
                            Maximum missions revealed
                          </div>
                          <div className="text-sm">
                            Complete or discard missions to unlock new ones
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          className="text-ui-100"
                          onClick={() => setIsCapped(!isCapped)}
                        >
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
                      </>
                    )}
                  </>
                )}
              </div>
              <div className="card-bg">
                <span
                  style={{
                    backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1677499396/Stryda/demo/mission-back-${gameSlug}.jpg)`,
                  }}
                />
              </div>
            </div>
          </div>

          {MissionRetrieved && !mission.isVisible && mission.category && (
            <div
              className={`revealer-transition lottie-blur ${
                mission.category === 1 ? "rarity-category-1" : ""
              } ${mission.category === 2 ? "rarity-category-2" : ""} ${
                mission.category === 3 ? "rarity-category-3" : ""
              } ${mission.category === 4 ? "rarity-category-4" : ""}`}
            >
              {mission.category === 1 && (
                <Lottie
                  animationData={LottieExplosionLvl1}
                  loop={false}
                  autoplay={true}
                />
              )}
              {mission.category === 2 && (
                <Lottie
                  animationData={LottieExplosionLvl2}
                  loop={false}
                  autoplay={true}
                />
              )}
              {mission.category === 3 && (
                <Lottie
                  animationData={LottieExplosionLvl3}
                  loop={false}
                  autoplay={true}
                />
              )}
              {mission.category === 4 && (
                <Lottie
                  animationData={LottieExplosionLvl4}
                  loop={false}
                  autoplay={true}
                />
              )}
            </div>
          )}

          <div className="revealer-back">
            <div
              className={`card-mission card-secondary ${size} ${
                mission.target === mission.current && mission.hasClaimed
                  ? "is-inactive"
                  : ""
              } ${mission.category === 1 ? "rarity-category-1" : ""} ${
                mission.category === 2 ? "rarity-category-2" : ""
              } ${mission.category === 3 ? "rarity-category-3" : ""} ${
                mission.category === 4 ? "rarity-category-4" : ""
              }`}
            >
              <div className="card-decoration"></div>
              <div className="card-body">
                {!mission.hasClaimed && mission.target !== mission.current && (
                  <div className="absolute z-10 top-2 right-2 m-0">
                    <Tooltip
                      tooltip={<span className="text-sm">Discard mission</span>}
                    >
                      <button
                        type="button"
                        className={`button button-ghost rounded-full`}
                        onClick={openModalDiscardMission}
                      >
                        <span className="icon icon-trash-can text-ui-400" />
                      </button>
                    </Tooltip>
                  </div>
                )}
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
                  {!mission.hasClaimed && mission.target === mission.current ? (
                    <div>
                      <button
                        type="button"
                        className="button button-claim mt-1"
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
                            className={`chip chip-sm ${
                              mission.target === mission.current
                                ? "chip-xp chip-inverted"
                                : "chip-premium"
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
                                  <span className="text-premium-500">
                                    50% XP
                                  </span>{" "}
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
                {!mission.hasClaimed && mission.target === mission.current ? (
                  <></>
                ) : (
                  <div className="card-progress">
                    <div
                      className={`${
                        mission.target === mission.current && mission.hasClaimed
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
                        prototype.getGameBySlug(gameSlug).slug ===
                        "rocketleague"
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
      )}
    </>
  );
}
