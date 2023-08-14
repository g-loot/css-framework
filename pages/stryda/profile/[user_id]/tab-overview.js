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
import ModalLevelUp from "../../modal-levelup";
import ProfileHeader from "./header";
import Video from "../../components/Video";

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
          <section
            className={`surface md:rounded ${loading ? "is-loading" : ""}`}
          >
            <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
              <h2 className="h6 text-ui-100">Highlights</h2>
              <Link
                href={`${
                  selectedUser.id
                }?tab=highlights${prototype.getURLparams("&")}`}
              >
                <a className="link link-hover text-ui-300 text-sm leading-none">
                  View
                </a>
              </Link>
            </div>
            <div>
              {!selectedUser.videos ? (
                <div className="text-center p-4">
                  <span className="icon icon-video text-6xl text-ui-500" />
                  <p className="mt-2 text-ui-300">
                    {selectedUser.isYou ? (
                      <>You haven&#39;t any highlights yet</>
                    ) : (
                      <>{selectedUser.nickname} hasn&#39;t any highlights yet</>
                    )}
                  </p>
                </div>
              ) : (
                <>
                  <Slider
                    itemWidth={397 + 16}
                    bgColor="from-ui-800 via-ui-800 to-ui-800/0"
                  >
                    <div className="flex gap-4 px-4">
                      {selectedUser.videos.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="w-[75dvw] md:w-96 aspect-video rounded overflow-hidden"
                        >
                          <Video item={item} />
                        </div>
                      ))}
                    </div>
                  </Slider>
                </>
              )}
            </div>
          </section>
          <section
            className={`surface md:rounded ${loading ? "is-loading" : ""}`}
          >
            <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
              <h2 className="h6 text-ui-100">Stats</h2>
              <Link
                href={`${selectedUser.id}?tab=stats${prototype.getURLparams(
                  "&"
                )}`}
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
          </section>
          <section
            className={`surface md:rounded ${loading ? "is-loading" : ""}`}
          >
            <div className="flex items-baseline justify-between border-b border-b-ui-700 px-4 py-3">
              <h2 className="h6 text-ui-100">
                Achievements{" "}
                {!isEmpty && <>({selectedUser.achievements?.badges?.length})</>}
              </h2>
              <Link
                href={`${
                  selectedUser.id
                }?tab=achievements${prototype.getURLparams("&")}`}
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
                                  prototype.getAchievementitemByID(1, item.item)
                                    .name
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
                            {prototype.getLadderByID(ladder.gameSlug, ladder.id)
                              .isEnrolled && (
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
                                    prototype.getGameBySlug(ladder.gameSlug).id
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
                            gameID={prototype.getGameBySlug(ladder.gameSlug).id}
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
                      <>{selectedUser.nickname} has not entered any Ladders</>
                    )}
                  </p>
                </div>
              )}
            </div>
          </section>
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
