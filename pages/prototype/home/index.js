import React, { useContext, useEffect, useState } from "react";

import Ad from "../../../components/Ad/Ad";
import Carousel from "../../../components/Carousel/Carousel";
import Countdown from "../../../components/Countdown/Countdown";
import DailyReward from "../../../components/DailyReward/DailyReward";
import Link from "next/link";
import ListItemBrawl from "../../../components/ListItem/ListItemBrawl";
import ModalBrawlHowitworksVideo from "../[game]/brawls/modal-howitworks-video";
import ModalClaimDailyRewards from "./modal-claim-dailyrewards";
import ModalClaimLadderRewards from "./modal-claim-dailyrewards";
import PrototypeStructure from "../../../components/Prototype/PrototypeStructure";
import RewardLadder from "../../../components/RewardLadder/RewardLadder";
import Tooltip from "../../../components/Tooltip/Tooltip";
import { UiContext } from "../../../contexts/ui";
import { VariablesContext } from "../../../contexts/variables";
import { usePrototypeData } from "../../../contexts/prototype";
import { useRouter } from "next/router";
import HomeBrawlSolo from "./component-brawls-solo";
import HomeBrawlClan from "./component-brawls-clan";
import CardMission from "../../../components/Card/CardMission";
import HomeBrawlMissions from "./component-brawls-missions";

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
  const [submitting, setSubmitting] = useState(false);
  const hasNoClan = query.noclan === "true" ? true : false;
  const hasNoBrawls = query.nobrawls === "true" ? true : false;

  function openModalBrawlHowitworksVideo() {
    uiContext.openModal(
      <ModalBrawlHowitworksVideo></ModalBrawlHowitworksVideo>
    );
  }

  useEffect(() => {
    if (modalVideo) {
      openModalBrawlHowitworksVideo();
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

  function addToastWithDelay(toast) {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr(toast);
      setSubmitting(false);
    }, 1000);
  }

  return (
    <>
      <PrototypeStructure title="Home">
        <Ad width="1005" height="300" />

        <section className="surface sm:rounded-lg overflow-hidden mb-8">
          <Carousel />
        </section>

        <section
          className="mb-8 animate-slide-in-bottom animate-delay"
          style={{ "--delay": "calc(1 * 0.05s)" }}
        >
          <div className="flex flex-col sm:flex-row flex-wrap items-baseline sm:justify-between gap-2 mb-4 mx-4 sm:mx-0">
            <h3 className="h6">Your latest tracked match</h3>
            <span className="text-sm text-ui-300">Match ended November 6 at 3:00am</span>
          </div>
          <div className="surface sm:rounded-lg flex flex-col xl:flex-row xl:justify-between leading-none xl:gap-8">
            <div className="flex flex-row items-center justify-center xl:justify-start gap-8 p-2">
              <div className="flex gap-2 items-center">
                <div className="rounded bg-gradient-to-b from-ui-900/75 to-ui-900/25 p-2 flex items-center justify-center border border-ui-700">
                  <span className="icon text-3xl icon-game-pubg-symbol text-game-pubg" />
                </div>
                <h6>PUBG: BATTLEGROUNDS</h6>
              </div>
              <div className="h6 uppercase text-main">
                Victory
              </div>
            </div>
            <div className="flex flex-col sm:flex-row flex-1 items-center gap-2 p-3 border-t border-ui-700 xl:border-none">
              <div className="flex flex-1 items-stretch justify-center sm:justify-start gap-2 text-sm text-ui-300 whitespace-nowrap">
                <span className="bg-ui-900/50 rounded p-2">11 kills</span>
                <span className="bg-ui-900/50 rounded p-2">14 assists</span>
                <span className="bg-ui-900/50 rounded p-2">5 deaths</span>
                <span className="bg-ui-900/50 rounded p-2">4 headshots</span>
              </div>
              <button
                className={`button button-sm button-primary ${
                  submitting ? "is-loading" : ""
                }`}
                onClick={addToastWithDelay.bind(this, {
                  icon: "f-check",
                  color: "green",
                  text: "Your stats have been updated.",
                  autoDelete: true,
                  autoDeleteDelay: 2500,
                })}
              >
                <span className="icon icon-16 icon-refresh-02" />
                <span>Request a stats update</span>
              </button>
            </div>
          </div>
        </section>

        <h2 className="h3 mb-4 mx-4 sm:mx-0">Competitions</h2>

        <section
          className="mb-8 animate-slide-in-bottom animate-delay"
          style={{ "--delay": "calc(2 * 0.05s)" }}
        >
          <div className="flex gap-2 items-baseline justify-between mx-4 sm:mx-0">
            <h3 className="h6">Brawls</h3>
            {!hasNoBrawls && (
              <Link href="/prototype/valorant/brawls/">
                <a className="link link-hover text-ui-300 text-sm">
                  View Brawl history
                </a>
              </Link>
            )}
          </div>
          <HomeBrawlSolo />
        </section>
        <section
          className="mb-8 animate-slide-in-bottom animate-delay"
          style={{ "--delay": "calc(2 * 0.05s)" }}
        >
          <div className="flex gap-2 items-baseline justify-between mx-4 sm:mx-0">
            <h3 className="h6">Clan Brawls</h3>
            {hasNoClan ? (
              <Link href="/prototype/clans/">
              <a className="link link-hover text-ui-300 text-sm">
                Discover Clans
              </a>
            </Link>
            ) : (
              <Link href="/prototype/valorant/brawls/">
              <a className="link link-hover text-ui-300 text-sm">
                View your Clan
              </a>
            </Link>
            )}
          </div>
          <HomeBrawlClan />
        </section>
        <section className="my-16 surface sm:rounded-lg overflow-hidden hidden lg:block">
          <div className="relative z-10 p-12 w-1/2 xl:w-1/3">
            <h3>
              Play multiple competitions
              <br />
              at the same time
            </h3>
            <p className="text-lg text-ui-300 mt-2 mb-4">
              Try as many Brawls as you like and play as much as you want! See you on the leaderboard! 
            </p>
          </div>
          <img
            className="absolute inset-0 h-full w-full object-cover object-right"
            src="https://res.cloudinary.com/gloot/image/upload/v1668955144/Marketing/2022_prototype/home-ad-multiplebrawls.jpg"
            alt=""
          />
        </section>

        <h2 className="h3 mb-4 mx-4 sm:mx-0">Missions</h2>
        <section
          className="mb-8 animate-slide-in-bottom animate-delay"
          style={{ "--delay": "calc(2 * 0.05s)" }}
        >
          <div className="flex gap-2 items-center justify-between mx-4 sm:mx-0">
            <h3 className="h6">Reward ladder</h3>
          </div>
          <RewardLadder hasReward={false} />
        </section>

        <HomeBrawlMissions gameSlug="valorant" />
        <HomeBrawlMissions gameSlug="pubg" />

        <section className="my-16 surface sm:rounded-lg overflow-hidden hidden lg:block">
          <div className="relative z-10 p-12 w-1/2 xl:w-1/3">
            <h3>
              New fun Missions
              <br />
              every 24 hours!
            </h3>
            <p className="text-lg text-ui-300 mt-2 mb-4">
              Every 24 hours you get new fun Missions across the games you like! Jump in, compete, earn XP and get on top!
            </p>
          </div>
          <img
            className="absolute inset-0 h-full w-full object-cover object-right"
            src="https://res.cloudinary.com/gloot/image/upload/v1669640219/Marketing/2022_prototype/home-ad-newfunmissions.jpg"
            alt=""
          />
        </section>

      </PrototypeStructure>
    </>
  );
}
