import React, { useEffect, useState } from "react";

import Link from "next/link";
import { usePrototypeData } from "../../../contexts/prototype";
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
                  You have not taken part in any Ladders yet.
                </p>
                <p className="text-lg text-ui-300">
                  Play tournaments and competitions to see the history of your
                  earnings.
                </p>
              </div>
              <Link href="/prototype-new/valorant/ladders">
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
                            href={`/prototype-new/${game}/ladders/${
                              ladder.id
                            }${prototype.getURLparams()}`}
                          >
                            <div className="text-left interactive">
                              {ladder.name}
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
                            href={`/prototype-new/${game}/ladders/${
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
