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

export default function Home() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const hasAds = query.ads === "true" ? true : false;
  const { game } = router.query;
  const { tab } = router.query;
  const defaultTab = "missions";
  const selectedTab = tab ? tab : defaultTab;

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game]);

  return (
    <>
      <PrototypeStructure title="Missions">
        <Ad width="1005" height="124" />

        {selectedGame && (
          <>
            <section className="relative surface sm:rounded-lg overflow-hidden mb-4">
              <div className="relative z-10 grid grid-cols-8 gap-4 items-center min-h-[250px]">
                <div className="col-span-8 md:col-span-4 xl:col-span-3 flex flex-col justify-between items-center py-8">
                  <div className="absolute top-0 left-0 py-2 px-4">
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                      <ol>
                        <li
                          className="animate-slide-in-top animate-delay"
                          style={{ "--delay": "calc(0 * 0.05s)" }}
                        >
                          <Link
                            href={`/prototype/home${hasAds ? "?ads=true" : ""}`}
                          >
                            <a href="#">
                              <span className="icon icon-20 icon-home-2" />
                              <span>Home</span>
                            </a>
                          </Link>
                        </li>
                        <li
                          className="animate-slide-in-top animate-delay"
                          style={{ "--delay": "calc(1 * 0.05s)" }}
                        >
                          <div>
                            <span>Missions</span>
                          </div>
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1657888944/Marketing/2022_prototype/Logo/samesize-missions.svg"
                    width="400"
                    height="auto"
                    alt=""
                  />
                </div>
                <div className="col-span-8 md:col-span-4 xl:col-span-3 flex flex-col justify-center items-center md:items-start text-center md:text-left flex-1 pl-8 md:pl-0 pr-8 py-0 md:py-4 xl:py-4">
                  <h1 className="text-4xl mb-2 leading-none">
                    {selectedGame.name} Missions
                  </h1>
                  <p className="text-ui-300 max-w-[70ch] mb-4">
                    Play G-Loot Missions in-game, gather XP, and earn Mission
                    Rewards. You can complete the Daily Missions in any game.
                  </p>
                  <button
                    type="button"
                    className="button button-sm button-secondary"
                  >
                    <span>Tracker required</span>
                  </button>
                </div>
                <div className="col-span-8 xl:col-span-2 flex flex-col items-center justify-center gap-4">
                  <div className="w-full flex flex-col justify-center items-center gap-2 pl-4 xl:pl-0 py-4 pr-4">
                    <div className="flex items-end gap-4 leading-tight">
                      <div className="text-xl xl:text-4xl font-headings font-bold italic text-main">
                        2/3
                      </div>
                      <div className="xl:mb-2">
                        <div className="text-xl font-headings font-bold italic text-ui-200 uppercase">
                          Daily missions completed
                        </div>
                      </div>
                    </div>
                    <ul className="step step-primary step-sm w-full max-w-sm mx-auto">
                      <li>
                        <a href="#">
                          <i />
                          <div></div>
                          <span />
                        </a>
                      </li>
                      <li className="is-active">
                        <a href="#">
                          <i />
                          <div></div>
                          <span />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i />
                          <div></div>
                          <span />
                        </a>
                      </li>
                    </ul>
                    <p className="text-ui-200 text-sm text-center my-4 leading-tight">
                      You can complete the daily missions in any game.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="absolute z-0 right-0 inset-y-0 w-full xl:w-2/3 animate-slide-in-right animate-delay"
                style={{ "--delay": "calc(1 * 0.05s)" }}
              >
                <div className="absolute z-10 inset-0 bg-gradient-to-r from-ui-800 via-ui-800/95 to-ui-800/75"></div>
                <img
                  className="absolute z-0 object-right object-cover xl:object-cover inset-0 w-full h-full"
                  src={selectedGame.assets.heroMission}
                />
              </div>
            </section>

            <nav>
              <ul className="tabs border-b border-ui-700">
                {TabsItems.map((item, itemIndex) => (
                  <li key={item}>
                    <Link
                      href={`/prototype/${game}/missions${
                        hasAds ? "?ads=true&" : ""
                      }${hasAds ? "&" : "?"}tab=${item.url}`}
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
              {TabsItems.map((item) => {
                if (item.url === selectedTab) {
                  return React.createElement(item.component);
                }
              })}
            </section>
          </>
        )}
      </PrototypeStructure>
    </>
  );
}
