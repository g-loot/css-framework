import React, { useEffect, useState, useContext } from "react";

import { UiContext } from "../../../../contexts/ui";
import { usePrototypeData } from "../../../../contexts/prototype";
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

const achievementsList = [
  {
    level: 1,
    name: "Mission Expert",
    description: "Complete the entire mission ladder in 1 day.",
    icon: "missionladder",
    percent: 50,
    progress: 12,
    from: "24",
    to: "300 XP",
  },
  {
    level: 2,
    name: "Mission Ladder",
    description: "Complete 30 missions",
    icon: "mission",
    percent: 35,
    progress: 15,
    from: "15",
    to: "30 XP",
  },
  {
    level: 3,
    name: "Streak",
    description: "Reach a 100 days streak",
    icon: "streak",
    percent: 80,
    progress: 10,
    from: "90",
    to: "100 days",
  },
  {
    level: 4,
    name: "Solo Ladder",
    description: "Finish #1 in the Gold League of a solo Ladder",
    icon: "sololadder",
    percent: 0,
    progress: 0,
    from: "0",
    to: "1",
  },
  {
    level: 5,
    name: "Clan Supporter",
    description: "Gift 200 tokens to members of your clan",
    icon: "clansupporter",
    percent: 75,
    progress: 10,
    from: "150",
    to: "200",
  },
  {
    level: 0,
    name: "",
    description: "",
    icon: "",
    percent: 75,
    progress: 10,
    from: "150",
    to: "200",
  },
  {
    level: 0,
    name: "",
    description: "",
    icon: "",
    percent: 75,
    progress: 10,
    from: "150",
    to: "200",
  },
  {
    level: 0,
    name: "",
    description: "",
    icon: "",
    percent: 75,
    progress: 10,
    from: "150",
    to: "200",
  },
];

