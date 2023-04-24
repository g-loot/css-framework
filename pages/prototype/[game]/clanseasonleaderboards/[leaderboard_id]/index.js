import React, { useContext, useEffect, useState } from "react";

import Ad from "../../../../../components/Ad/Ad";
import Link from "next/link";
import PrototypeStructure from "../../../../../components/Prototype/PrototypeStructure";
import { UiContext } from "../../../../../contexts/ui";
import { usePrototypeData } from "../../../../../contexts/prototype";
import { useRouter } from "next/router";
import AnimatedNumber from "../../../../../components/AnimatedNumber/AnimatedNumber";
import Tooltip from "../../../../../components/Tooltip/Tooltip";
import Countdown from "../../../../../components/Countdown/Countdown";
import GameIcon from "../../../../../components/GameIcon/GameIcon";
import TabClanLeaderboardsLeaderboards from "./tab-clanleaderboards";
import TabClanLeaderboardsAbout from "./tab-about";
import TabClanLeaderboardsHistory from "./tab-history";

const TabsItems = [
  {
    label: "Leaderboard",
    url: "leaderboard",
    component: TabClanLeaderboardsLeaderboards,
  },
  {
    label: "About",
    url: "how-it-works",
    component: TabClanLeaderboardsAbout,
  },
  {
    label: "History",
    url: "history",
    component: TabClanLeaderboardsHistory,
  },
];

export default function Ladders() {
  const router = useRouter();
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedLeaderboard, setSelectedLeaderboard] = useState(null);
  const [selectedClanLeaderboard, setSelectedClanLeaderboard] = useState(null);
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
    setSelectedLeaderboard(
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

  return (
    <>
      {selectedGame && selectedLeaderboard && (
        <PrototypeStructure title="Clan Season Leaderboard">
          <Ad width="1005" height="300" />
          <section className="surface sm:rounded overflow-hidden mb-4">
            <div className="h-44 relative w-full flex items-center justify-center">
              <img
                src={selectedLeaderboard.logo}
                alt={selectedLeaderboard.name}
                className="relative z-10 max-w-[200px] max-h-[85px] h-auto w-full"
              />
              <img
                src={selectedLeaderboard.bg}
                alt={selectedLeaderboard.name}
                className={`absolute inset-0 z-0 object-cover w-full h-full ${
                  selectedLeaderboard.isCurrent ? "" : "grayscale opacity-50"
                }`}
              />
            </div>
            <div className="border-t border-ui-700 p-4">
              <div className="flex gap-2 md:items-center justify-between">
                <div className="flex items-center gap-2">
                  <h1 className="h4">{selectedLeaderboard.name}</h1>
                  {selectedLeaderboard.isCurrent && (
                    <span className="chip chip-secondary">
                      <span className="text-main animate-pulse">Ongoing</span>
                    </span>
                  )}
                </div>
                {selectedLeaderboard.isCurrent ? (
                  <div className="text-right flex items-center gap-1">
                    <span className="icon text-sm text-ui-300 icon-clock" />
                    <Countdown
                      separator={"  "}
                      hasDays={false}
                      hasHours={true}
                      hasMinutes={true}
                      hasSeconds={true}
                      hasLabels={true}
                      labelsAbbr={true}
                      labelClassName="text-base block mr-1"
                      className="text-base"
                    />
                  </div>
                ) : (
                  <span className="chip chip-secondary">
                    <span>Ended {selectedLeaderboard.id * 2} months ago</span>
                  </span>
                )}
              </div>
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
                      {selectedLeaderboard.meta.objective}{" "}
                      <Tooltip
                        tooltip={
                          <div className="max-w-xs text-sm leading-tight">
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

                    <p className="text-sm">
                      {selectedLeaderboard.meta.gameMode}
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
                      Headshots from your 3 best matches decide a tie
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <nav>
            <ul className="tabs border-b border-ui-700">
              {TabsItems.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link
                    href={`/prototype/${game}/clanseasonleaderboards/${leaderboard_id}?tab=${
                      item.url
                    }${prototype.getURLparams("&")}`}
                  >
                    <a
                      className={`${
                        selectedTab === item.url ? "is-active" : ""
                      }`}
                    >
                      <span>{item.label}</span>
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
