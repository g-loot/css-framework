import React, { useEffect, useState, useContext } from "react";

import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import { VariablesContext } from "@/contexts/variables";
import CardClanEvent from "../components/CardClanEvent";

export default function TabClanEventLeaderboardOverview() {
  const router = useRouter();
  const { query } = useRouter();
  const variablesContext = useContext(VariablesContext);

  const prototype = usePrototypeData();
  const selectedGame = prototype.getGameByID(prototype.defaultGameID);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const empty = query.empty === "true" ? true : false;
  const [isEmpty, setIsEmpty] = useState(empty);
  const { game } = router.query;

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

  return (
    <>
      {selectedGame && (
        <>
          <section className="mb-8 space-y-4">
            {isEmpty || !selectedGame.clanLeaderboards ? (
              <>
                <div className="surface sm:rounded px-4 py-8 text-center">
                  <div className="max-w-xs mx-auto">
                    <span className="icon icon-multiple-11 text-6xl text-ui-500" />
                    <div className="mt-2 text-ui-300">
                      There is no ongoing Clan Event in {selectedGame.name}.
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {loading ? (
                  <section>
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
                    {selectedGame.clanLeaderboards
                      .filter((g) => g.status === "ongoing")
                      .map((item, itemIndex) => (
                        <CardClanEvent
                          key={itemIndex}
                          game={game}
                          item={item}
                        />
                      ))}
                  </>
                )}
              </>
            )}
          </section>
          {/* for demo purposes only */}
          {prototype.showDemo && (
            <section className="fixed z-[9999] bottom-4 left-4 surface-ui-500 rounded shadow-md p-4 pr-16 text-sm text-ui-100 flex flex-col items-start">
              <div className="absolute top-1 right-1">
                <button
                  type="button"
                  className="button button-sm button-secondary button-close"
                  onClick={() => prototype.setShowDemo(!prototype.showDemo)}
                >
                  <span className="icon icon-e-remove" />
                </button>
              </div>
              <div className="form-group pl-4">
                <div className="form-xs form-toggle">
                  <input
                    type="checkbox"
                    name="feed"
                    id="feed-enrolled"
                    onClick={() =>
                      variablesContext.clanEventEnroll(
                        !variablesContext.clanLeaderboardEnrolled
                      )
                    }
                  />
                  <label htmlFor="feed-enrolled">Enrolled state</label>
                </div>
              </div>
              <div className="form-group pl-4">
                <div className="form-xs form-toggle">
                  <input
                    type="checkbox"
                    name="feed"
                    id="feed-empty"
                    onChange={() => {
                      setIsEmpty(!isEmpty);
                    }}
                  />
                  <label htmlFor="feed-empty">Empty state</label>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
}
