import React from "react";
import Countdown from "../Countdown/Countdown";
import { UiContext } from "../../contexts/ui";
import { useContext } from "react";
import { usePrototypeData } from "../../contexts/prototype";
import ModalClaimLadderRewards from "../../pages/prototype/home/modal-claim-ladderrewards";
import Link from "next/link";

const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();
const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

export default function LadderCardSecondary(props) {
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const isHorizontal = props.isHorizontal || false;
  const isEnrolled = props.ladder.isEnrolled || false;
  const ladder = props.ladder;
  const game_slug = props.game_slug || "valorant";
  const isDemo = props.isDemo || false;

  function openModalClaimLadderRewards() {
    uiContext.openModal(<ModalClaimLadderRewards></ModalClaimLadderRewards>);
  }

  return (
    <div
      className={`card-ladder card-secondary ${
        isHorizontal ? "md:card-horizontal" : ""
      } ${isEnrolled && !ladder.hasClaim ? "is-active" : ""} ${
        ladder.status === "finished" ? "is-inactive" : ""
      }`}
    >
      {ladder.hasClaim && (
        <div className="card-overlay">
          <div>
            <button
              type="button"
              className="button button-claim is-shining"
              onClick={openModalClaimLadderRewards}
            >
              <span className="icon icon-present animate-bounce" />
              <span>Claim reward</span>
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
                  prototype.getGameBySlug(game_slug).slug === "leagueoflegends"
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
            <span className={`text-main card-status capitalize`}>
              {ladder.isEnrolled ? <>Enrolled</> : <>{ladder.status}</>}
            </span>
          </div>
        </div>
      </div>
      <div className="card-content">
        <div className="card-body">
          <div>
            <h2 className="h4 mb-2">{ladder.name}</h2>
            <div className="flex gap-4 items-center">
              <div className="flex items-center whitespace-nowrap gap-1">
                <span className="icon icon-coin text-currency-1-500" />
                <span className="text-currency-1-500 text-sm">
                  5 000 - 30 000
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
        </div>
        <div className="card-meta">
          {!ladder.isClan ? (
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
                  <div className="infobanner is-active">
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
                            prototype.getClanByID(prototype.getUserByID(1).id)
                              ?.avatar
                          }
                          alt="avatar"
                        />
                      </div>
                    </div>
                    <div className="infobanner is-active">
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
                            <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg" />
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
          <div className="flex items-end">
            <Link
              href={
                !isDemo
                  ? `/prototype/${prototype.getGameBySlug(game_slug).slug}/ladders/${ladder.id}${prototype.getURLparams()}`
                  : `/prototype/valorant/ladders/1${prototype.getURLparams()}`
              }
            >
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
                  <span>Join now</span>
                )}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card-image-bg">
        <img src={ladder.cover} alt="" />
      </div>
    </div>
  );
}
