import React, { useEffect, useState } from "react";

import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import ReadMore from "../../../../components/ReadMore/ReadMore";
import Link from "next/link";
import Slider from "../../../../components/Slider/Slider";
import LadderCardSecondary from "../../../../components/Ladder/LadderCardSecondary";
import Avatar from "../../../../components/Avatar/Avatar";
import Chat from "../../../../components/Chat/Chat";
import GameIcon from "../../../../components/GameIcon/GameIcon";

export default function TabClanOverview() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const [selectedClan, setSelectedClan] = useState(null);
  const hasAccepted = query.hasaccepted === "true" ? true : false;
  const { clan_id } = router.query;
  const hasAds = query.ads === "true" ? true : false;

  useEffect(() => {
    setSelectedClan(prototype.getClanByID(clan_id));
  }, [clan_id]);

  return (
    <>
      {selectedClan && selectedClan.isYou && (
        <div className="flex flex-col lg:flex-row items-stretch gap-y-4 lg:gap-x-4 animate-slide-in-bottom">
          <div className="w-full lg:w-80 space-y-4">
            <section className="surface md:rounded">
              <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                <h2 className="h6 text-ui-100">About</h2>
                {selectedClan.isYou && (
                  <Link
                    href={`/prototype/profile/settings${prototype.getURLparams()}`}
                  >
                    <a className="link link-hover text-ui-300 text-sm">Edit</a>
                  </Link>
                )}
              </div>
              <div className="p-4 space-y-4">
                <p className="text-ui-300 mt-1 text-left">
                  <span className="text-ui-300">We speak: </span>
                  <span className="text-ui-100">{selectedClan.lang}</span>
                </p>
                {selectedClan.bio && (
                  <p className="text-ui-300 mt-1 text-left">
                    <ReadMore content={selectedClan.bio} max={150} />
                  </p>
                )}
                <div className="flex gap-1">
                  {selectedClan.social?.twitch && (
                    <a
                      href={selectedClan.social.twitch}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link p-1 text-0"
                    >
                      <span className="icon icon-20 text-ui-300 icon-twitch" />
                    </a>
                  )}
                  {selectedClan.social?.discord && (
                    <a
                      href={selectedClan.social.discord}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link p-1 text-0"
                    >
                      <span className="icon icon-20 text-ui-300 icon-discord" />
                    </a>
                  )}
                  {selectedClan.social?.youtube && (
                    <a
                      href={selectedClan.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link p-1 text-0"
                    >
                      <span className="icon icon-20 text-ui-300 icon-logo-youtube" />
                    </a>
                  )}
                  {selectedClan.social?.twitter && (
                    <a
                      href={selectedClan.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link p-1 text-0"
                    >
                      <span className="icon icon-20 text-ui-300 icon-logo-twitter" />
                    </a>
                  )}
                </div>
                {selectedClan.isYou ? (
                  <div className="space-y-2">
                    <div className="surface surface-ui-600 rounded p-3 space-y-3">
                      <div className="text-center text-ui-100">
                        You have <b>3</b> pending applications
                      </div>
                      <div className="flex gap-2">
                        <Link
                          href={`/prototype/clans/1?tab=applications${prototype.getURLparams()}`}
                        >
                          <a
                            type="button"
                            className="button button-sm button-primary flex-1"
                          >
                            <span className="icon icon-a-time" />
                            <span>View applicants</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    {hasAccepted ? (
                      <>
                        <div className="surface surface-ui-600 rounded p-3 space-y-3">
                          <div className="text-center">
                            Welcome to the {selectedClan.nickname} clan{" "}
                            {prototype.getUserByID(1).nickname}!
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {selectedClan.isPublic ? (
                          <div className="surface surface-ui-600 rounded p-3 space-y-3">
                            <div className="text-center">
                              This Clan is open to everyone.
                            </div>
                            <div className="flex gap-2">
                              <Link href="#">
                                <a
                                  type="button"
                                  className="button button-sm button-primary flex-1"
                                >
                                  <span>Join clan</span>
                                </a>
                              </Link>
                            </div>
                          </div>
                        ) : (
                          <>
                            {selectedClan.hasInvitedYou ? (
                              <div className="surface surface-ui-600 rounded p-3 space-y-3">
                                <div className="text-center">
                                  Congratulations, you have been invited to join
                                  this clan.
                                </div>
                                <div className="flex gap-2">
                                  <Link href="#">
                                    <a
                                      type="button"
                                      className="button button-sm button-success flex-1"
                                    >
                                      <span>Accept</span>
                                    </a>
                                  </Link>
                                  <Link href="#">
                                    <a
                                      type="button"
                                      className="button button-sm button-error flex-1"
                                    >
                                      <span>Decline</span>
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            ) : (
                              <div className="surface surface-ui-600 rounded p-3 space-y-3">
                                <div className="text-center">
                                  This Clan is private.
                                </div>
                                <div className="flex gap-2">
                                  <Link href="#">
                                    <a
                                      type="button"
                                      className="button button-sm button-primary flex-1"
                                    >
                                      <span>Apply to join</span>
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </div>
            </section>
            <section className="surface md:rounded">
              <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                <h2 className="h6 text-ui-100">
                  Members ({selectedClan.members.length})
                </h2>
                {selectedClan.isYou ? (
                  <>
                    <Link
                      href={`${
                        selectedClan.id
                      }?tab=members${prototype.getURLparams()}`}
                    >
                      <a className="link link-hover text-ui-300 text-sm">
                        View
                      </a>
                    </Link>
                    {/*
                  <Link href={`${selectedClan.id}?tab=applications${prototype.getURLparams()}`}>
                    <a className="link link-hover text-ui-300 text-sm">
                      Applications
                    </a>
                  </Link>
                */}
                  </>
                ) : (
                  <Link
                    href={`${
                      selectedClan.id
                    }?tab=members${prototype.getURLparams()}`}
                  >
                    <a className="link link-hover text-ui-300 text-sm">View</a>
                  </Link>
                )}
              </div>
              <ul className="flex flex-wrap p-4 gap-4">
                {selectedClan.members?.map((user, userIndex) => (
                  <Link
                    key={userIndex}
                    href={`/prototype/profile/${
                      prototype.getUserByID(user).id
                    }${prototype.getURLparams()}`}
                  >
                    <li className="interactive">
                      <Avatar id={user} hasTooltip={true} size="avatar-xs" />
                    </li>
                  </Link>
                ))}
              </ul>
            </section>
            {selectedClan.games && (
              <section className="surface md:rounded">
                <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                  <h2 className="h6 text-ui-100">
                    Games ({selectedClan.games.length})
                  </h2>
                  <Link
                    href={`${
                      selectedClan.id
                    }?tab=games${prototype.getURLparams()}`}
                  >
                    <a className="link link-hover text-ui-300 text-sm hidden">
                      View
                    </a>
                  </Link>
                </div>
                <ul className="flex gap-4 p-4">
                  {selectedClan.games?.map((game, gameIndex) => (
                    <li key={gameIndex}>
                      <GameIcon game={game} />
                    </li>
                  ))}
                </ul>
              </section>
            )}
            <section className="surface md:rounded">
              <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                <h2 className="h6 text-ui-100">Ladders ({selectedClan.ladders?.length})</h2>
                <Link
                  href={`${
                    selectedClan.id
                  }?tab=activity${prototype.getURLparams()}`}
                >
                  <a className="link link-hover text-ui-300 text-sm">View</a>
                </Link>
              </div>
              <div>
                {selectedClan.ladders ? (
                  <Slider
                    itemWidth={397 + 16}
                    bgColor="from-ui-800 via-ui-800 to-ui-800/0"
                  >
                      {selectedClan.ladders?.map((ladder, ladderIndex) => (
                        <>
                          <Link key={ladderIndex} href="#">
                          <img src={prototype.getLadderByID(
                              ladder.gameSlug,
                              ladder.id
                            ).cover} className="first:ml-4 rounded h-20 aspect-cover object-cover interactive" alt="" />
                          </Link>
                        </>
                      ))}
                  </Slider>
                ) : (
                  <div className="text-center p-4">
                    <span className="icon icon-ladder text-6xl text-ui-500" />
                    <p className="mt-2 text-ui-300">
                      {selectedClan.nickname} is not competing in any ladders
                    </p>
                  </div>
                )}
              </div>
            </section>
          </div>
          <div className="flex-1 surface md:rounded lg:overflow-hidden max-w-[100%] hidden lg:flex flex-col relative">
            <div className="absolute inset-0 overflow-hidden">
              <Chat isAbsolute={true} maxheight={`h-auto`} />
            </div>
          </div>
        </div>
      )}
      {selectedClan && !selectedClan.isYou && (
        <div className="flex flex-col lg:flex-row items-start gap-y-4 lg:gap-x-4 animate-slide-in-bottom">
          <div className="w-full lg:w-80 space-y-4">
            <section className="surface md:rounded">
              <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                <h2 className="h6 text-ui-100">About</h2>
                {selectedClan.isYou && (
                  <Link
                    href={`/prototype/profile/settings${prototype.getURLparams()}`}
                  >
                    <a className="link link-hover text-ui-300 text-sm">Edit</a>
                  </Link>
                )}
              </div>
              <div className="p-4 space-y-4">
                <p className="text-ui-300 mt-1 text-left">
                  <span className="text-ui-300">We speak: </span>
                  <span className="text-ui-100">{selectedClan.lang}</span>
                </p>
                {selectedClan.bio && (
                  <p className="text-ui-300 mt-1 text-left">
                    <ReadMore content={selectedClan.bio} max={150} />
                  </p>
                )}
                <div className="flex gap-1">
                  {selectedClan.social?.twitch && (
                    <a
                      href={selectedClan.social.twitch}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link p-1 text-0"
                    >
                      <span className="icon icon-20 text-ui-300 icon-twitch" />
                    </a>
                  )}
                  {selectedClan.social?.discord && (
                    <a
                      href={selectedClan.social.discord}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link p-1 text-0"
                    >
                      <span className="icon icon-20 text-ui-300 icon-discord" />
                    </a>
                  )}
                  {selectedClan.social?.youtube && (
                    <a
                      href={selectedClan.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link p-1 text-0"
                    >
                      <span className="icon icon-20 text-ui-300 icon-logo-youtube" />
                    </a>
                  )}
                  {selectedClan.social?.twitter && (
                    <a
                      href={selectedClan.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link p-1 text-0"
                    >
                      <span className="icon icon-20 text-ui-300 icon-logo-twitter" />
                    </a>
                  )}
                </div>
                {selectedClan.isYou ? (
                  <div className="space-y-2">
                    <div className="surface surface-ui-600 rounded p-3 space-y-3">
                      <div className="text-center text-ui-100">
                        You have <b>3</b> pending applications
                      </div>
                      <div className="flex gap-2">
                        <Link
                          href={`/prototype/clans/1?tab=applications${prototype.getURLparams()}`}
                        >
                          <a
                            type="button"
                            className="button button-sm button-primary flex-1"
                          >
                            <span className="icon icon-a-time" />
                            <span>View applicants</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    {hasAccepted ? (
                      <>
                        <div className="surface surface-ui-600 rounded p-3 space-y-3">
                          <div className="text-center">
                            Welcome to the {selectedClan.nickname} clan{" "}
                            {prototype.getUserByID(1).nickname}!
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {selectedClan.isPublic ? (
                          <div className="surface surface-ui-600 rounded p-3 space-y-3">
                            <div className="text-center">
                              This Clan is open to everyone.
                            </div>
                            <div className="flex gap-2">
                              <Link href="#">
                                <a
                                  type="button"
                                  className="button button-sm button-primary flex-1"
                                >
                                  <span>Join clan</span>
                                </a>
                              </Link>
                            </div>
                          </div>
                        ) : (
                          <>
                            {selectedClan.hasInvitedYou ? (
                              <div className="surface surface-ui-600 rounded p-3 space-y-3">
                                <div className="text-center">
                                  Congratulations, you have been invited to join
                                  this clan.
                                </div>
                                <div className="flex gap-2">
                                  <Link href="#">
                                    <a
                                      type="button"
                                      className="button button-sm button-success flex-1"
                                    >
                                      <span>Accept</span>
                                    </a>
                                  </Link>
                                  <Link href="#">
                                    <a
                                      type="button"
                                      className="button button-sm button-error flex-1"
                                    >
                                      <span>Decline</span>
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            ) : (
                              <div className="surface surface-ui-600 rounded p-3 space-y-3">
                                <div className="text-center">
                                  This Clan is private.
                                </div>
                                <div className="flex gap-2">
                                  <Link href="#">
                                    <a
                                      type="button"
                                      className="button button-sm button-primary flex-1"
                                    >
                                      <span>Apply to join</span>
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </div>
            </section>
            {selectedClan.games && (
              <section className="surface md:rounded">
                <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                  <h2 className="h6 text-ui-100">
                    Games ({selectedClan.games.length})
                  </h2>
                  <Link
                    href={`${
                      selectedClan.id
                    }?tab=games${prototype.getURLparams()}`}
                  >
                    <a className="link link-hover text-ui-300 text-sm hidden">
                      View
                    </a>
                  </Link>
                </div>
                <ul className="flex gap-4 p-4">
                  {selectedClan.games?.map((game, gameIndex) => (
                    <li key={gameIndex}>
                      <GameIcon game={game} />
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
          <div className="flex-1 space-y-4 lg:overflow-hidden max-w-[100%]">
            <section className="surface md:rounded">
              <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                <h2 className="h6 text-ui-100">Stats</h2>
                <Link
                  href={`${
                    selectedClan.id
                  }?tab=achievements${prototype.getURLparams()}`}
                >
                  <a className="link link-hover text-ui-300 text-sm hidden">
                    View
                  </a>
                </Link>
              </div>
              <div className="leading-tight grid grid-cols-2 xl:grid-cols-4 flex-1 gap-4 p-4">
                <div className="pl-4 border-l border-ui-600">
                  <div className="text-xs lg:text-sm text-ui-200 uppercase">
                    Ladders played
                  </div>
                  <div className="text-ui-100 text-xl lg:text-3xl">523</div>
                  <div className="text-xs lg:text-sm text-ui-300">Top 25%</div>
                </div>
                <div className="pl-4 border-l border-ui-600">
                  <div className="text-xs lg:text-sm text-ui-200 uppercase">
                    Avg. placement
                  </div>
                  <div className="text-ui-100 text-xl lg:text-3xl">#42</div>
                  <div className="text-xs lg:text-sm text-ui-300">Top 18%</div>
                </div>
                <div className="pl-4 border-l border-ui-600">
                  <div className="text-xs lg:text-sm text-ui-200 uppercase">
                    Times in top 50
                  </div>
                  <div className="text-ui-100 text-xl lg:text-3xl">4</div>
                  <div className="text-xs lg:text-sm text-ui-300">Top 11%</div>
                </div>
              </div>
            </section>

            <section className="surface md:rounded">
              <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                <h2 className="h6 text-ui-100">
                  Members ({selectedClan.members.length})
                </h2>
                {selectedClan.isYou ? (
                  <>
                    <Link
                      href={`${
                        selectedClan.id
                      }?tab=members${prototype.getURLparams()}`}
                    >
                      <a className="link link-hover text-ui-300 text-sm">
                        View
                      </a>
                    </Link>
                    {/*
                  <Link href={`${selectedClan.id}?tab=applications${prototype.getURLparams()}`}>
                    <a className="link link-hover text-ui-300 text-sm">
                      Applications
                    </a>
                  </Link>
                */}
                  </>
                ) : (
                  <Link
                    href={`${
                      selectedClan.id
                    }?tab=members${prototype.getURLparams()}`}
                  >
                    <a className="link link-hover text-ui-300 text-sm">View</a>
                  </Link>
                )}
              </div>
              <div>
                <Slider
                  itemWidth={144 + 16}
                  bgColor="from-ui-800 via-ui-800 to-ui-800/0"
                >
                  <ul className="flex px-4">
                    {selectedClan.members?.map((user, userIndex) => (
                      <Link
                        key={userIndex}
                        href={`/prototype/profile/${
                          prototype.getUserByID(user).id
                        }${prototype.getURLparams()}`}
                      >
                        <li className="interactive flex flex-col items-center gap-4 w-36 p-2 leading-none">
                          <Avatar
                            id={user}
                            hasTooltip={true}
                            size="avatar-md"
                          />

                          <div className="flex gap-2 items-center">
                            <span
                              className={`${
                                prototype.getUserByID(user)?.isPremium
                                  ? "text-premium-500"
                                  : ""
                              }`}
                            >
                              {prototype.getUserByID(user).nickname}
                            </span>
                            {selectedClan.admin ===
                              prototype.getUserByID(user).id && (
                              <span className="icon icon-chess-king text-sm" />
                            )}
                          </div>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </Slider>
              </div>
            </section>

            <section className="surface md:rounded">
              <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                <h2 className="h6 text-ui-100">Ladders</h2>
                <Link
                  href={`${
                    selectedClan.id
                  }?tab=activity${prototype.getURLparams()}`}
                >
                  <a className="link link-hover text-ui-300 text-sm">View</a>
                </Link>
              </div>
              <div>
                {selectedClan.ladders ? (
                  <Slider
                    itemWidth={397 + 16}
                    bgColor="from-ui-800 via-ui-800 to-ui-800/0"
                  >
                    <div className="flex gap-6 py-2 px-6 hoverhighlight">
                      {selectedClan.ladders?.map((ladder, ladderIndex) => (
                        <>
                          <LadderCardSecondary
                            key={ladderIndex}
                            ladder={prototype.getLadderByID(
                              ladder.gameSlug,
                              ladder.id
                            )}
                            isHorizontal={false}
                            isClan={false}
                            className="surface-ui-700"
                          />
                        </>
                      ))}
                    </div>
                  </Slider>
                ) : (
                  <div className="text-center p-4">
                    <span className="icon icon-ladder text-6xl text-ui-500" />
                    <p className="mt-2 text-ui-300">
                      {selectedClan.nickname} is not competing in any ladders
                    </p>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
}
