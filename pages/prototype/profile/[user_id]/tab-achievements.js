import React, { useEffect, useState, useContext } from "react";

import { UiContext } from "../../../../contexts/ui";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import AchievementFrame from "../../../../components/Achievements/AchievementFrame";
import AchievementIcon from "../../../../components/Achievements/AchievementIcon";
import ModalAchievementReceived from "../../modal-achievementreceived";
import Link from "next/link";
import Tooltip from "../../../../components/Tooltip/Tooltip";

const achievementsList = [
  {
    id: 1,
    level: 1,
    name: "Mission Expert",
    description: "Complete the entire mission ladder in 1 day.",
    icon: "missionladder",
    percent: 40,
    progress: 10,
    from: "150",
    to: "300",
  },
  {
    id: 2,
    level: 2,
    name: "Mission Ladder",
    description: "Complete 30 missions",
    icon: "mission",
    percent: 35,
    progress: 15,
    from: "15",
    to: "30",
  },
  {
    id: 3,
    level: 4,
    name: "Streak",
    description: "Reach a 100 days streak",
    icon: "streak",
    percent: 80,
    progress: 10,
    from: "90",
    to: "100",
  },
  {
    id: 6,
    level: 3,
    name: "Clan Supporter",
    description: "Gift 200 tokens to members of your clan",
    icon: "clansupporter",
    percent: 75,
    progress: 10,
    from: "150",
    to: "200",
  },
  {
    id: 8,
    level: 5,
    name: "XP King",
    description: "Accumulate a total number of 1000 XP",
    icon: "xp",
    percent: 100,
    progress: 0,
    from: "3015",
    to: "1000",
  },
  {
    id: 9,
    level: 5,
    name: "Loyal Strydarian",
    description: "Has been on the platform for more than 300 days",
    icon: "loyal",
    percent: 100,
    progress: 0,
    from: "456",
    to: "300",
  },
  {
    id: 4,
    level: 0,
    name: "Solo Ladder",
    description: "Finish #1 in the Silver League of a solo Ladder",
    icon: "sololadder",
    percent: 0,
    progress: 0,
    from: "0",
    to: "1",
  },
  {
    id: 5,
    level: 0,
    name: "Clan Ladder",
    description: "Finish #1 in the Gold League of a clan Ladder",
    icon: "clanladder",
    percent: 0,
    progress: 0,
    from: "0",
    to: "1",
  },
  {
    id: 7,
    level: 0,
    name: "Token King",
    description: "Accumulate a total number of 100 tokens",
    icon: "tokenking",
    percent: 0,
    progress: 0,
    from: "0",
    to: "100",
  },
  {
    id: 10,
    level: 0,
    name: "Cross-games Champion",
    description: "Has enrolled in Ladders of 5 games",
    icon: "crossgames",
    percent: 0,
    progress: 0,
    from: "0",
    to: "5",
  },
];

export default function TabProfileAchievements() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const [favoriteItem, setFavoriteItem] = useState(2);
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

  function handleFavorite(id) {
    setFavoriteItem(id);
    uiContext.openToastr({
      text: "Favorite achievement updated",
      color: "green",
      autoDelete: true,
      autoDeleteDelay: 2500,
    });
  }

  return (
    <>
      {selectedUser && (
        <>
          <section className="grid lg:grid-cols-2 gap-4">
            {achievementsList.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`surface sm:rounded-lg p-2 pr-4 flex items-center gap-6 animate-slide-in-bottom animate-delay ${item.level === 0 ? 'pointer-events-none' : ''}`}
                style={{ "--delay": "calc(" + itemIndex + " * 0.05s)" }}
              >
                {item.level > 0 && (
                  <div className="absolute z-10 top-2 right-2 m-0">
                    {favoriteItem === item.id ? (
                      <button
                        type="button"
                        className={`button button-ghost rounded-full pointer-events-none`}
                      >
                        <span className="icon icon-favorite text-main" />
                      </button>
                    ) : (
                      <Tooltip
                        tooltip={
                          <span className="text-sm">Define as favorite</span>
                        }
                      >
                        <button
                          type="button"
                          className={`button button-ghost rounded-full`}
                          onClick={handleFavorite.bind(this, item.id)}
                        >
                          <span className="icon icon-favorite text-ui-400" />
                        </button>
                      </Tooltip>
                    )}
                  </div>
                )}
                <div
                  className={`w-36 h-36 achievement cursor-pointer ${item.level === 5 ? 'is-completed' : ''}`}
                  onClick={openModalAchievementReceived.bind(
                    this,
                    item.level,
                    item.name,
                    item.icon
                  )}
                >
                  <i />
                  <i />
                  <div className={`achievement-level-${item.level}`}>
                    <AchievementFrame
                      url={`https://res.cloudinary.com/gloot/image/upload/v1674739347/Stryda/achievements/achievement-frame-lvl${item.level}-animated.svg`}
                    />
                    <AchievementIcon
                      url={`https://res.cloudinary.com/gloot/image/upload/v1674739347/Stryda/achievements/achivement-icon-${item.icon}.svg`}
                    />
                  </div>
                  {item.level > 0 && (
                    <span className="text-sm uppercase">
                      Level {item.level}
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="h5">{item.name}</h3>
                  <p className="text-ui-300 mt-2 mb-3">{item.description}</p>
                  {item.level < 5 && (
                    <div className="flex items-center gap-4 leading-none font-bold">
                      <div
                        className="progressbar progressbar-secondary w-full"
                        style={{
                          "--percent": item.percent,
                          "--progress": item.progress,
                        }}
                      >
                        <div />
                        <div />
                      </div>
                      <div className="flex-none mb-0.5">
                        <span>{item.from}</span> / <span>{item.to}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </section>
        </>
      )}
    </>
  );
}
