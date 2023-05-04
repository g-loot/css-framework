import React, { useEffect, useState, useContext } from "react";

import { UiContext } from "../../../../contexts/ui";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import Link from "next/link";
import Avatar from "../../../../components/Avatar/Avatar";
import GameIcon from "../../../../components/GameIcon/GameIcon";
import ModalGiftTokens from "../modal-gift-tokens";
import ButtonSorting from "../../../../components/Button/ButtonSorting";
import Tooltip from "../../../../components/Tooltip/Tooltip";

export default function TabClanMembers() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedClan, setSelectedClan] = useState(null);
  const { clan_id } = router.query;
  const modalGiftTokens = query.modalgifttokens === "true" ? true : false;
  const [hasOnlyOne, setHasOnlyOne] = useState(false);
  const [selectedUser, setSelectedUser] = useState(
    prototype.getUserByID(2).nickname
  );

  function openModalGiftTokens() {
    uiContext.openModal(
      <ModalGiftTokens selectedUser={selectedUser}></ModalGiftTokens>
    );
  }

  useEffect(() => {
    if (modalGiftTokens) {
      openModalGiftTokens();
    }
  }, [modalGiftTokens]);

  function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    setSelectedClan(prototype.getClanByID(clan_id));
  }, [clan_id]);

  return (
    <>
      {selectedClan && (
        <>
          {/*
          <div className="overflow-y-hidden overflow-x-auto scrollbar-desktop px-4 sm:px-0 pb-4">
            <table className="table table-rounded rounded-xl w-full">
              <thead>
                <tr>
                  <th>
                    <ButtonSorting>User</ButtonSorting>
                  </th>
                  <th className="text-center">
                    <ButtonSorting>Level</ButtonSorting>
                  </th>
                  <th className="text-center">
                    <ButtonSorting>avg. Ladder placement</ButtonSorting>
                  </th>
                  <th className="text-center">
                    <ButtonSorting>Ladders</ButtonSorting>
                  </th>
                  <th className="text-center">
                    <ButtonSorting>Missions</ButtonSorting>
                  </th>
                </tr>
              </thead>
              <tbody>
                {selectedClan.members?.map((item, itemIndex) => (
                  <tr
                    key={itemIndex}
                    className="animate-slide-in-bottom animate-delay"
                    style={{
                      "--delay": "calc(" + itemIndex + " * 0.05s)",
                    }}
                  >
                    <td>
                      <Link
                        href={`/prototype/profile/${item}
                          `}
                      >
                        <button
                          type="button"
                          className="flex gap-3 items-center self-center interactive"
                        >
                          <Avatar
                            id={item}
                            hasTooltip={true}
                            size="avatar-sm"
                          />
                          <div className="space-y-0.5">
                            <div
                              className={`${
                                prototype.getUserByID(item)?.isPremium
                                  ? "text-premium-500"
                                  : ""
                              }`}
                            >
                              {prototype.getUserByID(item)?.clan && (
                                <>
                                  &#91;
                                  {
                                    prototype.getClanByID(
                                      prototype.getUserByID(item)?.clan
                                    )?.tag
                                  }
                                  &#93;{" "}
                                </>
                              )}
                              {prototype.getUserByID(item)?.nickname}
                            </div>
                            <div className="flex gap-1">
                              <div className="flex gap-1">
                                {prototype
                                  .getUserByID(item)
                                  .games?.map((game, gameIndex) => (
                                    <GameIcon
                                      key={gameIndex}
                                      game={game}
                                      size="text-base"
                                    />
                                  ))}
                              </div>
                            </div>
                          </div>
                        </button>
                      </Link>
                    </td>
                    <td>
                      <div className="text-ui-300 text-center">
                        {prototype.getUserByID(item)?.level}
                      </div>
                    </td>
                    <td>
                      <div className="text-ui-300 text-center">
                        #{RandomNumber(50, 300)}
                      </div>
                    </td>
                    <td>
                      <div className="text-ui-300 text-center">
                        {prototype.getUserByID(item)?.stats.playedLadders}
                      </div>
                    </td>
                    <td>
                      <div className="text-ui-300 text-center">
                        {RandomNumber(10, 300)}
                      </div>
                    </td>
                    {selectedClan.isYou && (
                      <td className="w-14">
                        <div
                          className={`dropdown dropdown-left ${
                            itemIndex + 1 === selectedClan.members?.length
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
                                prototype.getUserByID(item).id && (
                                <>
                                  <li>
                                    <a>
                                      <span className="icon icon-leave" />
                                      <span>Leave clan</span>
                                    </a>
                                  </li>
                                </>
                              )}
                              {selectedClan.admin !==
                                prototype.getUserByID(item).id && (
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
                                      onClick={() => {
                                        setSelectedUser(
                                          prototype.getUserByID(item).nickname
                                        );
                                        openModalGiftTokens();
                                      }}
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
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
                                    */}
          <ul className="items-spaced space-y-2">
            {selectedClan.members?.map((item, itemIndex) => (
              <li
                key={item.id}
                className="item animate-slide-in-bottom animate-delay relative z-0 hover:z-40"
                style={{
                  "--delay": "calc(" + Math.round(itemIndex + 1) + " * 0.05s)",
                }}
              >
                <div className="item-image pr-2">
                  <Link
                    href={`/prototype/profile/${
                      prototype.getUserByID(item).id
                    }${prototype.getURLparams()}`}
                  >
                    <Avatar id={item} size="avatar-sm" hasTooltip={true} />
                  </Link>
                </div>
                <div className="item-body">
                  <Link
                    href={`/prototype/profile/${
                      prototype.getUserByID(item).id
                    }${prototype.getURLparams()}`}
                  >
                    <div className="item-title flex gap-2 items-center interactive">
                      <span
                        className={`${
                          prototype.getUserByID(item)?.isPremium
                            ? "text-premium-500"
                            : ""
                        }`}
                      >
                        {prototype.getUserByID(item).nickname}
                      </span>
                      {selectedClan.admin ===
                        prototype.getUserByID(item).id && (
                        <span className="icon icon-chess-king text-sm" />
                      )}
                    </div>
                  </Link>
                  <div className="text-ui-300 text-xs flex gap-1 items-center">
                    {/*<span>{prototype.getUserByID(item).lang}</span> <span>•</span> */}
                    {prototype.getUserByID(item)?.isOnline ? (
                      <div className="chip chip-status chip-success chip-xs">
                        <span className="badge" />
                        <span>online</span>
                      </div>
                    ) : (
                      <div className="chip chip-status chip-xs">
                        <span className="badge" />
                        <span>last seen 3 days ago</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="item-actions">
                  <div
                    className="flex gap-1"
                    onClick={() => setHasOnlyOne(!hasOnlyOne)}
                  >
                    {prototype
                      .getUserByID(item)
                      .games?.map((game, gameIndex) => (
                        <GameIcon key={gameIndex} game={game} />
                      ))}
                  </div>
                </div>
                {selectedClan.isYou && (
                  <>
                    {hasOnlyOne ? (
                      <Tooltip tooltip={`Gift token`}>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedUser(
                              prototype.getUserByID(item).nickname
                            );
                            openModalGiftTokens();
                          }}
                          className="button button-tertiary rounded-full"
                        >
                          <span className="icon icon-token" />
                        </button>
                      </Tooltip>
                    ) : (
                      <div className="item-actions">
                        <div
                          className={`dropdown dropdown-left ${
                            itemIndex + 1 === selectedClan.members?.length
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
                                prototype.getUserByID(item).id && (
                                <>
                                  <li>
                                    <a>
                                      <span className="icon icon-leave" />
                                      <span>Leave clan</span>
                                    </a>
                                  </li>
                                </>
                              )}
                              {selectedClan.admin !==
                                prototype.getUserByID(item).id && (
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
                                      onClick={() => {
                                        setSelectedUser(
                                          prototype.getUserByID(item).nickname
                                        );
                                        openModalGiftTokens();
                                      }}
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
                      </div>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
