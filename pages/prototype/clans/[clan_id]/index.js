import React, { useEffect, useState } from "react";

import Ad from "../../../../components/Ad/Ad";
import Chat from "../../../../components/Chat/Chat";
import Countdown from "../../../../components/Countdown/Countdown";
import Link from "next/link";
import PrototypeStructure from "../../../../components/Prototype/PrototypeStructure";
import SectionClanActivity from "./section-activity";
import TabClanActivity from "./tab-activity";
import TabClanChat from "./tab-chat";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";

const TabsItems = [
  {
    label: "Activity",
    url: "activity",
    component: TabClanActivity,
  },
  {
    label: "Chat",
    url: "chat",
    component: TabClanChat,
  },
];


export default function Home() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const [selectedClan, setSelectedClan] = useState(null);
  const hasAds = query.ads === "true" ? true : false;
  const { clan_id } = router.query;
  const { tab } = router.query;
  const defaultTab = "activity";
  const selectedTab = tab ? tab : defaultTab;

  useEffect(() => {
    setSelectedClan(prototype.getClanByID(clan_id));
  }, [clan_id]);

  function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

  return (
    <>
      <PrototypeStructure title="Clan">
        <Ad width="1005" height="124" />

        {selectedClan && (
          <>
            {!selectedClan.isYou && (
              <>
                <section className="mb-8">
                  <div className="relative overflow-hidden surface md:rounded-lg p-4 lg:min-h-[250px] lg:flex items-center">
                    <div className="relative z-10 flex-1">
                      <div className="flex flex-col sm:flex-row gap-4 items-stretch justify-between">
                        <div className="flex gap-4 items-center self-center">
                          <figure className="avatar avatar-xl avatar-squircle">
                            <div>
                              <img src={selectedClan.avatar} alt="avatar" />
                            </div>
                          </figure>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                              <h1 className="text-3xl sm:text-4xl">
                                &#91;
                                {selectedClan.tag}
                                &#93; {selectedClan.nickname}
                              </h1>
                              <div className="block md:hidden">
                                <Link href="settings">
                                  <a
                                    type="button"
                                    className="button button-sm button-primary"
                                  >
                                    <span>Join clan</span>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 py-4 max-w-[70ch]">
                        <p className="text-ui-300 mb-2">
                          {prototype
                            .getClanByID(clan_id)
                            .introduction?.substr(0, 150)}
                          ...
                        </p>
                        <p>
                          <span className="text-ui-300">We speak: </span>
                          <span className="text-main">{selectedClan.lang}</span>
                        </p>
                      </div>
                      <div className="flex gap-4 items-end justify-between">
                        <div className="flex gap-3">
                          {selectedClan.social?.twitch && (
                            <>
                              <a
                                href={selectedClan.social.twitch}
                                target="_blank"
                                rel="noreferrer"
                                className="text-ui-300 transition-colors duration-200 hover:text-ui-100"
                              >
                                <span className="icon icon-twitch text-2xl" />
                              </a>
                            </>
                          )}
                          {selectedClan.social?.discord && (
                            <>
                              <a
                                href={selectedClan.social.discord}
                                target="_blank"
                                rel="noreferrer"
                                className="text-ui-300 transition-colors duration-200 hover:text-ui-100"
                              >
                                <span className="icon icon-discord text-2xl" />
                              </a>
                            </>
                          )}
                          {selectedClan.social?.youtube && (
                            <>
                              <a
                                href={selectedClan.social.youtube}
                                target="_blank"
                                rel="noreferrer"
                                className="text-ui-300 transition-colors duration-200 hover:text-ui-100"
                              >
                                <span className="icon icon-logo-youtube text-2xl" />
                              </a>
                            </>
                          )}
                          {selectedClan.social?.twitter && (
                            <>
                              <a
                                href={selectedClan.social.twitter}
                                target="_blank"
                                rel="noreferrer"
                                className="text-ui-300 transition-colors duration-200 hover:text-ui-100"
                              >
                                <span className="icon icon-logo-twitter text-2xl" />
                              </a>
                            </>
                          )}
                        </div>
                        <div className="flex gap-1">
                          {selectedClan.games?.map((game, gameIndex) => (
                            <>
                              <div
                                key={game}
                                className="p-2 rounded bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center"
                              >
                                <span
                                  className={`icon text-2xl ${
                                    prototype.getGameByID(game).slug ===
                                    "apexlegends"
                                      ? "icon-game-apexlegends-symbol text-game-apexlegends"
                                      : ""
                                  } ${
                                    prototype.getGameByID(game).slug === "csgo"
                                      ? "icon-game-csgo-symbol text-game-csgo"
                                      : ""
                                  }  ${
                                    prototype.getGameByID(game).slug === "dota2"
                                      ? "icon-game-dota2-symbol text-game-dota2"
                                      : ""
                                  }  ${
                                    prototype.getGameByID(game).slug ===
                                    "leagueoflegends"
                                      ? "icon-game-leagueoflegends-symbol text-game-leagueoflegends"
                                      : ""
                                  }  ${
                                    prototype.getGameByID(game).slug ===
                                    "rocketleague"
                                      ? "icon-game-rocketleague-symbol text-game-rocketleague"
                                      : ""
                                  } ${
                                    prototype.getGameByID(game).slug === "pubg"
                                      ? "icon-game-pubg-symbol text-game-pubg"
                                      : ""
                                  }  ${
                                    prototype.getGameByID(game).slug ===
                                    "valorant"
                                      ? "icon-game-valorant-symbol text-game-valorant"
                                      : ""
                                  }`}
                                />
                              </div>
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute z-0 right-0 inset-y-0 w-full animate-slide-in-right animate-delay"
                      style={{ "--delay": "calc( 1 * 0.05s)" }}
                    >
                      <div className="absolute z-10 inset-0 bg-gradient-to-r from-ui-800 via-ui-800/95 to-ui-800/0"></div>
                      <img
                        className="absolute z-0 object-right object-cover xl:object-cover inset-0 w-full h-full"
                        src="https://res.cloudinary.com/gloot/image/upload/v1659442345/Marketing/2022_prototype/Clan_bg.webp"
                      />
                    </div>
                    <div className="hidden lg:block absolute z-20 top-4 right-4">
                      <Link href="#">
                        <a
                          type="button"
                          className="button button-sm button-primary"
                        >
                          <span>Join clan</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </section>
                <section
                  className="flex flex-col xl:flex-row xl:items-start gap-4 xl:gap-8 animate-slide-in-bottom animate-delay"
                  style={{ "--delay": "calc( 2 * 0.05s)" }}
                >
                  <div className="flex-1 surface sm:rounded-lg p-4 flex flex-col 2xl:flex-row gap-2 items-stretch">
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <div className="relative flex items-center justify-center py-8">
                        <img
                          className="relative z-10 h-24"
                          src="https://res.cloudinary.com/gloot/image/upload/v1657888942/Marketing/2022_prototype/Logo/samesize-brawl.svg"
                          width="auto"
                          height="auto"
                          alt=""
                        />
                        <div className="absolute z-0 inset-0 flex items-center justify-center">
                          <img
                            src="https://res.cloudinary.com/gloot/image/upload/v1659466410/Marketing/2022_prototype/Statsbg_brawl.webp"
                            width="auto"
                            height="auto"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap justify-center items-stretch gap-2 text-center p-2">
                        <div className="w-32 flex flex-col items-center justify-end rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                          <div className="leading-none text-xs text-ui-300 uppercase">
                            Number of Brawls played
                          </div>
                          <div className="text-3xl font-headings font-bold">
                            22
                          </div>
                        </div>
                        <div className="w-32 flex flex-col items-center justify-end rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                          <div className="leading-none text-xs text-ui-300 uppercase">
                            Times in top 50
                          </div>
                          <div className="text-3xl font-headings font-bold">
                            2
                          </div>
                        </div>
                        <div className="w-32 flex flex-col items-center justify-end rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                          <div className="leading-none text-xs text-ui-300 uppercase">
                            Best placement
                          </div>
                          <div className="text-3xl font-headings font-bold">
                            1
                          </div>
                        </div>
                        <div className="w-32 flex flex-col items-center justify-end rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                          <div className="leading-none text-xs text-ui-300 uppercase">
                            Most matches in a Brawl
                          </div>
                          <div className="text-3xl font-headings font-bold">
                            84
                          </div>
                        </div>
                        <div className="w-32 flex flex-col items-center justify-end rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                          <div className="leading-none text-xs text-ui-300 uppercase">
                            Avg. matches/Brawl
                          </div>
                          <div className="text-3xl font-headings font-bold">
                            54
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden 2xl:block w-px bg-ui-700" />
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <div className="relative flex items-center justify-center py-8">
                        <img
                          className="relative z-10 h-24"
                          src="https://res.cloudinary.com/gloot/image/upload/v1657888942/Marketing/2022_prototype/Logo/samesize-showdown.svg"
                          width="auto"
                          height="auto"
                          alt=""
                        />
                        <div className="absolute z-0 inset-0 flex items-center justify-center">
                          <img
                            src="https://res.cloudinary.com/gloot/image/upload/v1659466410/Marketing/2022_prototype/Statsbg_tournament.webp"
                            width="auto"
                            height="auto"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap justify-center items-stretch gap-2 text-center p-2">
                        <div className="w-32 flex flex-col items-center justify-end rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                          <div className="leading-none text-xs text-ui-300 uppercase">
                            Best Showdown placement
                          </div>
                          <div className="text-3xl font-headings font-bold">
                            6
                          </div>
                        </div>
                        <div className="w-32 flex flex-col items-center justify-end rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                          <div className="leading-none text-xs text-ui-300 uppercase">
                            Played Showdowns
                          </div>
                          <div className="text-3xl font-headings font-bold">
                            3
                          </div>
                        </div>
                        <div className="w-32 flex flex-col items-center justify-end rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                          <div className="leading-none text-xs text-ui-300 uppercase">
                            Avg. Showdown placement
                          </div>
                          <div className="text-3xl font-headings font-bold">
                            11
                          </div>
                        </div>
                        <div className="w-32 flex flex-col items-center justify-end rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                          <div className="leading-none text-xs text-ui-300 uppercase">
                            Tournaments played
                          </div>
                          <div className="text-3xl font-headings font-bold">
                            5
                          </div>
                        </div>
                        <div className="w-32 flex flex-col items-center justify-end rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                          <div className="leading-none text-xs text-ui-300 uppercase">
                            Top 3 placement
                          </div>
                          <div className="text-3xl font-headings font-bold">
                            4
                          </div>
                        </div>
                        <div className="w-32 flex flex-col items-center justify-end rounded bg-gradient-to-b from-ui-800 to-ui-700/25 p-4">
                          <div className="leading-none text-xs text-ui-300 uppercase">
                            Avg. tournaments placement
                          </div>
                          <div className="text-3xl font-headings font-bold">
                            14
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="xl:w-96 space-y-4">
                    <div className="surface sm:rounded-lg">
                      <div className="p-1 border-b border-ui-700 flex gap-2 justify-between">
                        <h2 className="p-2 text-xl italic">
                          Members{" "}
                          <span className="font-body font-normal not-italic text-ui-300 text-sm tracking-normal">
                            {selectedClan.members.length} / 30
                          </span>
                        </h2>
                      </div>
                      <div className="max-h-60 overflow-y-auto scrollbar-desktop">
                        <ul>
                          {prototype
                            .getClanByID(clan_id)
                            .members.map((user, userIndex) => (
                              <Link
                                key={user.id}
                                href={`/prototype/profile/${
                                  prototype.getUserByID(user).id
                                }${hasAds ? "?ads=true" : ""}`}
                              >
                                <li className="item item-interactive">
                                  <div className="item-image">
                                    <figure className="avatar avatar-square avatar-simple avatar-xs">
                                      <div>
                                        <img
                                          src={
                                            prototype.getUserByID(user).avatar
                                          }
                                        />
                                      </div>
                                      {prototype.getUserByID(user).isOnline && (
                                        <i />
                                      )}
                                    </figure>
                                  </div>
                                  <div className="item-body">
                                    <div className="item-title flex gap-2 items-center">
                                      {prototype.getUserByID(user).nickname}
                                      {selectedClan.admin ===
                                        prototype.getUserByID(user).id && (
                                        <span className="icon icon-crown text-sm" />
                                      )}
                                    </div>
                                    <div className="text-ui-300 text-xs">
                                      {prototype.getUserByID(user).lang} • Today
                                    </div>
                                  </div>
                                  <div className="item-actions">
                                    <div className="flex gap-1">
                                      {prototype
                                        .getUserByID(user)
                                        .games.map((game, gameIndex) => (
                                          <>
                                            <div
                                              key={game.id}
                                              className="p-1 border border-ui-700 rounded bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center"
                                            >
                                              <span
                                                className={`icon text-xl ${
                                                  prototype.getGameByID(game)
                                                    .slug === "apexlegends"
                                                    ? "icon-game-apexlegends-symbol text-game-apexlegends"
                                                    : ""
                                                } ${
                                                  prototype.getGameByID(game)
                                                    .slug === "csgo"
                                                    ? "icon-game-csgo-symbol text-game-csgo"
                                                    : ""
                                                }  ${
                                                  prototype.getGameByID(game)
                                                    .slug === "dota2"
                                                    ? "icon-game-dota2-symbol text-game-dota2"
                                                    : ""
                                                }  ${
                                                  prototype.getGameByID(game)
                                                    .slug === "leagueoflegends"
                                                    ? "icon-game-leagueoflegends-symbol text-game-leagueoflegends"
                                                    : ""
                                                }  ${
                                                  prototype.getGameByID(game)
                                                    .slug === "rocketleague"
                                                    ? "icon-game-rocketleague-symbol text-game-rocketleague"
                                                    : ""
                                                } ${
                                                  prototype.getGameByID(game)
                                                    .slug === "pubg"
                                                    ? "icon-game-pubg-symbol text-game-pubg"
                                                    : ""
                                                }  ${
                                                  prototype.getGameByID(game)
                                                    .slug === "valorant"
                                                    ? "icon-game-valorant-symbol text-game-valorant"
                                                    : ""
                                                }`}
                                              />
                                            </div>
                                          </>
                                        ))}
                                    </div>
                                  </div>
                                </li>
                              </Link>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )}

            {selectedClan.isYou && (
              <>
                <section className="mb-4 lg:mb-8">
                  <div className="relative overflow-hidden surface md:rounded-lg p-4 lg:min-h-[250px] lg:flex items-center">
                    <div className="relative z-10 flex-1">
                      <div className="flex flex-col sm:flex-row gap-4 items-stretch justify-between">
                        <div className="flex gap-4 items-center self-center">
                          <figure className="avatar avatar-xl avatar-squircle">
                            <div>
                              <img src={selectedClan.avatar} alt="avatar" />
                            </div>
                          </figure>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                              <h1 className="text-3xl sm:text-4xl">
                                &#91;
                                {selectedClan.tag}
                                &#93; {selectedClan.nickname}
                              </h1>
                              <div className="block md:hidden">
                                {selectedClan.isYou && (
                                  <Link href="settings">
                                    <a
                                      type="button"
                                      className="button button-sm button-ghost"
                                    >
                                      <span className="icon icon-cogwheel" />
                                      <span>Clan settings</span>
                                    </a>
                                  </Link>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col justify-end items-center sm:items-end gap-4">
                          <div className="flex gap-4 items-end justify-end">
                            <div className="flex gap-3">
                              {selectedClan.social?.twitch && (
                                <>
                                  <a
                                    href={selectedClan.social.twitch}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-ui-300 transition-colors duration-200 hover:text-ui-100"
                                  >
                                    <span className="icon icon-twitch text-3xl" />
                                  </a>
                                </>
                              )}
                              {selectedClan.social?.discord && (
                                <>
                                  <a
                                    href={selectedClan.social.discord}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-ui-300 transition-colors duration-200 hover:text-ui-100"
                                  >
                                    <span className="icon icon-discord text-3xl" />
                                  </a>
                                </>
                              )}
                              {selectedClan.social?.youtube && (
                                <>
                                  <a
                                    href={selectedClan.social.youtube}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-ui-300 transition-colors duration-200 hover:text-ui-100"
                                  >
                                    <span className="icon icon-logo-youtube text-3xl" />
                                  </a>
                                </>
                              )}
                              {selectedClan.social?.twitter && (
                                <>
                                  <a
                                    href={selectedClan.social.twitter}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-ui-300 transition-colors duration-200 hover:text-ui-100"
                                  >
                                    <span className="icon icon-logo-twitter text-3xl" />
                                  </a>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute z-0 right-0 inset-y-0 w-full animate-slide-in-right animate-delay"
                      style={{ "--delay": "calc( 1 * 0.05s)" }}
                    >
                      <div className="absolute z-10 inset-0 bg-gradient-to-r from-ui-800 via-ui-800/95 to-ui-800/0"></div>
                      <img
                        className="absolute z-0 object-right object-cover xl:object-cover inset-0 w-full h-full"
                        src="https://res.cloudinary.com/gloot/image/upload/v1659442345/Marketing/2022_prototype/Clan_bg.webp"
                      />
                    </div>
                    <div className="hidden lg:block absolute z-20 top-4 right-4">
                      {selectedClan.isYou && (
                        <Link href="settings">
                          <a
                            type="button"
                            className="button button-sm button-ghost"
                          >
                            <span className="icon icon-cogwheel" />
                            <span>Clan settings</span>
                          </a>
                        </Link>
                      )}
                    </div>
                  </div>
                </section>
                <nav className="block xl:hidden">
                  <ul className="tabs border-b border-ui-700">
                    {TabsItems.map((item, itemIndex) => (
                      <li key={item}>
                        <Link href={`/prototype/clans/${clan_id}${hasAds ? "?ads=true&" : ""}${hasAds ? "&" : "?"}tab=${item.url}`}>
                          <a
                            className={`${selectedTab === item.url ? "is-active" : ""}`}
                          >
                            <span>{item.label}</span>
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <section
                  className="hidden xl:flex flex-col xl:flex-row xl:items-start gap-4 xl:gap-8 animate-slide-in-bottom animate-delay"
                  style={{ "--delay": "calc( 2 * 0.05s)" }}
                >
                  <div className="flex-1 surface sm:rounded-lg">
                    <Chat maxheight="max-h-[50vh] xl:max-h-[608px]" />
                  </div>
                  <div className="xl:w-96 space-y-4">
                    <SectionClanActivity />
                  </div>
                </section>

                <section className="block xl:hidden py-4">
                  {TabsItems.map((item) => {
                    if (item.url === selectedTab) {
                      return React.createElement(item.component);
                    }
                  })}
                </section>
              </>
            )}
          </>
        )}
      </PrototypeStructure>
    </>
  );
}
