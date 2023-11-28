import React, { useContext, useState, useEffect } from "react";

import { UiContext } from "@/contexts/ui";
import { useRouter } from "next/router";

import { usePrototypeData } from "@/contexts/prototype";
import Structure from "@/pages/stryda/components/Structure";
import Loader from "@/pages/stryda/components/Loader";
import { VariablesContext } from "@/contexts/variables";
import ModalUpdateClient from "../modal-updateclient";

import Carousel from "@/components/Carousel/Carousel";
import Link from "next/link";
import ModalLadderHowitworksVideo from "../ladders/modal-howitworks-video";
import ModalClaimDailyRewards from "./modal-claim-dailyrewards";
import ModalClaimLadderRewards from "./modal-claim-dailyrewards";
import HomeLaddersSolo from "@/pages/prototype/home/component-ladders-solo";
import HomeLaddersClan from "@/pages/prototype/home/component-ladders-clan";
import HomeLadderMissions from "@/pages/prototype/home/component-ladders-missions";
import ComponentRewardLadder from "../missions/component-rewardladder";

export default function Home() {
  const router = useRouter();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const variablesContext = useContext(VariablesContext);
  const empty = query.empty === "true" ? true : false;
  const [isEmpty, setIsEmpty] = useState(empty);
  const [stateUser, setStateUser] = useState("normal");
  const [stateBattlepass, setStateBattlepass] = useState("normal");
  const [stateMissions, setStateMissions] = useState("normal");
  const [stateCompetitions, setStateCompetitions] = useState("normal");
  const [stateFollowings, setStateFollowings] = useState("normal");
  const [stateFeedAd, setStateFeedAd] = useState("normal");
  const [hasError, setHasError] = useState(false);
  const modalUpdateClient = query.modalupdater === "true" ? true : false;

  function openModalUpdateClient() {
    uiContext.openModal(<ModalUpdateClient />);
  }

  useEffect(() => {
    if (modalUpdateClient) {
      openModalUpdateClient();
    }
  }, [modalUpdateClient]);

  const modalClaimLadder = query.modalclaim === "true" ? true : false;
  const modalClaimDaily = query.modalclaimdaily === "true" ? true : false;
  const modalVideo = query.modalvideo === "true" ? true : false;
  const [submitting, setSubmitting] = useState(false);
  const noclan = query.noclan === "true" ? true : false;
  const [hasNoClan, setHasNoClan] = useState(noclan);
  const noladders = query.noladders === "true" ? true : false;
  const [hasNoLadders, setHasNoLadders] = useState(noladders);
  const isPremium = prototype.isPremium;

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
      <Structure title="Home" fullWidth={true}>
        <Loader
          loader={
            <section className="min-h-screen w-full flex flex-col max-w-3xl mx-auto sm:px-4 md:flex-row md:justify-around gap-8 lg:gap-10 py-8">
              <div className="flex-none w-[300px] space-y-4 hidden md:block rounded surface is-loading min-h-[calc(100vh-116px)]" />
              <div className="flex-1 overflow-x-hidden">
                <div className="max-w-[620px] 2xl:max-w-lg mx-auto space-y-4">
                  <div className="flex-1 rounded surface is-loading aspect-video" />
                  <div className="flex-1 rounded surface is-loading aspect-video" />
                  <div className="flex-1 rounded surface is-loading aspect-video" />
                  <div className="flex-1 rounded surface is-loading aspect-video" />
                </div>
              </div>
              <div className="flex-none w-[300px] hidden 3xl:block rounded surface is-loading min-h-[calc(100vh-116px)]" />
            </section>
          }
        >
          <section className="min-h-screen w-full flex flex-col max-w-3xl mx-auto sm:px-4 md:flex-row md:justify-around gap-8 lg:gap-10 py-8">
            <div className="flex-none w-[300px] space-y-4 hidden md:block">
              <div className="sticky space-y-4 top-16 text-center">
                <div className="surface w-full aspect-[1/2] rounded flex items-center justify-center">
                  <span>
                    Ad
                    <br />
                    Max width: 300px
                  </span>
                </div>
                <Link href={`/stryda/premium`}>
                  <span className="link link-main text-sm">Remove ads</span>
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <section className="surface sm:rounded-lg overflow-hidden mb-8">
                <Carousel size="carousel-sm" />
              </section>
              <ComponentRewardLadder />
              <h2 className="h3 mb-4 mx-4 sm:mx-0">Ladders</h2>
              <section className="mb-8">
                <div className="flex gap-2 items-baseline justify-between mx-4 sm:mx-0">
                  <h3 className="h6">Solo</h3>
                  {!hasNoLadders && (
                    <Link href="/prototype/valorant/ladders/">
                      <button
                        type="button"
                        className="link text-ui-300 text-sm"
                      >
                        View Ladder history
                      </button>
                    </Link>
                  )}
                </div>
                <HomeLaddersSolo hasNoLadders={hasNoLadders} />
              </section>
              <section className="mb-8">
                <div className="flex gap-2 items-baseline justify-between mx-4 sm:mx-0">
                  <h3 className="h6">Clan</h3>
                  {hasNoClan ? (
                    <Link href="/prototype/clans/">
                      <button
                        type="button"
                        className="link text-ui-300 text-sm"
                      >
                        Discover Clans
                      </button>
                    </Link>
                  ) : (
                    <Link href="/prototype/clans/1">
                      <button
                        type="button"
                        className="link text-ui-300 text-sm"
                      >
                        View your Clan
                      </button>
                    </Link>
                  )}
                </div>
                <HomeLaddersClan
                  hasNoClan={hasNoClan}
                  hasNoLadders={hasNoLadders}
                />
              </section>
              <section className="my-16 surface sm:rounded-lg overflow-hidden flex flex-col lg:flex-row items-center">
                <div className="flex-1 grid place-content-center p-8">
                  <img
                    className="w-44 sm:w-44 xl:w-48 h-auto"
                    src="https://res.cloudinary.com/gloot/image/upload/v1696335464/Ladders/Big%20Clan%20Battle/BCB%20Winners%20graphics/bg_bcb_winners_logo.svg"
                    alt="Big Clan Battle winners"
                  />
                </div>
                <div className="flex-3 xl:flex-2 grid place-content-center">
                  <img
                    className="flex-2"
                    src="https://res.cloudinary.com/gloot/image/upload/v1696336013/Ladders/Big%20Clan%20Battle/BCB%20Winners%20graphics/bg_bcb_winners_20231003.webp"
                    alt=""
                  />
                </div>
              </section>
              {!isPremium && (
                <section className="my-16 py-4 surface sm:rounded-lg overflow-hidden flex flex-col lg:flex-row lg:items-center lg:justify-end">
                  <div className="flex-2 relative z-10 p-4 lg:p-8 lg:pr-0 order-2 lg:order-1 text-center lg:text-left">
                    <h3 className="h1 text-6xl lg:text-7xl">
                      Make your gg more
                      <br />
                      rewarding with{" "}
                      <span className="text-premium-500">Premium</span>
                    </h3>
                    <p className="text-ui-300 mt-2 mb-4 max-w-[40ch] mx-auto lg:mx-0">
                      Get a 50% XP boost on all completed missions & Ladders
                      matches, remove ads and much more.
                    </p>
                    <Link
                      href={`/prototype/premium${prototype.getURLparams()}`}
                    >
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
              )}
              <h2 className="h3 mt-8 mb-4 mx-4 sm:mx-0">Missions</h2>
              <div className="mb-2 mx-4 sm:mx-0 text-sm text-ui-300">
                {!isPremium && (
                  <p>
                    Get{" "}
                    <Link href="/prototype/premium">
                      <button type="button" className="text-premium-500 link">
                        Premium
                      </button>
                    </Link>{" "}
                    and earn +50% of XP on all missions
                  </p>
                )}
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 mx-4 sm:mx-0 text-sm text-ui-300"></div>
              <HomeLadderMissions gameSlug="valorant" />
              <HomeLadderMissions gameSlug="pubg" />

              {/* for demo purposes only */}
              <section className="text-sm text-ui-100/0 hover:text-ui-100 flex flex-col items-stretch">
                <a onClick={() => prototype.togglePremium()}>
                  Toggle Premium state {prototype.isPremium ? "ON" : "OFF"}
                </a>
                <a
                  onClick={() => {
                    setHasNoClan(!hasNoClan);
                  }}
                >
                  Toggle has no Clan {hasNoClan ? "ON" : "OFF"}
                </a>
                <a
                  onClick={() => {
                    setHasNoLadders(!hasNoLadders);
                  }}
                >
                  Toggle empty state Ladders {hasNoLadders ? "ON" : "OFF"}
                </a>
              </section>
            </div>
            <div className="flex-none w-[300px] space-y-4 hidden 3xl:block">
              <div className="sticky space-y-4 top-16 text-center">
                <div className="surface w-full aspect-[1/2] rounded flex items-center justify-center">
                  <span>
                    Ad
                    <br />
                    Max width: 300px
                  </span>
                </div>
                <Link href={`/stryda/premium`}>
                  <span className="link link-main text-sm">Remove ads</span>
                </Link>
              </div>
            </div>
          </section>
          {/* for demo purposes only */}
          {prototype.showDemo && (
            <section className="fixed z-[9999] bottom-4 left-4 surface-ui-500 rounded shadow-md p-4 pr-16 text-sm text-ui-100 grid grid-flow-col-dense grid-rows-3 gap-2">
              <div className="absolute top-1 right-1">
                <button
                  type="button"
                  className="button button-sm button-secondary button-close"
                  onClick={() => prototype.setShowDemo(!prototype.showDemo)}
                >
                  <span className="icon icon-e-remove" />
                </button>
              </div>
              <div>
                <h3 className="text-sm">Global states:</h3>
                <div className="form-group pl-4 mt-2">
                  <div className="form-xs form-toggle">
                    <input
                      type="checkbox"
                      name="feed"
                      id="feed-premium"
                      checked={prototype.isPremium}
                      onChange={() => prototype.togglePremium()}
                    />
                    <label htmlFor="feed-premium">Premium state</label>
                  </div>
                  <div className="form-xs form-toggle">
                    <input
                      type="checkbox"
                      name="feed"
                      id="feed-client"
                      checked={prototype.isClient}
                      onChange={() => prototype.toggleClient()}
                    />
                    <label htmlFor="feed-client">Client state</label>
                  </div>
                  <div className="form-xs form-toggle">
                    <input
                      type="checkbox"
                      name="feed"
                      id="feed-error"
                      onChange={() => setHasError(!hasError)}
                    />
                    <label htmlFor="feed-error">Error state</label>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm">User: </h3>
                <div className="form-group pl-4 mt-2">
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="user"
                      id="user-mvp"
                      defaultChecked={stateUser === "mvp"}
                      onChange={() => setStateUser("mvp")}
                    />
                    <label htmlFor="user-mvp">MVP 1</label>
                  </div>
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="user"
                      id="user-normal"
                      defaultChecked={stateUser === "normal"}
                      onChange={() => setStateUser("normal")}
                    />
                    <label htmlFor="user-normal">Normal</label>
                  </div>
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="user"
                      id="user-noclan"
                      defaultChecked={stateUser === "noclan"}
                      onChange={() => setStateUser("noclan")}
                    />
                    <label htmlFor="user-noclan">No Clan</label>
                  </div>
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="user"
                      id="user-empty"
                      defaultChecked={stateUser === "empty"}
                      onChange={() => setStateUser("empty")}
                    />
                    <label htmlFor="user-empty">Empty</label>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm">Battle Pass:</h3>
                <div className="form-group pl-4 mt-2">
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="battlepass"
                      id="battlepass-normal"
                      defaultChecked={stateBattlepass === "normal"}
                      onChange={() => setStateBattlepass("normal")}
                    />
                    <label htmlFor="battlepass-normal">Normal</label>
                  </div>
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="battlepass"
                      id="battlepass-rewards"
                      defaultChecked={stateBattlepass === "rewards"}
                      onChange={() => setStateBattlepass("rewards")}
                    />
                    <label htmlFor="battlepass-rewards">Rewards</label>
                  </div>
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="battlepass"
                      id="battlepass-empty"
                      defaultChecked={stateBattlepass === "empty"}
                      onChange={() => setStateBattlepass("empty")}
                    />
                    <label htmlFor="battlepass-empty">Empty</label>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm">Missions:</h3>
                <div className="form-group pl-4 mt-2">
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="missions"
                      id="missions-normal"
                      defaultChecked={stateMissions === "normal"}
                      onChange={() => setStateMissions("normal")}
                    />
                    <label htmlFor="missions-normal">Normal</label>
                  </div>
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="missions"
                      id="missions-empty"
                      defaultChecked={stateMissions === "empty"}
                      onChange={() => setStateMissions("empty")}
                    />
                    <label htmlFor="missions-empty">Empty / finished</label>
                  </div>
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="missions"
                      id="missions-onboarding"
                      defaultChecked={stateMissions === "onboarding"}
                      onChange={() => setStateMissions("onboarding")}
                    />
                    <label htmlFor="missions-onboarding">Onboarding</label>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm">Competitions:</h3>
                <div className="form-group pl-4 mt-2">
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="competitions"
                      id="competitions-normal"
                      defaultChecked={stateCompetitions === "normal"}
                      onChange={() => setStateCompetitions("normal")}
                    />
                    <label htmlFor="competitions-normal">Normal</label>
                  </div>
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="competitions"
                      id="competitions-empty"
                      defaultChecked={stateCompetitions === "empty"}
                      onChange={() => setStateCompetitions("empty")}
                    />
                    <label htmlFor="competitions-empty">
                      Empty / onboarding
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm">Followings:</h3>
                <div className="form-group pl-4 mt-2">
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="followings"
                      id="followings-normal"
                      defaultChecked={stateFollowings === "normal"}
                      onChange={() => setStateFollowings("normal")}
                    />
                    <label htmlFor="followings-normal">Normal</label>
                  </div>
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="followings"
                      id="followings-empty"
                      defaultChecked={stateFollowings === "empty"}
                      onChange={() => setStateFollowings("empty")}
                    />
                    <label htmlFor="followings-empty">Empty</label>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm">Ad feed item:</h3>
                <div className="form-group pl-4 mt-2">
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="ad"
                      id="ad-normal"
                      defaultChecked={stateFeedAd === "normal"}
                      onChange={() => setStateFeedAd("normal")}
                    />
                    <label htmlFor="ad-normal">With brand as author</label>
                  </div>
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="ad"
                      id="ad-stryda"
                      defaultChecked={stateFeedAd === "stryda"}
                      onChange={() => setStateFeedAd("stryda")}
                    />
                    <label htmlFor="ad-stryda">With Stryda as author</label>
                  </div>
                  <div className="form-xs form-radio">
                    <input
                      type="radio"
                      name="ad"
                      id="ad-noauthor"
                      defaultChecked={stateFeedAd === "noauthor"}
                      onChange={() => setStateFeedAd("noauthor")}
                    />
                    <label htmlFor="ad-noauthor">Without author</label>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm">Modals:</h3>
                <div className="space-y-2 mt-2">
                  <button
                    type="button"
                    className="button button-sm button-ghost"
                    onClick={openModalUpdateClient}
                  >
                    <span>Open Client Updater Modal</span>
                  </button>
                </div>
              </div>
            </section>
          )}
        </Loader>
      </Structure>
    </>
  );
}
