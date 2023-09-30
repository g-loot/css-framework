import React, { useEffect, useRef, useState, useContext } from "react";

import Accordion from "../../../../../components/Accordion/Accordion";
import Link from "next/link";
import Reward from "../../../../../components/Reward/Reward";
import { UiContext } from "@/contexts/ui";
import Tooltip from "../../../../../components/Tooltip/Tooltip";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import Avatar from "../../../../../components/Avatar/Avatar";
import LeaderboardWings from "../../../../../components/LeaderboardWings/LeaderboardWings";
import { VariablesContext } from "@/contexts/variables";
import ModalInfoClanEventEnroll from "../modal-info-claneventenroll";
import AvatarClan from "../../../../../components/Avatar/AvatarClan";
import ModalClanEventResults from "../modal-claneventresults";
import ModalClanEventOnboarding from "../modal-claneventonboarding";
import ResetsIn from "../../../../../components/Countdown/ResetsIn";
import Rewards from "../../../../../components/Reward/Rewards";
import ButtonFeedback from "../../../../../components/Button/ButtonFeedback";
import { StatsValorantRanks } from "@/mock-data/data-stats-valorant";
import ModalClanEventHowitworksVideo from "../modal-howitworks-video";

const rewardDistribClan = [
  {
    name: "1",
    rewards: [
      {
        type: "coin",
        value: 1000,
      },
      {
        type: "token",
        value: 100,
      },
      {
        type: "powertoken",
        value: 5,
      },
    ],
  },
  {
    name: "2",
    rewards: [
      {
        type: "coin",
        value: 700,
      },
      {
        type: "avatarframe",
        value: 4,
      },
      {
        type: "profilebanner",
        value: 33,
      },
    ],
  },
  {
    name: "3",
    rewards: [
      {
        type: "coin",
        value: 600,
      },
      {
        type: "avatarframe",
        value: 5,
      },
    ],
  },
  {
    name: "4",
    rewards: [
      {
        type: "coin",
        value: 500,
      },
    ],
  },
  {
    name: "5-10",
    rewards: [
      {
        type: "coin",
        value: 200,
      },
    ],
  },
];

const Groups = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
];

const sideScroll = (element, speed, distance, step) => {
  let scrollAmount = 0;
  const slideTimer = setInterval(() => {
    element.scrollLeft += step;
    scrollAmount += Math.abs(step);
    if (scrollAmount >= distance) {
      clearInterval(slideTimer);
    }
  }, speed);
};

