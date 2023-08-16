import React, { useContext, useEffect, useState } from "react";
import { usePrototypeData } from "@/contexts/prototype";
import { UiContext } from "@/contexts/ui";
import { useRouter } from "next/router";
import CardClanEvent from "@/pages/stryda/components/CardClanEvent";

export default function TabClanLeaderboardUpcoming() {
  const router = useRouter();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const selectedGame = prototype.getGameByID(prototype.defaultGameID);
  const { game_slug } = router.query;
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

  return (
    <>
      {selectedGame && (
        <>
          <section className="pb-8">
            {isEmpty || !selectedGame.clanLeaderboards && (
              <>
                <div className="mt-2 surface sm:rounded px-4 py-8 text-center">
                  <div className="max-w-xs mx-auto">
                    <span className="icon icon-multiple-11 text-6xl text-ui-500" />
                    <div className="mt-2 text-ui-300">
                      There is no upcoming Clan Event in {selectedGame.name}.
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
                    <div className="items-spaced item-interactive space-y-2">
                      {selectedGame.clanLeaderboards?.filter((g) => g.status === "upcoming")
                        .map((item, itemIndex) => (
                          <CardClanEvent
                            key={itemIndex}
                            game={game_slug}
                            item={item}
                          />
                        ))}
                    </div>
                  </>
                )}
              </>
            )}
          </section>
          {/* for demo purposes only */}
          <section className="text-ui-100/0 hover:text-ui-100 inline-flex flex-col">
            <a onClick={() => setIsEmpty(!isEmpty)}>
              Toggle empty state {isEmpty ? "ON" : "OFF"}
            </a>
          </section>
        </>
      )}
    </>
  );
}
