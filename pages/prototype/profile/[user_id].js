import React, { useEffect, useState } from "react";

import Accordion from "../../../components/Accordion/Accordion";
import Ad from "../../../components/Ad/Ad";
import Link from "next/link";
import PrototypeStructure from "../../../components/Prototype/PrototypeStructure";
import { usePrototypeData } from "../../../contexts/prototype";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const [selectedUser, setSelectedUser] = useState(null);
  const hasAds = query.ads === "true" ? true : false;
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
            <section className="mb-8">
              <div className="relative overflow-hidden surface sm:rounded-lg p-4 lg:min-h-[250px] lg:flex items-center">
                <div className="relative z-10 flex-1 flex flex-col md:flex-row gap-4 md:items-stretch md:justify-between">
                  <div className="flex gap-4 items-center self-center">
                    <figure className="avatar avatar-xl avatar-circle">
                      <div>
                        <img src={selectedUser.avatar} alt="avatar" />
                      </div>
                    </figure>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <h1 className="text-3xl sm:text-4xl">
                          {selectedUser.nickname}
                        </h1>
                        <div className="block lg:hidden">
                          {selectedUser.isYou && (
                            <Link href="settings">
                              <a
                                type="button"
                                className="button button-sm button-ghost"
                              >
                                <span className="icon icon-cogwheel" />
                                <span>Profile settings</span>
                              </a>
                            </Link>
                          )}
                          {!selectedUser.isYou && (
                            <Link href="#">
                              <a
                                type="button"
                                className="button button-sm button-primary"
                              >
                                <span>Invite to your clan</span>
                              </a>
                            </Link>
                          )}
                        </div>
                      </div>
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
                      <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="transition-colors duration-75 text-ui-300 hover:text-main flex items-center gap-2"
                      >
                        <div className="w-6 flex justify-center">
                          <span className="icon icon-20 icon-twitch" />
                        </div>
                        <span>{selectedUser.socials.twitch}</span>
                      </a>
                    </div>
                  </div>
                  <div className="flex-1 hidden xl:flex justify-center gap-4">
                    <div className="rounded-full leading-tight bg-gradient-to-b from-ui-900/75 to-ui-900/10 backdrop-blur p-1 flex items-center justify-center w-36 h-36 text-center">
                      <div>
                        <div className="text-4xl font-headings mb-0.5">
                          {selectedUser.stats.xp}
                        </div>
                        <div className="text-xs text-ui-300 uppercase">
                          Total
                          <br />
                          XP
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full leading-tight bg-gradient-to-b from-ui-900/75 to-ui-900/10 backdrop-blur p-1 flex items-center justify-center w-36 h-36 text-center">
                      <div>
                        <div className="text-4xl font-headings mb-0.5">
                          {selectedUser.stats.playedBrawls}
                        </div>
                        <div className="text-xs text-ui-300 uppercase">
                          Played
                          <br />
                          brawls
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full leading-tight bg-gradient-to-b from-ui-900/75 to-ui-900/10 backdrop-blur p-1 flex items-center justify-center w-36 h-36 text-center">
                      <div>
                        <div className="text-4xl font-headings mb-0.5">
                          {selectedUser.stats.playedTournaments}
                        </div>
                        <div className="text-xs text-ui-300 uppercase">
                          Played
                          <br />
                          tournaments
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute z-0 right-0 inset-y-0 w-full animate-slide-in-right animate-delay"
                  style={{ "--delay": "calc( 1 * 0.05s)" }}
                >
                  <div className="absolute z-10 inset-0 bg-gradient-to-r from-ui-800 via-ui-800/50 to-ui-800/0"></div>
                  <img
                    className="absolute z-0 object-right object-cover xl:object-cover inset-0 w-full h-full"
                    src="https://res.cloudinary.com/gloot/image/upload/v1659442345/Marketing/2022_prototype/Clan_bg.webp"
                  />
                </div>
                <div className="hidden lg:block absolute z-20 top-4 right-4">
                  {selectedUser.isYou && (
                    <Link href="settings">
                      <a
                        type="button"
                        className="button button-sm button-ghost"
                      >
                        <span className="icon icon-cogwheel" />
                        <span>Profile settings</span>
                      </a>
                    </Link>
                  )}
                  {!selectedUser.isYou && (
                    <Link href="#">
                      <a
                        type="button"
                        className="button button-sm button-primary"
                      >
                        <span>Invite to your clan</span>
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            </section>
            {/*
            <section className="flex items-center justify-between mb-4 py-8 px-4 sm:px-0">
              <div className="flex gap-4 items-center">
                <figure className="avatar avatar-xl avatar-circle">
                  <div>
                    <img src={selectedUser.avatar} />
                  </div>
                </figure>
                <div className="">
                  <div className="flex flex-col sm:flex-row gap-3 mb-3">
                    <h2 className="h3 leading-none">{selectedUser.nickname}</h2>
                    {selectedUser.isYou && (
                      <Link href="settings">
                        <a
                          type="button"
                          className="button button-sm button-secondary"
                        >
                          <span className="icon icon-cogwheel" />
                          <span>Profile settings</span>
                        </a>
                      </Link>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 flex justify-center">
                      <img
                        src={`https://flagcdn.com/${selectedUser.countryFlag}.svg`}
                        className="aspect-video rounded-sm max-w-[1.5rem]"
                      />
                    </div>
                    <span className="text-ui-300">{selectedUser.country}</span>
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors duration-75 text-ui-300 hover:text-main flex items-center gap-2"
                  >
                    <div className="w-6 flex justify-center">
                      <span className="icon icon-20 icon-twitch" />
                    </div>
                    <span>{selectedUser.socials.twitch}</span>
                  </a>
                </div>
              </div>

              <div className="w-1/3 hidden xl:flex justify-center gap-4">
                <div className="rounded-full surface p-1">
                  <div className="progressbar-radial">
                    <div>
                      <div>
                        <div className="text-4xl font-headings font-bold mb-1">
                          {selectedUser.stats.playedBrawls}
                        </div>
                        <div className="text-xs text-ui-300 uppercase">
                          Played
                          <br />
                          brawls
                        </div>
                      </div>
                    </div>
                    <svg viewBox="0 0 40 40" style={{ "--percent": "33" }}>
                      <circle cx="20" cy="20" r="16" />
                    </svg>
                  </div>
                </div>
                <div className="rounded-full surface p-1">
                  <div className="progressbar-radial">
                    <div>
                      <div>
                        <div className="text-4xl font-headings font-bold mb-1">
                          {selectedUser.stats.playedTournaments}
                        </div>
                        <div className="text-xs text-ui-300 uppercase">
                          Played
                          <br />
                          tournaments
                        </div>
                      </div>
                    </div>
                    <svg viewBox="0 0 40 40" style={{ "--percent": "15" }}>
                      <circle cx="20" cy="20" r="16" />
                    </svg>
                  </div>
                </div>
              </div>
            </section>
                    */}

            <section
              className="flex flex-col lg:flex-row gap-8 lg:items-start animate-slide-in-bottom animate-delay"
              style={{ "--delay": "calc( 1 * 0.05s)" }}
            >
              <div className="flex-1 space-y-4">
                {!selectedUser.stats.gamestats && (
                  <div className="surface rounded-lg px-4 py-8 text-center">
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
                              {selectedUser.nickname} has no stats to brag
                              about. Poor him.
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                {selectedUser.stats.gamestats && (
                  <>
                    {selectedUser.stats.gamestats?.map((stat, statIndex) => (
                      <div
                        key={statIndex}
                        className="surface sm:rounded-lg w-full"
                      >
                        <div className="item">
                          <div className="item-image">
                            <div
                              className={`rounded h-12 w-12 flex items-center justify-center bg-gradient-to-b from-ui-900/50 to-ui-900/0 aspect-square text-game-valorant`}
                            >
                              <span
                                className={`icon text-xl ${
                                  prototype.getGameByID(stat.game).slug ===
                                  "apexlegends"
                                    ? "icon-game-apexlegends-symbol text-game-apexlegends"
                                    : ""
                                } ${
                                  prototype.getGameByID(stat.game).slug ===
                                  "csgo"
                                    ? "icon-game-csgo-symbol text-game-csgo"
                                    : ""
                                }  ${
                                  prototype.getGameByID(stat.game).slug ===
                                  "dota2"
                                    ? "icon-game-dota2-symbol text-game-dota2"
                                    : ""
                                }  ${
                                  prototype.getGameByID(stat.game).slug ===
                                  "leagueoflegends"
                                    ? "icon-game-leagueoflegends-symbol text-game-leagueoflegends"
                                    : ""
                                }  ${
                                  prototype.getGameByID(stat.game).slug ===
                                  "rocketleague"
                                    ? "icon-game-rocketleague-symbol text-game-rocketleague"
                                    : ""
                                } ${
                                  prototype.getGameByID(stat.game).slug ===
                                  "pubg"
                                    ? "icon-game-pubg-symbol text-game-pubg"
                                    : ""
                                }  ${
                                  prototype.getGameByID(stat.game).slug ===
                                  "valorant"
                                    ? "icon-game-valorant-symbol text-game-valorant"
                                    : ""
                                }`}
                              />
                            </div>
                          </div>
                          <div className="item-body">
                            <div className="item-title font-headings font-bold text-xl text-ui-100 uppercase italic">
                              {prototype.getGameByID(stat.game).name}
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="grid grid-cols-2 lg:grid-cols-4">
                            <div className="text-center border-r border-ui-700/50">
                              <div
                                className="animate-slide-in-bottom animate-delay"
                                style={{ "--delay": "calc( 2 * 0.05s)" }}
                              >
                                <div className="icon-holder icon-holder-sm mx-auto">
                                  <span className="icon icon-mission-gamematchbattlewon" />
                                </div>
                                <div>
                                  <div className="leading-none text-xs text-ui-300 uppercase">
                                    WIN RATE
                                  </div>
                                  <div className="text-3xl font-headings">
                                    {stat.winrate}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-center border-r border-ui-700/50">
                              <div
                                className="animate-slide-in-bottom animate-delay"
                                style={{ "--delay": "calc( 3 * 0.05s)" }}
                              >
                                <div className="icon-holder icon-holder-sm mx-auto">
                                  <span className="icon icon-mission-kill" />
                                </div>
                                <div>
                                  <div className="leading-none text-xs text-ui-300 uppercase">
                                    K/D ratio
                                  </div>
                                  <div className="text-3xl font-headings">
                                    {stat.kdratio}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-center border-r border-ui-700/50">
                              <div
                                className="animate-slide-in-bottom animate-delay"
                                style={{ "--delay": "calc( 4 * 0.05s)" }}
                              >
                                <div className="icon-holder icon-holder-sm mx-auto">
                                  <span className="icon icon-mission-headshot" />
                                </div>
                                <div>
                                  <div className="leading-none text-xs text-ui-300 uppercase">
                                    Headshots kill avg
                                  </div>
                                  <div className="text-3xl font-headings">
                                    {stat.headshotkillsavg}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-center">
                              <div
                                className="animate-slide-in-bottom animate-delay"
                                style={{ "--delay": "calc( 5 * 0.05s)" }}
                              >
                                <div className="icon-holder icon-holder-sm mx-auto">
                                  <span className="icon icon-mission-assist" />
                                </div>
                                <div>
                                  <div className="leading-none text-xs text-ui-300 uppercase">
                                    Assist avg
                                  </div>
                                  <div className="text-3xl font-headings">
                                    {stat.assistavg}
                                  </div>
                                </div>
                              </div>
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
                                  <div className="text-3xl font-headings">
                                    151
                                  </div>
                                </div>
                                <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                                  <div className="leading-none text-xs text-ui-300 uppercase">
                                    Kills
                                  </div>
                                  <div className="text-3xl font-headings">
                                    405
                                  </div>
                                </div>
                                <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                                  <div className="leading-none text-xs text-ui-300 uppercase">
                                    Deaths
                                  </div>
                                  <div className="text-3xl font-headings">
                                    570
                                  </div>
                                </div>
                                <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                                  <div className="leading-none text-xs text-ui-300 uppercase">
                                    Headshot kills
                                  </div>
                                  <div className="text-3xl font-headings">
                                    144
                                  </div>
                                </div>
                                <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                                  <div className="leading-none text-xs text-ui-300 uppercase">
                                    Wins
                                  </div>
                                  <div className="text-3xl font-headings">
                                    35
                                  </div>
                                </div>
                                <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                                  <div className="leading-none text-xs text-ui-300 uppercase">
                                    Losses
                                  </div>
                                  <div className="text-3xl font-headings">
                                    24
                                  </div>
                                </div>
                                <div className="rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                                  <div className="leading-none text-xs text-ui-300 uppercase">
                                    Draws
                                  </div>
                                  <div className="text-3xl font-headings">
                                    1
                                  </div>
                                </div>
                              </div>
                            </Accordion>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
              <div className="lg:w-1/3 xl:w-1/4 space-y-4">
                <div className="surface sm:rounded-lg">
                  {selectedUser.clan && (
                    <div className="p-2">
                      <div className="text-sm text-ui-300 font-bold mb-2 uppercase">
                        Proud member of
                      </div>
                      <Link
                        href={`/prototype/clans/${selectedUser.clan}${
                          hasAds ? "?ads=true" : ""
                        }`}
                      >
                        <div className="rounded surface surface-ui-700 p-2 flex items-center gap-2 cursor-pointer hover:opacity-50 transition-opacity duratino-300 ease-in-out">
                          <figure className="avatar avatar-sm avatar-squircle">
                            <div>
                              <img
                                src={
                                  prototype.getClanByID(selectedUser.clan)
                                    .avatar
                                }
                                alt="avatar"
                              />
                            </div>
                          </figure>
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
                                prototype.getClanByID(selectedUser.clan).members
                                  .length
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

                <div className="surface sm:rounded-lg">
                  <div className="p-2 border-b border-ui-700 flex justify-between items-start">
                    <div>
                      <h2 className="text-xl italic">Weekly Brawls</h2>
                      <span className="text-sm text-ui-300">
                        Showing your latest Solo Brawls
                      </span>
                    </div>
                    <button
                      type="button"
                      className="tooltip tooltip-left text-ui-300 text-0"
                      data-tooltip="Bla bla bla"
                    >
                      <span className="icon icon-16 icon-c-info" />
                    </button>
                  </div>
                  <div className="max-h-60 overflow-x-auto lg:overflow-x-hidden lg:overflow-y-auto scrollbar-desktop">
                    <ul className="space-x-2 lg:space-x-0 lg:space-y-2 p-2 flex lg:block">
                      {prototype.games.map((game, gameIndex) => (
                        <>
                          {game.brawls?.map((brawl, brawlIndex) => (
                            <li key={brawl.id}>
                              <Link
                                href={`${
                                  brawl.progress !== 3
                                    ? `/prototype/${game.slug}/brawls/${brawl.id}?tab=solo-leaderboard`
                                    : "#"
                                }`}
                              >
                                <div
                                  className={`rounded overflow-hidden surface surface-ui-700 p-2 relative ${
                                    brawl.progress !== 3
                                      ? "cursor-pointer hover:opacity-50 transition-opacity duratino-300 ease-in-out"
                                      : ""
                                  }`}
                                >
                                  {brawl.progress === 3 && (
                                    <>
                                      <div className="absolute inset-0 z-40 bg-ui-700/95 backdrop-blur-sm flex items-center justify-center">
                                        <button
                                          type="button"
                                          className="button button-claim"
                                        >
                                          <span>Claim reward</span>
                                        </button>
                                      </div>
                                    </>
                                  )}

                                  <div className="relative z-10 leading-tight w-72 lg:w-auto h-24 flex flex-col items-start justify-between">
                                    <div
                                      className={`chip chip-sliced chip-sm ${
                                        brawl.status === "ongoing" ? "" : ""
                                      } ${
                                        brawl.status === "finished"
                                          ? "chip-blue"
                                          : ""
                                      }`}
                                    >
                                      <span>{brawl.status}</span>
                                    </div>
                                    <div className="font-bold mt-2">
                                      {brawl.name}
                                    </div>
                                    <div className="">
                                      {brawl.progress === 0 && (
                                        <>
                                          <span className="text-sm text-ui-300">
                                            Position:{" "}
                                            <span className="font-bold">
                                              53
                                            </span>
                                          </span>
                                        </>
                                      )}

                                      {brawl.progress === 3 && (
                                        <>
                                          <span className="text-sm text-ui-300">
                                            Final osition:{" "}
                                            <span className="font-bold">
                                              53
                                            </span>
                                          </span>
                                        </>
                                      )}

                                      {brawl.progress > 0 &&
                                        brawl.progress < 3 && (
                                          <>
                                            <ul className="step step-quinary w-full max-w-xs gap-2 mt-3">
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
                                  <div className="absolute z-20 top-2 right-2 p-1 rounded bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
                                    <span
                                      className={`icon text-xl ${
                                        prototype.getGameByID(game.id).slug ===
                                        "apexlegends"
                                          ? "icon-game-apexlegends-symbol text-game-apexlegends"
                                          : ""
                                      } ${
                                        prototype.getGameByID(game.id).slug ===
                                        "csgo"
                                          ? "icon-game-csgo-symbol text-game-csgo"
                                          : ""
                                      }  ${
                                        prototype.getGameByID(game.id).slug ===
                                        "dota2"
                                          ? "icon-game-dota2-symbol text-game-dota2"
                                          : ""
                                      }  ${
                                        prototype.getGameByID(game.id).slug ===
                                        "leagueoflegends"
                                          ? "icon-game-leagueoflegends-symbol text-game-leagueoflegends"
                                          : ""
                                      }  ${
                                        prototype.getGameByID(game.id).slug ===
                                        "rocketleague"
                                          ? "icon-game-rocketleague-symbol text-game-rocketleague"
                                          : ""
                                      } ${
                                        prototype.getGameByID(game.id).slug ===
                                        "pubg"
                                          ? "icon-game-pubg-symbol text-game-pubg"
                                          : ""
                                      }  ${
                                        prototype.getGameByID(game.id).slug ===
                                        "valorant"
                                          ? "icon-game-valorant-symbol text-game-valorant"
                                          : ""
                                      }`}
                                    />
                                  </div>
                                  <div className="absolute z-0 right-0 inset-y-0 w-1/2">
                                    <div className="absolute z-10 inset-0 bg-gradient-to-r from-ui-700 to-ui-700/50"></div>
                                    <img
                                      className="absolute z-0 object-right object-cover xl:object-cover inset-0 w-full h-full"
                                      src={brawl.cover}
                                    />
                                  </div>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="surface sm:rounded-lg">
                  <div className="p-2 border-b border-ui-700 flex justify-between items-start">
                    <div>
                      <h2 className="text-xl italic">Tournaments</h2>
                    </div>
                  </div>
                  <div className="max-h-60 overflow-x-auto lg:overflow-x-hidden lg:overflow-y-auto scrollbar-desktop">
                    <ul className="space-x-2 lg:space-x-0 lg:space-y-2 p-2 flex lg:block">
                      {prototype.games.map((game, gameIndex) => (
                        <>
                          {game.tournaments?.map(
                            (tournament, tournamentIndex) => (
                              <li key={tournament.id}>
                                <Link
                                  href={`${
                                    tournament.progress !== 3
                                      ? `/prototype/${game.slug}/tournaments/${tournament.id}`
                                      : ""
                                  }`}
                                >
                                  <div
                                    className={`rounded overflow-hidden surface surface-ui-700 p-2 relative`}
                                  >
                                    <div className="relative z-10 leading-tight w-72 lg:w-auto h-24 flex flex-col items-start justify-between">
                                      <div
                                        className={`chip chip-sliced chip-sm ${
                                          tournament.status === "ongoing"
                                            ? ""
                                            : ""
                                        } ${
                                          tournament.status === "finished"
                                            ? "chip-blue"
                                            : ""
                                        } ${
                                          tournament.status === "scheduled"
                                            ? "chip-gray"
                                            : ""
                                        }`}
                                      >
                                        <span>{tournament.status}</span>
                                      </div>
                                      <div className="font-bold mt-2">
                                        {tournament.name}
                                      </div>
                                      {tournament.status === "scheduled" && (
                                        <div className="flex gap-3 items-center">
                                          <span className="text-sm text-ui-300">
                                            Prize pool:
                                          </span>
                                          {tournament.rewards.map(
                                            (reward, rewardIndex) => (
                                              <>
                                                <div className="flex items-center gap-1">
                                                  <img
                                                    className="h-4"
                                                    src={`https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-${reward.type}-unique.webp`}
                                                    width="auto"
                                                    height="auto"
                                                    alt=""
                                                  />
                                                  <span className="font-headings font-bold text-lg italic">
                                                    {reward.value}
                                                  </span>
                                                </div>
                                              </>
                                            )
                                          )}
                                        </div>
                                      )}
                                      {tournament.status !== "scheduled" && (
                                        <div className="flex gap-3 items-center">
                                          <span className="text-sm text-ui-300">
                                            Placement:{" "}
                                            <b>{tournament.stats.placement}</b>
                                          </span>
                                          <span className="text-sm text-ui-300">
                                            Kills:{" "}
                                            <b>{tournament.stats.kills}</b>
                                          </span>
                                        </div>
                                      )}
                                    </div>
                                    <div className="absolute z-20 top-2 right-2 p-1 rounded bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
                                      <span
                                        className={`icon text-xl ${
                                          prototype.getGameByID(game.id)
                                            .slug === "apexlegends"
                                            ? "icon-game-apexlegends-symbol text-game-apexlegends"
                                            : ""
                                        } ${
                                          prototype.getGameByID(game.id)
                                            .slug === "csgo"
                                            ? "icon-game-csgo-symbol text-game-csgo"
                                            : ""
                                        }  ${
                                          prototype.getGameByID(game.id)
                                            .slug === "dota2"
                                            ? "icon-game-dota2-symbol text-game-dota2"
                                            : ""
                                        }  ${
                                          prototype.getGameByID(game.id)
                                            .slug === "leagueoflegends"
                                            ? "icon-game-leagueoflegends-symbol text-game-leagueoflegends"
                                            : ""
                                        }  ${
                                          prototype.getGameByID(game.id)
                                            .slug === "rocketleague"
                                            ? "icon-game-rocketleague-symbol text-game-rocketleague"
                                            : ""
                                        } ${
                                          prototype.getGameByID(game.id)
                                            .slug === "pubg"
                                            ? "icon-game-pubg-symbol text-game-pubg"
                                            : ""
                                        }  ${
                                          prototype.getGameByID(game.id)
                                            .slug === "valorant"
                                            ? "icon-game-valorant-symbol text-game-valorant"
                                            : ""
                                        }`}
                                      />
                                    </div>
                                    <div className="absolute z-0 right-0 inset-y-0 w-1/2">
                                      <div className="absolute z-10 inset-0 bg-gradient-to-r from-ui-700 to-ui-700/50"></div>
                                      <img
                                        className="absolute z-0 object-right object-cover xl:object-cover inset-0 w-full h-full"
                                        src={tournament.cover}
                                      />
                                    </div>
                                  </div>
                                </Link>
                              </li>
                            )
                          )}
                        </>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </PrototypeStructure>
    </>
  );
}
