import React, { useContext, useEffect, useState } from "react";

import Ad from "@/components/Ad/Ad";
import Countdown from "@/components/Countdown/Countdown";
import Link from "next/link";
import ModalLadderHowitworksVideo from "./modal-howitworks-video";
import PrototypeStructure from "@/components/Prototype/PrototypeStructure";
import TabLaddersHistory from "./tab-history";
import TabLaddersHowItWorks from "./tab-howitworks";
import TabLaddersOngoing from "./tab-laddersongoing";
import TabLaddersRules from "./tab-glootrules";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";

const TabsItems = [
  {
    label: "Ladders",
    url: "ongoing",
    component: TabLaddersOngoing,
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
  {
    label: "Your Ladder history",
    url: "history",
    component: TabLaddersHistory,
  },
];

export default function Ladders() {
  const router = useRouter();
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const { game } = router.query;
  const { tab } = router.query;
  const { query } = useRouter();
  const defaultTab = "ongoing";
  const selectedTab = tab ? tab : defaultTab;
  const uiContext = useContext(UiContext);
  const freeEntry = query.freeentry === "true" ? true : false;

  function openModalLadderHowitworksVideo() {
    uiContext.openModal(
      <ModalLadderHowitworksVideo></ModalLadderHowitworksVideo>
    );
  }

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game, prototype]);
  
  useEffect(() => {
    if(selectedGame != null) {
      prototype.defineDefaultGameID(selectedGame.id);
    }
  }, [selectedGame]);

  

  return (
    <>
      <PrototypeStructure title="Ladders">
        <Ad width="1005" height="300" />
        {selectedGame && (
          <>
            <section className="header surface sm:rounded-lg mb-4">
              <div className="header-content">
                <div className="header-image">
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1674657396/Stryda/logos/stryda-logo-ladders.svg"
                    alt=""
                  />
                </div>
                <div className="header-body">
                  {freeEntry ? (
                    <>
                    <h1 className="h3 mb-2">Compete for free!</h1>
                    <p className="text-ui-300 max-w-[25ch] mb-2">
                      Use your stats to climb the Ladder leaderboard and win
                      prizes. No waiting, no dedicated servers. Play on your own
                      schedule! 
                    </p>
                    <p className="text-blue-300 max-w-[25ch] mb-4"><span className="font-bold">First time competing?</span> Your entry Ladder is on us!
                      Simply pick any Competitive Ladder you like and claim your free Ladder!</p>
                    </>
                  ) : (
                    <>
                    <h1 className="h3 mb-2">Ladders</h1>
                    <p className="text-ui-300 max-w-[25ch] mb-4">
                      Use your stats to climb the Ladder leaderboard and win
                      prizes. No waiting, no dedicated servers. Play on your own
                      schedule!
                    </p>
                    </>
                  )}
                  <div className="flex flex-col md:flex-row gap-2">
                    <button
                      type="button"
                      className="button button-primary button-play"
                      onClick={openModalLadderHowitworksVideo}
                    >
                      <span className="icon icon-circle-caret-right" />
                      <span>How to join the Ladder</span>
                    </button>
                    <Link
                      href={`/prototype/profile/settings${prototype.getURLparams()}`}
                    >
                      <button
                        type="button"
                        className="button button-secondary"
                      >
                        <span className={`icon icon-game-${selectedGame.slug}-symbol`} />
                        <span>Connect my account</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="header-bg">
                <img src={selectedGame.assets.heroLadder} alt="Ladders" />
              </div>
            </section>
            <nav>
              <ul className="tabs border-b border-ui-700">
                {TabsItems.map((item, itemIndex) => (
                  <li key={item}>
                    <Link
                      href={`/prototype/${game}/ladders?tab=${item.url}${prototype.getURLparams("&")}`}
                    >
                      <button type="button"
                        className={`${
                          selectedTab === item.url ? "is-active" : ""
                        }`}
                      >
                        <span>{item.label}</span>
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <section className="py-4">
              {TabsItems.map((item, itemIndex) => {
                if (item.url === selectedTab) {
                  return React.createElement(item.component, { key: itemIndex })
                }
              })}
            </section>
          </>
        )}
      </PrototypeStructure>
    </>
  );
}
