import { useEffect, useState, useContext } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import Link from "next/link";
import FeedItemAchievement from "./FeedItemAchievement";
import MatchSneakPeak from "./MatchSneakPeak";
import { StatsValorantAgents } from "@/mock-data/data-stats-valorant";
import { StatsValorantRanks } from "@/mock-data/data-stats-valorant";
import { StatsValorantMaps } from "@/mock-data/data-stats-valorant";

export default function FeedItemMatchTabSummary(props) {
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
        <Link href={`/stryda/activity/${item.id}${prototype.getURLparams()}`}>
          <div className="aspect-video relative interactive-secondary flex flex-col items-end justify-around p-6 gap-6 text-right leading-none overflow-hidden select-none">
            <div
              className={`relative z-50 ${
                match.stats.hasWon ? " text-success-300" : "text-error-300"
              }`}
            >
              <div className="font-headings font-bold text-5xl sm:text-6xl uppercase leading-none">
                {match.stats.hasWon ? "Victory" : "Defeat"}
              </div>
              <div className="text-4xl">
                {match.stats.score.team1} - {match.stats.score.team2}
              </div>
            </div>
            <div className="relative z-50 text-xl uppercase text-ui-100">
              <div>{match.meta.mode}</div>
              <div>{getMapByID(match.meta.map).name}</div>
            </div>
            <ul className="relative z-50 text-xl uppercase flex items-center justify-end text-left">
              {match.stats.mainStats
                .slice(0, 3)
                .map((mainStat, mainStatIndex) => (
                  <li key={mainStatIndex} className="pl-4">
                    <div className="text-xs text-ui-200">{mainStat.label}</div>
                    <div className="text-lg text-ui-100">{mainStat.value}</div>
                  </li>
                ))}
            </ul>
            <img
              src={getAgentByID(match.meta.agent).bodyPath}
              className="absolute z-30 inset-y-0 left-0 h-full w-2/3 object-contain object-right-bottom drop-shadow-[.75rem_0_0_rgba(22,24,37,0.5)] animate-slide-in-left"
              alt=""
            />
            <span className="absolute z-10 inset-0 bg-gradient-to-r from-ui-800/0 via-ui-800/60 to-ui-800/80" />
            <span
              className={`absolute z-20 inset-0 ${
                match.stats.hasWon ? "shadow-[inset_0_0_3rem_0_rgb(var(--color-success-500)/20%)]" : "shadow-[inset_0_0_3rem_0_rgb(var(--color-error-500)/40%)]"
              }`}
            />
            <img
              className="absolute z-0 inset-0 h-full w-full object-cover opacity-50"
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
