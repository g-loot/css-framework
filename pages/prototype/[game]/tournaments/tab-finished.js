import React, { useEffect, useState } from "react";

import Link from "next/link";
import Reward from "../../../../components/Reward/Reward";
import moment from "moment";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";

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
                  You have not entered any Ladders yet.
                </p>
                <p className="text-lg text-ui-300">
                  Play tournaments and competitions to see the history of your
                  earnings.
                </p>
              </div>
              <Link href="/prototype/valorant/tournaments">
                <a className="button button-main">
                  <span>Browse Tournaments</span>
                </a>
              </Link>
            </div>
          </div>
        </>
      )}
      {!isEmpty && (
        <>
          <div className="overflow-y-hidden overflow-x-auto scrollbar-desktop px-4 sm:px-0 pb-4">
            <table className="table table-rounded rounded-xl w-full">
              <thead>
                <tr>
                  <th>Tournament</th>
                  <th>Date</th>
                  <th>Region</th>
                  <th>Prize</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {selectedGame &&
                  selectedGame.tournaments?.map(
                    (tournament, tournamentIndex) => (
                      <>
                        <tr
                          key={tournament}
                          className="animate-slide-in-bottom animate-delay leading-tight"
                          style={{
                            "--delay": "calc(" + tournamentIndex + " * 0.05s)",
                          }}
                        >
                          <td>{tournament.name}</td>
                          <td>
                            <div className="text-ui-300 text-sm">
                              {moment(
                                tournament.details.date,
                                "YYYY-MM-DDThh:mm:ss.SSS"
                              ).format("MMMM Do YYYY")}
                            </div>
                          </td>
                          <td>
                            <div className="text-ui-300 text-sm uppercase">
                              {tournament.details.region}
                            </div>
                          </td>
                          <td>
                            <div className="flex items-center gap-2">
                              {tournament.rewards.map((reward, rewardIndex) => (
                                <Reward
                                  key={rewardIndex}
                                  reward={reward}
                                  gap="gap-1"
                                  iconClassNames="text-base"
                                  textClassNames="text-ui-300 text-sm"
                                />
                              ))}
                            </div>
                          </td>
                          <td className="text-right">
                            <Link
                              href={`/prototype/${game}/tournaments/${
                                tournament.id
                              }${prototype.getURLparams()}`}
                            >
                              <a className="button button-sm button-secondary">
                                <span>View tournament</span>
                              </a>
                            </Link>
                          </td>
                        </tr>
                      </>
                    )
                  )}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-4 mb-8">
            <ul className="pagination">
              <li>
                <a href="#" tabIndex="-1">
                  Previous
                </a>
              </li>
              <li className="is-active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <span>...</span>
              </li>
              <li>
                <a href="#">12</a>
              </li>
              <li>
                <a href="#">Next</a>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}
