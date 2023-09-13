import React, { useEffect, useState, useContext } from "react";

import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import Link from "next/link";
import ModalRemoveFriend from "./modal-remove-friend";
import Avatar from "@/components/Avatar/Avatar";
import Tooltip from "@/components/Tooltip/Tooltip";
import GameIcon from "@/components/GameIcon/GameIcon";
import ButtonSorting from "@/components/Button/ButtonSorting";
import ButtonFeedback from "@/components/Button/ButtonFeedback";

export default function TabProfileFollowing() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const { user_id } = router.query;
  const empty = query.empty === "true" ? true : false;
  const [isEmpty, setIsEmpty] = useState(empty);
  const [filter, setFilter] = useState("");
  const statusLoading = query.loading === "true" ? true : false;
  const [loading, setLoading] = useState(true);

  function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    if (statusLoading) {
      setLoading(true);
    }
  }, []);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, RandomNumber(100, 2000));
    }
  }, [loading]);

  const modalRemoveFriends = query.modalremovefriends === "true" ? true : false;

  useEffect(() => {
    setSelectedUser(prototype.getUserByID(user_id));
  }, [user_id]);

  useEffect(() => {
    if (modalRemoveFriends) {
      openModalRemoveFriends(2);
    }
  }, [modalRemoveFriends]);

  function openModalRemoveFriends(id) {
    uiContext.openModal(<ModalRemoveFriend id={id}></ModalRemoveFriend>);
  }

  return (
    <>
      {selectedUser && (
        <>
          {isEmpty ? (
            <>
              <div className="surface rounded-lg px-4 py-8 text-center mb-4">
                <div className="max-w-xs mx-auto">
                  <span className="icon icon-multiple-11 text-6xl text-ui-500" />
                  {selectedUser.isYou ? (
                    <>
                      <div className="mt-2 mb-6">
                        <p className="text-sm text-ui-400">
                          You have no followers yet
                        </p>
                        <p className="text-lg text-ui-300">
                          Follow players to unlock a world of valuable insights
                          and shared experiences
                        </p>
                      </div>
                      <Link
                        href={`/prototype/search${prototype.getURLparams()}`}
                      >
                        <button type="button" className="button button-primary">
                          <span className="icon icon-a-add" />
                          <span>Search for players</span>
                        </button>
                      </Link>
                    </>
                  ) : (
                    <>
                      <div className="mt-2">
                        <p className="text-lg text-ui-300">
                          {selectedUser.nickname} has no followers yet
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              {loading ? (
                <section className="mt-2">
                  <div className="overflow-y-hidden overflow-x-auto scrollbar-desktop px-4 sm:px-0 pb-4">
                    <table className="table table-rounded rounded-xl is-loading w-full">
                      <tbody>
                        <tr>
                          <th>1</th>
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                        </tr>
                        <tr>
                          <th>2</th>
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                        </tr>
                        <tr>
                          <th>3</th>
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                        </tr>
                        <tr>
                          <th>3</th>
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                        </tr>
                        <tr>
                          <th>3</th>
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                        </tr>
                        <tr>
                          <th>3</th>
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
                <>
                  <section>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center px-4 sm:px-0 mb-0.5">
                      <Link
                        href={`/prototype/search${prototype.getURLparams()}`}
                      >
                        <button
                          type="button"
                          className="button button-tertiary"
                        >
                          <span className="icon icon-a-add" />
                          <span>Search for players</span>
                        </button>
                      </Link>
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
                        {!isEmpty && (
                          <tbody>
                            {prototype.users
                              .filter((g) => g.isFriend)
                              .map((item, itemIndex) => (
                                <tr
                                  key={item.id}
                                  className="animate-slide-in-bottom animate-delay"
                                  style={{
                                    "--delay":
                                      "calc(" + itemIndex + " * 0.05s)",
                                  }}
                                >
                                  <td>
                                    <div className="flex gap-3 items-center self-center interactive">
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
                                            prototype.getUserByID(item.id)
                                              ?.isYou
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
                                    </div>
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
                                                      prototype.getUserByID(
                                                        item.id
                                                      ).socials
                                                        ?.riotValorantNickname
                                                    );
                                                  }}
                                                >
                                                  {
                                                    prototype.getUserByID(
                                                      item.id
                                                    ).nickname
                                                  }
                                                  {" #"}
                                                  {
                                                    prototype.getUserByID(
                                                      item.id
                                                    ).socials
                                                      ?.riotValorantHashtag
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
                                                    prototype.getUserByID(
                                                      item.id
                                                    ).socials
                                                      ?.riotValorantNickname
                                                  }{" #"}${
                                                    prototype.getUserByID(
                                                      item.id
                                                    ).socials
                                                      ?.riotValorantHashtag
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
                                            prototype.getUserByID(item.id)
                                              .nickname
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
                                                      prototype.getUserByID(
                                                        item.id
                                                      ).socials
                                                        ?.riotValorantNickname
                                                    );
                                                  }}
                                                >
                                                  {
                                                    prototype.getUserByID(
                                                      item.id
                                                    ).nickname
                                                  }
                                                  {" #"}
                                                  {
                                                    prototype.getUserByID(
                                                      item.id
                                                    ).socials
                                                      ?.riotValorantHashtag
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
                                                    prototype.getUserByID(
                                                      item.id
                                                    ).socials
                                                      ?.riotValorantNickname
                                                  }{" #"}${
                                                    prototype.getUserByID(
                                                      item.id
                                                    ).socials
                                                      ?.riotValorantHashtag
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
                                            prototype.getUserByID(item.id)
                                              .nickname
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
                                    <Tooltip tooltip="Unfollow">
                                      <ButtonFeedback
                                        variant="button-tertiary rounded-full"
                                        icon="icon-a-remove"
                                        message="Player removed from your followers"
                                      />
                                    </Tooltip>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        )}
                      </table>
                    </div>
                    {isEmpty ? (
                      <div
                        className="surface rounded-lg px-4 py-8 text-center mt-4 animate-slide-in-bottom animate-delay"
                        style={{ "--delay": "calc(0 * 0.05s)" }}
                      >
                        <div className="max-w-xs mx-auto">
                          <span className="icon icon-angry-10 text-6xl text-ui-500" />
                          <div className="mt-2 mb-6">
                            <p className="text-sm text-ui-400">
                              No friends to show.
                            </p>
                            <p className="text-lg text-ui-300">
                              Press add as friend on any player profile to add
                              them here for comparison and quick access to the
                              profiles.
                            </p>
                          </div>
                          <Link href="/prototype/search">
                            <a className="button button-main">
                              <span>Search players</span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center mt-4 mb-8 animate-fade-in">
                        <ul className="pagination">
                          <li>
                            <a href="#" tabIndex="-1">
                              Previous
                            </a>
                          </li>
                          <li className="is-active">
                            <a href="#">1</a>
                          </li>
                          <li>
                            <a href="#">2</a>
                          </li>
                          <li>
                            <a href="#">3</a>
                          </li>
                          <li>
                            <span>...</span>
                          </li>
                          <li>
                            <a href="#">12</a>
                          </li>
                          <li>
                            <a href="#">Next</a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </section>
                </>
              )}
            </>
          )}
          {/* for demo purposes only */}
          <section className="text-ui-100/0 hover:text-ui-100 inline-flex flex-col">
            <a onClick={() => setIsEmpty(!isEmpty)}>
              Toggle empty state {isEmpty ? "ON" : "OFF"}
            </a>
          </section>
        </>
      )}
    </>
  );
}
