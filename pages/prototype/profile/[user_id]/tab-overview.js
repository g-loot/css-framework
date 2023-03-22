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

export default function TabProfileOverview() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const { user_id } = router.query;
  const isEmpty = query.empty === "true" ? true : false;
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
        <div className="flex flex-col lg:flex-row items-start gap-y-4 lg:gap-x-4 animate-slide-in-bottom">
          <div className="w-full lg:w-80 space-y-4">
            <section className="surface md:rounded">
              <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                <h2 className="h6 text-ui-100">About</h2>
                {selectedUser.isYou && (
                  <Link
                    href={`/prototype/profile/settings${prototype.getURLparams()}`}
                  >
                    <a className="link link-hover text-ui-300 text-sm">Edit</a>
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
                {!isEmpty && (
                  <ul className="space-y-2 pt-3 border-t border-y-ui-700">
                    <li className="flex items-center gap-2 text-ui-300">
                      <span className="icon icon-20 icon-riotgames-symbol" />
                      <a
                        className="flex-1 link link-hover"
                        onClick={() => {
                          uiContext.openToastr({
                            size: "medium",
                            text: "Game tag copied to your clipboard",
                            color: "green",
                            autoDelete: true,
                            autoDeleteDelay: 2500,
                          });
                          navigator.clipboard.writeText(`${selectedUser.nickname}#2341`);
                        }}
                      >
                        {selectedUser.nickname}#2341
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
                    <li className="flex items-center gap-2 text-ui-300">
                      <span className="icon icon-20 icon-steam" />
                      <a
                        className="flex-1 link link-hover"
                        onClick={() => {
                          uiContext.openToastr({
                            size: "medium",
                            text: "Game tag copied to your clipboard",
                            color: "green",
                            autoDelete: true,
                            autoDeleteDelay: 2500,
                          });
                          navigator.clipboard.writeText(`PUBG_${selectedUser.nickname}`);
                        }}
                      >
                        PUBG_{selectedUser.nickname}
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
                  </ul>
                )}
              </div>
            </section>
            <section className="surface md:rounded">
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
            <section className="surface md:rounded">
              <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                <h2 className="h6 text-ui-100">Clan</h2>
                {selectedUser.clan && !isEmpty && (
                  <Link
                    href={`/prototype/clans/${
                      selectedUser.clan
                    }${prototype.getURLparams()}`}
                  >
                    <a className="link link-hover text-ui-300 text-sm">View</a>
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
              <section className="surface md:rounded">
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
                    <a className="link link-hover text-ui-300 text-sm">View</a>
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
            <section className="surface md:rounded">
              <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                <h2 className="h6 text-ui-100">Stats</h2>
                <Link
                  href={`${
                    selectedUser.id
                  }?tab=achievements${prototype.getURLparams()}`}
                >
                  <a className="link link-hover text-ui-300 text-sm">View</a>
                </Link>
              </div>
              <div className="leading-tight grid grid-cols-2 xl:grid-cols-4 flex-1 gap-4 p-4">
                {!isEmpty ? (
                  <>
                    <div className="pl-4 border-l border-ui-600">
                      <div className="text-xs lg:text-sm text-ui-200 uppercase">
                        Ladders played
                      </div>
                      <div className="text-ui-100 text-xl lg:text-3xl">523</div>
                      <div className="text-xs lg:text-sm text-ui-300">
                        Top 25%
                      </div>
                    </div>
                    <div className="pl-4 border-l border-ui-600">
                      <div className="text-xs lg:text-sm text-ui-200 uppercase">
                        Avg. placement
                      </div>
                      <div className="text-ui-100 text-xl lg:text-3xl">#42</div>
                      <div className="text-xs lg:text-sm text-ui-300">
                        Top 18%
                      </div>
                    </div>
                    <div className="pl-4 border-l border-ui-600">
                      <div className="text-xs lg:text-sm text-ui-200 uppercase">
                        Times in top 50
                      </div>
                      <div className="text-ui-100 text-xl lg:text-3xl">4</div>
                      <div className="text-xs lg:text-sm text-ui-300">
                        Top 11%
                      </div>
                    </div>
                    <div className="pl-4 border-l border-ui-600">
                      <div className="text-xs lg:text-sm text-ui-200 uppercase">
                        Missions completed
                      </div>
                      <div className="text-ui-100 text-xl lg:text-3xl">123</div>
                      <div className="text-xs lg:text-sm text-ui-300">
                        Top 4.5%
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="pl-4 border-l border-ui-600">
                      <div className="text-xs lg:text-sm text-ui-200 uppercase">
                        Ladders played
                      </div>
                      <div className="text-ui-100 text-xl lg:text-3xl">——</div>
                    </div>
                    <div className="pl-4 border-l border-ui-600">
                      <div className="text-xs lg:text-sm text-ui-200 uppercase">
                        Avg. placement
                      </div>
                      <div className="text-ui-100 text-xl lg:text-3xl">——</div>
                    </div>
                    <div className="pl-4 border-l border-ui-600">
                      <div className="text-xs lg:text-sm text-ui-200 uppercase">
                        Times in top 50
                      </div>
                      <div className="text-ui-100 text-xl lg:text-3xl">——</div>
                    </div>
                    <div className="pl-4 border-l border-ui-600">
                      <div className="text-xs lg:text-sm text-ui-200 uppercase">
                        Missions completed
                      </div>
                      <div className="text-ui-100 text-xl lg:text-3xl">——</div>
                    </div>
                  </>
                )}
              </div>
              {/*
               <div>
                 <Slider
                   itemWidth={200 + 16}
                   bgColor="from-ui-800 via-ui-800 to-ui-800/0"
                 >
                   <div className="space-y-4">
                     <div className="flex items-center gap-6 px-6 whitespace-nowrap">
                       <div className="w-40">
                         <img
                           src="https://res.cloudinary.com/gloot/image/upload/v1673941215/Stryda/logos/stryda-logo-ladders-simple.svg"
                           width="auto"
                           height="auto"
                           alt=""
                           className="h-10"
                         />
                       </div>
                       <div className="pl-4 border-l border-ui-600">
                         <div className="text-xs lg:text-sm text-ui-300 uppercase font-bold">
                           Number of Ladders played
                         </div>
                         <div className="text-ui-100 text-xl lg:text-3xl">
                           22
                         </div>
                       </div>
                       <div className="pl-4 border-l border-ui-600">
                         <div className="text-xs lg:text-sm text-ui-300 uppercase font-bold">
                           Times in top 50
                         </div>
                         <div className="text-ui-100 text-xl lg:text-3xl">
                           2
                         </div>
                       </div>
                       <div className="pl-4 border-l border-ui-600">
                         <div className="text-xs lg:text-sm text-ui-300 uppercase font-bold">
                           Best placement
                         </div>
                         <div className="text-ui-100 text-xl lg:text-3xl">
                           1
                         </div>
                       </div>
                       <div className="pl-4 border-l border-ui-600">
                         <div className="text-xs lg:text-sm text-ui-300 uppercase font-bold">
                           Most matches in a Ladder
                         </div>
                         <div className="text-ui-100 text-xl lg:text-3xl">
                           16
                         </div>
                       </div>
                       <div className="pl-4 border-l border-ui-600">
                         <div className="text-xs lg:text-sm text-ui-300 uppercase font-bold">
                           Avg. matches / Ladder
                         </div>
                         <div className="text-ui-100 text-xl lg:text-3xl">
                           9.8
                         </div>
                       </div>
                     </div>
                     <div className="flex items-center gap-6 px-6 whitespace-nowrap">
                       <div className="w-40">
                         <img
                           src="https://res.cloudinary.com/gloot/image/upload/v1673941215/Stryda/logos/stryda-logo-missions-simple.svg"
                           width="auto"
                           height="auto"
                           alt=""
                           className="h-10 flex-none"
                         />
                       </div>
                       <div className="pl-4 border-l border-ui-600">
                         <div className="text-xs lg:text-sm text-ui-300 uppercase font-bold">
                           No. of missions completed
                         </div>
                         <div className="text-ui-100 text-xl lg:text-3xl">
                           143
                         </div>
                       </div>
                       <div className="pl-4 border-l border-ui-600">
                         <div className="text-xs lg:text-sm text-ui-300 uppercase font-bold">
                           Missions / day avg.
                         </div>
                         <div className="text-ui-100 text-xl lg:text-3xl">
                           2.3
                         </div>
                       </div>
                     </div>
                   </div>
                 </Slider>
               </div>
                       */}
            </section>
            <section className="surface md:rounded">
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
                  <a className="link link-hover text-ui-300 text-sm">View</a>
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
                    <div className="flex gap-6 py-2 px-6">
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
                                item.item,
                                item.level
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
            <section className="surface md:rounded">
              <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
                <h2 className="h6 text-ui-100">Ladders</h2>
              </div>
              <div>
                {selectedUser.ladders && !isEmpty ? (
                  <Slider
                    itemWidth={397 + 16}
                    bgColor="from-ui-800 via-ui-800 to-ui-800/0"
                  >
                    <div className="flex gap-6 py-2 px-6 hoverhighlight">
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
                                    gameID={1}
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
                              gameID={1}
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
                        <>You are not competing in any Ladders</>
                      ) : (
                        <>
                          {selectedUser.nickname} is not competing in any
                          ladders
                        </>
                      )}
                    </p>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
}