export default function TabClanLeaderboardsLeaderboards() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedClanLeaderboard, setSelectedClanLeaderboard] = useState(null);
  const modalenroll = query.modalenroll === "true" ? true : false;
  const modalonboarding = query.modalonboarding === "true" ? true : false;
  const empty = query.empty === "true" ? true : false;
  const [isEmpty, setIsEmpty] = useState(empty);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [hasRanks, setHasRanks] = useState(false);
  const [isInAClan, setIsInAClan] = useState(true);
  const [hasRiot, setHasRiot] = useState(true);
  const [hasEligibleMembers, SetHasEligibleMembers] = useState(true);
  const [hasRewards, setHasRewards] = useState(true);
  const [hasPlayersDetails, setHasPlayersDetails] = useState(false);
  const hasAds = query.ads === "true" ? true : false;
  const { game } = router.query;
  const { leaderboard_id } = router.query;
  const variablesContext = useContext(VariablesContext);

  const [loading, setLoading] = useState(true);

  function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game, prototype]);

  useEffect(() => {
    if (modalenroll) {
      handleEnroll();
    }
  }, [modalenroll]);

  useEffect(() => {
    if (modalonboarding) {
      openmodalClanEventOnboarding();
    }
  }, [modalonboarding]);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, RandomNumber(300, 3000));
    }
  }, [loading]);

  useEffect(() => {
    setSelectedClanLeaderboard(
      prototype.getClanLeaderboardByID(game, leaderboard_id)
    );
  }, [leaderboard_id]);

  useEffect(() => {
    if (selectedClanLeaderboard && selectedClanLeaderboard?.id === 0) {
      openmodalClanEventOnboarding();
    }
  }, [selectedClanLeaderboard]);

  const sliderRankWrapper = useRef(null);
  const sliderRankItem = useRef(null);
  const [sliderRankWidth, setSliderRankWidth] = useState(0);
  const sliderGroupWrapper = useRef(null);
  const sliderGroupItem = useRef(null);
  const [sliderGroupWidth, setSliderGroupWidth] = useState(0);

  const [isLoadingRank, setIsLoadingRank] = useState(false);
  const [isLoadingGroup, setIsLoadingGroup] = useState(false);
  const [selectedRank, setSelectedRank] = useState(2);
  const [selectedGroup, setSelectedGroup] = useState(6);

  useEffect(() => {
    if (sliderRankItem.current) {
      setSliderRankWidth(sliderRankItem.current.clientWidth);
    }
  }, [sliderRankItem]);

  useEffect(() => {
    if (sliderGroupItem.current) {
      setSliderGroupWidth(sliderGroupItem.current.clientWidth);
    }
  }, [sliderGroupItem]);

  function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function loadRank(target) {
    setIsLoadingRank(true);
    setIsLoadingGroup(true);
    setSelectedRank(target);
    const timer = setTimeout(() => {
      setIsLoadingRank(false);
      setIsLoadingGroup(false);
    }, 1000);
    return () => clearTimeout(timer);
  }
  function loadGroup(target) {
    setIsLoadingGroup(true);
    setSelectedGroup(target);
    const timer = setTimeout(() => {
      setIsLoadingGroup(false);
    }, 1000);
    return () => clearTimeout(timer);
  }

  function handleEnroll() {
    uiContext.openModal(<ModalInfoClanEventEnroll />);
  }

  const getMyClanMembers = () => {
    return prototype.users.filter((user) => {
      return user.clan === 1;
    });
  };

  function openmodalLadderResults(id) {
    uiContext.openModal(
      <ModalClanEventResults
        item={prototype.getClanLeaderboardByID(
          prototype.getGameBySlug(game).slug,
          id
        )}
      />
    );
  }
  function openmodalClanEventOnboarding() {
    uiContext.openModal(<ModalClanEventOnboarding />);
    //uiContext.openModal(<ModalClanEventOnboarding />);
  }

  const getRankByID = (id) => {
    return StatsValorantRanks.find((rank) => {
      return rank.id === parseInt(id);
    });
  };

  return (
    <>
      {selectedClanLeaderboard && selectedGame && (
        <>
          {isEmpty || selectedClanLeaderboard.status === "upcoming" ? (
            <div className="col-span-1 lg:col-span-3">
              <div className="mt-10 text-center">
                <h3 className="h4 mt-2 text-ui-100 leading-tight text-center max-w-[40ch] mx-auto mb-4">
                  Play together with 5 members of your Clan and be the first to
                  join this leaderboard!
                </h3>
                {selectedClanLeaderboard.status === "upcoming" && (
                  <h3 className="h4 mt-2 mb-6 text-ui-100 leading-tight text-center">
                    This Ladder starts <ResetsIn label=" " status={2} />
                  </h3>
                )}
                {!selectedClanLeaderboard.status === "ongoing" && (
                  <>
                    {!isInAClan ? (
                      <Link
                        href={`/prototype/clans${prototype.getURLparams()}`}
                      >
                        <button
                          type="button"
                          className="button button-primary w-60 mb-6"
                        >
                          <span className="icon icon-multiple-12" />
                          <span>Search for clans</span>
                        </button>
                      </Link>
                    ) : (
                      <button
                        type="button"
                        className="button button-primary w-60 mt-4 mb-6"
                        onClick={() => setIsEmpty(false)}
                      >
                        <span>Enroll my Clan</span>
                      </button>
                    )}
                  </>
                )}
                {hasRewards && (
                  <ul className="max-w-sm mx-auto">
                    {rewardDistribClan.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="surface rounded-lg h-[58px] flex items-stretch overflow-hidden mb-2 animate-slide-in-bottom animate-delay"
                        style={{
                          "--delay": "calc(" + itemIndex + " * 0.05s)",
                        }}
                      >
                        <div
                          className={`w-2/5 text-center px-2 flex items-center justify-center ${
                            itemIndex > 2 ? "bg-ui-700/25" : "bg-ui-700"
                          }`}
                        >
                          <LeaderboardWings id={itemIndex} value={item.name} />
                        </div>
                        {item.rewards && <Rewards rewards={item.rewards} />}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ) : (
            <section
              className="pb-8 animate-slide-in-bottom animate-delay"
              style={{ "--delay": "calc(1 * 0.05s)" }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div
                  className={`w-80 hidden shrink-0 pt-12 space-y-4 ${
                    !isInAClan && selectedClanLeaderboard.status === "finished"
                      ? ""
                      : "lg:block"
                  }`}
                >
                  {!hasRiot && (
                    <div
                      className={`surface p-2 pt-6 rounded text-center ${
                        isLoadingRank ? "is-loading" : ""
                      }`}
                    >
                      <svg
                        width="120"
                        height="38"
                        viewBox="0 0 158 51"
                        fill="none"
                        className="fill-attention-500 mx-auto"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M144.346 43.1142L153.128 44.5889L153.668 50.086H140.633L140.864 48.0057L150.199 47.6304V46.6298L141.239 45.0958L141.779 39.5988H152.635L152.845 41.7844L144.517 42.1004L144.346 43.1142ZM68.9275 45.7476L69.0592 43.6738H75.0039L75.366 50.086H61.7385L62.805 39.5066H74.7143L74.8591 41.6923L65.6424 41.9029L65.3462 47.7094L72.048 47.8937V45.8134L68.9275 45.7476V45.7476ZM126.466 45.8332V47.6699L134.998 47.8806V49.9543H122.865L123.22 39.3749H134.741V41.5211L126.196 41.7054V43.5356H132.674V45.6159L126.466 45.8332V45.8332ZM91.3569 50.0465H95.0172L92.1206 39.4671H83.582L80.7051 50.0465H84.3654L84.925 47.3802H90.8632L91.3569 50.0465ZM85.32 45.3592L86.0508 41.9029L89.5728 41.7383L90.3233 45.2275L85.32 45.3592V45.3592ZM117.203 50.0465L116.123 39.4671H113.062L108.651 44.5099L104.254 39.4671H101.166L100.067 50.0465H103.734L104.089 43.1998L108.665 47.8608L113.247 43.1998L113.602 50.0465H117.203V50.0465ZM89.9942 33.4565H80.4944L77.973 21.9093L71.8768 25.2273L71.6662 33.4697H63.1934L65.8136 7.63008L60.3955 7.81442L61.1855 0.717585H85.3661L88.7236 16.0831L83.7993 18.7493L89.9876 33.4499L89.9942 33.4565ZM79.3489 7.189L72.3969 7.41942L72.1204 17.4919L80.1389 13.7526L79.3489 7.189ZM101.772 0.704419H94.5696L93.9047 33.4433H102.634L101.772 0.704419ZM157.25 0.704419L158 7.86708L149.172 7.57742L151.752 33.4433H143.023L142.292 7.32725L135.195 7.09683L135.011 0.691247L157.25 0.704419V0.704419ZM108.665 0.73733H131.16L132.766 33.4565H107.769L108.665 0.73733V0.73733ZM116.222 26.6164L124.188 26.3728V7.63008L115.86 7.3865L116.222 26.6164V26.6164ZM0 14.5821L30.9483 0L49.0524 4.37133L45.8266 36.3795H36.6626L34.9641 13.0613L33.9766 13.3708L32.2847 36.3795H25.3327L22.0213 17.0377L21.0338 17.3339L21.2839 36.3795H14.7269L10.9744 20.4478L9.98692 20.7638L11.1061 36.3993H4.80583L0 14.5821ZM23.3708 39.5329L25.6355 45.3921L44.3783 50.0268L45.3592 40.6784L23.3708 39.5329V39.5329Z"></path>
                      </svg>
                      <p className="text-attention-500 my-4 leading-tight">
                        Connect your Valorant account to participate in Clan
                        Events!
                      </p>
                      <Link
                        href={`/prototype/profile/settings${prototype.getURLparams()}`}
                      >
                        <button
                          type="button"
                          className="button button-sm button-primary w-full"
                        >
                          <span
                            className={`icon icon-game-${selectedGame.slug}-symbol`}
                          />
                          <span>Connect my account</span>
                        </button>
                      </Link>
                    </div>
                  )}
                  {isInAClan ? (
                    <div
                      className={`surface surface-dimmed p-2 pt-4 rounded text-center ${
                        isLoadingRank ? "is-loading" : ""
                      }`}
                    >
                      <AvatarClan id={1} size="avatar-lg" />
                      <p>
                        {prototype.getUserByID(1).clan && (
                          <>
                            &#91;
                            {
                              prototype.getClanByID(
                                prototype.getUserByID(1).clan
                              )?.tag
                            }
                            &#93;{" "}
                          </>
                        )}{" "}
                        {
                          prototype.getClanByID(prototype.getUserByID(1).clan)
                            ?.nickname
                        }
                      </p>
                      {variablesContext.clanLeaderboardEnrolled ||
                      selectedClanLeaderboard.status === "finished" ? (
                        <>
                          <div
                            className={`infobanner ${
                              selectedClanLeaderboard.status === "ongoing"
                                ? "is-active"
                                : ""
                            }`}
                          >
                            <div className="py-2 space-y-2 infobanner-front">
                              <h3>#5</h3>
                              <p className="text-ui-300 text-sm uppercase flex gap-3 justify-center">
                                <span>Score: 3</span>
                                <span>Top 5%</span>
                              </p>
                            </div>
                            <div className="infobanner-back absolute inset-0 flex justify-center text-center text-sm">
                              <div className="animate-pulse text-ui-100">
                                Waiting for matches...
                              </div>
                            </div>
                          </div>

                          {selectedClanLeaderboard.status === "ongoing" && (
                            <ButtonFeedback
                              variant="button-sm button-secondary w-full my-2"
                              icon="icon-refresh-02"
                              message="Stats updated"
                              label="Update my stats"
                              delay={3000}
                            />
                          )}

                          {selectedClanLeaderboard.status === "finished" && (
                            <button
                              type="button"
                              className="button button-sm button-primary w-full mb-2"
                              onClick={() =>
                                openmodalLadderResults(
                                  selectedClanLeaderboard.id
                                )
                              }
                            >
                              <span>View results</span>
                            </button>
                          )}
                          <button
                            type="button"
                            className="button button-sm button-secondary w-full"
                          >
                            <span>Go to Clan position</span>
                          </button>
                        </>
                      ) : (
                        <>
                          <p className="text-ui-300 mt-4 mb-5">
                            Enroll your Clan and play matches with party
                            composed of 5 Clan members to be placed on the
                            leaderboard.
                          </p>
                        </>
                      )}

                      <div className="surface rounded mt-4">
                        <div className="text-center py-2 pr-2">
                          <table className="table table-compact w-full">
                            <tbody>
                              <tr>
                                <td className="flex items-center gap-2">
                                  <div
                                    className="text-sm uppercase"
                                    onClick={() =>
                                      SetHasEligibleMembers(!hasEligibleMembers)
                                    }
                                  >
                                    Clan members
                                  </div>
                                  <Tooltip tooltip="Showing eligible Clan members only">
                                    <button
                                      type="button"
                                      className="text-ui-300"
                                    >
                                      <span className="icon icon-16 icon-c-info" />
                                    </button>
                                  </Tooltip>
                                </td>
                                {selectedClanLeaderboard.status ===
                                  "finished" ||
                                (selectedClanLeaderboard.status === "ongoing" &&
                                  variablesContext.clanLeaderboardEnrolled) ? (
                                  <td className="text-right">
                                    <div className="text-sm uppercase">
                                      Score
                                    </div>
                                  </td>
                                ) : (
                                  <td className="text-right">
                                    <Link href="/prototype/clans/1?tab=members">
                                      <a className="text-sm link">View all</a>
                                    </Link>
                                  </td>
                                )}
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="border-t border-ui-700 max-h-[250px] overflow-x-hidden overflow-y-auto scrollbar-desktop">
                          {hasEligibleMembers ? (
                            <table className="table table-compact w-full">
                              <tbody>
                                {getMyClanMembers().map((item, itemIndex) => (
                                  <tr key={itemIndex}>
                                    <td>
                                      <div className="flex items-center gap-2">
                                        <Avatar
                                          id={item.id}
                                          hasTooltip={true}
                                        />
                                        <Link
                                          href={`/prototype/profile/${
                                            prototype.getUserByID(item.id).id
                                          }${prototype.getURLparams()}`}
                                        >
                                          <span
                                            className={`text-sm interactive truncate w-28 ${
                                              prototype.getUserByID(item.id)
                                                .isPremium
                                                ? "text-premium-500"
                                                : "text-ui-200"
                                            }`}
                                          >
                                            {
                                              prototype.getUserByID(item.id)
                                                .nickname
                                            }
                                          </span>
                                        </Link>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="flex items-center justify-end">
                                        <Tooltip
                                          placement="top"
                                          tooltip={
                                            <div className="uppercase">
                                              {item.countryFlag}
                                            </div>
                                          }
                                        >
                                          <img
                                            src={`https://flagcdn.com/${item.countryFlag}.svg`}
                                            className="aspect-video rounded-sm w-6 mr-3"
                                          />
                                        </Tooltip>
                                        <Tooltip
                                          placement="top"
                                          tooltip={
                                            <div className="uppercase">
                                              {
                                                getRankByID(RandomNumber(1, 10))
                                                  .name
                                              }
                                            </div>
                                          }
                                        >
                                          <img
                                            src={
                                              getRankByID(RandomNumber(1, 10))
                                                .picturePath
                                            }
                                            className="inline w-6 h-6 object-contain object-center"
                                          />
                                        </Tooltip>
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
                                                    variant="button-ghost rounded-full"
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
                                            variant="button-ghost rounded-full"
                                            icon="icon-riotgames-symbol"
                                            message="RIOT ID copied to your clipboard"
                                          />
                                        </Tooltip>
                                      </div>
                                    </td>
                                    {selectedClanLeaderboard.status ===
                                      "finished" ||
                                    (selectedClanLeaderboard.status ===
                                      "ongoing" &&
                                      variablesContext.clanLeaderboardEnrolled) ? (
                                      <td>
                                        <div className="text-sm font-bold">
                                          {41 - itemIndex}
                                        </div>
                                      </td>
                                    ) : (
                                      <></>
                                    )}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          ) : (
                            <div className="text-center py-4 px-8">
                              <span className="icon icon-multiple-11 text-6xl text-ui-500" />
                              <p className="mt-2 text-ui-300 leading-tight">
                                Your Clan has no eligible members for this
                                Event.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      {selectedClanLeaderboard.status === "ongoing" && (
                        <div
                          className={`surface p-2 pt-4 rounded text-center ${
                            isLoadingRank ? "is-loading" : ""
                          }`}
                        >
                          <span className="icon icon-warning-sign text-3xl text-attention-500" />
                          <p className="text-attention-500 mb-3">
                            Join a Clan to participate to Clan Events!
                          </p>
                          <Link
                            href={`/prototype/clans${prototype.getURLparams()}`}
                          >
                            <button
                              type="button"
                              className="button button-sm button-primary w-full"
                            >
                              <span className="icon icon-multiple-12" />
                              <span>Search for clans</span>
                            </button>
                          </Link>
                        </div>
                      )}
                    </>
                  )}
                </div>
                <div className="flex-1 overflow-hidden">
                  {hasRanks && (
                    <div className="relative z-0 overflow-x-auto scrollbar-desktop h-16 flex items-center my-4">
                      <div className="hidden md:flex absolute z-10 left-0 inset-y-0 self-stretch items-center bg-gradient-to-r from-ui-900 via-ui-900 to-ui-900/0 pl-4 pr-8">
                        <button
                          type="button"
                          className="button button-lg button-ghost rounded-full"
                          onClick={() => {
                            sideScroll(
                              sliderRankWrapper.current,
                              25,
                              sliderRankWidth,
                              -sliderRankWidth
                            );
                          }}
                        >
                          <span className="icon icon-ctrl-left" />
                        </button>
                      </div>

                      <div className="hidden md:flex absolute z-10 right-0 inset-y-0 self-stretch items-center bg-gradient-to-l from-ui-900 via-ui-900 to-ui-900/0 pr-4 pl-8">
                        <button
                          type="button"
                          className="button button-lg button-ghost rounded-full"
                          onClick={() => {
                            sideScroll(
                              sliderRankWrapper.current,
                              25,
                              sliderRankWidth,
                              sliderRankWidth
                            );
                          }}
                        >
                          <span className="icon icon-ctrl-right" />
                        </button>
                      </div>
                      <ul
                        ref={sliderRankWrapper}
                        className="absolute z-0 inset-0 tabs tabs-rank scrollbar-desktop px-10 md:px-20"
                      >
                        <li className="tab-bronze" ref={sliderRankItem}>
                          <a
                            onClick={loadRank.bind(this, 1)}
                            className={selectedRank === 1 ? "is-active" : ""}
                          >
                            <div>
                              <div>
                                <span className="icon text-4xl icon-rank-bronze" />
                                <span className="h4">Bronze</span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="tab-silver">
                          <a
                            onClick={loadRank.bind(this, 2)}
                            className={selectedRank === 2 ? "is-active" : ""}
                          >
                            <div>
                              <div>
                                <span className="icon text-4xl icon-rank-silver" />
                                <span className="h4">Silver</span>
                              </div>
                              <AvatarClan id={1} size="avatar-xs" />
                            </div>
                          </a>
                        </li>
                        <li className="tab-gold">
                          <a
                            onClick={loadRank.bind(this, 3)}
                            className={selectedRank === 3 ? "is-active" : ""}
                          >
                            <div>
                              <div>
                                <span className="icon text-4xl icon-rank-gold" />
                                <span className="h4">Gold</span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="tab-platinum">
                          <a
                            onClick={loadRank.bind(this, 4)}
                            className={selectedRank === 4 ? "is-active" : ""}
                          >
                            <div>
                              <div>
                                <span className="icon text-4xl icon-rank-platinum" />
                                <span className="h4">Platinum</span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="tab-diamond">
                          <a
                            onClick={loadRank.bind(this, 5)}
                            className={selectedRank === 5 ? "is-active" : ""}
                          >
                            <div>
                              <div>
                                <span className="icon text-4xl icon-rank-diamond" />
                                <span className="h4">Diamond</span>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                  <div className="mt-4 overflow-x-auto scrollbar-desktop">
                    <div className="min-w-md px-2 md:px-0">
                      <div className="flex gap-2 items-center text-center text-sm text-ui-300 uppercase mb-2 relative z-10 h-6">
                        <div
                          className={`flex items-stretch overflow-hidden ${
                            hasRewards ? "w-80" : "w-20"
                          }`}
                        >
                          <div className={`px-2 ${hasRewards ? "w-1/3" : ""}`}>
                            #
                          </div>
                          {hasRewards && (
                            <div className="flex-1 flex gap-2 items-center justify-center">
                              <span>Rewards</span>
                              <Tooltip
                                tooltip={
                                  <div className="max-w-xs text-sm text-left text-ui-200 leading-tight normal-case space-y-2">
                                    <p>
                                      Rewards will be distributed evenly to
                                      everyone in the clan once the Ladder has
                                      ended.
                                    </p>
                                    <p>
                                      For example, if the Clan reward is
                                      [number] Coins and [number] Golden tickets
                                      - each Clan member will split on the
                                      [number] Coins and [number] Golden
                                      tickets.
                                    </p>
                                  </div>
                                }
                              >
                                <button className="text-ui-300 text-0">
                                  <span className="icon icon-16 icon-c-info" />
                                </button>
                              </Tooltip>
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="item py-0">
                            <div className="item-body text-left">
                              <span>Clan</span>
                            </div>
                            <div className="item-body text-right">
                              <span>Score</span>
                            </div>
                            <div className="item-actions flex items-center gap-2 opacity-0">
                              <div>
                                <span className="icon icon-24 icon-arrow-sm-down" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {isLoadingGroup && (
                        <ul className="items-spaced space-y-2 is-loading relative z-0">
                          {selectedClanLeaderboard &&
                            selectedClanLeaderboard.leaderboard.map(
                              (clan, clanIndex) => (
                                <>
                                  <div
                                    className="item rounded-lg h-[58px]"
                                    key={clanIndex}
                                  >
                                    <div className="item-image">
                                      <div className="avatar avatar-squircle avatar-xs">
                                        <div />
                                      </div>
                                    </div>
                                    <div className="item-body">
                                      <div className="item-title">Loading</div>
                                    </div>
                                    <div className="item-body flex justify-around items-center">
                                      <span className="text-ui-300 leading-none">
                                        Loading
                                      </span>
                                      <div className="avatar avatar-squircle avatar-xs">
                                        <div />
                                      </div>
                                    </div>
                                    <div className="item-actions flex items-center gap-2">
                                      <div>
                                        <span className="icon icon-24 icon-arrow-sm-down" />
                                      </div>
                                    </div>
                                  </div>
                                </>
                              )
                            )}
                        </ul>
                      )}
                      {!isLoadingGroup && (
                        <>
                          {selectedClanLeaderboard &&
                            selectedClanLeaderboard.leaderboard?.map(
                              (clan, clanIndex) => (
                                <>
                                  <div
                                    className={`flex gap-2 items-start mb-2 ${
                                      isLoadingGroup
                                        ? ""
                                        : "animate-slide-in-bottom animate-delay"
                                    }`}
                                    style={{
                                      "--delay":
                                        "calc(" + clanIndex + " * 0.05s)",
                                    }}
                                  >
                                    <div
                                      className={`surface rounded-lg h-[58px] flex items-stretch overflow-hidden ${
                                        prototype.getClanByID(clan.clan)?.isYou
                                          ? ""
                                          : ""
                                      } ${hasRewards ? "w-80" : "w-20"}`}
                                    >
                                      <div
                                        className={`relative text-center px-2 flex items-center justify-center ${
                                          clanIndex > 2
                                            ? "bg-ui-700/25"
                                            : "bg-ui-700"
                                        } ${hasRewards ? "w-16" : "w-full"}`}
                                      >
                                        <LeaderboardWings id={clanIndex} />
                                      </div>
                                      {clan.rewards && hasRewards && (
                                        <Rewards rewards={clan.rewards} />
                                      )}
                                    </div>
                                    <div
                                      className={`flex-1 accordion surface rounded-lg ${
                                        prototype.getClanByID(clan.clan)?.isYou
                                          ? ""
                                          : ""
                                      }`}
                                    >
                                      <Accordion
                                        isNoHover={true}
                                        buttonActivation={true}
                                        buttonActivationSimple={true}
                                        header={
                                          <>
                                            <div className="item h-[56px]">
                                              <div className="item-body">
                                                <Link
                                                  href={`/prototype/clans/${
                                                    clan.clan
                                                  }${prototype.getURLparams()}`}
                                                >
                                                  <div className="flex gap-2 items-center interactive">
                                                    <AvatarClan
                                                      id={clan.clan}
                                                      size="avatar-xs"
                                                    />
                                                    <div className="item-title whitespace-nowrap">
                                                      <span
                                                        className={`${
                                                          prototype.getClanByID(
                                                            clan.clan
                                                          )?.isYou
                                                            ? "text-main font-bold"
                                                            : ""
                                                        }`}
                                                      >
                                                        &#91;
                                                        {
                                                          prototype.getClanByID(
                                                            clan.clan
                                                          )?.tag
                                                        }
                                                        &#93;{" "}
                                                        {
                                                          prototype.getClanByID(
                                                            clan.clan
                                                          )?.nickname
                                                        }
                                                      </span>
                                                    </div>
                                                  </div>
                                                </Link>
                                              </div>
                                              <div className="item-body text-right">
                                                {clan.stats.wins -
                                                  clan.stats.losses}
                                              </div>
                                            </div>
                                          </>
                                        }
                                      >
                                        <div className="p-2 border-t border-ui-700">
                                          <ul className="space-y-2">
                                            <li className="bg-ui-850/50 rounded p-3 flex justify-between leading-none">
                                              <div className="">
                                                <h5 className="uppercase font-normal font-body text-sm text-ui-300 mb-1">
                                                  Matches played
                                                </h5>
                                                <div className="text-ui-100 text-xl lg:text-3xl">
                                                  {clan.stats.wins +
                                                    clan.stats.losses}
                                                </div>
                                              </div>
                                              <div className="flex gap-3 text-right">
                                                <div className="">
                                                  <h5 className="uppercase font-normal font-body text-sm text-ui-300 mb-1">
                                                    Win
                                                    {clan.stats.wins > 1 && (
                                                      <>s</>
                                                    )}
                                                  </h5>
                                                  <div className="text-success-500 text-xl lg:text-3xl">
                                                    {clan.stats.wins}
                                                  </div>
                                                </div>
                                                <div className="">
                                                  <div className="uppercase font-normal font-body text-sm text-ui-300 mb-1">
                                                    -
                                                  </div>
                                                </div>
                                                <div className="">
                                                  <h5 className="uppercase font-normal font-body text-sm text-ui-300 mb-1">
                                                    Loss
                                                    {clan.stats.losses > 1 && (
                                                      <>es</>
                                                    )}
                                                  </h5>
                                                  <div className="text-error-500 text-xl lg:text-3xl">
                                                    {clan.stats.losses}
                                                  </div>
                                                </div>
                                                <div className="">
                                                  <div className="uppercase font-normal font-body text-sm text-ui-300 mb-1">
                                                    =
                                                  </div>
                                                </div>
                                                <div className="">
                                                  <h5 className="uppercase font-normal font-body text-sm text-ui-300 mb-1">
                                                    Score
                                                  </h5>
                                                  <div className="text-ui-100 text-xl lg:text-3xl">
                                                    {clan.stats.wins -
                                                      clan.stats.losses}
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                            {hasPlayersDetails && (
                                              <li className="bg-ui-850/50 rounded text-center max-h-[150px] overflow-y-auto scrollbar-desktop">
                                                <table className="table table-compact text-sm w-full">
                                                  <thead>
                                                    <tr>
                                                      <th className="bg-ui-900/0 text-ui-300 w-full">
                                                        Players
                                                      </th>
                                                      <th className="bg-ui-900/0 text-ui-300 text-center">
                                                        Wins
                                                      </th>
                                                      <th className="bg-ui-900/0 text-ui-300 text-center">
                                                        Total
                                                      </th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    {prototype
                                                      .getClanByID(clan.clan)
                                                      .members.map(
                                                        (user, userIndex) => (
                                                          <tr key={userIndex}>
                                                            <td>
                                                              <Link
                                                                href={`/prototype/profile/${user}`}
                                                              >
                                                                <span className="interactive">
                                                                  &#91;
                                                                  {
                                                                    prototype.getClanByID(
                                                                      clan.clan
                                                                    )?.tag
                                                                  }
                                                                  &#93;{" "}
                                                                  {
                                                                    prototype.getUserByID(
                                                                      user
                                                                    ).nickname
                                                                  }
                                                                </span>
                                                              </Link>
                                                            </td>
                                                            <td className="text-center px-2 text-success-500">
                                                              {Math.max(
                                                                0,
                                                                Math.round(
                                                                  clan.stats
                                                                    .wins /
                                                                    2 -
                                                                    userIndex
                                                                )
                                                              )}
                                                            </td>
                                                            <td className="text-center px-2">
                                                              {Math.max(
                                                                0,
                                                                Math.round(
                                                                  clan.stats
                                                                    .losses +
                                                                    userIndex *
                                                                      2
                                                                )
                                                              )}
                                                            </td>
                                                          </tr>
                                                        )
                                                      )}
                                                  </tbody>
                                                </table>
                                              </li>
                                            )}
                                            <li className="bg-ui-850/50 rounded p-3 flex gap-2 items-center justify-between">
                                              <div className="avatar-group -space-x-2">
                                                {prototype
                                                  .getClanByID(clan.clan)
                                                  .members?.slice(0, 5)
                                                  .map((item, itemIndex) => (
                                                    <Avatar
                                                      key={itemIndex}
                                                      hasTooltip={true}
                                                      id={item}
                                                      hasLevel={false}
                                                      size="avatar-xs"
                                                    />
                                                  ))}
                                                {prototype.getClanByID(
                                                  clan.clan
                                                ).members?.length > 5 && (
                                                  <div className="flex-none text-sm text-ui-300 px-4">
                                                    +
                                                    {prototype.getClanByID(
                                                      clan.clan
                                                    ).members?.length - 5}
                                                  </div>
                                                )}
                                              </div>
                                              <div className="text-center text-ui-300 text-sm">
                                                {prototype.getClanByID(
                                                  clan.clan
                                                ).members?.length < 20 && (
                                                  <>
                                                    {20 -
                                                      prototype.getClanByID(
                                                        clan.clan
                                                      ).members?.length}{" "}
                                                    available slots
                                                  </>
                                                )}
                                              </div>
                                              <div>
                                                {prototype.getClanByID(
                                                  clan.clan
                                                ).isPublic ? (
                                                  <>
                                                    <Link href="#">
                                                      <a
                                                        type="button"
                                                        className="button button-sm button-secondary flex-1"
                                                      >
                                                        <span>Join clan</span>
                                                      </a>
                                                    </Link>
                                                  </>
                                                ) : (
                                                  <>
                                                    {prototype.getClanByID(
                                                      clan.clan
                                                    ).hasInvitedYou ? (
                                                      <>
                                                        <div className="flex gap-2">
                                                          <Link href="#">
                                                            <a
                                                              type="button"
                                                              className="button button-sm button-success flex-1"
                                                            >
                                                              <span>
                                                                Accept
                                                              </span>
                                                            </a>
                                                          </Link>
                                                          <Link href="#">
                                                            <a
                                                              type="button"
                                                              className="button button-sm button-error flex-1"
                                                            >
                                                              <span>
                                                                Decline
                                                              </span>
                                                            </a>
                                                          </Link>
                                                        </div>
                                                      </>
                                                    ) : (
                                                      <>
                                                        <Link href="#">
                                                          <a
                                                            type="button"
                                                            className="button button-sm button-secondary flex-1"
                                                          >
                                                            <span>
                                                              Apply to join
                                                            </span>
                                                          </a>
                                                        </Link>
                                                      </>
                                                    )}
                                                  </>
                                                )}
                                              </div>
                                            </li>
                                          </ul>
                                          <div className="mt-2 border-t border-ui-700 pl-2 pt-2 flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                              <Link
                                                href={`/prototype/clans/${
                                                  prototype.getClanByID(
                                                    clan.clan
                                                  )?.id
                                                }`}
                                              >
                                                <a className="link link-main link-hover flex items-center gap-1 text-sm">
                                                  <span className="icon icon-multiple-12" />
                                                  <span>Go to Clan page</span>
                                                </a>
                                              </Link>
                                            </div>
                                            <button
                                              type="button"
                                              className="button button-tertiary button-sm"
                                            >
                                              <span className="icon icon-c-warning" />
                                              <span>Report abuse</span>
                                            </button>
                                          </div>
                                        </div>
                                      </Accordion>
                                    </div>
                                  </div>
                                </>
                              )
                            )}
                        </>
                      )}
                    </div>
                  </div>
                  {!isLoadingRank && (
                    <div>
                      <div className="flex gap-2 justify-center items-center my-4">
                        <button
                          type="button"
                          onClick={loadGroup.bind(this, selectedGroup)}
                          className="button button-ghost"
                        >
                          <span className="icon icon-arrow-up" />
                        </button>
                        <button
                          type="button"
                          onClick={loadGroup.bind(this, selectedGroup)}
                          className="button button-ghost"
                        >
                          <span>Top 15</span>
                        </button>
                        <button
                          type="button"
                          className="button button-ghost is-active"
                        >
                          <span>My position</span>
                        </button>
                        <button
                          type="button"
                          onClick={loadGroup.bind(this, selectedGroup)}
                          className="button button-ghost"
                        >
                          <span>Bottom 15</span>
                        </button>
                        <button
                          type="button"
                          onClick={loadGroup.bind(this, selectedGroup)}
                          className="button button-ghost"
                        >
                          <span className="icon icon-arrow-down" />
                        </button>
                      </div>
                      <div className="text-center my-4 text-sm">
                        <div className="text-ui-400">
                          The leaderboard is updated every X minute,{" "}
                          <a href="#" className="link link-main">
                            reload the page
                          </a>{" "}
                          for an update
                        </div>
                        <div className="text-ui-300">
                          Leaderboard ID:{" "}
                          <span className="text-ui-100 font-bold">225VG19</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}
        </>
      )}
      {/* for demo purposes only */}
      <section className="text-sm text-ui-100/0 hover:text-ui-100 flex flex-col items-stretch">
        <a onClick={() => setHasRiot(!hasRiot)}>
          Toggle has Riot {hasRiot ? "ON" : "OFF"}
        </a>
        <a onClick={() => setHasRewards(!hasRewards)}>
          Toggle has Rewards {hasRewards ? "ON" : "OFF"}
        </a>
        <a onClick={() => setIsInAClan(!isInAClan)}>
          Toggle in a clan {isInAClan ? "ON" : "OFF"}
        </a>
        <a onClick={() => setIsEmpty(!isEmpty)}>
          Toggle empty state {isEmpty ? "ON" : "OFF"}
        </a>
        <a onClick={() => setHasRanks(!hasRanks)}>
          Toggle ranks {hasRanks ? "ON" : "OFF"}
        </a>
        <a onClick={() => setHasPlayersDetails(!hasPlayersDetails)}>
          Toggle players details {hasPlayersDetails ? "ON" : "OFF"}
        </a>
        <a onClick={() => SetHasEligibleMembers(!hasEligibleMembers)}>
          Toggle eligible members {hasEligibleMembers ? "ON" : "OFF"}
        </a>
        <a onClick={() => openmodalClanEventOnboarding()}>
          Open Modal Onboarding
        </a>
      </section>
    </>
  );
}
