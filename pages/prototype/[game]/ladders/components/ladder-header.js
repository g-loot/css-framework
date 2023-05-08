import React, { useState, useEffect } from "react";
import { usePrototypeData } from "../../../../../contexts/prototype";
import { useRouter } from "next/router";
import Countdown from "../../../../../components/Countdown/Countdown";
import Tooltip from "../../../../../components/Tooltip/Tooltip";
import GameIcon from "../../../../../components/GameIcon/GameIcon";
import Lottie from "lottie-react";
import LottieExplosion from "../../../../../assets/animations/explosion_stryda_1.json";
import Link from "next/link";
import ResetsIn from "../../../../../components/Countdown/ResetsIn";

function calculateTimeLeft() {
  const year = new Date().getFullYear();
  const date = new Date().getTime();
  const difference = +new Date(`${year}-10-1`) - date;
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
}

const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();
const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

export default function LadderHeader() {
  const [selectedGame, setSelectedGame] = useState(null);
  const router = useRouter();
  const prototype = usePrototypeData();
  const { game } = router.query;
  const { ladder_id } = router.query;

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game, prototype]);

  return (
    <>
      {selectedGame && (
        <>
          <section
            className={`sm:rounded surface surface-dimmed flex flex-col md:flex-row gap-8 items-center mb-4 p-4 ${
              prototype.getLadderByID(game, ladder_id)?.isPremium
                ? "border-b-4 border-b-premium-500"
                : ""
            }`}
          >
            <div className="relative">
              <div className="absolute top-1 left-1">
                <Tooltip tooltip={<div>{selectedGame.name}</div>}>
                  <GameIcon game={selectedGame.id} />
                </Tooltip>
              </div>
              <img
                src={prototype.getLadderByID(game, ladder_id)?.cover}
                className="aspect-cover object-cover rounded w-96"
                alt=""
              />
            </div>
            <div className="flex-1 relative">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <h1 className="h4">
                    {prototype.getLadderByID(game, ladder_id)?.name}
                  </h1>
                  {prototype.getLadderByID(game, ladder_id)?.isPremium && (
                    <Tooltip
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
                            <span className="text-premium-500">
                              Premium members
                            </span>{" "}
                            only.
                          </div>
                        </div>
                      }
                    >
                      <Link href="/prototype/premium">
                        <button
                          type="button"
                          className="button button-ghost rounded-full"
                        >
                          <span className="icon icon-crown text-premium-500 text-2xl" />
                        </button>
                      </Link>
                    </Tooltip>
                  )}
                </div>
                {prototype.getLadderByID(game, ladder_id)?.status !==
                  "finished" && (
                  <>
                    <div className="text-right text-sm">
                      <ResetsIn
                        label={
                          prototype.getLadderByID(game, ladder_id)?.status ===
                          "upcoming"
                            ? "Starts"
                            : "Finishes"
                        }
                        status={
                          prototype.getLadderByID(game, ladder_id)?.status ===
                          "upcoming"
                            ? 2
                            : 1
                        }
                      />
                    </div>
                  </>
                )}
              </div>
              <ul className="flex flex-col gap-1 justify-between leading-tight">
                <li className="flex gap-2 items-center">
                  <Tooltip
                    className="tooltip-sm"
                    tooltip={<span className="text-sm">Objective</span>}
                  >
                    <button className="text-ui-300 text-0">
                      <span className="icon icon-20 icon-archery-target" />
                    </button>
                  </Tooltip>

                  <p className="text-sm">
                    Kills{" "}
                    <Tooltip
                      tooltip={
                        <div className="max-w-xs text-sm text-center leading-tight">
                          The content of this tooltip can be customized in the
                          backend.
                        </div>
                      }
                    >
                      <button className="text-ui-300 text-0">
                        <span className="icon text-sm icon-c-info" />
                      </button>
                    </Tooltip>
                  </p>
                </li>
                <li className="flex gap-2 items-center">
                  <Tooltip
                    className="tooltip-sm"
                    tooltip={<span className="text-sm">Game mode</span>}
                  >
                    <button className="text-ui-300 text-0">
                      <span className="icon icon-20 icon-handheld-console-2" />
                    </button>
                  </Tooltip>

                  <p className="text-sm">Competitive 2v2 & 3v3 (Ranked only)</p>
                </li>
                <li className="flex gap-2 items-center">
                  <Tooltip
                    className="tooltip-sm"
                    tooltip={<span className="text-sm">Tiebreaker</span>}
                  >
                    <button className="text-ui-300 text-0">
                      <span className="icon icon-20 icon-lightning" />
                    </button>
                  </Tooltip>
                  <p className="text-sm">
                    Headshots from your 3 best matches decide a tie
                  </p>
                </li>
              </ul>
            </div>
          </section>
          {/*
        <section className="surface surface-dimmed sm:rounded-lg mb-4 p-4">
          <div className="flex flex-col md:flex-row gap-1 justify-between items-center">
            <div className="flex gap-3 items-center">
              <span
                className={`icon icon-24 text-game-${game.replace(
                  /#|_/g,
                  ""
                )} icon-game-${game.replace(/#|_/g, "")}-symbol`}
              />
              <h1 className="h4">
                {prototype.getLadderByID(game, ladder_id)?.name}
              </h1>
            </div>
            <div className="flex gap-1 items-center justify-center xl:justify-end whitespace-nowrap">
              <span className="icon icon-clock" />
              <Countdown
                separator={"  "}
                hasDays={false}
                hasHours={true}
                hasMinutes={true}
                hasSeconds={true}
                targetDate={dateTimeAfterThreeDays}
                hasLabels={true}
                labelsAbbr={true}
                labelClassName="text-base block mr-1"
                className="text-base"
              />
            </div>
          </div>
          <hr className="separator border-ui-700/50 my-4" />
          <div className="flex flex-col lg:flex-row gap-4 items-start justify-between leading-none">
            <div className="">
              <div className="flex items-center gap-1.5">
                <span className="icon icon-archery-target icon-20 text-ui-200" />
                <h2 className="text-lg text-ui-200 whitespace-nowrap">
                  Objective
                </h2>
              </div>
              <div className="pl-6 text-ui-300 text-sm flex items-center gap-1">
                <span>Kills</span>
                <Tooltip
                  tooltip={
                    <div className="max-w-xs text-sm text-center leading-tight">
                      The content of this tooltip can be customized in the backend.
                    </div>
                  }
                >
                  <button className="text-ui-300 text-0">
                    <span className="icon icon-16 icon-c-info" />
                  </button>
                </Tooltip>
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-1.5">
                <span className="icon icon-handheld-console-2 icon-20 text-ui-200" />
                <h2 className="text-lg text-ui-200 whitespace-nowrap">
                  Game mode
                </h2>
              </div>
              <div className="pl-6 text-ui-300 text-sm">
                Competitive 2v2 & 3v3 (Ranked only)
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-1.5">
                <span className="icon icon-lightning icon-20 text-ui-200" />
                <h2 className="text-lg text-ui-200 whitespace-nowrap">
                  Tiebreaker
                </h2>
              </div>
              <div className="pl-6 text-ui-300 text-sm">
                Headshots from your 3 best matches decide a tie
              </div>
            </div>
          </div>
        </section>
                */}
        </>
      )}
    </>
  );
}
