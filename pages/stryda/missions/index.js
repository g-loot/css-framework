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
import Loader from "@/pages/stryda/components/Loader";

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
  {
    label: "Your Mission history",
    url: "history",
    component: TabMissionsHistory,
  },
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

  useEffect(() => {
    if (modalConnectIDLeagueOfLegends) {
      openModalConnectIDLeagueOfLegends();
    }
  }, [modalConnectIDLeagueOfLegends]);

  function openModalConnectIDLeagueOfLegends() {
    uiContext.openModal(<ModalConnectIDLeagueOfLegends />);
  }

  return (
    <>
      <Structure title="Missions" gamePicker>
        <Ad width="1005" height="300" />
        <Loader
          loader={
              <section className="min-h-screen container sm:px-4 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 mx-4 sm:mx-0 my-8">
                <div className="surface is-loading rounded aspect-video w-full" />
                <div className="surface is-loading rounded aspect-video w-full" />
                <div className="surface is-loading rounded aspect-video w-full" />
                <div className="surface is-loading rounded aspect-video w-full" />
                <div className="surface is-loading rounded aspect-video w-full" />
                <div className="surface is-loading rounded aspect-video w-full" />
                <div className="surface is-loading rounded aspect-video w-full" />
                <div className="surface is-loading rounded aspect-video w-full" />
                <div className="surface is-loading rounded aspect-video w-full" />
              </section>
          }
        >
        {selectedGame && (
          <>
            <section className="header header-quaternary my-8">
              <div className="header-content">
                <div className="header-body">
                  <h1 className="text-7xl mb-2">Missions</h1>
                  <p className="text-ui-300">
                    Play Stryda Missions in {selectedGame.name}, gather XP, and
                    earn Mission Rewards. You can complete the Daily Missions in
                    any game.
                  </p>
                  <div className="flex hidden flex-col md:flex-row gap-2 mt-4">
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
                            onClick={openModalConnectIDLeagueOfLegends}
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
                  </div>
                </div>
              </div>
              <div className="header-bg">
                <img src={selectedGame.assets.heroV2} alt="" />
              </div>
            </section>
            <nav>
              <ul className="tabs tabs-tertiary">
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
          </Loader>
        
      </Structure>
    </>
  );
}
