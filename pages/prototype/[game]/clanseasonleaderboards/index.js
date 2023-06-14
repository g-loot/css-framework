import React, { useContext, useEffect, useState } from "react";

import Ad from "../../../../components/Ad/Ad";
import Link from "next/link";
import PrototypeStructure from "../../../../components/Prototype/PrototypeStructure";
import { UiContext } from "../../../../contexts/ui";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import LaddersHeader from "./ladders-header";
import AnimatedNumber from "../../../../components/AnimatedNumber/AnimatedNumber";

import TabClanSeasonLeaderboardOverview from "./tab-overview";
import TabClanLeaderboardsRewards from "./[leaderboard_id]/tab-rewards";
import TabClanLeaderboardsHowItWorks from "./[leaderboard_id]/tab-howitworks";
import TabClanLeaderboardsHistory from "./[leaderboard_id]/tab-history";
import TabClanLeaderboardUpcoming from "./[leaderboard_id]/tab-upcoming";

const TabsItems = [
  {
    label: "Ongoing",
    url: "ongoing",
    component: TabClanSeasonLeaderboardOverview,
  },
  {
    label: "Upcoming",
    url: "upcoming",
    component: TabClanLeaderboardUpcoming,
  },
  {
    label: "Completed",
    url: "completed",
    component: TabClanLeaderboardsHistory,
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
  const [selectedGame, setSelectedGame] = useState(null);
  const [laddersFinishedLength, setLaddersFinishedLength] = useState(null);

  const { game } = router.query;
  const uiContext = useContext(UiContext);
  const { tab } = router.query;
  const defaultTab = "ongoing";
  const selectedTab = tab ? tab : defaultTab;

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game, prototype]);

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
      <PrototypeStructure title="Clan Seasons">
        <Ad width="1005" height="300" />
        {selectedGame && (
          <>
            <LaddersHeader breadcrumbs={false} />
            <nav>
              <ul className="tabs border-b border-ui-700">
                {TabsItems.map((item, itemIndex) => (
                  <li key={item}>
                    <Link
                      href={`/prototype/${game}/clanseasonleaderboards?tab=${
                        item.url
                      }${prototype.getURLparams("&")}`}
                    >
                      <a
                        className={`${
                          selectedTab === item.url ? "is-active" : ""
                        }`}
                      >
                        <span>
                          {item.label}
                          {item.url === "completed" &&
                            laddersFinishedLength >= 1 && (
                              <span className="ml-2 icon icon-present animate-bounce" />
                            )}
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
          </>
        )}
      </PrototypeStructure>
    </>
  );
}
