import React, { useEffect, useState, useContext } from "react";

import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import ReadMore from "../../../../components/ReadMore/ReadMore";
import AchievementFrame from "../../../../components/Achievements/AchievementFrame";
import AchievementIcon from "../../../../components/Achievements/AchievementIcon";
import ModalAchievementReceived from "../../modal-achievementreceived";
import Link from "next/link";
import Slider from "../../../../components/Slider/Slider";
import Tooltip from "../../../../components/Tooltip/Tooltip";
import ButtonFeedback from "../../../../components/Button/ButtonFeedback";
import GameIcon from "../../../../components/GameIcon/GameIcon";
import LadderCardSecondary from "../../../../components/Ladder/LadderCardSecondary";
import ModalLevelUp from "../../modal-levelup";
import ProfileHeader from "../header";

export default function TabProfileOverview() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const { user_id } = router.query;
  const isEmpty = query.empty === "true" ? true : false;
  const modalAchievement = query.modalachievement === "true" ? true : false;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1200);
    }
  }, [loading]);

  useEffect(() => {
    setSelectedUser(prototype.getUserByID(user_id));
  }, [user_id]);

  useEffect(() => {
    if (modalAchievement) {
      openModalAchievementReceived();
    }
  }, [modalAchievement]);

  function openModalAchievementReceived(item) {
    uiContext.openModal(<ModalAchievementReceived item={item} />);
  }

  function openmodalLeveLUp() {
    uiContext.openModal(<ModalLevelUp />);
  }

  return (
    <>
      {selectedUser && (
        <>
          {/*
          <ProfileHeader />
      */}
          <div className="flex flex-col lg:flex-row items-start gap-y-4 lg:gap-x-4 animate-slide-in-bottom">
            <div className="w-full lg:w-80 space-y-4">
              <section
                className={`surface md:rounded ${loading ? "is-loading" : ""}`}
              >
                <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                  <h2 className="h6 text-ui-100">About</h2>
                  {selectedUser.isYou && (
                    <Link
                      href={`/prototype/profile/settings${prototype.getURLparams()}`}
                    >
                      <a className="link link-hover text-ui-300 text-sm leading-none">
                        Edit
                      </a>
                    </Link>
                  )}
                </div>
                <div className="p-4 space-y-4">
                  {selectedUser.bio && !isEmpty && (
                    <p className="text-ui-300 mt-1 text-left pb-4 border-b border-ui-700">
                      <ReadMore content={selectedUser.bio} max={150} />
                    </p>
                  )}
                  <div className="flex gap-1">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link p-1 text-0"
                    >
                      <span className="icon icon-20 text-ui-300 icon-twitch" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link p-1 text-0"
                    >
                      <span className="icon icon-20 text-ui-300 icon-logo-twitter" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link p-1 text-0"
                    >
                      <span className="icon icon-20 text-ui-300 icon-discord" />
                    </a>
                  </div>
                  {selectedUser.socials?.riotValorantNickname &&
                    selectedUser.socials?.discord && (
                      <ul className="space-y-2 pt-3 border-t border-y-ui-700">
                        {selectedUser.socials?.riotValorantNickname && (
                          <li className="flex items-center gap-2 text-ui-300">
                            <span className="icon icon-20 icon-game-valorant-symbol" />
                            <a
                              className="flex-1 link link-hover flex flex-col leading-tight"
                              onClick={() => {
                                uiContext.openToastr({
                                  size: "medium",
                                  text: "Game tag copied to your clipboard",
                                  color: "green",
                                  autoDelete: true,
                                  autoDeleteDelay: 2500,
                                });
                                navigator.clipboard.writeText(
                                  `${selectedUser.socials?.riotValorantNickname}#${selectedUser.socials?.riotValorantHashtag}`
                                );
                              }}
                            >
                              <span>{selectedUser.socials?.riotValorantNickname}#
                              {selectedUser.socials?.riotValorantHashtag}</span>
                              <span className="text-sm text-ui-400">EUNE</span>
                            </a>
                            <Tooltip
                              placement="left"
                              tooltip={
                                <div className="max-w-xs text-sm text-center leading-tight">
                                  Copy
                                </div>
                              }
                            >
                              <ButtonFeedback
                                variant="button-ghost rounded-full"
                                icon="icon-document-copy"
                                message="Game tag copied to your clipboard"
                              />
                            </Tooltip>
                          </li>
                        )}
                        {selectedUser.socials?.riotLeagueofLegendsNickname && (
                          <li className="flex items-center gap-2 text-ui-300">
                            <span className="icon icon-20 icon-game-leagueoflegends-symbol" />
                            <a
                              className="flex-1 link link-hover flex flex-col leading-tight"
                              onClick={() => {
                                uiContext.openToastr({
                                  size: "medium",
                                  text: "Game tag copied to your clipboard",
                                  color: "green",
                                  autoDelete: true,
                                  autoDeleteDelay: 2500,
                                });
                                navigator.clipboard.writeText(
                                  `${selectedUser.socials?.riotLeagueofLegendsNickname}#${selectedUser.socials?.riotLeagueofLegendsHashtag}`
                                );
                              }}
                            >
                              <span>{selectedUser.socials?.riotLeagueofLegendsNickname}#
                              {selectedUser.socials?.riotLeagueofLegendsHashtag}</span>
                              <span className="text-sm text-ui-400">EUNE</span>
                            </a>
                            <Tooltip
                              placement="left"
                              tooltip={
                                <div className="max-w-xs text-sm text-center leading-tight">
                                  Copy
                                </div>
                              }
                            >
                              <ButtonFeedback
                                variant="button-ghost rounded-full"
                                icon="icon-document-copy"
                                message="Game tag copied to your clipboard"
                              />
                            </Tooltip>
                          </li>
                        )}
                        {selectedUser.socials?.discord && (
                          <li className="flex items-center gap-2 text-ui-300">
                            <span className="icon icon-20 icon-steam" />
                            <a
                              className="flex-1 link link-hover flex flex-col leading-tight"
                              onClick={() => {
                                uiContext.openToastr({
                                  size: "medium",
                                  text: "Game tag copied to your clipboard",
                                  color: "green",
                                  autoDelete: true,
                                  autoDeleteDelay: 2500,
                                });
                                navigator.clipboard.writeText(
                                  `${selectedUser.socials?.discord}`
                                );
                              }}
                            >
                              {selectedUser.socials?.discord}
                            </a>
                            <Tooltip
                              placement="left"
                              tooltip={
                                <div className="max-w-xs text-sm text-center leading-tight">
                                  Copy
                                </div>
                              }
                            >
                              <ButtonFeedback
                                variant="button-ghost rounded-full"
                                icon="icon-document-copy"
                                message="Game tag copied to your clipboard"
                              />
                            </Tooltip>
                          </li>
                        )}
                      </ul>
                    )}
                </div>
              </section>
              <section
                className={`surface md:rounded ${loading ? "is-loading" : ""}`}
              >
                <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                  <h2 className="h6 text-ui-100">Level {selectedUser.level}</h2>
                  <Tooltip
                    tooltip={
                      <div className="max-w-xs text-sm text-center leading-tight">
                        Earn XP to progress to the next level
                      </div>
                    }
                  >
                    <button className="text-ui-300 text-0">
                      <span className="icon icon-16 icon-c-info" />
                    </button>
                  </Tooltip>
                </div>
                <div className="p-4 space-y-1">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-main text-center text-lg">10423</span>
                    <span className="icon icon-xp-symbol text-4xl text-main" />
                  </div>
                  <div className="flex justify-between items-baseline text-sm mt-2 mb-1 text-ui-300">
                    <span>13000</span>
                    <span>15000 XP</span>
                  </div>
                  <div
                    className="progressbar progressbar-sm"
                    style={{ "--percent": "75" }}
                  >
                    <div />
                  </div>
                </div>
              </section>
              <section
                className={`surface md:rounded ${loading ? "is-loading" : ""}`}
              >
                <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                  <h2 className="h6 text-ui-100">Clan</h2>
                  {selectedUser.clan && !isEmpty && (
                    <Link
                      href={`/prototype/clans/${
                        selectedUser.clan
                      }${prototype.getURLparams()}`}
                    >
                      <a className="link link-hover text-ui-300 text-sm leading-none">
                        View
                      </a>
                    </Link>
                  )}
                </div>
                <div className="space-y-4">
                  {!isEmpty ? (
                    <>
                      {selectedUser.clan ? (
                        <Link
                          href={`/prototype/clans/${
                            selectedUser.clan
                          }${prototype.getURLparams()}`}
                        >
                          <div className="item interactive w-auto">
                            <div className="item-image">
                              <div className="avatar avatar-sm avatar-squircle">
                                <div>
                                  <img
                                    src={
                                      prototype.getClanByID(selectedUser.clan)
                                        .avatar
                                    }
                                    alt="avatar"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="item-body pr-2">
                              <div className="text-sm text-ui-300 leading-none">
                                Clan member of
                              </div>
                              <div className="item-title text-xl text-ui-100">
                                &#91;
                                {prototype.getClanByID(selectedUser.clan).tag}
                                &#93;{" "}
                                {
                                  prototype.getClanByID(selectedUser.clan)
                                    .nickname
                                }
                              </div>
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <div className="w-auto p-3 text-right space-y-3">
                          <div className="text-center">
                            {selectedUser.nickname} is not part of a clan.
                          </div>
                          <Link href="#">
                            <a
                              type="button"
                              className="button button-sm button-primary w-full"
                            >
                              <span>Recruit to your clan</span>
                            </a>
                          </Link>
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      {!selectedUser.isYou ? (
                        <div className="p-3 text-right space-y-3">
                          <div className="text-center">
                            {selectedUser.nickname} is not part of a clan.
                          </div>
                        </div>
                      ) : (
                        <div className="p-3 text-right space-y-3">
                          <div className="text-center">
                            You are not part of a clan.
                          </div>
                          <Link href="/prototype/clans/search">
                            <a
                              type="button"
                              className="button button-sm button-primary w-full"
                            >
                              <span>Join a clan</span>
                            </a>
                          </Link>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </section>
              {selectedUser.games && (
                <section
                  className={`surface md:rounded ${
                    loading ? "is-loading" : ""
                  }`}
                >
                  <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                    <h2 className="h6 text-ui-100">
                      Games ({selectedUser.games.length})
                    </h2>
                    {/*
                  <Link
                    href={`${
                      selectedUser.id
                    }?tab=stats${prototype.getURLparams()}`}
                  >
                    <a className="link link-hover text-ui-300 text-sm leading-none">View</a>
                  </Link>
                  */}
                  </div>
                  <ul className="flex gap-4 p-4">
                    {selectedUser.games?.map((game, gameIndex) => (
                      <li key={gameIndex}>
                        <GameIcon game={game} />
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
            <div className="flex-1 space-y-4 lg:overflow-hidden max-w-[100%]">
              <section
                className={`surface md:rounded ${loading ? "is-loading" : ""}`}
              >
                <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                  <h2 className="h6 text-ui-100">Stats</h2>
                  <Link
                    href={`${
                      selectedUser.id
                    }?tab=stats${prototype.getURLparams()}`}
                  >
                    <a className="link link-hover text-ui-300 text-sm leading-none">
                      View
                    </a>
                  </Link>
                </div>
                <div className="leading-tight grid grid-cols-2 xl:grid-cols-4 flex-1 gap-4 p-4">
                  {!isEmpty ? (
                    <>
                      <div className="pl-4 border-l border-ui-600">
                        <div className="text-xs lg:text-sm text-ui-200 uppercase">
                          Ladders played
                        </div>
                        <div className="text-ui-100 text-xl lg:text-3xl">
                          {selectedUser.stats.playedLadders ? (
                            <>{selectedUser.stats.playedLadders}</>
                          ) : (
                            <>——</>
                          )}
                        </div>
                        {selectedUser.stats.playedLadders && (
                          <div className="hidden text-xs lg:text-sm text-ui-300">
                            Top 25%
                          </div>
                        )}
                      </div>
                      <div className="pl-4 border-l border-ui-600">
                        <div className="text-xs lg:text-sm text-ui-200 uppercase">
                          Avg. placement
                        </div>
                        <div className="text-ui-100 text-xl lg:text-3xl">
                          {selectedUser.stats.avgPlacement ? (
                            <>#{selectedUser.stats.avgPlacement}</>
                          ) : (
                            <>——</>
                          )}
                        </div>
                        {selectedUser.stats.avgPlacement && (
                          <div className="hidden text-xs lg:text-sm text-ui-300">
                            Top 18%
                          </div>
                        )}
                      </div>
                      <div className="pl-4 border-l border-ui-600">
                        <div className="text-xs lg:text-sm text-ui-200 uppercase">
                          Times in top 50
                        </div>
                        <div className="text-ui-100 text-xl lg:text-3xl">
                          {selectedUser.stats.timesInTop ? (
                            <>{selectedUser.stats.timesInTop}</>
                          ) : (
                            <>——</>
                          )}
                        </div>
                        {selectedUser.stats.timesInTop && (
                          <div className="hidden text-xs lg:text-sm text-ui-300">
                            Top 11%
                          </div>
                        )}
                      </div>
                      <div className="pl-4 border-l border-ui-600">
                        <div className="text-xs lg:text-sm text-ui-200 uppercase">
                          Missions completed
                        </div>
                        <div className="text-ui-100 text-xl lg:text-3xl">
                          {selectedUser.stats.completedMissions ? (
                            <>{selectedUser.stats.completedMissions}</>
                          ) : (
                            <>——</>
                          )}
                        </div>
                        {selectedUser.stats.completedMissions && (
                          <div className="hidden text-xs lg:text-sm text-ui-300">
                            Top 4.5%
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="pl-4 border-l border-ui-600">
                        <div className="text-xs lg:text-sm text-ui-200 uppercase">
                          Ladders played
                        </div>
                        <div className="text-ui-100 text-xl lg:text-3xl">
                          ——
                        </div>
                      </div>
                      <div className="pl-4 border-l border-ui-600">
                        <div className="text-xs lg:text-sm text-ui-200 uppercase">
                          Avg. placement
                        </div>
                        <div className="text-ui-100 text-xl lg:text-3xl">
                          ——
                        </div>
                      </div>
                      <div className="pl-4 border-l border-ui-600">
                        <div className="text-xs lg:text-sm text-ui-200 uppercase">
                          Times in top 50
                        </div>
                        <div className="text-ui-100 text-xl lg:text-3xl">
                          ——
                        </div>
                      </div>
                      <div className="pl-4 border-l border-ui-600">
                        <div className="text-xs lg:text-sm text-ui-200 uppercase">
                          Missions completed
                        </div>
                        <div className="text-ui-100 text-xl lg:text-3xl">
                          ——
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </section>
              <section
                className={`surface md:rounded ${loading ? "is-loading" : ""}`}
              >
                <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                  <h2 className="h6 text-ui-100">
                    Achievements{" "}
                    {!isEmpty && (
                      <>({selectedUser.achievements?.badges?.length})</>
                    )}
                  </h2>
                  <Link
                    href={`${
                      selectedUser.id
                    }?tab=achievements${prototype.getURLparams()}`}
                  >
                    <a className="link link-hover text-ui-300 text-sm leading-none">
                      View
                    </a>
                  </Link>
                </div>
                <div>
                  {isEmpty || selectedUser.achievements?.badges.length === 0 ? (
                    <div className="text-center p-4">
                      <span className="icon icon-medal text-6xl text-ui-500" />
                      <p className="mt-2 text-ui-300">
                        {selectedUser.isYou ? (
                          <>You haven&#39;t unlocked any achievements yet</>
                        ) : (
                          <>
                            {selectedUser.nickname} hasn&#39;t unlocked any
                            achievements yet
                          </>
                        )}
                      </p>
                    </div>
                  ) : (
                    <Slider
                      itemWidth={138 + 16 + 16}
                      bgColor="from-ui-800 via-ui-800 to-ui-800/0"
                    >
                      <div className="flex gap-4 px-4">
                        {selectedUser.achievements?.badges?.map(
                          (item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="animate-slide-in-right animate-delay"
                              style={{
                                "--delay": "calc(" + itemIndex + " * 0.05s)",
                              }}
                            >
                              <div
                                className={`w-32 h-32 achievement ${
                                  item.level > 0
                                    ? "cursor-pointer"
                                    : "pointer-events-none"
                                }  ${item.level === 5 ? "is-completed" : ""}`}
                                onClick={openModalAchievementReceived.bind(
                                  this,
                                  item
                                )}
                              >
                                <i />
                                <i />
                                <div
                                  className={`achievement-level-${item.level}`}
                                  data-tooltip={`Level ${item.level}`}
                                >
                                  <AchievementFrame
                                    url={`https://res.cloudinary.com/gloot/image/upload/v1678871888/Stryda/achievements/frames/achievement-frame-lvl${item.level}-animated.svg`}
                                  />
                                  {item.level > 0 && (
                                    <AchievementIcon
                                      url={`https://res.cloudinary.com/gloot/image/upload/v1678872380/Stryda/achievements/icons/achievement-icon-${
                                        prototype.getAchievementitemByID(
                                          1,
                                          item.item
                                        ).icon
                                      }.svg`}
                                    />
                                  )}
                                </div>
                                {item.level > 0 && (
                                  <span className="text-xs uppercase">
                                    {
                                      prototype.getAchievementitemByID(
                                        1,
                                        item.item
                                      ).name
                                    }
                                  </span>
                                )}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </Slider>
                  )}
                </div>
              </section>
              <section
                className={`surface md:rounded ${loading ? "is-loading" : ""}`}
              >
                <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                  <h2 className="h6 text-ui-100">Ladders</h2>
                </div>
                <div>
                  {selectedUser.ladders && !isEmpty ? (
                    <Slider
                      itemWidth={397 + 16}
                      bgColor="from-ui-800 via-ui-800 to-ui-800/0"
                    >
                      <div className="flex gap-4 px-4">
                        {selectedUser.ladders?.map((ladder, ladderIndex) => (
                          <>
                            {selectedUser.isYou ? (
                              <>
                                {prototype.getLadderByID(
                                  ladder.gameSlug,
                                  ladder.id
                                ).isEnrolled && (
                                  <>
                                    <LadderCardSecondary
                                      key={ladderIndex}
                                      ladder={prototype.getLadderByID(
                                        ladder.gameSlug,
                                        ladder.id
                                      )}
                                      isHorizontal={false}
                                      selectedUser={selectedUser}
                                      isClan={false}
                                      gameID={
                                        prototype.getGameBySlug(ladder.gameSlug)
                                          .id
                                      }
                                      className="surface-ui-700"
                                    />
                                  </>
                                )}
                              </>
                            ) : (
                              <LadderCardSecondary
                                key={ladderIndex}
                                ladder={prototype.getLadderByID(
                                  ladder.gameSlug,
                                  ladder.id
                                )}
                                isHorizontal={false}
                                selectedUser={selectedUser}
                                isClan={false}
                                gameID={
                                  prototype.getGameBySlug(ladder.gameSlug).id
                                }
                                className="surface-ui-700"
                              />
                            )}
                          </>
                        ))}
                      </div>
                    </Slider>
                  ) : (
                    <div className="text-center p-4">
                      <span className="icon icon-ladder text-6xl text-ui-500" />
                      <p className="mt-2 text-ui-300">
                        {selectedUser.isYou ? (
                          <>You have not joined any Ladders</>
                        ) : (
                          <>
                            {selectedUser.nickname} has not entered any Ladders
                          </>
                        )}
                      </p>
                    </div>
                  )}
                </div>
              </section>
            </div>
          </div>
        </>
      )}
      {/* for demo purposes only */}
      <section className="text-ui-100/0 hover:text-ui-100 inline-flex flex-col mt-4">
        <a onClick={() => openModalAchievementReceived()}>
          Open achievemnts received modal
        </a>
        <a onClick={() => openmodalLeveLUp()}>Open level up modal</a>
      </section>
    </>
  );
}
