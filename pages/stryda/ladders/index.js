import React, { useContext, useEffect, useState } from "react";

import Ad from "@/components/Ad/Ad";
import Link from "next/link";
import ModalLadderHowitworksVideo from "./modal-howitworks-video";
import Structure from "@/pages/stryda/components/Structure";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import LaddersHeader from "./ladders-header";

import TabLaddersOngoing from "./tab-laddersongoing";
import TabLaddersUpcoming from "./tab-laddersupcoming";
import TabLaddersCompleted from "./tab-ladderscompleted";
import TabLaddersHowItWorks from "./tab-howitworks";
import TabLaddersRules from "./tab-rules";
import Loader from "@/pages/stryda/components/Loader";
import StructureGamePage from "../components/StructureGamePage";
import ButtonStatsUpdate from "@/components/ButtonStatsUpdate/ButtonStatsUpdate";
import Countdown from "@/components/Countdown/Countdown";
import ModalVideoYoutubePlayer from "../modal-videoyoutubeplayer";
import ModalConnectGameID from "../modal-connectgameID";

const TabsItems = [
  {
    label: "Ongoing",
    url: "ongoing",
    component: TabLaddersOngoing,
  },
  {
    label: "Upcoming",
    url: "upcoming",
    component: TabLaddersUpcoming,
  },
  {
    label: "Completed",
    url: "completed",
    component: TabLaddersCompleted,
    badge: "gift",
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

export default function Ladders() {
  const router = useRouter();
  const prototype = usePrototypeData();
  const selectedGame = prototype.getGameByID(prototype.defaultGameID);
  const [laddersFinishedLength, setLaddersFinishedLength] = useState(null);

  const uiContext = useContext(UiContext);
  const { tab } = router.query;
  const defaultTab = "ongoing";
  const selectedTab = tab ? tab : defaultTab;

  function openModalLadderHowitworksVideo() {
    uiContext.openModal(
      <ModalLadderHowitworksVideo></ModalLadderHowitworksVideo>
    );
  }

  function openModalConnectGameID() {
    uiContext.openModal(<ModalConnectGameID />);
  }

  useEffect(() => {
    if (selectedGame) {
      setLaddersFinishedLength(
        selectedGame.ladders?.filter(
          (g) => g.status === "finished" && g.hasClaim
        ).length
      );
    }
  }, [prototype, selectedGame]);

  function openModalVideoYoutubePlayer(url) {
    uiContext.openModal(<ModalVideoYoutubePlayer url={url} />);
  }

  return (
    <>
      <Structure title="Ladders" gamePicker>
        <Ad width="1005" height="300" />
        {selectedGame && (
          <StructureGamePage
            title="Ladders"
            side={
              <>
                <nav className="flex justify-start px-4 sm:p-px overflow-auto scrollbar-hidden border-b border-ui-700 lg:border-none">
                  <ul className="tabs lg:tabs-vertical">
                    {TabsItems.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          href={`/stryda/ladders?tab=${
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
                              <span>{item.label}</span>{" "}
                              {item.badge &&
                                item.badge === "badge" &&
                                selectedGame.id === 1 && (
                                  <i className="badge animate-bounce" />
                                )}{" "}
                              {item.badge &&
                                item.badge === "gift" &&
                                selectedGame.id === 1 && (
                                  <span className="icon icon-present animate-bounce" />
                                )}
                            </span>
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
                          href={`/stryda/profile/settings${prototype.getURLparams()}`}
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
                              onClick={openModalConnectGameID}
                            >
                              <span
                                className={`icon icon-game-${selectedGame.slug}-symbol`}
                              />
                              <span>Connect my account</span>
                            </button>
                          ) : (
                            <Link
                              href={`/stryda/profile/settings${prototype.getURLparams()}`}
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
                          href={`/stryda/profile/settings${prototype.getURLparams()}`}
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
                  {!prototype.isPremium && (
                    <div className="space-y-4 text-center mb-4">
                      <div className="bg-ui-800/75 border border-ui-700 w-full aspect-square rounded flex flex-col items-center justify-center">
                        {/* Replace the following div by the display ad */}
                        <div>
                          <div>Ad</div>
                          <div className="text-sm">Max width: 260px</div>
                        </div>
                      </div>
                      <Link href={`/stryda/premium`}>
                        <span className="link link-main text-sm">
                          Remove ads
                        </span>
                      </Link>
                    </div>
                  )}
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
                    <h4 className="text-base px-4 mb-2">How Ladders work</h4>
                    {/* <p className="text-sm text-ui-300 px-4 mb-4">
                      Use your stats to climb the ladders and win prizes. No
                      waiting, no dedicated servers. Play on your own schedule!
                    </p> */}
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
