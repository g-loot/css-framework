import React, { useContext, useState } from "react";

import Countdown from "../../components/Countdown/Countdown";
import Link from "next/link";
import ModalClaimLadderRewards from "../prototype/home/modal-claim-dailyrewards";
import ModalContainer from "../../components/Modal/ModalContainer";
import { UiContext } from "../../contexts/ui";
import { VariablesContext } from "../../contexts/variables";
import { getLayout } from "../../components/DesignSystem/DSLayout";

const DSpage = () => {
  const [randomNum1, setRandomNum1] = useState(1);
  const [randomNum2, setRandomNum2] = useState(3);
  const maxNum = 10;
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);

  function clickHandlerNum1(varTarget, max) {
    if (varTarget === max) {
      setRandomNum1((varTarget = 1));
    } else {
      setRandomNum1(varTarget + 1);
    }
  }
  function clickHandlerNum2(varTarget, max) {
    if (varTarget === max) {
      setRandomNum2((varTarget = 1));
    } else {
      setRandomNum2(varTarget + 1);
    }
  }
  function openModalClaimLadderRewards() {
    uiContext.openModal(<ModalClaimLadderRewards></ModalClaimLadderRewards>);
  }

  return (
    <>
      <h1 className="mb-2">Header</h1>

      {/* Structure */}
      <div className="mb-12" id="structure">
        <h2 className="h3 mb-3">Structure</h2>
        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col">
              <div className="flex-1 space-y-4">
                <div className="header surface rounded-lg">
                  <div className="header-breadcrumbs">
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                      <ol>
                        <li>
                          <a href="#">
                            <span className="icon icon-20 icon-home-2" />
                            <span>Home</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>Games</span>
                          </a>
                        </li>
                        <li aria-current="page">
                          <div>
                            <span>Missions</span>
                          </div>
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <div className="header-content">
                    <div className="header-image">
                      <img
                        src="https://res.cloudinary.com/gloot/image/upload/v1657888944/Marketing/2022_prototype/Logo/samesize-missions.svg"
                        alt=""
                      />
                    </div>
                    <div className="header-body">
                      <h2 className="text-4xl mb-2 leading-none">Missions</h2>
                      <p className="text-ui-300 max-w-[70ch] mb-4">
                        Play G-Loot Missions in-game, gather XP, and earn
                        Mission Rewards. You can complete the Daily Missions in
                        any game.
                      </p>
                      <button
                        type="button"
                        className="button button-sm button-secondary"
                      >
                        <span>Tracker required</span>
                      </button>
                    </div>
                  </div>
                  <div className="header-meta">
                    <div className="w-full flex flex-col justify-center items-center gap-2 xl:pl-0 py-4">
                      <div className="flex items-end gap-4 leading-tight">
                        <div className="text-xl xl:text-4xl font-headings font-bold italic text-main">
                          2/3
                        </div>
                        <div className="xl:mb-2">
                          <div className="text-xl font-headings font-bold italic text-ui-200 uppercase">
                            Daily missions completed
                          </div>
                        </div>
                      </div>
                      <ul className="step step-primary step-sm w-full max-w-sm mx-auto">
                        <li>
                          <a href="#">
                            <i />
                            <div />
                            <span />
                          </a>
                        </li>
                        <li className="is-active">
                          <a href="#">
                            <i />
                            <div />
                            <span />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i />
                            <div />
                            <span />
                          </a>
                        </li>
                      </ul>
                      <p className="text-ui-200 text-sm text-center my-4 leading-tight">
                        You can complete the daily missions in any game.
                      </p>
                    </div>
                  </div>
                  <div className="header-bg">
                    <img
                      src="https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-valorant-1.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/85ewj9a4/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With top meta */}
      <div className="mb-12" id="with-top-meta">
        <h2 className="h3 mb-3">With top meta</h2>
        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col">
              <div className="flex-1 space-y-4">
                <div className="header surface rounded-lg">
                  <div className="header-breadcrumbs">
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                      <ol>
                        <li>
                          <a href="#">
                            <span className="icon icon-20 icon-home-2" />
                            <span>Home</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>Games</span>
                          </a>
                        </li>
                        <li aria-current="page">
                          <div>
                            <span>Missions</span>
                          </div>
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <div className="header-content">
                    <div className="header-image">
                      <img
                        src="https://res.cloudinary.com/gloot/image/upload/v1657888944/Marketing/2022_prototype/Logo/samesize-brawl.svg"
                        alt=""
                      />
                    </div>
                    <div className="header-body">
                      <h2 className="text-4xl mb-2 leading-none">Brawls</h2>
                      <p className="text-ui-300 max-w-[45ch] mb-4">
                        Use your stats to climb the Brawl leaderboard and win
                        prizes. No waiting, no dedicated servers. Play on your
                        own schedule!
                      </p>
                      <div className="flex flex-col md:flex-row gap-2">
                        <button
                          type="button"
                          className="button button-sm button-primary button-play"
                        >
                          <span className="icon icon-circle-caret-right" />
                          <span>Learn how to Brawl</span>
                        </button>

                        <button
                          type="button"
                          className="button button-sm button-secondary"
                        >
                          <span className="icon icon-steam" />
                          <span>Steam required</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="header-meta justify-start pr-0">
                    <div className="p-2 bg-gradient-to-r from-ui-900/0 to-ui-900/50 flex gap-1 items-center justify-center xl:justify-end whitespace-nowrap">
                      <span className="font-headings font-bold italic text-ui-100 uppercase">
                        Time Left:
                      </span>
                      <span className="icon icon-clock text-main" />
                      <Countdown
                        additionalClassNames="flex items-baseline gap-0.5 font-headings font-bold italic uppercase text-main"
                        hasDays={true}
                        hasLabels={true}
                        hasSeconds={false}
                        separator=" • "
                        labelsAbbr={true}
                      ></Countdown>
                    </div>
                  </div>
                  <div className="header-bg">
                    <img
                      src="https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-valorant-1.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/u60znybo/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With extra elements */}
      <div className="mb-12" id="with-extra-elements">
        <h2 className="h3 mb-3">With extra elements</h2>
        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col">
              <div className="flex-1 space-y-4">
                <div className="header surface rounded-lg">
                  <div className="header-breadcrumbs">
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                      <ol>
                        <li>
                          <a href="#">
                            <span className="icon icon-20 icon-home-2" />
                            <span>Home</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>Games</span>
                          </a>
                        </li>
                        <li aria-current="page">
                          <div>
                            <span>Tournaments</span>
                          </div>
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <div className="header-content">
                    <div className="header-image">
                      <img
                        src="https://res.cloudinary.com/gloot/image/upload/v1657888944/Marketing/2022_prototype/Logo/samesize-showdown.svg"
                        alt=""
                      />
                    </div>
                    <div className="header-body">
                      <h2 className="text-4xl mb-2 leading-none">Showdown</h2>
                      <p className="text-ui-300 max-w-[45ch] mb-4">
                        Compete in esports tournaments in your favorite games! Invite your friends and compete for bragging rights, prizes, or just for fun.
                      </p>
                    </div>
                  </div>
                  <div className="absolute z-50 top-3 right-3 md:top-auto md:bottom-3 text-0">
                    <span className="icon icon-adult-content text-3xl" />
                  </div>
                  <div className="header-meta justify-start pr-0">
                    <div className="p-2 bg-gradient-to-r from-ui-900/0 to-ui-900/50 flex gap-1 items-center justify-center xl:justify-end whitespace-nowrap">
                      <span className="font-headings font-bold italic text-ui-100 uppercase">
                        Time Left:
                      </span>
                      <span className="icon icon-clock text-main" />
                      <Countdown
                        additionalClassNames="flex items-baseline gap-0.5 font-headings font-bold italic uppercase text-main"
                        hasDays={true}
                        hasLabels={true}
                        hasSeconds={false}
                        separator=" • "
                        labelsAbbr={true}
                      ></Countdown>
                    </div>
                  </div>
                  <div className="header-bg">
                    <img
                      src="https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-pubg-1.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/3gxabjt8/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple */}
      <div className="mb-12" id="simple">
        <h2 className="h3 mb-3">Simple</h2>
        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col">
              <div className="flex-1 space-y-4">
                <div className="header surface rounded-lg">
                  <div className="header-content">
                    <div className="header-body">
                      <h2 className="text-3xl sm:text-4xl">
                        Be stronger with Clans!
                      </h2>
                      <ul className="leading-relaxed text-ui-300 mt-4 list-disc ml-4">
                        <li>
                          Work together in Clan Brawls to earn{" "}
                          <span className="text-ui-100 font-bold">
                            extra Coins
                          </span>
                          .
                        </li>
                        {/*
                        <li>
                          <span className="text-ui-100 font-bold">Compete</span>{" "}
                          in epic Showdowns with your clanmates for big rewards.
                        </li>
  */}
                        <li>
                          Fight to take your Clan to the top of the leaderboard
                          or just{" "}
                          <span className="text-ui-100 font-bold">
                            play for fun
                          </span>
                          .
                        </li>
                        <li>
                          Find the perfect Clan for your playstyle and make{" "}
                          <span className="text-ui-100 font-bold">
                            new friends
                          </span>
                          .
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="header-bg">
                    <img
                      src="https://res.cloudinary.com/gloot/image/upload/v1659442345/Marketing/2022_prototype/Clans_bg.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/fx465hsw/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile */}
      <div className="mb-12" id="profile">
        <h2 className="h3 mb-3">Profile</h2>
        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col">
              <div className="flex-1 space-y-4">
                <div className="header surface rounded-lg">
                  <div className="header-content">
                    <div className="header-body">
                      <div className="flex gap-4 items-center self-center">
                        <div className="avatar avatar-xl avatar-circle">
                          <div>
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_5.jpg"
                              alt="avatar"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <h2 className="text-3xl sm:text-4xl">
                              JackAttack123
                            </h2>
                            <div className="block lg:hidden">
                              <button
                                type="button"
                                className="button button-sm button-ghost"
                              >
                                <span className="icon icon-cogwheel"></span>
                                <span>Profile settings</span>
                              </button>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-6 flex justify-center">
                              <img
                                src="https://flagcdn.com/tt.svg"
                                className="aspect-video rounded-sm max-w-[1.5rem]"
                              />
                            </div>
                            <span className="text-ui-300">
                              Trinidad and Tobago
                            </span>
                          </div>
                          <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors duration-75 text-ui-300 hover:text-main flex items-center gap-2"
                          >
                            <div className="w-6 flex justify-center">
                              <span className="icon icon-20 icon-twitch"></span>
                            </div>
                            <span>@jackattack123</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block absolute z-20 top-2 right-2">
                    <button
                      type="button"
                      className="button button-sm button-tertiary"
                    >
                      <span className="icon icon-cogwheel" />
                      <span>Profile settings</span>
                    </button>
                  </div>
                  <div className="header-meta">
                    <div className="flex justify-center gap-4 py-4">
                      <div className="rounded-full leading-tight bg-gradient-to-b from-ui-900/75 to-ui-900/10 backdrop-blur p-1 flex items-center justify-center w-36 h-36 text-center">
                        <div>
                          <div className="text-4xl font-headings mb-0.5">
                            10000
                          </div>
                          <div className="text-xs text-ui-300 uppercase">
                            Total
                            <br />
                            XP
                          </div>
                        </div>
                      </div>
                      <div className="rounded-full leading-tight bg-gradient-to-b from-ui-900/75 to-ui-900/10 backdrop-blur p-1 flex items-center justify-center w-36 h-36 text-center">
                        <div>
                          <div className="text-4xl font-headings mb-0.5">
                            143
                          </div>
                          <div className="text-xs text-ui-300 uppercase">
                            Played
                            <br />
                            brawls
                          </div>
                        </div>
                      </div>
                      <div className="rounded-full leading-tight bg-gradient-to-b from-ui-900/75 to-ui-900/10 backdrop-blur p-1 flex items-center justify-center w-36 h-36 text-center">
                        <div>
                          <div className="text-4xl font-headings mb-0.5">
                            12
                          </div>
                          <div className="text-xs text-ui-300 uppercase">
                            Played
                            <br />
                            tournaments
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="header-bg">
                    <img
                      src="https://res.cloudinary.com/gloot/image/upload/v1659442345/Marketing/2022_prototype/Clan_bg.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/fos583gv/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
