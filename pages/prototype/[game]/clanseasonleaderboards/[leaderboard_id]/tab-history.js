import React, { useContext, useEffect, useState } from "react";

import Reward from "../../../../../components/Reward/Reward";
import Tooltip from "../../../../../components/Tooltip/Tooltip";
import { usePrototypeData } from "../../../../../contexts/prototype";
import { useRouter } from "next/router";
import Link from "next/link";

export default function TabClanLeaderboardsHistory() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
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

  function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
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
                  <div className="overflow-y-hidden overflow-x-auto scrollbar-desktop px-4 sm:px-0 pb-4">
                    <table className="table table-rounded rounded-xl w-full">
                      <tbody>
                        {selectedGame.clanLeaderboards.map(
                          (item, itemIndex) => (
                            <Link
                              key={itemIndex}
                              href={`/prototype/${game}/clanseasonleaderboards/${item.id}`}
                            >
                              <tr
                                className="interactive animate-slide-in-bottom animate-delay"
                                style={{
                                  "--delay": "calc(" + itemIndex + " * 0.05s)",
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
                                    <div className="h-4 mb-2">{item.name}</div>
                                    <div className="text-sm text-ui-300">
                                      {item.isCurrent ? (
                                        <>12 days left</>
                                      ) : (
                                        <>Ended {item.id * 2} months ago</>
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
                                          <div key={clanIndex} className="avatar avatar-squircle avatar-tiny">
                                            <div>
                                              <img
                                                src={
                                                  prototype.getClanByID(clan.clan)
                                                    .avatar
                                                }
                                                alt="avatar"
                                              />
                                            </div>
                                          </div>
                                        ))}
                                    </div>
                                    <span className="text-sm text-ui-300">
                                      {RandomNumber(10, 100)} clans{" "}
                                      {item.isCurrent ? (
                                        <> are enrolled</>
                                      ) : (
                                        <>have partaken</>
                                      )}
                                    </span>
                                  </div>
                                </td>
                              </tr>
                            </Link>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
              </>
            )}
          </section>
        </>
      )}
    </>
  );
}
