import React, { useEffect, useState, useContext } from "react";

import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import ReadMore from "../../../../components/ReadMore/ReadMore";
import Link from "next/link";
import Slider from "../../../../components/Slider/Slider";
import LadderCardSecondary from "../../../../components/Ladder/LadderCardSecondary";
import Avatar from "../../../../components/Avatar/Avatar";
import Chat from "../../../../components/Chat/Chat";
import GameIcon from "../../../../components/GameIcon/GameIcon";
import { UiContext } from "@/contexts/ui";
import Tooltip from "../../../../components/Tooltip/Tooltip";
import ModalClanLeave from "../modal-clan-leave";
import ModalGiftTokens from "../modal-gift-tokens";

export default function TabClanOverview() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedClan, setSelectedClan] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [hasMembersActionsInPlayerCard, setHasMembersActionsInPlayerCard] =
    useState(false);
  const hasAccepted = query.hasaccepted === "true" ? true : false;
  const { clan_id } = router.query;

  const getClanMembers = () => {
    return prototype.users.filter((user) => {
      return user.clan === selectedClan.id;
    });
  };

  useEffect(() => {
    setSelectedClan(prototype.getClanByID(clan_id));
  }, [clan_id]);

  function openModalClanLeave() {
    uiContext.openModal(<ModalClanLeave />);
  }

  function openModalGiftTokens(nickname) {
    uiContext.openModal(<ModalGiftTokens selectedUser={nickname} />);
  }

  return (
    <>
      {selectedClan && selectedClan.isYou && (
        <>
          <div className="flex flex-col lg:flex-row items-start gap-y-4 lg:gap-x-4 animate-slide-in-bottom">
            <div className="w-full lg:w-80 space-y-4">
              <section className="surface md:rounded">
                <div className="flex items-baseline justify-between border-b border-b-ui-700 px-3 py-2">
                  <h2 className="h6 text-ui-100">
                    Ongoing Ladders ({selectedClan.ladders?.length})
                  </h2>
                  <Link
                    href={`${
                      selectedClan.id
                    }?tab=activity${prototype.getURLparams()}`}
                  >
                    <a className="link link-hover text-ui-300 text-sm leading-none">
                      View
                    </a>
                  </Link>
                </div>
                <div>
                  {selectedClan.ladders ? (
                    <Slider
                      itemWidth={256 + 16}
                      bgColor="from-ui-800 via-ui-800 to-ui-800/0"
                    >
                      <div className="grid grid-flow-col grid-rows-2 gap-4 px-4">
                        {selectedClan.ladders?.map((ladder, ladderIndex) => (
                          <Link
                            key={ladderIndex}
                            href={`/prototype/${
                              prototype.getGameBySlug(ladder.gameSlug).slug
                            }/ladders/${
                              ladder.id
                            }?tab=clan-leaderboard${prototype.getURLparams("&")}`}
                          >
                            <div className="rounded surface surface-ui-600 overflow-hidden w-64 shrink-0 interactive">
                              <div className="relative">
                                <div className="absolute top-1 left-1">
                                  <Tooltip tooltip="Valorant">
                                    <GameIcon
                                      game={
                                        prototype.getGameBySlug(ladder.gameSlug)
                                          .id
                                      }
                                    />
                                  </Tooltip>
                                </div>
                                <img
                                  src={
                                    prototype.getLadderByID(
                                      ladder.gameSlug,
                                      ladder.id
                                    ).cover
                                  }
                                  className="aspect-cover object-cover"
                                  alt=""
                                />
                              </div>
                              <div className="p-2 border-t border-ui-500 flex justify-between items-baseline gap-2">
                                <p className="truncate flex-1">
                                  {
                                    prototype.getLadderByID(
                                      ladder.gameSlug,
                                      ladder.id
                                    ).name
                                  }
                                </p>
                                <p className="text-lg text-ui-100">#42</p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </Slider>
                  ) : (
                    <div className="text-center p-4">
                      <span className="icon icon-ladder text-6xl text-ui-500" />
                      <p className="mt-2 text-ui-300">
                        {selectedClan.nickname} has not entered any Ladders
                      </p>
                    </div>
                  )}
                </div>
              </section>
              <section className="surface md:rounded">
                <div className="flex items-baseline justify-between border-b border-b-ui-700 px-3 py-2">
                  <h2
                    className="h6 text-ui-100"
                    onClick={() =>
                      setHasMembersActionsInPlayerCard(
                        !hasMembersActionsInPlayerCard
                      )
                    }
                  >
                    Members ({getClanMembers().length})
                  </h2>
                  <Link
                    href={`${
                      selectedClan.id
                    }?tab=members${prototype.getURLparams("&")}`}
                  >
                    <a className="link link-hover text-ui-300 text-sm leading-none">
                      View
                    </a>
                  </Link>
                </div>
                {hasMembersActionsInPlayerCard ? (
                  <ul className="flex flex-wrap p-4 gap-4">
                    {getClanMembers().map((item, itemIndex) => (
                      <li className="" key={itemIndex}>
                        <Avatar
                          id={item.id}
                          hasTooltip={true}
                          size="avatar-xs"
                        />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="max-h-60 overflow-y-auto scrollbar-desktop">
                    <ul>
                      {getClanMembers().map((item, itemIndex) => (
                        <li key={itemIndex} className="item">
                          <div className="item-image">
                            <Link
                              href={`/prototype/profile/${
                                prototype.getUserByID(item.id).id
                              }${prototype.getURLparams()}`}
                            >
                              <Avatar id={item.id} />
                            </Link>
                          </div>
                          <div className="item-body">
                            <Link
                              href={`/prototype/profile/${
                                prototype.getUserByID(item.id).id
                              }${prototype.getURLparams()}`}
                            >
                              <div className="item-title flex gap-2 items-center interactive">
                                <span
                                  className={`${
                                    prototype.getUserByID(item.id)?.isPremium
                                      ? "text-premium-500"
                                      : ""
                                  }`}
                                >
                                  {prototype.getUserByID(item.id).nickname}
                                </span>
                                {selectedClan.admin ===
                                  prototype.getUserByID(item.id).id && (
                                  <span className="icon icon-crown text-sm" />
                                )}
                              </div>
                            </Link>
                          </div>
                          <div className="item-actions">
                            {isAdmin ? (
                              <div
                                className={`dropdown dropdown-left ${
                                  itemIndex + 1 === getClanMembers().length
                                    ? "dropdown-end"
                                    : ""
                                }`}
                              >
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
                                    {selectedClan.admin ===
                                    prototype.getUserByID(item.id).id ? (
                                      <>
                                        <li>
                                          <a onClick={openModalClanLeave}>
                                            <span className="icon icon-leave" />
                                            <span>Leave clan</span>
                                          </a>
                                        </li>
                                      </>
                                    ) : (
                                      <>
                                        <li>
                                          <a>
                                            <span className="icon icon-chess-king" />
                                            <span>Promote to captain</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a>
                                            <span className="icon icon-s-ban" />
                                            <span>Kick</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            onClick={() =>
                                              openModalGiftTokens(item.nickname)
                                            }
                                          >
                                            <span className="icon icon-token" />
                                            <span>Gift tokens</span>
                                          </a>
                                        </li>
                                      </>
                                    )}
                                  </ul>
                                </div>
                              </div>
                            ) : (
                              <>
                                {selectedClan.admin !==
                                  prototype.getUserByID(item.id).id && (
                                  <Tooltip tooltip={`Gift token`}>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        openModalGiftTokens(item.nickname)
                                      }
                                      className="button button-tertiary rounded-full"
                                    >
                                      <span className="icon icon-token" />
                                    </button>
                                  </Tooltip>
                                )}
                              </>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            </div>
            <div className="flex-1 surface md:rounded lg:overflow-hidden max-w-[100%] h-[calc(100dvh-159px-1rem)] hidden lg:flex flex-col relative">
              <div className="absolute inset-0 overflow-hidden">
                <Chat
                  variant="secondary"
                  isAbsolute={true}
                  maxheight={`h-auto`}
                />
              </div>
            </div>
          </div>
          {/* for demo purposes only */}
          <section className="text-ui-100/0 hover:text-ui-100 inline-flex flex-col">
            <div onClick={() => setIsAdmin(!isAdmin)}>Toggle admin view</div>
            <div
              onClick={() =>
                setHasMembersActionsInPlayerCard(!hasMembersActionsInPlayerCard)
              }
            >
              Toggle members view
            </div>
          </section>
        </>
      )}
      {selectedClan && !selectedClan.isYou && (
        <div className="flex flex-col lg:flex-row items-start gap-y-4 lg:gap-x-4 animate-slide-in-bottom">
          <div className="w-full lg:w-80 space-y-4">
            <section className="surface md:rounded">
              <div className="flex items-baseline justify-between border-b border-b-ui-700 px-3 py-2">
                <h2 className="h6 text-ui-100">About</h2>
                {selectedClan.isYou && (
                  <Link
                    href={`/prototype/profile/settings${prototype.getURLparams()}`}
                  >
                    <a className="link link-hover text-ui-300 text-sm leading-none">
                      Edit
                    </a>
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
                            Welcome to the x{selectedClan.nickname} clan{" "}
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
                <div className="flex items-baseline justify-between border-b border-b-ui-700 px-3 py-2">
                  <h2 className="h6 text-ui-100">
                    Games ({selectedClan.games.length})
                  </h2>
                  <Link
                    href={`${
                      selectedClan.id
                    }?tab=games${prototype.getURLparams()}`}
                  >
                    <a className="link link-hover text-ui-300 text-sm leading-none hidden">
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
              <div className="flex items-baseline justify-between border-b border-b-ui-700 px-3 py-2">
                <h2 className="h6 text-ui-100">Stats</h2>
                <Link
                  href={`${
                    selectedClan.id
                  }?tab=stats${prototype.getURLparams()}`}
                >
                  <a className="link link-hover text-ui-300 text-sm leading-none">
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
              <div className="flex items-baseline justify-between border-b border-b-ui-700 px-3 py-2">
                <h2 className="h6 text-ui-100">
                  Members ({getClanMembers().length})
                </h2>
                <Link
                  href={`${
                    selectedClan.id
                  }?tab=members${prototype.getURLparams()}`}
                >
                  <a className="link link-hover text-ui-300 text-sm leading-none">
                    View
                  </a>
                </Link>
              </div>
              <div>
                <Slider
                  itemWidth={144 + 16}
                  bgColor="from-ui-800 via-ui-800 to-ui-800/0"
                >
                  <ul className="flex px-4">
                    {getClanMembers().map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        href={`/prototype/profile/${
                          prototype.getUserByID(item.id).id
                        }${prototype.getURLparams()}`}
                      >
                        <li className="interactive flex flex-col items-center gap-4 w-36 p-2 leading-none">
                          <Avatar
                            id={item.id}
                            hasTooltip={true}
                            size="avatar-md"
                          />

                          <div className="flex gap-2 items-center">
                            <span
                              className={`${
                                prototype.getUserByID(item.id)?.isPremium
                                  ? "text-premium-500"
                                  : ""
                              }`}
                            >
                              {prototype.getUserByID(item.id).nickname}
                            </span>
                            {selectedClan.admin ===
                              prototype.getUserByID(item.id).id && (
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
              <div className="flex items-baseline justify-between border-b border-b-ui-700 px-3 py-2">
                <h2 className="h6 text-ui-100">
                  Ladders ({selectedClan.ladders?.length})
                </h2>
                <Link
                  href={`${
                    selectedClan.id
                  }?tab=activity${prototype.getURLparams()}`}
                >
                  <a className="link link-hover text-ui-300 text-sm leading-none">
                    View
                  </a>
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
                            isClan={true}
                            clanID={selectedClan.id}
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
                      {selectedClan.nickname} has not entered any Ladders
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
