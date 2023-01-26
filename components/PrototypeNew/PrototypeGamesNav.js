import React, { useRef, useState } from "react";

import Link from "next/link";
import PrototypeGamesNavItem from "./PrototypeGamesNavItem";
import { usePrototypeData } from "../../contexts/prototype";
import { useRouter } from "next/router";

const SubMenuItem = [
  {
    url: "missions",
    label: "Missions",
  },
  {
    url: "ladders",
    label: "Ladders",
  },
  {
    url: "tournaments",
    label: "Tournaments",
  },
  {
    url: "stats",
    label: "Stats",
  },
];

export default function PrototypeGamesNav({ children }) {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const { game } = router.query;
  const [isActive, setActive] = useState(false);
  const elementRef = useRef(null);
  const hasAds = query.ads === "true" ? true : false;

  var height = elementRef.current?.clientHeight;

  const handleToggle = (e) => {
    e.preventDefault();
    setActive(!isActive);
  };

  return (
    <>
      {prototype.games.map((item, itemIndex) => (
        <>
        {item.isFavorite && (
          <div
            className={`surface rounded-lg accordion accordion-sm accordion-halo accordion-halo-dimmed`}
            key={itemIndex}
          >
            <PrototypeGamesNavItem
              isopen={
                item.slug === game ? true : false
              }
              isselected={
                item.slug === game ? true : false
              }
              header={
                <>
                  <i
                    className={`bg-gradient-to-r ${
                      item.slug === "apexlegends"
                        ? "from-game-apexlegends/0 via-game-apexlegends to-game-apexlegends/0"
                        : ""
                    } ${
                      item.slug === "csgo"
                        ? "from-game-csgo/0 via-game-csgo to-game-csgo/0"
                        : ""
                    }  ${
                      item.slug === "dota2"
                        ? "from-game-dota2/0 via-game-dota2 to-game-dota2/0"
                        : ""
                    }  ${
                      item.slug === "leagueoflegends"
                        ? "from-game-leagueoflegends/0 via-game-leagueoflegends to-game-leagueoflegends/0"
                        : ""
                    }  ${
                      item.slug === "rocketleague"
                        ? "from-game-rocketleague/0 via-game-rocketleague to-game-rocketleague/0"
                        : ""
                    } ${
                      item.slug === "pubg"
                        ? "from-game-pubg/0 via-game-pubg to-game-pubg/0"
                        : ""
                    }  ${
                      item.slug === "valorant"
                        ? "from-game-valorant/0 via-game-valorant to-game-valorant/0"
                        : ""
                    }`}
                  />
                  <i
                    className={`bg-gradient-to-r ${
                      item.slug === "apexlegends"
                        ? "from-game-apexlegends/0 via-game-apexlegends to-game-apexlegends/0"
                        : ""
                    } ${
                      item.slug === "csgo"
                        ? "from-game-csgo/0 via-game-csgo to-game-csgo/0"
                        : ""
                    }  ${
                      item.slug === "dota2"
                        ? "from-game-dota2/0 via-game-dota2 to-game-dota2/0"
                        : ""
                    }  ${
                      item.slug === "leagueoflegends"
                        ? "from-game-leagueoflegends/0 via-game-leagueoflegends to-game-leagueoflegends/0"
                        : ""
                    }  ${
                      item.slug === "rocketleague"
                        ? "from-game-rocketleague/0 via-game-rocketleague to-game-rocketleague/0"
                        : ""
                    } ${
                      item.slug === "pubg"
                        ? "from-game-pubg/0 via-game-pubg to-game-pubg/0"
                        : ""
                    }  ${
                      item.slug === "valorant"
                        ? "from-game-valorant/0 via-game-valorant to-game-valorant/0"
                        : ""
                    }`}
                  />

                  <div className="item p-0">
                    <div className="item-image">
                      <div
                        className={`rounded h-8 w-8 flex items-center justify-center bg-gradient-to-b from-ui-900/50 to-ui-900/0 aspect-square text-game-${item.slug.replace(
                          /#|_/g,
                          ""
                        )}`}
                      >
                        <span
                          className={`icon icon-20 icon-game-${item.slug.replace(
                            /#|_/g,
                            ""
                          )}-symbol`}
                        />
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title uppercase">
                        {item.name}
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <span className="icon icon-24 icon-arrow-sm-down" />
                      </div>
                    </div>
                  </div>
                </>
              }
            >
              <ul className="menu menu-secondary">
                {SubMenuItem.map((subItem, subItemIndex) => (
                  <>
                    <li key={subItem}>
                      <Link
                        href={`/prototype/${item.slug}/${subItem.url}${prototype.getURLparams()}`}
                      >
                        <a
                          className={`${
                            router.pathname.includes(subItem.url) &&
                            item.slug === game
                              ? "is-active"
                              : ""
                          }`}
                        >
                          <span className="pl-9">{subItem.label}</span>
                        </a>
                      </Link>
                    </li>
                  </>
                ))}
              </ul>
            </PrototypeGamesNavItem>
          </div>
        )}
        </>
      ))}
    </>
  );
}

/*

 {PrototypeDataGames.map((game, gameIndex) => (
        <>
          <div className='' key={gameIndex}>
            {game.gameId}
          </div>
        </>
      ))}
      */
