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

  return (
    <Structure title="Search">
      <Ad width="1005" height="300" />

      <section className="mb-2 px-4 md:px-1">
        <h1 className="mt-8">
          Search {filter && <>results for &#34;{filter}&#34;</>}
        </h1>
        <div className="form-group mt-4">
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
      </section>

      <nav>
        <ul className="tabs border-b border-ui-700">
          {TabsItems.map((item, itemIndex) => (
            <li key={item}>
              <Link
                href={`/stryda/search/?tab=${item.url}${prototype.getURLparams(
                  "&"
                )}`}
              >
                <a className={`${selectedTab === item.url ? "is-active" : ""}`}>
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

      <section className="py-4">
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
