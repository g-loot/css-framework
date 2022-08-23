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
            <section className="header surface sm:rounded-lg mb-4">
              <div className="header-breadcrumbs">
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
              <div className="header-content">
                <div className="header-image">
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1657888944/Marketing/2022_prototype/Logo/samesize-brawl.svg"
                    width="400"
                    height="auto"
                    alt=""
                  />
                </div>
                <div className="header-body">
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
              </div>
              <div className="header-meta justify-start pr-0">
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
              <div className="header-bg">
                <img src={selectedGame.assets.heroBrawl} alt="Brawls" />
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
