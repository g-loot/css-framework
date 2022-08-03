import React, { useContext, useEffect } from 'react';

import Ad from "../../../components/Ad/Ad";
import Link from "next/link";
import ModalClanCreate from './modal-clan-create';
import ModalContainer from '../../../components/Modal/ModalContainer';
import PrototypeStructure from "../../../components/Prototype/PrototypeStructure";
import { UiContext } from "../../../contexts/ui";
import { usePrototypeData } from "../../../contexts/prototype";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const hasAds = query.ads === "true" ? true : false;
  const modalCreate = query.modalcreate === "true" ? true : false;
  const uiContext = useContext(UiContext);

  function openModalClanCreate() {
    uiContext.openModal(<ModalClanCreate></ModalClanCreate>);
  }

  useEffect(()=> {
    console.log(modalCreate);
    if(modalCreate) {
      
      openModalClanCreate();
    }
  }, [modalCreate]);

  
  return (
    <>
      {uiContext.displayedModal && (
        <ModalContainer>{uiContext.displayedModal}</ModalContainer>
      )}
      <PrototypeStructure title="Clans">
        <Ad width="1005" height="124" />
        <section className="mb-8">
          <div className="relative surface sm:rounded-lg overflow-hidden p-4 lg:p-8 lg:min-h-[250px] lg:flex items-center">
            <div className="relative z-10">
              <h1 className="text-3xl sm:text-4xl">Be stronger with Clans!</h1>
              <ul className="leading-relaxed text-ui-300 mt-4 list-disc ml-4">
                <li>
                  Work together in Clan Brawls to earn{" "}
                  <span className="text-ui-100 font-bold">extra Coins</span>.
                </li>
                <li>
                  <span className="text-ui-100 font-bold">Compete</span> in epic
                  Showdowns with your clanmates for big rewards.
                </li>
                <li>
                  Fight to take your Clan to the top of the leaderboard or just{" "}
                  <span className="text-ui-100 font-bold">play for fun</span>.
                </li>
                <li>
                  Find the perfect Clan for your playstyle and make{" "}
                  <span className="text-ui-100 font-bold">new friends</span>.
                </li>
              </ul>
            </div>
            <div
              className="absolute hidden md:block z-0 right-0 inset-y-0 w-full animate-slide-in-right animate-delay"
              style={{ "--delay": "calc( 1 * 0.05s)" }}
            >
              <div className="absolute z-10 inset-0 bg-gradient-to-r from-ui-800 via-ui-800/50 to-ui-800/0"></div>
              <img
                className="absolute z-0 object-right object-cover xl:object-cover inset-0 w-full h-full"
                src="https://res.cloudinary.com/gloot/image/upload/v1659442345/Marketing/2022_prototype/Clans_bg.webp"
              />
            </div>
          </div>
        </section>
        <section
          className="mb-8 animate-slide-in-bottom animate-delay"
          style={{ "--delay": "calc( 2 * 0.05s)" }}
        >
          <h2 className="px-4 md:px-0 py-2 text-2xl">Clans you might like to join:</h2>
          <div className="overflow-x-auto lg:overflow-x-hidden scrollbar-hidden">
            <div className="flex lg:grid gap-4 grid-cols-2 px-4 md:px-0">
              {prototype.clans.map((clan, clanIndex) => (
                <>
                  {clan.isFeatured && (
                    <div className="surface rounded-lg p-4 flex flex-col items-between min-w-sm lg:min-w-xs justify-center">
                      <div className="flex gap-4 items-center">
                        <Link
                          href={`/prototype/clans/${clan.id}${
                            hasAds ? "?ads=true" : ""
                          }`}
                        >
                          <div className="flex-1 flex gap-4 items-center cursor-pointer hover:opacity-50 transition-opacity duration-200">
                            <figure className="avatar avatar-squircle avatar-md">
                              <div>
                                <img src={clan.avatar} alt="avatar" />
                              </div>
                            </figure>
                            <div className="flex-1">
                              <h2 className="text-2xl">
                                &#91;
                                {clan.tag}
                                &#93; {clan.nickname}
                              </h2>
                              <div className="text-ui-300">
                                {clan.members?.length} / 30 members
                              </div>
                            </div>
                          </div>
                        </Link>
                        <button
                          type="button"
                          className="button button-sm button-secondary self-start"
                        >
                          <span>Join clan</span>
                        </button>
                      </div>
                      <div className="flex-1 py-4">
                        <p className="text-ui-300">
                          {clan.introduction?.substr(0, 150)}...
                        </p>
                      </div>
                      <div className="flex gap-4 items-center justify-between border-t border-ui-700 pt-4">
                        <div className="flex gap-3">
                          {clan.social?.twitch && (
                            <>
                              <a
                                href={clan.social.twitch}
                                target="_blank"
                                rel="noreferrer"
                                className="text-ui-300 transition-colors duration-200 hover:text-ui-100"
                              >
                                <span className="icon icon-twitch text-xl" />
                              </a>
                            </>
                          )}
                          {clan.social?.discord && (
                            <>
                              <a
                                href={clan.social.discord}
                                target="_blank"
                                rel="noreferrer"
                                className="text-ui-300 transition-colors duration-200 hover:text-ui-100"
                              >
                                <span className="icon icon-discord text-xl" />
                              </a>
                            </>
                          )}
                          {clan.social?.youtube && (
                            <>
                              <a
                                href={clan.social.youtube}
                                target="_blank"
                                rel="noreferrer"
                                className="text-ui-300 transition-colors duration-200 hover:text-ui-100"
                              >
                                <span className="icon icon-logo-youtube text-xl" />
                              </a>
                            </>
                          )}
                          {clan.social?.twitter && (
                            <>
                              <a
                                href={clan.social.twitter}
                                target="_blank"
                                rel="noreferrer"
                                className="text-ui-300 transition-colors duration-200 hover:text-ui-100"
                              >
                                <span className="icon icon-logo-twitter text-xl" />
                              </a>
                            </>
                          )}
                        </div>
                        <div className="text-sm">
                          <span className="text-ui-300">We speak: </span>
                          <span className="text-main">{clan.lang}</span>
                        </div>
                        <div className="flex gap-1">
                          {clan.games?.map((game, gameIndex) => (
                            <>
                              <div className="p-1 border border-ui-700 rounded bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
                                <span
                                  className={`icon text-xl ${
                                    prototype.getGameByID(game).slug ===
                                    "apexlegends"
                                      ? "icon-game-apexlegends-symbol text-game-apexlegends"
                                      : ""
                                  } ${
                                    prototype.getGameByID(game).slug ===
                                    "csgo"
                                      ? "icon-game-csgo-symbol text-game-csgo"
                                      : ""
                                  }  ${
                                    prototype.getGameByID(game).slug ===
                                    "dota2"
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
                                    prototype.getGameByID(game).slug ===
                                    "pubg"
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
                  )}
                </>
              ))}
            </div>
          </div>
        </section>
        <section className="">
          <h2 className="px-4 sm:px-0 py-2 text-2xl">
            Didn&#39;t find what you were looking for?
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div
              className="surface surface-dimmed sm:rounded-lg p-4 relative flex items-center gap-4 animate-slide-in-bottom animate-delay"
              style={{ "--delay": "calc( 2 * 0.05s)" }}
            >
              <div className="-rotate-45 pointer-events-none drop-shadow-lg">
                <img
                  src="https://res.cloudinary.com/gloot/image/upload/v1659430626/Marketing/2022_prototype/Decoration-magnifyingglass.webp"
                  width="140"
                  height="auto"
                  alt=""
                />
              </div>
              <div className="flex-1">
                <div className="flex-1 flex flex-col items-stretch justify-start text-ui-300 space-y-2 leading-relaxed">
                  <p>
                    There are lots of Clans playing all sorts of games with many
                    different attitudes. Check our Clan browser and find the
                    perfect match!
                  </p>
                </div>
                <div className="mt-4 flex gap-4 items-center">
                  <button type="button" className="button button-sm button-primary">
                    <span>Browse clans</span>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="surface surface-dimmed sm:rounded-lg p-4 relative flex items-center gap-4 animate-slide-in-bottom animate-delay"
              style={{ "--delay": "calc( 3 * 0.05s)" }}
            >
              <div className="-rotate-45 pointer-events-none drop-shadow-lg">
                <img
                  src="https://res.cloudinary.com/gloot/image/upload/v1659430626/Marketing/2022_prototype/Decoration-star.webp"
                  width="140"
                  height="auto"
                  alt=""
                />
              </div>
              <div className="flex-1">
                <div className="flex-1 flex flex-col items-stretch justify-start text-ui-300 space-y-2 leading-relaxed">
                  <p>
                    Sometimes you’ve got to do it yourself to get it right!
                    Create your own Clan, invite players and reach new heights
                    together.
                  </p>
                </div>
                <div className="mt-4 flex gap-4 items-center">
                  <button
                    type="button"
                    className="button button-sm button-primary whitespace-nowrap" onClick={openModalClanCreate}
                  >
                    <span>Create clan</span>
                  </button>
                  <span className="font-bold leading-tight hidden">
                    Reach XP XXX to unlock Clan creation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PrototypeStructure>
    </>
  );
}
