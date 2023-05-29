import React from "react";
import Countdown from "../Countdown/Countdown";
import Lottie from "lottie-react";
import LottieExplosion from "../../assets/animations/explosion_stryda_1.json";
import { UiContext } from "../../contexts/ui";
import { useContext } from "react";
import { usePrototypeData } from "../../contexts/prototype";
import ModalLadderResults from "../../pages/prototype/[game]/ladders/modal-ladderresults";
import Link from "next/link";
import Tooltip from "../Tooltip/Tooltip";
import Avatar from "../Avatar/Avatar";
import ResetsIn from "../Countdown/ResetsIn";
import GameIcon from "../GameIcon/GameIcon";

const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();
const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

export default function LadderCardSecondary(props) {
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const isHorizontal = props.isHorizontal || false;
  const gameID = props.gameID || 1;
  const isEnrolled = props.ladder?.isEnrolled || false;
  const isFluid = props.isFluid || false;
  const selectedUser = props.selectedUser || prototype.getUserByID(1);
  const isClan = props.isClan || false;
  const clanID = props.clanID || 1;
  const ladder = props.ladder;
  const game_slug = props.game_slug || "valorant";
  const isGlobal = props.isGlobal || false;
  const className = props.className || "";

  function openmodalLadderResults() {
    uiContext.openModal(
      <ModalLadderResults
        ladder={prototype.getLadderByID(
          prototype.getGameBySlug(game_slug).slug,
          ladder.id
        )}
      />
    );
  }

  function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <>
    
    {ladder && prototype.getGameByID(gameID) && (
      <Link
      href={`/prototype/${prototype.getGameBySlug(game_slug).slug}/ladders/${
        ladder.id
      }${prototype.getURLparams()}`}
    >
      <div
        className={`card-ladder card-secondary interactive ${
          isHorizontal && !isFluid ? "lg:card-horizontal" : ""
        } ${isHorizontal && isFluid ? "lg:card-horizontal" : ""} ${
          isFluid ? "card-fluid" : ""
        } ${
          isEnrolled &&
          ladder.status !== "finished" &&
          !ladder.hasClaim &&
          selectedUser.isYou
            ? "is-active"
            : ""
        } ${ladder.status === "finished" ? "is-inactive" : ""} ${
          ladder.isPremium ? "card-premium" : ""
        } ${className}`}
      >
        {ladder.hasClaim && selectedUser.isYou && (
          <div className="card-overlay">
            <div>
              <button
                type="button"
                className="button button-primary"
                onClick={openmodalLadderResults}
              >
                <span>View results</span>
              </button>
            </div>
          </div>
        )}
        <div className="card-image">
          <div className="card-image-content">
            <div className="rounded bg-ui-800/90 p-0.5 pr-3 flex gap-2 items-center text-sm text-ui-200">
              <GameIcon game={gameID} />
              {/*
              <div className="ml-0 p-1 border border-ui-700 rounded-sm bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
                <span
                  className={`icon text-xl ${
                    prototype.getGameByID(gameID).slug === "apexlegends"
                      ? "icon-game-apexlegends-symbol text-game-apexlegends"
                      : ""
                  } ${
                    prototype.getGameByID(gameID).slug === "csgo"
                      ? "icon-game-csgo-symbol text-game-csgo"
                      : ""
                  }  ${
                    prototype.getGameByID(gameID).slug === "dota2"
                      ? "icon-game-dota2-symbol text-game-dota2"
                      : ""
                  }  ${
                    prototype.getGameByID(gameID).slug === "leagueoflegends"
                      ? "icon-game-leagueoflegends-symbol text-game-leagueoflegends"
                      : ""
                  }  ${
                    prototype.getGameByID(gameID).slug === "rocketleague"
                      ? "icon-game-rocketleague-symbol text-game-rocketleague"
                      : ""
                  } ${
                    prototype.getGameByID(gameID).slug === "pubg"
                      ? "icon-game-pubg-symbol text-game-pubg"
                      : ""
                  }  ${
                    prototype.getGameByID(gameID).slug === "valorant"
                      ? "icon-game-valorant-symbol text-game-valorant"
                      : ""
                  }`}
                />
              </div>
                */}
              <span>{ladder.gameMode}</span>
              {ladder.status !== "finished" && (
                <span className={`text-main card-status capitalize`}>
                  {ladder.isEnrolled && selectedUser.isYou ? (
                    <>Enrolled</>
                  ) : (
                    <>{ladder.status}</>
                  )}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="card-body">
            {ladder.isPremium && (
              <Tooltip
                placement="top"
                tooltip={
                  <div className="w-56 flex items-center gap-4 text-sm">
                    <div className="relative">
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
                      This Ladder is available for{" "}
                      <span className="text-premium-500">Premium members</span>{" "}
                      only.
                    </div>
                  </div>
                }
              >
                <Link href="/prototype/premium">
                  <button
                    type="button"
                    className="button button-ghost rounded-full absolute top-1 right-1"
                  >
                    <span className="icon icon-crown text-premium-500 text-2xl" />
                  </button>
                </Link>
              </Tooltip>
            )}
            <h2 className="h4">{ladder.name}</h2>
            <div className="flex gap-4 items-center">
              <div className="flex items-center whitespace-nowrap gap-1">
                <span className="icon icon-coin text-currency-1-500" />
                <span className="text-currency-1-500 text-sm">
                  {ladder.isPowerPlay ? (
                    <>50 000 - 5 000 000</>
                  ) : (
                    <>5 000 - 30 000</>
                  )}
                </span>
              </div>
              {ladder.status === "finished" ? (
                <div className="text-sm text-ui-300">
                  Ended on April 12
                </div>
              ) : (
                <div className="flex text-sm text-ui-300 gap-1 items-center whitespace-nowrap">
                  <ResetsIn label={ladder.status === 'upcoming' ? 'Starts' : 'Ends'} status={ladder.status === 'upcoming' ? 2 : 1} />
                </div>
              )}
            </div>
          </div>
          {ladder.status !== "upcoming" && (
            <div className="card-meta">
              {isGlobal ? (
                <div className="flex-1 flex gap-4 text-sm leading-none pr-4">
                  {ladder.isEnrolled || !selectedUser.isYou ? (
                    <div className="flex-1 flex items-center gap-2">
                      <Avatar
                        id={selectedUser.id}
                        size="avatar-tiny"
                        hasTooltip={false}
                      />
                      <div>
                        <div>200pts</div>
                        <div>#12</div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex-1 flex items-center gap-2">
                      <div className="flex-none avatar avatar-circle avatar-tiny">
                        <div>
                          <span className="icon icon-male" />
                        </div>
                      </div>
                      <div>
                        <span className="text-ui-300">Solo</span>
                      </div>
                    </div>
                  )}
                  {ladder.clan && (
                    <>
                      {ladder.isEnrolled ? (
                        <div className="flex-1 flex items-center gap-2 leading-none">
                          <div className="flex-none avatar avatar-squircle avatar-tiny">
                            <div>
                              <img
                                src={
                                  prototype.getClanByID(selectedUser.id)?.avatar
                                }
                                alt="avatar"
                              />
                            </div>
                          </div>
                          <div>
                            <div>879 pts</div>
                            <div>#3</div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex-1 flex items-center gap-2">
                          <div className="flex-none avatar avatar-squircle avatar-tiny">
                            <div>
                              <span className="icon icon-multiple-11" />
                            </div>
                          </div>
                          <div>
                            <span className="text-ui-300">Clan</span>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ) : (
                <>
                  {!isClan ? (
                    <>
                      {ladder.isEnrolled || !selectedUser.isYou ? (
                        <div className="flex-1 flex items-center gap-4">
                          <Avatar
                            id={selectedUser.id}
                            size="avatar-xs"
                            hasTooltip={false}
                          />
                          <div
                            className={`infobanner ${
                              ladder.status === "ongoing" && selectedUser.isYou
                                ? "is-active"
                                : ""
                            }`}
                          >
                            <div className="flex gap-2 infobanner-front">
                              <div>
                                <div className="uppercase text-xs text-ui-300">
                                  Points
                                </div>
                                <div className="text-sm">
                                  523
                                </div>
                              </div>
                              <div>
                                <div className="uppercase text-xs text-ui-300">
                                  Position
                                </div>
                                <div className="text-sm">
                                  #7
                                </div>
                              </div>
                            </div>
                            <div className="infobanner-back absolute inset-0 flex items-center text-sm">
                              <div className="animate-pulse text-ui-100">
                                Waiting for your 3 matches...
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <>
                          {ladder.soloLeaderboard ? (
                            <div className="flex items-center gap-2">
                              <div className="avatar-group -space-x-2">
                                <div className="avatar avatar-circle avatar-tiny">
                                  <div>
                                    <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_1.jpg" />
                                  </div>
                                </div>
                                <div className="avatar avatar-circle avatar-tiny">
                                  <div>
                                    <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_2.jpg" />
                                  </div>
                                </div>
                                <div className="avatar avatar-circle avatar-tiny">
                                  <div>
                                    <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg" />
                                  </div>
                                </div>
                              </div>
                              <span className="text-sm text-ui-300">
                                423 players{" "}
                                {ladder.status !== "finished" ? (
                                  <> are enrolled</>
                                ) : (
                                  <>have partaken</>
                                )}
                              </span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <Avatar
                                id={selectedUser.id}
                                size="avatar-xs"
                                hasTooltip={false}
                              />
                              <span className="text-sm text-ui-300">
                                Be the first to enroll
                              </span>
                            </div>
                          )}
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      {ladder.isEnrolled ? (
                        <>
                          <div className="flex-1 flex items-center gap-4">
                            <div className="flex-none avatar avatar-squircle avatar-xs">
                              <div>
                                <img
                                  src={
                                    prototype.getClanByID(clanID)
                                      ?.avatar
                                  }
                                  alt="avatar"
                                />
                              </div>
                            </div>
                            <div
                              className={`infobanner ${
                                ladder.status === "ongoing" &&
                                selectedUser.isYou
                                  ? "is-active"
                                  : ""
                              }`}
                            >
                              <div className="flex gap-2 infobanner-front">
                                <div>
                                  <div className="uppercase text-xs text-ui-300">
                                    Points
                                  </div>
                                  <div className="text-sm">1120</div>
                                </div>
                                <div>
                                  <div className="uppercase text-xs text-ui-300">
                                    Position
                                  </div>
                                  <div className="text-sm">#243</div>
                                </div>
                              </div>
                              <div className="infobanner-back absolute inset-0 flex items-center text-sm">
                                <div className="animate-pulse text-ui-100">
                                  Waiting for your 3 matches...
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {ladder.clanLeaderboard ? (
                            <div className="flex items-center gap-2">
                              <div className="avatar-group -space-x-2">
                                <div className="avatar avatar-squircle avatar-tiny">
                                  <div>
                                    <img src="https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_Un1c0rns.png" />
                                  </div>
                                </div>
                                <div className="avatar avatar-squircle avatar-tiny">
                                  <div>
                                    <img src="https://res.cloudinary.com/gloot/image/upload/v1654063976/Marketing/2022_prototype/DummyContent/teams/teamlogo_AngryBeavers.png" />
                                  </div>
                                </div>
                                <div className="avatar avatar-squircle avatar-tiny">
                                  <div>
                                    <img src="https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_Gladion2.png" />
                                  </div>
                                </div>
                              </div>
                              <span className="text-sm text-ui-300">
                                121 clans{" "}
                                {ladder.status !== "finished" ? (
                                  <> are enrolled</>
                                ) : (
                                  <>have partaken</>
                                )}
                              </span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <div className="avatar avatar-squircle avatar-xs">
                                <div>
                                  <img src={
                                    prototype.getClanByID(clanID)
                                      ?.avatar
                                  } alt="avatar" />
                                </div>
                              </div>
                              <span className="text-sm text-ui-300">
                                Be the first to enroll
                              </span>
                            </div>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}

              {ladder.isEnrolled && (
                <>
                {!isClan ? (
                  <ul className="text-sm border-l border-ui-700 pl-4 text-ui-300 flex flex-col items-start justify-center">
                    <li>843 players are enrolled</li>
                    <li>in 5 groups</li>
                  </ul>
                ) : (
                  <ul className="text-sm border-l border-ui-700 pl-4 text-ui-300 flex flex-col items-start justify-center">
                    <li>143 clans are enrolled</li>
                  </ul>
                )}
                </>
              )}
            </div>
          )}
        </div>
        <div className="card-image-bg">
          <img src={ladder.cover} alt="" />
        </div>
      </div>
    </Link>
    )}
    
    </>
  );
}
