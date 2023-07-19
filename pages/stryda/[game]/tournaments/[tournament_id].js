import React, { useEffect, useState } from "react";

import Ad from "../../../../components/Ad/Ad";
import Countdown from "../../../../components/Countdown/Countdown";
import Link from "next/link";
import Structure from "../../components/Structure";
import Reward from "../../../../components/Reward/Reward";
import TabTournamentsHowToPlay from "./tab-howtoplay";
import TabTournamentsLeaderboard from "./tab-leaderboard";
import TabTournamentsOverview from "./tab-overview";
import TabTournamentsParticipants from "./tab-participants";
import TabTournamentsRules from "./tab-rules";
import moment from "moment";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";

const TabsItems = [
  {
    label: "Overview",
    url: "overview",
    component: TabTournamentsOverview,
  },
  {
    label: "Participants",
    url: "participants",
    component: TabTournamentsParticipants,
  },
  {
    label: "Leaderboard",
    url: "leaderboard",
    component: TabTournamentsLeaderboard,
  },
  {
    label: "How to play",
    url: "how-to-play",
    component: TabTournamentsHowToPlay,
  },
  {
    label: "Rules",
    url: "rules",
    component: TabTournamentsRules,
  },
];

export default function Home() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const { game } = router.query;
  const { tab } = router.query;
  const { tournament_id } = router.query;
  const defaultTab = "overview";
  const selectedTab = tab ? tab : defaultTab;

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
      <Structure title="Tournaments">
        <Ad width="1005" height="300" />

        {selectedGame && (
          <>
            <section className="header surface sm:rounded-lg mb-4">
              <div className="header-content">
                <div className="header-image">
                  <img
                    src={`${
                      prototype.getTournamentByID(game, tournament_id).type ===
                      "skirmish"
                        ? "https://res.cloudinary.com/gloot/image/upload/v1657888942/Marketing/2022_prototype/Logo/samesize-skirmish.svg"
                        : ""
                    } ${
                      prototype.getTournamentByID(game, tournament_id).type ===
                      "showdown"
                        ? "https://res.cloudinary.com/gloot/image/upload/v1657888942/Marketing/2022_prototype/Logo/samesize-showdown.svg"
                        : ""
                    } ${
                      prototype.getTournamentByID(game, tournament_id).type ===
                      "open"
                        ? "https://res.cloudinary.com/gloot/image/upload/v1657888942/Marketing/2022_prototype/Logo/samesize-open.svg"
                        : ""
                    } ${
                      prototype.getTournamentByID(game, tournament_id).type ===
                      "custom"
                        ? prototype.getTournamentByID(game, tournament_id)
                            .customLogo
                        : ""
                    }`}
                    alt={prototype.getTournamentByID(game, tournament_id).name}
                  />
                  {prototype.getTournamentByID(game, tournament_id).sponsor && (
                    <>
                      <p className="text-xl mb-2">
                        Sponsored by
                      </p>
                      <img
                        className="max-w-[125px] max-h-[125px] w-auto h-auto"
                        src={
                          prototype.getTournamentByID(game, tournament_id)
                            .sponsor
                        }
                        alt="sponsor"
                      />
                    </>
                  )}
                </div>
                <div className="header-body">
                  <h1 className="h3 mb-2">
                    {prototype.getTournamentByID(game, tournament_id).name}
                  </h1>

                  <div>
                    <p className="text-ui-300 max-w-[45ch]">
                      Hosted by:{" "}
                      <b>
                        {prototype.getTournamentByID(game, tournament_id)
                          .host === undefined && <>Stryda</>}
                      </b>
                      <b>
                        {prototype.getTournamentByID(game, tournament_id)
                          .host !== undefined && (
                          <>
                            {
                              prototype.getTournamentByID(game, tournament_id)
                                .host
                            }
                          </>
                        )}
                      </b>
                    </p>
                    <p className="text-ui-300 max-w-[45ch] flex items-center gap-2">
                      <span>Entry fee:</span>
                      {prototype.getTournamentByID(game, tournament_id).details
                        .entryFee === "free" && <b>FREE</b>}
                      {prototype.getTournamentByID(game, tournament_id).details
                        .entryFee !== "free" && (
                        <>
                          {prototype
                            .getTournamentByID(game, tournament_id)
                            .details.entryFee.map((reward, rewardIndex) => (
                              <Reward
                                key={rewardIndex}
                                reward={reward}
                                gap="gap-1.5"
                                iconClassNames=""
                                textClassNames="text-ui-200"
                              />
                            ))}
                        </>
                      )}
                    </p>
                    <p className="text-ui-300 max-w-[45ch]">
                      Starts at:{"  "}
                      <b>
                        <div className="inline-flex gap-2 text-sm text-main items-baseline">
                          <span className="icon icon-calendar-date-2" />
                          <span>
                            {moment(
                              prototype.getTournamentByID(game, tournament_id)
                                .details.date,
                              "YYYY-MM-DDThh:mm:ss.SSS"
                            ).format("MMM Do [•] h A")}
                          </span>
                        </div>
                      </b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute z-50 top-3 right-3 md:top-auto md:bottom-3 text-0">
                <span className="icon icon-adult-content text-3xl" />
              </div>
              <div className="header-meta justify-start pr-0">
                <div className="p-2 bg-gradient-to-r from-ui-900/0 to-ui-900/50 flex gap-1 items-center justify-center xl:justify-end whitespace-nowrap">
                  <span className="text-ui-100 uppercase">
                    Time Left:
                  </span>
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
                {/* {prototype.getTournamentByID(game, tournament_id).status !==
                  "finished" && (
                  <div className="p-2 bg-gradient-to-r from-ui-900/0 to-ui-900/50 flex gap-1 items-center justify-center xl:justify-end whitespace-nowrap">
                    <span className="text-ui-100 uppercase">
                      {prototype.getTournamentByID(game, tournament_id)
                        .status === "registration" ||
                        (prototype.getTournamentByID(game, tournament_id)
                          .status === "scheduled" && <>Starts in</>)}
                    </span>
                    <span className="icon icon-clock text-main" />
                    <span className="uppercase text-main">
                      {moment(
                        prototype.getTournamentByID(game, tournament_id).details
                          .date,
                        "YYYY-MM-DDThh:mm:ss.SSS"
                      ).fromNow()}
                    </span>
                  </div>
                )} */}
              </div>
              <div className="header-bg">
                <img
                  src={prototype.getTournamentByID(game, tournament_id).cover}
                />
              </div>
            </section>
            <nav>
              <ul className="tabs border-b border-ui-700">
                {TabsItems.map((item, itemIndex) => (
                  <li key={item}>
                    <Link
                      href={`/prototype/${game}/tournaments/${tournament_id}?tab=${item.url}${prototype.getURLparams("&")}`}
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
            <div className="py-4">
              {TabsItems.map((item, itemIndex) => {
                if (item.url === selectedTab) {
                  return React.createElement(item.component, { key: itemIndex })
                }
              })}
            </div>
          </>
        )}
      </Structure>
    </>
  );
}
