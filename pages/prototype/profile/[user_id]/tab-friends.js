import React, { useEffect, useState, useContext } from "react";

import Ad from "../../../../components/Ad/Ad";
import { UiContext } from "../../../../contexts/ui";
import PrototypeStructure from "../../../../components/Prototype/PrototypeStructure";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import AchievementFrame from "../../../../components/Achievements/AchievementFrame";
import AchievementIcon from "../../../../components/Achievements/AchievementIcon";
import ModalAchievementReceived from "../../modal-achievementreceived";
import ProfileHeader from "../header";
import Link from "next/link";
import ModalRemoveFriend from "./modal-remove-friend";
import Avatar from "../../../../components/Avatar/Avatar";
import Tooltip from "../../../../components/Tooltip/Tooltip";
import GameIcon from "../../../../components/GameIcon/GameIcon";
import ButtonSorting from "../../../../components/Button/ButtonSorting";

export default function TabProfileFriends() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const { user_id } = router.query;
  const isEmpty = query.empty === "true" ? true : false;

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
          {loading && (
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
          )}
          {!loading && (
            <section>
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
                        <ButtonSorting>
                          avg. Ladder placement
                        </ButtonSorting>
                      </th>
                      <th className="text-center">
                        <ButtonSorting>
                          Ladders
                        </ButtonSorting>
                      </th>
                      <th className="text-center">
                        <ButtonSorting>
                          Missions
                        </ButtonSorting>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="!border-l-main">
                        <Link
                          href={`/prototype/profile/1
                          `}
                        >
                          <button
                            type="button"
                            className="flex gap-3 items-center self-center interactive"
                          >
                            <Avatar id={1} hasTooltip={true} size="avatar-sm" />
                            <div className="space-y-0.5">
                              <div className="text-main">
                                {prototype.getUserByID(1)?.clan && (
                                  <>
                                    &#91;
                                    {
                                      prototype.getClanByID(
                                        prototype.getUserByID(1)?.clan
                                      )?.tag
                                    }
                                    &#93;{" "}
                                  </>
                                )}
                                {prototype.getUserByID(1)?.nickname}
                              </div>
                              <div className="flex gap-1">
                                <div className="flex gap-1">
                                  {prototype
                                    .getUserByID(1)
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
                        <div className="text-ui-300 text-center">
                          {prototype.getUserByID(1)?.level}
                        </div>
                      </td>
                      <td>
                        <div className="text-ui-300 text-center">
                          #{RandomNumber(50, 300)}
                        </div>
                      </td>
                      <td>
                        <div className="text-ui-300 text-center">
                          {prototype.getUserByID(1)?.stats.playedLadders}
                        </div>
                      </td>
                      <td>
                        <div className="text-ui-300 text-center">
                          {RandomNumber(10, 300)}
                        </div>
                      </td>
                      <td className="w-14" />
                    </tr>
                  </tbody>
                  {!isEmpty && (
                    <tbody>
                      {prototype.users.map((item, itemIndex) => (
                        <>
                          {item.isFriend && (
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
                                <div className="text-ui-300 text-center">
                                  {prototype.getUserByID(item.id)?.level}
                                </div>
                              </td>
                              <td>
                                <div className="text-ui-300 text-center">
                                  #{RandomNumber(50, 300)}
                                </div>
                              </td>
                              <td>
                                <div className="text-ui-300 text-center">
                                  {
                                    prototype.getUserByID(item.id)?.stats
                                      .playedLadders
                                  }
                                </div>
                              </td>
                              <td>
                                <div className="text-ui-300 text-center">
                                  {RandomNumber(10, 300)}
                                </div>
                              </td>
                              <td className="w-14">
                                <div className="dropdown dropdown-left">
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
                                      <li>
                                        <button
                                          type="button"
                                          onClick={openModalRemoveFriends.bind(
                                            this,
                                            item.id
                                          )}
                                        >
                                          <span className="icon icon-a-remove" />
                                          <span>Unfollow</span>
                                        </button>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </>
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
                      <p className="text-sm text-ui-400">No friends to show.</p>
                      <p className="text-lg text-ui-300">
                        Press add as friend on any player profile to add them
                        here for comparison and quick access to the profiles.
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
          )}
        </>
      )}
    </>
  );
}