export default function TabProfileOverview() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const { user_id } = router.query;
  const isEmpty = query.empty === "true" ? true : false;
  const emptyClan = query.emptyclan === "true" ? true : false;
  const modalAchievement = query.modalachievement === "true" ? true : false;

  useEffect(() => {
    setSelectedUser(prototype.getUserByID(user_id));
  }, [user_id]);

  useEffect(() => {
    if (modalAchievement) {
      openModalAchievementReceived();
    }
  }, [modalAchievement]);

  function openModalAchievementReceived(level, name, icon) {
    uiContext.openModal(
      <ModalAchievementReceived level={level} name={name} icon={icon} />
    );
  }

  return (
    <>
      {selectedUser && (
        <>
          {isEmpty && (
            <>
              <div className="surface rounded-lg px-4 py-8 text-center">
                <div className="max-w-xs mx-auto">
                  <span className="icon icon-smile text-6xl text-ui-500" />
                  <div className="mt-2 mb-6">
                    <p className="text-sm text-ui-400">
                      You have not taken part in any Ladders yet.
                    </p>
                    <p className="text-lg text-ui-300">
                      Play tournaments and competitions to see the history of
                      your earnings.
                    </p>
                  </div>
                  <Link href="/prototype/valorant/ladders">
                    <a className="button button-main">
                      <span>Browse Ladders</span>
                    </a>
                  </Link>
                </div>
              </div>
            </>
          )}
          {!isEmpty && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-x-4">
              <div className="col-span-1 space-y-4">
                <section className="surface md:rounded">
                  <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                    <h2 className="h6">About</h2>
                  </div>
                  <div className="p-4 space-y-4">
                    {selectedUser.bio && (
                      <p className="text-ui-300 mt-1 text-left">
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
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-ui-300">
                        <span className="icon icon-20 icon-riotgames-symbol" />
                        <span className="flex-1">augieaugie#2341</span>
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
                            message="tag copied"
                          />
                        </Tooltip>
                      </li>
                      <li className="flex items-center gap-2 text-ui-300">
                        <span className="icon icon-20 icon-game-pubg-symbol" />
                        <span className="flex-1">PUBG_Player_1</span>
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
                            message="tag copied"
                          />
                        </Tooltip>
                      </li>
                    </ul>
                  </div>
                </section>
                <section className="surface md:rounded">
                  <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                    <h2 className="h6">Clan</h2>
                  </div>
                  <div className="space-y-4">
                    {!emptyClan ? (
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
                          <div className="bg-gradient-radial-to-b from-ui-500/75 to-ui-600/50 backdrop-blur rounded-lg shadow-lg w-auto p-3 text-right space-y-3">
                            <div className="text-center">
                              {selectedUser.nickname} is not part of a clan.
                            </div>
                          </div>
                        ) : (
                          <div className="bg-gradient-radial-to-b from-ui-500/75 to-ui-600/50 backdrop-blur rounded-lg shadow-lg w-auto p-3 text-right space-y-3">
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
                  <section className="surface md:rounded">
                    <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                      <h2 className="h6">Games</h2>
                      <Link href={`${selectedUser.id}?tab=games`}>
                        <a className="link link-hover text-ui-300 text-sm">
                          View all
                        </a>
                      </Link>
                    </div>
                    <div>
                      <Slider
                        itemWidth={138 + 16 + 16}
                        bgColor="from-ui-800 via-ui-800 to-ui-800/0"
                      >
                        <div className="flex gap-6 py-2 px-6 hoverhighlight">
                          {selectedUser.games?.map((game, gameIndex) => (
                            <Link key={gameIndex} href={`${selectedUser.id}?tab=games`}>
                              <a className="interactive rounded overflow-hidden w-24">
                              <img src={prototype.getGameByID(game).assets.cover} alt={prototype.getGameByID(game).name} className="aspect-cover object-cover" />
                              </a>
                            </Link>
                          ))}
                        </div>
                      </Slider>
                    </div>
                  </section>
                )}
              </div>
              <div className="col-span-2 space-y-4">
                <section className="surface md:rounded">
                  <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                    <h2 className="h6">Latest Achievements</h2>
                    <Link href={`${selectedUser.id}?tab=achievements`}>
                      <a className="link link-hover text-ui-300 text-sm">
                        View all
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Slider
                      itemWidth={138 + 16 + 16}
                      bgColor="from-ui-800 via-ui-800 to-ui-800/0"
                    >
                      <div className="flex gap-6 py-2 px-6">
                        {achievementsList.map((item, itemIndex) => (
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
                              }`}
                              onClick={openModalAchievementReceived.bind(
                                this,
                                item.level,
                                item.name,
                                item.icon
                              )}
                            >
                              <i />
                              <i />
                              <div
                                className={`achievement-level-${item.level}`}
                                data-tooltip={item.name}
                              >
                                <AchievementFrame
                                  url={`https://res.cloudinary.com/gloot/image/upload/v1674739347/Stryda/achievements/achievement-frame-lvl${item.level}-animated.svg`}
                                />
                                {item.level > 0 && (
                                  <AchievementIcon
                                    url={`https://res.cloudinary.com/gloot/image/upload/v1674739347/Stryda/achievements/achivement-icon-${item.icon}.svg`}
                                  />
                                )}
                              </div>
                              {item.level > 0 && (
                                <span className="text-xs text-ui-300 uppercase">
                                  Level {item.level}
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </Slider>
                  </div>
                </section>
                <section className="surface md:rounded">
                    <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                      <h2 className="h6">Ladders</h2>
                      <Link href={`${selectedUser.id}?tab=games`}>
                        <a className="link link-hover text-ui-300 text-sm">
                          View all
                        </a>
                      </Link>
                    </div>
                    <div>
                      {selectedUser.ladders ? (
                      <Slider
                        itemWidth={397 + 16}
                        bgColor="from-ui-800 via-ui-800 to-ui-800/0"
                        isHover={true}
                      >
                        <div className="flex gap-6 py-2 px-6 hoverhighlight">
                        {selectedUser.ladders?.map((ladder, ladderIndex) => (
                            <>
                              <LadderCardSecondary
                                key={ladderIndex}
                                ladder={prototype.getLadderByID(ladder.gameSlug, ladder.id)}
                                isHorizontal={false}
                                isClan={false}
                                gameID={1}
                                className="surface-ui-700"
                              />
                            </>
                          ))}
                        </div>
                      </Slider>
                      ) : (
                        <div className="text-center p-4">
                          <span className="icon icon-ladder text-6xl text-ui-500" />
                          <p className="mt-2 text-ui-300">{selectedUser.nickname} is not competing in any ladders</p>
                        </div>
                      )}
                    </div>
                  </section>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
