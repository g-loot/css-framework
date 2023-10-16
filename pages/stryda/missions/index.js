import React, { useEffect, useState, useContext } from "react";

import Ad from "@/components/Ad/Ad";
import Link from "next/link";
import TabMissionsHowItWorks from "./tab-howitworks";
import TabMissionsMissions from "./tab-missions";
import TabMissionsHistory from "./tab-history";
import TabMissionsLeaderboard from "./tab-leaderboard";
import ModalConnectIDLeagueOfLegends from "../modal-connectIDleagueoflegends";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import Structure from "@/pages/stryda/components/Structure";
import Countdown from "@/components/Countdown/Countdown";
import ButtonStatsUpdate from "@/components/ButtonStatsUpdate/ButtonStatsUpdate";
import ModalVideoYoutubePlayer from "../modal-videoyoutubeplayer";
import StructureGamePage from "../components/StructureGamePage";

const TabsItems = [
  {
    label: "Missions",
    url: "missions",
    component: TabMissionsMissions,
  },
  {
    label: "Leaderboard",
    url: "leaderboard",
    component: TabMissionsLeaderboard,
  },
  {
    label: "How it works",
    url: "how-it-works",
    component: TabMissionsHowItWorks,
  },
  // {
  //   label: "Your Mission history",
  //   url: "history",
  //   component: TabMissionsHistory,
  // },
];

export default function Missions() {
  const router = useRouter();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const selectedGame = prototype.getGameByID(prototype.defaultGameID);
  const { tab } = router.query;
  const defaultTab = "missions";
  const selectedTab = tab ? tab : defaultTab;
  const modalConnectIDLeagueOfLegends =
    query.modalconnect === "true" ? true : false;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (modalConnectIDLeagueOfLegends) {
      openModalConnectIDLeagueOfLegends();
    }
  }, [modalConnectIDLeagueOfLegends]);

  function openModalConnectIDLeagueOfLegends() {
    uiContext.openModal(<ModalConnectIDLeagueOfLegends />);
  }

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 700);
    }
  }, [loading]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, [prototype.defaultGameID]);

  function openModalVideoYoutubePlayer(url) {
    uiContext.openModal(<ModalVideoYoutubePlayer url={url} />);
  }

  return (
    <>
      <Structure title="Missions" gamePicker>
        <Ad width="1005" height="300" />
        {selectedGame && (
          <StructureGamePage
            title="Missions"
            refreshButton={true}
            side={
              <>
                <nav className="flex justify-start items-center px-4 sm:p-px overflow-auto scrollbar-hidden border-b border-ui-700 lg:border-none">
                  <ul className="tabs lg:tabs-vertical">
                    {TabsItems.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          href={`/stryda/missions?tab=${
                            item.url
                          }${prototype.getURLparams("&")}`}
                        >
                          <button
                            type="button"
                            className={`${
                              selectedTab === item.url ? "is-active" : ""
                            }`}
                          >
                            <span>{item.label}</span>
                          </button>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="hidden md:flex lg:hidden flex-1 justify-end">
                    <ButtonStatsUpdate hasTooltip={false} hasLabel={false} />
                  </div>
                </nav>
                <div className="hidden lg:block">
                  <ul className="divide-y divide-ui-300/10 text-center">
                    <li className="py-6">
                      <Countdown
                        separator=" "
                        hasDays={false}
                        hasHours={true}
                        hasMinutes={true}
                        hasSeconds={false}
                        className="text-3xl"
                      />
                      <div className="text-sm">Until all Missions resets</div>
                    </li>
                    <li className="py-6">
                      <ButtonStatsUpdate
                        hasTooltip={false}
                        additionalClassNames="button-sm"
                      />
                      <div className="text-sm text-ui-300 mt-2">
                        Last updated: 3h ago
                      </div>
                    </li>
                  </ul>
                  <div className="surface-ui-700 rounded text-left overflow-hidden">
                    <button
                      type="button"
                      className="rounded-t rounded-b-none border-b border-ui-600 overflow-hidden interactive"
                      onClick={() => openModalVideoYoutubePlayer("Wso2JUKPP8o")}
                    >
                      <iframe
                        className="mx-auto aspect-video pointer-events-none"
                        width="100%"
                        height="auto"
                        src="https://www.youtube.com/embed/Wso2JUKPP8o?autoplay=0&rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </button>
                    <h4 className="text-base px-4 my-2">How Missions work</h4>
                    <p className="text-sm text-ui-300 px-4 mb-4">
                      Play Stryda Missions in Valorant, gather XP, and earn
                      Mission Rewards. You can complete the Daily Missions in
                      any game.
                    </p>
                  </div>
                </div>
              </>
            }
          >
            {TabsItems.map((item, itemIndex) => {
              if (item.url === selectedTab) {
                return React.createElement(item.component, {
                  key: itemIndex,
                });
              }
            })}
          </StructureGamePage>
        )}
      </Structure>
    </>
  );
}
