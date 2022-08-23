import React, { useEffect, useState } from "react";

import Countdown from "../../../../components/Countdown/Countdown";
import Link from "next/link";
import ListItemBrawl from "../../../../components/ListItem/ListItemBrawl";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";

export default function SectionClanActivity() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const [selectedClan, setSelectedClan] = useState(null);
  const { clan_id } = router.query;
  const hasAds = query.ads === "true" ? true : false;
  const emptyState = query.emptystate === "true" ? true : false;

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
      {selectedClan && (
        <>
          {!emptyState && (
            <div className="surface surface-dimmed sm:rounded-lg p-2 xl:max-h-[500px] overflow-x-auto xl:overflow-x-hidden xl:overflow-y-auto scrollbar-desktop">
              <ul className="space-x-2 xl:space-x-0 xl:space-y-2 flex xl:flex-col">
                {prototype.games.map((game, gameIndex) => (
                  <>
                    {game.brawls?.map((brawl, brawlIndex) => (
                      <>
                        {brawl.status === "ongoing" && (
                          <ListItemBrawl
                            key={brawlIndex}
                            brawl={brawl}
                            game={game}
                            variant={2}
                          />
                        )}
                      </>
                    ))}
                  </>
                ))}
                {/*
              {brawlsResults.map((brawl, brawlIndex) => (
                <>
                  <li key={brawl} className="surface rounded">
                    <div className="bg-ui-700 border-b border-ui-700 p-2 flex gap-2 justify-between">
                      <h6>{brawl.name}</h6>
                      <div className="chip chip-sm chip-secondary">
                        <span className="icon icon-time-machine" />
                        <span>
                          Time left:{" "}
                          <Countdown additionalClassName="ml-1" separator=":" />
                        </span>
                      </div>
                    </div>
                    <div className="p-2">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded border border-ui-700 bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
                          <span
                            className={`icon text-4xl ${
                              prototype.getGameByID(brawl.game).slug ===
                              "apexlegends"
                                ? "icon-game-apexlegends-symbol text-game-apexlegends"
                                : ""
                            } ${
                              prototype.getGameByID(brawl.game).slug === "csgo"
                                ? "icon-game-csgo-symbol text-game-csgo"
                                : ""
                            }  ${
                              prototype.getGameByID(brawl.game).slug === "dota2"
                                ? "icon-game-dota2-symbol text-game-dota2"
                                : ""
                            }  ${
                              prototype.getGameByID(brawl.game).slug ===
                              "leagueoflegends"
                                ? "icon-game-leagueoflegends-symbol text-game-leagueoflegends"
                                : ""
                            }  ${
                              prototype.getGameByID(brawl.game).slug ===
                              "rocketleague"
                                ? "icon-game-rocketleague-symbol text-game-rocketleague"
                                : ""
                            } ${
                              prototype.getGameByID(brawl.game).slug === "pubg"
                                ? "icon-game-pubg-symbol text-game-pubg"
                                : ""
                            }  ${
                              prototype.getGameByID(brawl.game).slug ===
                              "valorant"
                                ? "icon-game-valorant-symbol text-game-valorant"
                                : ""
                            }`}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-ui-300">
                            Top spot reward:
                          </div>
                          <div className="flex gap-4 items-center">
                            {brawl.rewards.map((reward, rewardIndex) => (
                              <>
                                {reward.type === "money" && (
                                  <div className="flex items-center gap-2">
                                    <span className="font-headings font-bold text-lg italic">
                                      $ {numberWithSpaces(reward.value)}
                                    </span>
                                  </div>
                                )}
                                {reward.type === "coin" && (
                                  <div className="flex items-center gap-2">
                                    <img
                                      className="h-6"
                                      src={`https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-coin-unique.webp`}
                                      width="auto"
                                      height="auto"
                                      alt=""
                                    />
                                    <span className="font-headings font-bold text-lg italic">
                                      {numberWithSpaces(reward.value)}
                                    </span>
                                  </div>
                                )}
                                {reward.type === "token" && (
                                  <div className="flex items-center gap-2">
                                    <img
                                      className="h-6"
                                      src={`https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-token-unique.webp`}
                                      width="auto"
                                      height="auto"
                                      alt=""
                                    />
                                    <span className="font-headings font-bold text-lg italic">
                                      {numberWithSpaces(reward.value)}
                                    </span>
                                  </div>
                                )}
                                {reward.type === "ticket" && (
                                  <div className="flex items-center gap-2">
                                    <img
                                      className="h-6"
                                      src={`https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-ticket-unique.webp`}
                                      width="auto"
                                      height="auto"
                                      alt=""
                                    />
                                    <span className="font-headings font-bold text-lg italic">
                                      {numberWithSpaces(reward.value)}
                                    </span>
                                  </div>
                                )}
                              </>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 leading-none">
                          <div className="text-5xl font-headings italic">
                            {brawl.result.position}
                          </div>
                          <div
                            className={`text-center -space-y-1 ${
                              brawl.result.isPositive
                                ? "text-success-500"
                                : "text-attention-500"
                            }`}
                          >
                            {brawl.result.isPositive && (
                              <span className="icon icon-arrow-sm-up" />
                            )}
                            <div>{brawl.result.movement}</div>
                            {!brawl.result.isPositive && (
                              <span className="icon icon-arrow-sm-down" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-ui-700">
                      <div className="px-2 pt-2 text-sm text-ui-300">
                        Top performers:
                      </div>
                      <div className="relative p-2 overflow-x-auto scrollbar-desktop">
                        <div className="flex items-center gap-4 whitespace-nowrap leading-tight">
                          {brawl.topPerformers.map((user, userIndex) => (
                            <Link
                              key={userIndex}
                              href={`/prototype/profile/${
                                prototype.getUserByID(user.id).id
                              }${hasAds ? "?ads=true" : ""}`}
                            >
                              <div className="flex items-center gap-2 cursor-pointer">
                                <figure className="avatar avatar-xs avatar-circle">
                                  <div>
                                    <img
                                      src={
                                        prototype.getUserByID(user.id).avatar
                                      }
                                      alt="avatar"
                                    />
                                  </div>
                                </figure>
                                <div className="text-sm">
                                  <div>
                                    Score: <b>{user.score}</b>
                                  </div>
                                  <div className="text-ui-300">
                                    Matches: <b>{user.matches}</b>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
                </>
              ))}
                                    */}
              </ul>
            </div>
          )}

          {emptyState && (
            <div className="surface sm:rounded-lg px-4 py-8 text-center">
              <div className="max-w-xs mx-auto leading-tight">
                <span className="icon icon-brawl text-6xl text-ui-500" />
                {selectedClan.isYou && (
                  <>
                    <div className="mt-2">
                      <p className="text-sm text-ui-400 mb-2">
                        {selectedClan.nickname} has no ongoing Brawls
                      </p>
                      <p className="text-lg text-ui-300">
                        Find a Brawl with the <span className="icon icon-multiple-12" /> icon and compete with your Clan!
                      </p>
                    </div>
                    {/*
                      <Link href={`/prototype/valorant/brawls${hasAds ? "?ads=true" : ""}`}>
                        <a className="button button-primary">
                          <span>Browse Brawls</span>
                        </a>
                      </Link>
                    */}
                  </>
                )}
                {!selectedClan.isYou && (
                  <>
                    <div className="mt-2">
                      <p className="text-lg text-ui-300">
                        {selectedClan.nickname} has no ongoing Brawls
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          <div className="surface sm:rounded-lg">
            <div className="p-1 border-b border-ui-700 flex gap-2 justify-between">
              <h2 className="p-2 text-xl italic">
                Members{" "}
                <span className="font-body font-normal not-italic text-ui-300 text-sm tracking-normal">
                  {selectedClan.members.length} / 30
                </span>
              </h2>
              {selectedClan.isYou && (
                <button
                  type="button"
                  className="button button-sm button-tertiary"
                >
                  <span className="icon icon-a-add" />
                  <span>Add member</span>
                </button>
              )}
            </div>
            <div className="max-h-60 overflow-y-auto scrollbar-desktop">
              <ul>
                {prototype
                  .getClanByID(clan_id)
                  .members?.map((user, userIndex) => (
                    <li key={user.id} className="item">
                      <div className="item-image">
                        <Link
                          href={`/prototype/profile/${
                            prototype.getUserByID(user).id
                          }${hasAds ? "?ads=true" : ""}`}
                        >
                          <figure className="avatar avatar-square avatar-simple avatar-xs interactive">
                            <div>
                              <img src={prototype.getUserByID(user).avatar} />
                            </div>
                            {prototype.getUserByID(user).isOnline && <i />}
                          </figure>
                        </Link>
                      </div>
                      <div className="item-body">
                        <Link
                          href={`/prototype/profile/${
                            prototype.getUserByID(user).id
                          }${hasAds ? "?ads=true" : ""}`}
                        >
                          <div className="item-title flex gap-2 items-center interactive">
                            {prototype.getUserByID(user).nickname}
                            {selectedClan.admin ===
                              prototype.getUserByID(user).id && (
                              <span className="icon icon-crown text-sm" />
                            )}
                          </div>
                        </Link>
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
                      {selectedClan.isYou && (
                        <div
                          className={`item-actions ${
                            selectedClan.admin ===
                            prototype.getUserByID(user).id
                              ? "opacity-0 pointer-events-none"
                              : ""
                          }`}
                        >
                          <div className="dropdown dropdown-left">
                            <label
                              tabIndex="0"
                              className="button button-ghost rounded-full"
                            >
                              <span className="icon icon-dots-vertical" />
                            </label>
                            <div
                              tabIndex="0"
                              className="dropdown-content bg-ui-600 w-52 p-1"
                            >
                              <ul className="menu menu-rounded menu-secondary">
                                <li>
                                  <a>
                                    <span>Kick</span>
                                  </a>
                                </li>
                                <li>
                                  <a>
                                    <span>Promote to captain</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}
