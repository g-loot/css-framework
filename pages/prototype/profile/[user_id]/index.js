import React, { useEffect, useState, useContext } from "react";

import Accordion from "@/components/Accordion/Accordion";
import Ad from "@/components/Ad/Ad";
import Link from "next/link";
import ListItemLadder from "@/components/ListItem/ListItemLadder";
import PrototypeStructure from "@/components/Prototype/PrototypeStructure";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import GameIcon from "@/components/GameIcon/GameIcon";
import Slider from "@/components/Slider/Slider";
import { UiContext } from "@/contexts/ui";
import AchievementFrame from "@/components/Achievements/AchievementFrame";
import AchievementIcon from "@/components/Achievements/AchievementIcon";
import ModalAchievementReceived from "../../modal-achievementreceived";
import ModalLevelUp from "../../modal-levelup";
import ProfileHeader from "../header";
import TabProfileOverview from "./tab-overview";
import TabProfileActivity from "./tab-activity";
import TabProfileAchievements from "./tab-achievements";
import TabProfileStats from "./tab-stats";
import TabProfileFollowing from "./tab-following";
import TabProfileFollowers from "./tab-followers";

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
    description: "Gift 200 tokens to members of your Clan",
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

export default function Home() {
  const router = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const { user_id } = router.query;
  const { query } = useRouter();
  const { tab } = router.query;
  const defaultTab = "overview";
  const selectedTab = tab ? tab : defaultTab;
  const modalAchievement = query.modalachievement === "true" ? true : false;
  const modalLeveLUp = query.modallevelup === "true" ? true : false;
  const hasProfileBanner = query.profilebanner || false;
  const [profileBanner, setProfileBanner] = useState(false);
  const [achievementLength, setAchievementLength] = useState(0);

  useEffect(() => {
    if (selectedUser) {
      setAchievementLength(selectedUser.achievements?.badges?.length);
    }
  }, [selectedUser]);

  useEffect(() => {
    if (hasProfileBanner) {
      setProfileBanner(`&profilebanner=${hasProfileBanner}`);
    }
  }, [hasProfileBanner]);

  useEffect(() => {
    if (modalAchievement) {
      openModalAchievementReceived();
    }
  }, [modalAchievement]);

  function openModalAchievementReceived(item) {
    uiContext.openModal(<ModalAchievementReceived item={item} />);
  }

  const TabsItems = [
    {
      label: "Overview",
      url: "overview",
      component: TabProfileOverview,
    },
    {
      label: "Activity",
      url: "activity",
      component: TabProfileActivity,
    },
    {
      label: `Achievements`,
      url: "achievements",
      component: TabProfileAchievements,
    },
    {
      label: "Stats",
      url: "stats",
      component: TabProfileStats,
    },
    {
      label: "Followers",
      url: "followers",
      component: TabProfileFollowers,
      number: 253,
    },
    {
      label: "Following",
      url: "following",
      component: TabProfileFollowing,
      number: 135,
    },
  ];

  useEffect(() => {
    if (modalLeveLUp) {
      openmodalLeveLUp();
    }
  }, [modalLeveLUp]);

  function openmodalLeveLUp() {
    uiContext.openModal(<ModalLevelUp />);
  }

  useEffect(() => {
    setSelectedUser(prototype.getUserByID(user_id));
  }, [user_id]);

  return (
    <>
      <PrototypeStructure title="Profile">
        <Ad width="1005" height="124" />

        {selectedUser && (
          <>
            <ProfileHeader />

            <nav className="mt-4 flex justify-start px-4 sm:px-0 overflow-auto scrollbar-hidden">
              <ul className="tabs tabs-tertiary mx-auto">
                {TabsItems.map((item, itemIndex) => (
                  <li key={item}>
                    <Link
                      href={`/prototype/profile/${user_id}?tab=${item.url}${
                        hasProfileBanner ? profileBanner : ""
                      }${prototype.getURLparams("&")}`}
                    >
                      <button
                        type="button"
                        className={`${
                          selectedTab === item.url ? "is-active" : ""
                        }`}
                      >
                        <span>
                          {item.label}
                          {item.number && (
                            <>
                              {" "}
                              <span className="text-sm">{item.number}</span>
                            </>
                          )}
                        </span>
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <section className="py-4">
              {TabsItems.map((item, itemIndex) => {
                if (item.url === selectedTab) {
                  return React.createElement(item.component, {
                    key: itemIndex,
                  });
                }
              })}
            </section>
          </>
        )}
      </PrototypeStructure>
    </>
  );
}
