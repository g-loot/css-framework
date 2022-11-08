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
                      }${prototype.getURLparams()}`}
                    >
                      <a className="card-brawl">
                        <div className="card-image">
                          <div className="card-image-content">
                            <div>
                              {brawl.status === "ongoing" && (
                                <div className="chip chip-sliced">
                                  <span>Ongoing</span>
                                </div>
                              )}
                              {brawl.status === "finished" && (
                                <div className="chip chip-sliced chip-gray">
                                  <span>Finished</span>
                                </div>
                              )}
                              <div className="mt-4">
                                {brawl.solo && !brawl.clan && (
                                  <Tooltip
                                    tooltip={
                                      <div className=" w-60 text-sm leading-tight space-y-1">
                                        <h6>Solo Brawl</h6>
                                        <p>
                                          Play this Brawl and compete against
                                          other players in the Solo leaderboard.
                                        </p>
                                      </div>
                                    }
                                  >
                                    <div className="chip chip-secondary">
                                      <div className="avatar avatar-simple avatar-circle avatar-tiny">
                                        <div>
                                          <span className="icon icon-male"></span>
                                        </div>
                                      </div>
                                      <span
                                        className={`font-headings uppercase font-bold text-lg italic pr-1.5 ${
                                          brawl.progress <= 0
                                            ? "text-ui-400"
                                            : "text-ui-200"
                                        }`}
                                      >
                                        Solo Brawl
                                      </span>
                                    </div>
                                  </Tooltip>
                                )}
                                {brawl.solo && brawl.clan && (
                                  <Tooltip
                                    tooltip={
                                      <div className=" w-60 text-sm leading-tight space-y-1">
                                        <h6>Combined Solo &amp; Clan Brawl</h6>
                                        <p>
                                          You can play this Brawl solo and with
                                          your Clan at the same time.
                                        </p>
                                        <p>
                                          If you are part of a Clan, your Brawl
                                          matches count towards both the Solo
                                          and Clan leaderboards.
                                        </p>
                                      </div>
                                    }
                                  >
                                    <div className="flex flex-col items-start gap-1">
                                      <div className="chip chip-secondary">
                                        {brawl.progress > 0 && (
                                          <div className="avatar avatar-circle avatar-tiny">
                                            <div>
                                              <img
                                                src={
                                                  prototype.getUserByID(1)
                                                    ?.avatar
                                                }
                                              />
                                            </div>
                                            <i className="radar" />
                                          </div>
                                        )}
                                        {brawl.progress <= 0 && (
                                          <div className="avatar avatar-simple avatar-circle avatar-tiny">
                                            <div>
                                              <span className="icon icon-male"></span>
                                            </div>
                                          </div>
                                        )}
                                        <span
                                          className={`font-headings uppercase font-bold text-lg italic pr-1.5 ${
                                            brawl.progress <= 0
                                              ? "text-ui-400"
                                              : "text-ui-200"
                                          }`}
                                        >
                                          Solo Brawl
                                        </span>
                                      </div>
                                      <div className="chip chip-secondary">
                                        {brawl.progressClan > 0 && (
                                          <div className="avatar avatar-squircle avatar-tiny">
                                            <div>
                                              <img
                                                src={
                                                  prototype.getClanByID(
                                                    prototype.getUserByID(1).id
                                                  )?.avatar
                                                }
                                              />
                                            </div>
                                            <i className="radar" />
                                          </div>
                                        )}
                                        {brawl.progressClan <= 0 && (
                                          <div className="avatar avatar-simple avatar-circle avatar-tiny">
                                            <div>
                                              <span className="icon icon-multiple-11"></span>
                                            </div>
                                          </div>
                                        )}
                                        <span
                                          className={`font-headings uppercase font-bold text-lg italic pr-1.5 ${
                                            brawl.progressClan <= 0
                                              ? "text-ui-400"
                                              : "text-ui-200"
                                          }`}
                                        >
                                          Clan Brawl
                                        </span>
                                      </div>
                                    </div>
                                  </Tooltip>
                                )}
                              </div>
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
                                    separator=":"
                                    hasDays={false}
                                    hasHours={true}
                                    hasMinutes={true}
                                    hasSeconds={true}
                                  />
                                </span>
                              </div>
                            </div>
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
                              {brawl.progress > 0 && brawl.progress < 3 && (
                                <>
                                  <div className="flex gap-1.5 items-baseline">
                                    <div className="font-headings font-bold text-3xl italic text-main">
                                      {brawl.progress}/3
                                    </div>
                                    <div className="text-ui-300 text-sm">
                                      matches played to get your total Brawl
                                      points
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                          <div className="card-meta">
                            <div>
                              {brawl.progress === 0 && (
                                <div>
                                  <label className="text-ui-300 uppercase text-sm text-right">
                                    Rewards
                                  </label>
                                  <div className="md:h-8">
                                    <div className="flex gap-3 items-center">
                                      <div className="flex items-center whitespace-nowrap gap-2">
                                        <img
                                          className="h-8"
                                          src="https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-coin-unique.webp"
                                          width="auto"
                                          height="auto"
                                          alt=""
                                        />
                                        <span className="font-headings font-bold text-2xl italic">
                                          10 000
                                        </span>
                                      </div>
                                      <div className="flex items-center whitespace-nowrap gap-2">
                                        <img
                                          className="h-8"
                                          src="https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-ticket-unique.webp"
                                          width="auto"
                                          height="auto"
                                          alt=""
                                        />
                                        <span className="font-headings font-bold text-2xl italic">
                                          5
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {brawl.progress > 0 && brawl.progress < 3 && (
                                <div className="w-60">
                                  <ul className="step step-primary step-sm w-full max-w-xs">
                                    <li>
                                      <a href="#">
                                        <i />
                                        <div />
                                        <span />
                                      </a>
                                    </li>
                                    <li className="is-active">
                                      <a href="#">
                                        <i />
                                        <div />
                                        <span />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i />
                                        <div />
                                        <span />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              )}
                              {brawl.progress >= 3 && (
                                <div className="flex items-stretch gap-4 justify-end leading-tight">
                                  {brawl.solo && (
                                    <div className="w-40 rounded-lg bg-gradient-to-b from-ui-900/50 to-ui-900/10 py-2 px-4 text-center flex flex-col items-center gap-2">
                                      <div className="flex items-center gap-2">
                                        <div className="avatar avatar-circle avatar-tiny">
                                          <div>
                                            <img
                                              src={
                                                prototype.getUserByID(1)?.avatar
                                              }
                                            />
                                          </div>
                                        </div>
                                        <span className="text-md uppercase font-bold text-ui-300">
                                          Solo
                                        </span>
                                      </div>
                                      <hr className="separator" />
                                      <div className="flex-1 flex items-center justify-center gap-4">
                                        <div>
                                          <div className="text-xs uppercase text-ui-300">
                                            points
                                          </div>
                                          <div className="font-headings font-bold text-2xl text-blue-300">
                                            67
                                          </div>
                                        </div>
                                        <div>
                                          <div className="text-xs uppercase text-ui-300">
                                            position
                                          </div>
                                          <div className="font-headings font-bold text-2xl text-blue-300">
                                            #5
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                  {brawl.clan && (
                                    <div className="w-40 rounded-lg bg-gradient-to-b from-ui-900/50 to-ui-900/10 py-2 px-4 text-center flex flex-col items-center gap-2">
                                      <div className="flex items-center gap-2">
                                        <div className="avatar avatar-squircle avatar-tiny">
                                          <div>
                                            <img
                                              src={
                                                prototype.getClanByID(
                                                  prototype.getUserByID(1).id
                                                )?.avatar
                                              }
                                            />
                                          </div>
                                        </div>
                                        <span className="text-md uppercase font-bold text-ui-300">
                                          Clan
                                        </span>
                                      </div>
                                      <hr className="separator" />
                                      <div className="flex-1 flex items-center justify-center gap-4">
                                        <div>
                                          <div className="text-xs uppercase text-ui-300">
                                            points
                                          </div>
                                          <div className="font-headings font-bold text-2xl text-blue-300">
                                            112
                                          </div>
                                        </div>
                                        <div>
                                          <div className="text-xs uppercase text-ui-300">
                                            position
                                          </div>
                                          <div className="font-headings font-bold text-2xl text-blue-300">
                                            #545
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
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
                {/*
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
            */}
              </div>
            </section>
          </>
        </div>
      )}
    </>
  );
}
