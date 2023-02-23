import React, { useEffect, useState } from "react";

import Link from "next/link";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import Tooltip from "../../../../components/Tooltip/Tooltip";
import Lottie from "lottie-react";
import LottieExplosion from "../../../../assets/animations/explosion_stryda_1.json";

export default function TabLaddersHistory() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const hasAds = query.ads === "true" ? true : false;
  const isEmpty = query.empty === "true" ? true : false;
  const { game } = router.query;

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game]);

  return (
    <>
      {isEmpty && (
        <>
          <div className="surface rounded-lg px-4 py-8 text-center">
            <div className="max-w-xs mx-auto">
              <span className="icon icon-smile text-6xl text-ui-500" />
              <div className="mt-2 mb-6">
                <p className="text-sm text-ui-400">
                  You have not taken part in any Ladders yet.
                </p>
                <p className="text-lg text-ui-300">
                  Play tournaments and competitions to see the history of your
                  earnings.
                </p>
              </div>
              <Link href="/prototype/valorant/ladders">
                <a className="button button-main">
                  <span>Browse Ladders</span>
                </a>
              </Link>
            </div>
          </div>
        </>
      )}
      {!isEmpty && (
        <>
          <div className="overflow-y-hidden overflow-x-auto scrollbar-desktop px-4 sm:px-0 pb-4">
            <table className="table table-rounded rounded-xl w-full text-center">
              <thead className="text-ui-400">
                <tr>
                  <th className="text-left">Name</th>
                  <th>Position</th>
                  <th>Points</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {selectedGame &&
                  selectedGame.ladders.map((ladder, ladderIndex) => (
                    <>
                      <tr
                        key={ladder}
                        className="animate-slide-in-bottom animate-delay leading-tight text-center"
                        style={{
                          "--delay": "calc(" + ladderIndex + " * 0.05s)",
                        }}
                      >
                        <td>
                          <Link
                            href={`/prototype/${game}/ladders/${
                              ladder.id
                            }${prototype.getURLparams()}`}
                          >
                            <div className="flex items-center">
                              <div className="text-left py-2 interactive">
                                {ladder.name}
                              </div>
                              {ladder.isPremium && (
                                <Tooltip
                                  placement="top"
                                  tooltip={
                                    <div className="w-56 flex items-center gap-4 text-sm">
                                      <div className="relative">
                                        <span className="icon icon-crown text-6xl text-premium-500" />
                                        <div className="lottie-premium absolute -inset-1">
                                          <Lottie
                                            animationData={LottieExplosion}
                                            loop={false}
                                            autoplay={true}
                                          />
                                        </div>
                                      </div>
                                      <div className="flex-1">
                                        This Ladder is available for{" "}
                                        <span className="text-premium-500">
                                          Premium members
                                        </span>{" "}
                                        only.
                                      </div>
                                    </div>
                                  }
                                >
                                  <Link href="/prototype/premium">
                                    <button
                                      type="button"
                                      className="button button-ghost rounded-full"
                                    >
                                      <span className="icon icon-crown text-premium-500 text-lg" />
                                    </button>
                                  </Link>
                                </Tooltip>
                              )}
                            </div>
                          </Link>
                        </td>
                        <td>
                          <span className="font-bold">
                            #{ladder.soloResults?.placement}
                          </span>
                        </td>
                        <td>
                          <span className="font-bold">
                            #{ladder.soloResults?.points}
                          </span>
                        </td>
                        <td className="text-right">
                          <Link
                            href={`/prototype/${game}/ladders/${
                              ladder.id
                            }${prototype.getURLparams()}`}
                          >
                            <a className="button button-sm button-secondary">
                              <span>View Ladder</span>
                            </a>
                          </Link>
                        </td>
                      </tr>
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
        </>
      )}
    </>
  );
}
