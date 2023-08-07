import React, { useEffect, useState, useContext } from "react";

import Link from "next/link";
import { UiContext } from "../../../../contexts/ui";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import ModalAchievementReceived from "../../modal-achievementreceived";
import LadderCardSecondary from "../../../../components/Ladder/LadderCardSecondary";
import AchievementFrame from "../../../../components/Achievements/AchievementFrame";
import AchievementIcon from "../../../../components/Achievements/AchievementIcon";
import CardMissionSecondary from "../../../../components/Card/CardMissionSecondary";
import Avatar from "../../../../components/Avatar/Avatar";

const ActivityFeed = [
  {
    icon: "icon-ladder",
    text: "enrolled to a Ladder",
    time: "3 min. ago",
    ladder: { game: "valorant", id: 2 },
  },
  {
    icon: "icon-medal",
    text: "unlocked a new achievement",
    time: "3 min. ago",
    achievement: {
      level: 1,
      name: "Mission Expert",
      description: "Complete the entire mission ladder in 1 day.",
      icon: "missionladder",
      percent: 50,
      progress: 12,
      from: "24",
      to: "300 XP",
    },
  },
  {
    icon: "icon-ctrl-up",
    text: "levelled up",
    time: "3 min. ago",
    level: {
      level1: 1,
      level2: 4,
      level3: 6,
    },
  },
  {
    icon: "icon-ladder",
    text: "enrolled to a Ladder",
    time: "3 min. ago",
    ladder: { game: "valorant", id: 1 },
  },
  {
    icon: "icon-missions",
    text: "completed a mission",
    time: "3 min. ago",
    mission: { game: "valorant", id: 1 },
  },
];

export default function TabProfileActivity() {
  const router = useRouter();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const [selectedUser, setSelectedUser] = useState(null);
  const { user_id } = router.query;
  const isEmpty = query.empty === "true" ? true : false;
  const { game } = router.query;

  useEffect(() => {
    setSelectedUser(prototype.getUserByID(user_id));
  }, [user_id]);

  function openModalAchievementReceived(item) {
    uiContext.openModal(
      <ModalAchievementReceived item={item} />
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
                      You have not entered any Ladders yet.
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
            <>
              <div className="max-w-md mx-auto space-y-4">
                {ActivityFeed.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-stretch gap-4 animate-slide-in-bottom animate-delay"
                    style={{ "--delay": "calc(" + itemIndex + " * 0.05s)" }}
                  >
                    <div className="flex flex-col justify-center gap-4">
                      <div className="rounded-full w-16 h-16 grid place-content-center bg-ui-700">
                        <span
                          className={`icon ${item.icon} text-2xl text-ui-300`}
                        />
                      </div>
                      <hr className="separator separator-vertical flex-1 min-h-12" />
                    </div>

                    <div className="pt-2 pb-8 space-y-6 flex-1">
                      <div>
                        <div>
                          <b className="text-ui-100">
                            {selectedUser.isYou ? (
                              <>You</>
                            ) : (
                              <>{selectedUser.nickname}</>
                            )}
                          </b>{" "}
                          {item.text}
                        </div>
                        <div className="text-sm text-ui-300">{item.time}</div>
                      </div>
                      {item.ladder && (
                        <>
                          <LadderCardSecondary
                            ladder={prototype.getLadderByID(
                              item.ladder.game,
                              item.ladder.id
                            )}
                            isHorizontal={false}
                            isClan={false}
                            isFluid={false}
                          />
                        </>
                      )}
                      {item.achievement && (
                        <div className="text-center surface rounded p-2 max-w-xs">
                          <div
                            className="w-full aspect-square achievement cursor-pointer"
                            onClick={openModalAchievementReceived.bind(
                              this,
                              item.achievement
                            )}
                          >
                            <i />
                            <i />
                            <div
                              className={`achievement-level-${item.achievement.level}`}
                            >
                              <AchievementFrame
                                url={`https://res.cloudinary.com/gloot/image/upload/v1678871888/Stryda/achievements/frames/achievement-frame-lvl${item.achievement.level}-animated.svg`}
                              />
                              <AchievementIcon
                                url={`https://res.cloudinary.com/gloot/image/upload/v1674739347/Stryda/achievements/achivement-icon-${item.achievement.icon}.svg`}
                              />
                            </div>
                          </div>
                          <div className="mt-4 mb-2 h6 text-ui-100">
                            Level {item.achievement.name}
                          </div>
                          <div className="text-sm text-ui-300 uppercase">
                            Level {item.achievement.level}
                          </div>
                        </div>
                      )}
                      {item.level && (
                        <>
                          <div className="relative flex items-center justify-center max-w-xs">
                            <div className="animate-fire-in relative">
                              <Avatar
                                size="avatar-2xl"
                                id={1}
                                hasLevel={false}
                              />
                            </div>
                            <div
                              className="absolute bottom-0 z-30 bg-ui-700 rounded-full px-6 border border-ui-400 animate-fire-in animate-delay"
                              style={{
                                "--delay": "calc(1 * 0.5s)",
                              }}
                            >
                              <span className="stepper font-medium text-4xl text-white leading-tight">
                                <span
                                  style={{ "--value": item.level.level1 }}
                                />
                                <span
                                  style={{ "--value": item.level.level2 }}
                                />
                                <span
                                  style={{ "--value": item.level.level3 }}
                                />
                              </span>
                            </div>
                          </div>
                        </>
                      )}
                      {item.mission && (
                        <div className="max-w-sm">
                          <CardMissionSecondary
                            gameSlug={item.mission.game}
                            mission={prototype.getMissionByID(
                              item.mission.game,
                              item.mission.id
                            )}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <div className="flex items-stretch gap-4">
                  <div className="w-16 grid place-content-center">
                    <span className="w-3 h-3 rounded-full bg-ui-600" />
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
