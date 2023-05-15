import React, { useEffect, useState, useContext } from "react";
import { UiContext } from "../../../../../contexts/ui";
import { usePrototypeData } from "../../../../../contexts/prototype";
import { useRouter } from "next/router";

import { DataScoreboards } from "../../../../../mock-data/data-scoreboards";
import ScoreboardFilterSelect from "../components/scoreboardFilterSelect";
import Link from "next/link";
import Avatar from "../../../../../components/Avatar/Avatar";
import Tooltip from "../../../../../components/Tooltip/Tooltip";
import LeaderboardWings from "../../../../../components/LeaderboardWings/LeaderboardWings";

export default function TabScoreboard(props) {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const { scoreboard_id } = router.query;
  const empty = query.empty === "true" ? true : false;
  const selectedScoreboard = props.scoreboard || null;
  const [isEmpty, setIsEmpty] = useState(empty);
  const [isLoading, setIsLoading] = useState(true);
  const [isPremium, setIsPremium] = useState(false);

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

  function handleLoad(e) {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (e.value !== "All") {
        setIsPremium(true);
      } else {
        setIsPremium(false);
      }
      if (e.value === "Astra" || e.value === "Breach") {
        setIsEmpty(true);
      } else {
        setIsEmpty(false);
      }
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
                item={item}
                key={itemIndex}
                onLoad={handleLoad}
              />
            ))}
          </section>

          {isPremium ? (
            <>
              {!isLoading && (
                <>
                  {isEmpty ? (
                    <div className="mt-9 px-4 py-8 text-center animate-slide-in-bottom">
                      <span className="icon icon-sad text-6xl text-ui-500" />
                      <p className="mt-2 mb-6 text-lg text-ui-300">
                        There are no players matching these filters.
                      </p>
                    </div>
                  ) : (
                    <div className="mt-9 px-4 py-8 text-center animate-slide-in-bottom">
                      <span className="icon icon-crown text-6xl text-premium-500" />
                      <p className="text-lg text-ui-300 mt-2 mb-6">
                        This filter is exclusive for Premium users.
                      </p>
                      <Link href="/prototype/premium">
                        <button type="button" className="button button-premium">
                          <span>Get Premium now</span>
                        </button>
                      </Link>
                    </div>
                  )}
                </>
              )}
            </>
          ) : (
            <section
              className={`pb-8 ${
                !isLoading ? "animate-slide-in-bottom animate-delay" : ""
              }`}
              style={{ "--delay": "calc(1 * 0.05s)" }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-80 hidden lg:block pt-9 space-y-4">
                  <div
                    className={`surface p-2 pt-4 rounded text-center ${
                      isLoading ? "is-loading" : ""
                    }`}
                  >
                    <Avatar id={1} hasLevel={false} size="avatar-lg" />
                    <p>
                      {prototype.getUserByID(1).clan && (
                        <>
                          &#91;
                          {
                            prototype.getClanByID(prototype.getUserByID(1).clan)
                              ?.tag
                          }
                          &#93;{" "}
                        </>
                      )}{" "}
                      {prototype.getUserByID(1).nickname}
                    </p>
                    {selectedScoreboard.isEligible ? (
                      <>
                        <div className="py-2 space-y-2">
                          <h3>#{selectedScoreboard.scores.placement}</h3>
                          <p className="text-ui-300 text-sm uppercase flex gap-3 justify-center">
                            <span>
                              {selectedScoreboard.scores.max - 20}
                              {selectedScoreboard.scores?.label}{" "}
                              {selectedScoreboard.scores?.objective}
                            </span>
                            <span>Top {selectedScoreboard.scores.top}%</span>
                          </p>
                        </div>
                        <button
                          type="button"
                          className="button button-sm button-secondary w-full"
                        >
                          <span>Go to my position</span>
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="py-2 space-y-2">
                          <h3>——</h3>
                        </div>
                        <p className="text-ui-300 py-2">
                          Play more matches to be eligible for this scoreboard.
                        </p>
                      </>
                    )}
                  </div>
                  <div
                    className={`surface rounded text-center ${
                      isLoading ? "is-loading" : ""
                    }`}
                  >
                    <p className="text-ui-300 p-3">Friends placement</p>
                    <ul className="border-t border-ui-700 child:flex child:items-center child:justify-between child:py-2 child:px-2 child:gap-3">
                      {prototype
                        .getUserByID(1)
                        .friends.map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            href={`/prototype/profile/${item}${prototype.getURLparams()}`}
                          >
                            <li className="interactive even:bg-ui-700 overflow-hidden">
                              <span className="w-9 text-center">
                                {RandomNumber(4, 200)}
                              </span>
                              <Avatar id={item} hasTooltip={true} />
                              <span className="flex-1 text-left truncate">
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
                              <span className="text-right">
                                {selectedScoreboard.scores?.max - itemIndex}
                                {selectedScoreboard.scores?.label}
                              </span>
                            </li>
                          </Link>
                        ))}
                    </ul>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="px-2 md:px-0">
                    <ul className="items-spaced lg:hidden">
                      {selectedScoreboard.isEligible ? (
                        <li
                          className={`item rounded ${
                            isLoading ? "" : "animate-slide-in-bottom"
                          }`}
                        >
                          <div className="w-10 lg:w-12 text-center px-2 flex items-center justify-center">
                            <LeaderboardWings
                              id={selectedScoreboard.scores.placement}
                              value={selectedScoreboard.scores.placement}
                            />
                          </div>
                          <div className="item-image">
                            <Link
                              href={`/prototype/profile/1${prototype.getURLparams()}`}
                            >
                              <Avatar
                                id={1}
                                hasTooltip={true}
                                hasTooltipXP={false}
                              />
                            </Link>
                          </div>
                          <div className="item-body">
                            <Link
                              href={`/prototype/profile/1${prototype.getURLparams()}`}
                            >
                              <div className="item-title interactive truncate">
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
                          <div className="item-body text-center text-0 flex-0 w-10">
                            <Tooltip tooltip={`Ascendant`}>
                              <img
                                className="h-8"
                                src="https://res.cloudinary.com/gloot/image/upload/v1671535680/Stryda/stats/valorant/rank-acendant.webp"
                                height="auto"
                                width="auto"
                                alt=""
                              />
                            </Tooltip>
                          </div>
                          <div className="item-actions w-20 text-right">
                            <div>
                              {selectedScoreboard.scores?.max - 20}
                              {selectedScoreboard.scores?.label}
                            </div>
                          </div>
                        </li>
                      ) : (
                        <li
                          className={`item rounded ${
                            isLoading ? "" : "animate-slide-in-bottom"
                          }`}
                        >
                          <div className="w-10 lg:w-12 text-center px-2 flex items-center justify-center">
                            <span className="text-2xl text-ui-300">-</span>
                          </div>
                          <div className="item-image">
                            <Avatar id={1} hasLevel={false} />
                          </div>
                          <div className="item-body">
                            <div className="item-title text-ui-300">
                              Play more matches to be eligible for this
                              scoreboard.
                            </div>
                          </div>
                        </li>
                      )}
                    </ul>
                    <div className="item border-0 text-sm uppercase text-ui-300">
                      <div className="w-14" />
                      <div className="item-image w-9" />
                      <div className="item-body">Player</div>
                      <div className="item-body text-center flex-0 w-10">
                        Rank
                      </div>
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
                            <div className="w-10 lg:w-12 text-center px-2 flex items-center justify-center">
                              <LeaderboardWings id={itemIndex} />
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
                                <div className="item-title interactive truncate">
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
                            <div className="item-body text-center text-0 flex-0 w-10">
                              <Tooltip tooltip={`Ascendant`}>
                                <img
                                  className="h-8"
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
                            <span className="text-ui-100 font-bold">
                              225VG19
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
}
