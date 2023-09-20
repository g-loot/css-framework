import React, { useEffect, useState, useContext } from "react";

import Accordion from "../../../../components/Accordion/Accordion";
import Ad from "../../../../components/Ad/Ad";
import Link from "next/link";
import Structure from "@/pages/stryda/components/Structure";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import { UiContext } from "@/contexts/ui";
import ModalAchievementReceived from "../../modal-achievementreceived";
import ModalLevelUp from "../../modal-levelup";
import ModalRemoveFriend from "./modal-remove-friend";
import ModalAvatarEdit from "./modal-avataredit";
import TabProfileOverview from "./tab-overview";
import TabProfileHighlights from "./tab-highlights";
import TabProfileActivity from "./tab-activity";
import TabProfileAchievements from "./tab-achievements";
import TabProfileStats from "./tab-stats";
import TabProfileFollowing from "./tab-following";
import TabProfileFollowers from "./tab-followers";
import Loader from "@/pages/stryda/components/Loader";
import WidgetUser from "@/pages/stryda/components/WidgetUser";
import WidgetUserLeftPanel from "@/pages/stryda/components/WidgetUserLeftPanel";
import Avatar from "../../../../components/Avatar/Avatar";

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

export default function Profile() {
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
  const hasAvatarFrame = query.avatarframe || false;
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

  function openModalRemoveFriends(id) {
    uiContext.openModal(<ModalRemoveFriend id={id} />);
  }

  function openModalAvatarEdit() {
    if (hasAvatarFrame) {
      uiContext.openModal(<ModalAvatarEdit id={hasAvatarFrame} />);
    } else if (selectedUser.shopItems?.avatarFrame) {
      uiContext.openModal(
        <ModalAvatarEdit id={selectedUser.shopItems?.avatarFrame} />
      );
    } else {
      uiContext.openModal(<ModalAvatarEdit id={1} />);
    }
  }

  const TabsItems = [
    {
      label: "Overview",
      url: "overview",
      component: TabProfileOverview,
    },
    {
      label: "Highlights",
      url: "highlights",
      component: TabProfileHighlights,
    },
    {
      label: "Activity",
      url: "activity",
      component: TabProfileActivity,
    },
    {
      label: `Achievements`, // (${achievementLength})`,
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
      <Structure title="Profile">
        <Ad width="1005" height="124" />

        <Loader
          loader={
            <section className="min-h-screen container sm:px-4 flex flex-col mx-4 sm:mx-0 mt-8">
              <div className="surface is-loading rounded w-full aspect-banner flex-none" />
              <div className="container flex flex-col md:flex-row items-stretch gap-8 py-8 flex-1">
                <div className="w-[21rem] space-y-4 hidden md:block surface is-loading rounded" />
                <div className="flex-1 surface is-loading rounded w-full" />
              </div>
            </section>
          }
        >
          {selectedUser && (
            <>
              <div className="relative z-0">
                <div className="aspect-banner md:-mx-8 relative z-10 shadow-2xl">
                  {selectedUser.shopItems?.profileBanner ? (
                    <>
                      <img
                        src={
                          prototype.getShopitemByID(
                            2,
                            selectedUser.shopItems?.profileBanner
                          ).image
                        }
                        alt=""
                        className="w-full h-full object-cover object-center"
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src="https://res.cloudinary.com/gloot/image/upload/v1692022099/Stryda/illustrations/Generic_background_v2.jpg"
                        alt=""
                        className="w-full h-full object-cover object-center"
                      />
                    </>
                  )}
                </div>
                <div className="absolute z-0 inset-y-0 w-screen left-1/2 right-1/2 -mx-[50vw] overflow-hidden">
                  {selectedUser.shopItems?.profileBanner ? (
                    <>
                      <img
                        src={
                          prototype.getShopitemByID(
                            2,
                            selectedUser.shopItems?.profileBanner
                          ).image
                        }
                        alt=""
                        className="absolute w-full h-full scale-125 object-cover object-center blur opacity-50"
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src="https://res.cloudinary.com/gloot/image/upload/v1692022099/Stryda/illustrations/Generic_background_v2.jpg"
                        alt=""
                        className="absolute w-full h-full scale-125 object-cover object-center blur opacity-50"
                      />
                    </>
                  )}
                </div>
              </div>
              <div className="-mt-8 md:hidden px-4">
                <div className="flex items-center justify-center">
                  {selectedUser.isYou ? (
                    <div className="relative">
                      <Avatar
                        size="avatar-lg"
                        id={selectedUser.id}
                        hasTooltip={true}
                        hasTooltipXP={true}
                        tooltipPlacement={"bottom"}
                      />
                      <button
                        onClick={openModalAvatarEdit}
                        type="button"
                        className="button button-tertiary rounded-full absolute z-20 bottom-0 right-0"
                      >
                        <span className="icon icon-pen-2" />
                      </button>
                    </div>
                  ) : (
                    <Avatar size="avatar-lg" id={selectedUser.id} />
                  )}
                </div>
                <div className="flex items-baseline justify-center gap-1 my-4">
                  <h1
                    className={`text-5xl leading-none -mb-2 ${
                      selectedUser.isPremium ? "text-premium-500" : ""
                    }`}
                  >
                    {selectedUser.clan && (
                      <>
                        {" "}
                        &#91;
                        {prototype.getClanByID(selectedUser.clan)?.tag}
                        &#93;
                      </>
                    )}{" "}
                    {selectedUser.nickname}
                  </h1>
                  <img
                    src={`https://flagcdn.com/${selectedUser.countryFlag}.svg`}
                    className="aspect-video rounded-sm max-w-[1.5rem]"
                  />
                </div>
                <ul className="flex justify-around items-stretch divide-x-1 divide-ui-700 leading-tight my-4 text-center">
                  <li>
                    <Link href={`/stryda/profile/1${prototype.getURLparams()}`}>
                      <button type="button" className="interactive px-2">
                        <div className="text-lg text-ui-100">165</div>
                        <div className="text-sm text-ui-300">followers</div>
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/stryda/profile/1${prototype.getURLparams()}`}>
                      <button type="button" className="interactive px-2">
                        <div className="text-lg text-ui-100">165</div>
                        <div className="text-sm text-ui-300">following</div>
                      </button>
                    </Link>
                  </li>
                </ul>
                <div className="space-y-2">
                  {selectedUser.isYou && (
                    <Link href="settings">
                      <a
                        type="button"
                        className="button button-sm button-secondary w-full"
                      >
                        <span className="icon icon-cogwheel" />
                        <span>Profile settings</span>
                      </a>
                    </Link>
                  )}
                  {!selectedUser.isYou && selectedUser.isFollowing && (
                    <a
                      type="button"
                      className="button button-sm button-secondary w-full"
                      onClick={openModalRemoveFriends.bind(
                        this,
                        selectedUser.id
                      )}
                    >
                      <span className="icon icon-a-remove" />
                      <span>Unfollow</span>
                    </a>
                  )}
                  {!selectedUser.isYou && !selectedUser.isFollowing && (
                    <Link
                      href={`/prototype/profile/${
                        selectedUser.id
                      }?tab=followers${prototype.getURLparams("&")}`}
                    >
                      <a
                        type="button"
                        className="button button-sm button-primary w-full"
                      >
                        <span className="icon icon-add-27" />
                        <span>Follow</span>
                      </a>
                    </Link>
                  )}
                </div>
              </div>
              <div className="relative z-10 min-h-screen container flex flex-col md:flex-row gap-8 py-4">
                <div className="w-[21rem] space-y-4 hidden md:block">
                  <div className="-mt-28 xl:-mt-44 shadow-xl">
                    <WidgetUser id={user_id} />
                  </div>
                  <WidgetUserLeftPanel id={user_id} />
                </div>
                <div className="flex-1 overflow-hidden">
                  <nav className="mt-4 pb-8 flex justify-start overflow-x-auto scrollbar-hidden px-4 md:px-0">
                    <ul className="tabs tabs-tertiary">
                      {TabsItems.map((item, itemIndex) => (
                        <li key={item}>
                          <Link
                            href={`/stryda/profile/${user_id}?tab=${item.url}${
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
                                  <>{" "}<span className="text-sm">{item.number}</span></>
                                )}
                              </span>
                            </button>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="space-y-4">
                    {TabsItems.map((item, itemIndex) => {
                      if (item.url === selectedTab) {
                        return React.createElement(item.component, {
                          key: itemIndex,
                        });
                      }
                    })}
                  </div>
                </div>
              </div>
            </>
          )}
        </Loader>
      </Structure>
    </>
  );
}
