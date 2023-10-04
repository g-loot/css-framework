import React, { useEffect, useState, useContext } from "react";

import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import Link from "next/link";
import Avatar from "../../../../components/Avatar/Avatar";
import GameIcon from "../../../../components/GameIcon/GameIcon";
import ModalGiftTokens from "../modal-gift-tokens";
import ModalClanInvite from "../modal-clan-invite";
import ButtonSorting from "../../../../components/Button/ButtonSorting";
import Tooltip from "../../../../components/Tooltip/Tooltip";
import ButtonFeedback from "../../../../components/Button/ButtonFeedback";
import RowUser from "@/components/RowUser/RowUser";

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
                              Riot IDs
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
                            <RowUser key={itemIndex} id={item.id}>
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
                                                    <span>Gift tokens to Clan member</span>
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
                            </RowUser>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}
            </>
          )}
          {/* for demo purposes only */}
          {prototype.showDemo && (
            <section className="fixed z-[9999] bottom-4 left-4 surface-ui-500 rounded shadow-md p-4 pr-16 text-sm text-ui-100 flex flex-col items-start">
              <div className="absolute top-1 right-1">
                <button
                  type="button"
                  className="button button-sm button-secondary button-close"
                  onClick={() => prototype.setShowDemo(!prototype.showDemo)}
                >
                  <span className="icon icon-e-remove" />
                </button>
              </div>
              <div className="form-group pl-4">
                <div className="form-xs form-toggle">
                  <input
                    type="checkbox"
                    name="feed"
                    id="feed-admin"
                    defaultChecked={isAdmin}
                    onChange={() => {
                      setIsAdmin(!isAdmin);
                    }}
                  />
                  <label htmlFor="feed-admin">Admin view</label>
                </div>
              </div>
              <div className="form-group pl-4">
                <div className="form-xs form-toggle">
                  <input
                    type="checkbox"
                    name="feed"
                    id="feed-empty"
                    defaultChecked={isEmpty}
                    onChange={() => {
                      setIsEmpty(!isEmpty);
                    }}
                  />
                  <label htmlFor="feed-empty">Empty state</label>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
}
