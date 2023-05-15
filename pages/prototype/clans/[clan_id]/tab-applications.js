import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import ButtonSorting from "../../../../components/Button/ButtonSorting";
import Avatar from "../../../../components/Avatar/Avatar";

const PlayerApplications = [
  {
    id: 0,
    user: 3,
    time: "1 hour ago",
    status: "pending",
  },
  {
    id: 1,
    user: 4,
    time: "2 days ago",
    status: "pending",
  },
  {
    id: 2,
    user: 11,
    time: "4 days ago",
    status: "pending",
  },
  {
    id: 3,
    user: 6,
    time: "1 week ago",
    status: "accepted",
  },
  {
    id: 4,
    user: 7,
    time: "1 week ago",
    status: "declined",
  },
  {
    id: 5,
    user: 8,
    time: "1 month ago",
    status: "declined",
  },
];

export default function TabClanApplications() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const [selectedClan, setSelectedClan] = useState(null);
  const { clan_id } = router.query;
  const isEmpty = query.empty === "true" ? true : false;

  useEffect(() => {
    setSelectedClan(prototype.getClanByID(clan_id));
  }, [clan_id]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, RandomNumber(500,1000));
  }, []);

  function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }



  return (
    <div className="animate-slide-in-bottom">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-stretch px-4 sm:px-0 mb-0.5">
        <div className="flex gap-4 items-center">
          <div className="form-group form-select">
            <select id="status">
              <option selected>Any</option>
              <option>Pending</option>
              <option>Approved</option>
              <option>Pending</option>
            </select>
          </div>
          <div className="form-group flex-1">
            <div className="input-group">
              <span className="icon icon-zoom"></span>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="leading-none text-center surface rounded py-2 p-4 flex justify-between items-center gap-4">
          <div className="text-ui-300">
            <b className="text-ui-200">2</b>/32 slots available
          </div>
          <div
            className="progressbar progressbar-sm w-full sm:w-36"
            style={{ "--percent": "95" }}
          >
            <div />
          </div>
        </div>
      </div>
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
          {isEmpty ? (
            <div
              className="surface rounded-lg px-4 py-8 text-center mt-4 animate-slide-in-bottom animate-delay"
              style={{ "--delay": "calc(0 * 0.05s)" }}
            >
              <div className="max-w-xs mx-auto">
                <span className="icon icon-angry-10 text-6xl text-ui-500" />
                <div className="mt-2 mb-6">
                  <p className="text-sm text-ui-400">No applicants to show.</p>
                  <p className="text-lg text-ui-300">
                    Ladder more to promote your clan.
                  </p>
                </div>
                <Link href="/prototype/valorant/ladders">
                  <a className="button button-main">
                    <span>Browse Ladders</span>
                  </a>
                </Link>
              </div>
            </div>
          ) : (
            <section>
              <div className="overflow-y-hidden overflow-x-auto scrollbar-desktop px-4 sm:px-0 pb-4">
                <table className="table table-rounded rounded-xl w-full">
                  <thead>
                    <tr>
                      <th>
                        <ButtonSorting>User</ButtonSorting>
                      </th>
                      <th>
                        <ButtonSorting>Date</ButtonSorting>
                      </th>
                      <th>
                        <ButtonSorting>Country</ButtonSorting>
                      </th>
                      <th>
                        <ButtonSorting>No. of Ladders played</ButtonSorting>
                      </th>
                      <th>
                        <ButtonSorting>Avg. Ladder position</ButtonSorting>
                      </th>
                      <th>
                        <ButtonSorting>Status</ButtonSorting>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {PlayerApplications.map((item, itemIndex) => (
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
                              href={`/prototype/profile/${item.user}
                          `}
                            >
                              <button
                                type="button"
                                className="flex gap-3 items-center self-center interactive"
                              >
                                <Avatar
                                  id={item.user}
                                  size="avatar-xs"
                                  hasTooltip={true}
                                />
                                <div
                                  className={`${
                                    prototype.getUserByID(item.user)?.isPremium
                                      ? "text-premium-500"
                                      : ""
                                  }`}
                                >
                                  {prototype.getUserByID(item.user)?.nickname}
                                </div>
                              </button>
                            </Link>
                          </td>
                          <td>
                            <div className="text-ui-300">{item.time}</div>
                          </td>
                          <td>
                            <div
                              className="text-ui-300 text-center"
                              data-tooltip={
                                prototype.getUserByID(item.user)?.country
                              }
                            >
                              <img
                                src={`https://flagcdn.com/${
                                  prototype.getUserByID(item.user)?.countryFlag
                                }.svg`}
                                className="aspect-video rounded-sm max-w-[1.5rem] mx-auto"
                              />
                            </div>
                          </td>
                          <td>
                            <div className="text-ui-300 text-center">
                              {
                                prototype.getUserByID(item.user)?.stats
                                  .playedLadders
                              }
                            </div>
                          </td>
                          <td>
                            <div className="text-ui-300 text-center">
                              #{RandomNumber(10, 300)}
                            </div>
                          </td>
                          <td>
                            <div className="text-center">
                              {item.status === "pending" && (
                                <div className="flex justify-center gap-2">
                                  <button
                                    type="button"
                                    className="button button-sm button-success"
                                  >
                                    <span>Accept</span>
                                  </button>
                                  <button
                                    type="button"
                                    className="button button-sm button-error"
                                  >
                                    <span>Decline</span>
                                  </button>
                                </div>
                              )}
                              {item.status === "accepted" && (
                                <div className="chip chip-status chip-success">
                                  <span className="icon icon-check" />
                                  <span>Accepted</span>
                                </div>
                              )}
                              {item.status === "declined" && (
                                <div className="chip chip-status chip-error">
                                  <span className="icon icon-s-ban" />
                                  <span>Declined</span>
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="text-center mt-4 mb-8">
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
            </section>
          )}
        </>
      )}
    </div>
  );
}
