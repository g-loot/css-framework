import React, { useContext, useEffect, useState } from "react";

import Ad from "../../../components/Ad/Ad";
import Carousel from "../../../components/Carousel/Carousel";
import Link from "next/link";
import ModalLadderHowitworksVideo from "../[game]/ladders/modal-howitworks-video";
import ModalClaimDailyRewards from "./modal-claim-dailyrewards";
import ModalClaimLadderRewards from "./modal-claim-dailyrewards";
import PrototypeStructure from "../../../components/PrototypeNew/PrototypeStructure";
import RewardLadder from "../../../components/RewardLadder/RewardLadder";
import { UiContext } from "../../../contexts/ui";
import { useRouter } from "next/router";
import HomeLaddersSolo from "./component-ladders-solo";
import HomeLaddersClan from "./component-ladders-clan";
import HomeLadderMissions from "./component-ladders-missions";
import ComponentRewardLadder from "../missions/component-rewardladder";
import { usePrototypeData } from "../../../contexts/prototype";
import CarouselNew from "../../../components/Carousel/CarouselNew";

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

        <section className="mb-16">
          <CarouselNew />
        </section>


        <ComponentRewardLadder />

        <h2 className="h4 mb-4 mx-4 sm:mx-0">Ladders</h2>

        <section
          className="mb-8 animate-slide-in-bottom animate-delay"
          style={{ "--delay": "calc(2 * 0.05s)" }}
        >
          <div className="flex gap-2 items-baseline justify-between mx-4 sm:mx-0">
            <h3 className="h6">Solo</h3>
            {!hasNoLadders && (
              <Link href="/prototype-new/valorant/ladders/">
                <a className="link link-hover text-ui-300 text-sm">
                  View Ladder history
                </a>
              </Link>
            )}
          </div>
          <HomeLaddersSolo />
        </section>
        <section
          className="mb-8 animate-slide-in-bottom animate-delay"
          style={{ "--delay": "calc(2 * 0.05s)" }}
        >
          <div className="flex gap-2 items-baseline justify-between mx-4 sm:mx-0">
            <h3 className="h6">Clan</h3>
            {hasNoClan ? (
              <Link href="/prototype-new/clans/">
                <a className="link link-hover text-ui-300 text-sm">
                  Discover Clans
                </a>
              </Link>
            ) : (
              <Link href="/prototype-new/valorant/ladders/">
                <a className="link link-hover text-ui-300 text-sm">
                  View your Clan
                </a>
              </Link>
            )}
          </div>
          <HomeLaddersClan />
        </section>
        <section className="my-16 surface sm:rounded-lg overflow-hidden hidden lg:hidden">
          <div className="relative z-10 px-4 py-20 md:w-1/2 mx-auto text-center">
            <h3 className="h1">
              Make your gg&#39;s more
              <br />
              rewarding with <span className="text-premium-500">Premium</span>
            </h3>
            <p className="text-lg text-ui-100 mt-4 mb-5">
              Get a 50% XP boost on all completed missions &amp; Ladders matches, remove ads and much more.
            </p>
            <Link href={`/prototype-new/premium${prototype.getURLparams()}`}>
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
        {/*
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

        <h2 className="h4 mt-8 mx-4 sm:mx-0">Missions</h2>
        <HomeLadderMissions gameSlug="valorant" />
        <HomeLadderMissions gameSlug="pubg" />
      </PrototypeStructure>
    </>
  );
}
