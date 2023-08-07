import React, { useContext, useEffect, useState } from "react";

import Ad from "../../../../../components/Ad/Ad";
import Link from "next/link";
import PrototypeStructure from "../../../../../components/Prototype/PrototypeStructure";
import { UiContext } from "../../../../../contexts/ui";
import { usePrototypeData } from "../../../../../contexts/prototype";
import { useRouter } from "next/router";
import ModalInfoClanEventEnroll from "../modal-info-claneventenroll";
import Tooltip from "../../../../../components/Tooltip/Tooltip";
import TabClanLeaderboardsLeaderboards from "./tab-clanleaderboards";
import TabClanLeaderboardsHowItWorks from "./tab-howitworks";
import TabClanLeaderboardsHistory from "./tab-history";
import TabClanLeaderboardsRewards from "./tab-rewards";
import ResetsIn from "../../../../../components/Countdown/ResetsIn";
import { VariablesContext } from "../../../../../contexts/variables";
import GameIcon from "../../../../../components/GameIcon/GameIcon";

const TabsItems = [
  {
    label: "Leaderboard",
    labelFinished: "Final placement",
    url: "leaderboard",
    component: TabClanLeaderboardsLeaderboards,
  },
  {
    label: "Rewards",
    url: "rewards",
    component: TabClanLeaderboardsRewards,
  },
  {
    label: "How it works",
    url: "how-it-works",
    component: TabClanLeaderboardsHowItWorks,
  },
];

