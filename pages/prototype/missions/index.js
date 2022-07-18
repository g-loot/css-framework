import Ad from "../../../components/Ad/Ad";
import Link from "next/link";
import PrototypeDataGames from "../../../mock-data/games.json";
import PrototypeStructure from "../../../components/Prototype/PrototypeStructure";
import React from "react";
import TabMissionsHowItWorks from "./tab-howitworks";
import TabMissionsMissions from "./tab-missions";
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
  const { query } = useRouter();
  const hasAds = query.ads === "true" ? true : false;
  const selectedGame = !query.game ? 0 : query.game;
  const defaultTab = "missions";
  const selectedTab = query.tab ? query.tab : defaultTab;

  return (
    <>
      <PrototypeStructure title="Missions">
        <Ad width="1005" height="124" />

        <section className="relative surface sm:rounded-lg overflow-hidden mb-4">
          <div className="relative z-10 grid grid-cols-8 gap-4 items-center min-h-[250px]">
            <div className="col-span-8 md:col-span-4 xl:col-span-3 flex flex-col justify-between items-center py-8">
              <img
                src="https://res.cloudinary.com/gloot/image/upload/v1657888944/Marketing/2022_prototype/Logo/samesize-missions.svg"
                width="400"
                height="auto"
                alt=""
              />
            </div>
            <div className="col-span-8 md:col-span-4 xl:col-span-3 flex flex-col justify-center items-center md:items-start text-center md:text-left flex-1 pl-8 md:pl-0 pr-8 py-0 md:py-4 xl:py-4">
              <h1 className="text-3xl mb-2 leading-none">
                {PrototypeDataGames[selectedGame].name} Missions
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
                  <div className="text-xl xl:text-4xl font-headings italic text-main">
                    2/3
                  </div>
                  <div className="xl:mb-2">
                    <div className="text-xl font-headings italic text-ui-200 uppercase">
                      Daily missions completed
                    </div>
                  </div>
                </div>
                <ul className="step step-primary step-sm w-full max-w-sm mx-auto">
                  <li>
                    <a href="#">
                      <i></i>
                      <div></div>
                      <span></span>
                    </a>
                  </li>
                  <li className="is-active">
                    <a href="#">
                      <i></i>
                      <div></div>
                      <span></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i></i>
                      <div></div>
                      <span></span>
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
            style={{ "--delay": "calc( 1 * 0.05s)" }}
          >
            <div className="absolute z-10 inset-0 bg-gradient-to-r from-ui-800 via-ui-800/95 to-ui-800/75"></div>
            <img
              className="absolute z-0 object-right-top object-cover xl:object-cover inset-0 w-full h-full"
              src={PrototypeDataGames[selectedGame].assets.heroMission}
            />
          </div>
        </section>
        <nav>
          <ul className="tabs">
            {TabsItems.map((item, itemIndex) => (
              <li key={item}>
                <Link
                  href={`${hasAds ? "?ads=true&" : ""}${hasAds ? "&" : "?"}${
                    selectedGame ? "game=" + selectedGame + "&" : "?"
                  }tab=${item.url}`}
                >
                  <a
                    className={`${selectedTab === item.url ? "is-active" : ""}`}
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
      </PrototypeStructure>
    </>
  );
}
