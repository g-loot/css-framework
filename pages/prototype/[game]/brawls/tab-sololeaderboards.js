import React, { useEffect, useRef, useState } from 'react';

import Accordion from "../../../../components/Accordion/Accordion";
import HowToBrawl from "../../../../components/HowTo/HowToBrawl";
import Link from "next/link";
import { useRouter } from "next/router";

const Clans = [
  {
    id: 0,
    name: "Clan Name 1",
    avatar:
      "https://res.cloudinary.com/gloot/image/upload/v1654063976/Marketing/2022_prototype/DummyContent/teams/teamlogo_Bunny_Hunger.png",
  },
  {
    id: 1,
    name: "Clan Name 2",
    avatar:
      "https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_Un1c0rns.png",
  },
  {
    id: 2,
    name: "Clan Name 2",
    avatar:
      "https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_Gladion2.png",
  },
  {
    id: 3,
    name: "Clan Name 2",
    avatar:
      "https://res.cloudinary.com/gloot/image/upload/v1654063976/Marketing/2022_prototype/DummyContent/teams/teamlogo_GhOOOsTS.png",
  },
  {
    id: 4,
    name: "Clan Name 2",
    avatar:
      "https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png",
  },
];

const LeaderboardResults = [
  {
    name: "Kes2Band",
    avatar:
      "https://res.cloudinary.com/gloot/image/upload/v1655292295/Marketing/2022_prototype/DummyContent/avatars/avatar_user_1.jpg",
    clanId: 0,
    rewards: {
      coin: 250000,
      ticket: 1,
    },
    stats: {
      brawlPoints: 123,
      matchPlayed: 11,
      tiebreakerPoints: 1402,
      gameScore: 143,
      bestPoints: {
        one: 423,
        two: 245,
        three: 513,
      },
    },
  },
  {
    name: "MisterKilla",
    avatar:
      "https://res.cloudinary.com/gloot/image/upload/v1655292295/Marketing/2022_prototype/DummyContent/avatars/avatar_user_2.jpg",
    clanId: 1,
    rewards: {
      coin: 200000,
      ticket: 1,
    },
    stats: {
      brawlPoints: 115,
      matchPlayed: 11,
      tiebreakerPoints: 1402,
      gameScore: 143,
      bestPoints: {
        one: 423,
        two: 245,
        three: 513,
      },
    },
  },
  {
    name: "Nomadiction",
    avatar:
      "https://res.cloudinary.com/gloot/image/upload/v1655292295/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg",
    clanId: 3,
    rewards: {
      coin: 150000,
      ticket: 1,
    },
    stats: {
      brawlPoints: 113,
      matchPlayed: 11,
      tiebreakerPoints: 1402,
      gameScore: 143,
      bestPoints: {
        one: 423,
        two: 245,
        three: 513,
      },
    },
  },
  {
    name: "TestRobot",
    avatar:
      "https://res.cloudinary.com/gloot/image/upload/v1655292295/Marketing/2022_prototype/DummyContent/avatars/avatar_user_4.jpg",
    clanId: 2,
    rewards: {
      coin: 75000,
      ticket: 1,
    },
    stats: {
      brawlPoints: 108,
      matchPlayed: 11,
      tiebreakerPoints: 1402,
      gameScore: 143,
      bestPoints: {
        one: 423,
        two: 245,
        three: 513,
      },
    },
  },
  {
    name: "UglyDuck",
    avatar:
      "https://res.cloudinary.com/gloot/image/upload/v1655292295/Marketing/2022_prototype/DummyContent/avatars/avatar_user_5.jpg",
    clanId: 4,
    rewards: {
      coin: 50000,
    },
    stats: {
      brawlPoints: 98,
      matchPlayed: 11,
      tiebreakerPoints: 1402,
      gameScore: 143,
      bestPoints: {
        one: 423,
        two: 245,
        three: 513,
      },
    },
  },
  {
    name: "Redemptor",
    avatar:
      "https://res.cloudinary.com/gloot/image/upload/v1655292295/Marketing/2022_prototype/DummyContent/avatars/avatar_user_6.jpg",
    clanId: 3,
    rewards: {
      coin: 250000,
    },
    stats: {
      brawlPoints: 97,
      matchPlayed: 11,
      tiebreakerPoints: 1402,
      gameScore: 143,
      bestPoints: {
        one: 423,
        two: 245,
        three: 513,
      },
    },
  },
  {
    name: "Scapula",
    avatar:
      "https://res.cloudinary.com/gloot/image/upload/v1655292295/Marketing/2022_prototype/DummyContent/avatars/avatar_user_7.jpg",
    clanId: 2,
    rewards: {
      coin: 25000,
    },
    stats: {
      brawlPoints: 78,
      matchPlayed: 11,
      tiebreakerPoints: 1402,
      gameScore: 143,
      bestPoints: {
        one: 423,
        two: 245,
        three: 513,
      },
    },
  },
  {
    name: "Guiderope",
    avatar:
      "https://res.cloudinary.com/gloot/image/upload/v1655292295/Marketing/2022_prototype/DummyContent/avatars/avatar_user_8.jpg",
    clanId: 0,
    rewards: {
      coin: 10000,
    },
    stats: {
      brawlPoints: 77,
      matchPlayed: 11,
      tiebreakerPoints: 1402,
      gameScore: 143,
      bestPoints: {
        one: 423,
        two: 245,
        three: 513,
      },
    },
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

export default function TabBrawlsSoloLeaderboards() {
  const { query } = useRouter();
  const hasAds = query.ads === "true" ? true : false;
  const selectedGame = !query.game ? 0 : query.game;
  const sliderRankWrapper = useRef(null);
  const sliderRankItem = useRef(null);
  const [sliderRankSize, setSliderRankSize] = useState(0);
  const sliderGroupWrapper = useRef(null);
  const sliderGroupItem = useRef(null);
  const [sliderGroupSize, setSliderGroupSize] = useState(0);

  useEffect(() => {
    if(sliderRankItem.current) {
      setSliderRankSize(sliderRankItem.current.clientWidth);
      console.log(sliderRankSize);
    }
}, [sliderRankItem]);

  useEffect(() => {
    if(sliderGroupItem.current) {
      setSliderGroupSize(sliderGroupItem.current.clientWidth);
      console.log(sliderGroupSize);
    }
}, [sliderGroupItem]);

  function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

  return (
    <>
      <section
        className="pb-4 animate-slide-in-bottom animate-delay"
        style={{ "--delay": "calc( 1 * 0.05s)" }}
      >
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
                <div className="font-headings text-2xl italic text-ui-100">
                  Your performance
                </div>
              </div>
              <div className="flex items-center justify-around gap-4 text-center leading-none">
                <div>
                  <div className="text-3xl font-headings text-blue-300 mb-2">
                    125
                  </div>
                  <div className="text-sm uppercase">
                    Total Brawl
                    <br />
                    points
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-headings text-blue-300 mb-2">
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
                    <span className="text-xs icon icon-star"></span>
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
                          <span className="text-xs icon icon-star text-main"></span>
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
                          <span className="text-xs icon icon-star text-main"></span>
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
                <button className="text-ui-300 text-0">
                  <span className="icon icon-16 icon-c-info"></span>
                </button>
              </div>
              <div className="overflow-x-auto relative scrollbar-hidden h-20 flex items-center my-4">
                <div className="hidden md:flex absolute z-10 left-0 inset-y-0 self-stretch items-center bg-gradient-to-r from-ui-850 via-ui-850 to-ui-850/0 pl-4 pr-8">
                  <button
                    type="button"
                    className="button button-lg button-ghost rounded-full"
                    onClick={() => {
                      sideScroll(sliderRankWrapper.current, 25, sliderRankSize, -sliderRankSize);
                    }}
                  >
                    <span className="icon icon-ctrl-left"></span>
                  </button>
                </div>
                <div className="hidden md:flex absolute z-10 right-0 inset-y-0 self-stretch items-center bg-gradient-to-l from-ui-850 via-ui-850 to-ui-850/0 pr-4 pl-8">
                  <button
                    type="button"
                    className="button button-lg button-ghost rounded-full"
                    onClick={() => {
                      sideScroll(sliderRankWrapper.current, 25, sliderRankSize, sliderRankSize);
                    }}
                  >
                    <span className="icon icon-ctrl-right"></span>
                  </button>
                </div>

                <ul ref={sliderRankWrapper} className="absolute z-0 inset-0 tabs tabs-rank scrollbar-hidden px-10 md:px-20">
                  <li className="tab-bronze" ref={sliderRankItem}>
                    <a>
                      <div>
                        <div>
                          <span className="icon text-4xl icon-rank-bronze"></span>
                          <span className="font-headings text-2xl uppercase italic">
                            Bronze
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="tab-silver">
                    <a>
                      <div>
                        <div>
                          <span className="icon text-4xl icon-rank-silver"></span>
                          <span className="font-headings text-2xl uppercase italic">
                            Silver
                          </span>
                        </div>
                        <figure className="avatar avatar-circle avatar-xs">
                          <div>
                            <img src="https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png" />
                          </div>
                          <i className="radar"></i>
                        </figure>
                      </div>
                    </a>
                  </li>
                  <li className="tab-gold">
                    <a className="is-active">
                      <div>
                        <div>
                          <span className="icon text-4xl icon-rank-gold"></span>
                          <span className="font-headings text-2xl uppercase italic">
                            Gold
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="tab-platinum">
                    <a>
                      <div>
                        <div>
                          <span className="icon text-4xl icon-rank-platinum"></span>
                          <span className="font-headings text-2xl uppercase italic">
                            Platinum
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="tab-diamond">
                    <a>
                      <div>
                        <div>
                          <span className="icon text-4xl icon-rank-diamond"></span>
                          <span className="font-headings text-2xl uppercase italic">
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
                      className="chip rounded chip-secondary w-10"
                    >
                      <span className="font-headings">C</span>
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
                            sideScroll(sliderGroupWrapper.current, 25, sliderGroupSize, -sliderGroupSize*3);
                          }}
                        >
                          <span className="icon icon-arrow-sm-left"></span>
                        </button>
                      </div>
                      <div className="flex-1 overflow-hidden relative h-8 md:h-auto">
                        <div ref={sliderGroupWrapper} className="flex items-center gap-2 absolute inset-0 overflow-x-auto scrollbar-hidden px-2 md:px-0">
                          <button
                            type="button"
                            className="chip rounded shrink-0 chip-secondary w-10"
                            ref={sliderGroupItem}
                          >
                            <span className="font-headings">A</span>
                          </button>
                          <button
                            type="button"
                            className="chip rounded shrink-0 chip-secondary w-10"
                          >
                            <span className="font-headings">B</span>
                          </button>
                          <button
                            type="button"
                            className="chip rounded shrink-0 chip-primary w-10"
                          >
                            <span className="font-headings">C</span>
                          </button>
                          <button
                            type="button"
                            className="chip rounded shrink-0 chip-secondary w-10"
                          >
                            <span className="font-headings">D</span>
                          </button>
                          <button
                            type="button"
                            className="chip rounded shrink-0 chip-secondary w-10"
                          >
                            <span className="font-headings">E</span>
                          </button>
                          <button
                            type="button"
                            className="chip rounded shrink-0 chip-secondary w-10"
                          >
                            <span className="font-headings">F</span>
                          </button>
                          <button
                            type="button"
                            className="chip rounded shrink-0 chip-secondary w-10"
                          >
                            <span className="font-headings">G</span>
                          </button>
                          <button
                            type="button"
                            className="chip rounded shrink-0 chip-secondary w-10"
                          >
                            <span className="font-headings">H</span>
                          </button>
                          <button
                            type="button"
                            className="chip rounded shrink-0 chip-secondary w-10"
                          >
                            <span className="font-headings">I</span>
                          </button>
                          <button
                            type="button"
                            className="chip rounded shrink-0 chip-secondary w-10"
                          >
                            <span className="font-headings">J</span>
                          </button>
                          <button
                            type="button"
                            className="chip rounded shrink-0 chip-secondary w-10"
                          >
                            <span className="font-headings">K</span>
                          </button>
                          <button
                            type="button"
                            className="chip rounded shrink-0 chip-secondary w-10"
                          >
                            <span className="font-headings">L</span>
                          </button>
                          <button
                            type="button"
                            className="chip rounded shrink-0 chip-secondary w-10"
                          >
                            <span className="font-headings">M</span>
                          </button>
                          <button
                            type="button"
                            className="chip rounded shrink-0 chip-secondary w-10"
                          >
                            <span className="font-headings">N</span>
                          </button>
                          <button
                            type="button"
                            className="chip rounded shrink-0 chip-secondary w-10"
                          >
                            <span className="font-headings">O</span>
                          </button>
                          <button
                            type="button"
                            className="chip rounded shrink-0 chip-secondary w-10"
                          >
                            <span className="font-headings">P</span>
                          </button>
                          <button
                            type="button"
                            className="chip rounded shrink-0 chip-secondary w-10"
                          >
                            <span className="font-headings">Q</span>
                          </button>
                          <button
                            type="button"
                            className="chip rounded shrink-0 chip-secondary w-10"
                          >
                            <span className="font-headings">R</span>
                          </button>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <button
                          type="button"
                          className="button button-sm button-secondary rounded-full"
                          onClick={() => {
                            sideScroll(sliderGroupWrapper.current, 25, sliderGroupSize, sliderGroupSize*3);
                          }}
                        >
                          <span className="icon icon-arrow-sm-right"></span>
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
                          <span className="icon icon-24 icon-arrow-sm-down"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {LeaderboardResults.map((user, userIndex) => (
                  <>
                    <div className="flex gap-2 items-start mb-2">
                      <div className="surface rounded-lg w-1/3 h-[54px] flex items-stretch overflow-hidden">
                        <div
                          className={`w-1/3 text-center px-2 flex items-center justify-center ${
                            userIndex > 2 ? "bg-ui-700/25" : "bg-ui-700"
                          }`}
                        >
                          <span
                            className={`font-headings text-2xl  ${
                              userIndex === 0 ? "text-gold-500" : ""
                            }${userIndex === 1 ? "text-silver-500" : ""} ${
                              userIndex === 2 ? "text-bronze-500" : ""
                            } ${userIndex > 2 ? "text-ui-300" : ""}`}
                          >
                            {userIndex + 1}
                          </span>
                          <div className="absolute">
                            <svg
                              className={`${
                                userIndex === 0 ? "fill-gold-500" : ""
                              }${userIndex === 1 ? "fill-silver-500" : ""} ${
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
                              <span className="font-headings text-lg italic">
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
                              <span className="font-headings text-lg italic">
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
                              <span className="font-headings text-lg italic">
                                {numberWithSpaces(user.rewards.ticket)}
                              </span>
                            </div>
                          )}
                
                        </div>
                      </div>
                      <div className="flex-1 accordion surface rounded-lg">
                        <Accordion
                          header={
                            <>
                              <div className="item">
                                <div className="item-image">
                                  <figure className="avatar avatar-circle avatar-xs">
                                    <div>
                                      <img src={user.avatar} />
                                    </div>
                                  </figure>
                                </div>
                                <div className="item-body">
                                  <div className="item-title">{user.name}</div>
                                </div>
                                <div className="item-body flex justify-around items-center">
                                  <span className="font-bold text-ui-300 leading-none">
                                    {user.stats.brawlPoints}
                                  </span>
                                  <figure className="avatar avatar-square avatar-xs">
                                    <div>
                                      <img src={Clans[user.clanId].avatar} />
                                    </div>
                                  </figure>
                                </div>
                                <div className="item-actions flex items-center gap-2">
                                  <div>
                                    <span className="icon icon-24 icon-arrow-sm-down"></span>
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
                                  <div className="px-3 py-1 rounded bg-ui-850 font-headings text-xl italic">
                                    {user.stats.bestPoints.one}
                                  </div>
                                  <div className="px-3 py-1 rounded bg-ui-850 font-headings text-xl italic">
                                    {user.stats.bestPoints.two}
                                  </div>
                                  <div className="px-3 py-1 rounded bg-ui-850 font-headings text-xl italic">
                                    {user.stats.bestPoints.three}
                                  </div>
                                </div>
                              </li>
                              <li className="col-span-3 md:col-span-1 p-3 text-center rounded bg-gradient-to-b from-ui-800 to-ui-700/25">
                                <h5 className="uppercase font-normal font-body text-sm text-ui-300 mb-1">
                                  Match played
                                </h5>
                                <div className="flex justify-center gap-2">
                                  <div className="px-3 py-1 rounded bg-ui-850 font-headings text-xl italic">
                                    243
                                  </div>
                                </div>
                              </li>
                              <li className="col-span-3 md:col-span-1 p-3 text-center rounded bg-gradient-to-b from-ui-800 to-ui-700/25">
                                <h5 className="uppercase font-normal font-body text-sm text-ui-300 mb-1">
                                  Tiebreaker points
                                </h5>
                                <div className="flex justify-center gap-2">
                                  <div className="px-3 py-1 rounded bg-ui-850 font-headings text-xl italic">
                                    1100 damage
                                  </div>
                                </div>
                              </li>
                              <li className="col-span-3 md:col-span-1 p-3 text-center rounded bg-gradient-to-b from-ui-800 to-ui-700/25">
                                <h5 className="uppercase font-normal font-body text-sm text-ui-300 mb-1">
                                  Player game score
                                </h5>
                                <div className="flex justify-center gap-2">
                                  <div className="px-3 py-1 rounded bg-ui-850 font-headings text-xl italic">
                                    243
                                  </div>
                                </div>
                              </li>
                            </ul>
                            <div className="mt-2 border-t border-ui-700 pl-2 pt-2 flex items-center justify-between">
                              <Link href="/prototype/profile">
                                <a className="link link-main link-hover flex items-center gap-1 text-sm">
                                  <span className="icon icon-profile-2"></span>
                                  <span>Go to Player profile</span>
                                </a>
                              </Link>
                              <Link href="/prototype/profile">
                                <a className="link link-main link-hover flex items-center gap-1 text-sm">
                                  <span className="icon icon-multiple-12"></span>
                                  <span>Go to Clan page</span>
                                </a>
                              </Link>
                              <button
                                type="button"
                                className="button button-tertiary button-sm"
                              >
                                <span className="icon icon-c-warning"></span>
                                <span>Report abuse</span>
                              </button>
                            </div>
                          </div>
                        </Accordion>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div>
              <div className="flex gap-2 justify-center items-center my-4">
                <button type='button' className='button button-ghost'>
                  <span className="icon icon-arrow-up"></span>
                </button>
                <button type='button' className='button button-ghost'>
                  <span>Top 15</span>
                </button>
                <button type='button' className='button button-ghost is-active'>
                  <span>My position</span>
                </button>
                <button type='button' className='button button-ghost'>
                  <span>Bottom 15</span>
                </button>
                <button type='button' className='button button-ghost'>
                  <span className="icon icon-arrow-down"></span>
                </button>
              </div>
              <div className="text-center my-4 text-sm text-ui-300">
                <div>The leaderboard is updated every X minute, <a href="#" className="link">reload the page</a> for an update</div>
                <div>Leaderboard ID: <span className="text-ui-100 font-bold">[date:game:tier:groupId]</span> example: &quot;225VG19&quot; </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
