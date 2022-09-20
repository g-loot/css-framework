import React, { useEffect, useState } from "react";

import Ad from "../../../../components/Ad/Ad";
import Countdown from "../../../../components/Countdown/Countdown";
import Link from "next/link";
import PrototypeStructure from "../../../../components/Prototype/PrototypeStructure";
import TabBrawlsClanLeaderboard from "./tab-clanleaderboards";
import TabBrawlsHowItWorks from "./tab-howitworks";
import TabBrawlsRewards from "./tab-rewards";
import TabBrawlsSoloLeaderboards from "./tab-sololeaderboards";
import TabBrawlsYourBrawlMatches from "./tab-yourbrawlmatches";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";

const TabsItems = [
  {
    label: "Your Brawl Matches",
    url: "your-matches",
    component: TabBrawlsYourBrawlMatches,
  },
  {
    label: "Solo Leaderboards",
    url: "solo-leaderboard",
    component: TabBrawlsSoloLeaderboards,
  },
  {
    label: "Clan Leaderboard",
    url: "clan-leaderboard",
    component: TabBrawlsClanLeaderboard,
  },
  {
    label: "Rewards",
    url: "rewards",
    component: TabBrawlsRewards,
  },
  {
    label: "How it works",
    url: "how-it-works",
    component: TabBrawlsHowItWorks,
  },
];
const TabsItemsNoClan = [
  {
    label: "Your Brawl Matches",
    url: "your-matches",
    component: TabBrawlsYourBrawlMatches,
  },
  {
    label: "Solo Leaderboards",
    url: "solo-leaderboard",
    component: TabBrawlsSoloLeaderboards,
  },
  {
    label: "Rewards",
    url: "rewards",
    component: TabBrawlsRewards,
  },
  {
    label: "How it works",
    url: "how-it-works",
    component: TabBrawlsHowItWorks,
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
  const { brawl_id } = router.query;
  const defaultTab = "your-matches";
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
      <PrototypeStructure title="Brawls">
        <Ad width="1005" height="300" />

        {selectedGame && (
          <>
            <section className="header surface sm:rounded-lg mb-4">
              <div className="header-content">
                <div className="header-image">
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1657888944/Marketing/2022_prototype/Logo/samesize-brawl.svg"
                    width="400"
                    height="auto"
                    alt=""
                  />
                  {prototype.getBrawlByID(game, brawl_id).sponsor && (
                    <>
                      <p className="font-headings font-bold italic text-xl mb-2">
                        Sponsored by
                      </p>
                      <img
                        className="max-w-[125px] max-h-[125px] w-auto h-auto"
                        src={prototype.getBrawlByID(game, brawl_id).sponsor}
                        alt="sponsor"
                      />
                    </>
                  )}
                </div>
                <div className="header-body">
                  <h1 className="text-4xl mb-2 leading-none">
                    {prototype.getBrawlByID(game, brawl_id).name}
                  </h1>
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
                      href={`/prototype/profile/settings${prototype.getURLparams()}`}
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
                <img
                  src={prototype.getBrawlByID(game, brawl_id).cover}
                  alt="Brawls"
                />
              </div>
            </section>

            <nav>
              <ul className="tabs border-b border-ui-700">
                {prototype.getBrawlByID(game, brawl_id).clan && (
                  <>
                    {TabsItems.map((item, itemIndex) => (
                      <li key={item}>
                        <Link
                          href={`/prototype/${game}/brawls/${brawl_id}?tab=${item.url}${prototype.getURLparams("&")}`}
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
                  </>
                )}
                {!prototype.getBrawlByID(game, brawl_id).clan && (
                  <>
                    {TabsItemsNoClan.map((item, itemIndex) => (
                      <li key={item}>
                        <Link
                          href={`/prototype/${game}/brawls/${brawl_id}?tab=${item.url}${prototype.getURLparams("&")}`}
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
                  </>
                )}
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
