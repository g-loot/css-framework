import React, { useEffect, useState, useContext } from "react";
import { UiContext } from "../../../../../contexts/ui";
import { usePrototypeData } from "../../../../../contexts/prototype";
import { useRouter } from "next/router";

import { DataScoreboards } from "../../../../../mock-data/data-scoreboards";
import ScoreboardFilterSelect from "../components/scoreboardFilterSelect";
import Accordion from "../../../../../components/Accordion/Accordion";
import Link from "next/link";
import Avatar from "../../../../../components/Avatar/Avatar";
import Tooltip from "../../../../../components/Tooltip/Tooltip";
import AchievementFrame from "../../../../../components/Achievements/AchievementFrame";
import AchievementIcon from "../../../../../components/Achievements/AchievementIcon";
import AvatarClan from "../../../../../components/Avatar/AvatarClan";

export default function TabScoreboard(props) {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const { scoreboard_id } = router.query;
  const isEmpty = query.empty === "true" ? true : false;
  const selectedScoreboard = props.scoreboard || null;
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

  function handleLoad() {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }

  const getScoreboardByID = (gameID, id) => {
    const selectedGameScoreboards = getGameScoreboardsByID(gameID);
    const selectedScoreboard = selectedGameScoreboards.scoreboards?.find(
      (scoreboard) => {
        return scoreboard.id === parseInt(id);
      }
    );
    return selectedScoreboard;
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

  return (
    <>
      {selectedScoreboard && (
        <>
          <section className="flex items-center gap-x-4 gap-y-2 mb-4 px-2 md:px-0 whitespace-nowrap overflow-x-auto scrollbar-hidden">
            {selectedScoreboard.filters?.map((item, itemIndex) => (
              <ScoreboardFilterSelect
                id={item.id}
                key={itemIndex}
                onLoad={handleLoad}
              />
            ))}
          </section>

          <section
            className={`pb-8 ${!isLoading ? 'animate-slide-in-bottom animate-delay' : ''}`}
            style={{ "--delay": "calc(1 * 0.05s)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="col-span-1 hidden lg:block pt-9 space-y-4">
                <div
                  className={`surface rounded text-center ${
                    isLoading ? "is-loading" : ""
                  }`}
                >
                  <p className="text-ui-300 p-3">Your placement</p>
                  <div className="border-t border-ui-700 space-y-2 p-3">
                    <h4>Top {selectedScoreboard.scores.top}%</h4>
                    <p className="text-ui-300">
                      #{selectedScoreboard.scores.placement}
                    </p>
                    <button
                      type="button"
                      className="button button-sm button-secondary w-full"
                    >
                      <span>Go to my position</span>
                    </button>
                  </div>
                </div>
                <div
                  className={`surface rounded text-center ${
                    isLoading ? "is-loading" : ""
                  }`}
                >
                  <p className="text-ui-300 p-3">Friends placement</p>
                  <ul className="border-t border-ui-700 child:flex child:justify-between child:py-2 child:px-3">
                    {prototype.getUserByID(1).friends.map((item, itemIndex) => (
                      <li key={itemIndex} className="even:bg-ui-700">
                        <span>
                          {prototype.getUserByID(item).clan && (
                            <>
                              &#91;
                              {
                                prototype.getClanByID(
                                  prototype.getUserByID(item).clan
                                )?.tag
                              }
                              &#93;{" "}
                            </>
                          )}
                          {prototype.getUserByID(item).nickname}
                        </span>
                        <span>
                          {selectedScoreboard.scores?.max - itemIndex}
                          {selectedScoreboard.scores?.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-span-1 lg:col-span-3">
                <div className="px-2 md:px-0">
                  <div className="item border-0 text-sm uppercase text-ui-300">
                    <div className="w-14" />
                    <div className="item-image w-9" />
                    <div className="item-body">Player</div>
                    <div className="item-body text-center">Rank</div>
                    <div className="item-actions w-20 text-right">
                      <div>
                        {selectedScoreboard.scores.objective}
                        {selectedScoreboard.scores.label}
                      </div>
                    </div>
                  </div>
                  {isLoading ? (
                    <ul className="items-spaced is-loading space-y-2">
                      {selectedScoreboard.players?.map((item, itemIndex) => (
                        <li key={itemIndex} className="item rounded">
                          <div className="item-image">
                            <div className="avatar avatar-circle avatar-xs">
                              <div />
                            </div>
                          </div>
                          <div className="item-body">
                            <div className="item-title">Loading</div>
                          </div>
                          <div className="item-body flex justify-around items-center">
                            <span className="text-ui-300 leading-none">
                              Loading
                            </span>
                            <div className="avatar avatar-squircle avatar-xs">
                              <div />
                            </div>
                          </div>
                          <div className="item-actions flex items-center gap-2">
                            <div>
                              <span className="icon icon-24 icon-arrow-sm-down" />
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="items-spaced space-y-2">
                      {selectedScoreboard.players?.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className={`item rounded ${
                            isLoading
                              ? ""
                              : "animate-slide-in-bottom animate-delay"
                          }`}
                          style={{
                            "--delay": "calc(" + itemIndex + " * 0.05s)",
                          }}
                        >
                          <div className="w-14 text-center px-2 flex items-center justify-center">
                            <span
                              className={`text-2xl  ${
                                itemIndex === 0 ? "text-gold-500" : ""
                              }${itemIndex === 1 ? "text-silver-500" : ""} ${
                                itemIndex === 2 ? "text-bronze-500" : ""
                              } ${itemIndex > 2 ? "text-ui-300" : ""}`}
                            >
                              {itemIndex + 1}
                            </span>
                            <div className="absolute">
                              <svg
                                className={`${
                                  itemIndex === 0 ? "fill-gold-500" : ""
                                }${itemIndex === 1 ? "fill-silver-500" : ""} ${
                                  itemIndex === 2 ? "fill-bronze-500" : ""
                                } ${itemIndex > 2 ? "hidden" : ""}`}
                                width="52"
                                height="30"
                                viewBox="0 0 52 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M11.7039 27.2265L7.12878 29.95L14.686 27.9073C15.3028 27.7406 15.866 27.409 16.3186 26.9461C16.7712 26.4831 17.0973 25.905 17.2638 25.2705L14.9254 24.8456C14.283 24.7288 13.701 24.3822 13.2816 23.867C12.8623 23.3518 12.6327 22.7008 12.6327 22.0282V0.950012L8.2045 17.6286L2.89837 11.1091L8.50356 23.6777L2 22.4956L11.7039 27.2265Z" />
                                <path d="M39.5599 27.2265L44.135 29.95L36.5778 27.9073C35.961 27.7406 35.3978 27.409 34.9452 26.9461C34.4926 26.4831 34.1665 25.905 34 25.2705L36.3383 24.8456C36.9808 24.7288 37.5628 24.3822 37.9822 23.867C38.4015 23.3518 38.6311 22.7008 38.6311 22.0282V0.950012L43.0593 17.6286L48.3654 11.1091L42.7602 23.6777L49.2638 22.4956L39.5599 27.2265Z" />
                              </svg>
                            </div>
                          </div>
                          <div className="item-image">
                            <Link
                              href={`/prototype/profile/${item}${prototype.getURLparams()}`}
                            >
                              <Avatar
                                id={item}
                                hasTooltip={true}
                                hasTooltipXP={false}
                              />
                            </Link>
                          </div>
                          <div className="item-body">
                            <Link
                              href={`/prototype/profile/${item}${prototype.getURLparams()}`}
                            >
                              <div className="item-title interactive">
                                <span
                                  className={`${
                                    prototype.getUserByID(item)?.isYou
                                      ? "text-main font-bold"
                                      : ""
                                  } ${
                                    prototype.getUserByID(item)?.isPremium
                                      ? "text-premium-500"
                                      : ""
                                  }`}
                                >
                                  {prototype.getUserByID(item)?.clan && (
                                    <>
                                      &#91;
                                      {
                                        prototype.getClanByID(
                                          prototype.getUserByID(item)?.clan
                                        )?.tag
                                      }
                                      &#93;{" "}
                                    </>
                                  )}
                                  {prototype.getUserByID(item)?.nickname}
                                </span>
                              </div>
                            </Link>
                          </div>
                          <div className="item-body text-center">
                            <Tooltip tooltip={`Ascendant`}>
                              <img
                                className="h-10"
                                src="https://res.cloudinary.com/gloot/image/upload/v1671535680/Stryda/stats/valorant/rank-acendant.webp"
                                height="auto"
                                width="auto"
                                alt=""
                              />
                            </Tooltip>
                          </div>
                          <div className="item-actions w-20 text-right">
                            <div>
                              {selectedScoreboard.scores?.max - itemIndex}
                              {selectedScoreboard.scores?.label}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {!isLoading && (
                  <div>
                    <div className="flex gap-2 justify-center items-center my-4">
                      <button
                        type="button"
                        onClick={handleLoad}
                        className="button button-ghost"
                      >
                        <span className="icon icon-arrow-up" />
                      </button>
                      <button
                        type="button"
                        onClick={handleLoad}
                        className="button button-ghost"
                      >
                        <span>Top 15</span>
                      </button>
                      <button
                        type="button"
                        className="button button-ghost is-active"
                      >
                        <span>My position</span>
                      </button>
                      <button
                        type="button"
                        onClick={handleLoad}
                        className="button button-ghost"
                      >
                        <span>Bottom 15</span>
                      </button>
                      <button
                        type="button"
                        onClick={handleLoad}
                        className="button button-ghost"
                      >
                        <span className="icon icon-arrow-down" />
                      </button>
                    </div>
                    <div className="text-center my-4 text-sm">
                      <div className="text-ui-400">
                        The leaderboard is updated every X minute,{" "}
                        <a href="#" className="link link-main">
                          reload the page
                        </a>{" "}
                        for an update
                      </div>
                      <div className="text-ui-300">
                        Leaderboard ID:{" "}
                        <span className="text-ui-100 font-bold">225VG19</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
