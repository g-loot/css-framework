import React, { useContext, useEffect, useState } from "react";

import Ad from "../../../../components/Ad/Ad";
import Countdown from "../../../../components/Countdown/Countdown";
import Link from "next/link";
import RewardLadder from "../../../../components/RewardLadder/RewardLadder";
import { UiContext } from "../../../../contexts/ui";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";

export default function TabMissionsMissions() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedGame, setSelectedGame] = useState(null);
  const hasAds = query.ads === "true" ? true : false;
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

  
  function calculatePercent(current, max) {
    return (100 * max) / current;
  }
  return (
    <>
      {selectedGame && (
        <>
          <section
            className="py-8 animate-slide-in-bottom animate-delay"
            style={{ "--delay": "calc(1 * 0.05s)" }}
          >
            <div className="flex items-center justify-between mb-2 px-4 sm:px-0">
              <div>
                <h2 className="text-2xl flex-none">Weekly Mission Rewards</h2>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <div className="chip chip-sm chip-secondary">
                  <span className="icon icon-time-machine" />
                  <span>
                    Resets in <Countdown additionalClassName="ml-1" separator=":" />
                  </span>
                </div>
                <button
                  className="hidden tooltip tooltip-left text-ui-300 text-0"
                  data-tooltip="Unlock rewards to earn XP"
                >
                  <span className="icon icon-16 icon-c-info" />
                </button>
              </div>
            </div>
            {selectedGame.needsSteam && (
              <>
                <div className="px-4 sm:px-0">
                  <div className="alert mb-4">
                    <div>
                      <span className="icon icon-24 icon-steam" />
                      <div>
                        <div className="font-bold uppercase">Important:</div>
                        <p className="max-w-[80ch] text-ui-300">
                          To complete Missions and earn rewards, you need to{" "}
                          <Link
                            href={`profile/settings${hasAds ? "?ads=true" : ""}`}
                          >
                            <a className="link">
                              connect your Steam account to G-Loot
                            </a>
                          </Link>
                          .
                        </p>
                      </div>
                    </div>
                    <div className="flex-none">
                      <Link href={`profile/settings${hasAds ? "?ads=true" : ""}`}>
                        <a className="button button-sm button-secondary">
                          <span>
                            Connect{" "}
                            <span className="hidden sm:inline">my account</span>
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}

            <RewardLadder hasReward={selectedGame.hasReward} />
            <div className="text-center text-sm text-ui-300 mt-4">
              XP is accumulated from all missions in all games on G-Loot.
            </div>
          </section>
          <section
            className="py-8 animate-slide-in-bottom animate-delay"
            style={{ "--delay": "calc(2 * 0.05s)" }}
          >
            <div className="flex items-center justify-between mb-2 px-4 sm:px-0">
              <div>
                <h2 className="text-2xl">
                  Daily missions in {selectedGame.name}
                </h2>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <div className="chip chip-sm chip-secondary">
                  <span className="icon icon-time-machine" />
                  <span>
                    Resets in <Countdown additionalClassName="ml-1" separator=":" />
                  </span>
                </div>
                <button
                  className="hidden tooltip tooltip-left text-ui-300 text-0"
                  data-tooltip="Unlock rewards to earn XP"
                >
                  <span className="icon icon-16 icon-c-info" />
                </button>
              </div>
            </div>
            {selectedGame.needsSteam && (
              <>
                <div className="px-4 sm:px-0">
                  <div className="alert mb-4">
                    <div>
                      <span className="icon icon-24 icon-steam" />
                      <div>
                        <div className="font-bold uppercase">
                          New &amp; improved stats tracking:
                        </div>
                        <p className="max-w-[80ch] text-ui-300">
                          This will affect the way you get progress in your Daily
                          Missions. You will now progress in the Missions once the
                          full match in PUBG BATTLEGROUNDS is completed, you will
                          get your points.
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

            <div className="flex items-center justify-between mb-4 px-4 sm:px-0">
              <div>
                <div className="text-sm text-ui-300">
                  Your latest match ended <b>May 19 / 11:05 PM</b>
                </div>
                <div className="text-xs text-ui-300">Last check was TBA</div>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="tooltip tooltip-left"
                  data-tooltip="This might take up to 15 minutes. Make sure the match you’re trying to fetch is 100% completed."
                >
                  <button className={`button button-sm button-primary ${
                        submitting ? "is-loading" : ""
                      }`}
                      onClick={addToastWithDelay.bind(this, {
                        icon: "f-check",
                        color: "green",
                        text: "Your stats have been updated.",
                        autoDelete: true,
                        autoDeleteDelay: 2500,
                      })}>
                    <span className="icon icon-16 icon-refresh-02" />
                    <span className="hidden sm:block">Request a stats update</span>
                    <span className="block sm:hidden">Update</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-4 sm:px-0">
              {selectedGame?.missions.map(
                (mission, missionIndex) => (
                  <>
                    <div
                      key={mission}
                      className={`card-mission surface mx-auto animate-slide-in-right animate-delay ${
                        mission.ispremium === true ? "card-locked" : ""
                      }`}
                      style={{
                        "--delay": "calc((" + missionIndex + " + 5) * 0.05s)",
                      }}
                    >
                      <div className="card-decoration"></div>
                      <div className="card-body">
                        <div className="card-title">{mission.name}</div>
                        <div className="card-meta">
                          <div className="chip chip-reward chip-xp chip-sm chip-inverted">
                            <span className="icon icon-xp-symbol-outline" />
                            <span>{mission.xp}</span>
                          </div>
                          <div>
                            {mission.current}/{mission.target} {mission.label}
                          </div>
                        </div>
                        <div
                          className="progressbar progressbar-sm"
                          style={{
                            "--percent": calculatePercent(
                              mission.target,
                              mission.current
                            ),
                          }}
                        >
                          <div></div>
                        </div>
                      </div>
                      <div className="card-bg">
                        <span
                          style={{
                            backgroundImage: "url(" + mission.image + ")",
                          }}
                        />
                      </div>
                    </div>
                  </>
                )
              )}
            </div>
          </section>
          <section className="py-8 grid grid-cols-1 xl:grid-cols-3 gap-y-4 xl:gap-x-4 items-stretch">
            <div
              className={`relative z-10 surface surface-dimmed p-8 flex flex-col justify-center sm:rounded-lg text-center ${
                hasAds ? "col-span-1" : "col-span-3"
              }`}
            >
              <img
                className="hidden lg:block absolute animate-fade-in animate-delay z-20 pointer-events-none -top-2 right-2 rotate-[33deg]"
                src="https://res.cloudinary.com/gloot/image/upload/v1657625027/Marketing/2022_prototype/3D_object_crowngold.webp"
                width="100"
                height="auto"
                alt=""
                style={{ "--delay": "calc(2 * 0.05s)" }}
              />
              <h4 className="text-3xl">
                <span>Join</span>{" "}
                <span className="text-gradient bg-gradient-to-b from-gold-300 to-gold-700">
                  G-Loot Premium
                </span>
              </h4>
              <p className="max-w-[50ch] text-sm text-ui-300 mx-auto mt-2 mb-5">
                Increase your amount of daily missions and XP you can earn each day
                with a{" "}
                <Link href={`premium${hasAds ? "?ads=true" : ""}`}>
                  <a href="#" className="link">
                    Premium subscription
                  </a>
                </Link>
                .
              </p>
              <div className="mx-auto">
                <Link href={`premium${hasAds ? "?ads=true" : ""}`}>
                  <a className="button button-premium is-shining">
                    <span>Join Premium</span>
                  </a>
                </Link>
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
