import React, { useEffect, useState } from "react";

import Ad from "../../../../components/Ad/Ad";
import Countdown from "../../../../components/Countdown/Countdown";
import Link from "next/link";
import PrototypeDataGames from '../../../../mock-data/games.json';
import PrototypeStructure from "../../../../components/Prototype/PrototypeStructure";
import TabTournamentsActive from "../tournaments/tab-active";
import TabTournamentsFinished from "../tournaments/tab-finished";
import TabTournamentsHowItWorks from "../tournaments/tab-howitworks";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";

const TabsItems = [
  {
    label: "Active tournaments",
    url: "active",
    component: TabTournamentsActive,
  },
  {
    label: "Finished tournaments",
    url: "finished",
    component: TabTournamentsFinished,
  },
  {
    label: "How it works",
    url: "how-it-works",
    component: TabTournamentsHowItWorks,
  }
];

export default function Home() {
  const router = useRouter();
  const prototypeData = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const hasAds = router.ads === "true" ? true : false;
  const { game } = router.query;
  const { tab } = router.query;
  const defaultTab = "active";
  const selectedTab = tab ? tab : defaultTab;

  useEffect(() => {
    setSelectedGame(prototypeData.getGameBySlug(game));
  }, [game]);

  return (
    <>
      <PrototypeStructure title="Brawls">
        <Ad width="1005" height="124" />

        {selectedGame && (
          <>
            <section className="relative surface sm:rounded-lg overflow-hidden mb-4">
              <div className="relative z-10 grid grid-cols-8 gap-4 items-flex min-h-[250px]">
                <div className="col-span-8 md:col-span-4 xl:col-span-3 flex flex-col justify-center items-center py-8">
                  <div className="absolute top-0 left-0 py-2 px-4">
                    <nav className="flex" aria-label="Breadcrumb">
                      <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center animate-slide-in-top animate-delay"
                  style={{ "--delay": "calc( 1 * 0.05s)" }}>
                          <Link href="/prototype/home">
                            <a href="#" className="inline-flex gap-2 items-center text-sm text-ui-300 hover:text-ui-100 active:opacity-50 focus-visible:text-main focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-1 focus-visible:outline-main transition-colors duration-75">
                              <span className="icon icon-20 icon-home-2"></span>
                              <span>Home</span>
                            </a>
                          </Link>
                        </li>
                        <li aria-current="page">
                          <div className="flex items-center animate-slide-in-top animate-delay"
                  style={{ "--delay": "calc( 3 * 0.05s)" }}>
                            <span className="icon icon-20 text-ui-300 icon-arrow-sm-right"></span>
                            <span className="ml-1 text-sm text-ui-300 md:ml-2">Tournaments</span>
                          </div>
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1657888944/Marketing/2022_prototype/Logo/samesize-tournaments.svg"
                    width="400"
                    height="auto"
                    alt=""
                  />
                </div>
                <div className="col-span-8 md:col-span-4 xl:col-span-3 flex flex-col justify-center items-center md:items-start text-center md:text-left flex-1 pl-8 md:pl-0 pr-8 py-0 md:py-4 xl:py-4">
                  <h1 className="text-3xl mb-2 leading-none">
                    {selectedGame.name} tournaments
                  </h1>
                  <p className="text-ui-300 max-w-[45ch] mb-4">
                    Compete in esports tournaments in your favorite games! Invite your friends and compete for bragging rights, prizes, or just for fun.
                  </p>
                </div>
                <div className="col-span-8 xl:col-span-2 flex flex-col xl:items-end justify-start gap-4">
                  <div className="p-2 bg-gradient-to-r from-ui-900/0 to-ui-900/50 flex gap-1 items-center justify-center xl:justify-end whitespace-nowrap">
                    <span className="font-headings italic text-ui-100 uppercase">Time Left:</span>
                    <span className="icon icon-clock text-main"></span>
                    <Countdown additionalClassNames="flex items-baseline gap-0.5 font-headings italic uppercase text-main" hasDays={true} hasLabels={true} hasSeconds={false} separator=" • " labelsAbbr={true}></Countdown>
                  </div>
                </div>
              </div>
              <div className="absolute z-0 right-0 inset-y-0 w-full xl:w-2/3 animate-slide-in-right animate-delay"
                style={{ "--delay": "calc( 1 * 0.05s)" }}>
                <div className="absolute z-10 inset-0 bg-gradient-to-r from-ui-800 via-ui-800/95 to-ui-800/75"></div>
                <img
                  className="absolute z-0 object-right-top object-cover xl:object-cover inset-0 w-full h-full"
                  src={selectedGame.assets.heroTournament}
                />
              </div>
            </section>

            <nav>
              <ul className="tabs border-b border-ui-700">
                {TabsItems.map((item, itemIndex) => (
                  <li key={item}>
                    <Link
                      href={`/prototype/${game}/tournaments${hasAds ? "?ads=true&" : ""}${hasAds ? "&" : "?"}tab=${item.url}`}
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
          </>
        )}
        
      </PrototypeStructure>
    </>
  );
}
