import React, { useContext, useEffect, useState } from "react";

import Ad from "@/components/Ad/Ad";
import Link from "next/link";
import Structure from "@/pages/stryda/components/Structure";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import LaddersHeader from "./ladders-header";

import TabClanEventLeaderboardOverview from "./tab-overview";
import TabClanLeaderboardUpcoming from "./[game_slug]/[leaderboard_id]/tab-upcoming";
import TabClanLeaderboardsHowItWorks from "./[game_slug]/[leaderboard_id]/tab-howitworks";
import TabClanLeaderboardsHistory from "./[game_slug]/[leaderboard_id]/tab-history";

const TabsItems = [
  {
    label: "Ongoing",
    url: "ongoing",
    component: TabClanEventLeaderboardOverview,
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
    label: "How it works",
    url: "how-it-works",
    component: TabClanLeaderboardsHowItWorks,
  },
];

export default function Ladders() {
  const router = useRouter();
  const prototype = usePrototypeData();
  const selectedGame = prototype.getGameByID(prototype.defaultGameID);
  const [laddersFinishedLength, setLaddersFinishedLength] = useState(null);

  const { game } = router.query;
  const uiContext = useContext(UiContext);
  const { tab } = router.query;
  const defaultTab = "ongoing";
  const selectedTab = tab ? tab : defaultTab;

  useEffect(() => {
    if (selectedGame) {
      setLaddersFinishedLength(
        selectedGame.ladders.filter(
          (g) => g.status === "finished" && g.hasClaim
        ).length
      );
    }
  }, [game, prototype, selectedGame]);

  return (
    <>
      <Structure title="Clan Events" gamePicker>
        <Ad width="1005" height="300" />
        {selectedGame && (
          <>
            <LaddersHeader breadcrumbs={false} />
            <nav>
              <ul className="tabs tabs-tertiary">
                {TabsItems.map((item, itemIndex) => (
                  <li key={item}>
                    <Link
                      href={`/stryda/clanevents?tab=${
                        item.url
                      }${prototype.getURLparams("&")}`}
                    >
                      <button
                        type="button"
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
                      </button>
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
      </Structure>
    </>
  );
}
