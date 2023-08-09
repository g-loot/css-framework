import React, { useContext, useEffect, useState } from "react";

import Ad from "../../../components/Ad/Ad";
import Link from "next/link";
import ModalLadderHowitworksVideo from "./modal-howitworks-video";
import Structure from "../components/Structure";
import { UiContext } from "../../../contexts/ui";
import { usePrototypeData } from "../../../contexts/prototype";
import { useRouter } from "next/router";
import LaddersHeader from "./ladders-header";

import TabLaddersOngoing from "./tab-laddersongoing";
import TabLaddersUpcoming from "./tab-laddersupcoming";
import TabLaddersCompleted from "./tab-ladderscompleted";
import TabLaddersHowItWorks from "./tab-howitworks";
import TabLaddersRules from "./tab-glootrules";
import Loader from "../components/Loader";

const TabsItems = [
  {
    label: "Ongoing",
    url: "ongoing",
    component: TabLaddersOngoing,
  },
  {
    label: "Upcoming",
    url: "upcoming",
    component: TabLaddersUpcoming,
  },
  {
    label: "Completed",
    url: "completed",
    component: TabLaddersCompleted,
  },
  {
    label: "How it works",
    url: "how-it-works",
    component: TabLaddersHowItWorks,
  },
  {
    label: "Stryda rules",
    url: "rules",
    component: TabLaddersRules,
  },
];

export default function Ladders() {
  const router = useRouter();
  const prototype = usePrototypeData();
  const selectedGame = prototype.getGameByID(prototype.defaultGameID);
  const [laddersFinishedLength, setLaddersFinishedLength] = useState(null);

  const uiContext = useContext(UiContext);
  const { tab } = router.query;
  const defaultTab = "ongoing";
  const selectedTab = tab ? tab : defaultTab;

  function openModalLadderHowitworksVideo() {
    uiContext.openModal(
      <ModalLadderHowitworksVideo></ModalLadderHowitworksVideo>
    );
  }

  useEffect(() => {
    if (selectedGame) {
      setLaddersFinishedLength(
        selectedGame.ladders.filter(
          (g) => g.status === "finished" && g.hasClaim
        ).length
      );
    }
  }, [prototype, selectedGame]);

  

  return (
    <>
      <Structure title="Ladders" gamePicker>
        <Ad width="1005" height="300" />
        <Loader
          loader={
              <section className="min-h-full container grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 mx-4 sm:mx-0 mt-8">
                <div className="surface is-loading rounded aspect-video w-full" />
                <div className="surface is-loading rounded aspect-video w-full" />
                <div className="surface is-loading rounded aspect-video w-full" />
                <div className="surface is-loading rounded aspect-video w-full" />
                <div className="surface is-loading rounded aspect-video w-full" />
                <div className="surface is-loading rounded aspect-video w-full" />
                <div className="surface is-loading rounded aspect-video w-full" />
                <div className="surface is-loading rounded aspect-video w-full" />
                <div className="surface is-loading rounded aspect-video w-full" />
              </section>
          }
        >
        {selectedGame && (
          <>
            <LaddersHeader breadcrumbs={false} />
            <nav>
              <ul className="tabs tabs-tertiary">
                {TabsItems.map((item, itemIndex) => (
                  <li key={item}>
                    <Link
                      href={`/stryda/ladders?tab=${
                        item.url
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
                          {item.url === "completed" &&
                            laddersFinishedLength >= 1 && (
                              <span className="ml-2 icon icon-present animate-bounce" />
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
        </Loader>
      </Structure>
    </>
  );
}
