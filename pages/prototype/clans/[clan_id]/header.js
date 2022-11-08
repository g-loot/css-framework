import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";

export default function ClanHeader() {
  const router = useRouter();
  const prototype = usePrototypeData();
  const [selectedClan, setSelectedClan] = useState(null);
  const { clan_id } = router.query;


  useEffect(() => {
    setSelectedClan(prototype.getClanByID(clan_id));
  }, [clan_id]);


  return (
    <>
      {selectedClan && (
        <>
          {!selectedClan.isYou && (
            <>
              <section className="mb-4">
                <div className="header surface sm:rounded-lg">
                  <div className="header-content">
                    <div className="header-body">
                      <div className="flex flex-col sm:flex-row gap-4 items-stretch text-left justify-between">
                        <div className="flex gap-4 items-center self-center">
                          <div className="avatar avatar-xl avatar-squircle">
                            <div>
                              <img src={selectedClan.avatar} alt="avatar" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                              <h1 className="text-3xl sm:text-4xl">
                                &#91;
                                {selectedClan.tag}
                                &#93; {selectedClan.nickname}
                              </h1>
                              <div className="block lg:hidden text-left">
                                <Link href="settings">
                                  <a
                                    type="button"
                                    className="button button-xs button-primary"
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
                      <div className="flex gap-3 justify-center md:justify-start">
                        {selectedClan.social?.twitch && (
                          <>
                            <a
                              href={selectedClan.social.twitch}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link"
                            >
                              <span className="icon icon-twitch text-xl lg:text-2xl text-ui-300" />
                            </a>
                          </>
                        )}
                        {selectedClan.social?.discord && (
                          <>
                            <a
                              href={selectedClan.social.discord}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link"
                            >
                              <span className="icon icon-discord text-xl lg:text-2xl text-ui-300" />
                            </a>
                          </>
                        )}
                        {selectedClan.social?.youtube && (
                          <>
                            <a
                              href={selectedClan.social.youtube}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link"
                            >
                              <span className="icon icon-logo-youtube text-xl lg:text-2xl text-ui-300" />
                            </a>
                          </>
                        )}
                        {selectedClan.social?.twitter && (
                          <>
                            <a
                              href={selectedClan.social.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link"
                            >
                              <span className="icon icon-logo-twitter text-xl lg:text-2xl text-ui-300" />
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block absolute z-20 top-2 right-2">
                    <Link href="#">
                      <a
                        type="button"
                        className="button button-sm button-primary"
                      >
                        <span>Join clan</span>
                      </a>
                    </Link>
                  </div>
                  <div className="header-meta justify-end items-center md:items-end">
                    <div className="flex gap-1 pb-4">
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
                                prototype.getGameByID(game).slug === "valorant"
                                  ? "icon-game-valorant-symbol text-game-valorant"
                                  : ""
                              }`}
                            />
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                  <div className="header-bg">
                    <img src="https://res.cloudinary.com/gloot/image/upload/v1659442345/Marketing/2022_prototype/Clan_bg.webp" />
                  </div>
                </div>
              </section>
            </>
          )}

          {selectedClan.isYou && (
            <>
              <section className="mb-4">
                <div className="header surface rounded-lg">
                  <div className="header-content">
                    <div className="header-body">
                      <div className="flex gap-4 items-center self-center">
                        <div className="avatar avatar-xl avatar-squircle">
                          <div>
                            <img src={selectedClan.avatar} alt="avatar" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="">
                            <h1 className="text-3xl sm:text-4xl">
                              &#91;
                              {selectedClan.tag}
                              &#93; {selectedClan.nickname}
                            </h1>
                            <div className="flex gap-3 mt-4">
                              {selectedClan.social?.twitch && (
                                <>
                                  <a
                                    href={selectedClan.social.twitch}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link"
                                  >
                                    <span className="icon icon-twitch text-xl lg:text-2xl text-ui-300" />
                                  </a>
                                </>
                              )}
                              {selectedClan.social?.discord && (
                                <>
                                  <a
                                    href={selectedClan.social.discord}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link"
                                  >
                                    <span className="icon icon-discord text-xl lg:text-2xl text-ui-300" />
                                  </a>
                                </>
                              )}
                              {selectedClan.social?.youtube && (
                                <>
                                  <a
                                    href={selectedClan.social.youtube}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link"
                                  >
                                    <span className="icon icon-logo-youtube text-xl lg:text-2xl text-ui-300" />
                                  </a>
                                </>
                              )}
                              {selectedClan.social?.twitter && (
                                <>
                                  <a
                                    href={selectedClan.social.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link"
                                  >
                                    <span className="icon icon-logo-twitter text-xl lg:text-2xl text-ui-300" />
                                  </a>
                                </>
                              )}
                            </div>
                            <div className="flex md:hidden text-left mt-4">
                              {selectedClan.isYou && (
                                <Link href="settings">
                                  <a
                                    type="button"
                                    className="button button-xs button-secondary"
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
                    </div>
                  </div>
                  <div className="hidden md:block absolute z-20 top-2 right-2">
                    <Link href="#">
                      <a
                        type="button"
                        className="button button-sm button-tertiary"
                      >
                        <span className="icon icon-cogwheel" />
                        <span>Clan settings</span>
                      </a>
                    </Link>
                  </div>
                  <div className="header-meta justify-end items-center md:items-end">
                    <div className="flex gap-1 pb-4">
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
                                prototype.getGameByID(game).slug === "valorant"
                                  ? "icon-game-valorant-symbol text-game-valorant"
                                  : ""
                              }`}
                            />
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                  <div className="header-bg">
                    <img src="https://res.cloudinary.com/gloot/image/upload/v1659442345/Marketing/2022_prototype/Clan_bg.webp" />
                  </div>
                </div>
              </section>
            </>
          )}
        </>
      )}
    </>
  );
}
