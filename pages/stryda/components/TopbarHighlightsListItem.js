import { useEffect, useState, useRef } from "react";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import { dataMatches } from "@/mock-data/data-matches";
import { StatsValorantAgents } from "@/mock-data/data-stats-valorant";
import { StatsValorantMaps } from "@/mock-data/data-stats-valorant";
import { StatsValorantRanks } from "@/mock-data/data-stats-valorant";
import { StatsValorantWeapons } from "@/mock-data/data-stats-valorant";
import { StatsLeagueOfLegendsChampions } from "@/mock-data/data-stats-leagueoflegends";
import { StatsLeagueOfLegendsRanks } from "@/mock-data/data-stats-leagueoflegends";
import { StatsLeagueOfLegendsSpells } from "@/mock-data/data-stats-leagueoflegends";
import { StatsLeagueOfLegendsItems } from "@/mock-data/data-stats-leagueoflegends";
import GameIcon from "@/components/GameIcon/GameIcon";

export default function TopbarHighlightsListItem({
  match,
  delay,
  disabled,
  finished,
  onLoad,
}) {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [status, setStatus] = useState();
  let interval;

  useEffect(() => {
    if (finished === true) {
      setStatus("finished");
    }
  }, [finished]);

  useEffect(() => {
    if (loadingProgress === 100) {
      setStatus("finished");
      onLoad(match.id, loadingProgress, "finished");
      clearInterval(interval);
    } else if (loadingProgress > 0 && loadingProgress < 100) {
      setStatus("processing");
      onLoad(match.id, loadingProgress, "processing");
    }
  }, [loadingProgress]);

  const handleClick = () => {
    if (loadingProgress < 100) {
      interval = setInterval(() => {
        setLoadingProgress((prevProgress) => {
          const newProgress = prevProgress + 1;
          //onLoad(match.id, newProgress, "processing");
          return newProgress <= 100 ? newProgress : 100;
        });
      }, 80);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  };

  const getMatchByID = (id) => {
    return dataMatches.find((match) => {
      return match.id === parseInt(id);
    });
  };
  const getAgentByID = (id) => {
    return StatsValorantAgents.find((agent) => {
      return agent.id === parseInt(id);
    });
  };
  const getValorantRankByID = (id) => {
    return StatsValorantRanks.find((rank) => {
      return rank.id === parseInt(id);
    });
  };
  const getMapByID = (id) => {
    return StatsValorantMaps.find((map) => {
      return map.id === parseInt(id);
    });
  };
  const getWeaponByID = (id) => {
    return StatsValorantWeapons.find((weapon) => {
      return weapon.id === parseInt(id);
    });
  };
  const getChampionByID = (id) => {
    return StatsLeagueOfLegendsChampions[id];
  };
  const getItemByID = (id) => {
    return StatsLeagueOfLegendsItems[id];
  };
  const getSpellByID = (id) => {
    return StatsLeagueOfLegendsSpells[id];
  };
  const getLoLRankByID = (id) => {
    return StatsLeagueOfLegendsRanks.find((rank) => {
      return rank.id === parseInt(id);
    });
  };
  
  return (
    <>
      {match && (
        <li
          className={`surface-ui-500 rounded flex items-stretch animate-delay ${
            disabled ? "disabled opacity-30 pointer-events-none" : "animate-slide-in-right"
          }`}
          style={{
            "--delay": "calc(" + delay + " * 0.05s)",
          }}
        >
          <div className="flex-1 flex flex-col gap-1 p-2 justify-between border-r border-ui-400/20">
            <div className="flex items-center gap-2 text-sm leading-none">
              <GameIcon game={match.meta.game} size="text-sm" />
              <span
                className={`uppercase ${
                  match.stats.hasWon ? " text-success-300" : "text-error-300"
                }`}
              >
                {match.stats.hasWon ? "Victory" : "Defeat"}
              </span>
              <span className="text-ui-100">
                {match.stats.score.team1} - {match.stats.score.team2}
              </span>
              <span className="text-right text-xs flex-1 text-ui-300">
                {match.meta.dateTimeEnded}
              </span>
            </div>
            <div className="flex items-center">
              <div className="avatar avatar-xs avatar-simple">
                <div>
                  <img
                    src={getAgentByID(match.meta.agent).picturePath}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="avatar-group space-x-1">
                  {match.stats.leaderboard.team1.map((agent, agentIndex) => (
                    <>
                      <div
                        key={agentIndex}
                        className="avatar avatar-tiny avatar-simple"
                      >
                        <div>
                          <img
                            src={getAgentByID(agent.agent).picturePath}
                            alt=""
                          />
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-xs capitalize text-ui-300">
              <span className="text-ui-100 uppercase">
                {getAgentByID(match.meta.agent).name}
              </span>{" "}
              • {match.meta.mode} • {getMapByID(match.meta.map).name}
            </div>
          </div>
          <div className="relative w-40 flex flex-col items-stretch justify-center gap-1.5 leading-none rounded-r overflow-hidden p-2 whitespace-nowrap bg-gradient-to-r from-ui-600 to-ui-500">
            <div
              className="progresscontainer"
              style={{ "--percent": loadingProgress }}
            >
              <div>
                <div className="text-2xl font-bold">{loadingProgress}%</div>
                <div className="text-sm">Analysing</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{loadingProgress}%</div>
                <div className="text-sm">Analysing</div>
              </div>
            </div>
            {status === "finished" ? (
              <>
                <button
                  type="button"
                  className="button button-sm button-primary"
                >
                  <span>View highlight</span>
                </button>
              </>
            ) : (
              <>
                <div className="text-xs text-center">Create highlight reel</div>
                <button
                  type="button"
                  className="button button-sm button-primary"
                  onClick={() => handleClick()}
                >
                  <span>Automate with AI</span>
                </button>
                <button
                  type="button"
                  className="button button-sm button-secondary"
                >
                  <span>Customize</span>
                </button>
              </>
            )}
          </div>
        </li>
      )}
    </>
  );
}
