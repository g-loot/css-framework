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
  const prototypeData = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedBrawl, setSelectedBrawl] = useState(null);
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
            <button
              type="button"
              className="button button-primary button-currency button-token w-full"
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
            <div className="my-4 space-y-8 mt-8">
              <div className="text-center">
                <div className="text-sm uppercase">The 3 best matches</div>
                <div className="font-headings font-bold text-2xl italic text-ui-100">
                  Your performance
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
                    All your matches
                  </div>
                  <div className="flex items-center justify-center gap-1 text-main">
                    <span className="text-xs icon icon-star" />
                    <span className="text-xs"> = best matches</span>
                  </div>
                </div>
                <div className="border-t border-ui-700 max-h-[200px] overflow-y-auto scrollbar-desktop">
                  <table className="table table-comptact w-full text-center">
                    <tbody>
                      <tr>
                        <th className="w-10"></th>
                        <td>
                          <span className="text-xs text-ui-300 uppercase">
                            Match
                          </span>
                        </td>
                        <td>
                          <span className="text-xs text-ui-300 uppercase">
                            Points
                          </span>
                        </td>
                      </tr>
                      <tr className="bg-ui-800 font-bold">
                        <th className="w-10">
                          <span className="text-xs icon icon-star text-main" />
                        </th>
                        <td>
                          <span className="text-xs">1</span>
                        </td>
                        <td>
                          <span className="text-xs">254</span>
                        </td>
                      </tr>
                      <tr>
                        <th className="w-10"></th>
                        <td>
                          <span className="text-xs">2</span>
                        </td>
                        <td>
                          <span className="text-xs">124</span>
                        </td>
                      </tr>
                      <tr>
                        <th className="w-10"></th>
                        <td>
                          <span className="text-xs">3</span>
                        </td>
                        <td>
                          <span className="text-xs">78</span>
                        </td>
                      </tr>
                      <tr className="bg-ui-800 font-bold">
                        <th className="w-10">
                          <span className="text-xs icon icon-star text-main" />
                        </th>
                        <td>
                          <span className="text-xs">4</span>
                        </td>
                        <td>
                          <span className="text-xs">254</span>
                        </td>
                      </tr>
                      <tr>
                        <th className="w-10"></th>
                        <td>
                          <span className="text-xs">5</span>
                        </td>
                        <td>
                          <span className="text-xs">124</span>
                        </td>
                      </tr>
                      <tr>
                        <th className="w-10"></th>
                        <td>
                          <span className="text-xs">6</span>
                        </td>
                        <td>
                          <span className="text-xs">78</span>
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
            <div className="surface surface-dimmed sm:rounded-lg pt-4">
              <div className="flex items-center justify-end gap-2 px-4">
                <span className="text-sm text-ui-300">
                  What are the different Brawl levels?
                </span>
                <button type="button" className="text-ui-300 text-0">
                  <span className="icon icon-16 icon-c-info" />
                </button>
              </div>
              <div className="overflow-x-auto relative scrollbar-hidden h-20 flex items-center my-4">
                <div className="hidden md:flex absolute z-10 left-0 inset-y-0 self-stretch items-center bg-gradient-to-r from-ui-850 via-ui-850 to-ui-850/0 pl-4 pr-8">
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
                <div className="hidden md:flex absolute z-10 right-0 inset-y-0 self-stretch items-center bg-gradient-to-l from-ui-850 via-ui-850 to-ui-850/0 pr-4 pl-8">
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
                          <span className="font-headings font-bold text-2xl uppercase italic">
                            Bronze
                          </span>
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
                          <span className="font-headings font-bold text-2xl uppercase italic">
                            Silver
                          </span>
                        </div>
                        <figure className="avatar avatar-circle avatar-xs">
                          <div>
                            <img src="https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png" />
                          </div>
                          <i className="radar" />
                        </figure>
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
                          <span className="font-headings font-bold text-2xl uppercase italic">
                            Gold
                          </span>
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
                          <span className="font-headings font-bold text-2xl uppercase italic">
                            Platinum
                          </span>
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
                          <span className="font-headings font-bold text-2xl uppercase italic">
                            Diamond
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="border-t border-ui-700/50">
                <div className="flex items-center md:px-4 py-4 gap-4">
                  <div className="hidden md:flex gap-2 items-center pr-4 leading-none border-r border-ui-700">
                    <span className="uppercase font-bold text-sm text-ui-300">
                      Your group
                    </span>
                    <button
                      type="button"
                      onClick={loadGroup.bind(this, 6)}
                      className={`chip rounded shrink-0 w-10 ${
                        selectedGroup === 6 ? "chip-primary" : "chip-secondary"
                      }`}
                    >
                      <span className="font-headings font-bold">G</span>
                    </button>
                  </div>
                  <div className="flex-1 flex gap-2 items-center leading-none">
                    <span className="hidden md:block uppercase font-bold text-sm text-ui-300">
                      Groups:
                    </span>
                    <div className="flex-1 flex items-stretch gap-2">
                      <div className="hidden md:block">
                        <button
                          type="button"
                          className="button button-sm button-secondary rounded-full"
                          onClick={() => {
                            sideScroll(
                              sliderGroupWrapper.current,
                              25,
                              sliderGroupWidth,
                              -sliderGroupWidth * 3
                            );
                          }}
                        >
                          <span className="icon icon-arrow-sm-left" />
                        </button>
                      </div>
                      <div
                        ref={sliderGroupWrapper}
                        className="flex-1 overflow-hidden relative h-8 md:h-auto flex justify-center overflow-x-auto scrollbar-hidden"
                      >
                        <div className="flex justify-start absolute inset-0 px-2 md:px-0">
                          <div className="flex items-center justify-start gap-2">
                            {Groups.map((group, groupIndex) => (
                              <>
                                <button
                                  type="button"
                                  ref={sliderGroupItem}
                                  onClick={loadGroup.bind(this, groupIndex)}
                                  className={`chip rounded shrink-0 w-10 ${
                                    selectedGroup === groupIndex
                                      ? "chip-primary"
                                      : "chip-secondary"
                                  }`}
                                >
                                  {groupIndex === 6 && (
                                    <span className="icon icon-profile-2" />
                                  )}
                                  <span className="font-headings font-bold">{group}</span>
                                </button>
                              </>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <button
                          type="button"
                          className="button button-sm button-secondary rounded-full"
                          onClick={() => {
                            sideScroll(
                              sliderGroupWrapper.current,
                              25,
                              sliderGroupWidth,
                              sliderGroupWidth * 3
                            );
                          }}
                        >
                          <span className="icon icon-arrow-sm-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 overflow-x-auto scrollbar-hidden">
              <div className="min-w-md px-2 md:px-0">
                <div className="flex gap-2 items-start text-center text-sm text-ui-300 uppercase mb-2">
                  <div className="w-1/3 flex items-stretch overflow-hidden">
                    <div className="w-1/3 px-2">#</div>
                    <div className="flex-1">Rewards</div>
                  </div>
                  <div className="flex-1">
                    <div className="item py-0">
                      <div className="item-image w-10"></div>
                      <div className="item-body text-left">
                        <span>Player</span>
                      </div>
                      <div className="item-body flex justify-around items-center pr-4">
                        <span>Brawl points</span>
                        <span className="w-10 text-center">Clan</span>
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
                      selectedBrawl.soloLeaderboard.map((user, userIndex) => (
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
                      selectedBrawl.soloLeaderboard?.map((user, userIndex) => (
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
                                prototypeData.getUserByID(user.user)?.isYou
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
                                prototypeData.getUserByID(user.user)?.isYou
                                  ? "surface-highlight-blue"
                                  : ""
                              }`}
                            >
                              <Accordion
                                header={
                                  <>
                                    <div className="item">
                                      <div className="item-image">
                                        <figure className="avatar avatar-circle avatar-xs">
                                          <div>
                                            <img
                                              src={
                                                prototypeData.getUserByID(
                                                  user.user
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
                                              prototypeData.getUserByID(
                                                user.user
                                              )?.isYou
                                                ? "text-blue-300 font-bold"
                                                : ""
                                            }`}
                                          >
                                            {
                                              prototypeData.getUserByID(
                                                user.user
                                              )?.nickname
                                            }
                                          </span>
                                        </div>
                                      </div>
                                      <div className="item-body flex justify-around items-center">
                                        <span className="font-bold text-ui-300 leading-none">
                                          {user.stats.brawlPoints}
                                        </span>
                                        <figure className="avatar avatar-square avatar-xs">
                                          <div>
                                            <img
                                              src={
                                                prototypeData.getClanByID(
                                                  prototypeData.getUserByID(
                                                    user.user
                                                  )?.clan
                                                )?.avatar
                                              }
                                            />
                                          </div>
                                        </figure>
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
                                  <ul className="gap-2 grid grid-cols-3">
                                    <li className="col-span-3 p-3 text-center rounded bg-gradient-to-b from-ui-800 to-ui-700/25">
                                      <h5 className="uppercase font-normal font-body text-sm text-ui-300 mb-1">
                                        Match points in best [number] matches
                                      </h5>
                                      <div className="flex justify-center gap-2">
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
                                    <li className="col-span-3 md:col-span-1 p-3 text-center rounded bg-gradient-to-b from-ui-800 to-ui-700/25">
                                      <h5 className="uppercase font-normal font-body text-sm text-ui-300 mb-1">
                                        Match played
                                      </h5>
                                      <div className="flex justify-center gap-2">
                                        <div className="px-3 py-1 rounded bg-ui-850/25 font-headings font-bold text-lg italic">
                                          {numberWithSpaces(getRandomInt(500))}
                                        </div>
                                      </div>
                                    </li>
                                    <li className="col-span-3 md:col-span-1 p-3 text-center rounded bg-gradient-to-b from-ui-800 to-ui-700/25">
                                      <h5 className="uppercase font-normal font-body text-sm text-ui-300 mb-1">
                                        Tiebreaker points
                                      </h5>
                                      <div className="flex justify-center gap-2">
                                        <div className="px-3 py-1 rounded bg-ui-850/25 font-headings font-bold text-lg italic">
                                          {numberWithSpaces(getRandomInt(2000))}{" "}
                                          damage
                                        </div>
                                      </div>
                                    </li>
                                    <li className="col-span-3 md:col-span-1 p-3 text-center rounded bg-gradient-to-b from-ui-800 to-ui-700/25">
                                      <h5 className="uppercase font-normal font-body text-sm text-ui-300 mb-1">
                                        Player game score
                                      </h5>
                                      <div className="flex justify-center gap-2">
                                        <div className="px-3 py-1 rounded bg-ui-850/25 font-headings font-bold text-lg italic">
                                          {numberWithSpaces(getRandomInt(500))}
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                  <div className="mt-2 border-t border-ui-700 pl-2 pt-2 flex items-center justify-between">
                                    <Link href="/prototype/profile/1">
                                      <a className="link link-main link-hover flex items-center gap-1 text-sm">
                                        <span className="icon icon-profile-2" />
                                        <span>Go to Player profile</span>
                                      </a>
                                    </Link>
                                    <Link href="/prototype/profile/1">
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
