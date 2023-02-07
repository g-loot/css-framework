import React, { useEffect, useState } from "react";

import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import LadderCardSecondary from "../../../../components/Ladder/LadderCardSecondary";
import Slider from "../../../../components/Slider/Slider";
import AnimatedNumber from "../../../../components/AnimatedNumber/AnimatedNumber";

export default function TabLaddersOngoingNew() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const hasAds = query.ads === "true" ? true : false;
  const { game } = router.query;

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game]);

  return (
    <>
      {selectedGame && (
        <>
          <section className="my-8">
            <div className="flex gap-2 items-baseline justify-between mx-4 sm:mx-0">
              <h2 className="h5">Ongoing solo Ladders</h2>
            </div>
            <div className="relative">
              <Slider
                itemWidth={397 + 16}
                bgColor="from-ui-900 via-ui-900/90 to-ui-900/0"
              >
                {selectedGame.ladders.map((ladder, ladderIndex) => (
                  <>
                    {ladder.status !== "finished" && (
                      <LadderCardSecondary
                        key={ladder.id}
                        ladder={ladder}
                        isHorizontal={false}
                        isGlobal={false}
                        gameID={selectedGame.id}
                      />
                    )}
                  </>
                ))}
              </Slider>
            </div>
          </section>
          <section className="my-8">
            <div className="flex gap-2 items-baseline justify-between mx-4 sm:mx-0">
              <h2 className="h5">Ongoing clan Ladders</h2>
            </div>
            <div className="relative">
              <Slider
                itemWidth={397 + 16}
                bgColor="from-ui-900 via-ui-900/90 to-ui-900/0"
              >
                {selectedGame.ladders.map((ladder, ladderIndex) => (
                  <>
                    {ladder.status !== "finished" && ladder.clan && (
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
          </section>

          <section className="mt-16 mb-8 surface surface-dimmed sm:rounded-lg p-8 text-center relative">
              <img
                className="hidden lg:block absolute pointer-events-none z-20 -top-8 right-2 rotate-[33deg]"
                src="https://res.cloudinary.com/gloot/image/upload/v1672157995/Stryda/currencies/Reward-coin-side_1.png"
                width="90"
                height="auto"
                alt=""
              />

              <img
                className="hidden lg:block absolute pointer-events-none z-20 -bottom-20 right-[calc(50%-28rem)] blur-sm rotate-[120deg]"
                src="https://res.cloudinary.com/gloot/image/upload/v1672157995/Stryda/currencies/Reward-coin-side_2.png"
                width="189"
                height="auto"
                alt=""
              />
              <img
                className="hidden lg:block absolute pointer-events-none z-20 -top-14 left-[calc(50%-26rem)] blur-sm -rotate-[33deg]"
                src="https://res.cloudinary.com/gloot/image/upload/v1672157995/Stryda/currencies/Reward-coin-side_1.png"
                width="150"
                height="auto"
                alt=""
              />
              <img
                className="hidden lg:block absolute pointer-events-none z-20 -bottom-14 left-2 -rotate-[143deg]"
                src="https://res.cloudinary.com/gloot/image/upload/v1672157995/Stryda/currencies/Reward-coin-side_1.png"
                width="134"
                height="auto"
                alt=""
              />
              <img
                className="hidden lg:block absolute pointer-events-none z-20 top-32 left-5 -rotate-[74deg]"
                src="https://res.cloudinary.com/gloot/image/upload/v1672157995/Stryda/currencies/Reward-coin-side_2.png"
                width="49"
                height="auto"
                alt=""
              />
              <h3 className="text-2xl">
                Last week, Stryda Ladderers won a total of
              </h3>
              <div className="flex gap-8 items-start justify-center leading-tight mt-4">
                <div>
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1672157994/Stryda/currencies/Reward-centered-coin-large.png"
                    width="250"
                    height="auto"
                    className="-mt-6 -mb-8"
                    alt=""
                  />
                  <div className="text-2xl lg:text-5xl text-currency-1-500">
                    <AnimatedNumber number={21425235} />
                  </div>
                  <div className="uppercase text-lg text-currency-1-500">Coins</div>
                </div>
              </div>
            </section>
        </>
      )}
    </>
  );
}
