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

export default function BrawlCardSecondary(props) {
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const isHorizontal = props.isHorizontal || false;
  const isPartaking = props.brawl.isPartaking || false;
  const brawl = props.brawl;

  function openModalClaimLadderRewards() {
    uiContext.openModal(<ModalClaimLadderRewards></ModalClaimLadderRewards>);
  }

  return (
    <div
      className={`card-brawl card-secondary ${
        isHorizontal ? "md:card-horizontal" : ""
      } ${isPartaking && !brawl.hasClaim ? "is-active" : ""} `}
    >
      {brawl.hasClaim && (
        <div className="card-overlay">
          <div>
            <div className="font-headings text-2xl font-bold italic text-ui-100">
              You won a prize!
            </div>
            <button
              type="button"
              className="button button-sm button-claim"
              onClick={openModalClaimLadderRewards}
            >
              <span>Claim reward</span>
            </button>
          </div>
          <img
            src="https://res.cloudinary.com/gloot/image/upload/v1668945075/Marketing/2022_prototype/card-rewarddoverlay-bg.png"
            alt=""
          />
        </div>
      )}
      <div className="card-image">
        <div className="card-image-content">
          <div className="rounded bg-ui-800/90 p-0.5 pr-3 flex gap-2 items-center text-sm text-ui-200">
            <div className="ml-0 p-1 border border-ui-700 rounded-sm bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
              <span
                className={`icon text-xl ${
                  prototype.getGameByID(brawl.game).slug === "apexlegends"
                    ? "icon-game-apexlegends-symbol text-game-apexlegends"
                    : ""
                } ${
                  prototype.getGameByID(brawl.game).slug === "csgo"
                    ? "icon-game-csgo-symbol text-game-csgo"
                    : ""
                }  ${
                  prototype.getGameByID(brawl.game).slug === "dota2"
                    ? "icon-game-dota2-symbol text-game-dota2"
                    : ""
                }  ${
                  prototype.getGameByID(brawl.game).slug === "leagueoflegends"
                    ? "icon-game-leagueoflegends-symbol text-game-leagueoflegends"
                    : ""
                }  ${
                  prototype.getGameByID(brawl.game).slug === "rocketleague"
                    ? "icon-game-rocketleague-symbol text-game-rocketleague"
                    : ""
                } ${
                  prototype.getGameByID(brawl.game).slug === "pubg"
                    ? "icon-game-pubg-symbol text-game-pubg"
                    : ""
                }  ${
                  prototype.getGameByID(brawl.game).slug === "valorant"
                    ? "icon-game-valorant-symbol text-game-valorant"
                    : ""
                }`}
              />
            </div>
            <span>{brawl.gameMode}</span>
            <span className={`text-main card-status capitalize`}>
              {brawl.isPartaking ? <>Partaking</> : <>{brawl.status}</>}
            </span>
          </div>
        </div>
      </div>
      <div className="card-content">
        <div className="card-body">
          <div>
            <h2 className="text-3xl mb-2 uppercase">{brawl.name}</h2>
            <div className="flex gap-4 items-center">
              <div className="flex items-center whitespace-nowrap gap-2">
                <img
                  className="h-5"
                  src="https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-coin-unique.webp"
                  width="auto"
                  height="auto"
                  alt=""
                />
                <span className="font-bold text-gold-500 text-sm">
                  5k - 30k
                </span>
              </div>
              {brawl.status === "finished" ? (
                <div className="text-sm text-ui-300">
                  This competition has ended
                </div>
              ) : (
                <div className="flex text-sm gap-1 items-center whitespace-nowrap">
                  <span className="text-ui-300 mr-1">Time Left:</span>
                  <span className="icon icon-clock text-ui-300" />
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
          {!brawl.isClan ? (
            <>
              {brawl.isPartaking ? (
                <div className="flex-1 flex items-center gap-4 leading-tight">
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
                        <div className="text-sm font-bold">1120</div>
                      </div>
                      <div>
                        <div className="uppercase text-xs text-ui-300">
                          Position
                        </div>
                        <div className="text-sm font-bold">#243</div>
                      </div>
                    </div>
                    <div className="infobanner-back absolute inset-0 flex items-center text-sm">
                      <div className="animate-pulse text-blue-300">
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
                    {brawl.status !== "finished" ? (
                      <> are partaking</>
                    ) : (
                      <>have partaken</>
                    )}
                  </span>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="flex-1 flex items-center gap-4 leading-tight">
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
                      <div className="text-sm font-bold">1120</div>
                    </div>
                    <div>
                      <div className="uppercase text-xs text-ui-300">
                        Position
                      </div>
                      <div className="text-sm font-bold">#243</div>
                    </div>
                  </div>
                  <div className="infobanner-back absolute inset-0 flex items-center text-sm">
                    <div className="animate-pulse text-blue-300">
                      Waiting for your 3 matches...
                    </div>
                  </div>
                </div>
              </div>
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
                  <div className="avatar avatar-circle avatar-tiny">
                    <div>
                      <span>+9</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="flex items-end">
            <Link
              href={
                !brawl.isClan
                  ? "valorant/brawls/2?tab=solo-leaderboard"
                  : "valorant/brawls/2?tab=clan-leaderboard"
              }
            >
              <button
                type="button"
                className={`button button-sm ${
                  brawl.status != "finished"
                    ? "button-primary"
                    : "button-secondary"
                }`}
              >
                {brawl.isPartaking ? (
                  <span>Go to Brawl</span>
                ) : (
                  <span>Explore</span>
                )}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card-image-bg">
        <img src={brawl.cover} alt="" />
      </div>
    </div>
  );
}
