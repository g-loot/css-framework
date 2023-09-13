import React, { useEffect, useState, useContext } from "react";

import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import Link from "next/link";
import Avatar from "@/components/Avatar/Avatar";
import GameIcon from "@/components/GameIcon/GameIcon";
import ModalGiftTokens from "../modal-gift-tokens";
import ModalClanInvite from "../modal-clan-invite";
import ButtonSorting from "@/components/Button/ButtonSorting";
import Tooltip from "@/components/Tooltip/Tooltip";
import ButtonFeedback from "@/components/Button/ButtonFeedback";

export default function TabClanMembers() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedClan, setSelectedClan] = useState(null);
  const { clan_id } = router.query;
  const modalGiftTokens = query.modalgifttokens === "true" ? true : false;
  const [hasOnlyOne, setHasOnlyOne] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const empty = query.empty === "true" ? true : false;
  const [isEmpty, setIsEmpty] = useState(empty);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, RandomNumber(500, 1000));
  }, []);

  function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const [selectedUser, setSelectedUser] = useState(
    prototype.getUserByID(2).nickname
  );

  const getClanMembers = () => {
    return prototype.users.filter((user) => {
      return user.clan === selectedClan.id;
    });
  };

  function openModalGiftTokens() {
    uiContext.openModal(<ModalGiftTokens selectedUser={selectedUser} />);
  }

  function openModalClanInvite() {
    uiContext.openModal(<ModalClanInvite />);
  }

  useEffect(() => {
    if (modalGiftTokens) {
      openModalGiftTokens();
    }
  }, [modalGiftTokens]);

  useEffect(() => {
    setSelectedClan(prototype.getClanByID(clan_id));
  }, [clan_id]);

  return (
    <>
      {selectedClan && (
        <>
          {isEmpty ? (
            <>
              <div className="surface rounded-lg px-4 py-8 text-center mb-4">
                <div className="max-w-xs mx-auto">
                  <span className="icon icon-multiple-11 text-6xl text-ui-500" />
                  {selectedClan.isYou ? (
                    <>
                      <div className="mt-2 mb-6">
                        <p className="text-sm text-ui-400">
                          The Clan has no members yet
                        </p>
                        <p className="text-lg text-ui-300">
                          Invite players to join your Clan and compete together
                        </p>
                      </div>
                      <button
                        type="button"
                        className="button button-primary"
                        onClick={() => {
                          openModalClanInvite();
                        }}
                      >
                        <span className="icon icon-a-add" />
                        <span>Invite players</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="mt-2">
                        <p className="text-lg text-ui-300">
                          This Clan has no members
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center px-4 sm:px-0 mb-0.5">
                <button
                  type="button"
                  className="button button-tertiary"
                  onClick={() => {
                    openModalClanInvite();
                  }}
                >
                  <span className="icon icon-a-add" />
                  <span>Invite players</span>
                </button>
                <div className="form-group">
                  <div className="input-group">
                    <span className="icon icon-zoom"></span>
                    <input
                      type="text"
                      name="search"
                      id="search"
                      placeholder="Search"
                      value={filter}
                      onChange={(event) => setFilter(event.target.value)}
                    />
                  </div>
                </div>
              </div>

              {loading ? (
                <section className="mt-2">
                  <div className="overflow-y-hidden overflow-x-auto scrollbar-desktop px-4 sm:px-0 pb-4">
                    <table className="table table-rounded rounded-xl is-loading w-full">
                      <tbody>
                        <tr className="h-12">
                          <th>1</th>
                          <td />
                        </tr>
                        <tr className="h-12">
                          <th>2</th>
                          <td />
                        </tr>
                        <tr className="h-12">
                          <th>3</th>
                          <td />
                        </tr>
                        <tr className="h-12">
                          <th>4</th>
                          <td />
                        </tr>
                        <tr className="h-12">
                          <th>5</th>
                          <td />
                        </tr>
                        <tr className="h-12">
                          <th>6</th>
                          <td />
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              ) : (
                <section>
                  <div className="overflow-y-hidden overflow-x-auto scrollbar-desktop px-4 sm:px-0 pb-4">
                    <table className="table table-rounded rounded-xl w-full">
                      <thead>
                        <tr>
                          <th>
                            <ButtonSorting>User</ButtonSorting>
                          </th>
                          <th className="max-xl:hidden text-left">
                            <ButtonSorting hasArrow={false}>
                              Riot ID
                            </ButtonSorting>
                          </th>
                          <th className="max-xl:hidden text-left">
                            <ButtonSorting hasArrow={false}>
                              Steam ID
                            </ButtonSorting>
                          </th>
                          <th className="max-xl:hidden">
                            <ButtonSorting>Ladders played</ButtonSorting>
                          </th>
                          <th className="max-xl:hidden">
                            <ButtonSorting>Best placement</ButtonSorting>
                          </th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        {getClanMembers()
                          ?.filter((item) => {
                            if (!filter) return true;
                            if (
                              prototype
                                .getUserByID(item.id)
                                .nickname.toLowerCase()
                                .includes(filter.toLowerCase())
                            ) {
                              return true;
                            }
                          })
                          .map((item, itemIndex) => (
                            <tr
                              key={item.id}
                              className="animate-slide-in-bottom animate-delay"
                              style={{
                                "--delay": "calc(" + itemIndex + " * 0.05s)",
                              }}
                            >
                              <td>
                                <Link
                                  href={`/prototype/profile/${item.id}
                          `}
                                >
                                  <button
                                    type="button"
                                    className="flex gap-3 items-center self-center interactive"
                                  >
                                    <Avatar
                                      id={item.id}
                                      hasTooltip={true}
                                      size="avatar-sm"
                                    />
                                    <div className="space-y-0.5">
                                      <div
                                        className={`${
                                          prototype.getUserByID(item.id)
                                            ?.isPremium
                                            ? "text-premium-500"
                                            : ""
                                        } ${
                                          prototype.getUserByID(item.id)?.isYou
                                            ? "text-main"
                                            : ""
                                        }`}
                                      >
                                        {prototype.getUserByID(item.id)
                                          ?.clan && (
                                          <>
                                            &#91;
                                            {
                                              prototype.getClanByID(
                                                prototype.getUserByID(item.id)
                                                  ?.clan
                                              )?.tag
                                            }
                                            &#93;{" "}
                                          </>
                                        )}
                                        {
                                          prototype.getUserByID(item.id)
                                            ?.nickname
                                        }
                                      </div>
                                      <div className="flex gap-1">
                                        <div className="flex gap-1">
                                          {prototype
                                            .getUserByID(item.id)
                                            .games.map((game, gameIndex) => (
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
                                {itemIndex != 2 && (
                                  <Tooltip
                                    placement="top"
                                    tooltip={
                                      <div className="text-sm w-64 pl-2 flex gap-1 items-center justify-center">
                                        <span className="uppercase text-ui-300">
                                          Riot ID:
                                        </span>
                                        <div className="flex-1">
                                          <div className="truncate">
                                            <a
                                              className="link"
                                              onClick={() => {
                                                uiContext.openToastr({
                                                  size: "medium",
                                                  text: "RIOT ID copied to your clipboard",
                                                  color: "green",
                                                  autoDelete: true,
                                                  autoDeleteDelay: 2500,
                                                });
                                                navigator.clipboard.writeText(
                                                  prototype.getUserByID(item.id)
                                                    .socials
                                                    ?.riotValorantNickname
                                                );
                                              }}
                                            >
                                              {
                                                prototype.getUserByID(item.id)
                                                  .nickname
                                              }
                                              {" #"}
                                              {
                                                prototype.getUserByID(item.id)
                                                  .socials?.riotValorantHashtag
                                              }
                                            </a>
                                          </div>
                                        </div>
                                        <div>
                                          <Tooltip
                                            placement="top"
                                            tooltip={
                                              <span className="text-sm">
                                                Click to copy RIOT ID
                                              </span>
                                            }
                                          >
                                            <ButtonFeedback
                                              value={`${
                                                prototype.getUserByID(item.id)
                                                  .socials?.riotValorantNickname
                                              }{" #"}${
                                                prototype.getUserByID(item.id)
                                                  .socials?.riotValorantHashtag
                                              }`}
                                              variant="button-tertiary rounded-full"
                                              icon="icon-document-copy"
                                              message="RIOT ID copied to your clipboard"
                                            />
                                          </Tooltip>
                                        </div>
                                      </div>
                                    }
                                  >
                                    <ButtonFeedback
                                      value={`${
                                        prototype.getUserByID(item.id).nickname
                                      } #1111`}
                                      variant="button-tertiary rounded-full"
                                      icon="icon-riotgames-symbol"
                                      message="RIOT ID copied to your clipboard"
                                    />
                                  </Tooltip>
                                )}
                              </td>
                              <td>
                                {itemIndex != 2 && (
                                  <Tooltip
                                    placement="top"
                                    tooltip={
                                      <div className="text-sm w-64 pl-2 flex gap-1 items-center justify-center">
                                        <span className="uppercase text-ui-300">
                                          Steam ID:
                                        </span>
                                        <div className="flex-1">
                                          <div className="truncate">
                                            <a
                                              className="link"
                                              onClick={() => {
                                                uiContext.openToastr({
                                                  size: "medium",
                                                  text: "Steam ID copied to your clipboard",
                                                  color: "green",
                                                  autoDelete: true,
                                                  autoDeleteDelay: 2500,
                                                });
                                                navigator.clipboard.writeText(
                                                  prototype.getUserByID(item.id)
                                                    .socials
                                                    ?.riotValorantNickname
                                                );
                                              }}
                                            >
                                              {
                                                prototype.getUserByID(item.id)
                                                  .nickname
                                              }
                                              {" #"}
                                              {
                                                prototype.getUserByID(item.id)
                                                  .socials?.riotValorantHashtag
                                              }
                                            </a>
                                          </div>
                                        </div>
                                        <div>
                                          <Tooltip
                                            placement="top"
                                            tooltip={
                                              <span className="text-sm">
                                                Click to copy Steam ID
                                              </span>
                                            }
                                          >
                                            <ButtonFeedback
                                              value={`${
                                                prototype.getUserByID(item.id)
                                                  .socials?.riotValorantNickname
                                              }{" #"}${
                                                prototype.getUserByID(item.id)
                                                  .socials?.riotValorantHashtag
                                              }`}
                                              variant="button-tertiary rounded-full"
                                              icon="icon-document-copy"
                                              message="Steam ID copied to your clipboard"
                                            />
                                          </Tooltip>
                                        </div>
                                      </div>
                                    }
                                  >
                                    <ButtonFeedback
                                      value={`${
                                        prototype.getUserByID(item.id).nickname
                                      } #1111`}
                                      variant="button-tertiary rounded-full"
                                      icon="icon-steam"
                                      message="Steam ID copied to your clipboard"
                                    />
                                  </Tooltip>
                                )}
                              </td>
                              <td className="max-xl:hidden">
                                <div className="text-ui-300">
                                  {RandomNumber(10, 9999)}
                                </div>
                              </td>
                              <td className="max-xl:hidden">
                                <div className="text-ui-300">
                                  #{RandomNumber(10, 300)}
                                </div>
                              </td>
                              <td className="text-right">
                                {selectedClan.isYou && (
                                  <>
                                    {hasOnlyOne ? (
                                      <Tooltip tooltip={`Gift token`}>
                                        <button
                                          type="button"
                                          onClick={() => {
                                            setSelectedUser(
                                              prototype.getUserByID(item.id)
                                                .nickname
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
                                            itemIndex + 1 ===
                                            selectedClan.members?.length
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
                                                prototype.getUserByID(item.id)
                                                  .id && (
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
                                                prototype.getUserByID(item.id)
                                                  .id && (
                                                <>
                                                  <li>
                                                    <a>
                                                      <span className="icon icon-chess-king" />
                                                      <span>
                                                        Promote to captain
                                                      </span>
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
                                                          prototype.getUserByID(
                                                            item.id
                                                          ).nickname
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
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}
            </>
          )}

          {/* for demo purposes only */}
          <section className="text-ui-100/0 hover:text-ui-100 inline-flex flex-col">
            <div onClick={() => setHasOnlyOne(!hasOnlyOne)}>
              Toggle admin view {hasOnlyOne ? "ON" : "OFF"}
            </div>
            <a onClick={() => setIsEmpty(!isEmpty)}>
              Toggle empty state {isEmpty ? "ON" : "OFF"}
            </a>
          </section>
        </>
      )}
    </>
  );
}
