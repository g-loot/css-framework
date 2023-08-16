import React, { useContext, useEffect, useState } from "react";

import Ad from "@/components/Ad/Ad";
import Carousel from "@/components/Carousel/Carousel";
import Countdown from "@/components/Countdown/Countdown";
import DailyReward from "@/components/DailyReward/DailyReward";
import Link from "next/link";
import ListItemLadder from "@/components/ListItem/ListItemLadder";
import ModalLadderHowitworksVideo from "../[game]/ladders/modal-howitworks-video";
import ModalClaimDailyRewards from "./modal-claim-dailyrewards";
import ModalClaimLadderRewards from "./modal-claim-dailyrewards";
import PrototypeStructure from "@/components/Prototype/PrototypeStructure";
import RewardLadder from "@/components/RewardLadder/RewardLadder";
import Tooltip from "@/components/Tooltip/Tooltip";
import { UiContext } from "@/contexts/ui";
import { VariablesContext } from "@/contexts/variables";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { query } = useRouter();
  const hasAds = query.ads === "true" ? true : false;
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);
  const prototype = usePrototypeData();
  const modalClaimLadder = query.modalclaim === "true" ? true : false;
  const modalClaimDaily = query.modalclaimdaily === "true" ? true : false;
  const modalVideo = query.modalvideo === "true" ? true : false;
  const [dailyNumber, setDailyNumber] = useState(0);

  function openModalLadderHowitworksVideo() {
    uiContext.openModal(
      <ModalLadderHowitworksVideo></ModalLadderHowitworksVideo>
    );
  }

  useEffect(() => {
    if (modalVideo) {
      openModalLadderHowitworksVideo();
    }
  }, [modalVideo]);

  function openModalClaimDailyRewards() {
    uiContext.openModal(<ModalClaimDailyRewards></ModalClaimDailyRewards>);
  }

  function openModalClaimLadderRewards() {
    uiContext.openModal(<ModalClaimLadderRewards></ModalClaimLadderRewards>);
  }

  useEffect(() => {
    if (modalClaimDaily) {
      openModalClaimDailyRewards();
    }
  }, [modalClaimDaily]);

  useEffect(() => {
    if (modalClaimLadder) {
      openModalClaimLadderRewards();
    }
  }, [modalClaimLadder]);

  return (
    <>
      <PrototypeStructure title="Home">
        <Ad width="1005" height="300" />

        <section className="surface sm:rounded-lg overflow-hidden mb-8">
          <Carousel />
        </section>

        <section
          className="mb-8 animate-slide-in-bottom animate-delay"
          style={{ "--delay": "calc(2 * 0.05s)" }}
        >
          <div className="relative z-10 flex items-center justify-between mb-4 px-4 sm:px-0">
            <div>
              <h2 className="text-2xl mb-1">Weekly Mission Rewards</h2>
              <p className="text-sm text-ui-300 leading-none">
                XP is accumulated from all missions in all games on Stryda
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <div
                className={`${
                  variablesContext.rewardClaimed ? "animate-slide-in-left" : ""
                }`}
              >
                <div className="chip chip-sm chip-secondary">
                  <span className="icon icon-time-machine" />
                  <span>
                    Resets in{" "}
                    <Countdown className="ml-0.5" separator=":" hasHours={true} hasMinutes={true} hasSeconds={true} />
                  </span>
                </div>
              </div>
              <Tooltip
                placement="left"
                tooltip={
                  <div className="max-w-xs text-sm text-center leading-tight">
                    Unlock rewards as you earn XP from Missions. XP is earned
                    across all Missions in all games on Stryda
                  </div>
                }
              >
                <button className="text-ui-300 text-0">
                  <span className="icon icon-16 icon-c-info" />
                </button>
              </Tooltip>
            </div>
          </div>
          <div className="relative z-0">
            <RewardLadder hasReward={true} />
          </div>
        </section>

        <section
          className="mb-8 grid grid-cols-1 xl:grid-cols-3 gap-4 animate-slide-in-bottom animate-delay"
          style={{ "--delay": "calc(3 * 0.05s)" }}
        >
          {/*
          <div className="surface flex flex-col flex-1 min-h-[16rem] lg:min-h-fit relative overflow-hidden sm:rounded-lg p-4">
            <div className="relative z-30 flex-1">
              <div className="relative z-30 mb-2">
                <div className="flex items-baseline gap-2 mb-1">
                  <h2 className="text-2xl">
                    <span>Daily Login Streak</span>
                  </h2>
                  <button
                    type="button"
                    className="tooltip tooltip-bottom text-ui-300"
                    data-tooltip="Claim a free reward each day you visit gloot.com"
                  >
                    <span className="icon icon-16 icon-c-info" />
                  </button>
                </div>
                <p className="text-sm text-ui-300 leading-none">
                  Claim a free reward each day
                </p>
              </div>
            </div>
            <div className="relative z-30 flex flex-col items-center justify-center">
              <button type="button" className="button button-claim is-shining" onClick={openModalClaimLadderRewards}>
                <span>Claim rewards</span>
              </button>
            </div>
            <div
              className="absolute pointer-events-none inset-0 z-10 bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653907437/Marketing/2022_prototype/bg-claim.jpg)`,
              }}
            ></div>
          </div>

          <div className="surface surface-dimmed flex flex-col flex-1 min-h-[16rem] lg:min-h-fit relative overflow-hidden sm:rounded-lg p-4">
            <div className="relative z-30 flex-1 flex flex-col items-center justify-center text-center">
              <button
                type="button"
                className="button button-secondary button-sm button-play"
                onClick={openModalLadderHowitworksVideo}
              >
                <span className="icon icon-circle-caret-right" />
                <span>How to ladder</span>
              </button>
              <h3 className="text-xl mt-6">
                Install the <span className="text-main">tracker</span> to
                <br />
                track your stats and compete.
              </h3>
            </div>
            <div className="relative z-30 flex flex-col items-center justify-center">
              <button type="button" className="button button-primary">
                <span>Download tracker</span>
              </button>
            </div>
          </div>

            */}

          <div className="xl:h-80 surface sm:rounded-lg flex flex-col flex-1 relative overflow-hidden">
            <div className="p-2 border-b border-ui-700 relative z-10 flex-none flex items-start justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl">Daily rewards</h2>
                  <span className="text-sm text-ui-300">
                    Claim a free reward each day
                  </span>
                </div>
              </div>
              <Tooltip
                placement="left"
                tooltip={
                  <div className="max-w-xs">
                    <p className="text-sm leading-tight mb-2">
                      Unlock rewards as you earn XP from Missions. XP is earned
                      across all Missions in all games on Stryda
                    </p>
                    <div className="chip chip-sm chip-secondary">
                      <span className="icon icon-time-machine" />
                      <span>
                        Time left:{" "}
                        <Countdown additionalClassName="ml-1" separator=":" />
                      </span>
                    </div>
                  </div>
                }
              >
                <button className="text-ui-300 text-0">
                  <span className="icon icon-16 icon-c-info" />
                </button>
              </Tooltip>
            </div>
            <div className="relative z-0 flex-1 flex justify-center min-h-[175px] p-2">
              <DailyReward />
            </div>
          </div>

          <div className="xl:h-80 surface sm:rounded-lg flex flex-col">
            <div className="p-2 border-b border-ui-700 relative z-10 flex-none flex items-start justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl">Clan Ladders</h2>
                  <span className="text-sm text-ui-300">
                    Showing your Clans latest Ladders
                  </span>
                </div>
              </div>
              <Tooltip
                placement="left"
                tooltip={
                  <div className="max-w-xs">
                    <p className="text-sm leading-tight mb-2">
                      In Solo Ladders, you compete against other Stryda players
                      to climb a leaderboard. Here you will find your ongoing
                      and finished Ladders you have competed in.
                    </p>
                    <p className="text-sm leading-tight mb-2">
                      After a Ladder has finished, you can claim your reward
                      here. It might take a few hours until the rewards are
                      available to be claimed. Please get in touch with support
                      if you have not received your reward after one day.
                    </p>
                  </div>
                }
              >
                <button className="text-ui-300 text-0">
                  <span className="icon icon-16 icon-c-info" />
                </button>
              </Tooltip>
            </div>
            <div className="relative z-0 flex-1 flex flex-col items-center justify-center text-center pt-8 min-h-[175px]">
              <div className="absolute z-0 inset-0 flex items-center justify-center overflow-hidden">
                <img
                  className="relative z-10"
                  src="https://res.cloudinary.com/gloot/image/upload/v1660741451/Marketing/2022_prototype/3Dobjects/3dobject-clan.webp"
                  width="200"
                  height="auto"
                  alt="Clan"
                />
              </div>
              <h3 className="text-xl max-w-[30ch] mt-8 relative z-10">
                You can earn more rewards when playing Ladders with a Clan!
              </h3>
            </div>
            <div className="flex-none relative z-30 flex flex-col items-center justify-center mb-4">
              <Link href={`/prototype/clans${prototype.getURLparams()}`}>
                <a>
                  <button type="button" className="button button-primary">
                    <span>View clans</span>
                  </button>
                </a>
              </Link>
            </div>
          </div>
          <div className="xl:h-80 surface sm:rounded-lg flex flex-col">
            <div className="p-2 border-b border-ui-700 relative z-10 flex-none flex items-start justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl">Solo Ladders</h2>
                  <span className="text-sm text-ui-300">
                    Showing your latest Solo Ladders
                  </span>
                </div>
              </div>
              <Tooltip
                placement="left"
                tooltip={
                  <div className="max-w-xs">
                    <p className="text-sm leading-tight mb-2">
                      In Clan Ladders, you compete against other Stryda Clans to
                      climb a leaderboard. Here you will find your ongoing and
                      finished Ladders your Clan have competed in.
                    </p>
                    <p className="text-sm leading-tight mb-2">
                      After a Ladder has finished, you can claim your reward
                      here. It might take a few hours until the rewards are
                      available to be claimed. Please get in touch with support
                      if you have not received your reward after one day.
                    </p>
                  </div>
                }
              >
                <button className="text-ui-300 text-0">
                  <span className="icon icon-16 icon-c-info" />
                </button>
              </Tooltip>
            </div>
            <div className="relative z-0 max-h-150px overflow-x-auto lg:overflow-x-hidden lg:overflow-y-auto scrollbar-desktop">
              <ul className="space-x-2 lg:space-x-0 lg:space-y-2 p-2 flex lg:block">
                {prototype.games.map((game, gameIndex) => (
                  <>
                    {game.ladders?.map((ladder, ladderIndex) => (
                      <ListItemLadder
                        key={ladderIndex}
                        game={game}
                        ladder={ladder}
                      />
                    ))}
                  </>
                ))}
              </ul>
            </div>
          </div>
          <div className="xl:h-80 surface sm:rounded-lg flex flex-col flex-1 relative overflow-hidden p-4">
            <div className="relative z-10 flex items-start gap-4">
              <div className="rounded flex items-center justify-center h-12 w-12 bg-gradient-to-b from-ui-900/75 to-ui-800">
                <span className="icon icon-32 icon-game-valorant-symbol text-game-valorant color-white" />
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <h2 className="text-2xl">
                    <span>Latest Match Summary</span>
                  </h2>
                </div>
                <p className="text-sm text-ui-300 leading-none">
                  May 19 / 11:05 PM
                </p>
              </div>
            </div>
            <div className="relative z-10 flex-1 flex justify-center items-center">
              <div className="w-full rounded-xl grid grid-cols-4 gap-2 leading-none mb-4 py-4">
                <div className="flex-1 sm:rounded-lg bg-gradient-to-b from-ui-900/75 to-ui-800/75 backdrop-blur-sm text-center xl:aspect-square flex flex-col gap-1 justify-center px-2 py-4">
                  <div className="text-2xl xl:text-3xl text-ui-100">
                    11
                  </div>
                  <div className="text-xs text-ui-300 h-5">Assists</div>
                </div>
                <div className="flex-1 rounded-lg bg-gradient-to-b from-ui-900/75 to-ui-800/75 backdrop-blur-sm text-center xl:aspect-square flex flex-col gap-1 justify-center px-2 py-4">
                  <div className="text-2xl xl:text-3xl text-ui-100">
                    53
                  </div>
                  <div className="text-xs text-ui-300 h-5">Kills</div>
                </div>
                <div className="flex-1 rounded-lg bg-gradient-to-b from-ui-900/75 to-ui-800/75 backdrop-blur-sm text-center xl:aspect-square flex flex-col gap-1 justify-center px-2 py-4">
                  <div className="text-2xl xl:text-3xl text-ui-100">
                    23
                  </div>
                  <div className="text-xs text-ui-300 h-5">Deaths</div>
                </div>
                <div className="flex-1 rounded-lg bg-gradient-to-b from-ui-900/75 to-ui-800/75 backdrop-blur-sm text-center xl:aspect-square flex flex-col gap-1 justify-center px-2 py-4">
                  <div className="text-2xl xl:text-3xl text-ui-100">
                    38
                  </div>
                  <div className="text-xs text-ui-300 h-5">
                    Headshot
                    <br />
                    kills
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center">
              <button type="button" className="button button-secondary">
                <span>View stats</span>
              </button>
            </div>

            <div
              className="absolute pointer-events-none inset-0 z-0 bg-right-bottom bg-no-repeat bg-contain"
              style={{
                backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653289889/Marketing/202109_gloot2/laststats-valorant.png)`,
              }}
            ></div>
          </div>
        </section>
      </PrototypeStructure>
    </>
  );
}
