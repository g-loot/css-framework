import React, { useEffect, useState, useContext } from "react";

import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import Link from "next/link";
import ModalRemoveFriend from "./modal-remove-friend";
import Tooltip from "@/components/Tooltip/Tooltip";
import ButtonSorting from "@/components/Button/ButtonSorting";
import RowUser from "@/components/RowUser/RowUser";
import ModalUnfollow from "@/pages/stryda/profile/modal-unfollow";

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

  function openModalUnfollow(selectedUser) {
    uiContext.openModal(<ModalUnfollow selectedUser={selectedUser} />);
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
                        {!isEmpty && (
                          <tbody>
                            {prototype.users
                              .filter((g) => g.isFollowing)
                              .map((item, itemIndex) => (
                                <RowUser key={itemIndex} id={item.id}>
                                  <Tooltip tooltip="Unfollow">
                                    <button
                                      type="button"
                                      className="button button-tertiary rounded-full"
                                      onClick={() => openModalUnfollow(item)}
                                    >
                                      <span className="icon icon-a-remove" />
                                    </button>
                                  </Tooltip>
                                </RowUser>
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
          <section className="text-sm text-ui-100/0 hover:text-ui-100 flex flex-col items-stretch">
            <a onClick={() => setIsEmpty(!isEmpty)}>
              Toggle empty state {isEmpty ? "ON" : "OFF"}
            </a>
          </section>
        </>
      )}
    </>
  );
}
