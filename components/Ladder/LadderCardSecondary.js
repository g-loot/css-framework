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

const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();
const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

export default function LadderCardSecondary(props) {
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const isHorizontal = props.isHorizontal || false;
  const isEnrolled = props.ladder?.isEnrolled || false;
  const isFluid = props.isFluid || false;
  const isClan = props.isClan || false;
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

  return (
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
        } ${isEnrolled && ladder.status !== "finished" && !ladder.hasClaim ? "is-active" : ""} ${
          ladder.status === "finished" ? "is-inactive" : ""
        } ${
          ladder.isPremium ? "card-premium" : ""
        } ${className}`}
      >
        {ladder.hasClaim && (
          <div className="card-overlay">
            <div>
              <button
                type="button"
                className="button button-primary is-shining"
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
              <div className="ml-0 p-1 border border-ui-700 rounded-sm bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
                <span
                  className={`icon text-xl ${
                    prototype.getGameBySlug(game_slug).slug === "apexlegends"
                      ? "icon-game-apexlegends-symbol text-game-apexlegends"
                      : ""
                  } ${
                    prototype.getGameBySlug(game_slug).slug === "csgo"
                      ? "icon-game-csgo-symbol text-game-csgo"
                      : ""
                  }  ${
                    prototype.getGameBySlug(game_slug).slug === "dota2"
                      ? "icon-game-dota2-symbol text-game-dota2"
                      : ""
                  }  ${
                    prototype.getGameBySlug(game_slug).slug ===
                    "leagueoflegends"
                      ? "icon-game-leagueoflegends-symbol text-game-leagueoflegends"
                      : ""
                  }  ${
                    prototype.getGameBySlug(game_slug).slug === "rocketleague"
                      ? "icon-game-rocketleague-symbol text-game-rocketleague"
                      : ""
                  } ${
                    prototype.getGameBySlug(game_slug).slug === "pubg"
                      ? "icon-game-pubg-symbol text-game-pubg"
                      : ""
                  }  ${
                    prototype.getGameBySlug(game_slug).slug === "valorant"
                      ? "icon-game-valorant-symbol text-game-valorant"
                      : ""
                  }`}
                />
              </div>
              <span>{ladder.gameMode}</span>
              {ladder.status !== "finished" && (
                <span className={`text-main card-status capitalize`}>
                  {ladder.isEnrolled ? <>Enrolled</> : <>{ladder.status}</>}
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
                  This competition has ended
                </div>
              ) : (
                <div className="flex text-sm text-ui-300 gap-1 items-center whitespace-nowrap">
                  <span className="mr-1">Time Left:</span>
                  <span className="icon icon-clock" />
                  <span>23H</span>
                  <span>19M</span>
                  <span>13S</span>
                  {/*
                  <Countdown
                    separator={"  "}
                    hasDays={false}
                    hasHours={true}
                    hasMinutes={true}
                    hasSeconds={true}
                    targetDate={dateTimeAfterThreeDays}
                    hasLabels={true}
                    labelsAbbr={true}
                    labelClassName="text-base mr-1 block"
                    className="uppercase text-sm gap-1"
                  />
              */}
                </div>
              )}
            </div>
          </div>
          <div className="card-meta">
            {isGlobal ? (
              <div className="flex-1 flex gap-4 text-sm leading-none pr-4">
                {ladder.isEnrolled ? (
                  <div className="flex-1 flex items-center gap-2">
                    <div className="flex-none avatar avatar-circle avatar-tiny">
                      <div>
                        <img
                          src={prototype.getUserByID(1)?.avatar}
                          alt="avatar"
                        />
                      </div>
                    </div>
                    <div>
                      <div>1120pts</div>
                      <div>#243</div>
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
                                prototype.getClanByID(
                                  prototype.getUserByID(1).id
                                )?.avatar
                              }
                              alt="avatar"
                            />
                          </div>
                        </div>
                        <div>
                          <div>143120pts</div>
                          <div>#42</div>
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
                    {ladder.isEnrolled ? (
                      <div className="flex-1 flex items-center gap-4">
                        <div className="flex-none avatar avatar-circle avatar-xs">
                          <div>
                            <img
                              src={prototype.getUserByID(1)?.avatar}
                              alt="avatar"
                            />
                          </div>
                        </div>
                        <div className={`infobanner ${ladder.status === "ongoing" ? 'is-active' : ''}`}>
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
                    ) : (
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
                                  prototype.getClanByID(
                                    prototype.getUserByID(1).id
                                  )?.avatar
                                }
                                alt="avatar"
                              />
                            </div>
                          </div>
                          <div className={`infobanner ${ladder.status === "ongoing" ? 'is-active' : ''}`}>
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
                          <div className="hidden sm:flex items-center gap-2">
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
                                  <span>+9</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div></div>
                    )}
                  </>
                )}
              </>
            )}

            {/*

          <div className="flex items-end">
            <Link
              href={
                !isDemo
                  ? `/prototype/${
                      prototype.getGameBySlug(game_slug).slug
                    }/ladders/${ladder.id}${prototype.getURLparams()}`
                  : `/prototype/valorant/ladders/${
                      ladder.isPowerPlay ? "1" : "2"
                    }${prototype.getURLparams()}`
              }
            >
              <a>
                <button
                  type="button"
                  className={`button button-sm ${
                    ladder.status != "finished"
                      ? "button-secondary"
                      : "button-secondary"
                  }`}
                >
                  {ladder.isEnrolled || ladder.status === "finished" ? (
                    <span>View Ladder</span>
                  ) : (
                    <span>View Ladder</span>
                  )}
                </button>
              </a>
            </Link>
          </div>

          */}
          </div>
        </div>
        <div className="card-image-bg">
          <img src={ladder.cover} alt="" />
        </div>
      </div>
    </Link>
  );
}
