import React, { useEffect, useRef, useState } from "react";

import Accordion from "../../../../../components/Accordion/Accordion";
import Link from "next/link";
import Reward from "../../../../../components/Reward/Reward";
import Tooltip from "../../../../../components/Tooltip/Tooltip";
import { usePrototypeData } from "../../../../../contexts/prototype";
import { useRouter } from "next/router";
import Avatar from "../../../../../components/Avatar/Avatar";
import LeaderboardWings from "../../../../../components/LeaderboardWings/LeaderboardWings";

const rewardDistribClan = [
  {
    name: "1",
    rewards: [
      {
        type: "coin",
        value: 1000,
      },
      {
        type: "token",
        value: 100,
      },
      {
        type: "powertoken",
        value: 5,
      },
    ],
  },
  {
    name: "2",
    rewards: [
      {
        type: "coin",
        value: 700,
      },
      {
        type: "avatarframe",
        value: 4,
      },
      {
        type: "profilebanner",
        value: 33,
      },
    ],
  },
  {
    name: "3",
    rewards: [
      {
        type: "coin",
        value: 600,
      },
      {
        type: "avatarframe",
        value: 5,
      },
    ],
  },
  {
    name: "4",
    rewards: [
      {
        type: "coin",
        value: 500,
      },
    ],
  },
  {
    name: "5-10",
    rewards: [
      {
        type: "coin",
        value: 200,
      },
    ],
  },
];

const Groups = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
];

const sideScroll = (element, speed, distance, step) => {
  let scrollAmount = 0;
  const slideTimer = setInterval(() => {
    element.scrollLeft += step;
    scrollAmount += Math.abs(step);
    if (scrollAmount >= distance) {
      clearInterval(slideTimer);
    }
  }, speed);
};

