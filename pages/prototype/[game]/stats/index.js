import React, { useEffect, useState, useContext } from "react";

import Ad from "../../../../components/Ad/Ad";
import Link from "next/link";
import PrototypeStructure from "../../../../components/Prototype/PrototypeStructure";
import { usePrototypeData } from "../../../../contexts/prototype";
import { UiContext } from "../../../../contexts/ui";
import { useRouter } from "next/router";
import Accordion from "../../../../components/Accordion/Accordion";
import { StatsValorantAgents } from "../../../../mock-data/data-stats-valorant";
import { StatsValorantMaps } from "../../../../mock-data/data-stats-valorant";
import { StatsValorantRanks } from "../../../../mock-data/data-stats-valorant";
import { StatsValorantWeapons } from "../../../../mock-data/data-stats-valorant";
import { StatsValorantDemoFavoriteAgents } from "../../../../mock-data/data-stats-demo-valorant";
import { StatsValorantDemoGeneral } from "../../../../mock-data/data-stats-demo-valorant";
import { StatsValorantDemoLatestMatches } from "../../../../mock-data/data-stats-demo-valorant";
import { StatsValorantDemoWeapons } from "../../../../mock-data/data-stats-demo-valorant";
import { StatsValorantDemoMaps } from "../../../../mock-data/data-stats-demo-valorant";
import LoadMore from "../../../../components/LoadMore/LoadMore";

