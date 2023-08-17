import React, { useEffect, useState } from "react";

import Link from "next/link";
import Reward from "@/components/Reward/Reward";
import moment from "moment";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";

export default function TabTournamentsActive() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const hasAds = query.ads === "true" ? true : false;
  const { game } = router.query;
  const isEmpty = query.empty === "true" ? true : false;

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game]);
  

  return (
    <>
      {selectedGame && (
        <>
          {selectedGame.tournaments?.length && (
            <section className="pb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 hoverhighlight">
                {selectedGame.tournaments?.map((tournament, tournamentIndex) => (
                  <Link
                    key={tournament.id}
                    href={`/prototype/${selectedGame.slug}/tournaments/${
                      tournament.id
                    }${prototype.getURLparams()}`}
                  >
                    <div>
                      <div
                        className="animate-slide-in-right animate-delay"
                        style={{
                          "--delay": "calc(" + tournamentIndex + " * 0.05s)",
                        }}
                      >
                        <div className="card-tournament surface">
                          <div className="card-decoration">
                            <img
                              src={`${
                                tournament.type === "skirmish"
                                  ? "https://res.cloudinary.com/gloot/image/upload/v1653224681/Marketing/2022_prototype/Logo/Skirmish-sameheight.svg"
                                  : ""
                              } ${
                                tournament.type === "showdown"
                                  ? "https://res.cloudinary.com/gloot/image/upload/v1653224681/Marketing/2022_prototype/Logo/Showdown-sameheight.svg"
                                  : ""
                              } ${
                                tournament.type === "open"
                                  ? "https://res.cloudinary.com/gloot/image/upload/v1653224681/Marketing/2022_prototype/Logo/Open-sameheight.svg"
                                  : ""
                              } ${
                                tournament.type === "custom"
                                  ? tournament.customLogo
                                  : ""
                              }`}
                              width="auto"
                              height="auto"
                              alt={tournament.type}
                              className="max-w-[75%] h-auto"
                            />
                            <div className="chip chip-secondary chip-xs">
                              <span>{tournament.details.region}</span>
                            </div>
                          </div>
                          <div className="card-body">
                            <div
                              className={`chip chip-sm chip-sliced ${
                                tournament.status === "ongoing" ? "chip-blue" : ""
                              } ${
                                tournament.status === "finished" ? "chip-gray" : ""
                              }`}
                            >
                              <span>
                                {tournament.status === "ongoing" && <>Ongoing</>}
                                {tournament.status === "registration" && (
                                  <>Reg open</>
                                )}
                                {tournament.status === "finished" && (
                                  <>Finished</>
                                )}
                              </span>
                            </div>
                            <div className="card-title">{tournament.name}</div>
                            <div className="flex gap-2 text-sm text-ui-300 items-center">
                              <span className="icon icon-calendar-date-2" />
                              <span>{moment(
                              tournament.details.date,
                              "YYYY-MM-DDThh:mm:ss.SSS"
                            ).format("MMM Do [•] h A")}</span>
                            </div>
                            <div className="card-meta">
                              <div>
                                <label>Entry</label>
                                <div className="font-bold">
                                  {tournament.details.entryFee === "free" && (
                                    <>FREE</>
                                  )}
                                  {tournament.details.entryFee !== "free" && (
                                    <>
                                    {tournament.details.entryFee.map((reward, rewardIndex) =>
                                      <Reward key={rewardIndex} reward={reward} gap="gap-1" iconClassNames="text-lg" textClassNames="text-ui-200" />
                                    )}
                                    </>
                                  )}
                                </div>
                              </div>
                              <div>
                                <label>Prize Pool</label>
                                <div className="flex items-center gap-2">
                                  {tournament.rewards.map((reward, rewardIndex) =>
                                    <Reward key={rewardIndex} reward={reward} gap="gap-1" iconClassNames="text-lg" textClassNames="text-ui-200" />
                                  )}
                                </div>
                              </div>
                              <div>
                                <ul>
                                  <li>4v4</li>
                                  <li>64 slots</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="card-bg">
                            <span
                              style={{
                                backgroundImage: `url(${tournament.cover})`,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {isEmpty || !selectedGame.tournaments?.length && (
            <section className="surface rounded-lg px-4 py-8 text-center animate-slide-in-bottom animate-delay"
            style={{
              "--delay": "calc(" + 0 + " * 0.05s)",
            }}>
              <div className="max-w-sm mx-auto">
                <span className="icon icon-showdown text-6xl text-ui-500" />
                <div className="mt-2">
                  <p className="text-sm text-ui-400">
                    No upcoming {selectedGame.name} tournaments
                  </p>
                  <p className="text-lg text-ui-300">
                    Join our{" "}
                    <a
                      className="link link-main"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Discord
                    </a>{" "}
                    for more updates or check back later.
                  </p>
                </div>
              </div>
            </section>
          )}


        <section className="px-4 md:px-0 my-8">
          <div className="relative">
            <img
              className="hidden xl:block absolute pointer-events-none z-20 top-2 right-40 rotate-[45deg]"
              src="https://res.cloudinary.com/gloot/image/upload/v1659430626/Marketing/2022_prototype/Decoration-grenade.webp"
              width="150"
              height="auto"
              alt=""
            />
            <img
              className="hidden xl:block absolute pointer-events-none z-20 -bottom-4 right-6 blur-sm rotate-[33deg]"
              src="https://res.cloudinary.com/gloot/image/upload/v1657625027/Marketing/2022_prototype/3D_object_crown.webp"
              width="190"
              height="auto"
              alt=""
            />
            <img
              className="hidden xl:block absolute pointer-events-none z-20 -top-8 left-32 blur-sm -rotate-[180deg]"
              src="https://res.cloudinary.com/gloot/image/upload/v1659430626/Marketing/2022_prototype/Decoration-star.webp"
              width="170"
              height="auto"
              alt=""
            />
            <img
              className="hidden xl:block absolute pointer-events-none z-20 -bottom-4 left-20 -rotate-[74deg]"
              src="https://res.cloudinary.com/gloot/image/upload/v1659430626/Marketing/2022_prototype/Decoration-star.webp"
              width="100"
              height="auto"
              alt=""
            />

            <div
              className="relative z-10 surface rounded-lg p-8 text-center flex flex-col items-center justify-center bg-cover bg-center"
              style={{
                backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1660134304/Marketing/2022_prototype/tournament_stream_bg.webp)`,
              }}
            >
              <h2 className="text-4xl">
                Featured <span className="text-main">stream</span>
              </h2>
              <p className="text-lg mt-4 mb-6 max-w-sm">
                Watch the latest highlights and content from the official <span className="whitespace-nowrap">Stryda</span> stream. Featuring events, tournaments, and more from all our supported games!
              </p>
              <a href="https://www.twitch.tv/glootvalorant" target="_blank" rel="noopener noreferrer" className="button button-primary">
                <span>Watch now</span>
              </a>
            </div>
          </div>
        </section>
        </>
      )}
    </>
  );
}
