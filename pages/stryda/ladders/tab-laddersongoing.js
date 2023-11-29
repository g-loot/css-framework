import React, { useEffect, useState } from "react";

import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import CardLadder from "@/pages/stryda/components/CardLadder";
import Slider from "@/components/Slider/Slider";
import AnimatedNumber from "@/components/AnimatedNumber/AnimatedNumber";

export default function TabLaddersOngoing() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const selectedGame = prototype.getGameByID(prototype.defaultGameID);
  const isEmpty = query.empty === "true" ? true : false;

  return (
    <>
      {selectedGame && (
        <>
          <section className="mb-8 animate-slide-in-bottom">
            <div className="flex gap-2 items-baseline justify-between mx-4 sm:mx-0">
              <h2 className="h5">Solo</h2>
            </div>
            {isEmpty ||
            selectedGame.ladders?.length === 0 ||
            !selectedGame.ladders ? (
              <>
                <div className="mt-2 surface sm:rounded px-4 py-8 text-center">
                  <div className="max-w-xs mx-auto">
                    <span className="icon icon-ladder text-6xl text-ui-500" />
                    <div className="mt-2 text-ui-300">
                      There are no ongoing Solo Ladders
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-4 mx-4 sm:mx-0 mt-2">
                {selectedGame.ladders?.map((ladder, ladderIndex) => (
                  <>
                    {ladder.status !== "finished" &&
                      ladder.status !== "upcoming" && (
                        <CardLadder
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
            {isEmpty ||
            selectedGame.ladders?.length === 0 ||
            !selectedGame.ladders ? (
              <>
                <div className="mt-2 surface sm:rounded px-4 py-8 text-center">
                  <div className="max-w-xs mx-auto">
                    <span className="icon icon-ladder text-6xl text-ui-500" />
                    <div className="mt-2 text-ui-300">
                      There are no ongoing Clan Ladders
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
                  {selectedGame.ladders?.map((ladder, ladderIndex) => (
                    <>
                      {ladder.status !== "finished" &&
                        ladder.status !== "upcoming" &&
                        ladder.clan && (
                          <CardLadder
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
                <div className="uppercase text-lg text-currency-1-500">
                  Coins
                </div>
              </div>
            </div>
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
                    id="state-premium"
                    defaultChecked={prototype.isPremium}
                    onClick={() => prototype.togglePremium()}
                  />
                  <label htmlFor="state-premium">Premium State</label>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
}
