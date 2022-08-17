import React, { useEffect, useState } from "react";

import Ad from "../../../../components/Ad/Ad";
import Countdown from "../../../../components/Countdown/Countdown";
import Link from "next/link";
import PrototypeStructure from "../../../../components/Prototype/PrototypeStructure";
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
  const hasAds = query.ads === "true" ? true : false;
  const { game } = router.query;
  const { tab } = router.query;
  const { tournament_id } = router.query;
  const defaultTab = "overview";
  const selectedTab = tab ? tab : defaultTab;

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game]);

  return (
    <>
      <PrototypeStructure title="Tournaments">
        <Ad width="1005" height="124" />

        {selectedGame && (
          <>
            <section className="relative surface sm:rounded-lg overflow-hidden mb-4">
              <div className="relative z-10 grid grid-cols-8 gap-4 items-flex min-h-[250px]">
                <div className="col-span-8 md:col-span-4 xl:col-span-3 flex flex-col justify-center items-center pt-14 pb-8 md:pt-8">
                  <div className="absolute top-0 left-0 py-2 px-4">
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                      <ol>
                        <li
                          className="animate-slide-in-top animate-delay"
                          style={{ "--delay": "calc(0 * 0.05s)" }}
                        >
                          <Link
                            href={`/prototype/home${hasAds ? "?ads=true" : ""}`}
                          >
                            <a>
                              <span className="icon icon-20 icon-home-2" />
                              <span>Home</span>
                            </a>
                          </Link>
                        </li>
                        <li
                          className="animate-slide-in-top animate-delay"
                          style={{ "--delay": "calc(1 * 0.05s)" }}
                        >
                          <Link
                            href={`/prototype/${game}/tournaments/${
                              hasAds ? "?ads=true" : ""
                            }`}
                          >
                            <a>
                              <span>Tournaments</span>
                            </a>
                          </Link>
                        </li>
                        <li
                          className="animate-slide-in-top animate-delay"
                          style={{ "--delay": "calc(2 * 0.05s)" }}
                        >
                          <div>
                            <span>
                              {
                                prototype.getTournamentByID(game, tournament_id)
                                  .name
                              }
                            </span>
                          </div>
                        </li>
                      </ol>
                    </nav>
                  </div>
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
                    width={`${
                      prototype.getTournamentByID(game, tournament_id).type ===
                      "custom"
                        ? "auto"
                        : "400"
                    }`}
                    height="auto"
                    className="max-h-[175px] max-w-[350px] mt-6"
                    alt={prototype.getTournamentByID(game, tournament_id).name}
                  />
                  {prototype.getTournamentByID(game, tournament_id).sponsor && (
                    <>
                      <p className="font-headings font-bold italic text-xl mb-2">
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
                <div className="col-span-8 md:col-span-4 xl:col-span-3 flex flex-col justify-center items-center md:items-start text-center md:text-left flex-1 pl-8 md:pl-0 pr-8 py-0 md:py-4 xl:py-4">
                  <h1 className="text-4xl mb-2 leading-none">
                    {prototype.getTournamentByID(game, tournament_id).name}
                  </h1>

                  <div>
                    <p className="text-ui-300 max-w-[45ch]">
                      Hosted by:{" "}
                      <b>
                        {prototype.getTournamentByID(game, tournament_id)
                          .host === undefined && <>G-Loot</>}
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
                                imageClassNames="h-6"
                                textClassNames="text-ui-200 font-bold"
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
                <div className="col-span-8 xl:col-span-2 flex flex-col xl:items-end justify-start gap-4">
                  {prototype.getTournamentByID(game, tournament_id).status !==
                    "finished" && (
                    <div className="p-2 bg-gradient-to-r from-ui-900/0 to-ui-900/50 flex gap-1 items-center justify-center xl:justify-end whitespace-nowrap">
                      <span className="font-headings font-bold italic text-ui-100 uppercase">
                        {prototype.getTournamentByID(game, tournament_id)
                          .status === "registration" ||
                          (prototype.getTournamentByID(game, tournament_id)
                            .status === "scheduled" && <>Starts in</>)}
                      </span>
                      <span className="icon icon-clock text-main" />
                      <span className="font-headings font-bold italic uppercase text-main">
                        {moment(
                          prototype.getTournamentByID(game, tournament_id)
                            .details.date,
                          "YYYY-MM-DDThh:mm:ss.SSS"
                        ).fromNow()}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div
                className="absolute z-0 right-0 inset-y-0 w-full xl:w-2/3 animate-slide-in-right animate-delay"
                style={{ "--delay": "calc(1 * 0.05s)" }}
              >
                <div className="absolute z-10 inset-0 bg-gradient-to-r from-ui-800 via-ui-800/95 to-ui-800/75"></div>
                <img
                  className="absolute z-0 object-right object-cover xl:object-cover inset-0 w-full h-full"
                  src={prototype.getTournamentByID(game, tournament_id).cover}
                />
              </div>
            </section>

            <nav>
              <ul className="tabs border-b border-ui-700">
                {TabsItems.map((item, itemIndex) => (
                  <li key={item}>
                    <Link
                      href={`/prototype/${game}/tournaments/${tournament_id}${
                        hasAds ? "?ads=true&" : ""
                      }${hasAds ? "&" : "?"}tab=${item.url}`}
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

            <div className="py-4">
              {TabsItems.map((item) => {
                if (item.url === selectedTab) {
                  return React.createElement(item.component);
                }
              })}
            </div>
          </>
        )}
      </PrototypeStructure>
    </>
  );
}
