import React, { useRef, useState } from "react";

import Accordion from "../Accordion/Accordion";
import Link from "next/link";
import PrototypeGamesNavItem from "./PrototypeGamesNavItem";
import { usePrototypeData } from "../../contexts/prototype";
import { useRouter } from "next/router";

const SubMenuItem = [
  {
    url: "missions",
    icon: "icon-missions",
    label: "Missions",
  },
  {
    url: "brawls",
    icon: "icon-brawl",
    label: "Brawls",
  },
  {
    url: "tournaments",
    icon: "icon-showdown",
    label: "Tournaments",
  },
  {
    url: "stats",
    icon: "icon-statistics",
    label: "Stats",
  },
];

export default function PrototypeGamesNavNew({ children }) {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const { game } = router.query;
  const [isActive, setActive] = useState(false);
  const elementRef = useRef(null);

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
              className={`accordion border-b border-ui-700 rounded-none`}
              key={itemIndex}
            >
              <PrototypeGamesNavItem
                isopen={item.id === prototype.defaultGameID ? true : false}
                gameID={item.id}
                gameSlug={item.slug}
                isselected={item.slug === game ? true : false}
                border={false}
                header={
                  <>
                    <div className="item px-6">
                      <div className="item-image">
                        <div className="avatar avatar-simple avatar-xs">
                          <div>
                            <span
                              className={`icon icon-20 text-game-${item.slug.replace(
                                /#|_/g,
                                ""
                              )} icon-game-${item.slug.replace(
                                /#|_/g,
                                ""
                              )}-symbol`}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="item-body">
                        <div className={`item-title text-sm uppercase ${item.slug === game ? "font-bold" : ""}`}>
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
                <ul className="menu menu-secondary menu-rounded px-4 pb-4">
                  {SubMenuItem.map((subItem, subItemIndex) => (
                    <>
                      <li key={subItem}>
                        <Link
                          href={`/prototype/${item.slug}/${
                            subItem.url
                          }${prototype.getURLparams()}`}
                        >
                          <a
                            className={`${
                              router.pathname.includes(subItem.url) &&
                              item.slug === game
                                ? "is-active"
                                : ""
                            }`}
                          >
                            <span className={`pl-3 pr-3 icon icon-20 ${subItem.icon}`} />
                            <span className="uppercase">{subItem.label}</span>
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
