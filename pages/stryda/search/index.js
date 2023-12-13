import React, { useState, useEffect } from "react";

import Ad from "@/components/Ad/Ad";
import Link from "next/link";
import Structure from "@/pages/stryda/components/Structure";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import TabSearchPlayer from "./tab-searchplayer";
import TabSearchClan from "./tab-searchclan";

const TabsItems = [
  {
    label: "Players",
    url: "players",
    component: TabSearchPlayer,
  },
  {
    label: "Clans",
    url: "clans",
    component: TabSearchClan,
  },
];

function RandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Search() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const hasAds = query.ads === "true" ? true : false;
  const searchQuery = query.q || null;
  const { game } = router.query;
  const { tab } = router.query;
  const defaultTab = "players";
  const selectedTab = tab ? tab : defaultTab;
  const [filter, setFilter] = useState("");
  const modalRecruitPlayer = query.modalrecruit === "true" ? true : false;
  const modalJoinClan = query.modaljoin === "true" ? true : false;

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game]);

  useEffect(() => {
    if(searchQuery) {
      setFilter(searchQuery);
    }
  }, [searchQuery]);

  return (
    <Structure title="Search">
      <Ad width="1005" height="300" />

      <section className="mb-2 px-4 md:px-1 max-w-md mx-auto">
        <h1 className="text-7xl mt-8">
          Search {filter && <>results for &#34;{filter}&#34;</>}
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
          <div className="flex-1 form-group w-full">
            <div className="input-group">
              <span className="icon icon-zoom" />
              <input
                id="filter"
                name="filter"
                type="text"
                value={filter}
                placeholder="Search"
                autoFocus
                onChange={(event) => setFilter(event.target.value)}
              />
            </div>
          </div>
          <nav className="sticky z-40 mb-8 flex justify-start overflow-x-auto scrollbar-hidden px-4 md:px-0 bg-ui-900/95 border-b border-ui-700 top-12">
            <ul className="tabs">
              {TabsItems.map((item, itemIndex) => (
                <li key={item}>
                  <Link
                    href={`/stryda/search/?tab=${
                      item.url
                    }${prototype.getURLparams("&")}`}
                  >
                    <a
                      className={`${
                        selectedTab === item.url ? "is-active" : ""
                      }`}
                    >
                      <span>
                        {item.label}{" "}
                        {filter && (
                          <>
                            (
                            {RandomNumber(
                              100 - filter.length,
                              1000 - filter.length
                            )}
                            )
                          </>
                        )}
                      </span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <section className="py-4 max-w-md mx-auto">
        {filter || modalRecruitPlayer || modalJoinClan ? (
          <>
            {TabsItems.map((item, itemIndex) => {
              if (item.url === selectedTab) {
                return React.createElement(item.component, { key: itemIndex });
              }
            })}
          </>
        ) : (
          <></>
        )}
      </section>
    </Structure>
  );
}
