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
  const [loading, setLoading] = useState(true);

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
        
          {loading ? (
            <section className="mt-2">
              <div className="overflow-y-hidden overflow-x-auto scrollbar-desktop px-4 sm:px-0 pb-4">
                <table className="table table-rounded rounded-xl is-loading w-full">
                  <tbody>
                    <tr className="h-20">
                      <th>1</th>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr className="h-20">
                      <th>2</th>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr className="h-20">
                      <th>3</th>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr className="h-20">
                      <th>4</th>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr className="h-20">
                      <th>5</th>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr className="h-20">
                      <th>6</th>
                      <td />
                      <td />
                      <td />
                      <td />
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
                      <th className="text-right">
                        <ButtonSorting>Games</ButtonSorting>
                      </th>
                      <th className="text-center">
                        <ButtonSorting>Total XP</ButtonSorting>
                      </th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {getClanMembers()?.map((item, itemIndex) => (
                      <>
                        <tr
                          key={item.id}
                          className="animate-slide-in-bottom animate-delay"
                          style={{
                            "--delay": "calc(" + itemIndex + " * 0.05s)",
                          }}
                        >
                          <td className="w-full">
                            <Link
                              href={`/prototype/profile/${
                                prototype.getUserByID(item.id).id
                              }${prototype.getURLparams()}`}
                            >
                              <button
                                type="button"
                                className="flex gap-3 items-center self-center interactive"
                              >
                                <Avatar
                                  id={item.id}
                                  size="avatar-sm"
                                  hasTooltip={true}
                                />
                                <div>
                                  <div>
                                    <span
                                      className={`${
                                        prototype.getUserByID(item.id)
                                          ?.isPremium
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
                                  <div className="text-ui-300 text-xs flex gap-1 items-center">
                                    {prototype.getUserByID(item.id)
                                      ?.isOnline ? (
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
                              </button>
                            </Link>
                          </td>
                          <td className="text-right">
                            <div className="flex justify-end gap-1">
                              {prototype
                                .getUserByID(item.id)
                                .games?.map((game, gameIndex) => (
                                  <GameIcon key={gameIndex} game={game} />
                                ))}
                            </div>
                          </td>
                          <td className="text-center">
                            <div className="chip chip-sm chip-xp chip-ghost">
                              <span>100</span>
                              <span className="icon icon-xp-symbol" />
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
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
          {/* for demo purposes only */}
          <section className="text-ui-100/0 h-0">
            <div onClick={() => setHasOnlyOne(!hasOnlyOne)}>
              Toggle admin view
            </div>
          </section>
        </>
      )}
    </>
  );
}
