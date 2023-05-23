import React, { useEffect, useState } from "react";

import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import LadderCardSecondary from "../../../../components/Ladder/LadderCardSecondary";
import Slider from "../../../../components/Slider/Slider";
import AnimatedNumber from "../../../../components/AnimatedNumber/AnimatedNumber";
import Link from "next/link";
import ResetsIn from "../../../../components/Countdown/ResetsIn";

export default function TabClanSeasonLeaderboardOverview() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const isEmpty = query.empty === "true" ? true : false;
  const { game } = router.query;

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game]);

  return (
    <>
      {selectedGame && (
        <>
          <section className="mb-8 animate-slide-in-bottom">
            <div className="flex gap-2 items-baseline justify-between mx-4 sm:mx-0 mb-2">
              <h2 className="h5">Current Season</h2>
            </div>
            {isEmpty ? (
              <>
                <div className="mt-2 surface sm:rounded px-4 py-8 text-center">
                  <div className="max-w-xs mx-auto">
                    <span className="icon icon-ladder text-6xl text-ui-500" />
                    <div className="mt-2 text-ui-300">
                      There are no ongoing Solo Ladders
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link
                  href={`/prototype/${game}/clanseasonleaderboards/${
                    prototype.getCurrentClanLeaderboard(game).id
                  }`}
                >
                  <button
                    type="button"
                    className="w-full surface sm:rounded overflow-hidden interactive"
                  >
                    <div className="h-44 relative w-full flex items-center justify-center">
                      <img
                        src={prototype.getCurrentClanLeaderboard(game).logo}
                        alt={prototype.getCurrentClanLeaderboard(game).name}
                        className="relative z-10 max-w-[200px] max-h-[85px] h-auto w-full"
                      />
                      <img
                        src={prototype.getCurrentClanLeaderboard(game).bg}
                        alt={prototype.getCurrentClanLeaderboard(game).name}
                        className="absolute inset-0 z-0 object-cover w-full h-full"
                      />
                    </div>
                    <div className="border-t border-ui-700 p-4 flex flex-col lg:flex-row gap-2 lg:gap-4 lg:items-center">
                      <div className="lg:pr-4 lg:border-r border-ui-600">
                        <h2 className="h4">
                          {prototype.getCurrentClanLeaderboard(game).name}
                        </h2>
                      </div>
                      <div className="lg:pr-4 lg:border-r border-ui-600 flex gap-4 items-center">
                        <div className="flex items-center whitespace-nowrap gap-1">
                          <span className="icon icon-coin text-currency-1-500" />
                          <span className="text-currency-1-500 text-sm">
                            {prototype.getCurrentClanLeaderboard(game)
                              .isPowerPlay ? (
                              <>50 000 - 5 000 000</>
                            ) : (
                              <>5 000 - 30 000</>
                            )}
                          </span>
                        </div>
                        {prototype.getCurrentClanLeaderboard(game).status ===
                        "finished" ? (
                          <div className="text-sm text-ui-300">
                            Ended on April {RandomNumber(1, 30)}
                          </div>
                        ) : (
                          <div className="flex text-sm text-ui-300 gap-1 items-center whitespace-nowrap">
                            <ResetsIn label={prototype.getCurrentClanLeaderboard(game).status === 'upcoming' ? 'Starts' : 'Finishes'} />
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="avatar-group -space-x-2">
                          {prototype
                            .getCurrentClanLeaderboard(game)
                            .leaderboard.slice(0, 3)
                            .map((clan, clanIndex) => (
                              <div
                                key={clanIndex}
                                className="avatar avatar-squircle avatar-tiny"
                              >
                                <div>
                                  <img
                                    src={
                                      prototype.getClanByID(clan.clan)?.avatar
                                    }
                                  />
                                </div>
                              </div>
                            ))}
                        </div>
                        <span className="text-sm text-ui-300">
                          {prototype.getCurrentClanLeaderboard(game).leaderboard.length}{" "}
                          clan{prototype.getCurrentClanLeaderboard(game).leaderboard.length > 1 ? 's are' : 'is'} partaking
                        </span>
                      </div>
                    </div>
                  </button>
                </Link>
              </>
            )}
          </section>
          {/*
          <section className="py-4 flex flex-col xl:flex-row gap-4 items-stretch">
            <div className="flex-1 surface sm:rounded-lg overflow-hidden relative flex flex-col p-6">
              <div className="flex-1 relative z-10 max-w-[25ch] flex flex-col justify-start items-start">
                <h2 className="h5">How it works</h2>
                <p className="text-ui-300 mt-3 mb-5">
                  From entering a Ladder to claiming your rewards, here is
                  everything you need to know about our competitions.
                </p>
                <Link
                  href={`/prototype/${selectedGame.slug}/clanseasonleaderboards/howitworks`}
                >
                  <button
                    type="button"
                    className="button button-sm button-secondary"
                  >
                    Learn more
                  </button>
                </Link>
              </div>
              <img
                className="hidden object-contain object-right absolute z-0 right-0 inset-y-0 w-full h-full"
                src="https://res.cloudinary.com/gloot/image/upload/v1670317438/Marketing/2022_prototype/Ladder_how_it_works_card_right.jpg"
                alt=""
              />
            </div>
            <div className="flex-1 surface sm:rounded-lg overflow-hidden relative flex flex-col p-6">
              <div className="flex-1 relative z-10 max-w-[25ch] flex flex-col justify-start items-start">
                <h2 className="h5">Stryda Rules</h2>
                <p className="text-ui-300 mt-3 mb-5">
                  At Stryda we take player protection very seriously and
                  investigate any suspicious activity.
                </p>
                <Link
                  href={`/prototype/${selectedGame.slug}/clanseasonleaderboards/rules`}
                >
                  <button
                    type="button"
                    className="button button-sm button-secondary"
                  >
                    Learn more
                  </button>
                </Link>
              </div>
              <img
                className="hidden object-contain object-right absolute z-0 right-0 inset-y-0 w-full h-full"
                src="https://res.cloudinary.com/gloot/image/upload/v1670317438/Marketing/2022_prototype/Ladder_how_it_rules_card_right.jpg"
                alt=""
              />
            </div>
            <div className="xl:h-64 flex-1 surface sm:rounded-lg overflow-hidden relative flex flex-col">
              <div className="px-3 py-2 border-b border-ui-700 relative z-10 flex-none flex items-center justify-between">
                <div className="font-bold">Previous Seasons</div>
                <Link
                  href={`/prototype/${
                    selectedGame.slug
                  }/clanseasonleaderboards/history${prototype.getURLparams()}`}
                >
                  <a className="link link-hover text-ui-300 text-sm leading-none">
                    View all
                  </a>
                </Link>
              </div>
              <div className="relative z-0 lg:max-h-150px overflow-y-auto scrollbar-desktop">
                <table className="table table-interactive w-full">
                  <tbody>
                    {selectedGame &&
                      selectedGame.clanLeaderboards.map(
                        (ladder, ladderIndex) => (
                          <>
                            <Link
                              href={`/prototype/${game}/clanseasonleaderboards/${
                                prototype.getCurrentClanLeaderboard(game).id
                              }${prototype.getURLparams()}`}
                            >
                              <tr
                                key={ladder}
                                className="leading-tight py-2 text-sm"
                              >
                                <td>
                                  <span className="text-ui-300">
                                    {
                                      prototype.getCurrentClanLeaderboard(game)
                                        .name
                                    }
                                  </span>
                                </td>
                                <td>
                                  <div className="text-right">
                                    #
                                    {
                                      prototype.getCurrentClanLeaderboard(game)
                                        .soloResults?.placement
                                    }
                                  </div>
                                </td>
                                <td>
                                  <div className="text-right">
                                    {
                                      prototype.getCurrentClanLeaderboard(game)
                                        .soloResults?.points
                                    }{" "}
                                    points
                                  </div>
                                </td>
                              </tr>
                            </Link>
                          </>
                        )
                      )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
                                  */}
        </>
      )}
    </>
  );
}