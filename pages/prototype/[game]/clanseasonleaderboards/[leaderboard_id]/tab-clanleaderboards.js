import React, { useEffect, useRef, useState, useContext } from "react";

import Accordion from "../../../../../components/Accordion/Accordion";
import Link from "next/link";
import Reward from "../../../../../components/Reward/Reward";
import { UiContext } from "../../../../../contexts/ui";
import Tooltip from "../../../../../components/Tooltip/Tooltip";
import { usePrototypeData } from "../../../../../contexts/prototype";
import { useRouter } from "next/router";
import Avatar from "../../../../../components/Avatar/Avatar";
import LeaderboardWings from "../../../../../components/LeaderboardWings/LeaderboardWings";
import { VariablesContext } from "../../../../../contexts/variables";
import ModalInfoClanSeasonEnroll from "../modal-info-clanseasonenroll";

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
  const uiContext = useContext(UiContext);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedClanLeaderboard, setSelectedClanLeaderboard] = useState(null);
  const modalenrol = query.modalenrol === "true" ? true : false;
  const empty = query.empty === "true" ? true : false;
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isEmpty, setIsEmpty] = useState(empty);
  const [hasRanks, setHasRanks] = useState(false);
  const [isInAClan, setIsInAClan] = useState(true);
  const [hasPlayersDetails, setHasPlayersDetails] = useState(false);
  const hasAds = query.ads === "true" ? true : false;
  const { game } = router.query;
  const { leaderboard_id } = router.query;
  const variablesContext = useContext(VariablesContext);

  const [loading, setLoading] = useState(true);

  function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    if (modalenrol) {
      handleEnroll();
    }
  }, [modalenrol]);

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

  function handleEnroll() {
    uiContext.openModal(<ModalInfoClanSeasonEnroll />);
  }

  const getMyClanMembers = () => {
    return prototype.users.filter((user) => {
      return user.clan === 1;
    });
  };

  return (
    <>
      {isEmpty ? (
        <div className="col-span-1 lg:col-span-3">
          <div className="mt-10 text-center">
            <h3 className="h4 mt-2 text-ui-100 leading-tight text-center max-w-[40ch] mx-auto">
              Play together with 5 members of your clan and be the first to join
              this leaderboard!
            </h3>
            <button
              type="button"
              className="button button-primary w-60 my-6"
              onClick={() => setIsEmpty(false)}
            >
              <span>Enrol my clan</span>
            </button>
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
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-80 hidden lg:block shrink-0 pt-12 space-y-4">
              {isInAClan ? (
                <div
                  className={`surface surface-dimmed p-2 pt-4 rounded text-center ${
                    isLoadingRank ? "is-loading" : ""
                  }`}
                >
                  <div className="avatar avatar-lg avatar-squircle">
                    <div>
                      <img
                        src={
                          prototype.getClanByID(prototype.getUserByID(1).clan)
                            .avatar
                        }
                        alt="avatar"
                      />
                    </div>
                  </div>
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
                    {
                      prototype.getClanByID(prototype.getUserByID(1).clan)
                        ?.nickname
                    }
                  </p>
                  {variablesContext.clanLeaderboardEnrolled ? (
                    <>
                      <div className="py-2 space-y-2">
                        <h3>#5</h3>
                        <p className="text-ui-300 text-sm uppercase flex gap-3 justify-center">
                          <span>Score: 3</span>
                          <span>Top 5%</span>
                        </p>
                      </div>
                      <button
                        type="button"
                        className="button button-sm button-secondary w-full"
                      >
                        <span>Go to Clan position</span>
                      </button>
                      <div className="surface rounded mt-4">
                        <div className="text-center p-4">
                          <div className="text-xs uppercase text-ui-300">
                            Top performing Clan members
                          </div>
                        </div>
                        <div className="border-t border-ui-700 max-h-[200px] overflow-y-auto scrollbar-desktop">
                          <table className="table table-compact w-full">
                            <tbody>
                              <tr>
                                <td>
                                  <div className="text-xs text-ui-300 uppercase">
                                    Clan member
                                  </div>
                                </td>
                                <td>
                                  <div className="text-xs text-ui-300 uppercase text-right">
                                    Wins
                                  </div>
                                </td>
                              </tr>
                              {getMyClanMembers().map((item, itemIndex) => (
                                <tr key={itemIndex}>
                                  <td>
                                    <Link
                                      href={`/prototype/profile/${
                                        prototype.getUserByID(item.id).id
                                      }${prototype.getURLparams()}`}
                                    >
                                      <a
                                        className={`text-xs interactive ${
                                          prototype.getUserByID(item.id)
                                            .isPremium
                                            ? "text-premium-500"
                                            : "text-ui-300"
                                        }`}
                                      >
                                        {
                                          prototype.getUserByID(item.id)
                                            .nickname
                                        }
                                      </a>
                                    </Link>
                                  </td>
                                  <td>
                                    <div className="text-xs text-right text-ui-100 font-bold">
                                      {41 - itemIndex}
                                    </div>
                                  </td>
                                </tr>
                              ))}

                              <tr>
                                <td>
                                  <Link href="/prototype/profile/3">
                                    <a
                                      className={`text-xs interactive ${
                                        prototype.getUserByID(3).isPremium
                                          ? "text-premium-500"
                                          : "text-ui-300"
                                      }`}
                                    >
                                      {prototype.getUserByID(3).nickname}
                                    </a>
                                  </Link>
                                </td>
                                <td>
                                  <div className="text-xs text-right text-ui-100 font-bold">
                                    6
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link href="/prototype/profile/4">
                                    <a
                                      className={`text-xs interactive ${
                                        prototype.getUserByID(4).isPremium
                                          ? "text-premium-500"
                                          : "text-ui-300"
                                      }`}
                                    >
                                      {prototype.getUserByID(4).nickname}
                                    </a>
                                  </Link>
                                </td>
                                <td>
                                  <div className="text-xs text-right text-ui-100 font-bold">
                                    6
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link href="/prototype/profile/5">
                                    <a
                                      className={`text-xs interactive ${
                                        prototype.getUserByID(5).isPremium
                                          ? "text-premium-500"
                                          : "text-ui-300"
                                      }`}
                                    >
                                      {prototype.getUserByID(5).nickname}
                                    </a>
                                  </Link>
                                </td>
                                <td>
                                  <div className="text-xs text-right text-ui-100 font-bold">
                                    5
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="text-ui-300 mt-4 mb-5">
                        Enroll your Clan and play matches with party composed of
                        5 Clan members to be placed on the leaderboard.
                      </p>
                      <button
                        type="button"
                        className="button button-sm button-primary w-full"
                        onClick={() => handleEnroll()}
                      >
                        <span>Enrol my clan</span>
                      </button>
                    </>
                  )}
                </div>
              ) : (
                <div
                  className={`surface p-2 pt-4 rounded text-center ${
                    isLoadingRank ? "is-loading" : ""
                  }`}
                >
                  <span className="icon icon-warning-sign text-3xl text-attention-500" />
                  <p className="text-attention-500 my-2">
                    You need to be part of a Clan to participate to this
                    leaderboard
                  </p>
                  <Link href={`/prototype/clans${prototype.getURLparams()}`}>
                    <button
                      type="button"
                      className="button button-sm button-primary w-full"
                    >
                      <span className="icon icon-multiple-12" />
                      <span>Join a clan</span>
                    </button>
                  </Link>
                </div>
              )}
            </div>
            <div className="flex-1">
              {hasRanks && (
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
              )}
              <div className="mt-4 overflow-x-auto scrollbar-hidden">
                <div className="lg:hidden">
                  {variablesContext.clanLeaderboardEnrolled ? (
                    <></>
                  ) : (
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <button
                        type="button"
                        className="button button-sm button-primary"
                        onClick={() => handleEnroll()}
                      >
                        <span>Enrol my clan</span>
                      </button>
                      <p className="text-ui-300 mt-4 mb-5 md:border-l md:border-ui-600 md:pl-4">
                        Enrol your Clan and play matches with party composed of
                        5 Clan members to be placed on the leaderboard.
                      </p>
                    </div>
                  )}
                </div>
                <div className="min-w-md px-2 md:px-0">
                  <div className="flex gap-2 items-center text-center text-sm text-ui-300 uppercase mb-2 relative z-10 h-6">
                    <div className="w-80 flex items-stretch overflow-hidden">
                      <div className="w-1/3 px-2">#</div>
                      <div className="flex-1 flex gap-2 items-center justify-center">
                        <span>Rewards</span>
                        <Tooltip
                          tooltip={
                            <div className="max-w-xs text-sm text-left text-ui-200 leading-tight normal-case space-y-2">
                              <p>
                                Rewards will be distributed evenly to everyone
                                in the clan once the Ladder has ended.
                              </p>
                              <p>
                                For example, if the Clan reward is [number]
                                Coins and [number] Golden tickets - each Clan
                                member will split on the [number] Coins and
                                [number] Golden tickets.
                              </p>
                            </div>
                          }
                        >
                          <button className="text-ui-300 text-0">
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
                                      clanIndex > 2
                                        ? "bg-ui-700/25"
                                        : "bg-ui-700"
                                    }`}
                                  >
                                    <LeaderboardWings id={clanIndex} />
                                  </div>
                                  <div className="flex-1 flex items-center justify-center gap-4">
                                    {clan.rewards?.map(
                                      (reward, rewardIndex) => (
                                        <Reward
                                          key={rewardIndex}
                                          reward={reward}
                                          gap="gap-2"
                                          iconClassNames="text-lg"
                                          textClassNames="text-lg"
                                        />
                                      )
                                    )}
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
                                            {clan.stats.wins -
                                              clan.stats.losses}
                                          </div>
                                        </div>
                                      </>
                                    }
                                  >
                                    <div className="p-2 border-t border-ui-700">
                                      <ul className="space-y-2">
                                        <li className="bg-ui-850/50 rounded p-3 flex justify-between leading-none">
                                          <div className="">
                                            <h5 className="uppercase font-normal font-body text-sm text-ui-300 mb-1">
                                              Matches played
                                            </h5>
                                            <div className="text-ui-100 text-xl lg:text-3xl">
                                              {clan.stats.wins +
                                                clan.stats.losses}
                                            </div>
                                          </div>
                                          <div className="flex gap-3 text-right">
                                            <div className="">
                                              <h5 className="uppercase font-normal font-body text-sm text-ui-300 mb-1">
                                                Win
                                                {clan.stats.wins > 1 && <>s</>}
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
                                                {clan.stats.losses > 1 && (
                                                  <>es</>
                                                )}
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
                                        {hasPlayersDetails && (
                                          <li className="bg-ui-850/50 rounded text-center max-h-[150px] overflow-y-auto scrollbar-desktop">
                                            <table className="table table-compact text-sm w-full">
                                              <thead>
                                                <tr>
                                                  <th className="bg-ui-900/0 text-ui-300 w-full">
                                                    Players
                                                  </th>
                                                  <th className="bg-ui-900/0 text-ui-300 text-center">
                                                    Lost games
                                                  </th>
                                                  <th className="bg-ui-900/0 text-ui-300 text-center">
                                                    Won games
                                                  </th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                {prototype
                                                  .getClanByID(clan.clan)
                                                  .members.map(
                                                    (user, userIndex) => (
                                                      <tr key={userIndex}>
                                                        <td>
                                                          <Link
                                                            href={`/prototype/profile/${user}`}
                                                          >
                                                            <span className="interactive">
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
                                                          </Link>
                                                        </td>
                                                        <td className="text-center px-2 text-success-500">
                                                          {Math.max(
                                                            0,
                                                            Math.round(
                                                              clan.stats.wins /
                                                                2 -
                                                                userIndex
                                                            )
                                                          )}
                                                        </td>
                                                        <td className="text-center px-2 text-error-500">
                                                          {Math.max(
                                                            0,
                                                            Math.round(
                                                              clan.stats
                                                                .losses -
                                                                userIndex
                                                            )
                                                          )}
                                                        </td>
                                                      </tr>
                                                    )
                                                  )}
                                              </tbody>
                                            </table>
                                          </li>
                                        )}
                                        <li className="bg-ui-850/50 rounded p-3 flex gap-2 items-center justify-between">
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
                                                  prototype.getClanByID(
                                                    clan.clan
                                                  ).members?.length}{" "}
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
                                                {prototype.getClanByID(
                                                  clan.clan
                                                ).hasInvitedYou ? (
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
                                                        <span>
                                                          Apply to join
                                                        </span>
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
                                              prototype.getClanByID(clan.clan)
                                                ?.id
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
                    <button
                      type="button"
                      className="button button-ghost is-active"
                    >
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
            </div>
          </div>
        </section>
      )}
      {/* for demo purposes only */}
      <section className="text-ui-100/0 hover:text-ui-100 inline-flex flex-col">
        <a onClick={() => setIsInAClan(!isInAClan)}>Toggle in a clan</a>
        <a onClick={() => setIsEmpty(!isEmpty)}>Toggle empty state</a>
        <a onClick={() => setHasRanks(!hasRanks)}>Toggle ranks</a>
        <a onClick={() => setHasPlayersDetails(!hasPlayersDetails)}>
          Toggle players details
        </a>
      </section>
    </>
  );
}
