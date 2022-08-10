import React, { useEffect, useState } from "react";

import Ad from "../../../../components/Ad/Ad";
import Countdown from "../../../../components/Countdown/Countdown";
import Link from "next/link";
import PrototypeStructure from "../../../../components/Prototype/PrototypeStructure";
import TabBrawlsHistory from "./tab-history";
import TabBrawlsHowItWorks from "./tab-howitworks";
import TabBrawlsOngoing from "./tab-brawlsongoing";
import TabBrawlsRules from "./tab-glootrules";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";

const TabsItems = [
  {
    label: "Brawls",
    url: "ongoing",
    component: TabBrawlsOngoing,
  },
  {
    label: "How it works",
    url: "how-it-works",
    component: TabBrawlsHowItWorks,
  },
  {
    label: "G-Loot rules",
    url: "rules",
    component: TabBrawlsRules,
  },
  {
    label: "Your Brawl history",
    url: "history",
    component: TabBrawlsHistory,
  },
];

export default function Home() {
  const router = useRouter();
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const { game } = router.query;
  const { hasAds } = router.query;
  const { tab } = router.query;
  const defaultTab = "ongoing";
  const selectedTab = tab ? tab : defaultTab;

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game]);

  return (
    <>
      <PrototypeStructure title="Brawls">
        <Ad width="1005" height="300" />
        {selectedGame && (
          <>
            <section className="relative surface sm:rounded-lg overflow-hidden mb-4">
              <div className="relative z-10 grid grid-cols-8 gap-4 items-flex min-h-[250px]">
                <div className="col-span-8 md:col-span-4 xl:col-span-3 flex flex-col justify-center items-center pt-14 pb-8 md:pt-8">
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
                            <span>Brawls</span>
                          </div>
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1657888944/Marketing/2022_prototype/Logo/samesize-brawl.svg"
                    width="400"
                    height="auto"
                    alt=""
                  />
                </div>
                <div className="col-span-8 md:col-span-4 xl:col-span-3 flex flex-col justify-center items-center md:items-start text-center md:text-left flex-1 pl-8 md:pl-0 pr-8 py-0 md:py-4 xl:py-4">
                  <h1 className="text-4xl mb-2 leading-none">Brawls</h1>
                  <p className="text-ui-300 max-w-[45ch] mb-4">
                    Use your stats to climb the Brawl leaderboard and win
                    prizes. No waiting, no dedicated servers. Play on your own
                    schedule!
                  </p>
                  <div className="flex flex-col md:flex-row gap-2">
                    <button
                      type="button"
                      className="button button-sm button-primary button-play"
                    >
                      <span className="icon icon-circle-caret-right" />
                      <span>Learn how to Brawl</span>
                    </button>
                    <Link
                      href={`/prototype/profile/settings${
                        hasAds ? "?ads=true" : ""
                      }`}
                    >
                      <button
                        type="button"
                        className="button button-sm button-secondary"
                      >
                        <span className="icon icon-steam" />
                        <span>Steam required</span>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="col-span-8 xl:col-span-2 flex flex-col xl:items-end justify-start gap-4">
                  <div className="p-2 bg-gradient-to-r from-ui-900/0 to-ui-900/50 flex gap-1 items-center justify-center xl:justify-end whitespace-nowrap">
                    <span className="font-headings font-bold italic text-ui-100 uppercase">
                      Time Left:
                    </span>
                    <span className="icon icon-clock text-main" />
                    <Countdown
                      additionalClassNames="flex items-baseline gap-0.5 font-headings font-bold italic uppercase text-main"
                      hasDays={true}
                      hasLabels={true}
                      hasSeconds={false}
                      separator=" • "
                      labelsAbbr={true}
                    ></Countdown>
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
                  src={selectedGame.assets.heroBrawl}
                />
              </div>
            </section>
            <nav>
              <ul className="tabs border-b border-ui-700">
                {TabsItems.map((item, itemIndex) => (
                  <li key={item}>
                    <Link
                      href={`/prototype/${game}/brawls${
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
