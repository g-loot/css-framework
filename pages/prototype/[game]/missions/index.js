import React, { useEffect, useState } from "react";

import Ad from "../../../../components/Ad/Ad";
import Link from "next/link";
import PrototypeStructure from "../../../../components/Prototype/PrototypeStructure";
import TabMissionsHowItWorks from "./tab-howitworks";
import TabMissionsMissions from "./tab-missions";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";

const TabsItems = [
  {
    label: "Missions & rewards",
    url: "missions",
    component: TabMissionsMissions,
  },
  {
    label: "How it works",
    url: "how-it-works",
    component: TabMissionsHowItWorks,
  },
];

export default function Missions() {
  const router = useRouter();
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const { game } = router.query;
  const { tab } = router.query;
  const defaultTab = "missions";
  const selectedTab = tab ? tab : defaultTab;

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game, prototype]);
  
  useEffect(() => {
    if(selectedGame != null) {
      prototype.defineDefaultGameID(selectedGame.id);
    }
  }, [selectedGame]);

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
                    src="https://res.cloudinary.com/gloot/image/upload/v1672302411/Stryda/logos/stryda-logo-missions.svg"
                    alt="Missions"
                  />
                </div>
                <div className="header-body">
                  <h1 className="h3 mb-2">
                    {selectedGame.name} Missions
                  </h1>
                  <p className="text-ui-300 max-w-[70ch] mb-4">
                    Play Stryda Missions in-game, gather XP, and earn Mission
                    Rewards. You can complete the Daily Missions in any game.
                  </p>
                  <button
                    type="button"
                    className="button button-sm button-secondary"
                  >
                    <span>Tracker required</span>
                  </button>
                </div>
              </div>
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
              <div className="header-bg">
                <img src={selectedGame.assets.heroMission} />
              </div>
            </section>
            <nav>
              <ul className="tabs border-b border-ui-700">
                {TabsItems.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href={`/prototype/${game}/missions?tab=${item.url}${prototype.getURLparams("&")}`}
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
                  return React.createElement(item.component, { key: itemIndex })
                }
              })}
            </section>
          </>
        )}
      </PrototypeStructure>
    </>
  );
}
