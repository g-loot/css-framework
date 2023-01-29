import React, { useEffect, useState } from "react";

import Ad from "../../../../components/Ad/Ad";
import Chat from "../../../../components/Chat/Chat";
import Link from "next/link";
import PrototypeStructure from "../../../../components/PrototypeNew/PrototypeStructure";
import SectionClanActivity from "./section-activity";
import TabClanActivity from "./tab-activity";
import TabClanChat from "./tab-chat";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import ClanHeader from "./header";

const TabsItems = [
  {
    label: "Activity",
    url: "activity",
    component: TabClanActivity,
  },
  {
    label: "Chat",
    url: "chat",
    component: TabClanChat,
  },
];

export default function Home() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const [selectedClan, setSelectedClan] = useState(null);
  const { clan_id } = router.query;
  const { tab } = router.query;
  const defaultTab = "activity";
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
            <ClanHeader />

            <section
              className="hidden xl:flex flex-col xl:flex-row xl:items-start gap-4 animate-slide-in-bottom animate-delay"
              style={{ "--delay": "calc(2 * 0.05s)" }}
            >
              <div className="flex-1 surface sm:rounded-lg overflow-hidden">
                <Chat
                  maxheight="xl:max-h-[calc(100vh-440px)]"
                  isdisabled={!selectedClan.isYou}
                />
              </div>
              <div className="xl:w-96 space-y-4">
                <SectionClanActivity />
              </div>
            </section>

            <nav className="block xl:hidden">
              <ul className="tabs border-b border-ui-700">
                {TabsItems.map((item, itemIndex) => (
                  <li key={item}>
                    <Link
                      href={`/prototype-new/clans/${clan_id}?tab=${
                        item.url
                      }${prototype.getURLparams("&")}`}
                    >
                      <a
                        className={`${
                          selectedTab === item.url ? "is-active" : ""
                        }`}
                      >
                        <span>{item.label}</span>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <section className="block xl:hidden py-4">
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
