import React, { useEffect, useState, useContext } from "react";

import Ad from "../../../../components/Ad/Ad";
import Link from "next/link";
import Structure from "../../components/Structure";
import { usePrototypeData } from "../../../../contexts/prototype";
import { UiContext } from "../../../../contexts/ui";
import { useRouter } from "next/router";

import { DataScoreboards } from "../../../../mock-data/data-scoreboards";
import TabScoreboardsOverview from "./tab-overview";
import TabScoreboard from "./[scoreboard_id]/tab-scoreboard";

export default function Scoreboards() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedGeneralStat, setSelectedGeneralStat] = useState(0);
  const [selectedScoreboard, setSelectedScoreboard] = useState(null);
  const { game } = router.query;
  const variant = query.variant ? query.variant : 20;
  const [loading, setLoading] = useState(true);
  const isEmpty = query.empty === "true" ? true : false;

  const { tab } = router.query;
  const defaultTab = "all";
  const selectedTab = tab ? tab : defaultTab;

  const TabsItems = [
    {
      label: "All",
      url: "all",
      component: TabScoreboardsOverview,
    },
  ];

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1200);
    }
  }, [loading]);

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game, prototype]);

  useEffect(() => {
    if (selectedGame != null) {
      prototype.defineDefaultGameID(selectedGame.id);
    }
  }, [selectedGame]);

  const getGameScoreboardsByID = (id) => {
    return DataScoreboards.find((general) => {
      return general.id === parseInt(id);
    });
  };

  const getScoreboardByID = (gameID, id) => {
    const selectedGameScoreboards = getGameScoreboardsByID(gameID);
    const selectedScoreboard = selectedGameScoreboards.scoreboards?.find(
      (scoreboard) => {
        return scoreboard.id === parseInt(id);
      }
    );
    return selectedScoreboard;
  };
  
  const getScoreboardBySlug = (gameID, slug) => {
    const selectedGameScoreboards = getGameScoreboardsByID(gameID);
    const selectedScoreboard = selectedGameScoreboards.scoreboards?.find(
      (scoreboard) => {
        return scoreboard.slug === slug;
      }
    );
    return selectedScoreboard;
  };

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    setSelectedScoreboard(getGameScoreboardsByID(selectedGeneralStat));
  }, [selectedGeneralStat]);

  return (
    <>
      {selectedScoreboard && (
        <>
          {selectedGame && (
            <Structure title="Scoreboards">
              <Ad width="1005" height="300" />

              <section className="mb-4">
                {selectedTab !== "all" ? (
                  <div className="header header-tertiary surface sm:rounded-lg">
                    <div className="header-content">
                      <div className="header-image">
                        <img src={getScoreboardBySlug(0, selectedTab).logo} alt={getScoreboardBySlug(0, selectedTab).name} />
                      </div>
                      <div className="header-body">
                        <h1 className="sr-only">{getScoreboardBySlug(0, selectedTab).name}</h1>
                        <p className="text-ui-300 max-w-[70ch] mt-4">
                          {getScoreboardBySlug(0, selectedTab).description}
                        </p>
                      </div>
                    </div>
                    <div className="header-bg">
                    {getScoreboardBySlug(0, selectedTab).video ? (
                      <div className="absolute z-0 inset-0 grid place-content-center">
                        <video
                          autoPlay
                          playsInline
                          loop
                          muted
                          preload
                          width="100%"
                          height="100%"
                          className="w-full"
                          src={getScoreboardBySlug(0, selectedTab).video}
                        ></video>
                      </div>
                    ) : (
                      <img src={getScoreboardBySlug(0, selectedTab).background} />
                    )}
                      
                    </div>
                  </div>
                ) : (
                  <div className="header surface sm:rounded-lg">
                    <div className="header-content">
                      <div className="header-body">
                        <h1>Scoreboards</h1>
                        <p className="text-ui-300 max-w-[70ch] mt-4">
                          Measure yourself with other Strydarians.
                        </p>
                      </div>
                    </div>
                    <div className="header-bg">
                      <img src="https://res.cloudinary.com/gloot/image/upload/v1679766103/Stryda/illustrations/Scoreboard_bg.jpg" />
                    </div>
                  </div>
                )}
              </section>

              {isEmpty ? (
                <></>
              ) : (
                <>
                  <nav className="mt-4">
                    <ul className="tabs border-b border-ui-700">
                      <li>
                        <Link href={`/prototype/valorant/scoreboards`}>
                          <a
                            className={`${
                              selectedTab === "all" ? "is-active" : ""
                            }`}
                          >
                            <span>All</span>
                          </a>
                        </Link>
                      </li>
                      {getGameScoreboardsByID(0)?.scoreboards?.map(
                        (item, itemIndex) => (
                          <li key={itemIndex}>
                            <Link
                              href={`/prototype/valorant/scoreboards?tab=${item.slug}`}
                            >
                              <button
                                type="button"
                                className={`${
                                  selectedTab === item.slug ? "is-active" : ""
                                }`}
                              >
                                <span>{item.name}</span>
                              </button>
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  </nav>

                  <section className="py-4">
                    {selectedTab !== "all" ? (
                      <TabScoreboard
                        scoreboard={getScoreboardBySlug(0, selectedTab)}
                      />
                    ) : (
                      <TabScoreboardsOverview />
                    )}
                  </section>
                </>
              )}
            </Structure>
          )}
        </>
      )}
    </>
  );
}