export default function Ladders() {
  const router = useRouter();
  const prototype = usePrototypeData();
  const variablesContext = useContext(VariablesContext);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedClanLeaderboard, setSelectedClanLeaderboard] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [laddersFinishedLength, setLaddersFinishedLength] = useState(null);

  const { game } = router.query;
  const { leaderboard_id } = router.query;
  const uiContext = useContext(UiContext);
  const { tab } = router.query;
  const defaultTab = "leaderboard";
  const selectedTab = tab ? tab : defaultTab;

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game, prototype]);

  useEffect(() => {
    setSelectedClanLeaderboard(
      prototype.getClanLeaderboardByID(game, leaderboard_id)
    );
  }, [leaderboard_id]);

  useEffect(() => {
    if (selectedGame) {
      setLaddersFinishedLength(
        selectedGame.ladders.filter(
          (g) => g.status === "finished" && g.hasClaim
        ).length
      );
    }
  }, [game, prototype, selectedGame]);

  useEffect(() => {
    if (selectedGame != null) {
      prototype.defineDefaultGameID(selectedGame.id);
    }
  }, [selectedGame]);

  function handleEnroll() {
    uiContext.openModal(<ModalInfoClanEventEnroll />);
  }

  return (
    <>
      {selectedGame && selectedClanLeaderboard && (
        <PrototypeStructure title="Clan Events">
          <Ad width="1005" height="300" />
          <section className="surface sm:rounded overflow-hidden mb-4">
            <div className="h-44 relative w-full flex items-center justify-center overflow-hidden">
              <div className="absolute z-10 top-1 left-1">
                <Tooltip tooltip={<div>{selectedGame.name}</div>}>
                  <GameIcon game={selectedGame.id} />
                </Tooltip>
              </div>
              <img
                src={selectedClanLeaderboard.logo}
                alt={selectedClanLeaderboard.name}
                className="relative z-10 max-w-[280px] max-h-[150px] h-auto w-auto"
              />
              {selectedClanLeaderboard.video ? (
                <div
                  className={`absolute z-0 inset-0 grid place-content-center bg-ui-900/95 ${
                    selectedClanLeaderboard.status !== "upcoming" &&
                    selectedClanLeaderboard.status !== "ongoing"
                      ? "grayscale"
                      : ""
                  }`}
                >
                  <video
                    autoPlay={true}
                    playsInline
                    loop
                    muted
                    preload
                    width="100%"
                    height="100%"
                    id={`video_${selectedClanLeaderboard.id}`}
                    className="w-full"
                    src={`${selectedClanLeaderboard.video}#t=1`}
                  >
                    <img src={selectedClanLeaderboard.bg} />
                  </video>
                </div>
              ) : (
                <img
                  src={selectedClanLeaderboard.bg}
                  alt={selectedClanLeaderboard.name}
                  className={`absolute inset-0 z-0 object-cover w-full h-full ${
                    selectedClanLeaderboard.status !== "upcoming" &&
                    selectedClanLeaderboard.status !== "ongoing"
                      ? "grayscale"
                      : ""
                  }`}
                />
              )}
            </div>
            <div className="border-t border-ui-700 p-4">
              <div className="flex flex-col md:flex-row gap-2 md:items-center justify-between">
                <div className="flex items-center gap-2">
                  <h1 className="h4">{selectedClanLeaderboard.name}</h1>
                  {selectedClanLeaderboard.status === "ongoing" && (
                    <>
                      {!variablesContext.clanLeaderboardEnrolled ? (
                        <span className="chip chip-secondary">
                          <span className="text-blue-500">Ongoing</span>
                        </span>
                      ) : (
                        <span className="chip chip-secondary">
                          <span className="text-main animate-pulse">
                            Enrolled
                          </span>
                        </span>
                      )}
                    </>
                  )}
                </div>
                {selectedClanLeaderboard.status === "upcoming" && (
                  <ResetsIn label="Starts" />
                )}
                {selectedClanLeaderboard.status === "ongoing" && (
                  <ResetsIn label="Ends" />
                )}
                {selectedClanLeaderboard.status === "finished" && (
                  <div className="text-ui-100">
                    Ended {selectedClanLeaderboard.id * 2} months ago
                  </div>
                )}
              </div>
              {selectedClanLeaderboard.status !== "finished" && (
                <div className="border-t border-ui-700 mt-4 pt-4">
                  <ul className="flex flex-col lg:flex-row gap-1 justify-between leading-tight">
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
                        {selectedClanLeaderboard.meta.objective}{" "}
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

                      <p className="text-sm">
                        {selectedClanLeaderboard.meta.gameMode}
                      </p>
                    </li>
                    <li className="flex gap-2 items-center">
                      <Tooltip
                        className="tooltip-sm"
                        tooltip={<span className="text-sm">Tie Breaker</span>}
                      >
                        <button className="text-ui-300 text-0">
                          <span className="icon icon-20 icon-lightning" />
                        </button>
                      </Tooltip>
                      <p className="text-sm">
                        {selectedClanLeaderboard.meta.tieBreaker}
                      </p>
                    </li>
                  </ul>
                </div>
              )}
              {!variablesContext.clanLeaderboardEnrolled &&
                selectedClanLeaderboard.status === "ongoing" && (
                  <div className="border-t border-ui-700 mt-4 pt-4 text-center xl:text-left flex flex-col xl:flex-row items-center gap-4">
                    <div className="flex-1 text-sm">
                      <p>
                        In order for your clan to be eligible for the event, at
                        least 3 out of 5 party member have to be from the
                        following nordic countries:{" "}
                        <span className="whitespace-nowrap">
                          <img
                            src={`https://flagcdn.com/dk.svg`}
                            className="inline aspect-video rounded-sm max-w-[1.5rem]"
                          />{" "}
                          Denmark
                        </span>{"  "}
                        <span className="whitespace-nowrap">
                          <img
                            src={`https://flagcdn.com/fi.svg`}
                            className="inline aspect-video rounded-sm max-w-[1.5rem]"
                          />{" "}
                          Finland
                        </span>{"  "}
                        <span className="whitespace-nowrap">
                          <img
                            src={`https://flagcdn.com/is.svg`}
                            className="inline aspect-video rounded-sm max-w-[1.5rem]"
                          />{" "}
                          Iceland
                        </span>{"  "}
                        <span className="whitespace-nowrap">
                          <img
                            src={`https://flagcdn.com/no.svg`}
                            className="inline aspect-video rounded-sm max-w-[1.5rem]"
                          />{" "}
                          Norway
                        </span>{"  "}
                        <span className="whitespace-nowrap">
                          <img
                            src={`https://flagcdn.com/se.svg`}
                            className="inline aspect-video rounded-sm max-w-[1.5rem]"
                          />{" "}
                          Sweden
                        </span>
                      </p>
                    </div>
                    <div className="flex-1 whitespace-nowrap flex items-center justify-center">
                      <span
                        className="icon icon-ctrl-right text-xl text-main/20 animate-slide-in-left animate-delay"
                        style={{
                          "--delay": "calc(3 * 0.05s)",
                          animationIterationCount: "infinite",
                          animationDuration: "2s",
                          animationDirection: "alternate",
                        }}
                      />
                      <span
                        className="icon icon-ctrl-right text-xl text-main/40 animate-slide-in-left animate-delay"
                        style={{
                          "--delay": "calc(2 * 0.05s)",
                          animationIterationCount: "infinite",
                          animationDuration: "2s",
                          animationDirection: "alternate",
                        }}
                      />
                      <span
                        className="icon icon-ctrl-right text-xl text-main/60 animate-slide-in-left animate-delay"
                        style={{
                          "--delay": "calc(1 * 0.05s)",
                          animationIterationCount: "infinite",
                          animationDuration: "2s",
                          animationDirection: "alternate",
                        }}
                      />
                      <button
                        type="button"
                        className="button button-sm button-primary mx-4"
                        onClick={() => handleEnroll()}
                      >
                        <span>Enter with my Clan</span>
                      </button>
                      <span
                        className="icon icon-ctrl-left text-xl text-main/60 animate-slide-in-right animate-delay"
                        style={{
                          "--delay": "calc(1 * 0.05s)",
                          animationIterationCount: "infinite",
                          animationDuration: "2s",
                          animationDirection: "alternate",
                        }}
                      />
                      <span
                        className="icon icon-ctrl-left text-xl text-main/40 animate-slide-in-right animate-delay"
                        style={{
                          "--delay": "calc(2 * 0.05s)",
                          animationIterationCount: "infinite",
                          animationDuration: "2s",
                          animationDirection: "alternate",
                        }}
                      />
                      <span
                        className="icon icon-ctrl-left text-xl text-main/20 animate-slide-in-right animate-delay"
                        style={{
                          "--delay": "calc(3 * 0.05s)",
                          animationIterationCount: "infinite",
                          animationDuration: "2s",
                          animationDirection: "alternate",
                        }}
                      />
                    </div>
                  </div>
                )}
            </div>
          </section>

          <nav>
            <ul className="tabs border-b border-ui-700">
              {TabsItems.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link
                    href={`/prototype/${game}/clanevents/${leaderboard_id}?tab=${
                      item.url
                    }${prototype.getURLparams("&")}`}
                  >
                    <a
                      className={`${
                        selectedTab === item.url ? "is-active" : ""
                      }`}
                    >
                      <span>
                        {item.labelFinished &&
                        selectedClanLeaderboard.status === "finished"
                          ? item.labelFinished
                          : item.label}
                      </span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section className="py-4">
            {TabsItems.map((item, itemIndex) => {
              if (item.url === selectedTab) {
                return React.createElement(item.component, {
                  key: itemIndex,
                });
              }
            })}
          </section>
        </PrototypeStructure>
      )}
    </>
  );
}
