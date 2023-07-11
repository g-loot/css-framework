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
import ButtonFeedback from "../../../../components/Button/ButtonFeedback";

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
          <div className="flex md:justify-end px-4 sm:px-0 mb-0.5">
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
                        <ButtonSorting hasArrow={false}>Riot ID</ButtonSorting>
                      </th>
                      <th className="max-xl:hidden text-left">
                        <ButtonSorting hasArrow={false}>Steam ID</ButtonSorting>
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
                        <>
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
                                    size="avatar-xs"
                                    hasTooltip={true}
                                  />
                                  <div
                                    className={`${
                                      prototype.getUserByID(item.id)?.isPremium
                                        ? "text-premium-500"
                                        : ""
                                    }`}
                                  >
                                    {prototype.getUserByID(item.id)?.nickname}
                                  </div>
                                </button>
                              </Link>
                            </td>
                            <td className="max-xl:hidden">
                              <div className="text-ui-300 text-left">
                                {itemIndex === 2 ? (
                                  <>--</>
                                ) : (
                                  <>
                                    {prototype.getUserByID(item.id)?.nickname}{" "}
                                    #1111
                                    <Tooltip
                                      placement="top"
                                      tooltip={
                                        <span className="text-sm">
                                          Click to copy
                                        </span>
                                      }
                                    >
                                      <ButtonFeedback
                                        value={`${
                                          prototype.getUserByID(item.id)
                                            ?.nickname
                                        } #1111`}
                                        variant="button-ghost rounded-full"
                                        icon="icon-document-copy"
                                        message="RIOT ID copied to your clipboard"
                                      />
                                    </Tooltip>
                                  </>
                                )}
                              </div>
                            </td>
                            {/*
                          <td>
                            <div
                              className="text-ui-300 text-center"
                              data-tooltip={
                                prototype.getUserByID(item.id)?.country
                              }
                            >
                              <img
                                src={`https://flagcdn.com/${
                                  prototype.getUserByID(item.id)?.countryFlag
                                }.svg`}
                                className="aspect-video rounded-sm max-w-[1.5rem] mx-auto"
                              />
                            </div>
                          </td>
                          */}
                            <td className="max-xl:hidden">
                              <div className="text-ui-300">
                                {itemIndex === 2 ? (
                                  <>--</>
                                ) : (
                                  <>
                                    {prototype
                                      .getUserByID(item.id)
                                      ?.nickname.substring(0, 10)}
                                    _1111
                                    <Tooltip
                                      placement="top"
                                      tooltip={
                                        <span className="text-sm">
                                          Click to copy
                                        </span>
                                      }
                                    >
                                      <ButtonFeedback
                                        value={`${prototype
                                          .getUserByID(item.id)
                                          ?.nickname.substring(0, 10)}_1111`}
                                        variant="button-ghost rounded-full"
                                        icon="icon-document-copy"
                                        message="Steam ID copied to your clipboard"
                                      />
                                    </Tooltip>
                                  </>
                                )}
                              </div>
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
                        </>
                      ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
          {/* for demo purposes only */}
          <section className="text-ui-100/0 hover:text-ui-100 inline-flex flex-col">
            <div onClick={() => setHasOnlyOne(!hasOnlyOne)}>
              Toggle admin view
            </div>
          </section>
        </>
      )}
    </>
  );
}
