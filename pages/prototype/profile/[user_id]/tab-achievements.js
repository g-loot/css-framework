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
    to: "300 XP",
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
    to: "30 XP",
  },
  {
    id: 3,
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
    id: 4,
    level: 3,
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
    level: 3,
    name: "Clan Ladder",
    description: "Finish #1 in the Gold League of a clan Ladder",
    icon: "clanladder",
    percent: 0,
    progress: 0,
    from: "0",
    to: "1",
  },
  {
    id: 6,
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
    id: 7,
    level: 1,
    name: "Token King",
    description: "Accumulate a total number of 100 tokens",
    icon: "tokenking",
    percent: 5,
    progress: 5,
    from: "10",
    to: "100",
  },
  {
    id: 8,
    level: 2,
    name: "XP King",
    description: "Accumulate a total number of 1000 XP",
    icon: "xp",
    percent: 80,
    progress: 10,
    from: "90",
    to: "1000",
  },
  {
    id: 9,
    level: 4,
    name: "Loyal Strydaer",
    description: "Has been on the platform for more than 300 days",
    icon: "loyal",
    percent: 76,
    progress: 1,
    from: "231",
    to: "300",
  },
  {
    id: 10,
    level: 5,
    name: "Cross-games Champion",
    description: "Has enrolled in Ladders of 5 games",
    icon: "crossgames",
    percent: 100,
    progress: 0,
    from: "5",
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
            <>
              <section className="grid lg:grid-cols-2 gap-4">
                {achievementsList.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="surface sm:rounded-lg p-2 pr-4 flex items-center gap-6 animate-slide-in-bottom animate-delay"
                    style={{ "--delay": "calc(" + itemIndex + " * 0.05s)" }}
                  >
                    <div className="absolute z-10 top-2 right-2 m-0">
                    {favoriteItem === item.id ? (
                    <button
                    type="button"
                    className={`button button-ghost rounded-full`}
                  >
                    <span className="icon icon-favorite text-main" />
                  </button>) : (<Tooltip
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
                    </Tooltip>)}
                    
                  </div>
                    <div
                      className="w-36 h-36 achievement cursor-pointer"
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
                      <span className="text-sm text-ui-300 uppercase">
                        Level {item.level}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="h5">{item.name}</h3>
                      <p className="text-ui-300 mt-2 mb-3">
                        {item.description}
                      </p>
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
                    </div>
                  </div>
                ))}
              </section>
              {/*
              <div className="text-center mt-4 mb-8">
                <button
                  type="button"
                  className="button button-sm button-primary"
                >
                  <span>Load more</span>
                </button>
              </div>
              */}
            </>
          )}
        </>
      )}
    </>
  );
}
