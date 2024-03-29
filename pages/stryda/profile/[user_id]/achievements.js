import React, { useEffect, useState, useContext } from "react";

import Ad from "../../../../components/Ad/Ad";
import { UiContext } from "@/contexts/ui";
import PrototypeStructure from "../../../../components/Prototype/PrototypeStructure";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import AchievementFrame from "../../../../components/Achievements/AchievementFrame";
import AchievementIcon from "../../../../components/Achievements/AchievementIcon";
import ModalAchievementReceived from "../../modal-achievementreceived";
import ProfileHeader from "./header";
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
    description: "Gift 200 tokens to members of your Clan",
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

export default function Achievements() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const { user_id } = router.query;
  const modalAchievement = query.modalachievement === "true" ? true : false;

  useEffect(() => {
    if (modalAchievement) {
      openModalAchievementReceived();
    }
  }, [modalAchievement]);

  const generateDescription = (description, to) => {
    const variable = to;
    const regex = /\[X\]/g;
    const string = description;
    const replacedString = string.replace(regex, variable);
    return (
      replacedString
    );
  };

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
      <PrototypeStructure title="Profile">
        <Ad width="1005" height="124" />

        {selectedUser && (
          <>
            <ProfileHeader breadcrumbs="Achievements" />

            <section className="grid lg:grid-cols-2 gap-4">
              {selectedUser.achievements.badges.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="relative surface sm:rounded-lg p-2 pr-4 flex items-center gap-6 animate-slide-in-bottom animate-delay"
                  style={{ "--delay": "calc(" + itemIndex + " * 0.05s)" }}
                >
                  
                  <div
                    className={`w-36 h-36 achievement cursor-pointer ${
                      item.level === 5 ? "is-completed" : ""
                    }`}
                    onClick={item.level !== 0 && openModalAchievementReceived.bind(
                      this,
                      item
                    )}
                  >
                    <i />
                    <i />
                    <div className={`achievement-level-${item.level}`}>
                      <AchievementFrame
                        url={`https://res.cloudinary.com/gloot/image/upload/v1678871888/Stryda/achievements/frames/achievement-frame-lvl${item.level}-animated.svg`}
                      />
                      <AchievementIcon
                        url={`https://res.cloudinary.com/gloot/image/upload/v1678872380/Stryda/achievements/icons/achievement-icon-${prototype.getAchievementitemByID(1, item.item).icon}.svg`}
                      />
                    </div>
                    <span className="text-sm text-ui-300 uppercase">
                      Level {item.level}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="h5">{prototype.getAchievementitemByID(1, item.item).name}</h3>
                    <p className="text-ui-300 mt-2 mb-3">{generateDescription(prototype.getAchievementitemByID(1, item.item).description, item.to)}</p>
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
          </>
        )}
      </PrototypeStructure>
    </>
  );
}
