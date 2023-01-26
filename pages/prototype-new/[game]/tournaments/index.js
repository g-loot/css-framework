import React, { useEffect, useState } from "react";

import Ad from "../../../../components/Ad/Ad";
import Countdown from "../../../../components/Countdown/Countdown";
import Link from "next/link";
import PrototypeStructure from "../../../../components/PrototypeNew/PrototypeStructure";
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
  const defaultTab = "active";
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
      <PrototypeStructure title="Ladders">
        <Ad width="1005" height="300" />

        {selectedGame && (
          <>
            <section className="header surface sm:rounded-lg mb-4">
              <div className="header-content">
                <div className="header-image">
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1657888944/Marketing/2022_prototype/Logo/samesize-tournaments.svg"
                    alt="Tournaments"
                  />
                </div>
                <div className="header-body">
                  <h1 className="h3 mb-2">
                    {selectedGame.name} tournaments
                  </h1>
                  <p className="text-ui-300 max-w-[45ch] mb-4">
                    Compete in esports tournaments in your favorite games!
                    Invite your friends and compete for bragging rights, prizes,
                    or just for fun.
                  </p>
                  {selectedGame.needsSteam && (
                    <Link
                      href={`/prototype-new/profile/settings${prototype.getURLparams()}`}
                    >
                      <button
                        type="button"
                        className="button button-sm button-secondary"
                      >
                        <span className="icon icon-steam" />
                        <span>Steam required</span>
                      </button>
                    </Link>
                  )}
                </div>
              </div>
              <div className="header-meta justify-end items-end p-3 text-0">
                <span className="icon icon-adult-content text-3xl" />
              </div>
              <div className="header-bg">
                <img src={selectedGame.assets.heroTournament} />
              </div>
            </section>

            <nav>
              <ul className="tabs border-b border-ui-700">
                {TabsItems.map((item, itemIndex) => (
                  <li key={item}>
                    <Link
                      href={`/prototype-new/${game}/tournaments?tab=${item.url}${prototype.getURLparams("&")}`}
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
