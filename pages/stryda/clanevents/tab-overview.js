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
                <div className="mt-2 surface sm:rounded px-4 py-8 text-center">
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
                    {selectedGame.clanLeaderboards
                      .filter((g) => g.status === "ongoing")
                      .map((item, itemIndex) => (
                        <CardClanEvent key={itemIndex} game={game} item={item} />
                      ))}
                  </>
                )}
              </>
            )}
          </section>
          {/* for demo purposes only */}
          <section className="text-ui-100/0 hover:text-ui-100 inline-flex flex-col">
            <a onClick={() => variablesContext.clanEventEnroll()}>
              Toggle enrolled{" "}
              {variablesContext.clanLeaderboardEnrolled ? "ON" : "OFF"}
            </a>
            <a onClick={() => setIsEmpty(!isEmpty)}>
              Toggle empty state {isEmpty ? "ON" : "OFF"}
            </a>
          </section>
        </>
      )}
    </>
  );
}
