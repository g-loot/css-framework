import React, { useContext, useEffect, useState } from "react";

import Reward from "../../../../../components/Reward/Reward";
import Tooltip from "../../../../../components/Tooltip/Tooltip";
import { usePrototypeData } from "@/contexts/prototype";
import { VariablesContext } from "@/contexts/variables";
import ModalClanEventResults from "../modal-claneventresults";
import { UiContext } from "@/contexts/ui";
import { useRouter } from "next/router";
import Link from "next/link";
import ResetsIn from "../../../../../components/Countdown/ResetsIn";

export default function TabClanLeaderboardsHistory() {
  const router = useRouter();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const variablesContext = useContext(VariablesContext);
  const [selectedGame, setSelectedGame] = useState(null);
  const { game } = router.query;
  const empty = query.empty === "true" ? true : false;
  const [isEmpty, setIsEmpty] = useState(empty);
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
      <ModalClanEventResults
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
              <div className="mt-2 surface sm:rounded px-4 py-8 text-center">
                <div className="max-w-xs mx-auto">
                  <span className="icon icon-multiple-11 text-6xl text-ui-500" />
                  <div className="mt-2 text-ui-300">
                    You haven&#39;t joined any Clan Events yet.
                  </div>
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
                    <div className="hidden overflow-y-hidden overflow-x-auto scrollbar-desktop px-4 sm:px-0 pb-4">
                      <table className="table table-rounded rounded-xl w-full">
                        <tbody>
                          {selectedGame.clanLeaderboards.map(
                            (item, itemIndex) => (
                              <>
                                {item.status != "upcoming" && (
                                  <Link
                                    key={itemIndex}
                                    href={`/prototype/${game}/clanevents/${item.id}`}
                                  >
                                    <tr
                                      className="interactive animate-slide-in-bottom animate-delay"
                                      style={{
                                        "--delay":
                                          "calc(" + itemIndex + " * 0.05s)",
                                      }}
                                    >
                                      <td className="flex items-center gap-4">
                                        <div className="w-48 aspect-video relative flex items-center justify-center overflow-hidden rounded">
                                          <img
                                            src={item.logo}
                                            alt={item.name}
                                            className="relative z-10 max-w-[120px] max-h-[60px] h-auto w-full"
                                          />
                                          <img
                                            src={item.bg}
                                            alt={item.name}
                                            className="absolute inset-0 z-0 object-cover w-full h-full"
                                          />
                                        </div>
                                        <div>
                                          <div className="flex gap-2 items-center mb-2">
                                            <span>{item.name}</span>
                                            {item.status === "ongoing" && (
                                              <span className="chip chip-secondary chip-sm">
                                                <span className="text-main animate-pulse">
                                                  Ongoing
                                                </span>
                                              </span>
                                            )}
                                          </div>
                                          <div className="text-sm text-ui-300">
                                            {item.status === "ongoing" ? (
                                              <>12 days left</>
                                            ) : (
                                              <>
                                                Ended {item.id * 2} months ago
                                              </>
                                            )}
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="flex items-center gap-2">
                                          <div className="avatar-group -space-x-2">
                                            {item.leaderboard
                                              .slice(0, 3)
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
                                            {RandomNumber(10, 100)} clans{" "}
                                            {item.status === "ongoing" ? (
                                              <> are enrolled</>
                                            ) : (
                                              <>have partaken</>
                                            )}
                                          </span>
                                        </div>
                                      </td>
                                    </tr>
                                  </Link>
                                )}
                              </>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                    <ul className="items-spaced item-interactive space-y-2">
                      {selectedGame.clanLeaderboards
                        .filter((g) => g.status !== "upcoming" && g.status !== "ongoing")
                        .map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            href={`/prototype/${game}/clanevents/${item.id}`}
                          >
                            <li
                              className="item flex-col sm:flex-row items-stretch sm:items-center rounded p-0 animate-slide-in-bottom animate-delay"
                              style={{
                                "--delay": "calc(" + itemIndex + " * 0.05s)",
                              }}
                            >
                              {item.hasClaim && (
                                <div className="card-overlay">
                                  <div>
                                    <button
                                      type="button"
                                      className="button button-primary"
                                      onClick={() =>
                                        openmodalLadderResults(item.id)
                                      }
                                    >
                                      <span>View results</span>
                                    </button>
                                  </div>
                                </div>
                              )}
                              <div className="item-image p-0">
                                <div className="w-full sm:w-48 aspect-landscape sm:aspect-video relative flex items-center justify-center overflow-hidden sm:rounded-l">
                                  <img
                                    src={item.logo}
                                    alt={item.name}
                                    className="relative z-10 max-w-[120px] max-h-[60px] h-auto w-full"
                                  />
                                  <img
                                    src={item.bg}
                                    alt={item.name}
                                    className="absolute inset-0 z-0 object-cover w-full h-full"
                                  />
                                </div>
                              </div>
                              <div className="item-body p-2">
                                <div className="flex flex-col lg:flex-row gap-2">
                                  <div className="flex-1 leading-relaxed border-b border-ui-700 pb-2 lg:pb-0 lg:border-none">
                                    <div className="flex gap-2 items-center">
                                      <div className="item-title">
                                        {item.name}
                                      </div>
                                      {item.status === "ongoing" && (
                                        <>
                                          {!variablesContext.clanLeaderboardEnrolled ? (
                                            <span className="chip chip-secondary">
                                              <span className="text-blue-500">
                                                Ongoing
                                              </span>
                                            </span>
                                          ) : (
                                            <span className="chip chip-secondary">
                                              <span className="text-main animate-pulse">
                                                Enrolled
                                              </span>
                                            </span>
                                          )}
                                        </>
                                      )}
                                    </div>
                                    <div className="text-sm text-ui-300">
                                      {item.status === "ongoing" ? (
                                        <>
                                          <ResetsIn label="Ends" />
                                        </>
                                      ) : (
                                        <>Ended {item.id * 2} months ago</>
                                      )}
                                    </div>
                                  </div>
                                  <div className="w-64 flex items-center">
                                    {(variablesContext.clanLeaderboardEnrolled &&
                                      item.status === "ongoing") ||
                                    !item.hasClaim ? (
                                      <div className="flex items-center gap-4">
                                        <div className="flex-none avatar avatar-squircle avatar-xs">
                                          <div>
                                            <img
                                              src={
                                                prototype.getClanByID(1)?.avatar
                                              }
                                              alt="avatar"
                                            />
                                          </div>
                                        </div>
                                        <div className="flex gap-2">
                                          <div>
                                            <div className="uppercase text-xs text-ui-300">
                                              Points
                                            </div>
                                            <div className="text-sm">
                                              {RandomNumber(300, 2000)}
                                            </div>
                                          </div>
                                          <div>
                                            <div className="uppercase text-xs text-ui-300">
                                              Position
                                            </div>
                                            <div className="text-sm">
                                              #{RandomNumber(5, 50)}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    ) : (
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
                                          234{" "}
                                          {item.status === "ongoing" ? (
                                            <> are enrolled</>
                                          ) : (
                                            <>have partaken</>
                                          )}
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </li>
                          </Link>
                        ))}
                    </ul>
                  </>
                )}
              </>
            )}
          </section>
          {/* for demo purposes only */}
          <section className="text-sm text-ui-100/0 hover:text-ui-100 flex flex-col items-stretch">
            <a onClick={() => setIsEmpty(!isEmpty)}>
              Toggle empty state {isEmpty ? "ON" : "OFF"}
            </a>
          </section>
        </>
      )}
    </>
  );
}
