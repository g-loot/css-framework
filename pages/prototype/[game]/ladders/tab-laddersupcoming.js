import React, { useEffect, useState } from "react";

import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import LadderCardSecondary from "../../../../components/Ladder/LadderCardSecondary";
import Slider from "../../../../components/Slider/Slider";

export default function TabLaddersUpcoming() {
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
          <section className="my-8 animate-slide-in-bottom">
            <div className="flex gap-2 items-baseline justify-between mx-4 sm:mx-0">
              <h2 className="h5">Solo</h2>
            </div>
            {isEmpty ? (
              <>
                <div className="mt-2 surface sm:rounded px-4 py-8 text-center">
                  <div className="max-w-xs mx-auto">
                    <span className="icon icon-ladder text-6xl text-ui-500" />
                    <div className="mt-2 text-ui-300">
                      There are no upcoming Solo Ladders
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-4 mx-4 sm:mx-0 mt-2">
                {selectedGame.ladders.map((ladder, ladderIndex) => (
                  <>
                    {ladder.status === "upcoming" && (
                      <LadderCardSecondary
                        key={ladder.id}
                        ladder={ladder}
                        isHorizontal={false}
                        isGlobal={false}
                        isFluid={true}
                        gameID={selectedGame.id}
                      />
                    )}
                  </>
                ))}
              </div>
            )}
          </section>
          <section className="my-8 animate-slide-in-bottom">
            <div className="flex gap-2 items-baseline justify-between mx-4 sm:mx-0">
              <h2 className="h5">Clan</h2>
            </div>
            {isEmpty ? (
              <>
                <div className="mt-2 surface sm:rounded px-4 py-8 text-center">
                  <div className="max-w-xs mx-auto">
                    <span className="icon icon-ladder text-6xl text-ui-500" />
                    <div className="mt-2 text-ui-300">
                      There are no upcoming Clan Ladders
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="relative">
                <Slider
                  direction="left"
                  itemWidth={397 + 16}
                  bgColor="from-ui-900 via-ui-900/90 to-ui-900/0"
                >
                  {selectedGame.ladders.map((ladder, ladderIndex) => (
                    <>
                      {ladder.status === "upcoming" && ladder.clan && (
                        <LadderCardSecondary
                          key={ladder.id}
                          ladder={ladder}
                          isHorizontal={true}
                          isClan={true}
                          gameID={selectedGame.id}
                        />
                      )}
                    </>
                  ))}
                </Slider>
              </div>
            )}
          </section>
        </>
      )}
    </>
  );
}