export default function Stats() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedGeneralStat, setSelectedGeneralStat] = useState(0);
  const [selectedStat, setSelectedStat] = useState(null);
  const { game } = router.query;
  const variant = query.variant ? query.variant : 0;
  const [loading, setLoading] = useState(true);
  const isEmpty = query.empty === "true" ? true : false;

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1200);
    }
  }, [loading]);

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game, prototype]);

  useEffect(() => {
    setSelectedGeneralStat(variant);
  }, [variant]);

  useEffect(() => {
    if (selectedGame != null) {
      prototype.defineDefaultGameID(selectedGame.id);
    }
  }, [selectedGame]);

  const [submitting, setSubmitting] = useState(false);

  function addToastWithDelay(toast) {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr(toast);
      setSubmitting(false);
    }, 1000);
  }

  const getGeneralStatsByID = (id) => {
    return StatsValorantDemoGeneral.find((general) => {
      return general.id === parseInt(id);
    });
  };
  const getAgentByID = (id) => {
    return StatsValorantAgents.find((agent) => {
      return agent.id === parseInt(id);
    });
  };
  const getRankByID = (id) => {
    return StatsValorantRanks.find((rank) => {
      return rank.id === parseInt(id);
    });
  };
  const getMapByID = (id) => {
    return StatsValorantMaps.find((map) => {
      return map.id === parseInt(id);
    });
  };
  const getWeaponByID = (id) => {
    return StatsValorantWeapons.find((weapon) => {
      return weapon.id === parseInt(id);
    });
  };

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    setSelectedStat(getGeneralStatsByID(selectedGeneralStat));
  }, [selectedGeneralStat]);

  return (
    <>
      {selectedStat && (
        <PrototypeStructure title="Stats">
          <Ad width="1005" height="300" />

          {isEmpty ? (
            <>
              <section className="surface sm:rounded-lg p-4 pb-16 relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row gap-4 items-stretch justify-between min-h-[250px]">
                  <div className="flex flex-col gap-4 justify-between">
                    <div className="flex gap-4 items-start leading-tight">
                      <div className="p-2 rounded bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
                        <span className="icon text-3xl icon-game-valorant-symbol text-game-valorant" />
                      </div>
                      <div>
                        <h1 className="uppercase text-6xl">Valorant stats</h1>
                        <div className="text-sm text-ui-300"></div>
                      </div>
                    </div>
                    <div className="flex flex-col mt-8 md:mb-8 gap-4">
                      <p className="text-ui-300">
                        You have no stats tracked yet.
                        <br />
                        Connect your Riot account and start playing.
                      </p>
                      <button type="button" className="button button-primary">
                        <span className="icon icon-riotgames-symbol" />
                        <span>Connect Riot ID</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="absolute z-0 inset-0 flex items-end md:items-center justify-center opacity-25 md:opacity-100">
                  <img
                    className="absolute z-0 object-cover left-[33%] md:left-auto object-center animate-slide-in-bottom"
                    src="https://res.cloudinary.com/gloot/image/upload/v1669897461/Marketing/2022_VALORANT_agent_generator/images/valorant-stats-hero-empty.jpg"
                    alt=""
                  />
                </div>
              </section>
              <section className="-mt-12 mb-16 px-4 lg:px-0">
                <div className="max-w-lg mx-auto accordion accordion-highlighted">
                  <Accordion
                    header={
                      <div className="item lg:h-24 surface surface-ui-700 shadow-xl rounded-lg p-4">
                        <div className="item-body leading-tight grid grid-cols-2 lg:flex flex-wrap justify-around flex-1 gap-4">
                          <div
                            className="pl-4 border-l border-ui-600 animate-slide-in-bottom animate-delay"
                            style={{
                              "--delay": "calc(1 * 0.05s)",
                            }}
                          >
                            <div className="text-xs lg:text-sm text-ui-200 uppercase">
                              Damage/round
                            </div>
                            <div className="text-main text-xl lg:text-3xl">
                              --
                            </div>
                          </div>
                          <div
                            className="pl-4 border-l border-ui-600 animate-slide-in-bottom animate-delay"
                            style={{
                              "--delay": "calc(2 * 0.05s)",
                            }}
                          >
                            <div className="text-xs lg:text-sm text-ui-200 uppercase">
                              K/D ratio
                            </div>
                            <div className="text-main text-xl lg:text-3xl">
                              --
                            </div>
                          </div>
                          <div
                            className="pl-4 border-l border-ui-600 animate-slide-in-bottom animate-delay"
                            style={{
                              "--delay": "calc(3 * 0.05s)",
                            }}
                          >
                            <div className="text-xs lg:text-sm text-ui-200 uppercase">
                              Headshots %
                            </div>
                            <div className="text-main text-xl lg:text-3xl">
                              --
                            </div>
                          </div>
                          <div
                            className="pl-4 border-l border-ui-600 animate-slide-in-bottom animate-delay"
                            style={{
                              "--delay": "calc(4 * 0.05s)",
                            }}
                          >
                            <div className="text-xs lg:text-sm text-ui-200 uppercase">
                              Win %
                            </div>
                            <div className="text-main text-xl lg:text-3xl">
                              --
                            </div>
                          </div>
                        </div>
                        <div className="item-actions">
                          <div>
                            <span className="icon icon-24 icon-arrow-sm-down" />
                          </div>
                        </div>
                      </div>
                    }
                  >
                    <div className="flex flex-col lg:flex-row lg:items-stretch gap-4 p-4 ">
                      <div className="flex-3">
                        <div className="text-ui-400 mb-4">
                          Stats overview
                        </div>
                        <div className="flex flex-wrap text-center gap-2 md:gap-4 leading-tight items-stretch justify-between">
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Wins
                            </div>
                            <div className="font-bold">--</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Kills
                            </div>
                            <div className="font-bold">--</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Deaths
                            </div>
                            <div className="font-bold">--</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Asists
                            </div>
                            <div className="font-bold">--</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Score/Round
                            </div>
                            <div className="font-bold">--</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              KDA Ratio
                            </div>
                            <div className="font-bold">--</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Kills/Round
                            </div>
                            <div className="font-bold">--</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              KDA Ratio
                            </div>
                            <div className="font-bold">--</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Headshots
                            </div>
                            <div className="font-bold">--</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              First Bloods
                            </div>
                            <div className="font-bold">--</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Clutches
                            </div>
                            <div className="font-bold">--</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Flawless
                            </div>
                            <div className="font-bold">--</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Aces
                            </div>
                            <div className="font-bold">--</div>
                          </div>
                        </div>
                      </div>
                      <hr className="separator separator-vertical h-auto bg-ui-700" />
                      <div className="flex-2">
                        <div className="text-ui-400 mb-4">
                          Last 20 matches hit accuracy
                        </div>
                        <div className="flex gap-4 items-center justify-around">
                          <div className="px-4 relative">
                            <span
                              className="absolute z-10 rounded-full w-40 h-40 origin-center mix-blend-color-lighten bg-gradient-radial animate-pulse from-blue-500/80 to-blue-500/30 shadow-[0_0_0_2rem_rgba(var(--color-blue-500)/20%)] -top-[calc((10rem/2)-1rem)] left-[calc(50%-(10rem/2))]"
                              style={{ transform: "scale(0)" }}
                            />
                            <span
                              className="absolute z-10 rounded-full w-40 h-40 origin-center mix-blend-color-lighten bg-gradient-radial animate-pulse from-attention-500/80 to-attention-500/30 shadow-[0_0_0_2rem_rgba(var(--color-attention-500)/20%)] top-1 left-[calc(50%-(10rem/2))]"
                              style={{ transform: "scale(0)" }}
                            />
                            <span
                              className="absolute z-10 rounded-full w-40 h-40 origin-center mix-blend-color-lighten bg-gradient-radial animate-pulse from-error-500/80 to-error-500/30 shadow-[0_0_0_2rem_rgba(var(--color-error-500)/20%)] bottom-1 -left-6"
                              style={{ transform: "scale(0)" }}
                            />
                            <img
                              className="relative z-0"
                              src="https://res.cloudinary.com/gloot/image/upload/v1671446426/Stryda/stats/valorant/hitmap.svg"
                              width="125"
                              height="264"
                              alt=""
                            />
                          </div>
                          <div className="space-y-4">
                            <div className="flex items-baseline gap-2 text-blue-500">
                              <span>Head</span>
                              <span className="text-lg">--</span>
                              <span>Hits</span>
                              <span className="text-lg">--</span>
                            </div>
                            <div className="flex items-baseline gap-2 text-attention-500">
                              <span>Body</span>
                              <span className="text-lg">--</span>
                              <span>Hits</span>
                              <span className="text-lg">--</span>
                            </div>
                            <div className="flex items-baseline gap-2 text-error-500">
                              <span>Legs</span>
                              <span className="text-lg">--</span>
                              <span>Hits</span>
                              <span className="text-lg">--</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion>
                </div>
              </section>

              <div className="my-16 text-center px-4 md:px-0">
                <div className="mx-auto mb-4 max-w-sm">
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1669821582/Marketing/2022_VALORANT_agent_generator/images/empty-valorant-character.png"
                    height="auto"
                    width="auto"
                    alt=""
                  />
                </div>
                <div className="max-w-xs mx-auto">
                  <h2 className="h4">Connect and play!</h2>
                  <p className="mt-4 mb-6 text-ui-300">
                    Connect your Riot account and start playing to see who your
                    top agents are, how well you performed in your last 20
                    matches or how much time you have spent in Valorant.
                  </p>
                  <button
                    type="button"
                    className="button button-primary w-full"
                  >
                    <span className="icon icon-riotgames-symbol" />
                    <span>Connect Riot ID</span>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <section className="surface sm:rounded-lg p-4 pb-16 relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row gap-4 items-stretch justify-between min-h-[250px]">
                  <div className="flex flex-col gap-4 justify-between">
                    <div className="flex gap-4 items-start leading-tight">
                      <div className="p-2 rounded bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
                        <span className="icon text-3xl icon-game-valorant-symbol text-game-valorant" />
                      </div>
                      <div>
                        <h1 className="uppercase text-6xl">Valorant stats</h1>
                        <div className="text-sm text-ui-300">
                          Last updated on 11 NOV 2022, 16:38 PM
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center">
                      <div
                        className={`avatar avatar-sm avatar-circle ${
                          prototype.getUserByID(1)?.avatar.isPremium
                            ? "avatar-gold"
                            : ""
                        }`}
                      >
                        <div>
                          <img
                            src={prototype.getUserByID(1)?.avatar}
                            alt="avatar"
                          />
                        </div>
                      </div>
                      <div className="leading-tight">
                        <div className="flex gap-2 items-center">
                          <div className="h5">
                            {prototype.getUserByID(1)?.nickname}
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-100/20 to-ui-100/5 text-xs lg:text-sm uppercase p-1">
                            #8961
                          </div>
                        </div>
                        <div className="text-ui-300 uppercase text-xs lg:text-sm">
                          <span className="">Match played:</span>{" "}
                          <b className="text-ui-200">1000</b>
                        </div>
                        <div className="text-ui-300 uppercase text-xs lg:text-sm">
                          <span className="">Play time:</span>{" "}
                          <b className="text-ui-200">1439H</b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col gap-2 md:gap-4 items-center md:items-end justify-between border-t border-ui-700 md:border-none pt-4 md:pt-0">
                    <div className="hidden md:block">
                      <button
                        className={`button button-sm button-tertiary ${
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
                    <div className="md:text-right leading-none mb-2">
                      <div className="text-sm uppercase text-ui-300">
                        Top agent
                      </div>
                      <h3 className="capitalize">
                        {getAgentByID(selectedStat.agent).name}
                      </h3>
                      <div className="text-sm uppercase text-ui-300">
                        {getAgentByID(selectedStat.agent).role.name}
                      </div>
                    </div>
                    <div className="md:text-right flex gap-2 items-center uppercase text-xs lg:text-sm text-ui-300">
                      <div>
                        <span>Rank</span>{" "}
                        <b className="text-ui-100">
                          {getRankByID(selectedStat.rank).name}
                        </b>
                      </div>
                      <img
                        className="h-16"
                        src={getRankByID(selectedStat.rank).picturePath}
                        height="auto"
                        width="auto"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="block md:hidden border-t border-ui-700 md:border-none pt-4 md:pt-0">
                    <button
                      className={`button button-sm button-tertiary w-full ${
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
                <div className="absolute z-0 inset-0 flex items-end md:items-center justify-center opacity-25 md:opacity-100">
                  <img
                    className="absolute z-0 object-cover left-[33%] md:left-auto object-center animate-slide-in-bottom"
                    src={getAgentByID(selectedStat.agent).backgroundPath}
                    alt=""
                  />
                </div>
              </section>
              <section className="-mt-12 mb-16 px-4 lg:px-0">
                <div className="max-w-lg mx-auto accordion accordion-highlighted">
                  <Accordion
                    header={
                      <div className="item lg:h-24 surface surface-ui-700 shadow-xl rounded-lg p-4">
                        <div className="item-body leading-tight grid grid-cols-2 lg:flex flex-wrap justify-around flex-1 gap-4">
                          <div
                            className="pl-4 border-l border-ui-600 animate-slide-in-bottom animate-delay"
                            style={{
                              "--delay": "calc(1 * 0.05s)",
                            }}
                          >
                            <div className="text-xs lg:text-sm text-ui-200 uppercase">
                              Damage/round
                            </div>
                            <div className="text-main text-xl lg:text-3xl">
                              180.0
                            </div>
                            <div className="text-xs lg:text-sm text-ui-300">
                              Top 2.4%
                            </div>
                          </div>
                          <div
                            className="pl-4 border-l border-ui-600 animate-slide-in-bottom animate-delay"
                            style={{
                              "--delay": "calc(2 * 0.05s)",
                            }}
                          >
                            <div className="text-xs lg:text-sm text-ui-200 uppercase">
                              K/D ratio
                            </div>
                            <div className="text-main text-xl lg:text-3xl">
                              1.49
                            </div>
                            <div className="text-xs lg:text-sm text-ui-300">
                              Top 2%
                            </div>
                          </div>
                          <div
                            className="pl-4 border-l border-ui-600 animate-slide-in-bottom animate-delay"
                            style={{
                              "--delay": "calc(3 * 0.05s)",
                            }}
                          >
                            <div className="text-xs lg:text-sm text-ui-200 uppercase">
                              Headshots %
                            </div>
                            <div className="text-main text-xl lg:text-3xl">
                              27.9%
                            </div>
                            <div className="text-xs lg:text-sm text-ui-300">
                              Top 4.8%
                            </div>
                          </div>
                          <div
                            className="pl-4 border-l border-ui-600 animate-slide-in-bottom animate-delay"
                            style={{
                              "--delay": "calc(4 * 0.05s)",
                            }}
                          >
                            <div className="text-xs lg:text-sm text-ui-200 uppercase">
                              Win %
                            </div>
                            <div className="text-main text-xl lg:text-3xl">
                              71.9%
                            </div>
                            <div className="text-xs lg:text-sm text-ui-300">
                              Top 2.4%
                            </div>
                          </div>
                        </div>
                        <div className="item-actions">
                          <div>
                            <span className="icon icon-24 icon-arrow-sm-down" />
                          </div>
                        </div>
                      </div>
                    }
                  >
                    <div className="flex flex-col lg:flex-row lg:items-stretch gap-4 p-4 ">
                      <div className="flex-3">
                        <div className="text-ui-400 mb-4">
                          Stats overview
                        </div>
                        <div className="flex flex-wrap text-center gap-2 md:gap-4 leading-tight items-stretch justify-between">
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Wins
                            </div>
                            <div className="font-bold">87</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Kills
                            </div>
                            <div className="font-bold">2,572</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Deaths
                            </div>
                            <div className="font-bold">1,509</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Asists
                            </div>
                            <div className="font-bold">335</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Score/Round
                            </div>
                            <div className="font-bold">239.0</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              KDA Ratio
                            </div>
                            <div className="font-bold">87</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Kills/Round
                            </div>
                            <div className="font-bold">24</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              KDA Ratio
                            </div>
                            <div className="font-bold">24</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Headshots
                            </div>
                            <div className="font-bold">24</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              First Bloods
                            </div>
                            <div className="font-bold">24</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Clutches
                            </div>
                            <div className="font-bold">24</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Flawless
                            </div>
                            <div className="font-bold">24</div>
                          </div>
                          <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                            <div className="text-xs lg:text-sm uppercase text-ui-300">
                              Aces
                            </div>
                            <div className="font-bold">24</div>
                          </div>
                        </div>
                      </div>
                      <hr className="separator separator-vertical h-auto bg-ui-700" />
                      <div className="flex-2">
                        <div className="text-ui-400 mb-4">
                          Last 20 matches hit accuracy
                        </div>
                        <div className="flex gap-4 items-center justify-around">
                          <div className="px-4 relative">
                            <span
                              className="absolute z-10 rounded-full w-40 h-40 origin-center mix-blend-color-lighten bg-gradient-radial animate-pulse from-blue-500/80 to-blue-500/30 shadow-[0_0_0_2rem_rgba(var(--color-blue-500)/20%)] -top-[calc((10rem/2)-1rem)] left-[calc(50%-(10rem/2))]"
                              style={{ transform: "scale(0.2)" }}
                            />
                            <span
                              className="absolute z-10 rounded-full w-40 h-40 origin-center mix-blend-color-lighten bg-gradient-radial animate-pulse from-attention-500/80 to-attention-500/30 shadow-[0_0_0_2rem_rgba(var(--color-attention-500)/20%)] top-1 left-[calc(50%-(10rem/2))]"
                              style={{ transform: "scale(0.5)" }}
                            />
                            <span
                              className="absolute z-10 rounded-full w-40 h-40 origin-center mix-blend-color-lighten bg-gradient-radial animate-pulse from-error-500/80 to-error-500/30 shadow-[0_0_0_2rem_rgba(var(--color-error-500)/20%)] bottom-1 -left-6"
                              style={{ transform: "scale(0.2)" }}
                            />
                            <img
                              className="relative z-0"
                              src="https://res.cloudinary.com/gloot/image/upload/v1671446426/Stryda/stats/valorant/hitmap.svg"
                              width="125"
                              height="264"
                              alt=""
                            />
                          </div>
                          <div className="space-y-4">
                            <div className="flex items-baseline gap-2 text-blue-500">
                              <span>Head</span>
                              <span className="text-lg">30%</span>
                              <span>Hits</span>
                              <span className="text-lg">49.4</span>
                            </div>
                            <div className="flex items-baseline gap-2 text-attention-500">
                              <span>Body</span>
                              <span className="text-lg">50%</span>
                              <span>Hits</span>
                              <span className="text-lg">49.4</span>
                            </div>
                            <div className="flex items-baseline gap-2 text-error-500">
                              <span>Legs</span>
                              <span className="text-lg">20%</span>
                              <span>Hits</span>
                              <span className="text-lg">49.4</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion>
                </div>
              </section>
              <section className="mb-4">
                <h2 className="h5 mx-4 md:mx-0">Most played agents</h2>
                <div className="overflow-x-auto scrollbar-desktop pb-4 px-2 md:px-0">
                  <table
                    className={`table table-rounded rounded-lg w-full text-center min-w-lg ${
                      loading ? "is-loading" : ""
                    }`}
                  >
                    <thead>
                      <tr className="text-ui-400">
                        <th className="text-left">Agent</th>
                        <th>Time played</th>
                        <th>Matches</th>
                        <th>Win %</th>
                        <th>K/D</th>
                        <th>ADR</th>
                        <th>ACS</th>
                        <th>HS%</th>
                      </tr>
                    </thead>
                    <tbody className="child:overflow-hidden leading-tight">
                      {StatsValorantDemoFavoriteAgents.map(
                        (item, itemIndex) => (
                          <tr key={itemIndex}>
                            <td className="p-0">
                              <div className="flex items-center gap-4 text-left w-24">
                                <img
                                  className="w-16 h-16 rounded-l"
                                  src={getAgentByID(item.agent).picturePath}
                                  alt=""
                                  width="auto"
                                  height="auto"
                                />
                                <div>
                                  <div className="text-ui-100 capitalize">
                                    {getAgentByID(item.agent).name}
                                  </div>
                                  <div className="font-normal text-ui-300 capitalize">
                                    {getAgentByID(item.agent).role.name}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>{item.timePlayed}</td>
                            <td>{item.matches}</td>
                            <td>{item.win}%</td>
                            <td>{item.kd}</td>
                            <td>{item.adr}</td>
                            <td>{item.acs}</td>
                            <td>{item.hs}%</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                  <div className="text-center">
                    <LoadMore className="button-sm button-tertiary" />
                  </div>
                </div>
              </section>
              <section className="mb-8">
                <h2 className="h5 mx-4 md:mx-0">Last 20 matches</h2>
                <div className="overflow-x-auto scrollbar-desktop leading-tight pb-4">
                  {StatsValorantDemoLatestMatches.map((item, itemIndex) => (
                    <div key={itemIndex} className="mb-2">
                      <div className="flex items-center gap-2 my-2 text-ui-400 text-xs lg:text-sm uppercase mx-4 md:mx-0">
                        <span className="icon icon-calendar-date-2" />
                        <span>{item.date}</span>
                      </div>
                      {item.matches.map((match, matchIndex) => (
                        <div
                          key={matchIndex}
                          className="accordion min-w-lg overflow-hidden mb-2"
                        >
                          <Accordion
                            header={
                              <div
                                className={`item surface sm:rounded-lg text-center ${
                                  match.hasWon
                                    ? "surface-halo halo-l"
                                    : ""
                                }`}
                              >
                                <div className="item-image">
                                  <div className="avatar avatar-sm avatar-diamond">
                                    <div>
                                      <img
                                        src={
                                          getAgentByID(
                                            getGeneralStatsByID(
                                              selectedGeneralStat
                                            )?.agent
                                          ).picturePath
                                        }
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="item-body w-36 flex-none text-left">
                                  <div>
                                    <div className="text-ui-100 capitalize">
                                      {
                                        getAgentByID(
                                          getGeneralStatsByID(
                                            selectedGeneralStat
                                          )?.agent
                                        ).name
                                      }
                                    </div>
                                    <div className="text-ui-300 font-normal capitalize">
                                      {getMapByID(match.map).name} •{" "}
                                      {match.mode}
                                    </div>
                                  </div>
                                </div>
                                <div className="item-body flex-0 flex gap-2 items-center justify-around w-48">
                                  {match.mode === "Deathmatch" ? (
                                    <div className="text-2xl text-ui-300 text-center">
                                      {match.placement} place
                                    </div>
                                  ) : (
                                    <>
                                      <div className="text-2xl uppercase w-20 text-center">
                                        {match.hasWon ? (
                                          <span className="text-main">
                                            Victory
                                          </span>
                                        ) : (
                                          <span className="text-ui-300">
                                            Defeat
                                          </span>
                                        )}
                                      </div>
                                      <div className="w-16">
                                        <div className="text-ui-300 text-xl">
                                          <span
                                            className={`${
                                              match.hasWon
                                                ? "text-success-300"
                                                : "text-error-300"
                                            }`}
                                          >
                                            {match.score.team1}
                                          </span>{" "}
                                          -{" "}
                                          <span
                                            className={`${
                                              !match.hasWon
                                                ? "text-success-300"
                                                : "text-error-300"
                                            }`}
                                          >
                                            {match.score.team2}
                                          </span>
                                        </div>
                                        <div className="text-sm text-ui-400 font-normal">
                                          {match.placement} place
                                        </div>
                                      </div>
                                    </>
                                  )}
                                </div>
                                <div className="item-body flex-1 flex gap-2 items-center justify-around">
                                  <div>
                                    <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                      {match.time}
                                    </div>
                                    <div>{match.duration}</div>
                                  </div>
                                  <div>
                                    <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                      K/D/A
                                    </div>
                                    <div>
                                      {match.kda.k} - {match.kda.d} -{" "}
                                      {match.kda.a}
                                    </div>
                                  </div>
                                  <div>
                                    <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                      KD
                                    </div>
                                    <div>{match.kd}</div>
                                  </div>
                                  <div>
                                    <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                      ADR
                                    </div>
                                    <div>{match.adr}</div>
                                  </div>
                                  <div>
                                    <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                      ACS
                                    </div>
                                    <div>{match.acs}</div>
                                  </div>
                                  <div>
                                    <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                      HS%
                                    </div>
                                    <div>{match.hs}%</div>
                                  </div>
                                </div>
                                <div className="item-actions">
                                  <div>
                                    <span className="icon icon-24 icon-arrow-sm-down" />
                                  </div>
                                </div>
                              </div>
                            }
                          >
                            <table className="table table-compact w-full text-center text-xs lg:text-sm">
                              <tbody>
                                <tr className="bg-success-300/20 uppercase">
                                  <td className="text-success-300 text-left">
                                    Team 1
                                  </td>
                                  <td></td>
                                  <td>Rank</td>
                                  <td>ACS</td>
                                  <td>K</td>
                                  <td>D</td>
                                  <td>A</td>
                                  <td>+/-</td>
                                  <td>K/D</td>
                                  <td>ADR</td>
                                  <td>HS%</td>
                                  <td>FK</td>
                                  <td>FD</td>
                                  <td>MK</td>
                                  <td>ECO</td>
                                </tr>
                                {match.leaderboard.team1.map(
                                  (item, itemIndex) => (
                                    <tr
                                      key={itemIndex}
                                      className={`${
                                        itemIndex === 3 ? "bg-blue-300/10" : ""
                                      }`}
                                    >
                                      <td className="w-6">
                                        <div className="avatar avatar-xs avatar-diamond ml-1">
                                          <div>
                                            <img
                                              src={
                                                getAgentByID(item.agent)
                                                  .picturePath
                                              }
                                              alt=""
                                            />
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div
                                          className={`flex items-center gap-2 ${
                                            itemIndex === 3
                                              ? "text-main"
                                              : "font-normal"
                                          }`}
                                        >
                                          <span className="text-base">
                                            {item.nickname}
                                          </span>
                                          <div className="rounded bg-gradient-to-b from-ui-100/20 to-ui-100/5 text-xs lg:text-sm uppercase p-1">
                                            #{item.tag}
                                          </div>
                                        </div>
                                      </td>
                                      <td className="w-13">
                                        <div
                                          data-tooltip={
                                            getRankByID(item.rank).name
                                          }
                                          className="tooltip-left"
                                        >
                                          <img
                                            className="h-8 mx-auto"
                                            src={
                                              getRankByID(item.rank).picturePath
                                            }
                                            height="auto"
                                            width="auto"
                                            alt=""
                                          />
                                        </div>
                                      </td>
                                      <td className="w-13">
                                        {randomNumberInRange(0, 20)}
                                      </td>
                                      <td className="w-13">
                                        {randomNumberInRange(0, 20)}
                                      </td>
                                      <td className="w-13">
                                        {randomNumberInRange(0, 20)}
                                      </td>
                                      <td className="w-13">
                                        {randomNumberInRange(0, 20)}
                                      </td>
                                      <td
                                        className={`w-13 ${
                                          item.isPlus
                                            ? "text-success-300"
                                            : "text-error-300"
                                        }`}
                                      >
                                        {item.isPlus ? (
                                          <span>+</span>
                                        ) : (
                                          <span>-</span>
                                        )}
                                        {randomNumberInRange(0, 20)}
                                      </td>
                                      <td className="w-13">
                                        {randomNumberInRange(0, 500)}
                                      </td>
                                      <td className="w-13">
                                        {randomNumberInRange(0, 20)}
                                      </td>
                                      <td className="w-13">
                                        {randomNumberInRange(0, 100)}%
                                      </td>
                                      <td className="w-13">
                                        {randomNumberInRange(0, 10)}
                                      </td>
                                      <td className="w-13">
                                        {randomNumberInRange(0, 5)}
                                      </td>
                                      <td className="w-13">
                                        {randomNumberInRange(0, 5)}
                                      </td>
                                      <td className="w-13">
                                        {randomNumberInRange(0, 100)}
                                      </td>
                                    </tr>
                                  )
                                )}
                                <tr className="bg-error-300/20 uppercase">
                                  <td className="text-error-300 text-left">
                                    Team 2
                                  </td>
                                  <td></td>
                                  <td>Rank</td>
                                  <td>ACS</td>
                                  <td>K</td>
                                  <td>D</td>
                                  <td>A</td>
                                  <td>+/-</td>
                                  <td>K/D</td>
                                  <td>ADR</td>
                                  <td>HS%</td>
                                  <td>FK</td>
                                  <td>FD</td>
                                  <td>MK</td>
                                  <td>ECO</td>
                                </tr>
                                {match.leaderboard.team2.map(
                                  (item, itemIndex) => (
                                    <tr key={itemIndex}>
                                      <td className="w-6">
                                        <div className="avatar avatar-xs avatar-diamond ml-1">
                                          <div>
                                            <img
                                              src={
                                                getAgentByID(item.agent)
                                                  .picturePath
                                              }
                                              alt=""
                                            />
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="flex items-center gap-2 font-normal">
                                          <span className="text-base">
                                            {item.nickname}
                                          </span>
                                          <div className="rounded bg-gradient-to-b from-ui-100/20 to-ui-100/5 text-xs lg:text-sm uppercase p-1">
                                            #{item.tag}
                                          </div>
                                        </div>
                                      </td>
                                      <td className="w-13">
                                        <div
                                          data-tooltip={
                                            getRankByID(item.rank).name
                                          }
                                          className="tooltip-left"
                                        >
                                          <img
                                            className="h-8 mx-auto"
                                            src={
                                              getRankByID(item.rank).picturePath
                                            }
                                            height="auto"
                                            width="auto"
                                            alt=""
                                          />
                                        </div>
                                      </td>
                                      <td className="w-13">
                                        {randomNumberInRange(0, 20)}
                                      </td>
                                      <td className="w-13">
                                        {randomNumberInRange(0, 20)}
                                      </td>
                                      <td className="w-13">
                                        {randomNumberInRange(0, 20)}
                                      </td>
                                      <td className="w-13">
                                        {randomNumberInRange(0, 20)}
                                      </td>
                                      <td
                                        className={`w-13 ${
                                          item.isPlus
                                            ? "text-success-300"
                                            : "text-error-300"
                                        }`}
                                      >
                                        {item.isPlus ? (
                                          <span>+</span>
                                        ) : (
                                          <span>-</span>
                                        )}
                                        {randomNumberInRange(0, 20)}
                                      </td>
                                      <td className="w-13">
                                        {randomNumberInRange(0, 500)}
                                      </td>
                                      <td className="w-13">
                                        {randomNumberInRange(0, 20)}
                                      </td>
                                      <td className="w-13">
                                        {randomNumberInRange(0, 100)}%
                                      </td>
                                      <td className="w-13">
                                        {randomNumberInRange(0, 10)}
                                      </td>
                                      <td className="w-13">
                                        {randomNumberInRange(0, 5)}
                                      </td>
                                      <td className="w-13">
                                        {randomNumberInRange(0, 5)}
                                      </td>
                                      <td className="w-13">
                                        {randomNumberInRange(0, 100)}
                                      </td>
                                    </tr>
                                  )
                                )}
                              </tbody>
                            </table>
                          </Accordion>
                        </div>
                      ))}
                    </div>
                  ))}
                  <div className="text-center">
                    <LoadMore className="button-sm button-tertiary" />
                  </div>
                </div>
              </section>
              <section className="mb-8">
                <h2 className="h5 mx-4 md:mx-0">Weapons</h2>
                <div className="overflow-x-auto scrollbar-desktop pb-4 px-2 md:px-0">
                  <table
                    className={`table table-rounded rounded-lg w-full text-center min-w-lg ${
                      loading ? "is-loading" : ""
                    }`}
                  >
                    <tbody className="child:overflow-hidden leading-tight">
                      <tr>
                        <td className="w-76 surface-halo halo-l overflow-hidden">
                          <div className="flex items-center gap-4 text-left relative">
                            <img
                              className="absolute z-0 -inset-y-4 -left-5 h-[calc(100%+2rem)] object-cover"
                              src="https://res.cloudinary.com/gloot/image/upload/v1671535680/Stryda/stats/valorant/map-overlay-left.svg"
                              alt=""
                              width="auto"
                              height="auto"
                            />
                            <img
                              className="absolute z-0 -inset-y-4 right-0 h-[calc(100%+2rem)] object-cover -scale-y-100 -scale-x-100"
                              src="https://res.cloudinary.com/gloot/image/upload/v1671535680/Stryda/stats/valorant/map-overlay-left.svg"
                              alt=""
                              width="auto"
                              height="auto"
                            />
                            <div className="relative z-10 text-right w-52">
                              <img
                                className="drop-shadow-xl max-h-[60px]"
                                src={
                                  getWeaponByID(selectedStat.topweapon)
                                    .picturePath
                                }
                                alt=""
                                width="100%"
                                height="auto"
                              />
                            </div>
                            <div className="relative z-10">
                              <div className="text-ui-100 uppercae">
                                Top weapon
                              </div>
                              <div className="text-2xl uppercase text-main">
                                {getWeaponByID(selectedStat.topweapon).name}
                              </div>
                              <div className="font-normal text-ui-300 capitalize">
                                {getWeaponByID(selectedStat.topweapon).type}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="w-52">
                          <div className="text-ui-400 text-xs lg:text-sm uppercase">
                            Kills
                          </div>
                          <div>372</div>
                        </td>
                        <td className="w-52">
                          <div className="text-ui-400 text-xs lg:text-sm uppercase">
                            Deaths
                          </div>
                          <div>41</div>
                        </td>
                        <td className="w-52">
                          <div className="text-ui-400 text-xs lg:text-sm uppercase">
                            Longest kill distance
                          </div>
                          <div>46M</div>
                        </td>
                        {/*
                        <td>
                          <div className="text-ui-400 text-xs lg:text-sm uppercase">
                            Headshots %
                          </div>
                          <div>43.4%</div>
                        </td>
                        <td>
                          <div className="text-ui-400 text-xs lg:text-sm uppercase">
                            Damage/round
                          </div>
                          <div>76.9</div>
                        </td>
                        <td>
                          <div className="text-ui-400 text-xs lg:text-sm uppercase">
                            Kills/round
                          </div>
                          <div>0.65</div>
                        </td>
                        
                              */}
                      </tr>
                    </tbody>
                  </table>
                  <table
                    className={`table table-rounded rounded-lg w-full text-center min-w-lg ${
                      loading ? "is-loading" : ""
                    }`}
                  >
                    <thead>
                      <tr className="text-ui-400">
                        <th className="w-76 text-left">Weapon</th>
                        <th className="w-52">Kills</th>
                        <th className="w-52">Deaths</th>
                        <th className="w-52">Longest kill distance</th>
                        {/*
                        <th>Headshots %</th>
                        <th>Damage/round</th>
                        <th>Kills/round</th>
                        
                  */}
                      </tr>
                    </thead>
                    <tbody className="child:overflow-hidden leading-tight">
                      {StatsValorantDemoWeapons.map((item, itemIndex) => (
                        <tr key={itemIndex}>
                          <td className="w-76">
                            <div className="flex items-center gap-4 text-left">
                              <div className="w-52">
                                <img
                                  className="drop-shadow-lg mx-auto"
                                  src={getWeaponByID(item.weapon).picturePath}
                                  alt=""
                                  width="75"
                                  height="auto"
                                />
                              </div>
                              <div>
                                <div className="text-ui-100 capitalize">
                                  {getWeaponByID(item.weapon).name}
                                </div>
                                <div className="font-normal text-ui-300 capitalize">
                                  {getWeaponByID(item.weapon).type}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="w-52">{item.kills}</td>
                          <td className="w-52">{item.deaths}</td>
                          <td className="w-52">{item.killdistance}M</td>
                          {/*
                          <td>{item.headshots}%</td>
                          <td>{item.damageround}</td>
                          <td>{item.killsround}</td>
                          
                      */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="text-center">
                    <LoadMore className="button-sm button-tertiary" />
                  </div>
                </div>
              </section>
              <section className="mb-8">
                <h2 className="h5 mx-4 md:mx-0">Maps</h2>
                <div className="overflow-x-auto scrollbar-desktop pb-4 px-2 md:px-0">
                  <table
                    className={`table table-rounded rounded-lg w-full text-center min-w-lg ${
                      loading ? "is-loading" : ""
                    }`}
                  >
                    <thead>
                      <tr className="text-ui-400">
                        <th className="text-left" colSpan={2}>
                          Map
                        </th>
                        <th>Win %</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>K/D</th>
                        <th>ADR</th>
                        <th>ACS</th>
                      </tr>
                    </thead>
                    <tbody className="child:overflow-hidden leading-tight">
                      {StatsValorantDemoMaps.map((item, itemIndex) => (
                        <tr key={itemIndex}>
                          <td className="text-left capitalize">
                            {getMapByID(item.map).name}
                          </td>
                          <td className="p-0 relative w-72 h-24">
                            <span className="absolute z-10 inset-y-0 left-0 w-12 bg-gradient-to-r from-ui-800 to-ui-800/0" />
                            <span className="absolute z-10 inset-y-0 right-0 w-12 bg-gradient-to-l from-ui-800 to-ui-800/0" />
                            <img
                              className="absolute z-20 inset-y-0 -left-8 h-full object-cover"
                              src="https://res.cloudinary.com/gloot/image/upload/v1671535680/Stryda/stats/valorant/map-overlay-left.svg"
                              alt=""
                              width="auto"
                              height="auto"
                            />
                            <img
                              className="absolute z-20 inset-y-0 -right-8 h-full object-cover -scale-y-100 -scale-x-100"
                              src="https://res.cloudinary.com/gloot/image/upload/v1671535680/Stryda/stats/valorant/map-overlay-left.svg"
                              alt=""
                              width="auto"
                              height="auto"
                            />
                            <img
                              className="absolute inset-0 h-full w-full object-cover"
                              src={getMapByID(item.map).picturePath}
                              alt=""
                              width="auto"
                              height="auto"
                            />
                          </td>
                          <td>{item.winpercent}</td>
                          <td>{item.wins}</td>
                          <td>{item.losses}</td>
                          <td>{item.kd}</td>
                          <td>{item.adr}</td>
                          <td>{item.acs}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="text-center">
                    <LoadMore className="button-sm button-tertiary" />
                  </div>
                </div>
              </section>
            </>
          )}
        </PrototypeStructure>
      )}
    </>
  );
}
