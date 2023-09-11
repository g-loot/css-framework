import React, { useEffect, useState, useContext } from "react";

import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import Link from "next/link";
import Avatar from "../../../../components/Avatar/Avatar";
import Chat from "../../../../components/Chat/Chat";
import GameIcon from "../../../../components/GameIcon/GameIcon";
import { UiContext } from "@/contexts/ui";
import Tooltip from "../../../../components/Tooltip/Tooltip";
import ModalClanLeave from "../modal-clan-leave";
import ModalGiftTokens from "../modal-gift-tokens";
import ModalLadderResults from "../../ladders/modal-ladderresults";

export default function TabClanChat() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedClan, setSelectedClan] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [hasMembersActionsInPlayerCard, setHasMembersActionsInPlayerCard] =
    useState(true);
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

  function openmodalLadderResults(ladder) {
    uiContext.openModal(<ModalLadderResults item={ladder} />);
  }

  return (
    <>
      {selectedClan && (
        <>
          <div className="flex flex-col lg:flex-row items-stretch gap-y-4 lg:gap-x-4 animate-slide-in-bottom h-[calc(100dvh-129px-1rem)]">
            <div className="w-full lg:w-80 flex flex-col gap-y-4">
              <section className="flex-1 flex flex-col surface md:rounded">
                <div className="flex items-baseline justify-between border-b border-b-ui-700 px-3 py-2">
                  <h2 className="h6 text-ui-100">
                    Ladders ({selectedClan.ladders?.length})
                  </h2>
                  <Link
                    href={`${
                      selectedClan.id
                    }?tab=activity${prototype.getURLparams("&")}`}
                  >
                    <a className="link link-hover text-ui-300 text-sm leading-none">
                      View
                    </a>
                  </Link>
                </div>
                <div className="flex-1 relative">
                  <div className="absolute inset-0 overflow-y-auto scrollbar-desktop">
                    {selectedClan.ladders ? (
                      <div className="p-4 space-y-4">
                        {selectedClan.ladders?.map((ladder, ladderIndex) => (
                          <Link
                            key={ladderIndex}
                            href={`/stryda/${
                              prototype.getGameBySlug(ladder.gameSlug).slug
                            }/ladders/${
                              ladder.id
                            }?tab=clan-leaderboard${prototype.getURLparams("&")}`}
                          >
                            <div className="rounded surface surface-ui-600 overflow-hidden interactive">
                              {prototype.getLadderByID(
                                ladder.gameSlug,
                                ladder.id
                              )?.hasClaim && (
                                <div className="card-overlay">
                                  <div>
                                    <button
                                      type="button"
                                      className="button button-primary"
                                      onClick={() =>
                                        openmodalLadderResults(
                                          prototype.getLadderByID(
                                            ladder.gameSlug,
                                            ladder.id
                                          )
                                        )
                                      }
                                    >
                                      <span>View results</span>
                                    </button>
                                  </div>
                                </div>
                              )}
                              <div className="relative">
                                <div className="absolute top-1 left-1">
                                  <div className="rounded bg-ui-800/90 p-px pr-2 flex gap-1 items-center text-xs text-ui-200">
                                    <GameIcon
                                      game={
                                        prototype.getGameBySlug(ladder.gameSlug)
                                          .id
                                      }
                                      size="text-lg"
                                    />
                                    <span>
                                      {
                                        prototype.getLadderByID(
                                          ladder.gameSlug,
                                          ladder.id
                                        ).gameMode
                                      }
                                    </span>
                                    {prototype.getLadderByID(
                                      ladder.gameSlug,
                                      ladder.id
                                    ).status !== "finished" && (
                                      <span
                                        className={`text-main card-status capitalize animate-pulse`}
                                      >
                                        {prototype.getLadderByID(
                                          ladder.gameSlug,
                                          ladder.id
                                        ).isEnrolled ? (
                                          <>Enrolled</>
                                        ) : (
                                          <>
                                            {
                                              prototype.getLadderByID(
                                                ladder.gameSlug,
                                                ladder.id
                                              ).status
                                            }
                                          </>
                                        )}
                                      </span>
                                    )}
                                  </div>
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
                                <p className="text-lg text-ui-100">
                                  #
                                  {
                                    prototype.getLadderByID(
                                      ladder.gameSlug,
                                      ladder.id
                                    )?.clanLeaderboard?.stats?.placement
                                  }
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center p-4">
                        <span className="icon icon-ladder text-6xl text-ui-500" />
                        <p className="mt-2 text-ui-300">
                          {selectedClan.nickname} has not entered any Ladders
                        </p>
                      </div>
                    )}
                  </div>
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
                  <ul className="flex flex-wrap px-4 py-3 gap-3">
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
                          <div className="item-image ml-2">
                            <Link
                              href={`/stryda/profile/${
                                prototype.getUserByID(item.id).id
                              }${prototype.getURLparams()}`}
                            >
                              <Avatar id={item.id} />
                            </Link>
                          </div>
                          <div className="item-body">
                            <Link
                              href={`/stryda/profile/${
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
            <div className="flex-1 surface md:rounded lg:overflow-hidden max-w-[100%] hidden lg:flex flex-col relative">
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
            <a onClick={() => setIsAdmin(!isAdmin)}>
              Toggle admin view {isAdmin ? "ON" : "OFF"}
            </a>
            <a
              onClick={() =>
                setHasMembersActionsInPlayerCard(!hasMembersActionsInPlayerCard)
              }
            >
              Toggle members view {hasMembersActionsInPlayerCard ? "ON" : "OFF"}
            </a>
          </section>
        </>
      )}
    </>
  );
}
