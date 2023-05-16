import React, { useEffect, useState, useContext } from "react";

import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import ReadMore from "../../../../components/ReadMore/ReadMore";
import Link from "next/link";
import Slider from "../../../../components/Slider/Slider";
import LadderCardSecondary from "../../../../components/Ladder/LadderCardSecondary";
import Avatar from "../../../../components/Avatar/Avatar";
import Chat from "../../../../components/Chat/Chat";
import GameIcon from "../../../../components/GameIcon/GameIcon";
import { UiContext } from "../../../../contexts/ui";
import Tooltip from "../../../../components/Tooltip/Tooltip";
import ModalClanLeave from "../modal-clan-leave";
import ModalGiftTokens from "../modal-gift-tokens";

export default function TabClanChat() {
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
      {selectedClan && (
        <>
          <div className="flex flex-col lg:flex-row items-start gap-y-4 lg:gap-x-4 animate-slide-in-bottom">
            <div className="w-full lg:w-80 space-y-4">
              {/*
              <section className="surface md:rounded relative">
                <div className="relative flex items-center justify-center">
                  <div className="relative z-10 mt-4">
                    <div className="avatar avatar-sm avatar-squircle">
                      <div>
                        <img src={selectedClan.avatar} alt="avatar" />
                      </div>
                    </div>
                    {isAdmin && (
                      <button
                        type="button"
                        className="button button-sm button-tertiary rounded-full absolute z-20 bottom-0 -right-3"
                      >
                        <span className="icon icon-pen-2" />
                      </button>
                    )}
                  </div>
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1672241804/Stryda/illustrations/Generic_bg.png"
                    className="aspect-banner absolute z-0 inset-x-0 top-0 rounded-t bg-ui-800/75 border-b border-ui-700"
                    alt=""
                  />
                </div>
                <div className="p-4 pt-2">
                  <h2
                    className="h5 text-center leading-none"
                    onClick={() => setIsAdmin(!isAdmin)}
                  >
                    &#91;
                    {selectedClan.tag}
                    &#93; {selectedClan.nickname}
                  </h2>
                  {isAdmin && (
                    <>
                      <Link href="settings">
                        <button
                          type="button"
                          className="button button-sm button-tertiary w-full mt-4"
                        >
                          <span className="icon icon-cogwheel" />
                          <span>Clan settings</span>
                        </button>
                      </Link>
                      <div className="surface surface-ui-600 rounded p-2 space-y-2 mt-4">
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
                    </>
                  )}
                </div>
              </section>
                  */}
              <section className="surface md:rounded">
                <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
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
                <div className="max-h-60 overflow-y-auto scrollbar-desktop">
                  {selectedClan.ladders ? (
                    <div className="p-4 space-y-4">
                    {selectedClan.ladders?.map((ladder, ladderIndex) => (
                        <Link
                        key={ladderIndex}
                        href={`/prototype/${
                          prototype.getGameBySlug(ladder.gameSlug).slug
                        }/ladders/${
                          ladder.id
                        }?tab=clan-leaderboard${prototype.getURLparams()}`}
                      >
                        <div className="rounded surface surface-ui-600 overflow-hidden interactive">
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
              <section className="surface md:rounded">
                <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
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
                    }?tab=members${prototype.getURLparams()}`}
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
                          <div className="item-image ml-2">
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
              {/*
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
            */}
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
          <section className="text-ui-100/0 h-0">
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
    </>
  );
}
