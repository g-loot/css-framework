import React, { useEffect, useRef, useState } from "react";

import Accordion from "../../../../components/Accordion/Accordion";
import HowToBrawl from "../../../../components/HowTo/HowToBrawl";
import Link from "next/link";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";

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

export default function TabBrawlsSoloLeaderboards() {
  const router = useRouter();
  const { query } = useRouter();
  const prototypeData = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedBrawl, setSelectedBrawl] = useState(null);
  const hasAds = query.ads === "true" ? true : false;
  const { game } = router.query;
  const { brawl_id } = router.query;

  useEffect(() => {
    setSelectedBrawl(prototypeData.getBrawlByID(game, brawl_id));
  }, [brawl_id]);

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
      <section className="pb-4">
        <HowToBrawl />
      </section>
      <section
        className="pb-8 animate-slide-in-bottom animate-delay"
        style={{ "--delay": "calc( 1 * 0.05s)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="col-span-1 hidden lg:block">
            <div className="text-center text-sm text-ui-300 mb-4 px-4 leading-tight">
              Play solo matches to improving the Clans position in the
              leaderboard.
            </div>
            <Link
              href={`/prototype/${game}/brawls/${brawl_id}${
                hasAds ? "?ads=true&" : ""
              }${hasAds ? "&" : "?"}tab=solo-leaderboard`}
            >
              <a className="button button-secondary w-full">
                <span className="icon icon-arrow-left" />
                <span>Solo leaderboards</span>
              </a>
            </Link>
            <div className="my-4 space-y-8 mt-8">
              <div className="text-center">
                <div className="text-sm uppercase">The 10 best matches</div>
                <div className="font-headings font-bold text-2xl italic text-ui-100">
                  Clan performance
                </div>
              </div>
              <div className="flex items-center justify-around gap-4 text-center leading-none">
                <div>
                  <div className="text-3xl font-headings font-bold text-blue-300 mb-2">
                    125
                  </div>
                  <div className="text-sm uppercase">
                    Total Brawl
                    <br />
                    points
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-headings font-bold text-blue-300 mb-2">
                    #5
                  </div>
                  <div className="text-sm uppercase">
                    Current Brawl
                    <br />
                    position
                  </div>
                </div>
              </div>
              <div className="surface surface-dimmed rounded-lg">
                <div className="text-center p-4">
                  <div className="text-xs uppercase text-ui-300">
                    Top 10 matches
                  </div>
                </div>
                <div className="border-t border-ui-700 max-h-[200px] overflow-y-auto scrollbar-desktop">
                  <table className="table table-comptact w-full">
                    <tbody>
                      <tr>
                        <td>
                          <Link href="/prototype/profile/2">
                            <a className="text-xs text-ui-300 font-bold hover:opacity-50">
                              &#91;{prototypeData.getUserClan().tag}&#93; {prototypeData.getUserByID(2).nickname}
                            </a>
                          </Link>
                        </td>
                        <td>
                          <div className="text-xs text-right">
                            {numberWithSpaces(2000)}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link href="/prototype/profile/3">
                            <a className="text-xs text-ui-300 font-bold hover:opacity-50">
                              &#91;{prototypeData.getUserClan().tag}&#93; {prototypeData.getUserByID(3).nickname}
                            </a>
                          </Link>
                        </td>
                        <td>
                          <div className="text-xs text-right">
                            {numberWithSpaces(2000)}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link href="/prototype/profile/4">
                            <a className="text-xs text-ui-300 font-bold hover:opacity-50">
                              &#91;{prototypeData.getUserClan().tag}&#93; {prototypeData.getUserByID(4).nickname}
                            </a>
                          </Link>
                        </td>
                        <td>
                          <div className="text-xs text-right">
                            {numberWithSpaces(2000)}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link href="/prototype/profile/5">
                            <a className="text-xs text-ui-300 font-bold hover:opacity-50">
                              &#91;{prototypeData.getUserClan().tag}&#93; {prototypeData.getUserByID(5).nickname}
                            </a>
                          </Link>
                        </td>
                        <td>
                          <div className="text-xs text-right">
                            {numberWithSpaces(2000)}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/*
              <div className="surface surface-dimmed rounded-lg p-4 text-center relative my-4 space-y-3">
                <h3 className="text-2xl">
                  Compete in
                  <br />
                  this Brawl
                </h3>
                <p>
                  Play at least <span className="text-main">X matches</span>
                </p>
                <p className="text-sm text-ui-300">
                  The total of your Brawl points from your X best matches will
                  decide your place on a leaderboard.
                </p>
                <button
                  type="button"
                  className="button button-sm button-primary button-currency button-token"
                >
                  <div>
                    <span>Activate 1 match</span>
                  </div>
                  <div>
                    <img
                      className="dropshadow-xs"
                      src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_token.png"
                      width="34"
                      height="34"
                      alt="coin"
                    />
                    <span>1</span>
                  </div>
                </button>
                <p className="text-xs text-ui-300">
                  You can play as many matches as you like to improve your Brawl
                  points.
                </p>
          </div>*/}
          </div>
          <div className="col-span-1 lg:col-span-3">
            <div className="mt-4 overflow-x-auto scrollbar-hidden">
              <div className="min-w-md px-2 md:px-0">
                <div className="flex gap-2 items-start text-center text-sm text-ui-300 uppercase mb-2">
                  <div className="w-1/3 flex items-stretch overflow-hidden">
                    <div className="w-1/3 px-2">#</div>
                    <div className="flex-1">Rewards</div>
                  </div>
                  <div className="flex-1">
                    <div className="item py-0">
                      <div className="item-body text-left">
                        <span>CLAN</span>
                      </div>
                      <div className="item-body flex justify-around items-center pL-4">
                        <span>Brawl points</span>
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
                  <ul className="items-spaced space-y-2 is-loading">
                    {selectedBrawl &&
                      selectedBrawl.clanLeaderboard.map((user, userIndex) => (
                        <>
                          <div className="item rounded-lg h-[54px]">
                            <div className="item-image">
                              <figure className="avatar avatar-circle avatar-xs">
                                <div />
                              </figure>
                            </div>
                            <div className="item-body">
                              <div className="item-title">Loading</div>
                            </div>
                            <div className="item-body flex justify-around items-center">
                              <span className="font-bold text-ui-300 leading-none">
                                Loading
                              </span>
                              <figure className="avatar avatar-square avatar-xs">
                                <div />
                              </figure>
                            </div>
                            <div className="item-actions flex items-center gap-2">
                              <div>
                                <span className="icon icon-24 icon-arrow-sm-down" />
                              </div>
                            </div>
                          </div>
                        </>
                      ))}
                  </ul>
                )}
                {!isLoadingGroup && (
                  <>
                    {selectedBrawl &&
                      selectedBrawl.clanLeaderboard?.map((user, userIndex) => (
                        <>
                          <div
                            className={`flex gap-2 items-start mb-2 ${
                              isLoadingGroup
                                ? ""
                                : "animate-slide-in-bottom animate-delay"
                            }`}
                            style={{
                              "--delay": "calc(" + userIndex + " * 0.05s)",
                            }}
                          >
                            <div
                              className={`surface rounded-lg w-1/3 h-[54px] flex items-stretch overflow-hidden ${
                                prototypeData.getClanByID(user.clan)?.isYou
                                  ? "surface-highlight-blue"
                                  : ""
                              }`}
                            >
                              <div
                                className={`w-1/3 text-center px-2 flex items-center justify-center ${
                                  userIndex > 2 ? "bg-ui-700/25" : "bg-ui-700"
                                }`}
                              >
                                <span
                                  className={`font-headings font-bold text-2xl  ${
                                    userIndex === 0 ? "text-gold-500" : ""
                                  }${
                                    userIndex === 1 ? "text-silver-500" : ""
                                  } ${
                                    userIndex === 2 ? "text-bronze-500" : ""
                                  } ${userIndex > 2 ? "text-ui-300" : ""}`}
                                >
                                  {userIndex + 1}
                                </span>
                                <div className="absolute">
                                  <svg
                                    className={`${
                                      userIndex === 0 ? "fill-gold-500" : ""
                                    }${
                                      userIndex === 1 ? "fill-silver-500" : ""
                                    } ${
                                      userIndex === 2 ? "fill-bronze-500" : ""
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
                                {user.rewards.coin && (
                                  <div className="flex items-center gap-2">
                                    <img
                                      className="h-6"
                                      src={`https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-coin-unique.webp`}
                                      width="auto"
                                      height="auto"
                                      alt=""
                                    />
                                    <span className="font-headings font-bold text-lg italic">
                                      {numberWithSpaces(user.rewards.coin)}
                                    </span>
                                  </div>
                                )}
                                {user.rewards.token && (
                                  <div className="flex items-center gap-2">
                                    <img
                                      className="h-6"
                                      src={`https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-token-unique.webp`}
                                      width="auto"
                                      height="auto"
                                      alt=""
                                    />
                                    <span className="font-headings font-bold text-lg italic">
                                      {numberWithSpaces(user.rewards.token)}
                                    </span>
                                  </div>
                                )}
                                {user.rewards.ticket && (
                                  <div className="flex items-center gap-2">
                                    <img
                                      className="h-6"
                                      src={`https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-ticket-unique.webp`}
                                      width="auto"
                                      height="auto"
                                      alt=""
                                    />
                                    <span className="font-headings font-bold text-lg italic">
                                      {numberWithSpaces(user.rewards.ticket)}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                            <div
                              className={`flex-1 accordion surface rounded-lg ${
                                prototypeData.getClanByID(user.clan)?.isYou
                                  ? "surface-highlight-blue"
                                  : ""
                              }`}
                            >
                              <Accordion
                                header={
                                  <>
                                    <div className="item">
                                      <div className="item-image">
                                        <figure className="avatar avatar-xs">
                                          <div>
                                            <img
                                              src={
                                                prototypeData.getClanByID(
                                                  user.clan
                                                )?.avatar
                                              }
                                            />
                                          </div>
                                        </figure>
                                      </div>
                                      <div className="item-body">
                                        <div className="item-title">
                                          <span
                                            className={`${
                                              prototypeData.getClanByID(
                                                user.clan
                                              )?.isYou
                                                ? "text-blue-300 font-bold"
                                                : ""
                                            }`}
                                          >
                                            &#91;
                                            {
                                              prototypeData.getClanByID(
                                                user.clan
                                              )?.tag
                                            }
                                            &#93;{" "}
                                            {
                                              prototypeData.getClanByID(
                                                user.clan
                                              )?.nickname
                                            }
                                          </span>
                                        </div>
                                      </div>
                                      <div className="item-body flex justify-around items-center">
                                        <span className="font-bold text-ui-300 leading-none">
                                          {user.stats.brawlPoints}
                                        </span>
                                      </div>
                                      <div className="item-actions flex items-center gap-2">
                                        <div>
                                          <span className="icon icon-24 icon-arrow-sm-down" />
                                        </div>
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
                                        <div className="px-3 py-1 rounded bg-ui-850 font-headings font-bold text-xl italic">
                                          {numberWithSpaces(getRandomInt(2000))}
                                        </div>
                                        <div className="px-3 py-1 rounded bg-ui-850 font-headings font-bold text-xl italic">
                                          {numberWithSpaces(getRandomInt(2000))}
                                        </div>
                                        <div className="px-3 py-1 rounded bg-ui-850 font-headings font-bold text-xl italic">
                                          {numberWithSpaces(getRandomInt(2000))}
                                        </div>
                                        <div className="px-3 py-1 rounded bg-ui-850 font-headings font-bold text-xl italic">
                                          {numberWithSpaces(getRandomInt(2000))}
                                        </div>
                                        <div className="px-3 py-1 rounded bg-ui-850 font-headings font-bold text-xl italic">
                                          {numberWithSpaces(getRandomInt(2000))}
                                        </div>
                                        <div className="px-3 py-1 rounded bg-ui-850 font-headings font-bold text-xl italic">
                                          {numberWithSpaces(getRandomInt(2000))}
                                        </div>
                                        <div className="px-3 py-1 rounded bg-ui-850 font-headings font-bold text-xl italic">
                                          {numberWithSpaces(getRandomInt(2000))}
                                        </div>
                                        <div className="px-3 py-1 rounded bg-ui-850 font-headings font-bold text-xl italic">
                                          {numberWithSpaces(getRandomInt(2000))}
                                        </div>
                                        <div className="px-3 py-1 rounded bg-ui-850 font-headings font-bold text-xl italic">
                                          {numberWithSpaces(getRandomInt(2000))}
                                        </div>
                                        <div className="px-3 py-1 rounded bg-ui-850 font-headings font-bold text-xl italic">
                                          {numberWithSpaces(getRandomInt(2000))}
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
                                                  prototypeData.getClanByID(
                                                    user.clan
                                                  )?.tag
                                                }
                                                &#93;{" "}
                                                {
                                                  prototypeData.getUserByID(2)
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
                                                  prototypeData.getClanByID(
                                                    user.clan
                                                  )?.tag
                                                }
                                                &#93;{" "}
                                                {
                                                  prototypeData.getUserByID(3)
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
                                                  prototypeData.getClanByID(
                                                    user.clan
                                                  )?.tag
                                                }
                                                &#93;{" "}
                                                {
                                                  prototypeData.getUserByID(4)
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
                                                  prototypeData.getClanByID(
                                                    user.clan
                                                  )?.tag
                                                }
                                                &#93;{" "}
                                                {
                                                  prototypeData.getUserByID(5)
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
                                                  prototypeData.getClanByID(
                                                    user.clan
                                                  )?.tag
                                                }
                                                &#93;{" "}
                                                {
                                                  prototypeData.getUserByID(6)
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
                                          <div className="px-3 py-1 rounded bg-ui-850/25 font-headings font-bold text-lg italic">
                                            1100 damage
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <h5 className="uppercase font-normal font-body text-sm text-ui-300 mb-1">
                                          Active Brawl players
                                        </h5>
                                        <div className="flex justify-center gap-2">
                                          <div className="px-3 py-1 rounded bg-ui-850/25 font-headings font-bold text-lg italic">
                                            12/50
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                  <div className="mt-2 border-t border-ui-700 pl-2 pt-2 flex items-center justify-between">
                                    <Link href="/prototype/clan/0">
                                      <a className="link link-main link-hover flex items-center gap-1 text-sm">
                                        <span className="icon icon-multiple-12" />
                                        <span>Go to Clan page</span>
                                      </a>
                                    </Link>
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
                      ))}
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
                <div className="text-center my-4 text-sm text-ui-300">
                  <div>
                    The leaderboard is updated every X minute,{" "}
                    <a href="#" className="link link-main">
                      reload the page
                    </a>{" "}
                    for an update
                  </div>
                  <div>
                    Leaderboard ID:{" "}
                    <span className="text-ui-100 font-bold">
                      [date:game:tier:groupId]
                    </span>{" "}
                    example: &quot;225VG19&quot;{" "}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
