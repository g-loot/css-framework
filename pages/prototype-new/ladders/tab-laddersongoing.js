import React, { useEffect, useState, useContext } from "react";

import { usePrototypeData } from "../../../contexts/prototype";
import { useRouter } from "next/router";
import LadderCardSecondary from "../../../components/Ladder/LadderCardSecondary";
import Slider from "../../../components/Slider/Slider";
import ModalFavoriteGames from "../modal-favoritegames";
import { UiContext } from "../../../contexts/ui";
import Link from "next/link";
import AnimatedNumber from "../../../components/AnimatedNumber/AnimatedNumber";
import FilterGame from "../../../components/FilterGame/FilterGame";

export default function TabLaddersOngoing() {
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
      <>
        <section className="my-8">
          <FilterGame />
        </section>
        <section className="my-8">
          <div className="flex gap-2 items-baseline justify-between mx-4 sm:mx-0">
            <h2 className="h5">Ongoing Ladders</h2>
          </div>
          <div className="relative">
            <Slider
              itemWidth={397 + 16}
              bgColor="from-ui-900 via-ui-900/90 to-ui-900/0"
            >
              {prototype.games.map((game, gameIndex) => (
                <>
                  {game.ladders?.map((ladder, ladderIndex) => (
                    <>
                      {ladder.status !== "finished" && (
                        <LadderCardSecondary
                          key={ladder.id}
                          ladder={ladder}
                          isHorizontal={false}
                          isClan={false}
                          gameID={game.id}
                        />
                      )}
                    </>
                  ))}
                </>
              ))}
            </Slider>
          </div>
        </section>

        <section className="my-8 flex flex-col xl:flex-row gap-4 items-stretch">
          <div className="flex-1 surface sm:rounded-lg overflow-hidden relative flex flex-col p-6">
            <div className="flex-1 relative z-10 max-w-[25ch] flex flex-col justify-start items-start">
              <h2 className="h5">How it works</h2>
              <p className="text-ui-300 mt-3 mb-5">
                From entering a Ladder to claiming your rewards, here is
                everything you need to know about our competitions.
              </p>
              <Link href={`/prototype-new/ladders/howitworks`}>
                <button
                  type="button"
                  className="button button-sm button-secondary"
                >
                  Learn more
                </button>
              </Link>
            </div>
            <img
              className="hidden object-contain object-right absolute z-0 right-0 inset-y-0 w-full h-full"
              src="https://res.cloudinary.com/gloot/image/upload/v1670317438/Marketing/2022_prototype/Ladder_how_it_works_card_right.jpg"
              alt=""
            />
          </div>
          <div className="flex-1 surface sm:rounded-lg overflow-hidden relative flex flex-col p-6">
            <div className="flex-1 relative z-10 max-w-[25ch] flex flex-col justify-start items-start">
              <h2 className="h5">Stryda Rules</h2>
              <p className="text-ui-300 mt-3 mb-5">
                At Stryda we take player protection very seriously and
                investigate any suspicious activity.
              </p>
              <Link href={`/prototype-new/ladders/rules`}>
                <button
                  type="button"
                  className="button button-sm button-secondary"
                >
                  Learn more
                </button>
              </Link>
            </div>
            <img
              className="hidden object-contain object-right absolute z-0 right-0 inset-y-0 w-full h-full"
              src="https://res.cloudinary.com/gloot/image/upload/v1670317438/Marketing/2022_prototype/Ladder_how_it_rules_card_right.jpg"
              alt=""
            />
          </div>
          <div className="xl:h-64 flex-1 surface sm:rounded-lg overflow-hidden relative flex flex-col">
            <div className="px-3 py-2 border-b border-ui-700 relative z-10 flex-none flex items-center justify-between">
              <div className="font-bold">Your Ladder history</div>
              <Link
                href={`/prototype-new/ladders/history${prototype.getURLparams()}`}
              >
                <a className="link link-hover text-ui-300 text-sm">View all</a>
              </Link>
            </div>
            <div className="relative z-0 lg:max-h-150px overflow-y-auto scrollbar-desktop">
              <table className="table table-interactive w-full">
                <tbody>
                  {prototype.games.map((game, gameIndex) => (
                    <>
                      {game.ladders?.map((ladder, ladderIndex) => (
                        <>
                          <Link
                            href={`/prototype-new/${game}/ladders/${
                              ladder.id
                            }${prototype.getURLparams()}`}
                          >
                            <tr
                              key={ladder}
                              className="leading-tight py-2 text-sm"
                            >
                              <td>
                                <span className="text-ui-300">
                                  {ladder.name}
                                </span>
                              </td>
                              <td>
                                <div className="text-right">
                                  #{ladder.soloResults?.placement}
                                </div>
                              </td>
                              <td>
                                <div className="text-right">
                                  {ladder.soloResults?.points} points
                                </div>
                              </td>
                            </tr>
                          </Link>
                        </>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className="my-12 surface surface-dimmed sm:rounded-lg p-8 text-center relative">
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
            width="179"
            height="auto"
            alt=""
          />
          <img
            className="hidden lg:block absolute pointer-events-none z-20 -top-14 left-[calc(50%-26rem)] blur-sm -rotate-[33deg]"
            src="https://res.cloudinary.com/gloot/image/upload/v1672157995/Stryda/currencies/Reward-coin-side_1.png"
            width="140"
            height="auto"
            alt=""
          />
          <img
            className="hidden lg:block absolute pointer-events-none z-20 -bottom-14 left-2 -rotate-[143deg]"
            src="https://res.cloudinary.com/gloot/image/upload/v1672157995/Stryda/currencies/Reward-coin-side_1.png"
            width="120"
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
            Last week, Stryda players won a total of
          </h3>
          <div className="flex gap-8 items-start justify-center leading-tight mt-4">
            <div>
              <img
                src="https://res.cloudinary.com/gloot/image/upload/v1672157994/Stryda/currencies/Reward-centered-coin-large.png"
                width="190"
                height="auto"
                className="-mt-6 -mb-8"
                alt=""
              />
              <div className="text-2xl lg:text-4xl text-currency-1-500">
                <AnimatedNumber number={21425235} />
              </div>
              <div className="uppercase text-lg text-currency-1-500">Coins</div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}