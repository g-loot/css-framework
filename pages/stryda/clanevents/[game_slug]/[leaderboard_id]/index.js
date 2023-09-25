import React, { useContext, useEffect, useState } from "react";

import Ad from "@/components/Ad/Ad";
import Link from "next/link";
import Structure from "@/pages/stryda/components/Structure";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import ModalInfoClanEventEnroll from "../../modal-info-claneventenroll";
import Tooltip from "@/components/Tooltip/Tooltip";
import TabClanLeaderboardsLeaderboards from "./tab-clanleaderboards";
import TabClanLeaderboardsHowItWorks from "./tab-howitworks";
import TabClanLeaderboardsRewards from "./tab-rewards";
import ResetsIn from "@/components/Countdown/ResetsIn";
import { VariablesContext } from "@/contexts/variables";
import GameIcon from "@/components/GameIcon/GameIcon";
import ModalClanEventHowitworksVideo from "../../modal-howitworks-video";
import ModalClanEventOnboarding from "../../modal-claneventonboarding";

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

  const { game_slug } = router.query;
  const { leaderboard_id } = router.query;
  const uiContext = useContext(UiContext);
  const { tab } = router.query;
  const defaultTab = "leaderboard";
  const selectedTab = tab ? tab : defaultTab;

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game_slug));
  }, [game_slug, prototype]);

  useEffect(() => {
    setSelectedClanLeaderboard(
      prototype.getClanLeaderboardByID(game_slug, leaderboard_id)
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
  }, [game_slug, prototype, selectedGame]);

  useEffect(() => {
    if (selectedGame != null) {
      prototype.defineDefaultGameID(selectedGame.id);
    }
  }, [selectedGame]);

  function handleEnroll() {
    uiContext.openModal(<ModalInfoClanEventEnroll />);
  }

  function openmodalClanEventOnboarding() {
    uiContext.openModal(<ModalClanEventOnboarding />);
  }

  return (
    <>
      {selectedGame && selectedClanLeaderboard && (
        <Structure title="Clan Events">
          <Ad width="1005" height="300" />
          <section className="surface sm:rounded overflow-hidden mt-8 mb-4">
            <div className="h-44 relative w-full flex items-center justify-center overflow-hidden">
              <div className="absolute z-20 top-2 left-2 rounded bg-ui-800/90 p-0.5 pr-3 flex gap-2 items-center text-sm text-ui-200">
                <GameIcon game={selectedGame.id} />
                <span>{selectedClanLeaderboard.meta.gameMode}</span>
                <span
                  className={`capitalize ${
                    selectedClanLeaderboard.status === "ongoing"
                      ? "text-blue-500"
                      : ""
                  }`}
                >
                  {selectedClanLeaderboard.status}
                </span>
              </div>
              <img
                src={selectedClanLeaderboard.logo}
                alt={selectedClanLeaderboard.name}
                className="relative z-10 max-h-[96px] w-auto"
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
                  {selectedClanLeaderboard.status === "ongoing" &&
                    variablesContext.clanLeaderboardEnrolled && (
                      <div className="chip chip-secondary">
                        <span className="text-main animate-pulse">
                          Enrolled
                        </span>
                      </div>
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
              {!variablesContext.clanLeaderboardEnrolled &&
                selectedClanLeaderboard.status === "ongoing" && (
                  <div className="border-t border-ui-700 mt-4 pt-4 text-center xl:text-left flex flex-col xl:flex-row items-center gap-4">
                    {selectedClanLeaderboard.meta?.eligibility && (
                      <div className="flex-1 flex flex-wrap gap-2 items-center justify-center xl:justify-start text-sm">
                        {selectedClanLeaderboard.meta?.eligibility ? (
                          <>
                            <span>
                              3 out of 5 party members have to be from the{" "}
                              <Tooltip
                                tooltip={
                                  <ul className="max-w-xs text-sm text-ui-200 leading-tight normal-case space-y-2">
                                    {selectedClanLeaderboard.meta?.eligibility?.countries.map(
                                      (country, countryIndex) => (
                                        <li
                                          key={countryIndex}
                                          className="whitespace-nowrap pr-1 flex items-center gap-2"
                                        >
                                          <img
                                            src={`https://flagcdn.com/${country.flag}.svg`}
                                            className="inline rounded-[1px] h-3.5 w-auto mx-0.5 -translate-y-px"
                                          />{" "}
                                          <span>{country.name}</span>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                }
                              >
                                <span className="interactive">
                                  <span className="underline">
                                    Nordic countries
                                  </span>{" "}
                                  <button className="text-ui-300 text-0 translate-y-0.5">
                                    <span className="icon icon-16 icon-c-info" />
                                  </button>
                                </span>
                              </Tooltip>
                            </span>
                            {selectedClanLeaderboard.meta.eligibility.ranks && (
                              <div className="border-l border-ui-700 pl-1 flex flex-wrap gap-1 items-center">
                                {selectedClanLeaderboard.meta.eligibility
                                  .ranks &&
                                  selectedClanLeaderboard.meta.eligibility.ranks?.map(
                                    (rank, rankIndex) => (
                                      <Tooltip
                                        key={rankIndex}
                                        placement="top"
                                        tooltip={rank.name}
                                      >
                                        <img
                                          src={rank.image}
                                          className="inline w-7 h-7 object-contain object-center"
                                        />
                                      </Tooltip>
                                    )
                                  )}
                              </div>
                            )}
                            <div className="border-l border-ui-700 pl-2">
                              <button type="button" onClick={openmodalClanEventOnboarding} className="link whitespace-nowrap">
                                Learn more
                              </button>
                            </div>
                          </>
                        ) : (
                          <span>Everyone can enter</span>
                        )}
                      </div>
                    )}
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
                        className="button button-primary mx-4 px-8"
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
            </div>
          </section>

          <nav>
            <ul className="tabs tabs-tertiary">
              {TabsItems.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link
                    href={`/stryda/clanevents/${game_slug}/${leaderboard_id}?tab=${
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
        </Structure>
      )}
    </>
  );
}
