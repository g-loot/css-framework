import React, { useEffect, useState } from "react";

import Ad from "../../../../components/Ad/Ad";
import Link from "next/link";
import Structure from "@/pages/stryda/components/Structure";
import TabClanMembers from "./tab-members";
import TabClanActivity from "./tab-activity";
import TabClanChat from "./tab-chat";
import TabClanApplications from "./tab-applications";
import TabClanStats from "./tab-stats";
import TabClanAbout from "./tab-about";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import ClanHeader from "./header";

const TabsItemsOwn = [
  {
    label: "Chat",
    url: "chat",
    component: TabClanChat,
  },
  {
    label: "About",
    url: "about",
    component: TabClanAbout,
  },
  {
    label: "Applications",
    url: "applications",
    component: TabClanApplications,
    isYou: true,
  },
  {
    label: "Members",
    url: "members",
    component: TabClanMembers,
  },
  {
    label: "Activity",
    url: "activity",
    component: TabClanActivity,
    hasBadge: true,
  },
];

const TabsItems = [
  {
    label: "About",
    url: "about",
    component: TabClanAbout,
  },
  /*
  {
    label: "Stats",
    url: "stats",
    component: TabClanStats,
  },
  */
  {
    label: "Members",
    url: "members",
    component: TabClanMembers,
  },
  {
    label: "Activity",
    url: "activity",
    component: TabClanActivity,
  },
];

export default function ClanDetails() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const [selectedClan, setSelectedClan] = useState(null);
  const { clan_id } = router.query;
  const { tab } = router.query;
  const defaultTab = "about";
  const [selectedTab, setSelectedTab] = useState(false);

  useEffect(() => {
    if (selectedClan) {
      if (tab) {
        console.log("tab", tab);
        setSelectedTab(tab);
      } else {
        if (selectedClan.isYou) {
          setSelectedTab("chat");
        } else {
          setSelectedTab("about");
        }
      }
    }
  }, [tab, selectedClan]);

  useEffect(() => {
    setSelectedClan(prototype.getClanByID(clan_id));
  }, [clan_id]);

  const getRelatedTabs = () => {
    if (selectedClan.isYou) {
      return TabsItemsOwn;
    } else {
      return TabsItems;
    }
  };

  const getClanMembers = () => {
    return prototype.users.filter((user) => {
      return user.clan === selectedClan.id;
    });
  };

  function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

  return (
    <>
      <Structure title="Clan">
        <Ad width="1005" height="300" />

        {selectedClan && (
          <>
            {!selectedClan.isYou && (
              <>
                <div className="relative z-0">
                  <div className="aspect-banner md:-mx-8 relative z-10 shadow-2xl">
                    {selectedClan.shopItems?.profileBanner ? (
                      <>
                        <img
                          src={
                            prototype.getShopitemByID(
                              2,
                              selectedClan.shopItems?.profileBanner
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
                  <div className="relative md:absolute md:inset-0 md:flex md:flex-col items-center justify-center text-center gap-4">
                    <div className="avatar avatar-2xl avatar-squircle">
                      <div>
                        <img src={selectedClan.avatar} alt="avatar" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute z-0 inset-y-0 w-screen left-1/2 right-1/2 -mx-[50vw] overflow-hidden">
                    {selectedClan.shopItems?.profileBanner ? (
                      <>
                        <img
                          src={
                            prototype.getShopitemByID(
                              2,
                              selectedClan.shopItems?.profileBanner
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
                <div className="relative z-10 mt-4 -mb-2">
                  <h1 className="text-7xl leading-none text-center">
                    &#91;
                    {selectedClan.tag}
                    &#93; {selectedClan.nickname}
                  </h1>
                </div>
                {/*
                <ClanHeader />
                */}
              </>
            )}
            <nav className="flex justify-center mt-4">
              <ul className="tabs tabs-tertiary">
                {getRelatedTabs().map((item, itemIndex) => (
                  <>
                    {selectedClan.isYou && (
                      <li
                        key={item}
                        className={`${item.isMobile ? "lg:!hidden" : ""}`}
                      >
                        <Link
                          href={`/stryda/clans/${clan_id}?tab=${
                            item.url
                          }${prototype.getURLparams("&")}`}
                        >
                          <a
                            className={`${
                              selectedTab === item.url ? "is-active" : ""
                            }`}
                          >
                            <span>
                              {item.label}
                              {item.hasBadge && (
                                <span className="ml-1 icon icon-present animate-bounce" />
                              )}
                            </span>
                            {item.url === "members" && <span className="text-sm">{getClanMembers().length}</span>}
                          </a>
                        </Link>
                      </li>
                    )}
                    {!selectedClan.isYou && !item.isYou && (
                      <li key={item}>
                        <Link
                          href={`/stryda/clans/${clan_id}?tab=${
                            item.url
                          }${prototype.getURLparams("&")}`}
                        >
                          <a
                            className={`${
                              selectedTab === item.url ? "is-active" : ""
                            }`}
                          >
                            <span>
                              {item.label}
                              {/*{" "}
                              {item.url === "members" && (
                                <>({getClanMembers().length})</>
                              )}*/}
                              {item.hasBadge && (
                                <span className="ml-1 icon icon-present animate-bounce" />
                              )}
                            </span>
                          </a>
                        </Link>
                      </li>
                    )}
                  </>
                ))}
              </ul>
            </nav>
            <section className="py-4">
              {getRelatedTabs().map((item, itemIndex) => {
                if (item.url === selectedTab) {
                  return React.createElement(item.component, {
                    key: itemIndex,
                  });
                }
              })}
            </section>
          </>
        )}
      </Structure>
    </>
  );
}
