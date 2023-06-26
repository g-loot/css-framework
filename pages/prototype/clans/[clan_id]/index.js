import React, { useEffect, useState } from "react";

import Ad from "../../../../components/Ad/Ad";
import Link from "next/link";
import PrototypeStructure from "../../../../components/Prototype/PrototypeStructure";
import TabClanMembers from "./tab-members";
import TabClanActivity from "./tab-activity";
import TabClanChat from "./tab-chat";
import TabClanApplications from "./tab-applications";
import TabClanStats from "./tab-stats";
import TabClanAbout from "./tab-about";
import { usePrototypeData } from "../../../../contexts/prototype";
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
    label: "Applications (3)",
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

export default function Home() {
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
      <PrototypeStructure title="Clan">
        <Ad width="1005" height="300" />

        {selectedClan && (
          <>
            {!selectedClan.isYou && <ClanHeader />}

            <nav className="flex justify-center">
              <ul className="tabs tabs-tertiary">
                {getRelatedTabs().map((item, itemIndex) => (
                  <>
                    {selectedClan.isYou && (
                      <li
                        key={item}
                        className={`${item.isMobile ? "lg:!hidden" : ""}`}
                      >
                        <Link
                          href={`/prototype/clans/${clan_id}?tab=${
                            item.url
                          }${prototype.getURLparams("&")}`}
                        >
                          <a
                            className={`${
                              selectedTab === item.url ? "is-active" : ""
                            }`}
                          >
                            <span>
                              {item.label}{" "}
                              {item.url === "members" && (
                                <>({getClanMembers().length})</>
                              )}
                              {item.hasBadge && (
                                <span className="ml-1 icon icon-present animate-bounce" />
                              )}
                            </span>
                          </a>
                        </Link>
                      </li>
                    )}
                    {!selectedClan.isYou && !item.isYou && (
                      <li key={item}>
                        <Link
                          href={`/prototype/clans/${clan_id}?tab=${
                            item.url
                          }${prototype.getURLparams("&")}`}
                        >
                          <a
                            className={`${
                              selectedTab === item.url ? "is-active" : ""
                            }`}
                          >
                            <span>
                              {item.label}{" "}
                              {item.url === "members" && (
                                <>({getClanMembers().length})</>
                              )}
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
      </PrototypeStructure>
    </>
  );
}
