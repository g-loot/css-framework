import React, { useContext, useEffect, useState } from "react";

import Ad from "../../../../components/Ad/Ad";
import Link from "next/link";
import ModalBrawlHowitworksVideo from "./modal-howitworks-video";
import PrototypeStructure from "../../../../components/Prototype/PrototypeStructure";
import { UiContext } from "../../../../contexts/ui";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import TabBrawlsOngoingNew from "./tab-brawlsongoingnew";
import BrawlsHeader from "./brawls-header";

export default function Brawls() {
  const router = useRouter();
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const { game } = router.query;
  const uiContext = useContext(UiContext);

  function openModalBrawlHowitworksVideo() {
    uiContext.openModal(
      <ModalBrawlHowitworksVideo></ModalBrawlHowitworksVideo>
    );
  }

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game, prototype]);

  useEffect(() => {
    if (selectedGame != null) {
      prototype.defineDefaultGameID(selectedGame.id);
    }
  }, [selectedGame]);

  return (
    <>
      <PrototypeStructure title="Brawls">
        <Ad width="1005" height="300" />
        {selectedGame && (
          <>
            <BrawlsHeader breadcrumbs={false} />
            <TabBrawlsOngoingNew />
            <section className="py-4 flex flex-col xl:flex-row gap-4 items-stretch">
              <div className="flex-1 surface sm:rounded-lg overflow-hidden relative flex flex-col p-6">
                <div className="flex-1 relative z-10 max-w-[25ch] flex flex-col justify-start items-start">
                  <h2 className="h5">How it works</h2>
                  <p className="text-ui-300 mt-3 mb-5">
                    From entering a Brawl to claiming your rewards, here is
                    everything you need to know about our competitions.
                  </p>
                  <Link
                    href={`/prototype/${selectedGame.slug}/brawls/howitworks`}
                  >
                    <button
                      type="button"
                      className="button button-sm button-secondary"
                    >
                      Learn more
                    </button>
                  </Link>
                </div>
                <img
                  className="object-contain object-right absolute z-0 right-0 inset-y-0 w-full h-full"
                  src="https://res.cloudinary.com/gloot/image/upload/v1670317438/Marketing/2022_prototype/Brawl_how_it_works_card_right.jpg"
                  alt=""
                />
              </div>
              <div className="flex-1 surface sm:rounded-lg overflow-hidden relative flex flex-col p-6">
                <div className="flex-1 relative z-10 max-w-[25ch] flex flex-col justify-start items-start">
                  <h2 className="h5">G-Loot Rules</h2>
                  <p className="text-ui-300 mt-3 mb-5">
                    At G-Loot we take player protection very seriously and
                    investigate any suspicious activity.
                  </p>
                  <Link href={`/prototype/${selectedGame.slug}/brawls/rules`}>
                    <button
                      type="button"
                      className="button button-sm button-secondary"
                    >
                      Learn more
                    </button>
                  </Link>
                </div>
                <img
                  className="object-contain object-right absolute z-0 right-0 inset-y-0 w-full h-full"
                  src="https://res.cloudinary.com/gloot/image/upload/v1670317438/Marketing/2022_prototype/Brawl_how_it_rules_card_right.jpg"
                  alt=""
                />
              </div>
              <div className="xl:h-64 flex-1 surface sm:rounded-lg overflow-hidden relative flex flex-col">
                <div className="px-3 py-2 border-b border-ui-700 relative z-10 flex-none flex items-center justify-between">
                  <div className="font-bold">Your Brawl history</div>
                  <Link
                    href={`/prototype/${
                      selectedGame.slug
                    }/brawls/history${prototype.getURLparams()}`}
                  >
                    <a className="link link-hover text-ui-300 text-sm">
                      View all
                    </a>
                  </Link>
                </div>
                <div className="relative z-0 lg:max-h-150px overflow-y-auto scrollbar-desktop">
                  <table className="table table-interactive w-full">
                    <tbody>
                      {selectedGame &&
                        selectedGame.brawls.map((brawl, brawlIndex) => (
                          <>
                            <Link
                              href={`/prototype/${game}/brawls/${
                                brawl.id
                              }${prototype.getURLparams()}`}
                            >
                              <tr
                                key={brawl}
                                className="leading-tight py-2 text-sm"
                              >
                                <td>
                                  <span className="text-ui-300">
                                    {brawl.name}
                                  </span>
                                </td>
                                <td>
                                  <div className="font-bold text-right">
                                    #{brawl.soloResults?.placement}
                                  </div>
                                </td>
                                <td>
                                  <div className="font-bold text-right">
                                  {brawl.soloResults?.points} points
                                  </div>
                                </td>
                              </tr>
                            </Link>
                          </>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            <section className="my-8 surface sm:rounded-lg p-8 text-center relative">
              <img
                className="hidden lg:block absolute pointer-events-none z-20 -top-8 right-2 rotate-[33deg]"
                src="https://res.cloudinary.com/gloot/image/upload/v1657118756/Marketing/2022_prototype/CurrencyRewards/Reward-coin-side_2.webp"
                width="90"
                height="auto"
                alt=""
              />

              <img
                className="hidden lg:block absolute pointer-events-none z-20 -bottom-20 right-[calc(50%-28rem)] blur-sm rotate-[120deg]"
                src="https://res.cloudinary.com/gloot/image/upload/v1657118756/Marketing/2022_prototype/CurrencyRewards/Reward-coin-side_1.webp"
                width="189"
                height="auto"
                alt=""
              />
              <img
                className="hidden lg:block absolute pointer-events-none z-20 -top-14 left-[calc(50%-26rem)] blur-sm -rotate-[33deg]"
                src="https://res.cloudinary.com/gloot/image/upload/v1657118756/Marketing/2022_prototype/CurrencyRewards/Reward-coin-side_2.webp"
                width="150"
                height="auto"
                alt=""
              />
              <img
                className="hidden lg:block absolute pointer-events-none z-20 -bottom-14 left-2 -rotate-[143deg]"
                src="https://res.cloudinary.com/gloot/image/upload/v1657118756/Marketing/2022_prototype/CurrencyRewards/Reward-coin-side_2.webp"
                width="134"
                height="auto"
                alt=""
              />
              <img
                className="hidden lg:block absolute pointer-events-none z-20 top-32 left-5 -rotate-[74deg]"
                src="https://res.cloudinary.com/gloot/image/upload/v1657118756/Marketing/2022_prototype/CurrencyRewards/Reward-coin-side_1.webp"
                width="49"
                height="auto"
                alt=""
              />
              <h3 className="text-2xl">
                Last week, G-Loot Brawlers won a total of
              </h3>
              <div className="flex gap-8 items-start justify-center leading-tight mt-4">
                <div>
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1654171544/Marketing/2022_prototype/CurrencyRewards/Reward-centered-coin-small.png"
                    width="100"
                    height="auto"
                    alt=""
                  />
                  <div className="font-headings font-bold text-xl lg:text-3xl text-gold-500">
                    2 245 650
                  </div>
                  <div className="uppercase text-lg text-gold-500">Coins</div>
                </div>
              </div>
            </section>
          </>
        )}
      </PrototypeStructure>
    </>
  );
}
