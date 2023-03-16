import React, { useContext, useEffect, useState } from "react";

import Ad from "../../../../components/Ad/Ad";
import Link from "next/link";
import { UiContext } from "../../../../contexts/ui";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import CardMissionSecondary from "../../../../components/Card/CardMissionSecondary";
import PremiumLogo from "../../../../components/PremiumLogo/PremiumLogo";
import CardMissionTableTr from "../../../../components/Card/CardMissionTableTr";

export default function TabMissionsMissions() {
  const router = useRouter();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const hasAds = query.ads === "true" ? true : false;
  const isPremium = query.premium === "true" ? true : false;
  const { game } = router.query;
  const [submitting, setSubmitting] = useState(false);

  function addToastWithDelay(toast) {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr(toast);
      setSubmitting(false);
    }, 1000);
  }

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game]);

  return (
    <>
      {selectedGame && (
        <>
          {/*
            <section
              className="py-8 animate-slide-in-bottom animate-delay"
              style={{ "--delay": "calc(1 * 0.05s)" }}
            >
              <ComponentRewardLadder />
            </section>
          */}
          <section
            className="py-8 animate-slide-in-bottom animate-delay"
            style={{ "--delay": "calc(2 * 0.05s)" }}
          >
            {/*
            <div className="flex items-center justify-between mb-2 mx-4 sm:mx-0">
             
              <h3 className="h5">Daily missions in {selectedGame.name}</h3>
        
              <div className="hidden sm:flex items-center gap-2">
                <div
                  className="tooltip tooltip-left"
                  data-tooltip="This might take up to 15 minutes. Make sure the match you’re trying to fetch is 100% completed."
                >
                  <button
                    className={`button button-xs button-secondary ${
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
                    <span className="hidden sm:block">
                      Request a stats update
                    </span>
                    <span className="block sm:hidden">Update</span>
                  </button>
                </div>
              </div>
            </div>
            */}

            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 mx-4 sm:mx-0 text-sm text-ui-300">
              <div>
                New missions in <b>4H 23M 12S</b>
              </div>
              <div className="md:text-right flex items-center gap-2">
                <div>
                  Your latest match ended <b>Dec 13 / 8:12 PM</b>
                </div>
                <button
                  className={`button button-xs button-secondary ${
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
                  <span className="hidden sm:block">
                    Request a stats update
                  </span>
                  <span className="block sm:hidden">Update</span>
                </button>
              </div>
            </div>

            {/*

            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 mx-4 sm:mx-0 text-sm text-ui-300">
              <p>
                {!isPremium && (
                  <>
                    Get{" "}
                    <Link href="/prototype/premium">
                      <a className="text-premium-500 link">Premium</a>
                    </Link>{" "}
                    and earn +50% of XP on all missions
                  </>
                )}
              </p>
              <p className="md:text-right">You have completed 1 out of 6 missions</p>
            </div>

            */}

            {selectedGame.needsSteam && (
              <>
                <div className="px-4 sm:px-0">
                  <div className="alert mb-4">
                    <div>
                      <span className="icon icon-24 icon-c-info" />
                      <div>
                        <div className="uppercase">
                          New &amp; improved stats tracking:
                        </div>
                        <p className="max-w-[80ch] text-ui-300">
                          This will affect the way you get progress in your
                          Daily Missions. You will now progress in the Missions
                          once the full match in PUBG BATTLEGROUNDS is
                          completed, you will get your points.
                        </p>
                      </div>
                    </div>
                    <div className="flex-none">
                      <button
                        type="button"
                        className="button button-tertiary button-close"
                      >
                        <span className="icon icon-e-remove" />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 mx-4 sm:mx-0">
              {selectedGame?.missions.map((mission, missionIndex) => (
                <CardMissionSecondary
                  key={missionIndex}
                  mission={mission}
                  index={missionIndex}
                />
              ))}
            </div>
          </section>
          <section
            className="py-8 animate-slide-in-bottom animate-delay"
            style={{ "--delay": "calc(3 * 0.05s)" }}
          >
            <h2 className="h3 mb-4 mx-4 sm:mx-0">Completed missions</h2>
            <div className="overflow-y-hidden overflow-x-auto scrollbar-desktop px-4 sm:px-0 pb-4">
              <table className="table table-rounded rounded-xl w-full">
                <tbody>
                  {selectedGame?.missions.map((mission, missionIndex) => (
                    <>
                      <CardMissionTableTr
                        key={missionIndex}
                        mission={mission}
                        index={missionIndex}
                      />
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-4 mb-8">
              <button type="button" className="button button-sm button-primary">
                <span>Load more</span>
              </button>
            </div>
          </section>
          <section className="py-8 grid grid-cols-1 xl:grid-cols-3 gap-y-4 xl:gap-x-4 items-stretch">
            <div
              className={`relative z-10 surface surface-dimmed p-8 flex flex-col gap-8 md:flex-row justify-center sm:rounded-lg text-center md:text-left ${
                hasAds ? "col-span-1" : "col-span-3"
              }`}
            >
              <PremiumLogo
                src="https://res.cloudinary.com/gloot/image/upload/v1672241197/Stryda/logos/stryda-premium-logo-main-white-animated.svg"
                width="210"
                height="auto"
                className="mx-auto md:mx-0"
              />
              <div className="md:border-l md:border-ui-700 pl-0 md:pl-8">
                <h4 className="text-3xl">
                  <span>Join</span>{" "}
                  <span className="text-premium-500">Stryda Premium</span>
                </h4>
                <p className="max-w-[50ch] text-sm text-ui-300 mx-auto mt-2 mb-5">
                  Increase your amount of XP you can earn each day with a{" "}
                  <Link href={`/prototype/premium${prototype.getURLparams()}`}>
                    <a className="link text-premium-500">Premium subscription</a>
                  </Link>
                  .
                </p>
                <div className="mx-auto mt-2">
                  <Link href={`/prototype/premium${prototype.getURLparams()}`}>
                    <a className="button button-premium is-shining">
                      <span>Join Premium</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className={`relative z-0 surface surface-dimmed col-span-2 sm:rounded-lg ${
                hasAds ? "pt-4" : "hidden"
              }`}
            >
              <div>
                <Ad width="728" height="90" />
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
