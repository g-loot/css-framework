import React, { useContext, useEffect, useState } from "react";

import Ad from "../../../../components/Ad/Ad";
import Link from "next/link";
import ModalLadderHowitworksVideo from "./modal-howitworks-video";
import Structure from "../../components/Structure";
import { UiContext } from "../../../../contexts/ui";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import LaddersHeader from "./ladders-header";
import AnimatedNumber from "../../../../components/AnimatedNumber/AnimatedNumber";

import TabLaddersOngoing from "./tab-laddersongoing";
import TabLaddersUpcoming from "./tab-laddersupcoming";
import TabLaddersCompleted from "./tab-ladderscompleted";
import TabLaddersHistory from "./tab-history";
import TabLaddersHowItWorks from "./tab-howitworks";
import TabLaddersRules from "./tab-glootrules";

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
  const [selectedGame, setSelectedGame] = useState(null);
  const [laddersFinishedLength, setLaddersFinishedLength] = useState(null);

  const { game } = router.query;
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
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game, prototype]);

  useEffect(() => {
    if (selectedGame) {
      setLaddersFinishedLength(
        selectedGame.ladders.filter(
          (g) => g.status === "finished" && g.hasClaim
        ).length
      );
    }
  }, [game, prototype, selectedGame]);

  useEffect(() => {
    if (selectedGame != null) {
      prototype.defineDefaultGameID(selectedGame.id);
    }
  }, [selectedGame]);

  return (
    <>
      <Structure title="Ladders">
        <Ad width="1005" height="300" />
        {selectedGame && (
          <>
            <LaddersHeader breadcrumbs={false} />
            <nav>
              <ul className="tabs border-b border-ui-700">
                {TabsItems.map((item, itemIndex) => (
                  <li key={item}>
                    <Link
                      href={`/prototype/${game}/ladders?tab=${
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

            {/*
            <section className="py-4 flex flex-col xl:flex-row gap-4 items-stretch">
              <div className="flex-1 surface sm:rounded-lg overflow-hidden relative flex flex-col p-6">
                <div className="flex-1 relative z-10 max-w-[25ch] flex flex-col justify-start items-start">
                  <h2 className="h5">How it works</h2>
                  <p className="text-ui-300 mt-3 mb-5">
                    From entering a Ladder to claiming your rewards, here is
                    everything you need to know about our competitions.
                  </p>
                  <Link
                    href={`/prototype/${selectedGame.slug}/ladders/howitworks`}
                  >
                    <button
                      type="button"
                      className="button button-sm button-secondary"
                    >
                      Learn more
                    </button>
                  </Link>
                </div>
                <img
                  className="hidden object-contain object-right absolute z-0 right-0 inset-y-0 w-full h-full"
                  src="https://res.cloudinary.com/gloot/image/upload/v1670317438/Marketing/2022_prototype/Ladder_how_it_works_card_right.jpg"
                  alt=""
                />
              </div>
              <div className="flex-1 surface sm:rounded-lg overflow-hidden relative flex flex-col p-6">
                <div className="flex-1 relative z-10 max-w-[25ch] flex flex-col justify-start items-start">
                  <h2 className="h5">Stryda Rules</h2>
                  <p className="text-ui-300 mt-3 mb-5">
                    At Stryda we take player protection very seriously and
                    investigate any suspicious activity.
                  </p>
                  <Link href={`/prototype/${selectedGame.slug}/ladders/rules`}>
                    <button
                      type="button"
                      className="button button-sm button-secondary"
                    >
                      Learn more
                    </button>
                  </Link>
                </div>
                <img
                  className="hidden object-contain object-right absolute z-0 right-0 inset-y-0 w-full h-full"
                  src="https://res.cloudinary.com/gloot/image/upload/v1670317438/Marketing/2022_prototype/Ladder_how_it_rules_card_right.jpg"
                  alt=""
                />
              </div>
              <div className="xl:h-64 flex-1 surface sm:rounded-lg overflow-hidden relative flex flex-col">
                <div className="px-3 py-2 border-b border-ui-700 relative z-10 flex-none flex items-center justify-between">
                  <div className="font-bold">Your Ladder history</div>
                  <Link
                    href={`/prototype/${
                      selectedGame.slug
                    }/ladders/history${prototype.getURLparams()}`}
                  >
                    <a className="link link-hover text-ui-300 text-sm leading-none">
                      View all
                    </a>
                  </Link>
                </div>
                <div className="relative z-0 lg:max-h-150px overflow-y-auto scrollbar-desktop">
                  <table className="table table-interactive w-full">
                    <tbody>
                      {selectedGame &&
                        selectedGame.ladders.map((ladder, ladderIndex) => (
                          <>
                            <Link
                              href={`/prototype/${game}/ladders/${
                                ladder.id
                              }${prototype.getURLparams()}`}
                            >
                              <tr
                                key={ladder}
                                className="leading-tight py-2 text-sm"
                              >
                                <td>
                                  <span className="text-ui-300">
                                    {ladder.name}
                                  </span>
                                </td>
                                <td>
                                  <div className="text-right">
                                    #{ladder.soloResults?.placement}
                                  </div>
                                </td>
                                <td>
                                  <div className="text-right">
                                  {ladder.soloResults?.points} points
                                  </div>
                                </td>
                              </tr>
                            </Link>
                          </>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            
                            */}
          </>
        )}
      </Structure>
    </>
  );
}
