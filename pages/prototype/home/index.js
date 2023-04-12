import React, { useContext, useEffect, useState } from "react";

import Ad from "../../../components/Ad/Ad";
import Carousel from "../../../components/Carousel/Carousel";
import Link from "next/link";
import ModalLadderHowitworksVideo from "../[game]/ladders/modal-howitworks-video";
import ModalClaimDailyRewards from "./modal-claim-dailyrewards";
import ModalClaimLadderRewards from "./modal-claim-dailyrewards";
import PrototypeStructure from "../../../components/Prototype/PrototypeStructure";
import RewardLadder from "../../../components/RewardLadder/RewardLadder";
import { UiContext } from "../../../contexts/ui";
import { useRouter } from "next/router";
import HomeLaddersSolo from "./component-ladders-solo";
import HomeLaddersClan from "./component-ladders-clan";
import HomeLadderMissions from "./component-ladders-missions";
import ComponentRewardLadder from "../[game]/missions/component-rewardladder";
import { usePrototypeData } from "../../../contexts/prototype";

export default function Home() {
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const modalClaimLadder = query.modalclaim === "true" ? true : false;
  const modalClaimDaily = query.modalclaimdaily === "true" ? true : false;
  const modalVideo = query.modalvideo === "true" ? true : false;
  const [submitting, setSubmitting] = useState(false);
  const hasNoClan = query.noclan === "true" ? true : false;
  const hasNoLadders = query.noladders === "true" ? true : false;
  const isPremium = query.premium === "true" ? true : false;
  const prototype = usePrototypeData();

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
          <Carousel size="carousel-sm" />
        </section>

        {/*

        <section
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row flex-wrap items-baseline sm:justify-between gap-2 mb-4 mx-4 sm:mx-0">
            <h3 className="h6">Your latest tracked match</h3>
            <span className="text-sm text-ui-300">
              Match ended November 6 at 3:00am
            </span>
          </div>
          <div className="surface surface-dimmed sm:rounded-lg flex flex-col xl:flex-row xl:justify-between leading-none xl:gap-8">
            <div className="flex flex-row items-center justify-center xl:justify-start gap-8 p-2">
              <div className="flex gap-2 items-center">
                <div className="rounded bg-gradient-to-b from-ui-900/75 to-ui-900/25 p-2 flex items-center justify-center border border-ui-700">
                  <span className="icon text-3xl icon-game-pubg-symbol text-game-pubg" />
                </div>
                <h6>PUBG: BATTLEGROUNDS</h6>
              </div>
              <div className="h6 uppercase text-main">Victory</div>
            </div>
            <div className="flex flex-col sm:flex-row flex-1 items-center gap-2 p-3 border-t border-ui-700 xl:border-none">
              <div className="flex flex-1 items-stretch justify-center sm:justify-start gap-2 text-sm text-ui-300 whitespace-nowrap">
                <span className="bg-ui-900/50 rounded p-2">11 kills</span>
                <span className="bg-ui-900/50 rounded p-2">14 assists</span>
                <span className="bg-ui-900/50 rounded p-2">5 deaths</span>
                <span className="bg-ui-900/50 rounded p-2">4 headshots</span>
              </div>
              <button
                className={`button button-sm button-secondary ${
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

        */}

        <ComponentRewardLadder />

        <h2 className="h3 mb-4 mx-4 sm:mx-0">Ladders</h2>

        <section className="mb-8">
          <div className="flex gap-2 items-baseline justify-between mx-4 sm:mx-0">
            <h3 className="h6">Solo</h3>
            {!hasNoLadders && (
              <Link href="/prototype/valorant/ladders/">
                <a className="link link-hover text-ui-300 text-sm">
                  View Ladder history
                </a>
              </Link>
            )}
          </div>
          <HomeLaddersSolo />
        </section>
        <section className="mb-8">
          <div className="flex gap-2 items-baseline justify-between mx-4 sm:mx-0">
            <h3 className="h6">Clan</h3>
            {hasNoClan ? (
              <Link href="/prototype/clans/">
                <a className="link link-hover text-ui-300 text-sm">
                  Discover Clans
                </a>
              </Link>
            ) : (
              <Link href="/prototype/valorant/ladders/">
                <a className="link link-hover text-ui-300 text-sm">
                  View your Clan
                </a>
              </Link>
            )}
          </div>
          <HomeLaddersClan />
        </section>
        <section className="my-16 py-4 surface flex-1 sm:rounded-lg overflow-hidden flex flex-col lg:flex-row lg:items-center lg:justify-end">
          <div className="flex-2 relative z-10 p-4 lg:p-8 lg:pr-0 order-2 lg:order-1 text-center lg:text-left">
            <h3 className="h1 text-6xl lg:text-7xl">
              Make your gg more
              <br />
              rewarding with <span className="text-premium-500">Premium</span>
            </h3>
            <p className="text-ui-300 mt-2 mb-4 max-w-[40ch] mx-auto lg:mx-0">
              Get a 50% XP boost on all completed missions & Ladders matches,
              remove ads and much more.
            </p>
            <Link href={`/prototype/premium${prototype.getURLparams()}`}>
              <button type="button" className="button button-premium">
                <span>Learn more</span>
              </button>
            </Link>
          </div>
          <div className="relative z-10 lg:order-2 flex-1 px-8 grid place-items-center">
            <img
              className="object-contain max-h-60"
              src="https://res.cloudinary.com/gloot/image/upload/v1675777113/Stryda/illustrations/home_premium_banner.png"
              alt=""
            />
          </div>
          <img
            className="absolute inset-0 h-full w-full object-cover object-right opacity-50"
            src="https://res.cloudinary.com/gloot/image/upload/v1674045863/Stryda/illustrations/home-premium.jpg"
            alt=""
          />
        </section>
        {/*
        <section className="my-16 surface sm:rounded-lg overflow-hidden hidden lg:block">
          <div className="relative z-10 px-4 py-20 md:w-1/2 mx-auto text-center">
            <h3 className="h1 text-7xl">
              Make your gg&#39;s more
              <br />
              rewarding with <span className="text-premium-500">Premium</span>
            </h3>
            <p className="text-lg mt-4 mb-5">
              Get a 50% XP boost on all completed missions &amp; Ladders
              matches, remove ads and much more.
            </p>
            <Link href={`/prototype/premium${prototype.getURLparams()}`}>
              <button
                type="button"
                className="button button-lg button-premium is-shining"
              >
                <span>View premium plans</span>
              </button>
            </Link>
          </div>
          <img
            className="absolute inset-0 h-full w-full object-cover object-right opacity-50"
            src="https://res.cloudinary.com/gloot/image/upload/v1674045863/Stryda/illustrations/home-premium.jpg"
            alt=""
          />
        </section>
       
        <section className="my-16 surface sm:rounded-lg overflow-hidden hidden lg:block">
          <div className="relative z-10 p-12 w-1/2 xl:w-1/3">
            <h3>
              New fun Missions
              <br />
              every 24 hours!
            </h3>
            <p className="text-lg text-ui-300 mt-2 mb-4">
              Every 24 hours you get new fun Missions across the games you like!
              Jump in, compete, earn XP and get on top!
            </p>
          </div>
          <img
            className="absolute inset-0 h-full w-full object-cover object-right"
            src="https://res.cloudinary.com/gloot/image/upload/v1672676888/Stryda/illustrations/home-ad-newfunmissions.jpg"
            alt=""
          />
        </section>
        */}
        {/*
        <section className="my-16 surface sm:rounded-lg overflow-hidden hidden lg:block">
          <div className="relative z-10 p-12 w-1/2 xl:w-1/3">
            <h3>
              Play multiple competitions
              <br />
              at the same time
            </h3>
            <p className="text-lg text-ui-300 mt-2 mb-4">
              Try as many Ladders as you like and play as much as you want! See
              you on the leaderboard!
            </p>
          </div>
          <img
            className="absolute inset-0 h-full w-full object-cover object-left opacity-50 xl:opacity-100"
            src="https://res.cloudinary.com/gloot/image/upload/v1672675509/Stryda/illustrations/home-ad-multipleladders.jpg"
            alt=""
          />
        </section>
        */}

        <h2 className="h3 mt-8 mb-4 mx-4 sm:mx-0">Missions</h2>
        <div className="mb-2 mx-4 sm:mx-0 text-sm text-ui-300">
          {!isPremium && (
            <p>
              Get{" "}
              <Link href="/prototype/premium">
                <a className="text-premium-500 link">Premium</a>
              </Link>{" "}
              and earn +50% of XP on all missions
            </p>
          )}
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 mx-4 sm:mx-0 text-sm text-ui-300"></div>
        <HomeLadderMissions gameSlug="valorant" />
        <HomeLadderMissions gameSlug="pubg" />
      </PrototypeStructure>
    </>
  );
}
