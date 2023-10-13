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
import StructureGamePage from "../components/StructureGamePage";
import ModalVideoYoutubePlayer from "../modal-videoyoutubeplayer";
import ModalConnectIDLeagueOfLegends from "../modal-connectIDleagueoflegends";

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
        selectedGame.ladders?.filter(
          (g) => g.status === "finished" && g.hasClaim
        ).length
      );
    }
  }, [game, prototype, selectedGame]);

  function openModalVideoYoutubePlayer(url) {
    uiContext.openModal(<ModalVideoYoutubePlayer url={url} />);
  }

  function openModalConnectIDLeagueOfLegends() {
    uiContext.openModal(<ModalConnectIDLeagueOfLegends />);
  }

  return (
    <>
      <Structure title="Clan Events" gamePicker>
        <Ad width="1005" height="300" />
        {selectedGame && (
          <StructureGamePage
            title="Clan Events"
            side={
              <>
                <nav className="flex justify-start px-4 sm:p-px overflow-auto scrollbar-hidden border-b border-ui-700 lg:border-none">
                  <ul className="tabs lg:tabs-vertical">
                    {TabsItems.map((item, itemIndex) => (
                      <li key={itemIndex}>
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
                            <span>{item.label}</span>
                          </button>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="hidden lg:block">
                  <ul className="divide-y divide-ui-300/10 text-center">
                    <li className="py-6">
                      {selectedGame.needsSteam && (
                        <Link
                          href={`/prototype/profile/settings${prototype.getURLparams()}`}
                        >
                          <button
                            type="button"
                            className="button button-secondary"
                          >
                            <span
                              className={`icon icon-game-${selectedGame.slug}-symbol`}
                            />
                            <span>Connect my account</span>
                          </button>
                        </Link>
                      )}
                      {selectedGame.needsRiot && (
                        <>
                          {selectedGame.slug === "leagueoflegends" ? (
                            <button
                              type="button"
                              className="button button-secondary"
                              onClick={openModalConnectIDLeagueOfLegends}
                            >
                              <span
                                className={`icon icon-game-${selectedGame.slug}-symbol`}
                              />
                              <span>Connect my account</span>
                            </button>
                          ) : (
                            <Link
                              href={`/prototype/profile/settings${prototype.getURLparams()}`}
                            >
                              <button
                                type="button"
                                className="button button-secondary"
                              >
                                <span
                                  className={`icon icon-game-${selectedGame.slug}-symbol`}
                                />
                                <span>Connect my account</span>
                              </button>
                            </Link>
                          )}
                        </>
                      )}
                      {!selectedGame.needsSteam && !selectedGame.needsRiot && (
                        <Link
                          href={`/prototype/profile/settings${prototype.getURLparams()}`}
                        >
                          <button
                            type="button"
                            className="button button-secondary"
                          >
                            <span className="icon icon-windows-symbol" />
                            <span>Stryda App required</span>
                          </button>
                        </Link>
                      )}
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
                    <h4 className="text-base px-4 my-2">How Clan Events work</h4>
                    <p className="text-sm text-ui-300 px-4 mb-4">
                      Create a 5 people party with members from your Stryda
                      Clan. Play VALORANT together and start climbing the
                      leaderboard!
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
