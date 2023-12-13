import React, { useContext, useEffect, useState, useRef } from "react";

import Ad from "../../../../components/Ad/Ad";
import Link from "next/link";
import ModalLadderResults from "../modal-ladderresults";
import Structure from "@/pages/stryda/components/Structure";
import TabLaddersClanLeaderboard from "./tab-clanleaderboards";
import TabLaddersHowItWorks from "../tab-howitworks";
import TabLaddersRewards from "./tab-rewards";
import TabLaddersSoloLeaderboards from "./tab-sololeaderboards";
import TabLaddersRules from "../tab-rules";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import LadderHeader from "./components/ladder-header";
import LadderPlacements from "./components/ladder-placements";

const TabsItems = [
  {
    label: "Solo Leaderboard",
    url: "solo-leaderboard",
    component: TabLaddersSoloLeaderboards,
  },
  {
    label: "Clan Leaderboard",
    url: "clan-leaderboard",
    component: TabLaddersClanLeaderboard,
  },
  {
    label: "Rewards",
    url: "rewards",
    component: TabLaddersRewards,
  },
  {
    label: "How it works",
    url: "how-it-works",
    component: TabLaddersHowItWorks,
  },
  {
    label: "Stryda rules",
    url: "rules",
    component: TabLaddersRules,
  },
];
const TabsItemsNoClan = [
  {
    label: "Solo Leaderboard",
    url: "solo-leaderboard",
    component: TabLaddersSoloLeaderboards,
  },
  {
    label: "Rewards",
    url: "rewards",
    component: TabLaddersRewards,
  },
  {
    label: "How it works",
    url: "how-it-works",
    component: TabLaddersHowItWorks,
  },
  {
    label: "Stryda rules",
    url: "rules",
    component: TabLaddersRules,
  },
];

export default function Home() {
  const router = useRouter();
  const prototype = usePrototypeData();
  const { tab } = router.query;
  const { game_slug } = router.query;
  const { ladder_id } = router.query;
  const defaultTab = "solo-leaderboard";
  const selectedTab = tab ? tab : defaultTab;
  const uiContext = useContext(UiContext);
  const { query } = useRouter();
  const modalLadderResults = query.modalladderresults === "true" ? true : false;
  const [selectedLadder, setSelectedLadder] = useState(null);

  useEffect(() => {
    setSelectedLadder(prototype.getLadderByID(game_slug, ladder_id));
  }, [ladder_id]);

  useEffect(() => {
    if (modalLadderResults) {
      openmodalLadderResults();
    }
  }, [modalLadderResults]);

  function openmodalLadderResults() {
    uiContext.openModal(<ModalLadderResults item={selectedLadder} />);
  }

  return (
    <>
      {selectedLadder && (
        <Structure title="Ladders">
          <Ad width="1005" height="300" />
          <LadderHeader />

          {selectedLadder.status === "ongoing" && <LadderPlacements />}

          <nav className="sticky z-40 mb-8 flex justify-start overflow-x-auto scrollbar-hidden px-4 md:px-0 bg-ui-900/95 border-b border-ui-700 top-12">
            <ul className="tabs">
              {selectedLadder.clan ? (
                <>
                  {TabsItems.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        href={`/stryda/ladders/${game_slug}/${ladder_id}?tab=${
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
                </>
              ) : (
                <>
                  {TabsItemsNoClan.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        href={`/stryda/ladders/${game_slug}/${ladder_id}?tab=${
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
                </>
              )}
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
