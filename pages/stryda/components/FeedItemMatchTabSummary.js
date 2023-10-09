import { useEffect, useState, useContext } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import Link from "next/link";
import FeedItemAchievement from "./FeedItemAchievement";
import MatchSneakPeak from "./MatchSneakPeak";
import { StatsValorantAgents } from "@/mock-data/data-stats-valorant";
import { StatsValorantRanks } from "@/mock-data/data-stats-valorant";
import { StatsValorantMaps } from "@/mock-data/data-stats-valorant";
import ModalFeedItemViewer from "../modal-feeditemdetailsviewer";

export default function FeedItemMatchTabSummary(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const item = props.item;
  const match = props.match;
  const detailedView = props.detailedView || false;

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

  const getGamemodeImage = (gamemode) => {
    let baseUrl =
      "https://res.cloudinary.com/gloot/image/upload/v1695129417/Stryda/stats/valorant/Game_Mode_";
    let endUrl = ".webp";
    var gamemode = gamemode.replace(/\s+/g, "_");
    return baseUrl + gamemode + endUrl;
  };

  const getMapByID = (id) => {
    return StatsValorantMaps.find((map) => {
      return map.id === parseInt(id);
    });
  };

  function openFeedItemDetailsMatch(target) {
    uiContext.openModal(
      <ModalFeedItemViewer
        item={item}
        selectedTab={target ? target : "default"}
      />
    );
  }

  return (
    <>
      {item && match && (
        <>
          <div
            className="aspect-video bg-ui-850 relative interactive-secondary flex flex-col items-end justify-around p-6 gap-6 text-right leading-none overflow-hidden select-none"
            onClick={() => !detailedView && openFeedItemDetailsMatch("summary")}
          >
            <div
              className={`relative z-40
                ${match.stats.result === "victory" && "text-success-300"}
                ${match.stats.result === "defeat" && "text-error-300"}
                ${match.stats.result === "draw" && "text-ui-200"}
                `}
            >
              <div className="font-headings font-bold text-5xl sm:text-6xl md:text-7xl uppercase leading-none">
                {match.stats.result === "victory" && "Victory"}
                {match.stats.result === "defeat" && "Defeat"}
                {match.stats.result === "draw" && "Draw"}
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl">
                {match.stats.score.team1} - {match.stats.score.team2}
              </div>
            </div>
            <div className="relative z-40 text-base sm:text-xl md:text-2xl uppercase text-ui-100">
              <div className="flex gap-1.5 items-center">
                <img
                  src={getGamemodeImage(match.meta.mode)}
                  alt=""
                  className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8"
                />
                <span>{match.meta.mode}</span>
              </div>
              <div>{getMapByID(match.meta.map).name}</div>
            </div>
            <ul className="relative z-40 text-xl uppercase flex items-center justify-end text-left space-x-4 sm:space-x-6 md:space-x-8">
              {match.stats.mainStats
                .slice(0, 3)
                .map((mainStat, mainStatIndex) => (
                  <li key={mainStatIndex} className="">
                    <div className="text-xs sm:text-sm md:text-base text-ui-200">
                      {mainStat.label}
                    </div>
                    <div className="text-lg sm:text-xl md:text-xl text-ui-100">
                      {mainStat.value}
                    </div>
                  </li>
                ))}
            </ul>
            <img
              src={getAgentByID(match.meta.agent).bodyPath}
              className="absolute z-30 inset-y-0 -left-8 sm:left-0 h-full w-2/3 object-contain object-right-bottom drop-shadow-[.75rem_0_0_rgba(22,24,37,0.5)] animate-slide-in-left"
              alt=""
            />
            <span className="absolute z-20 inset-0 left-1/4 bg-gradient-to-r from-ui-800/0 via-ui-800/60 to-ui-800/80" />
            <span
              className={`absolute z-10 inset-0 ${
                match.stats.result === "victory" &&
                "shadow-[inset_0_0_3rem_0_rgb(var(--color-success-500)/20%)]"
              }
              ${
                match.stats.result === "defeat" &&
                "shadow-[inset_0_0_3rem_0_rgb(var(--color-error-500)/40%)]"
              }
              ${
                match.stats.result === "draw" &&
                "shadow-[inset_0_0_3rem_0_rgb(var(--color-ui-500)/40%)]"
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
        </>
      )}
    </>
  );
}
