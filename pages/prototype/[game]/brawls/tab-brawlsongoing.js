import React, { useEffect, useState } from "react";

import Countdown from "../../../../components/Countdown/Countdown";
import Link from "next/link";
import Reward from "../../../../components/Reward/Reward";
import Tooltip from "../../../../components/Tooltip/Tooltip";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";

export default function TabBrawlsOngoing() {
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
        <div className="px-4 sm:px-0">
          <>
            <div className="hoverhighlight">
              {selectedGame.brawls.map((brawl, brawlIndex) => (
                <section key={brawl.id}>
                  <div
                    className="animate-slide-in-bottom animate-delay mb-4"
                    style={{ "--delay": "calc(" + brawlIndex + " * 0.05s)" }}
                  >
                    <Link
                      href={`/prototype/${selectedGame.slug}/brawls/${
                        brawl.id
                      }${hasAds ? "?ads=true" : ""}`}
                    >
                      <a className="card-brawl">
                        <div className="card-image">
                          <div className="card-image-content">
                            <div>
                              <div className="chip chip-sliced">
                                <span>Ongoing</span>
                              </div>
                            </div>
                            <div>
                              {brawl.progress > 0 && (
                                <>
                                  <div className="relative z-10 flex p-4">
                                    <figure className="avatar avatar-circle avatar-sm">
                                      <div>
                                        <img
                                          src={prototype.getUserByID(1)?.avatar}
                                        />
                                      </div>
                                      <i className="radar" />
                                    </figure>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                          <div className="card-image-bg">
                            <img alt={brawl.name} src={brawl.cover} />
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body">
                            <div>
                              <h2 className="text-2xl mb-2">{brawl.name}</h2>
                              <div className="chip chip-sm chip-secondary">
                                <span className="icon icon-time-machine" />
                                <span>
                                  Time left:{" "}
                                  <Countdown
                                    additionalClassName="ml-1"
                                    separator=":"
                                  />
                                </span>
                              </div>
                            </div>
                            <div>
                              {brawl.solo && !brawl.clan && (
                                <Tooltip
                                  tooltip={
                                    <div className="max-w-xs text-sm text-center leading-tight">
                                      Solo Brawl
                                    </div>
                                  }
                                >
                                  <div className="flex items-center gap-2 text-xl text-ui-300">
                                    <span className="icon icon-profile-2"></span>
                                  </div>
                                </Tooltip>
                              )}
                              {brawl.solo && brawl.clan && (
                                <Tooltip
                                  tooltip={
                                    <div className="max-w-xs text-sm text-center leading-tight">
                                      Solo &amp; Clan Brawl
                                    </div>
                                  }
                                >
                                  <div className="flex items-center gap-2 text-xl text-ui-300">
                                    <span className="icon icon-profile-2"></span>
                                    <span className="">/</span>
                                    <span className="icon icon-multiple-12"></span>
                                  </div>
                                </Tooltip>
                              )}
                              {!brawl.solo && brawl.clan && (
                                <Tooltip
                                  tooltip={
                                    <div className="max-w-xs text-sm text-center leading-tight">
                                      Clan Brawl
                                    </div>
                                  }
                                >
                                  <div className="flex items-center gap-2 text-xl text-ui-300">
                                    <span className="icon icon-multiple-12"></span>
                                  </div>
                                </Tooltip>
                              )}
                            </div>
                          </div>
                          <div className="card-meta">
                            <div>
                              {brawl.progress === 0 && (
                                <>
                                  <div>
                                    <label className="text-ui-300 uppercase text-sm">
                                      Game mode
                                    </label>
                                    <div className="md:h-8">
                                      <p className="text-ui-200 font-bold">
                                        {brawl.gameMode}
                                      </p>
                                    </div>
                                  </div>
                                </>
                              )}
                              {brawl.progress > 0 && (
                                <>
                                  <div className="flex gap-1.5 items-baseline">
                                    <div className="font-headings font-bold text-3xl italic text-main">
                                      2/3
                                    </div>
                                    <div className="text-ui-300 text-sm">
                                      matches played to get your total Brawl
                                      points
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>
                            <div className="w-60">
                              {brawl.progress > 0 && brawl.progress < 3 && (
                                <>
                                  <ul className="step step-primary step-sm w-full max-w-xs">
                                    <li>
                                      <a href="#">
                                        <i />
                                        <div></div>
                                        <span />
                                      </a>
                                    </li>
                                    <li className="is-active">
                                      <a href="#">
                                        <i />
                                        <div></div>
                                        <span />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i />
                                        <div></div>
                                        <span />
                                      </a>
                                    </li>
                                  </ul>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </section>
              ))}
            </div>
            <section
              className="surface surface-dimmed sm:rounded-lg p-8 animate-slide-in-bottom animate-delay text-center"
              style={{
                "--delay": "calc(" + selectedGame.brawls?.length + " * 0.05s)",
              }}
            >
              <h3 className="text-2xl">
                Last week, G-Loot Brawlers won a total of
              </h3>
              <div className="flex gap-8 items-start justify-center leading-tight mt-4">
                <div>
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1654171544/Marketing/2022_prototype/CurrencyRewards/Reward-centered-coin-small.png"
                    width="140"
                    height="auto"
                    alt=""
                  />
                  <div className="text-4xl font-headings text-gold-500">
                    2245650
                  </div>
                  <div className="font-headings font-bold uppercase text-lg text-gold-500">
                    Coins
                  </div>
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1659613036/Marketing/2022_prototype/CurrencyRewards/Reward-ticket-multiple.png"
                    width="140"
                    height="auto"
                    alt=""
                  />
                  <div className="text-4xl font-headings text-bronze-500">
                    123
                  </div>
                  <div className="font-headings font-bold uppercase text-lg text-bronze-500">
                    Golden tickets
                  </div>
                </div>
              </div>
            </section>
          </>
        </div>
      )}
    </>
  );
}
