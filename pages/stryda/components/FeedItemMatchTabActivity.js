import { useEffect, useState, useContext } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import Link from "next/link";
import FeedItemAchievement from "./FeedItemAchievement";
import MatchSneakPeak from "./MatchSneakPeak";
import { StatsValorantAgents } from "@/mock-data/data-stats-valorant";
import { StatsValorantRanks } from "@/mock-data/data-stats-valorant";
import { StatsValorantMaps } from "@/mock-data/data-stats-valorant";

export default function FeedItemMatchTabActivity(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const item = props.item;
  const match = props.match;

  const getAgentByID = (id) => {
    return StatsValorantAgents.find((agent) => {
      return agent.id === parseInt(id);
    });
  };
  const getRankByID = (id) => {
    return StatsValorantRanks.find((rank) => {
      return rank.id === parseInt(id);
    });
  };
  const getMapByID = (id) => {
    return StatsValorantMaps.find((map) => {
      return map.id === parseInt(id);
    });
  };

  return (
    <>
      {item && match && (
        <Link
        href={`/stryda/activity/${
          item.id
        }${prototype.getURLparams()}`}
      >
        <div className="aspect-video relative interactive grid place-content-center">
          <div
            className={`relative z-10 p-4 rounded-2 bg-ui-900/70 backdrop-blur leading-none flex flex-col items-center text-center ${
              match.stats.hasWon
                ? " text-success-300"
                : "text-error-300"
            }`}
          >
            <div className="font-headings text-5xl sm:text-6xl">
              {match.stats.score.team1} - {match.stats.score.team2}
            </div>
            <hr className="border-mono-100/10 mb-2" />
            <div className="uppercase text-lg sm:text-xl">
              {match.stats.hasWon ? "Victory" : "Defeat"}
            </div>

            <div className="px-3 pb-5 space-y-3">
              <Link
                href={`/stryda/activity/${item.id}${prototype.getURLparams()}`}
              >
                <button
                  type="button"
                  className="flex flex-col items-start gap-3 interactive"
                >
                  <MatchSneakPeak match={match} />
                  <div className="overflow-x-auto scrollbar-hidden">
                    <ul className="flex items-center divide-x divide-ui-500 leading-tight">
                      {match.meta?.agent && (
                        <li className="text-0">
                          <div className="avatar avatar-xs avatar-diamond mr-4">
                            <div>
                              <img
                                src={getAgentByID(match.meta.agent).picturePath}
                                alt=""
                              />
                            </div>
                          </div>
                        </li>
                      )}
                      {match.stats.mainStats
                        .slice(0, 4)
                        .map((mainStat, mainStatIndex) => (
                          <li key={mainStatIndex} className="px-4">
                            <div className="text-xs text-ui-300">
                              {mainStat.label}
                            </div>
                            <div className="text-lg text-ui-100">
                              {mainStat.value}
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>
                </button>
              </Link>
              {match.achievements && (
                <ul className="text-sm space-y-1 leading-tight">
                  {match.achievements.map((achievement, achievementIndex) => (
                    <FeedItemAchievement
                      key={achievementIndex}
                      user={match.user}
                      achievement={achievement}
                    />
                  ))}
                </ul>
              )}
            </div>
          </div>
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={getMapByID(match.meta.map).picturePath}
            alt=""
            width="auto"
            height="auto"
          />
        </div>
      </Link>
      )}
    </>
  );
}
