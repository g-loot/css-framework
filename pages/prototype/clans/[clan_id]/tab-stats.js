import React, { useEffect, useState, useContext } from "react";

import { UiContext } from "../../../../contexts/ui";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import Link from "next/link";
import Avatar from "../../../../components/Avatar/Avatar";
import GameIcon from "../../../../components/GameIcon/GameIcon";
import ModalGiftTokens from "../modal-gift-tokens";
import ButtonSorting from "../../../../components/Button/ButtonSorting";
import Tooltip from "../../../../components/Tooltip/Tooltip";
import LeaderboardWings from "../../../../components/LeaderboardWings/LeaderboardWings";

const ClanStats = [
  {
    id: 1,
    isActive: true,
    name: "Ladders played",
    label: "Ladders",
    value: 82,
    users: [2, 5, 4, 12, 13, 9, 10, 1, 3],
  },
  {
    id: 2,
    name: "Ladder rounds",
    label: "rounds",
    value: 426,
    users: [5, 3, 2, 8, 11, 1, 6, 7, 14],
  },
  {
    id: 3,
    name: "Missions completed",
    label: "missions",
    value: 1294,
    users: [12, 11, 13, 1, 2, 4, 3, 8, 9],
  },
];

export default function TabClanStats() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedClan, setSelectedClan] = useState(null);
  const [selectedStats, setSelectedStats] = useState(1);
  const { clan_id } = router.query;
  const modalGiftTokens = query.modalgifttokens === "true" ? true : false;
  const isEmpty = query.empty === "true" ? true : false;
  const [isLoading, setIsLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(
    prototype.getUserByID(2).nickname
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, RandomNumber(300, 3000));
  }, []);

  const getClanStatsByID = (id) => {
    return ClanStats.find((general) => {
      return general.id === parseInt(id);
    });
  };

  function openModalGiftTokens() {
    uiContext.openModal(
      <ModalGiftTokens selectedUser={selectedUser}></ModalGiftTokens>
    );
  }

  function loadLeaderboard(target) {
    setIsLoading(true);
    setSelectedStats(target);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }

  useEffect(() => {
    if (modalGiftTokens) {
      openModalGiftTokens();
    }
  }, [modalGiftTokens]);

  function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    setSelectedClan(prototype.getClanByID(clan_id));
  }, [clan_id]);

  function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

  return (
    <>
      {selectedClan && (
        <>
          <section>
            <div className="flex justify-start overflow-x-auto scrollbar-hidden">
              <div className="inline-flex gap-2 items-stretch justify-start child:shrink-0 px-2 xl:px-0 mx-auto">
                <ul className="tabs tabs-rank">
                  {ClanStats.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <button
                        type="button"
                        className={`${
                          item.id === selectedStats ? "is-active" : ""
                        }`}
                        onClick={() => loadLeaderboard(item.id)}
                      >
                        <div>
                          <div>
                            <div className="leading-tight">
                              <div className="text-xs lg:text-sm text-ui-200 uppercase">
                                {item.name}
                              </div>
                              <div className="text-ui-100 text-xl lg:text-3xl">
                                {numberWithSpaces(item.value)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="px-2 md:px-0">
              <div className="item border-0 text-sm uppercase text-ui-300">
                <div className="w-14" />
                <div className="item-image w-7" />
                <div className="item-body">Player</div>
                <div className="item-actions px-4 text-right">
                  <div>{getClanStatsByID(selectedStats).label}</div>
                </div>
              </div>
              {isLoading ? (
                <ul className="items-spaced is-loading space-y-2">
                  {getClanStatsByID(selectedStats).users?.map(
                    (item, itemIndex) => (
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
                    )
                  )}
                </ul>
              ) : (
                <ul className="items-spaced space-y-2">
                  {getClanStatsByID(selectedStats).users?.map(
                    (item, itemIndex) => (
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
                        <div className="item-actions px-4 text-right text-lg">
                          <div
                            className={`${
                              prototype.getUserByID(item)?.isYou
                                ? "text-main"
                                : ""
                            }`}
                          >
                            {numberWithSpaces(
                              getClanStatsByID(selectedStats).value / 2 +
                                (itemIndex + 10)
                            )}
                          </div>
                        </div>
                      </li>
                    )
                  )}
                </ul>
              )}
              {!isLoading && (
                <div>
                  <div className="flex gap-2 justify-center items-center my-4">
                    <button
                      type="button"
                      onClick={() => loadLeaderboard(selectedStats)}
                      className="button button-ghost"
                    >
                      <span className="icon icon-arrow-up" />
                    </button>
                    <button
                      type="button"
                      onClick={() => loadLeaderboard(selectedStats)}
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
                      onClick={() => loadLeaderboard(selectedStats)}
                      className="button button-ghost"
                    >
                      <span>Bottom 15</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => loadLeaderboard(selectedStats)}
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
          </section>
        </>
      )}
    </>
  );
}
