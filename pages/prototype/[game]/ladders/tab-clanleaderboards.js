import React, { useEffect, useRef, useState } from "react";

import Accordion from "../../../../components/Accordion/Accordion";
import Link from "next/link";
import Reward from "../../../../components/Reward/Reward";
import Tooltip from "../../../../components/Tooltip/Tooltip";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import Avatar from "../../../../components/Avatar/Avatar";
import ResetsIn from "../../../../components/Countdown/ResetsIn";

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

const rewardDistribClan = [
  {
    name: "1-10",
    rewards: [
      {
        type: "coin",
        value: 450000,
      },
    ],
  },
  {
    name: "11-20",
    rewards: [
      {
        type: "coin",
        value: 425000,
      },
    ],
  },
  {
    name: "21-50",
    rewards: [
      {
        type: "coin",
        value: 400000,
      },
    ],
  },
  {
    name: "51-150",
    rewards: [
      {
        type: "coin",
        value: 30000,
      },
    ],
  },
  {
    name: "151-300",
    rewards: [
      {
        type: "coin",
        value: 1500,
      },
    ],
  },
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

export default function TabLaddersSoloLeaderboards() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedLadder, setSelectedLadder] = useState(null);
  const hasAds = query.ads === "true" ? true : false;
  const { game } = router.query;
  const { ladder_id } = router.query;
  const isEmpty = query.empty === "true" ? true : false;
  const isPremium = query.premium === "true" ? true : false;

  useEffect(() => {
    setSelectedLadder(prototype.getLadderByID(game, ladder_id));
  }, [ladder_id]);

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
      {/*
      <section className="pb-4">
        <HowToLadder />
      </section>
  */}
      {selectedLadder && (
        <section
          className="pb-8 animate-slide-in-bottom animate-delay"
          style={{ "--delay": "calc(1 * 0.05s)" }}
        >
          {selectedLadder.status !== "upcoming" ? (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="col-span-1 hidden lg:block">
                <div className="mb-4 space-y-8 surface surface-dimmed rounded-lg px-2 pb-2 pt-4">
                  <div className="text-center">
                    <div className="text-sm uppercase">The 10 best matches</div>
                    <div className="text-2xl text-ui-100">Clan performance</div>
                  </div>
                  <div className="flex items-center justify-around gap-4 text-center leading-none">
                    <div>
                      <div className="text-3xl text-ui-100 mb-2">125</div>
                      <div className="text-sm uppercase text-ui-300">
                        Total Ladder
                        <br />
                        points
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl text-ui-100 mb-2">#5</div>
                      <div className="text-sm uppercase text-ui-300">
                        Current Ladder
                        <br />
                        position
                      </div>
                    </div>
                  </div>
                  <div className="surface rounded-lg">
                    <div className="text-center p-4">
                      <div className="text-xs uppercase text-ui-300">
                        Top 10 matches
                      </div>
                    </div>
                    <div className="border-t border-ui-700 max-h-[200px] overflow-y-auto scrollbar-desktop">
                      <table className="table table-compact w-full">
                        <tbody>
                          <tr>
                            <td>
                              <div className="text-xs text-ui-300 uppercase">
                                Player
                              </div>
                            </td>
                            <td>
                              <div className="text-xs text-ui-300 uppercase text-right">
                                Points
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link href="/prototype/profile/2">
                                <a
                                  className={`text-xs interactive ${
                                    prototype.getUserByID(2).isPremium
                                      ? "text-premium-500"
                                      : "text-ui-300"
                                  }`}
                                >
                                  {prototype.getUserByID(2).nickname}
                                </a>
                              </Link>
                            </td>
                            <td>
                              <div className="text-xs text-right text-ui-100 font-bold">
                                {numberWithSpaces(2000)}
                              </div>
                            </td>
                          </tr>
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
                                {numberWithSpaces(2000)}
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
                                {numberWithSpaces(2000)}
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
                                {numberWithSpaces(2000)}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 lg:col-span-3">
                <div className="mt-4 overflow-x-auto scrollbar-hidden">
                  <div className="min-w-md px-2 md:px-0">
                    <div className="flex gap-2 items-start text-center text-sm text-ui-300 uppercase mb-2 relative z-10">
                      <div className="w-1/3 flex items-stretch overflow-hidden">
                        <div className="w-1/3 px-2">#</div>
                        <div className="flex-1 flex gap-2 items-center">
                          <span>Clan rewards</span>
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
                            <button className="text-ui-300 text-0 translate-y-0.5">
                              <span className="icon icon-16 icon-c-info" />
                            </button>
                          </Tooltip>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="item py-0">
                          <div className="item-body text-left">
                            <span>CLAN</span>
                          </div>
                          <div className="item-body flex justify-around items-center pL-4">
                            <span>Ladder points</span>
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
                        {selectedLadder &&
                          selectedLadder.clanLeaderboard.map(
                            (user, userIndex) => (
                              <>
                                <div
                                  className="item rounded-lg h-[58px]"
                                  key={userIndex}
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
                        {selectedLadder &&
                          selectedLadder.clanLeaderboard?.map(
                            (user, userIndex) => (
                              <>
                                <div
                                  className={`flex gap-2 items-start mb-2 ${
                                    isLoadingGroup
                                      ? ""
                                      : "animate-slide-in-bottom animate-delay"
                                  }`}
                                  style={{
                                    "--delay":
                                      "calc(" + userIndex + " * 0.05s)",
                                  }}
                                >
                                  <div
                                    className={`surface rounded-lg w-1/3 h-[58px] flex items-stretch overflow-hidden ${
                                      prototype.getClanByID(user.clan)?.isYou
                                        ? ""
                                        : ""
                                    }`}
                                  >
                                    <div
                                      className={`w-1/3 text-center px-2 flex items-center justify-center ${
                                        userIndex > 2
                                          ? "bg-ui-700/25"
                                          : "bg-ui-700"
                                      }`}
                                    >
                                      <span
                                        className={`text-2xl  ${
                                          userIndex === 0 ? "text-gold-500" : ""
                                        }${
                                          userIndex === 1
                                            ? "text-silver-500"
                                            : ""
                                        } ${
                                          userIndex === 2
                                            ? "text-bronze-500"
                                            : ""
                                        } ${
                                          userIndex > 2 ? "text-ui-300" : ""
                                        }`}
                                      >
                                        {userIndex + 1}
                                      </span>
                                      <div className="absolute">
                                        <svg
                                          className={`${
                                            userIndex === 0
                                              ? "fill-gold-500"
                                              : ""
                                          }${
                                            userIndex === 1
                                              ? "fill-silver-500"
                                              : ""
                                          } ${
                                            userIndex === 2
                                              ? "fill-bronze-500"
                                              : ""
                                          } ${userIndex > 2 ? "hidden" : ""}`}
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
                                    <div className="flex-1 flex items-center justify-center gap-4">
                                      {user.rewards?.map(
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
                                      prototype.getClanByID(user.clan)?.isYou
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
                                                  user.clan
                                                }${prototype.getURLparams()}`}
                                              >
                                                <div className="flex gap-2 items-center interactive">
                                                  <div className="avatar avatar-squircle avatar-xs">
                                                    <div>
                                                      <img
                                                        src={
                                                          prototype.getClanByID(
                                                            user.clan
                                                          )?.avatar
                                                        }
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className="item-title">
                                                    <span
                                                      className={`${
                                                        prototype.getClanByID(
                                                          user.clan
                                                        )?.isYou
                                                          ? "text-main font-bold"
                                                          : ""
                                                      }`}
                                                    >
                                                      &#91;
                                                      {
                                                        prototype.getClanByID(
                                                          user.clan
                                                        )?.tag
                                                      }
                                                      &#93;{" "}
                                                      {
                                                        prototype.getClanByID(
                                                          user.clan
                                                        )?.nickname
                                                      }
                                                    </span>
                                                  </div>
                                                </div>
                                              </Link>
                                            </div>
                                            <div className="item-body flex justify-around items-center">
                                              <span className="text-ui-300 leading-none">
                                                {user.stats.ladderPoints}
                                              </span>
                                            </div>
                                          </div>
                                        </>
                                      }
                                    >
                                      <div className="p-2">
                                        <ul className="gap-2 grid grid-cols-2 items-stretch">
                                          <li className="col-span-2 p-3 text-center rounded bg-gradient-to-b from-ui-800 to-ui-700/25">
                                            <h5 className="uppercase font-normal font-body text-sm text-ui-300 mb-1">
                                              Match points in best 10 matches
                                            </h5>
                                            <div className="flex flex-wrap justify-center gap-2">
                                              <div className="px-3 py-1 rounded bg-ui-850">
                                                {numberWithSpaces(
                                                  getRandomInt(2000)
                                                )}
                                              </div>
                                              <div className="px-3 py-1 rounded bg-ui-850">
                                                {numberWithSpaces(
                                                  getRandomInt(2000)
                                                )}
                                              </div>
                                              <div className="px-3 py-1 rounded bg-ui-850">
                                                {numberWithSpaces(
                                                  getRandomInt(2000)
                                                )}
                                              </div>
                                              <div className="px-3 py-1 rounded bg-ui-850">
                                                {numberWithSpaces(
                                                  getRandomInt(2000)
                                                )}
                                              </div>
                                              <div className="px-3 py-1 rounded bg-ui-850">
                                                {numberWithSpaces(
                                                  getRandomInt(2000)
                                                )}
                                              </div>
                                              <div className="px-3 py-1 rounded bg-ui-850">
                                                {numberWithSpaces(
                                                  getRandomInt(2000)
                                                )}
                                              </div>
                                              <div className="px-3 py-1 rounded bg-ui-850">
                                                {numberWithSpaces(
                                                  getRandomInt(2000)
                                                )}
                                              </div>
                                              <div className="px-3 py-1 rounded bg-ui-850">
                                                {numberWithSpaces(
                                                  getRandomInt(2000)
                                                )}
                                              </div>
                                              <div className="px-3 py-1 rounded bg-ui-850">
                                                {numberWithSpaces(
                                                  getRandomInt(2000)
                                                )}
                                              </div>
                                              <div className="px-3 py-1 rounded bg-ui-850">
                                                {numberWithSpaces(
                                                  getRandomInt(2000)
                                                )}
                                              </div>
                                            </div>
                                          </li>
                                          <li className="col-span-2 md:col-span-1 p-3 text-center rounded bg-gradient-to-b from-ui-800 to-ui-700/25">
                                            <h5 className="uppercase font-normal font-body text-sm text-ui-300 mb-1">
                                              Top 5 performers in the clan
                                            </h5>
                                            <ul className="text-sm space-y-1">
                                              <li className="border-t border-ui-700">
                                                <Link href="/prototype/profile/2">
                                                  <a className="flex gap-2 items-center justify-between transition duration-200 hover:opacity-50">
                                                    <span className="text-ui-300">
                                                      &#91;
                                                      {
                                                        prototype.getClanByID(
                                                          user.clan
                                                        )?.tag
                                                      }
                                                      &#93;{" "}
                                                      {
                                                        prototype.getUserByID(2)
                                                          .nickname
                                                      }
                                                    </span>
                                                    <span className="font-bold">
                                                      {numberWithSpaces(2000)}
                                                    </span>
                                                  </a>
                                                </Link>
                                              </li>
                                              <li className="border-t border-ui-700">
                                                <Link href="/prototype/profile/3">
                                                  <a className="flex gap-2 items-center justify-between transition duration-200 hover:opacity-50">
                                                    <span className="text-ui-300">
                                                      &#91;
                                                      {
                                                        prototype.getClanByID(
                                                          user.clan
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
                                                          user.clan
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
                                                          user.clan
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
                                                          user.clan
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
                                          <li className="col-span-2 md:col-span-1 p-3 text-center rounded bg-gradient-to-b from-ui-800 to-ui-700/25 flex flex-col gap-4 justify-center items-center">
                                            <div>
                                              <h5 className="uppercase font-normal font-body text-sm text-ui-300 mb-1">
                                                Tiebreaker points
                                              </h5>
                                              <div className="flex justify-center gap-2">
                                                <div className="px-3 py-1 rounded bg-ui-850/25 text-lg">
                                                  1100 damage
                                                </div>
                                              </div>
                                            </div>
                                            <div>
                                              <h5 className="uppercase font-normal font-body text-sm text-ui-300 mb-1">
                                                Active Ladder players
                                              </h5>
                                              <div className="flex justify-center gap-2">
                                                <div className="px-3 py-1 rounded bg-ui-850/25 text-lg">
                                                  12/50
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                        <div className="p-2">
                                          <div className="bg-ui-850 rounded p-2 flex gap-2 items-center justify-between">
                                            <div className="avatar-group -space-x-2">
                                              {prototype
                                                .getClanByID(user.clan)
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
                                              {prototype.getClanByID(user.clan)
                                                .members?.length > 5 && (
                                                <div className="avatar avatar-circle avatar-xs">
                                                  <div>
                                                    <span>
                                                      +
                                                      {prototype.getClanByID(
                                                        user.clan
                                                      ).members?.length - 5}
                                                    </span>
                                                  </div>
                                                </div>
                                              )}
                                            </div>
                                            <div className="text-center text-ui-300 text-sm">
                                              {prototype.getClanByID(user.clan)
                                                .members?.length < 20 && (
                                                <>
                                                  {20 -
                                                    prototype.getClanByID(
                                                      user.clan
                                                    ).members?.length}{" "}
                                                  available slots
                                                </>
                                              )}
                                            </div>
                                            <div>
                                              {prototype.getClanByID(user.clan)
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
                                                    user.clan
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
                                          </div>
                                        </div>
                                        <div className="mt-2 border-t border-ui-700 pl-2 pt-2 flex items-center justify-between">
                                          <div className="flex items-center gap-4">
                                            <Link
                                              href={`/prototype/clans/${
                                                prototype.getClanByID(user.clan)
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
                {!isLoadingRank ||
                  (selectedLadder.status !== "upcoming" && (
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
                  ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="col-span-1 hidden lg:block pt-10">
                <div className="w-full mb-4 surface rounded-lg p-4 text-center relative z-0">
                  <h2 className="h4 mb-2">Compete in this Ladder</h2>
                  <div className="uppercase  text-ui-100">
                    Play at least <span className="text-main">3 matches</span>
                  </div>
                  <p className="text-ui-300 my-4">
                    The total of your Ladder points from your X best matches
                    will decide your place on a leaderboard.
                  </p>
                  <p className="text-ui-300 max-w-[30ch] mx-auto">
                    You can play as many matches as you like to improve your
                    Ladder points.
                  </p>
                </div>
                <div className="w-full mb-4 surface rounded-lg p-4 text-center relative z-0">
                  <div>
                    <span className="icon icon-xp-symbol-outline text-[6rem] -mt-4 -mb-6 text-main" />
                  </div>

                  {isPremium ? (
                    <>
                      <p className="text-ui-300 max-w-[30ch] mx-auto">
                        As a <b className="text-ui-100">Premium user</b>, you
                        earn <b className="text-ui-100">450 XP</b> for each
                        registered Ladder match.
                      </p>
                      <p className="text-ui-300 max-w-[30ch] mx-auto">
                        You will get the XP for your placement matches when you
                        reach the leaderboard.
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-ui-300 max-w-[30ch] mx-auto mb-4">
                        Earn 300 XP for each registered Ladder match, you will
                        get the XP for your placement matches when you reach the
                        leaderboard.
                      </p>
                      <p className="text-ui-300 max-w-[30ch] mx-auto">
                        <Link href="/prototoype/premium">
                          <a className="text-premium-500  underline">Premium</a>
                        </Link>{" "}
                        users earn an additional 50% XP.
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div className="col-span-1 lg:col-span-3">
                <div className="mt-4 overflow-x-auto scrollbar-hidden">
                  <div className="col-span-1 lg:col-span-3">
                    <div className="mt-10">
                      <h3 className="h4 mt-2 mb-6 text-ui-100 leading-tight text-center">
                        {selectedLadder.status === "upcoming" ? (
                          <>
                            This Ladders starts{" "}
                            <ResetsIn
                              label=" "
                              status={
                                prototype.getLadderByID(game, ladder_id)
                                  ?.status === "upcoming"
                                  ? 2
                                  : 1
                              }
                            />
                          </>
                        ) : (
                          <>Be the first clan to join this leaderboard!</>
                        )}
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
                              <span
                                className={`text-xl  ${
                                  itemIndex === 0 ? "text-gold-500" : ""
                                }${itemIndex === 1 ? "text-silver-500" : ""} ${
                                  itemIndex === 2 ? "text-bronze-500" : ""
                                } ${itemIndex > 2 ? "text-ui-300" : ""}`}
                              >
                                {item.name}
                              </span>
                              <div className="absolute">
                                <svg
                                  className={`${
                                    itemIndex === 0 ? "fill-gold-500" : ""
                                  }${
                                    itemIndex === 1 ? "fill-silver-500" : ""
                                  } ${
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
                            <div className="flex-1 flex items-center justify-center gap-4">
                              {item.rewards?.map((reward, rewardIndex) => (
                                <>
                                  {selectedLadder.isPowerPlay ? (
                                    <Reward
                                      key={rewardIndex}
                                      reward={reward}
                                      xFactor={20}
                                      gap="gap-2"
                                      iconClassNames="text-lg"
                                      textClassNames="text-lg"
                                    />
                                  ) : (
                                    <Reward
                                      key={rewardIndex}
                                      reward={reward}
                                      gap="gap-2"
                                      iconClassNames="text-lg"
                                      textClassNames="text-lg"
                                    />
                                  )}
                                </>
                              ))}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
}
