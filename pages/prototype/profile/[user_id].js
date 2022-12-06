import React, { useEffect, useState } from "react";

import Accordion from "../../../components/Accordion/Accordion";
import Ad from "../../../components/Ad/Ad";
import Link from "next/link";
import ListItemBrawl from "../../../components/ListItem/ListItemBrawl";
import ListItemTournament from "../../../components/ListItem/ListItemTournament";
import PrototypeStructure from "../../../components/Prototype/PrototypeStructure";
import { usePrototypeData } from "../../../contexts/prototype";
import { useRouter } from "next/router";
import ReadMore from "../../../components/ReadMore/ReadMore";
import GameIcon from "../../../components/GameIcon/GameIcon";
import Slider from "../../../components/Slider/Slider";

export default function Home() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const [selectedUser, setSelectedUser] = useState(null);
  const emptyClan = query.emptyclan === "true" ? true : false;
  const { user_id } = router.query;

  useEffect(() => {
    setSelectedUser(prototype.getUserByID(user_id));
  }, [user_id]);

  return (
    <>
      <PrototypeStructure title="Profile">
        <Ad width="1005" height="124" />

        {selectedUser && (
          <>
            <section className="header surface sm:rounded-lg min-h-4 mb-4">
              <div className="header-content">
                <div className="header-body">
                  <div className="flex gap-4 items-center self-center">
                    <div
                      className={`avatar avatar-xl avatar-circle ${
                        selectedUser.isPremium ? "avatar-gold" : ""
                      }`}
                    >
                      <div>
                        <img src={selectedUser.avatar} alt="avatar" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <div className="flex items-baseline gap-1">
                          <h1
                            className={`text-3xl sm:text-4xl ${
                              selectedUser.isPremium
                                ? "text-gradient bg-gradient-to-b from-premium-300 to-premium-700"
                                : ""
                            }`}
                          >
                            {selectedUser.nickname}
                          </h1>
                          <img
                            src={`https://flagcdn.com/${selectedUser.countryFlag}.svg`}
                            className="aspect-video rounded-sm max-w-[1.5rem]"
                          />
                        </div>
                        <div className="block lg:hidden text-left">
                          {selectedUser.isYou && (
                            <Link href="settings">
                              <a
                                type="button"
                                className="button button-xs button-secondary"
                              >
                                <span className="icon icon-cogwheel" />
                                <span>Profile settings</span>
                              </a>
                            </Link>
                          )}
                        </div>
                      </div>
                      {/*
                        <div className="flex items-center gap-2">
                          <div className="w-6 flex justify-center">
                            <img
                              src={`https://flagcdn.com/${selectedUser.countryFlag}.svg`}
                              className="aspect-video rounded-sm max-w-[1.5rem]"
                            />
                          </div>
                          <span className="text-ui-300">
                            {selectedUser.country}
                          </span>
                        </div>
                            */}

                      {selectedUser.bio && (
                        <p className="text-ui-300 mt-1 text-left">
                          <ReadMore content={selectedUser.bio} max={150} />
                        </p>
                      )}

                      <div className="flex items-center justify-start mt-4 gap-2">
                        <div className="flex gap-1">
                          {selectedUser.games?.map((game, gameIndex) => (
                            <GameIcon key={gameIndex} game={game} />
                          ))}
                        </div>
                        <hr className="m-0 separator separator-vertical h-7" />
                        <div className="flex gap-1">
                          <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link p-1 text-0"
                          >
                            <span className="icon icon-20 text-ui-300 icon-twitch" />
                          </a>
                          <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link p-1 text-0"
                          >
                            <span className="icon icon-20 text-ui-300 icon-logo-twitter" />
                          </a>
                          <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link p-1 text-0"
                          >
                            <span className="icon icon-20 text-ui-300 icon-discord" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block absolute z-20 top-3 right-3">
                {selectedUser.isYou && (
                  <Link href="settings">
                    <a className="button button-sm button-tertiary">
                      <span className="icon icon-cogwheel" />
                      <span>Profile settings</span>
                    </a>
                  </Link>
                )}
              </div>
              <div className="header-meta lg:items-end p-3">
                {!emptyClan ? (
                  <>
                    {selectedUser.clan ? (
                      <Link
                        href={`/prototype/clans/${
                          selectedUser.clan
                        }${prototype.getURLparams()}`}
                      >
                        <div className="item bg-gradient-radial-to-b from-ui-500/75 to-ui-600/50 backdrop-blur rounded-lg shadow-lg interactive w-auto">
                          <div className="item-image">
                            <div className="avatar avatar-sm avatar-squircle interactive">
                              <div>
                                <img
                                  src={
                                    prototype.getClanByID(selectedUser.clan)
                                      .avatar
                                  }
                                  alt="avatar"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="item-body pr-2">
                            <div className="text-sm text-ui-300 leading-none">
                              Clan member of
                            </div>
                            <div className="item-title text-xl font-headings font-bold italic text-ui-100 interactive">
                              &#91;
                              {prototype.getClanByID(selectedUser.clan).tag}
                              &#93;{" "}
                              {
                                prototype.getClanByID(selectedUser.clan)
                                  .nickname
                              }
                            </div>
                            {/*
                            <div className="text-sm text-ui-300">
                              {
                                prototype.getClanByID(selectedUser.clan).members
                                  .length
                              }{" "}
                              members
                            </div>
                            */}
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <div className="bg-gradient-radial-to-b from-ui-500/75 to-ui-600/50 backdrop-blur rounded-lg shadow-lg w-auto p-3 text-right space-y-3">
                        <div className="text-center">
                          {selectedUser.nickname} is not part of a clan.
                        </div>
                        <Link href="#">
                          <a
                            type="button"
                            className="button button-sm button-primary w-full"
                          >
                            <span>Recruit to your clan</span>
                          </a>
                        </Link>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {!selectedUser.isYou ? (
                      <div className="bg-gradient-radial-to-b from-ui-500/75 to-ui-600/50 backdrop-blur rounded-lg shadow-lg w-auto p-3 text-right space-y-3">
                        <div className="text-center">
                          {selectedUser.nickname} is not part of a clan.
                        </div>
                      </div>
                    ) : (
                      <div className="bg-gradient-radial-to-b from-ui-500/75 to-ui-600/50 backdrop-blur rounded-lg shadow-lg w-auto p-3 text-right space-y-3">
                        <div className="text-center">
                          You are not part of a clan.
                        </div>
                        <Link href="/prototype/clans/search">
                          <a
                            type="button"
                            className="button button-sm button-primary w-full"
                          >
                            <span>Join a clan</span>
                          </a>
                        </Link>
                      </div>
                    )}
                  </>
                )}
              </div>

              <div className="header-bg">
                <img src="https://res.cloudinary.com/gloot/image/upload/v1659442345/Marketing/2022_prototype/Clan_bg.webp" />
              </div>
            </section>

            <section
              className="flex flex-col lg:flex-row gap-4 lg:items-stretch animate-slide-in-bottom animate-delay mb-4"
              style={{ "--delay": "calc(2 * 0.05s)" }}
            >
              
              <div className="flex-1 flex flex-col gap-4 overflow-hidden">
                <div className="surface sm:rounded-lg relative overflow-hidden">
                  <div className="px-3 py-2 border-b border-ui-700 relative z-10 flex-none flex items-center justify-between">
                    <div className="font-bold">Your Brawl history</div>
                    <Link
                      href="#"
                    >
                      <a className="link link-hover text-ui-300 text-sm">
                        View all achievements
                      </a>
                    </Link>
                  </div>
                  <Slider bgColor="from-ui-800 via-ui-800 to-ui-800/0">
                    <div className="flex gap-4 px-4">
                      <div className="w-20 h-20 rounded-full bg-ui-600" />
                      <div className="w-20 h-20 rounded-full bg-ui-600" />
                      <div className="w-20 h-20 rounded-full bg-ui-600" />
                      <div className="w-20 h-20 rounded-full bg-ui-600" />
                      <div className="w-20 h-20 rounded-full bg-ui-600" />
                      <div className="w-20 h-20 rounded-full bg-ui-600" />
                      <div className="w-20 h-20 rounded-full bg-ui-600" />
                      <div className="w-20 h-20 rounded-full bg-ui-600" />
                      <div className="w-20 h-20 rounded-full bg-ui-600" />
                      <div className="w-20 h-20 rounded-full bg-ui-600" />
                      <div className="w-20 h-20 rounded-full bg-ui-600" />
                    </div>
                  </Slider>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <div className="surface sm:rounded-lg flex flex-col xl:flex-row items-center">
                    <img
                      src="https://res.cloudinary.com/gloot/image/upload/v1667460211/Marketing/2022_prototype/Logo/samesize-brawl-sm.svg"
                      width="auto"
                      height="auto"
                      alt=""
                      className="drop-shadow-xl mx-8 my-4 h-24 flex-none"
                    />
                    <div className="flex-1 flex flex-wrap gap-x-2 gap-y-1 items-center justify-start">
                      <div className="rounded bg-gradient-to-b from-ui-900/0 to-ui-900/0 p-2 leading-none flex gap-2 items-baseline">
                        <span className="text-sm text-ui-300">
                          Number of Brawls played:
                        </span>
                        <span className="font-bold">22</span>
                      </div>
                      <div className="rounded bg-gradient-to-b from-ui-900/0 to-ui-900/0 p-2 leading-none flex gap-2 items-baseline">
                        <span className="text-sm text-ui-300">
                          Times in top 50:
                        </span>
                        <span className="font-bold">2</span>
                      </div>
                      <div className="rounded bg-gradient-to-b from-ui-900/0 to-ui-900/0 p-2 leading-none flex gap-2 items-baseline">
                        <span className="text-sm text-ui-300">
                          Best placement:
                        </span>
                        <span className="font-bold">1</span>
                      </div>
                      <div className="rounded bg-gradient-to-b from-ui-900/0 to-ui-900/0 p-2 leading-none flex gap-2 items-baseline">
                        <span className="text-sm text-ui-300">
                          Most matches in a Brawl:
                        </span>
                        <span className="font-bold">16</span>
                      </div>
                      <div className="rounded bg-gradient-to-b from-ui-900/0 to-ui-900/0 p-2 leading-none flex gap-2 items-baseline">
                        <span className="text-sm text-ui-300">
                          Avg. matches / Brawl:
                        </span>
                        <span className="font-bold">9.8</span>
                      </div>
                    </div>
                  </div>
                  <div className="surface sm:rounded-lg flex flex-col xl:flex-row items-center">
                    <img
                      src="https://res.cloudinary.com/gloot/image/upload/v1667460211/Marketing/2022_prototype/Logo/samesize-missions-sm.svg"
                      width="auto"
                      height="50"
                      alt=""
                      className="drop-shadow-xl mx-8 my-4 h-24 flex-none"
                    />
                    <div className="flex-1 flex flex-wrap gap-x-2 gap-y-1 items-center justify-start">
                      <div className="rounded bg-gradient-to-b from-ui-900/0 to-ui-900/0 p-2 leading-none flex gap-2 items-baseline">
                        <span className="text-sm text-ui-300">
                          No. of missions completed:
                        </span>
                        <span className="font-bold">143</span>
                      </div>
                      <div className="rounded bg-gradient-to-b from-ui-900/0 to-ui-900/0 p-2 leading-none flex gap-2 items-baseline">
                        <span className="text-sm text-ui-300">
                          Missions / day avg.:
                        </span>
                        <span className="font-bold">2.4</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 xl:w-3/7 space-y-4 flex flex-col">
                {/*
                {emptyClan && (
                  <div className="surface sm:rounded-lg">
                    {selectedUser.isYou && (
                      <div className="p-4 flex justify-between gap-3 items-center">
                        <span>You are not in a clan.</span>
                        <Link
                          href={`/prototype/clans/search${prototype.getURLparams()}`}
                        >
                          <button
                            type="button"
                            className="button button-sm button-primary"
                          >
                            <span>Find a clan</span>
                          </button>
                        </Link>
                      </div>
                    )}
                    {!selectedUser.isYou && (
                      <div className="p-4 flex gap-3 items-center">
                        <span className="icon icon-puzzled text-2xl text-ui-400" />
                        <span>
                          {selectedUser.nickname} is not part of a clan.
                        </span>
                      </div>
                    )}
                  </div>
                )}
                {!emptyClan && (
                  <div className="surface sm:rounded-lg">
                    {selectedUser.clan && (
                      <div className="p-2">
                        <div className="text-sm text-ui-300 font-bold mb-2 uppercase">
                          Proud member of
                        </div>
                        <Link
                          href={`/prototype/clans/${
                            selectedUser.clan
                          }${prototype.getURLparams()}`}
                        >
                          <div className="rounded surface surface-ui-700 p-2 flex items-center gap-2 interactive">
                            <div className="avatar avatar-sm avatar-squircle">
                              <div>
                                <img
                                  src={
                                    prototype.getClanByID(selectedUser.clan)
                                      .avatar
                                  }
                                  alt="avatar"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="text-xl font-headings font-bold italic text-ui-100">
                                &#91;
                                {prototype.getClanByID(selectedUser.clan).tag}
                                &#93;{" "}
                                {
                                  prototype.getClanByID(selectedUser.clan)
                                    .nickname
                                }
                              </div>
                              <div className="text-sm text-ui-300">
                                {
                                  prototype.getClanByID(selectedUser.clan)
                                    .members.length
                                }{" "}
                                members
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    )}
                    {!selectedUser.clan && (
                      <div className="p-4 flex gap-3 items-center">
                        <span className="icon icon-puzzled text-2xl text-ui-400" />
                        <span>
                          {selectedUser.nickname} is not part of a clan.
                        </span>
                      </div>
                    )}
                  </div>
                )}
                    */}

                <div className="flex-1 flex flex-col surface sm:rounded-lg">
                  <div className="p-2 border-b border-ui-700 flex justify-between items-start">
                    <div>
                      <h2 className="text-xl italic">Weekly Brawls</h2>
                      <span className="text-sm text-ui-300">
                        Showing your latest Solo Brawls
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 relative overflow-hidden">
                    <div className="lg:absolute inset-0 overflow-x-auto lg:overflow-x-hidden lg:overflow-y-auto scrollbar-desktop">
                      <ul className="space-x-2 lg:space-x-0 lg:space-y-2 p-2 flex lg:block">
                        {prototype.games.map((game, gameIndex) => (
                          <>
                            {game.brawls?.map((brawl, brawlIndex) => (
                              <ListItemBrawl
                                key={brawlIndex}
                                game={game}
                                brawl={brawl}
                              />
                            ))}
                          </>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {!selectedUser.stats.gamestats && (
              <section
                className="surface sm:rounded-lg px-4 py-8 text-center animate-slide-in-bottom animate-delay mb-4"
                style={{ "--delay": "calc(3 * 0.05s)" }}
              >
                <div className="max-w-sm mx-auto">
                  <span className="icon icon-mission-roundwon text-8xl text-ui-500" />
                  <div className="mt-2 mb-6">
                    {selectedUser.isYou && (
                      <>
                        <h2 className="text-3xl mb-4">
                          No stats to brag about
                        </h2>
                        <p className=" text-ui-300">
                          Run the{" "}
                          <a href="#" className="link link-main">
                            G-Loot app
                          </a>{" "}
                          while you play to track your stat
                        </p>
                      </>
                    )}
                    {!selectedUser.isYou && (
                      <>
                        <h2 className="text-3xl mb-4">
                          No stats to brag about
                        </h2>
                        <p className=" text-ui-300">
                          {selectedUser.nickname} has no stats to brag about.
                          Poor him.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </section>
            )}
            {selectedUser.stats.gamestats && (
              <>
                {selectedUser.stats.gamestats?.map((stat, statIndex) => (
                  <section
                    key={statIndex}
                    className="surface sm:rounded-lg animate-slide-in-bottom animate-delay mb-4"
                    style={{
                      "--delay": "calc(" + statIndex + 4 + " * 0.05s)",
                    }}
                  >
                    <div className="item">
                      <div className="item-image">
                        <GameIcon game={stat.game} />
                      </div>
                      <div className="item-body">
                        <div className="item-title font-headings font-bold text-xl text-ui-100 uppercase italic">
                          {prototype.getGameByID(stat.game).name}
                        </div>
                      </div>
                      {prototype.getGameByID(stat.game).slug === "valorant" && (
                        <div className="item-action">
                          <Link href="/prototype/valorant/stats">
                            <a className="link link-hover text-ui-300 text-sm">
                              View all Valorant stats
                            </a>
                          </Link>
                        </div>
                      )}
                    </div>
                    <div className="leading-tight grid grid-cols-2 lg:flex flex-wrap justify-around p-4">
                      <div className="pl-4 border-l border-ui-600">
                        <div className="text-xs lg:text-sm text-ui-200 uppercase font-bold">
                          Win rate
                        </div>
                        <div className="font-headings text-blue-300 font-bold text-xl lg:text-3xl">
                          {stat.winrate}
                        </div>
                      </div>
                      <div className="pl-4 border-l border-ui-600">
                        <div className="text-xs lg:text-sm text-ui-200 uppercase font-bold">
                          K/D ratio
                        </div>
                        <div className="font-headings text-blue-300 font-bold text-xl lg:text-3xl">
                          {stat.kdratio}
                        </div>
                      </div>
                      <div className="pl-4 border-l border-ui-600">
                        <div className="text-xs lg:text-sm text-ui-200 uppercase font-bold">
                          Headshots kill avg
                        </div>
                        <div className="font-headings text-blue-300 font-bold text-xl lg:text-3xl">
                          {stat.headshotkillsavg}
                        </div>
                      </div>
                      <div className="pl-4 border-l border-ui-600">
                        <div className="text-xs lg:text-sm text-ui-200 uppercase font-bold">
                          Assist avg
                        </div>
                        <div className="font-headings text-blue-300 font-bold text-xl lg:text-3xl">
                          {stat.assistavg}
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-ui-700">
                      <div className="accordion rounded-none">
                        <Accordion
                          header={
                            <>
                              <div className="item">
                                <div className="item-body">
                                  <div className="p-2 item-title font-headings font-bold text-lg italic">
                                    All stats (total)
                                  </div>
                                </div>
                                <div className="item-actions">
                                  <div>
                                    <span className="icon icon-24 icon-arrow-sm-down" />
                                  </div>
                                </div>
                              </div>
                            </>
                          }
                        >
                          <div className="grid grid-cols-3 lg:grid-cols-4 items-center gap-2 text-center p-2">
                            <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                              <div className="leading-none text-xs text-ui-300 uppercase">
                                Assists
                              </div>
                              <div className="font-bold">151</div>
                            </div>
                            <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                              <div className="leading-none text-xs text-ui-300 uppercase">
                                Kills
                              </div>
                              <div className="font-bold">405</div>
                            </div>
                            <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                              <div className="leading-none text-xs text-ui-300 uppercase">
                                Deaths
                              </div>
                              <div className="font-bold">570</div>
                            </div>
                            <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                              <div className="leading-none text-xs text-ui-300 uppercase">
                                Headshot kills
                              </div>
                              <div className="font-bold">144</div>
                            </div>
                            <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                              <div className="leading-none text-xs text-ui-300 uppercase">
                                Wins
                              </div>
                              <div className="font-bold">35</div>
                            </div>
                            <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                              <div className="leading-none text-xs text-ui-300 uppercase">
                                Losses
                              </div>
                              <div className="font-bold">24</div>
                            </div>
                            <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                              <div className="leading-none text-xs text-ui-300 uppercase">
                                Draws
                              </div>
                              <div className="font-bold">1</div>
                            </div>
                          </div>
                        </Accordion>
                      </div>
                    </div>
                  </section>
                ))}
              </>
            )}
          </>
        )}
      </PrototypeStructure>
    </>
  );
}
