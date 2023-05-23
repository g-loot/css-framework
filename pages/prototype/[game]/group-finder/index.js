import React, { useEffect, useState } from "react";

import Ad from "../../../../components/Ad/Ad";
import Link from "next/link";
import PrototypeStructure from "../../../../components/Prototype/PrototypeStructure";
import TabGroupFinderFeed from "./tab-feed";
import TabGroupFinderMyDashboard from "./tab-mydashboard";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";

const TabsItems = [
  {
    label: "Feed",
    url: "feed",
    component: TabGroupFinderFeed,
  },
  {
    label: "My Dashboard",
    url: "mydashboard",
    component: TabGroupFinderMyDashboard,
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
  const defaultTab = "feed";
  const selectedTab = tab ? tab : defaultTab;

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game]);

  return (
    <>
      <PrototypeStructure title="Wallet">
        <Ad width="1005" height="300" />

        <section className="mb-4">
          <div className="relative surface sm:rounded-lg overflow-hidden p-4 lg:p-8 lg:min-h-[250px] lg:flex items-center">
            <div className="relative z-10">
              <h1>Group Finder</h1>
              <p className="text-ui-300 max-w-[70ch] mt-4">
                Find like-minded people among the Stryda community to play with.
              </p>
            </div>
            <div
              className="absolute hidden md:block z-0 right-0 inset-y-0 w-full animate-slide-in-right animate-delay"
              style={{ "--delay": "calc(1 * 0.05s)" }}
            >
              <div className="absolute z-10 inset-0 bg-gradient-to-r from-ui-800 via-ui-800/50 to-ui-800/0"></div>
              <img
                className="absolute z-0 object-right object-cover xl:object-cover inset-0 w-full h-full"
                src="https://res.cloudinary.com/gloot/image/upload/v1672215845/Stryda/illustrations/Wallet_bg.jpg"
              />
            </div>
          </div>
        </section>

        <nav className="border-b border-ui-700 flex items-center justify-between gap-4">
          <ul className="tabs">
            {TabsItems.map((item, itemIndex) => (
              <li key={item}>
                <Link
                  href={`/prototype/valorant/group-finder?tab=${
                    item.url
                  }${prototype.getURLparams("&")}`}
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
          <button type="button" className="button button-primary">
            <span className="icon icon-i-add" />
            <span>Add new post</span>
          </button>
        </nav>

        <section className="py-4">
          {TabsItems.map((item, itemIndex) => {
            if (item.url === selectedTab) {
              return React.createElement(item.component, { key: itemIndex });
            }
          })}
        </section>
      </PrototypeStructure>
    </>
  );
}
