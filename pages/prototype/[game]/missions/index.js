import React, { useEffect, useState, useContext } from "react";

import Ad from "@/components/Ad/Ad";
import Link from "next/link";
import PrototypeStructure from "@/components/Prototype/PrototypeStructure";
import TabMissionsHowItWorks from "./tab-howitworks";
import TabMissionsMissions from "./tab-missions";
import TabMissionsHistory from "./tab-history";
import TabMissionsLeaderboard from "./tab-leaderboard";
import ModalConnectIDLeagueOfLegends from "../../modal-connectIDleagueoflegends";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";

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
  const [selectedGame, setSelectedGame] = useState(null);
  const { game } = router.query;
  const { tab } = router.query;
  const defaultTab = "missions";
  const selectedTab = tab ? tab : defaultTab;
  const modalConnectIDLeagueOfLegends = query.modalconnect === "true" ? true : false;

  useEffect(() => {
    if (modalConnectIDLeagueOfLegends) {
      openModalConnectIDLeagueOfLegends();
    }
  }, [modalConnectIDLeagueOfLegends]);

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game, prototype]);

  useEffect(() => {
    if (selectedGame != null) {
      prototype.defineDefaultGameID(selectedGame.id);
    }
  }, [selectedGame]);

  function openModalConnectIDLeagueOfLegends() {
    uiContext.openModal(<ModalConnectIDLeagueOfLegends />);
  }

  return (
    <>
      <PrototypeStructure title="Missions">
        <Ad width="1005" height="300" />

        {selectedGame && (
          <>
            <section className="header surface sm:rounded-lg mb-4">
              <div className="header-content">
                <div className="header-image">
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1674657396/Stryda/logos/stryda-logo-missions.svg"
                    alt="Missions"
                  />
                </div>
                <div className="header-body">
                  <p className="text-ui-300 mb-4">
                    Play Stryda Missions in {selectedGame.name}, gather XP, and
                    earn Mission Rewards. You can complete the Daily Missions in
                    any game.
                  </p>
                  <div className="flex flex-col md:flex-row gap-2">
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
                  </div>
                </div>
              </div>
              {/*
              <div className="header-meta">
                <div className="w-full flex flex-col justify-center items-center gap-2 xl:pl-0 py-4">
                  <div className="flex items-end gap-4 leading-tight">
                    <div className="text-xl xl:text-4xl text-main">
                      2/3
                    </div>
                    <div className="xl:mb-2">
                      <div className="text-xl text-ui-200 uppercase">
                        Daily missions completed
                      </div>
                    </div>
                  </div>
                  <ul className="step step-primary step-sm w-full max-w-sm mx-auto">
                    <li>
                      <a href="#">
                        <i />
                        <div />
                        <span />
                      </a>
                    </li>
                    <li className="is-active">
                      <a href="#">
                        <i />
                        <div />
                        <span />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i />
                        <div />
                        <span />
                      </a>
                    </li>
                  </ul>
                  <p className="text-ui-200 text-sm text-center my-4 leading-tight">
                    You can complete the daily missions in any game.
                  </p>
                </div>
              </div>
        */}
              <div className="header-bg">
                <img src={selectedGame.assets.heroMission} />
              </div>
            </section>
            <nav>
              <ul className="tabs border-b border-ui-700">
                {TabsItems.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href={`/prototype/${game}/missions?tab=${
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
      </PrototypeStructure>
    </>
  );
}
