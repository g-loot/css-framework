import React, { useEffect, useState, useContext } from "react";

import Ad from "../../../../components/Ad/Ad";
import Link from "next/link";
import PrototypeStructure from "../../../../components/Prototype/PrototypeStructure";
import { usePrototypeData } from "../../../../contexts/prototype";
import { UiContext } from "../../../../contexts/ui";
import { useRouter } from "next/router";
import Accordion from "../../../../components/Accordion/Accordion";
import { StatsValorantAgents } from "../../../../mock-data/data-stats-valorant";
import { StatsValorantMaps } from "../../../../mock-data/data-stats-valorant";
import { StatsValorantRanks } from "../../../../mock-data/data-stats-valorant";
import { StatsValorantDemoFavoriteAgents } from "../../../../mock-data/data-stats-demo-valorant";

export default function Stats() {
  const router = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedGame, setSelectedGame] = useState(null);
  const { game } = router.query;

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game, prototype]);

  useEffect(() => {
    if (selectedGame != null) {
      prototype.defineDefaultGameID(selectedGame.id);
    }
  }, [selectedGame]);

  const [submitting, setSubmitting] = useState(false);

  function addToastWithDelay(toast) {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr(toast);
      setSubmitting(false);
    }, 1000);
  }

  const getAgentByID = (id) => {
    return StatsValorantAgents.find((agent) => {
      return agent.id === parseInt(id);
    });
  };

  return (
    <>
      <PrototypeStructure title="Stats">
        <Ad width="1005" height="300" />
        <section className="surface md:rounded-lg p-4 pb-16 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row gap-4 items-stretch justify-between min-h-[250px]">
            <div className="flex flex-col gap-4 justify-between">
              <div className="flex gap-4 items-start leading-tight">
                <div className="p-2 rounded bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
                  <span className="icon text-3xl icon-game-valorant-symbol text-game-valorant" />
                </div>
                <div>
                  <h1 className="uppercase text-4xl">Valorant stats</h1>
                  <div className="text-sm text-ui-300">
                    Last updated on 11 NOV 2022, 16:38 PM
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div
                  className={`avatar avatar-sm avatar-circle ${
                    prototype.getUserByID(1)?.avatar.isPremium
                      ? "avatar-gold"
                      : ""
                  }`}
                >
                  <div>
                    <img src={prototype.getUserByID(1)?.avatar} alt="avatar" />
                  </div>
                </div>
                <div className="leading-tight">
                  <div className="flex gap-2 items-center">
                    <div className="h5">
                      {prototype.getUserByID(1)?.nickname}
                    </div>
                    <div className="rounded bg-gradient-to-b from-ui-100/20 to-ui-100/5 text-sm uppercase p-1">
                      #8961
                    </div>
                  </div>
                  <div className="text-ui-300 uppercase text-sm">
                    <span className="">Match played:</span>{" "}
                    <b className="font-bold text-ui-200">1000</b>
                  </div>
                  <div className="text-ui-300 uppercase text-sm">
                    <span className="">Play time:</span>{" "}
                    <b className="font-bold text-ui-200">1439H</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row md:flex-col gap-2 md:gap-4 items-center md:items-end justify-between border-t border-ui-700 md:border-none pt-4 md:pt-0">
              <div className="hidden md:block">
                <button
                  className={`button button-sm button-tertiary ${
                    submitting ? "is-loading" : ""
                  }`}
                  onClick={addToastWithDelay.bind(this, {
                    icon: "f-check",
                    color: "green",
                    text: "Your stats have been updated.",
                    autoDelete: true,
                    autoDeleteDelay: 2500,
                  })}
                >
                  <span className="icon icon-16 icon-refresh-02" />
                  <span>Request a stats update</span>
                </button>
              </div>
              <div className="md:text-right leading-none mb-2">
                <div className="text-sm uppercase text-ui-300 font-bold">
                  Top agent
                </div>
                <h3>Neon</h3>
                <div className="text-sm uppercase text-ui-300 italic">
                  Duelist
                </div>
              </div>
              <div className="md:text-right flex gap-2 items-center uppercase text-sm text-ui-300">
                <div>
                  <span>Rank</span> <b className="text-ui-100">Immortal</b>
                </div>
                <img
                  className="h-16"
                  src="https://res.cloudinary.com/gloot/image/upload/v1668591096/Marketing/2022_VALORANT_agent_generator/images/rank-gold.webp"
                  height="auto"
                  width="auto"
                  alt=""
                />
              </div>
            </div>
            <div className="block md:hidden border-t border-ui-700 md:border-none pt-4 md:pt-0">
              <button
                className={`button button-sm button-tertiary w-full ${
                  submitting ? "is-loading" : ""
                }`}
                onClick={addToastWithDelay.bind(this, {
                  icon: "f-check",
                  color: "green",
                  text: "Your stats have been updated.",
                  autoDelete: true,
                  autoDeleteDelay: 2500,
                })}
              >
                <span className="icon icon-16 icon-refresh-02" />
                <span>Request a stats update</span>
              </button>
            </div>
          </div>
          <div className="absolute z-0 inset-0 flex items-end md:items-center justify-center opacity-25 md:opacity-100">
            <img
              className="absolute z-0 object-cover left-[33%] md:left-auto object-center animate-slide-in-bottom"
              src="https://res.cloudinary.com/gloot/image/upload/v1668603327/Marketing/2022_VALORANT_agent_generator/images/valorant-stats-hero-neon.jpg"
              alt=""
            />
          </div>
        </section>
        <section className="-mt-12 px-4 md:px-0 mb-8">
          <div className="max-w-lg mx-auto accordion accordion-highlighted">
            <Accordion
              header={
                <div className="item h-24 surface surface-ui-700 shadow-xl rounded-lg px-4">
                  <div className="item-body leading-tight flex justify-around">
                    <div
                      className="pl-4 border-l border-ui-600 animate-slide-in-bottom animate-delay"
                      style={{
                        "--delay": "calc(1 * 0.05s)",
                      }}
                    >
                      <div className="text-sm text-ui-200 uppercase font-bold">
                        Damage/round
                      </div>
                      <div className="font-headings text-blue-300 font-bold text-3xl">
                        180.0
                      </div>
                      <div className="text-sm text-ui-300">Top 2.4%</div>
                    </div>
                    <div
                      className="pl-4 border-l border-ui-600 animate-slide-in-bottom animate-delay"
                      style={{
                        "--delay": "calc(2 * 0.05s)",
                      }}
                    >
                      <div className="text-sm text-ui-200 uppercase font-bold">
                        K/D ratio
                      </div>
                      <div className="font-headings text-blue-300 font-bold text-3xl">
                        1.49
                      </div>
                      <div className="text-sm text-ui-300">Top 2%</div>
                    </div>
                    <div
                      className="pl-4 border-l border-ui-600 animate-slide-in-bottom animate-delay"
                      style={{
                        "--delay": "calc(3 * 0.05s)",
                      }}
                    >
                      <div className="text-sm text-ui-200 uppercase font-bold">
                        Headshots %
                      </div>
                      <div className="font-headings text-blue-300 font-bold text-3xl">
                        27.9%
                      </div>
                      <div className="text-sm text-ui-300">Top 4.8%</div>
                    </div>
                    <div
                      className="pl-4 border-l border-ui-600 animate-slide-in-bottom animate-delay"
                      style={{
                        "--delay": "calc(4 * 0.05s)",
                      }}
                    >
                      <div className="text-sm text-ui-200 uppercase font-bold">
                        Win %
                      </div>
                      <div className="font-headings text-blue-300 font-bold text-3xl">
                        71.9%
                      </div>
                      <div className="text-sm text-ui-300">Top 2.4%</div>
                    </div>
                  </div>
                  <div className="item-actions">
                    <div>
                      <span className="icon icon-24 icon-arrow-sm-down" />
                    </div>
                  </div>
                </div>
              }
            >
              <div className="p-8 flex flex-wrap text-center gap-4 leading-tight items-stretch justify-center">
                <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                  <div className="text-sm uppercase text-ui-300">Wins</div>
                  <div className="font-headings text-3xl">87</div>
                </div>
                <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                  <div className="text-sm uppercase text-ui-300">Kills</div>
                  <div className="font-headings text-3xl">2,572</div>
                </div>
                <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                  <div className="text-sm uppercase text-ui-300">Deaths</div>
                  <div className="font-headings text-3xl">1,509</div>
                </div>
                <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                  <div className="text-sm uppercase text-ui-300">Asists</div>
                  <div className="font-headings text-3xl">335</div>
                </div>
                <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                  <div className="text-sm uppercase text-ui-300">
                    Score/Round
                  </div>
                  <div className="font-headings text-3xl">239.0</div>
                </div>
                <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                  <div className="text-sm uppercase text-ui-300">KDA Ratio</div>
                  <div className="font-headings text-3xl">87</div>
                </div>
                <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                  <div className="text-sm uppercase text-ui-300">
                    Kills/Round
                  </div>
                  <div className="font-headings text-3xl">24</div>
                </div>
                <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                  <div className="text-sm uppercase text-ui-300">KDA Ratio</div>
                  <div className="font-headings text-3xl">24</div>
                </div>
                <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                  <div className="text-sm uppercase text-ui-300">Headshots</div>
                  <div className="font-headings text-3xl">24</div>
                </div>
                <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                  <div className="text-sm uppercase text-ui-300">
                    First Bloods
                  </div>
                  <div className="font-headings text-3xl">24</div>
                </div>
                <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                  <div className="text-sm uppercase text-ui-300">Clutches</div>
                  <div className="font-headings text-3xl">24</div>
                </div>
                <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                  <div className="text-sm uppercase text-ui-300">Flawless</div>
                  <div className="font-headings text-3xl">24</div>
                </div>
                <div className="rounded bg-gradient-to-b from-ui-900/50 to-ui-900/10 p-2 w-28">
                  <div className="text-sm uppercase text-ui-300">Aces</div>
                  <div className="font-headings text-3xl">24</div>
                </div>
              </div>
            </Accordion>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="h5">Most played agents</h2>
          <div className="overflow-x-auto">
            <table className="table table-rounded w-full text-center">
              <thead>
                <tr className="text-ui-400">
                  <th className="text-left">Agent</th>
                  <th>Time played</th>
                  <th>Matches</th>
                  <th>Win %</th>
                  <th>K/D</th>
                  <th>ADR</th>
                  <th>ACS</th>
                  <th>HS%</th>
                </tr>
              </thead>
              <tbody className="child:overflow-hidden leading-tight">
                {StatsValorantDemoFavoriteAgents.map((item, itemIndex) => (
                  <tr key={itemIndex}>
                    <td className="p-0 flex items-center gap-4 text-left">
                      <img
                        className="w-16 h-16 rounded-l"
                        src="https://res.cloudinary.com/gloot/image/upload/v1668591099/Marketing/2022_VALORANT_agent_generator/images/agent-avatar-neon.webp"
                        alt=""
                        width="auto"
                        height="auto"
                      />
                      <div>
                        <div className="font-bold text-ui-100 capitalize">
                          {getAgentByID(item.agent).name}
                        </div>
                        <div className="text-ui-300">
                          {getAgentByID(item.agent).role.name}
                        </div>
                      </div>
                    </td>
                    <td>32H</td>
                    <td>56</td>
                    <td>73,2%</td>
                    <td>1.49 </td>
                    <td>185.556</td>
                    <td>282.7 </td>
                    <td>29.9%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </PrototypeStructure>
    </>
  );
}
