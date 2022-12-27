import React, { useEffect, useState } from "react";

import Ad from "../../../../components/Ad/Ad";
import Link from "next/link";
import PrototypeStructure from "../../../../components/Prototype/PrototypeStructure";

import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";

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

export default function Home() {
  const router = useRouter();
  const prototype = usePrototypeData();
  const { query } = useRouter();
  const [selectedClan, setSelectedClan] = useState(null);
  const isEmpty = query.empty === "true" ? true : false;

  const { clan_id } = router.query;

  useEffect(() => {
    setSelectedClan(prototype.getClanByID(clan_id));
  }, [clan_id]);

  function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

  function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const statusLoading = query.loading === "true" ? true : false;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (statusLoading) {
      setLoading(true);
    }
  }, []);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    }
  }, [loading]);

  return (
    <>
      <PrototypeStructure title="Clan">
        <Ad width="1005" height="300" />
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-end px-4 sm:px-0 mb-0.5">
          <h1>Clan applications</h1>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-stretch">
            <div className="leading-none text-center surface surface-dimmed rounded py-2 sm:py-1.5 px-2 flex flex-col justify-between gap-1">
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
        </div>
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
          <>
            {isEmpty ? (
              <div
                className="surface rounded-lg px-4 py-8 text-center mt-4 animate-slide-in-bottom animate-delay"
                style={{ "--delay": "calc(0 * 0.05s)" }}
              >
                <div className="max-w-xs mx-auto">
                  <span className="icon icon-angry-10 text-6xl text-ui-500" />
                  <div className="mt-2 mb-6">
                    <p className="text-sm text-ui-400">
                      No applicants to show.
                    </p>
                    <p className="text-lg text-ui-300">
                      Brawl more to promote your clan.
                    </p>
                  </div>
                  <Link href="/prototype/valorant/brawls">
                    <a className="button button-main">
                      <span>Browse Brawls</span>
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
                          <div className="text-ui-300 flex items-center gap-1">
                            <span>User</span>
                            <button
                              type="button"
                              className="button button-sm button-ghost rounded-full"
                            >
                              <span className="icon icon-arrow-sm-down"></span>
                            </button>
                          </div>
                        </th>
                        <th>
                          <div className="text-ui-300 flex items-center gap-1">
                            <span>Date</span>
                            <button
                              type="button"
                              className="button button-sm button-ghost rounded-full"
                            >
                              <span className="icon icon-arrow-sm-down"></span>
                            </button>
                          </div>
                        </th>
                        <th>
                          <div className="text-ui-300 flex justify-center items-center gap-1">
                            <span>Country</span>
                            <button
                              type="button"
                              className="button button-sm button-ghost rounded-full"
                            >
                              <span className="icon icon-arrow-sm-down"></span>
                            </button>
                          </div>
                        </th>
                        <th>
                          <div className="text-ui-300 flex justify-center items-center gap-1">
                            <span>No. of Brawls played</span>
                            <button
                              type="button"
                              className="button button-sm button-ghost rounded-full"
                            >
                              <span className="icon icon-arrow-sm-down"></span>
                            </button>
                          </div>
                        </th>
                        <th>
                          <div className="text-ui-300 flex justify-center items-center gap-1">
                            <span>Avg. Brawl position</span>
                            <button
                              type="button"
                              className="button button-sm button-ghost rounded-full"
                            >
                              <span className="icon icon-arrow-sm-down"></span>
                            </button>
                          </div>
                        </th>
                        <th>
                          <div className="text-ui-300 flex justify-center items-center gap-1">
                            <span>Status</span>
                            <button
                              type="button"
                              className="button button-sm button-ghost rounded-full"
                            >
                              <span className="icon icon-arrow-sm-down"></span>
                            </button>
                          </div>
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
                                  <div
                                    className={`avatar avatar-xs avatar-circle ${
                                      prototype.getUserByID(item.user)
                                        ?.isPremium
                                        ? "avatar-gold"
                                        : ""
                                    }`}
                                  >
                                    <div>
                                      <img
                                        src={
                                          prototype.getUserByID(item.user)
                                            ?.avatar
                                        }
                                        alt="avatar"
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className={`${
                                      prototype.getUserByID(item.user)
                                        ?.isPremium
                                        ? "text-gradient bg-gradient-to-b from-premium-300 to-premium-700"
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
                                    prototype.getUserByID(item.user)
                                      ?.countryFlag
                                  }.svg`}
                                  className="aspect-video rounded-sm max-w-[1.5rem] mx-auto"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="text-ui-300 text-center">
                                {
                                  prototype.getUserByID(item.user)?.stats
                                    .playedBrawls
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
      </PrototypeStructure>
    </>
  );
}
