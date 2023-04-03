import React, { useEffect, useState, useContext } from "react";
import { UiContext } from "../../../../contexts/ui";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";

import { DataScoreboards } from "../../../../mock-data/data-scoreboards";
import Link from "next/link";
import ScoreboardFilter from "./components/scoreboardFilter";
import Avatar from "../../../../components/Avatar/Avatar";
import Tooltip from "../../../../components/Tooltip/Tooltip";

export default function TabScoreboardsOverview() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const isEmpty = query.empty === "true" ? true : false;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [isLoading]);

  const getGameScoreboardsByID = (id) => {
    return DataScoreboards.find((general) => {
      return general.id === parseInt(id);
    });
  };

  return (
    <>
      {isLoading ? (
        <section className="grid lg:grid-cols-2 gap-4">
          <div className="surface rounded is-loading aspect-cover" />
          <div className="surface rounded is-loading aspect-cover" />
          <div className="surface rounded is-loading aspect-cover" />
          <div className="surface rounded is-loading aspect-cover" />
        </section>
      ) : (
        <section className="grid xl:grid-cols-2 gap-4">
          {getGameScoreboardsByID(0).scoreboards?.map((item, itemIndex) => (
            <Link
              key={itemIndex}
              href={`/prototype/valorant/scoreboards?tab=${
                item.slug
              }${prototype.getURLparams()}`}
            >
              <div
                className="surface sm:rounded interactive animate-slide-in-bottom animate-delay"
                style={{
                  "--delay": "calc((" + itemIndex + " + 5) * 0.05s)",
                }}
              >
                <div className="relative rounded-t aspect-landscape grid place-content-center overflow-hidden">
                  <h3 className="sr-only">{item.name}</h3>
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="h-24 w-auto relative z-20"
                  />
                  <span className="absolute z-10 inset-0 bg-ui-900/80" />
                  <img
                    src={item.background}
                    alt=""
                    className="absolute z-0 inset-0 object-cover"
                  />
                </div>
                <div className="py-3 flex items-start justify-between gap-3 p-3">
                  <ul className="flex-1 flex gap-x-2 gap-y-1 flex-wrap whitespace-nowrap leading-none">
                    {item.filters?.map((item, itemIndex) => (
                      <ScoreboardFilter
                        id={item.id}
                        value={item.value}
                        key={itemIndex}
                      />
                    ))}
                  </ul>
                  <Link
                    href={`/prototype/valorant/scoreboards?tab=${
                      item.slug
                    }${prototype.getURLparams()}`}
                  >
                    <button
                      type="button"
                      className="button button-tertiary rounded-full"
                    >
                      <span className="icon icon-preferences" />
                    </button>
                  </Link>
                </div>
                <ul className="border-y border-ui-600">
                  {item.isEligible ? (
                    <li className="item bg-ui-700">
                      <div className="w-9 text-center">
                        <span className="text-ui-100">
                          {item.scores.placement}
                        </span>
                      </div>
                      <div className="item-image">
                        <Link
                          href={`/prototype/profile/${1}${prototype.getURLparams()}`}
                        >
                          <Avatar
                            id={1}
                            hasTooltip={true}
                            hasTooltipXP={false}
                            size="avatar-tiny"
                          />
                        </Link>
                      </div>
                      <div className="item-body">
                        <Link
                          href={`/prototype/profile/${1}${prototype.getURLparams()}`}
                        >
                          <div className="item-title interactive truncate ">
                            <span
                              className={`${
                                prototype.getUserByID(1)?.isYou
                                  ? "text-main font-bold"
                                  : ""
                              } ${
                                prototype.getUserByID(1)?.isPremium
                                  ? "text-premium-500"
                                  : ""
                              }`}
                            >
                              {prototype.getUserByID(1)?.clan && (
                                <>
                                  &#91;
                                  {
                                    prototype.getClanByID(
                                      prototype.getUserByID(1)?.clan
                                    )?.tag
                                  }
                                  &#93;{" "}
                                </>
                              )}
                              {prototype.getUserByID(1)?.nickname}
                            </span>
                          </div>
                        </Link>
                      </div>
                      <div className="item-body text-center">
                        <Tooltip tooltip={`Ascendant`}>
                          <img
                            className="h-6"
                            src="https://res.cloudinary.com/gloot/image/upload/v1671535680/Stryda/stats/valorant/rank-acendant.webp"
                            height="auto"
                            width="auto"
                            alt=""
                          />
                        </Tooltip>
                      </div>
                      <div className="item-actions w-20 text-right">
                        <div>
                          {item.scores?.max}
                          {item.scores?.label}
                        </div>
                      </div>
                    </li>
                  ) : (
                    <li className="item bg-ui-700">
                      <div className="w-9 text-center">
                        <span className="text-ui-100">-</span>
                      </div>
                      <div className="item-image">
                        <Avatar id={1} hasLevel={false} size="avatar-tiny" />
                      </div>
                      <div className="item-body">
                        <div className="item-title text-ui-300">
                          You are not eligible for this leaderboard
                        </div>
                      </div>
                      <div className="item-actions">
                        <div>
                          <Tooltip
                            tooltip={
                              `This is what you have to do to join this
                              leaderboard`
                            }
                          >
                            <button className="text-ui-300 text-0">
                              <span className="icon icon-16 icon-c-info" />
                            </button>
                          </Tooltip>
                        </div>
                      </div>
                    </li>
                  )}
                </ul>
                <div className="p-2 pl-5 text-sm text-right text-ui-400 uppercase flex items-baseline justify-between">
                  <span>#</span>
                  <span>{item.scores?.objective}</span>
                </div>
                <ul className="border-t border-ui-700">
                  {item.players?.slice(0, 5).map((player, playerIndex) => (
                    <li key={playerIndex} className="item">
                      <div className="w-9 text-center">
                        <span
                          className={`${
                            playerIndex === 0 ? "text-gold-500" : ""
                          }${playerIndex === 1 ? "text-silver-500" : ""} ${
                            playerIndex === 2 ? "text-bronze-500" : ""
                          } ${playerIndex > 2 ? "text-ui-300" : ""}`}
                        >
                          {playerIndex + 1}
                        </span>
                      </div>
                      <div className="item-image">
                        <Link
                          href={`/prototype/profile/${player}${prototype.getURLparams()}`}
                        >
                          <Avatar
                            id={player}
                            hasTooltip={true}
                            hasTooltipXP={false}
                            size="avatar-tiny"
                          />
                        </Link>
                      </div>
                      <div className="item-body">
                        <Link
                          href={`/prototype/profile/${player}${prototype.getURLparams()}`}
                        >
                          <div className="item-title interactive truncate">
                            <span
                              className={`${
                                prototype.getUserByID(player)?.isYou
                                  ? "text-main font-bold"
                                  : ""
                              } ${
                                prototype.getUserByID(player)?.isPremium
                                  ? "text-premium-500"
                                  : ""
                              }`}
                            >
                              {prototype.getUserByID(player)?.clan && (
                                <>
                                  &#91;
                                  {
                                    prototype.getClanByID(
                                      prototype.getUserByID(player)?.clan
                                    )?.tag
                                  }
                                  &#93;{" "}
                                </>
                              )}
                              {prototype.getUserByID(player)?.nickname}
                            </span>
                          </div>
                        </Link>
                      </div>
                      <div className="item-body text-center">
                        <Tooltip tooltip={`Ascendant`}>
                          <img
                            className="h-6"
                            src="https://res.cloudinary.com/gloot/image/upload/v1671535680/Stryda/stats/valorant/rank-acendant.webp"
                            height="auto"
                            width="auto"
                            alt=""
                          />
                        </Tooltip>
                      </div>
                      <div className="item-actions w-20 text-right">
                        <div>
                          {item.scores?.max - playerIndex}
                          {item.scores?.label}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="p-2 text-center border-t border-ui-700">
                  <Link
                    href={`/prototype/valorant/scoreboards?tab=${
                      item.slug
                    }${prototype.getURLparams()}`}
                  >
                    <button
                      type="button"
                      className="button button-secondary button-sm"
                    >
                      <span>View full leaderboard</span>
                    </button>
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </section>
      )}
    </>
  );
}
