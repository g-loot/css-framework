import { useEffect, useState } from "react";
import { usePrototypeData } from "@/contexts/prototype";

import Link from "next/link";
import Select, { components } from "react-select";
import Avatar from "@/components/Avatar/Avatar";
import LeaderboardWings from "@/components/LeaderboardWings/LeaderboardWings";
import MissionsCompletedList from "@/components/MissionsCompletedList/MissionsCompletedList";
import Tooltip from "@/components/Tooltip/Tooltip";
import { DataBattlepass } from "@/mock-data/data-battlepass";

export default function TabMissionsLeaderboard(props) {
  const prototype = usePrototypeData();
  const [isLoading, setIsLoading] = useState(true);
  const [isEligible, setIsEligible] = useState(true);

  useEffect(() => {
    const clear = loadList();

    return () => {
      clear();
    };
  }, []);

  const loadList = () => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  };

  const GroupHeading = (props) => (
    <div
      className={`${
        props.label === "Flavours" ? "bg-ui-100" : "text-premium-500"
      }`}
    >
      <components.GroupHeading {...props} />
    </div>
  );

  function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <>
      <section className="flex items-center gap-x-4 gap-y-2 px-2 md:px-0 whitespace-nowrap overflow-x-auto scrollbar-hidden">
        <div className="form-group form-select flex gap-2 items-center">
          <label className="mb-0" htmlFor="favorite-game">
            Battlepass:
          </label>
          <select id="favorite-game" onChange={loadList}>
            <option selected>All</option>
            {DataBattlepass.map((item, itemIndex) => (
              <option key={itemIndex}>{item.meta.name}</option>
            ))}
          </select>
        </div>
        {/*
        <div className="form-group form-select">
          <label>Battlepass:</label>
          <Select
            options={[
              { label: "All", value: "all" },
              { label: "Battlepass 1", value: "battlepass1" },
              { label: "Battlepass 2", value: "battlepass2" },
              { label: "Battlepass 3", value: "battlepass3" },
            ]}
            components={{ GroupHeading }}
            defaultValue={{
              label: "Battlepass 1",
              value: "battlepass1",
            }}
            className="react-select-container"
            classNamePrefix="react-select"
            menuPortalTarget={document.body}
            onChange={loadList}
          />
        </div>
          */}
      </section>
      <section
        className={`pb-8 ${
          !isLoading ? "animate-slide-in-bottom animate-delay" : ""
        }`}
        style={{ "--delay": "calc(1 * 0.05s)" }}
      >
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-80 hidden lg:block pt-4 space-y-4">
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
                    {prototype.getClanByID(prototype.getUserByID(1).clan)?.tag}
                    &#93;{" "}
                  </>
                )}{" "}
                {prototype.getUserByID(1).nickname}
              </p>
              {isEligible ? (
                <>
                  <div className="py-2 space-y-2">
                    <h3>#23</h3>
                    <p className="text-ui-300 text-sm uppercase flex gap-3 justify-center">
                      <span></span>
                      <span>Top 45%</span>
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
                {prototype.getUserByID(1).friends.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    href={`/stryda/profile/${item}${prototype.getURLparams()}`}
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
                      <span className="text-right">{(10 - itemIndex) * 5}</span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <div className="px-2 md:px-0">
              <div className="item border-0 text-sm uppercase text-ui-300 lg:h-6 lg:-mt-2">
                <div className="w-14" />
                <div className="item-image w-7" />
                <div className="item-body">Player</div>
                <div className="w-20 text-center max-2xl:hidden">Common</div>
                <div className="w-20 text-center max-2xl:hidden">Rare</div>
                <div className="w-20 text-center max-2xl:hidden">Epic</div>
                <div className="w-20 text-center max-2xl:hidden">Legendary</div>
                <div className="w-28 text-center">Total XP</div>
              </div>
              {isLoading ? (
                <ul className="items-spaced is-loading space-y-2">
                  {[2, 10, 11, 6, 1, 8, 4, 5, 3].map((item, itemIndex) => (
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
                  {[2, 10, 11, 6, 1, 8, 4, 5, 3].map((item, itemIndex) => {
                    const missionsNo = (10 - itemIndex) * 5;
                    return (
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
                            href={`/stryda/profile/${item}${prototype.getURLparams()}`}
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
                            href={`/stryda/profile/${item}${prototype.getURLparams()}`}
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
                        <div className="item-actions max-2xl:hidden text-center w-20 text-sm">
                          <Tooltip placement="top" tooltip="Common">
                            <div className="rarity rarity-category-1">
                              <span className="icon icon-category-1" />
                              <span>42</span>
                            </div>
                          </Tooltip>
                        </div>
                        <div className="item-actions max-2xl:hidden text-center w-20 text-sm">
                          <Tooltip placement="top" tooltip="Rare">
                            <div className="rarity rarity-category-2">
                              <span className="icon icon-category-2" />
                              <span>32</span>
                            </div>
                          </Tooltip>
                        </div>
                        <div className="item-actions max-2xl:hidden text-center w-20 text-sm">
                          <Tooltip placement="top" tooltip="Epic">
                            <div className="rarity rarity-category-3">
                              <span className="icon icon-category-3" />
                              <span>12</span>
                            </div>
                          </Tooltip>
                        </div>
                        <div className="item-actions max-2xl:hidden text-center w-20 text-sm">
                          <Tooltip placement="top" tooltip="Legendary">
                            <div className="rarity rarity-category-4">
                              <span className="icon icon-category-4" />
                              <span>4</span>
                            </div>
                          </Tooltip>
                        </div>
                        <div className="item-actions w-28 text-center">
                          {/*
                          <Tooltip
                            placement="top"
                            tooltip={<MissionsCompletedList />}
                          >
                            <button type="button" className="chip chip-xp chip-sm">
                              <span>{missionsNo * 75}</span>
                              <span className="icon icon-xp-symbol"></span>
                            </button>
                          </Tooltip>
                                  */}
                            <div className="chip chip-xp chip-sm">
                              <span>{missionsNo * 75}</span>
                              <span className="icon icon-xp-symbol"></span>
                            </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
              {!isLoading && (
                <div className="animate-fade-in">
                  <div className="flex gap-2 justify-center items-center my-4">
                    <button
                      type="button"
                      onClick={loadList}
                      className="button button-ghost"
                    >
                      <span className="icon icon-arrow-up" />
                    </button>
                    <button
                      type="button"
                      onClick={loadList}
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
                      onClick={loadList}
                      className="button button-ghost"
                    >
                      <span>Bottom 15</span>
                    </button>
                    <button
                      type="button"
                      onClick={loadList}
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
        </div>
      </section>
    </>
  );
}
