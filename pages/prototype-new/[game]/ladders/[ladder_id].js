import React, { useContext, useEffect, useState, useRef } from "react";

import Ad from "../../../../components/Ad/Ad";
import Countdown from "../../../../components/Countdown/Countdown";
import Link from "next/link";
import ModalLadderHowitworksVideo from "./modal-howitworks-video";
import PrototypeStructure from "../../../../components/prototype-new/PrototypeStructure";
import TabLaddersClanLeaderboard from "./tab-clanleaderboards";
import TabLaddersHowItWorks from "./tab-howitworks";
import TabLaddersRewards from "./tab-rewards";
import TabLaddersSoloLeaderboards from "./tab-sololeaderboards";
import { UiContext } from "../../../../contexts/ui";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import LadderHeader from "./components/ladder-header";
import LadderPlacements from "./components/ladder-placements";


const TabsItems = [
  {
    label: "Solo Leaderboard",
    url: "solo-leaderboard",
    component: TabLaddersSoloLeaderboards,
  },
  {
    label: "Clan Leaderboard",
    url: "clan-leaderboard",
    component: TabLaddersClanLeaderboard,
  },
  {
    label: "Rewards",
    url: "rewards",
    component: TabLaddersRewards,
  },
  {
    label: "How it works",
    url: "how-it-works",
    component: TabLaddersHowItWorks,
  },
];
const TabsItemsNoClan = [
  {
    label: "Solo Leaderboard",
    url: "solo-leaderboard",
    component: TabLaddersSoloLeaderboards,
  },
  {
    label: "Rewards",
    url: "rewards",
    component: TabLaddersRewards,
  },
  {
    label: "How it works",
    url: "how-it-works",
    component: TabLaddersHowItWorks,
  },
];

export default function Home() {
  const router = useRouter();
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const { game } = router.query;
  const { tab } = router.query;
  const { ladder_id } = router.query;
  const defaultTab = "solo-leaderboard";
  const selectedTab = tab ? tab : defaultTab;
  const uiContext = useContext(UiContext);

  function openModalLadderHowitworksVideo() {
    uiContext.openModal(
      <ModalLadderHowitworksVideo></ModalLadderHowitworksVideo>
    );
  }

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game, prototype]);

  useEffect(() => {
    if (selectedGame != null) {
      prototype.defineDefaultGameID(selectedGame.id);
    }
  }, [selectedGame]);


  return (
    <>
      <PrototypeStructure title="Ladders">
        <Ad width="1005" height="300" />

        {selectedGame && (
          <>
            {/*
            <section className="header surface sm:rounded-lg mb-4">
              <div className="header-content">
                <div className="header-image">
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1674657396/Stryda/logos/stryda-logo-ladders.svg"
                    width="400"
                    height="auto"
                    alt=""
                  />
                  {prototype.getLadderByID(game, ladder_id).sponsor && (
                    <>
                      <p className="text-xl mb-2">
                        Sponsored by
                      </p>
                      <img
                        className="max-w-[125px] max-h-[125px] w-auto h-auto"
                        src={prototype.getLadderByID(game, ladder_id).sponsor}
                        alt="sponsor"
                      />
                    </>
                  )}
                </div>
                <div className="header-body">
                  <h1 className="h3 mb-2">
                    {prototype.getLadderByID(game, ladder_id).name}
                  </h1>
                  <p className="text-ui-300 max-w-[45ch] mb-4">
                    Use your stats to climb the Ladder leaderboard and win
                    prizes. No waiting, no dedicated servers. Play on your own
                    schedule!
                  </p>
                  <div className="flex flex-col md:flex-row gap-2">
                    <button
                      type="button"
                      className="button button-primary button-play"
                      onClick={openModalLadderHowitworksVideo}
                    >
                      <span className="icon icon-circle-caret-right" />
                      <span>Learn how to Ladder</span>
                    </button>
                    <Link
                      href={`/prototype-new/profile/settings${prototype.getURLparams()}`}
                    >
                      <button
                        type="button"
                        className="button button-secondary"
                      >
                        <span className="icon icon-steam" />
                        <span>Steam required</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="header-meta justify-start pr-0">
                <div className="p-2 bg-gradient-to-r from-ui-900/0 to-ui-900/50 flex gap-1 items-center justify-center xl:justify-end whitespace-nowrap">
                  <span className="icon icon-clock text-main" />
                  <Countdown
                    additionalClassNames="flex items-baseline gap-0.5 uppercase text-main"
                    hasDays={true}
                    hasLabels={true}
                    hasSeconds={false}
                    separator=" • "
                    labelsAbbr={true}
                  ></Countdown>
                </div>
              </div>
              <div className="header-bg">
                <img
                  src={prototype.getLadderByID(game, ladder_id).cover}
                  alt="Ladders"
                />
              </div>
            </section>
            */}
            <LadderHeader />

            <LadderPlacements />

            <nav>
              <ul className="tabs border-b border-ui-700">
                {prototype.getLadderByID(game, ladder_id).clan ? (
                  <>
                    {TabsItems.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          href={`/prototype-new/${game}/ladders/${ladder_id}?tab=${
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
                  </>
                ) : (
                  <>
                    {TabsItemsNoClan.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          href={`/prototype-new/${game}/ladders/${ladder_id}?tab=${
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
                  </>
                )}
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
