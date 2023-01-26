import React, { useContext, useEffect, useRef, useState } from "react";

import Accordion from "../../../components/Accordion/Accordion";
import HowToLadder from "../../../components/HowTo/HowToLadder";
import { VariablesContext } from "../../../contexts/variables";
import Link from "next/link";
import ModalClaimDailyRewards from "../home/modal-claim-dailyrewards";
import Reward from "../../../components/Reward/Reward";
import Tooltip from "../../../components/Tooltip/Tooltip";
import { UiContext } from "../../../contexts/ui";
import { usePrototypeData } from "../../../contexts/prototype";
import { useRouter } from "next/router";
import AchievementFrame from "../../../components/Achievements/AchievementFrame";
import AchievementIcon from "../../../components/Achievements/AchievementIcon";
import Avatar from "../../../components/Avatar/Avatar";

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

export default function TabLaddersSoloLeaderboards() {
  const router = useRouter();
  const { query } = useRouter();
  const hasAds = query.ads === "true" ? true : false;
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedLadder, setSelectedLadder] = useState(null);
  const { game } = router.query;
  const { ladder_id } = router.query;
  const hasClaim = query.hasclaim === "true" ? true : false;
  const isEmpty = query.empty === "true" ? true : false;
  const isPremium = query.premium === "true" ? true : false;
  const freeEntry = query.freeentry === "true" ? true : false;
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);

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

  function openModalClaimLadderRewards() {
    uiContext.openModal(<ModalClaimLadderRewards></ModalClaimLadderRewards>);
  }

  return (
    <>
      {/*
      <section className="pb-4">
        <HowToLadder />
      </section>
  */}
      {!hasClaim && (
        <section
          className="pb-8 animate-slide-in-bottom animate-delay"
          style={{ "--delay": "calc(1 * 0.05s)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="col-span-1 hidden lg:block pt-10">
              {variablesContext.ladderStep >= 3 ? (
                <>
                  <div className="mb-4 space-y-8 surface surface-dimmed rounded-lg px-2 pb-2 pt-4">
                    <div className="text-2xl text-ui-100 text-center relative z-10">
                      Your performance
                    </div>
                    <div className="flex items-center justify-around gap-4 text-center leading-none">
                      <div>
                        <div className="text-3xl  text-ui-100 mb-2">125</div>
                        <div className="text-sm uppercase text-ui-300">
                          Total Ladder
                          <br />
                          points
                        </div>
                      </div>
                      <div>
                        <div className="text-3xl  text-ui-100 mb-2">#5</div>
                        <div className="text-sm uppercase text-ui-300">
                          Current Ladder
                          <br />
                          position
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm uppercase text-main text-center">
                        The 3 best matches
                      </div>
                      <div className="surface rounded">
                        <div className="text-center text-sm text-ui-100 p-2  border-b border-ui-700">
                          Match 7
                        </div>
                        <table className="table table-compact w-full text-sm leading-tight">
                          <tbody>
                            <tr>
                              <td className="text-left">
                                <span className="px-4 text-ui-100">43</span>
                                <span className="text-ui-300">Kills</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-left">
                                <span className="px-4 text-ui-100">3</span>
                                <span className="text-ui-300">
                                  Tiebreaker 1
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-left">
                                <span className="px-4 text-ui-100">3</span>
                                <span className="text-ui-300">
                                  Tiebreaker 2
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="surface rounded">
                        <div className="text-center text-sm text-ui-100 p-2  border-b border-ui-700">
                          Match 2
                        </div>
                        <table className="table table-compact w-full text-sm leading-tight">
                          <tbody>
                            <tr>
                              <td className="text-left">
                                <span className="px-4 text-ui-100">33</span>
                                <span className="text-ui-300">Kills</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-left">
                                <span className="px-4 text-ui-100">3</span>
                                <span className="text-ui-300">
                                  Tiebreaker 1
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-left">
                                <span className="px-4 text-ui-100">3</span>
                                <span className="text-ui-300">
                                  Tiebreaker 2
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="surface rounded">
                        <div className="text-center text-sm text-ui-100 p-2  border-b border-ui-700">
                          Match 1
                        </div>
                        <table className="table table-compact w-full text-sm leading-tight">
                          <tbody>
                            <tr>
                              <td className="text-left">
                                <span className="px-4 text-ui-100">21</span>
                                <span className="text-ui-300">Kills</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-left">
                                <span className="px-4 text-ui-100">3</span>
                                <span className="text-ui-300">
                                  Tiebreaker 1
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-left">
                                <span className="px-4 text-ui-100">3</span>
                                <span className="text-ui-300">
                                  Tiebreaker 2
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {freeEntry ? (
                    <div className="relative flex flex-col items-center">
                      <img
                        className="absolute z-10 -top-4 left-auto right-auto"
                        src="https://res.cloudinary.com/gloot/image/upload/v1672305058/Stryda/3dobjects/3dobject-partypopper.png"
                        width="136"
                        height="auto"
                        alt=""
                      />
                      <div className="mb-4 surface surface-halo halo-t rounded-lg p-4 pt-32 text-center relative z-0">
                        <h2 className="h4 mb-2">First Ladder is on us</h2>
                        <div className="uppercase  text-ui-100">
                          Play{" "}
                          <span className="text-main">
                            x entry matches for free
                          </span>
                        </div>
                        <p className="text-ui-300 my-4">
                          After playing your free entry matches you will hit the
                          leaderboard. Your place will depend on the total of
                          the Ladder points from your best matches and can always
                          be imroved.
                        </p>
                        <p className="text-sm text-main">
                          TIPS: Play more matches to improve your Ladder points
                          and climb the leaderboard.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="relative flex flex-col items-center">
                      <img
                        className="absolute z-10 -top-4 left-auto right-auto"
                        src="https://res.cloudinary.com/gloot/image/upload/v1672305058/Stryda/3dobjects/3dobject-megaphone.png"
                        width="136"
                        height="auto"
                        alt=""
                      />
                      <div className="w-full mb-4 surface surface-halo halo-t rounded-lg p-4 pt-32 text-center relative z-0">
                        <h2 className="h4 mb-2">Compete in this Ladder</h2>
                        <div className="uppercase  text-ui-100">
                          Play at least{" "}
                          <span className="text-main">3 matches</span>
                        </div>
                        <p className="text-ui-300 my-4">
                          The total of your Ladder points from your X best
                          matches will decide your place on a leaderboard.
                        </p>
                        <p className="text-ui-300 max-w-[30ch] mx-auto">
                          You can play as many matches as you like to improve
                          your Ladder points.
                        </p>
                      </div>
                    </div>
                  )}
                </>
              )}

              <div className="w-full mb-4 surface rounded-lg p-4 text-center relative z-0">
                <div>
                  <span className="icon icon-xp-symbol-outline text-[6rem] -mt-4 -mb-6 text-main" />
                </div>

                {isPremium ? (
                  <>
                  <p className="text-ui-300 max-w-[30ch] mx-auto">
                    As a <b className="text-ui-100">Premium user</b>, you earn <b className="text-ui-100">450 XP</b> for each registered Ladder match.
                  </p>
                  <p className="text-ui-300 max-w-[30ch] mx-auto">
                    You will get the XP for your placement matches when you reach the leaderboard.
                  </p>
                  </>
                ) : (
                  <>
                    <p className="text-ui-300 max-w-[30ch] mx-auto mb-4">
                      Earn 300 XP for each registered Ladder match, you will get the XP for your placement matches when you reach the leaderboard.
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
              <div className="flex justify-center mb-4">
                <button
                  type="button"
                  className="button button-ghost is-active mx-auto"
                >
                  <span>My position</span>
                </button>
              </div>
            </div>
            {isEmpty ? (
              <div className="col-span-1 lg:col-span-3 px-4 py-8 text-center">
                <div className="max-w-sm mx-auto">
                  <img
                    className="mx-auto"
                    src="https://res.cloudinary.com/gloot/image/upload/v1661353259/Marketing/2022_prototype/Decoration-crown.png"
                    width="220"
                    height="auto"
                    alt=""
                  />
                  <div className="mt-2 mb-6">
                    <h3 className="h4 text-ui-300 leading-tight mb-1">
                      Be the first to join this leaderboard!
                    </h3>
                    <p className="max-w-[45ch] text-ui-400 mx-auto">
                      The top position is currently all yours for taking if your
                      skill is on this level
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col-span-1 lg:col-span-3">
                <div className="sm:rounded-lg">
                  <div className="relative z-10 flex items-center justify-end gap-2 px-4">
                    <span className="text-sm text-ui-300">
                      What are the different Ladder levels?
                    </span>
                    <Tooltip
                      tooltip={
                        <div className="max-w-xs leading-tight">
                          <h5 className="text-lg">Ladder levels</h5>
                          <p className="text-sm mb-2">
                            Some Ladders put players into different levels based
                            on their skills and performance while others are
                            open for everyone no matter the skill level.
                          </p>
                          <h5 className="text-lg">Groups &amp; leaderboards</h5>
                          <p className="text-sm">
                            Some Ladders are so big that they are split into
                            smaller groups to give everyone a better chance to
                            win. Each group has its own leaderboard and rewards.
                          </p>
                        </div>
                      }
                    >
                      <button type="button" className="text-ui-300">
                        <span className="icon icon-16 icon-c-info" />
                      </button>
                    </Tooltip>
                  </div>
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
                            <div className="avatar avatar-circle avatar-xs">
                              <div>
                                <img src="https://res.cloudinary.com/gloot/image/upload/v1654063975/Marketing/2022_prototype/DummyContent/teams/teamlogo_CrocEsports.png" />
                              </div>
                              <i className="radar" />
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
                  <div className="">
                    <div className="flex items-center py-4 gap-4">
                      <div className="hidden md:flex gap-2 items-center pr-4 leading-none border-r border-ui-700">
                        <span className="uppercase text-sm text-ui-300">
                          Your group:
                        </span>
                        <button
                          type="button"
                          onClick={loadGroup.bind(this, 6)}
                          className={`chip chip-secondary rounded shrink-0 w-10 ${
                            selectedGroup === 6
                              ? "pointer-events-none"
                              : "opacity-40"
                          }`}
                        >
                          <span
                            className={`${
                              selectedGroup === 6 ? "text-main" : ""
                            }`}
                          >
                            G
                          </span>
                        </button>
                      </div>
                      <div className="flex-1 flex gap-2 items-center leading-none">
                        <span className="hidden md:block uppercase text-sm text-ui-300">
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
                                loadGroup.bind(this, selectedGroup - 2);
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
                              <div className="flex flex-row-reverse items-center justify-start gap-2">
                                {Groups.map((group, groupIndex) => (
                                  <>
                                    <button
                                      type="button"
                                      key={groupIndex}
                                      ref={sliderGroupItem}
                                      onClick={loadGroup.bind(this, groupIndex)}
                                      className={`chip chip-secondary rounded shrink-0 w-10 ${
                                        selectedGroup === groupIndex
                                          ? "pointer-events-none"
                                          : "opacity-40"
                                      }`}
                                    >
                                      {groupIndex === 6 && (
                                        <span
                                          className={`icon icon-profile-2 ${
                                            selectedGroup === groupIndex
                                              ? "text-main"
                                              : ""
                                          }`}
                                        />
                                      )}
                                      <span
                                        className={`${
                                          selectedGroup === groupIndex
                                            ? "text-main"
                                            : ""
                                        }`}
                                      >
                                        {group}
                                      </span>
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
                                loadGroup.bind(this, selectedGroup + 1);
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
                            <span>Ladder points</span>
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
                        {selectedLadder &&
                          selectedLadder.soloLeaderboard.map(
                            (user, userIndex) => (
                              <>
                                <div className="item rounded-lg h-[58px]">
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
                                </div>
                              </>
                            )
                          )}
                      </ul>
                    )}
                    {!isLoadingGroup && (
                      <>
                        {selectedLadder &&
                          selectedLadder.soloLeaderboard?.map(
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
                                    className={`surface rounded-lg w-1/4 h-[58px] flex items-stretch overflow-hidden ${
                                      prototype.getUserByID(user.user)?.isYou
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
                                      prototype.getUserByID(user.user)?.isYou
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
                                            <div className="flex-1">
                                              <Link
                                                href={`/prototype-new/profile/${
                                                  user.user
                                                }${prototype.getURLparams()}`}
                                              >
                                                <div className="flex gap-2 items-center interactive">
                                                  <Avatar id={user.user} />
                                                  <div className="item-title">
                                                    <span
                                                      className={`${
                                                        prototype.getUserByID(
                                                          user.user
                                                        )?.isYou
                                                          ? "text-main font-bold"
                                                          : ""
                                                      } ${
                                                        prototype.getUserByID(
                                                          user.user
                                                        )?.isPremium
                                                          ? "text-premium-500"
                                                          : ""
                                                      }`}
                                                    >
                                                      {prototype.getUserByID(
                                                        user.user
                                                      )?.clan && (
                                                        <>
                                                          &#91;
                                                          {
                                                            prototype.getClanByID(
                                                              prototype.getUserByID(
                                                                user.user
                                                              )?.clan
                                                            )?.tag
                                                          }
                                                          &#93;{" "}
                                                        </>
                                                      )}

                                                      {
                                                        prototype.getUserByID(
                                                          user.user
                                                        )?.nickname
                                                      }
                                                    </span>
                                                  </div>
                                                </div>
                                              </Link>
                                            </div>
                                            <div className="item-body flex justify-around items-center">
                                              <Tooltip
                                                placement="left"
                                                tooltip={
                                                  <div className="max-w-xs text-sm text-center leading-tight">
                                                    Mission LVL 1
                                                  </div>
                                                }
                                              >
                                                <div className="w-12 achievement-level-1">
                                                  <AchievementFrame url="https://res.cloudinary.com/gloot/image/upload/v1670405826/Marketing/2022_prototype/Achievements/achievement-frame-lvl1-animated.svg" />
                                                  <AchievementIcon url="https://res.cloudinary.com/gloot/image/upload/v1670332387/Marketing/2022_prototype/Achievements/achivement-icon-mission.svg" />
                                                </div>
                                              </Tooltip>
                                              <span className="text-ui-300 leading-none">
                                                {user.stats.ladderPoints}
                                              </span>
                                              {prototype.getUserByID(user.user)
                                                ?.clan ? (
                                                <Link
                                                  href={`/prototype-new/clans/${
                                                    prototype.getUserByID(
                                                      user.user
                                                    ).clan
                                                  }${prototype.getURLparams()}`}
                                                >
                                                  <a>
                                                    <Tooltip
                                                      placement="left"
                                                      tooltip={
                                                        <div className="max-w-xs text-sm text-center leading-tight">
                                                          {
                                                            prototype.getClanByID(
                                                              prototype.getUserByID(
                                                                user.user
                                                              )?.clan
                                                            )?.nickname
                                                          }
                                                        </div>
                                                      }
                                                    >
                                                      <div
                                                        className={`avatar avatar-squircle avatar-xs interactive ${
                                                          !prototype.getUserByID(
                                                            user.user
                                                          ).clan
                                                            ? "opacity-0"
                                                            : ""
                                                        }`}
                                                      >
                                                        <div>
                                                          <img
                                                            src={
                                                              prototype.getClanByID(
                                                                prototype.getUserByID(
                                                                  user.user
                                                                )?.clan
                                                              )?.avatar
                                                            }
                                                          />
                                                        </div>
                                                      </div>
                                                    </Tooltip>
                                                  </a>
                                                </Link>
                                              ) : (
                                                <div
                                                  className={`avatar avatar-squircle avatar-xs interactive opacity-0`}
                                                />
                                              )}
                                            </div>
                                          </div>
                                        </>
                                      }
                                    >
                                      <div className="p-2">
                                        <ul className="gap-2 grid grid-cols-3">
                                          <li className="col-span-3 p-3 text-center rounded bg-gradient-to-b from-ui-800 to-ui-700/25">
                                            <h5 className="uppercase font-normal font-body text-sm text-ui-300 mb-1 not-italic">
                                              Match points in best [number]
                                              matches
                                            </h5>
                                            <div className="flex justify-center gap-2">
                                              <div className="px-3 py-1 rounded bg-ui-850 text-xl">
                                                {numberWithSpaces(
                                                  getRandomInt(2000)
                                                )}
                                              </div>
                                              <div className="px-3 py-1 rounded bg-ui-850 text-xl">
                                                {numberWithSpaces(
                                                  getRandomInt(2000)
                                                )}
                                              </div>
                                              <div className="px-3 py-1 rounded bg-ui-850 text-xl">
                                                {numberWithSpaces(
                                                  getRandomInt(2000)
                                                )}
                                              </div>
                                            </div>
                                          </li>
                                          <li className="col-span-3 md:col-span-1 p-3 flex flex-col text-center rounded bg-gradient-to-b from-ui-800 to-ui-700/25">
                                            <h5 className="flex-none uppercase font-normal font-body text-sm text-ui-300 mb-1 not-italic">
                                              Match played
                                            </h5>
                                            <div className="flex-1 flex justify-center gap-2">
                                              <div className="px-3 py-1 flex flex-col justify-center items-center text-lg">
                                                <div>
                                                  {numberWithSpaces(
                                                    getRandomInt(500)
                                                  )}
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          <li className="col-span-3 md:col-span-1 p-3 flex flex-col text-center rounded bg-gradient-to-b from-ui-800 to-ui-700/25">
                                            <h5 className="flex-none uppercase font-normal font-body text-sm text-ui-300 mb-1 not-italic">
                                              Tiebreaker points
                                            </h5>
                                            <div className="flex-1 flex justify-center gap-2">
                                              <div className="px-3 py-1 flex flex-col justify-center items-center text-lg">
                                                <div>
                                                  {numberWithSpaces(
                                                    getRandomInt(2000)
                                                  )}{" "}
                                                  damage
                                                </div>
                                                <div>
                                                  {numberWithSpaces(
                                                    getRandomInt(50)
                                                  )}{" "}
                                                  headshots
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                          <li className="col-span-3 md:col-span-1 p-3 flex flex-col text-center rounded bg-gradient-to-b from-ui-800 to-ui-700/25">
                                            <h5 className="flex-none uppercase font-normal font-body text-sm text-ui-300 mb-1 not-italic">
                                              Player game score
                                            </h5>
                                            <div className="flex-1 flex justify-center gap-2">
                                              <div className="px-3 py-1 flex flex-col justify-center items-center text-lg">
                                                <div>
                                                  {numberWithSpaces(
                                                    getRandomInt(500)
                                                  )}
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                        <div className="mt-2 border-t border-ui-700 pl-2 pt-2 flex items-center justify-between">
                                          <Link href="/prototype-new/profile/1">
                                            <a className="link link-main link-hover flex items-center gap-1 text-sm">
                                              <span className="icon icon-profile-2" />
                                              <span>Go to Player profile</span>
                                            </a>
                                          </Link>
                                          <Link href="/prototype-new/profile/1">
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
            )}
          </div>
        </section>
      )}
      {hasClaim && (
        <div className="flex items-center justify-center text-center my-6">
          <div className="leading-none relative max-w-md w-full pt-6">
            <div className="max-w-[45ch] mx-auto">
              <h2 className="h3 mb-8">
                You have rewards to claim from your previous Ladder!
              </h2>
              <button
                type="button"
                className="button button-claim is-shining"
                onClick={openModalClaimLadderRewards}
              >
                <span className="icon icon-present animate-bounce" />
                <span>Claim rewards</span>
              </button>
            </div>
            <div className="absolute w-full -top-2 left-[50%] -translate-x-[50%]">
              <div className="absolute w-44 xl:w-1/3 left-0">
                <img
                  className="absolute object-fill animate-floating animate-delay"
                  style={{ "--delay": "calc(0 * 0.85s)" }}
                  src="https://res.cloudinary.com/gloot/image/upload/v1658393885/Marketing/2022_prototype/Tournament_wings-1.svg"
                  width="100%"
                  height="auto"
                  alt=""
                />
                <img
                  className="absolute object-fill animate-floating animate-delay top-3"
                  style={{ "--delay": "calc(1 * 0.85s)" }}
                  src="https://res.cloudinary.com/gloot/image/upload/v1658393885/Marketing/2022_prototype/Tournament_wings-2.svg"
                  width="100%"
                  height="auto"
                  alt=""
                />
                <img
                  className="absolute object-fill animate-floating animate-delay top-5"
                  style={{ "--delay": "calc(2 * 0.85s)" }}
                  src="https://res.cloudinary.com/gloot/image/upload/v1658393885/Marketing/2022_prototype/Tournament_wings-3.svg"
                  width="100%"
                  height="auto"
                  alt=""
                />
                <img
                  className="absolute object-fill animate-floating animate-delay top-8"
                  style={{ "--delay": "calc(3 * 0.85s)" }}
                  src="https://res.cloudinary.com/gloot/image/upload/v1658393885/Marketing/2022_prototype/Tournament_wings-4.svg"
                  width="100%"
                  height="auto"
                  alt=""
                />
              </div>
              <div className="absolute w-44 xl:w-1/3 right-0 -scale-x-100">
                <img
                  className="absolute object-fill animate-floating animate-delay"
                  style={{ "--delay": "calc(0 * 0.85s)" }}
                  src="https://res.cloudinary.com/gloot/image/upload/v1658393885/Marketing/2022_prototype/Tournament_wings-1.svg"
                  width="100%"
                  height="auto"
                  alt=""
                />
                <img
                  className="absolute object-fill animate-floating animate-delay top-3"
                  style={{ "--delay": "calc(1 * 0.85s)" }}
                  src="https://res.cloudinary.com/gloot/image/upload/v1658393885/Marketing/2022_prototype/Tournament_wings-2.svg"
                  width="100%"
                  height="auto"
                  alt=""
                />
                <img
                  className="absolute object-fill animate-floating animate-delay top-5"
                  style={{ "--delay": "calc(2 * 0.85s)" }}
                  src="https://res.cloudinary.com/gloot/image/upload/v1658393885/Marketing/2022_prototype/Tournament_wings-3.svg"
                  width="100%"
                  height="auto"
                  alt=""
                />
                <img
                  className="absolute object-fill animate-floating animate-delay top-8"
                  style={{ "--delay": "calc(3 * 0.85s)" }}
                  src="https://res.cloudinary.com/gloot/image/upload/v1658393885/Marketing/2022_prototype/Tournament_wings-4.svg"
                  width="100%"
                  height="auto"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
