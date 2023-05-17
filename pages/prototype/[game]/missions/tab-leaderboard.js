import { useEffect, useState } from "react";
import { usePrototypeData } from "../../../../contexts/prototype";

import Link from "next/link";
import Select, { components } from "react-select";
import Avatar from "../../../../components/Avatar/Avatar";
import LeaderboardWings from "../../../../components/LeaderboardWings/LeaderboardWings";
import MissionsCompletedList from "../../../../components/MissionsCompletedList/MissionsCompletedList";
import Tooltip from "../../../../components/Tooltip/Tooltip";
import { DataBattlepass } from "../../../../mock-data/data-battlepass";

export default function TabMissionsLeaderboard(props) {
  const prototype = usePrototypeData();
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <>
      <section className="flex items-center gap-x-4 gap-y-2 mb-4 px-2 md:px-0 whitespace-nowrap overflow-x-auto scrollbar-hidden">
        <div className="form-group form-select flex gap-2 items-center">
          <label className="mb-0" htmlFor="favorite-game">Battlepass:</label>
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
          <div className="flex-1">
            <div className="px-2 md:px-0">
              <div className="item border-0 text-sm uppercase text-ui-300">
                <div className="w-14" />
                <div className="item-image w-9" />
                <div className="item-body">Player</div>
                <div className="w-28 text-center">Missions No.</div>
                <div className="w-28 text-center">All XP</div>
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
                        <div className="item-actions text-center w-28 text-sm">
                          <span>{missionsNo}</span>
                        </div>
                        <div className="item-actions w-28 text-center">
                          <Tooltip
                            placement="top"
                            tooltip={<MissionsCompletedList />}
                          >
                            <button type="button" class="chip chip-xp chip-sm">
                              <span>{missionsNo * 75}</span>
                              <span class="icon icon-xp-symbol"></span>
                            </button>
                          </Tooltip>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
              {!isLoading && (
                <div>
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
