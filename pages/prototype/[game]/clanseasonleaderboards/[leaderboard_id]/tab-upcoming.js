import React, { useContext, useEffect, useState } from "react";

import Reward from "../../../../../components/Reward/Reward";
import Tooltip from "../../../../../components/Tooltip/Tooltip";
import { usePrototypeData } from "../../../../../contexts/prototype";
import { VariablesContext } from "../../../../../contexts/variables";
import ModalClanSeasonResults from "../modal-clanseasonresults";
import { UiContext } from "../../../../../contexts/ui";
import { useRouter } from "next/router";
import Link from "next/link";
import ResetsIn from "../../../../../components/Countdown/ResetsIn";
import AvatarClan from "../../../../../components/Avatar/AvatarClan";
import GameIcon from "../../../../../components/GameIcon/GameIcon";

export default function TabClanLeaderboardUpcoming() {
  const router = useRouter();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const variablesContext = useContext(VariablesContext);
  const [selectedGame, setSelectedGame] = useState(null);
  const { game } = router.query;
  const isEmpty = query.empty === "true" ? true : false;
  const [loading, setLoading] = useState(true);

  function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, RandomNumber(300, 3000));
    }
  }, [loading]);

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game, prototype]);

  function openmodalLadderResults(id) {
    uiContext.openModal(
      <ModalClanSeasonResults
        item={prototype.getClanLeaderboardByID(
          prototype.getGameBySlug(game).slug,
          id
        )}
      />
    );
  }

  return (
    <>
      {selectedGame && (
        <>
          <section className="pb-8">
            {isEmpty && (
              <>
                <div className="surface rounded-lg px-4 py-8 text-center">
                  <div className="max-w-xs mx-auto">
                    <span className="icon icon-smile text-6xl text-ui-500" />
                    <div className="mt-2 mb-6">
                      <p className="text-sm text-ui-400">
                        There are no events to be displayed yet.
                      </p>
                      <p className="text-lg text-ui-300">
                        Play tournaments and competitions to see the history of
                        your earnings.
                      </p>
                    </div>
                    <Link href="/prototype/valorant/tournaments">
                      <a className="button button-main">
                        <span>Browse tournaments</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </>
            )}
            {!isEmpty && (
              <>
                {loading ? (
                  <section className="mt-2">
                    <div className="overflow-y-hidden overflow-x-auto scrollbar-desktop px-4 sm:px-0 pb-4">
                      <table className="table table-rounded rounded-xl is-loading w-full">
                        <tbody>
                          <tr>
                            <th>1</th>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                          </tr>
                          <tr>
                            <th>2</th>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                          </tr>
                          <tr>
                            <th>3</th>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                          </tr>
                          <tr>
                            <th>3</th>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                          </tr>
                          <tr>
                            <th>3</th>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                          </tr>
                          <tr>
                            <th>3</th>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>
                ) : (
                  <>
                    <div className="items-spaced item-interactive space-y-2">
                      {selectedGame.clanLeaderboards
                        .filter((g) => g.status === "upcoming")
                        .map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            href={`/prototype/${game}/clanseasonleaderboards/${item.id}`}
                          >
                            <button
                              type="button"
                              className="w-full surface sm:rounded overflow-hidden interactive animate-slide-in-bottom animate-delay"
                              style={{
                                "--delay": "calc(" + itemIndex + " * 0.05s)",
                              }}
                            >
                              <div className="h-44 relative w-full flex items-center justify-center">
                                <div className="absolute z-20 top-2 left-2 rounded bg-ui-800/90 p-0.5 pr-3 flex gap-2 items-center text-sm text-ui-200">
                                  <GameIcon game={1} />
                                  <span>Competitive</span>
                                </div>
                                <img
                                  src={item.logo}
                                  alt={item.name}
                                  className="relative z-10 max-w-[200px] max-h-[85px] h-auto w-full"
                                />
                                <img
                                  src={item.bg}
                                  alt={item.name}
                                  className="absolute inset-0 z-0 object-cover w-full h-full"
                                />
                              </div>
                              <div className="border-t border-ui-700 p-4 flex flex-col xl:flex-row gap-2 xl:gap-4 xl:items-center xl:justify-between">
                                <div className="flex flex-col md:flex-row gap-2 lg:gap-4 lg:items-center">
                                  <div className="lg:pr-4 lg:border-r border-ui-600">
                                    <h2 className="h4">{item.name}</h2>
                                  </div>
                                  <div className="lg:pr-4 lg:border-r border-ui-600 flex flex-col md:flex-row md:gap-4 md:items-center">
                                    <div className="flex items-center whitespace-nowrap gap-1">
                                      <span className="icon icon-coin text-currency-1-500" />
                                      <span className="text-currency-1-500 text-sm">
                                        5 000 - 30 000
                                      </span>
                                    </div>
                                    {item.status === "finished" ? (
                                      <div className="text-sm text-ui-300">
                                        Ended on April 23
                                      </div>
                                    ) : (
                                      <div className="flex text-sm text-ui-300 gap-1 items-center whitespace-nowrap">
                                        <ResetsIn
                                          label={
                                            item.status === "upcoming"
                                              ? "Starts"
                                              : "Finishes"
                                          }
                                        />
                                      </div>
                                    )}
                                  </div>
                                </div>
                                {item.status !== "upcoming" && (
                                  <>
                                    {variablesContext.clanLeaderboardEnrolled && (
                                      <div>
                                        <span
                                          className="chip chip-secondary"
                                          onClick={() =>
                                            variablesContext.clanSeasonEnroll()
                                          }
                                        >
                                          <span className="text-main animate-pulse">
                                            Enrolled
                                          </span>
                                        </span>
                                      </div>
                                    )}
                                    <div className="flex flex-1 xl:justify-end">
                                      {variablesContext.clanLeaderboardEnrolled ? (
                                        <div className="flex items-center gap-4">
                                          <AvatarClan id={1} />
                                          <div className="infobanner is-active">
                                            <div className="flex gap-2 infobanner-front">
                                              <div>
                                                <div className="uppercase text-xs text-ui-300">
                                                  Points
                                                </div>
                                                <div className="text-sm">
                                                  523
                                                </div>
                                              </div>
                                              <div>
                                                <div className="uppercase text-xs text-ui-300">
                                                  Position
                                                </div>
                                                <div className="text-sm">
                                                  #7
                                                </div>
                                              </div>
                                            </div>
                                            <div className="infobanner-back absolute inset-0 flex items-center text-sm">
                                              <div className="animate-pulse text-ui-100">
                                                Auto-enrolled...
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      ) : (
                                        <div className="flex items-center gap-4">
                                          <div className="flex items-center gap-2">
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
                                                          prototype.getClanByID(
                                                            clan.clan
                                                          ).avatar
                                                        }
                                                        alt="avatar"
                                                      />
                                                    </div>
                                                  </div>
                                                ))}
                                            </div>
                                            <span className="text-sm text-ui-300">
                                              234
                                              {item.status === "ongoing" ? (
                                                <> are enrolled</>
                                              ) : (
                                                <>have partaken</>
                                              )}
                                            </span>
                                          </div>
                                          <button
                                            type="button"
                                            className="button button-sm button-primary"
                                          >
                                            <span>View Clan Season</span>
                                          </button>
                                        </div>
                                      )}
                                    </div>
                                  </>
                                )}
                              </div>
                            </button>
                          </Link>
                        ))}
                    </div>
                  </>
                )}
              </>
            )}
          </section>
        </>
      )}
    </>
  );
}
