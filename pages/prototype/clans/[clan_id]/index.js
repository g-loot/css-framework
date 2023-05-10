import React, { useEffect, useState } from "react";

import Ad from "../../../../components/Ad/Ad";
import Chat from "../../../../components/Chat/Chat";
import Link from "next/link";
import PrototypeStructure from "../../../../components/Prototype/PrototypeStructure";
import SectionClanActivity from "./section-activity";
import TabClanOverview from "./tab-overview";
import TabClanMembers from "./tab-members";
import TabClanActivity from "./tab-activity";
import TabClanChat from "./tab-chat";
import TabClanApplications from "./tab-applications";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import ClanHeader from "./header";

const TabsItems = [
  {
    label: "Overview",
    url: "overview",
    component: TabClanOverview,
  },
  {
    label: "Chat",
    url: "chat",
    component: TabClanChat,
    isYou: true,
    isMobile: true,
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

export default function Home() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const [selectedClan, setSelectedClan] = useState(null);
  const { clan_id } = router.query;
  const { tab } = router.query;
  const defaultTab = "overview";
  const selectedTab = tab ? tab : defaultTab;

  useEffect(() => {
    setSelectedClan(prototype.getClanByID(clan_id));
  }, [clan_id]);

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
          {!selectedClan.isYou && (
            <ClanHeader />
          )}

            <nav className="flex justify-center">
              <ul className="tabs">
                {TabsItems.map((item, itemIndex) => (
                  <>
                    {selectedClan.isYou && (
                      <li key={item} className={`${item.isMobile ? 'lg:!hidden' : ''}`}>
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
                            <span data-badge={item.hasBadge ? '.' : undefined}>
                              {item.label}{" "}
                              {item.url === "members" && (
                                <>({selectedClan.members.length})</>
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
                            <span data-badge={item.hasBadge ? '.' : undefined}>
                              {item.label}{" "}
                              {item.url === "members" && (
                                <>({selectedClan.members.length})</>
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
