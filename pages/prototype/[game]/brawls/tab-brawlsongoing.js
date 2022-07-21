import React, { useEffect, useState } from "react";

import Countdown from "../../../../components/Countdown/Countdown";
import Link from "next/link";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";

export default function TabBrawlsOngoing() {
  const router = useRouter();
  const prototypeData = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const hasAds = router.ads === "true" ? true : false;
  const { game } = router.query;

  useEffect(() => {
    setSelectedGame(prototypeData.getGameBySlug(game));
  }, [game]);

  return (
    <div className="px-4 sm:px-0">
      <>
        {selectedGame && selectedGame.brawls.map((brawl, brawlIndex) => (
          <>
            <section
              key={brawl}
              className="animate-slide-in-bottom animate-delay"
              style={{ "--delay": "calc( " + brawlIndex + " * 0.05s)" }}
            >
              
              <Link href={`/prototype/${game}/brawls/${brawl.id}${hasAds ? "?ads=true" : ""}`}>
                <a className="relative surface rounded-lg overflow-hidden mb-4 block transform-gpu hover:opacity-50 transition-all duration-200 cursor-pointer">
                  <div className="relative z-10 grid grid-cols-3 gap-4 items-stretch min-h-[200px]">
                    <div className="relative col-span-3 md:col-span-1 flex flex-col justify-between h-full aspect-video md:aspect-auto">
                      <div className="relative z-10 flex flex-col justify-between p-4">
                        <div className="flex-1">
                          <div className="chip chip-sliced">
                            <span>Ongoing</span>
                          </div>
                          <div className="flex items-center gap-2 mt-2 text-xl text-ui-300">
                            {brawl.solo && (
                              <>
                              <span className="icon icon-profile-2" />
                              </>
                            )}
                            {brawl.solo && brawl.clan && (
                              <>
                              <span className="">/</span>
                              </>
                            )}
                            {brawl.clan && (
                              <>
                              <span className="icon icon-multiple-12" />
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      {brawl.progress > 0 && (
                        <>
                          <div className="relative z-10 flex p-4">
                            <figure className="avatar avatar-circle avatar-sm">
                              <div>
                                <img src={prototypeData.getUserByID(0)?.avatar} />
                              </div>
                              <i className="radar" />
                            </figure>
                          </div>
                        </>
                      )}
                      <div
                        className="absolute z-0 right-0 inset-y-0 w-full animate-slide-in-left animate-delay"
                        style={{
                          "--delay": "calc( " + brawlIndex + " * 0.15s)",
                        }}
                      >
                        <div className="absolute z-10 inset-y-0 w-1/2 left-0 bg-gradient-to-r from-ui-800 via-ui-800/75 to-ui-800/0"></div>
                        <div className="absolute z-10 inset-y-0 w-1/2 right-0 bg-gradient-to-r from-ui-800/0 to-ui-800"></div>
                        <img
                          className="absolute z-0 object-right-top object-cover xl:object-cover inset-0 w-full h-full"
                          src={brawl.cover}
                        />
                      </div>
                    </div>
                    <div className="col-span-3 md:col-span-1 px-4 md:py-4 flex flex-col justify-between md:gap-4">
                      <div>
                        <h2 className="text-2xl mb-2">
                          {brawl.name}
                        </h2>
                        <div className="chip chip-sm chip-secondary">
                          <span className="icon icon-time-machine" />
                          <span>
                            Time left:{" "}
                            <Countdown additionalClassName="ml-1" separator=":" />
                          </span>
                        </div>
                        <hr className="md:hidden my-4" />
                      </div>
                      {brawl.progress === 0 && (
                        <>
                          <div>
                            <label className="text-ui-300 uppercase text-sm">Game mode</label>
                            <div className="md:h-8">
                              <p className="text-ui-200 font-bold">{brawl.gameMode}</p>
                            </div>
                          </div>
                        </>
                      )}
                      {brawl.progress > 0 && (
                        <>
                          <div className="flex gap-1.5 items-baseline">
                            <div className="font-headings text-3xl italic text-main">2/3</div>
                            <div className="text-ui-300 text-sm">matches played to get your total Brawl points</div>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="col-span-3 md:col-span-1 px-4 pb-4 flex flex-col justify-end items-start md:items-end">
                      {brawl.progress === 0 && (
                        <>
                          <label className="text-ui-300 uppercase text-sm text-right">Reward</label>
                          <div className="md:h-8">
                            <div className="flex gap-3 items-center">
                              {brawl.rewards.map((reward, rewardIndex) => (
                                <>
                                  <div className="flex items-center gap-1">
                                    <img className="h-8" src={`https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-${reward.type}-unique.webp`} width="auto" height="auto" alt="" />
                                    <span className="font-headings text-2xl italic">{reward.value}</span>
                                  </div>
                                </>
                              ))}
                            </div>
                          </div>
                        </>
                      )}
                      {brawl.progress > 0 && (
                        <>
                          <ul className="step step-primary step-sm w-full max-w-xs">
                            <li>
                              <a href="#">
                                <i/>
                                <div></div>
                                <span/>
                              </a>
                            </li>
                            <li className="is-active">
                              <a href="#">
                                <i/>
                                <div></div>
                                <span/>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i/>
                                <div></div>
                                <span/>
                              </a>
                            </li>
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                </a>
              </Link>
            </section>
          </>
        ))}
      </>
    </div>
  );
}