export default function TabClanLeaderboardsLeaderboards() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedClanLeaderboard, setSelectedClanLeaderboard] = useState(null);
  const empty = query.empty === "true" ? true : false;
  const [isEmpty, setIsEmpty] = useState(empty);
  const hasAds = query.ads === "true" ? true : false;
  const { game } = router.query;
  const { leaderboard_id } = router.query;

  const [loading, setLoading] = useState(true);

  function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, RandomNumber(300, 3000));
    }
  }, [loading]);

  useEffect(() => {
    setSelectedClanLeaderboard(
      prototype.getClanLeaderboardByID(game, leaderboard_id)
    );
  }, [leaderboard_id]);

  const sliderRankWrapper = useRef(null);
  const sliderRankItem = useRef(null);
  const [sliderRankWidth, setSliderRankWidth] = useState(0);
  const sliderGroupWrapper = useRef(null);
  const sliderGroupItem = useRef(null);
  const [sliderGroupWidth, setSliderGroupWidth] = useState(0);

  const [isLoadingRank, setIsLoadingRank] = useState(false);
  const [isLoadingGroup, setIsLoadingGroup] = useState(false);
  const [selectedRank, setSelectedRank] = useState(2);
  const [selectedGroup, setSelectedGroup] = useState(6);

  useEffect(() => {
    if (sliderRankItem.current) {
      setSliderRankWidth(sliderRankItem.current.clientWidth);
    }
  }, [sliderRankItem]);

  useEffect(() => {
    if (sliderGroupItem.current) {
      setSliderGroupWidth(sliderGroupItem.current.clientWidth);
    }
  }, [sliderGroupItem]);

  function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function loadRank(target) {
    setIsLoadingRank(true);
    setIsLoadingGroup(true);
    setSelectedRank(target);
    const timer = setTimeout(() => {
      setIsLoadingRank(false);
      setIsLoadingGroup(false);
    }, 1000);
    return () => clearTimeout(timer);
  }
  function loadGroup(target) {
    setIsLoadingGroup(true);
    setSelectedGroup(target);
    const timer = setTimeout(() => {
      setIsLoadingGroup(false);
    }, 1000);
    return () => clearTimeout(timer);
  }

  return (
    <>
      {isEmpty ? (
        <div className="col-span-1 lg:col-span-3">
          <div className="mt-10">
            <h3 className="h4 mt-2 mb-6 text-ui-100 leading-tight text-center max-w-[20ch] mx-auto">
              Play together with 5 members of your clan and be the first to join
              this leaderboard!
            </h3>
            <ul className="max-w-sm mx-auto">
              {rewardDistribClan.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="surface rounded-lg h-[58px] flex items-stretch overflow-hidden mb-2 animate-slide-in-bottom animate-delay"
                  style={{
                    "--delay": "calc(" + itemIndex + " * 0.05s)",
                  }}
                >
                  <div
                    className={`w-2/5 text-center px-2 flex items-center justify-center ${
                      itemIndex > 2 ? "bg-ui-700/25" : "bg-ui-700"
                    }`}
                  >
                    <LeaderboardWings id={itemIndex} value={item.name} />
                  </div>
                  <div className="flex-1 flex items-center justify-center gap-4">
                    {item.rewards?.map((reward, rewardIndex) => (
                      <Reward
                        key={rewardIndex}
                        reward={reward}
                        gap="gap-2"
                        iconClassNames="text-lg"
                        textClassNames="text-lg"
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <section
          className="pb-8 animate-slide-in-bottom animate-delay"
          style={{ "--delay": "calc(1 * 0.05s)" }}
        >
          <div className="relative z-0 overflow-x-auto scrollbar-hidden h-16 flex items-center my-4">
            <div className="hidden md:flex absolute z-10 left-0 inset-y-0 self-stretch items-center bg-gradient-to-r from-ui-900 via-ui-900 to-ui-900/0 pl-4 pr-8">
              <button
                type="button"
                className="button button-lg button-ghost rounded-full"
                onClick={() => {
                  sideScroll(
                    sliderRankWrapper.current,
                    25,
                    sliderRankWidth,
                    -sliderRankWidth
                  );
                }}
              >
                <span className="icon icon-ctrl-left" />
              </button>
            </div>

            <div className="hidden md:flex absolute z-10 right-0 inset-y-0 self-stretch items-center bg-gradient-to-l from-ui-900 via-ui-900 to-ui-900/0 pr-4 pl-8">
              <button
                type="button"
                className="button button-lg button-ghost rounded-full"
                onClick={() => {
                  sideScroll(
                    sliderRankWrapper.current,
                    25,
                    sliderRankWidth,
                    sliderRankWidth
                  );
                }}
              >
                <span className="icon icon-ctrl-right" />
              </button>
            </div>
            <ul
              ref={sliderRankWrapper}
              className="absolute z-0 inset-0 tabs tabs-rank scrollbar-hidden px-10 md:px-20"
            >
              <li className="tab-bronze" ref={sliderRankItem}>
                <a
                  onClick={loadRank.bind(this, 1)}
                  className={selectedRank === 1 ? "is-active" : ""}
                >
                  <div>
                    <div>
                      <span className="icon text-4xl icon-rank-bronze" />
                      <span className="h4">Bronze</span>
                    </div>
                  </div>
                </a>
              </li>
              <li className="tab-silver">
                <a
                  onClick={loadRank.bind(this, 2)}
                  className={selectedRank === 2 ? "is-active" : ""}
                >
                  <div>
                    <div>
                      <span className="icon text-4xl icon-rank-silver" />
                      <span className="h4">Silver</span>
                    </div>
                    <div className="avatar avatar-squircle avatar-xs">
                      <div>
                        <img src={prototype.getClanByID(1).avatar} />
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className="tab-gold">
                <a
                  onClick={loadRank.bind(this, 3)}
                  className={selectedRank === 3 ? "is-active" : ""}
                >
                  <div>
                    <div>
                      <span className="icon text-4xl icon-rank-gold" />
                      <span className="h4">Gold</span>
                    </div>
                  </div>
                </a>
              </li>
              <li className="tab-platinum">
                <a
                  onClick={loadRank.bind(this, 4)}
                  className={selectedRank === 4 ? "is-active" : ""}
                >
                  <div>
                    <div>
                      <span className="icon text-4xl icon-rank-platinum" />
                      <span className="h4">Platinum</span>
                    </div>
                  </div>
                </a>
              </li>
              <li className="tab-diamond">
                <a
                  onClick={loadRank.bind(this, 5)}
                  className={selectedRank === 5 ? "is-active" : ""}
                >
                  <div>
                    <div>
                      <span className="icon text-4xl icon-rank-diamond" />
                      <span className="h4">Diamond</span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-4 overflow-x-auto scrollbar-hidden">
            <div className="min-w-md px-2 md:px-0">
              <div className="flex gap-2 items-start text-center text-sm text-ui-300 uppercase mb-2 relative z-10">
                <div className="w-48 flex items-stretch overflow-hidden">
                  <div className="w-1/3 px-2">#</div>
                  <div className="flex-1 flex gap-2 items-center justify-center">
                    <span>Rewards</span>
                    <Tooltip
                      tooltip={
                        <div className="max-w-xs text-sm text-left text-ui-200 leading-tight normal-case space-y-2">
                          <p>
                            Rewards will be distributed evenly to everyone in
                            the clan once the Ladder has ended.
                          </p>
                          <p>
                            For example, if the Clan reward is [number] Coins
                            and [number] Golden tickets - each Clan member will
                            split on the [number] Coins and [number] Golden
                            tickets.
                          </p>
                        </div>
                      }
                    >
                      <button className="text-ui-300 text-0 translate-y-0.5">
                        <span className="icon icon-16 icon-c-info" />
                      </button>
                    </Tooltip>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="item py-0">
                    <div className="item-body text-left">
                      <span>Clan</span>
                    </div>
                    <div className="item-body text-right">
                      <span>Score</span>
                    </div>
                    <div className="item-actions flex items-center gap-2 opacity-0">
                      <div>
                        <span className="icon icon-24 icon-arrow-sm-down" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {isLoadingGroup && (
                <ul className="items-spaced space-y-2 is-loading relative z-0">
                  {selectedClanLeaderboard &&
                    selectedClanLeaderboard.leaderboard.map(
                      (clan, clanIndex) => (
                        <>
                          <div
                            className="item rounded-lg h-[58px]"
                            key={clanIndex}
                          >
                            <div className="item-image">
                              <div className="avatar avatar-squircle avatar-xs">
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
                          </div>
                        </>
                      )
                    )}
                </ul>
              )}
              {!isLoadingGroup && (
                <>
                  {selectedClanLeaderboard &&
                    selectedClanLeaderboard.leaderboard?.map(
                      (clan, clanIndex) => (
                        <>
                          <div
                            className={`flex gap-2 items-start mb-2 ${
                              isLoadingGroup
                                ? ""
                                : "animate-slide-in-bottom animate-delay"
                            }`}
                            style={{
                              "--delay": "calc(" + clanIndex + " * 0.05s)",
                            }}
                          >
                            <div
                              className={`surface rounded-lg w-80 h-[58px] flex items-stretch overflow-hidden ${
                                prototype.getClanByID(clan.clan)?.isYou
                                  ? ""
                                  : ""
                              }`}
                            >
                              <div
                                className={`w-16 relative text-center px-2 flex items-center justify-center ${
                                  clanIndex > 2 ? "bg-ui-700/25" : "bg-ui-700"
                                }`}
                              >
                                <LeaderboardWings id={clanIndex} />
                              </div>
                              <div className="flex-1 flex items-center justify-center gap-4">
                                {clan.rewards?.map((reward, rewardIndex) => (
                                  <Reward
                                    key={rewardIndex}
                                    reward={reward}
                                    gap="gap-2"
                                    iconClassNames="text-lg"
                                    textClassNames="text-lg"
                                  />
                                ))}
                              </div>
                            </div>
                            <div
                              className={`flex-1 accordion surface rounded-lg ${
                                prototype.getClanByID(clan.clan)?.isYou
                                  ? ""
                                  : ""
                              }`}
                            >
                              <Accordion
                                isNoHover={true}
                                buttonActivation={true}
                                buttonActivationSimple={true}
                                header={
                                  <>
                                    <div className="item h-[56px]">
                                      <div className="item-body">
                                        <Link
                                          href={`/prototype/clans/${
                                            clan.clan
                                          }${prototype.getURLparams()}`}
                                        >
                                          <div className="flex gap-2 items-center interactive">
                                            <div className="avatar avatar-squircle avatar-xs">
                                              <div>
                                                <img
                                                  src={
                                                    prototype.getClanByID(
                                                      clan.clan
                                                    )?.avatar
                                                  }
                                                />
                                              </div>
                                            </div>
                                            <div className="item-title whitespace-nowrap">
                                              <span
                                                className={`${
                                                  prototype.getClanByID(
                                                    clan.clan
                                                  )?.isYou
                                                    ? "text-main font-bold"
                                                    : ""
                                                }`}
                                              >
                                                &#91;
                                                {
                                                  prototype.getClanByID(
                                                    clan.clan
                                                  )?.tag
                                                }
                                                &#93;{" "}
                                                {
                                                  prototype.getClanByID(
                                                    clan.clan
                                                  )?.nickname
                                                }
                                              </span>
                                            </div>
                                          </div>
                                        </Link>
                                      </div>
                                      <div className="item-body text-right">
                                        {clan.stats.wins - clan.stats.losses}
                                      </div>
                                    </div>
                                  </>
                                }
                              >
                                <div className="p-2">
                                  <ul className="space-y-2">
                                    <li className="bg-ui-800 p-3 flex justify-between leading-none">
                                      <div className="">
                                        <h5 className="uppercase font-normal font-body text-sm text-ui-300 mb-1">
                                          Matches played
                                        </h5>
                                        <div className="text-ui-100 text-xl lg:text-3xl">
                                          {clan.stats.wins + clan.stats.losses}
                                        </div>
                                      </div>
                                      <div className="flex gap-3 text-right">
                                        <div className="">
                                          <h5 className="uppercase font-normal font-body text-sm text-ui-300 mb-1">
                                            Win{clan.stats.wins > 1 && <>s</>}
                                          </h5>
                                          <div className="text-success-500 text-xl lg:text-3xl">
                                            {clan.stats.wins}
                                          </div>
                                        </div>
                                        <div className="">
                                          <div className="uppercase font-normal font-body text-sm text-ui-300 mb-1">
                                            -
                                          </div>
                                        </div>
                                        <div className="">
                                          <h5 className="uppercase font-normal font-body text-sm text-ui-300 mb-1">
                                            Loss
                                            {clan.stats.losses > 1 && <>es</>}
                                          </h5>
                                          <div className="text-error-500 text-xl lg:text-3xl">
                                            {clan.stats.losses}
                                          </div>
                                        </div>
                                        <div className="">
                                          <div className="uppercase font-normal font-body text-sm text-ui-300 mb-1">
                                            =
                                          </div>
                                        </div>
                                        <div className="">
                                          <h5 className="uppercase font-normal font-body text-sm text-ui-300 mb-1">
                                            Score
                                          </h5>
                                          <div className="text-ui-100 text-xl lg:text-3xl">
                                            {clan.stats.wins -
                                              clan.stats.losses}
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="bg-ui-800 p-3 text-center rounded max-h-[150px] overflow-y-auto scrollbar-desktop">
                                      <ul className="text-sm space-y-1">
                                        {prototype
                                          .getClanByID(clan.clan)
                                          .members.map((user, userIndex) => (
                                            <li
                                              key={userIndex}
                                              className="border-t border-ui-700"
                                            >
                                              <Link
                                                href={`/prototype/profile/${user}`}
                                              >
                                                <a className="flex gap-2 items-center justify-between transition duration-200 hover:opacity-50">
                                                  <span className="text-ui-300">
                                                    &#91;
                                                    {
                                                      prototype.getClanByID(
                                                        clan.clan
                                                      )?.tag
                                                    }
                                                    &#93;{" "}
                                                    {
                                                      prototype.getUserByID(
                                                        user
                                                      ).nickname
                                                    }
                                                  </span>
                                                  <span className="font-bold">
                                                    {numberWithSpaces(
                                                      500 - userIndex
                                                    )}
                                                  </span>
                                                </a>
                                              </Link>
                                            </li>
                                          ))}
                                        <li className="border-t border-ui-700">
                                          <Link href="/prototype/profile/3">
                                            <a className="flex gap-2 items-center justify-between transition duration-200 hover:opacity-50">
                                              <span className="text-ui-300">
                                                &#91;
                                                {
                                                  prototype.getClanByID(
                                                    clan.clan
                                                  )?.tag
                                                }
                                                &#93;{" "}
                                                {
                                                  prototype.getUserByID(3)
                                                    .nickname
                                                }
                                              </span>
                                              <span className="font-bold">
                                                {numberWithSpaces(1875)}
                                              </span>
                                            </a>
                                          </Link>
                                        </li>
                                        <li className="border-t border-ui-700">
                                          <Link href="/prototype/profile/4">
                                            <a className="flex gap-2 items-center justify-between transition duration-200 hover:opacity-50">
                                              <span className="text-ui-300">
                                                &#91;
                                                {
                                                  prototype.getClanByID(
                                                    clan.clan
                                                  )?.tag
                                                }
                                                &#93;{" "}
                                                {
                                                  prototype.getUserByID(4)
                                                    .nickname
                                                }
                                              </span>
                                              <span className="font-bold">
                                                {numberWithSpaces(1675)}
                                              </span>
                                            </a>
                                          </Link>
                                        </li>
                                        <li className="border-t border-ui-700">
                                          <Link href="/prototype/profile/5">
                                            <a className="flex gap-2 items-center justify-between transition duration-200 hover:opacity-50">
                                              <span className="text-ui-300">
                                                &#91;
                                                {
                                                  prototype.getClanByID(
                                                    clan.clan
                                                  )?.tag
                                                }
                                                &#93;{" "}
                                                {
                                                  prototype.getUserByID(5)
                                                    .nickname
                                                }
                                              </span>
                                              <span className="font-bold">
                                                {numberWithSpaces(1324)}
                                              </span>
                                            </a>
                                          </Link>
                                        </li>
                                        <li className="border-t border-ui-700">
                                          <Link href="/prototype/profile/6">
                                            <a className="flex gap-2 items-center justify-between transition duration-200 hover:opacity-50">
                                              <span className="text-ui-300">
                                                &#91;
                                                {
                                                  prototype.getClanByID(
                                                    clan.clan
                                                  )?.tag
                                                }
                                                &#93;{" "}
                                                {
                                                  prototype.getUserByID(6)
                                                    .nickname
                                                }
                                              </span>
                                              <span className="font-bold">
                                                {numberWithSpaces(1124)}
                                              </span>
                                            </a>
                                          </Link>
                                        </li>
                                      </ul>
                                    </li>
                                    <li className="bg-ui-800 p-3 flex gap-2 items-center justify-between">
                                      <div className="avatar-group -space-x-2">
                                        {prototype
                                          .getClanByID(clan.clan)
                                          .members?.slice(0, 5)
                                          .map((item, itemIndex) => (
                                            <Avatar
                                              key={itemIndex}
                                              hasTooltip={true}
                                              id={item}
                                              hasLevel={false}
                                              size="avatar-xs"
                                            />
                                          ))}
                                        {prototype.getClanByID(clan.clan)
                                          .members?.length > 5 && (
                                          <div className="avatar avatar-circle avatar-xs">
                                            <div>
                                              <span>
                                                +
                                                {prototype.getClanByID(
                                                  clan.clan
                                                ).members?.length - 5}
                                              </span>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                      <div className="text-center text-ui-300 text-sm">
                                        {prototype.getClanByID(clan.clan)
                                          .members?.length < 20 && (
                                          <>
                                            {20 -
                                              prototype.getClanByID(clan.clan)
                                                .members?.length}{" "}
                                            available slots
                                          </>
                                        )}
                                      </div>
                                      <div>
                                        {prototype.getClanByID(clan.clan)
                                          .isPublic ? (
                                          <>
                                            <Link href="#">
                                              <a
                                                type="button"
                                                className="button button-sm button-secondary flex-1"
                                              >
                                                <span>Join clan</span>
                                              </a>
                                            </Link>
                                          </>
                                        ) : (
                                          <>
                                            {prototype.getClanByID(clan.clan)
                                              .hasInvitedYou ? (
                                              <>
                                                <div className="flex gap-2">
                                                  <Link href="#">
                                                    <a
                                                      type="button"
                                                      className="button button-sm button-success flex-1"
                                                    >
                                                      <span>Accept</span>
                                                    </a>
                                                  </Link>
                                                  <Link href="#">
                                                    <a
                                                      type="button"
                                                      className="button button-sm button-error flex-1"
                                                    >
                                                      <span>Decline</span>
                                                    </a>
                                                  </Link>
                                                </div>
                                              </>
                                            ) : (
                                              <>
                                                <Link href="#">
                                                  <a
                                                    type="button"
                                                    className="button button-sm button-secondary flex-1"
                                                  >
                                                    <span>Apply to join</span>
                                                  </a>
                                                </Link>
                                              </>
                                            )}
                                          </>
                                        )}
                                      </div>
                                    </li>
                                  </ul>
                                  <div className="mt-2 border-t border-ui-700 pl-2 pt-2 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                      <Link
                                        href={`/prototype/clans/${
                                          prototype.getClanByID(clan.clan)?.id
                                        }`}
                                      >
                                        <a className="link link-main link-hover flex items-center gap-1 text-sm">
                                          <span className="icon icon-multiple-12" />
                                          <span>Go to Clan page</span>
                                        </a>
                                      </Link>
                                    </div>
                                    <button
                                      type="button"
                                      className="button button-tertiary button-sm"
                                    >
                                      <span className="icon icon-c-warning" />
                                      <span>Report abuse</span>
                                    </button>
                                  </div>
                                </div>
                              </Accordion>
                            </div>
                          </div>
                        </>
                      )
                    )}
                </>
              )}
            </div>
          </div>
          {!isLoadingRank && (
            <div>
              <div className="flex gap-2 justify-center items-center my-4">
                <button
                  type="button"
                  onClick={loadGroup.bind(this, selectedGroup)}
                  className="button button-ghost"
                >
                  <span className="icon icon-arrow-up" />
                </button>
                <button
                  type="button"
                  onClick={loadGroup.bind(this, selectedGroup)}
                  className="button button-ghost"
                >
                  <span>Top 15</span>
                </button>
                <button type="button" className="button button-ghost is-active">
                  <span>My position</span>
                </button>
                <button
                  type="button"
                  onClick={loadGroup.bind(this, selectedGroup)}
                  className="button button-ghost"
                >
                  <span>Bottom 15</span>
                </button>
                <button
                  type="button"
                  onClick={loadGroup.bind(this, selectedGroup)}
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
        </section>
      )}
      {/* for demo purposes only */}
      <section className="text-ui-100/0 h-0 lg:flex justify-between">
        <a onClick={() => setIsEmpty(!isEmpty)}>Toggle empty state</a>
      </section>
    </>
  );
}
