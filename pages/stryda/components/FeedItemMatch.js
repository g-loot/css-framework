import { useEffect, useState, useContext } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import Avatar from "@/components/Avatar/Avatar";
import Link from "next/link";
import GameIcon from "@/components/GameIcon/GameIcon";
import { StatsValorantAgents } from "@/mock-data/data-stats-valorant";
import { StatsValorantRanks } from "@/mock-data/data-stats-valorant";
import { StatsValorantMaps } from "@/mock-data/data-stats-valorant";
import FeedItemComments from "./FeedItemComments";
import ModalShareActivity from "../modal-shareactivity";
import FeedItemContextualMenu from "./FeedItemContextualMenu";
import FeedItemAchievement from "./FeedItemAchievement";
import ModalHighlightViewer from "../modal-highlightviewer";

export default function FeedItemMatch(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const item = props.item;
  const match = props.match;
  const autoPlay = props.autoPlay || false;
  const [video, setVideo] = useState(null);

  useEffect(() => {
    setVideo(document.getElementById(`video_${item.id}`));
  }, [item]);

  useEffect(() => {
    if (video) {
      if (autoPlay) {
        video.play();
      } else {
        video.pause();
      }
    }
  }, [video, autoPlay]);

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

  function openModalShareActivity(item) {
    uiContext.openModal(<ModalShareActivity item={item} />);
  }

  function openModalHighlightViewer(match) {
    video.pause();
    uiContext.openModal(<ModalHighlightViewer item={match} />);
  }

  return (
    <>
      {item && match && (
        <div className="surface sm:rounded video">
          <div className="p-4 flex items-center gap-3">
            <Avatar id={match.user} size="avatar-sm" hasTooltip={true} />
            <div className="flex-1 overflow-hidden">
              <div className="truncate p-1">
                <Link
                  href={`/stryda/profile/${
                    match.user
                  }${prototype.getURLparams()}`}
                >
                  <span
                    className={`interactive truncate ${
                      prototype.getUserByID(match.user)?.isPremium
                        ? "text-premium-500"
                        : ""
                    }`}
                  >
                    {prototype.getUserByID(match.user)?.nickname}
                  </span>
                </Link>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-ui-300 px-1">
                <GameIcon game={match.meta.game} size="sm:text-lg" />
                <span>{match.meta.mode}</span>
                <i className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-ui-300" />
                <span className="capitalize">
                  {getMapByID(match.meta.map).name}
                </span>
                <i className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-ui-300" />
                <span>{match.meta.dateTimeEnded}</span>
              </div>
            </div>
            <div className="flex-none self-start">
              <FeedItemContextualMenu item={item} match={match} />
            </div>
          </div>
          <div className="px-2 sm:px-4 pt-2">
            <Link
              href={`/stryda/activity/${item.id}${prototype.getURLparams()}`}
            >
              <button
                type="button"
                className="flex flex-wrap items-start gap-4 interactive"
              >
                {match.meta.text && (
                  <p
                    className="text-lg md:text-xl font-bold text-ui-100 leading-tight"
                    dangerouslySetInnerHTML={{
                      __html: match.meta.text,
                    }}
                  />
                )}
                <div
                  className={`rounded px-2 py-1.5 text-xs sm:text-sm leading-none flex gap-2 items-center ${
                    match.stats.hasWon
                      ? " bg-success-500/10 text-success-300"
                      : "bg-error-500/10 text-error-300"
                  }`}
                >
                  <span>{match.stats.hasWon ? "Victory" : "Defeat"}</span>{" "}
                  <i
                    className={`block h-4 w-px ${
                      match.stats.hasWon
                        ? " bg-success-300/25"
                        : "bg-error-300/25"
                    }`}
                  />{" "}
                  <span>
                    {match.stats.score.team1} - {match.stats.score.team2}
                  </span>
                </div>
              </button>
            </Link>
          </div>
          <div className="p-2 overflow-x-auto scrollbar-hidden">
            <div className="flex items-between gap-4 justify-between">
              <div className="flex justify-start gap-4">
                <Link
                  href={`/stryda/activity/${
                    item.id
                  }${prototype.getURLparams()}`}
                >
                  <ul className="flex items-center divide-x divide-ui-500 leading-tight interactive py-2">
                    {match.meta?.agent && (
                      <li className="text-0">
                        <div className="avatar avatar-xs avatar-diamond ml-2 mr-4">
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
                          <div className="text-xs sm:text-sm text-ui-300">
                            {mainStat.label}
                          </div>
                          <div className="text-lg text-ui-100">
                            {mainStat.value}
                          </div>
                        </li>
                      ))}
                  </ul>
                </Link>
              </div>
            </div>
          </div>
          {match.achievements && (
            <ul className="px-4 pb-4 text-xs sm:text-sm space-y-1 leading-tight">
              {match.achievements.map((achievement, achievementIndex) => (
                <FeedItemAchievement
                  key={achievementIndex}
                  user={match.user}
                  achievement={achievement}
                />
              ))}
            </ul>
          )}
          {match.meta.media ? (
            <button type="button" onClick={() => openModalHighlightViewer(match)}>
              <video
                autoPlay={autoPlay}
                controls
                playsInline
                loop
                muted
                width="100%"
                height="auto"
                className="w-full"
                id={`video_${item.id}`}
                src={match.meta.media.url}
              />
            </button>
          ) : (
            <>
              {match.meta.map && (
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
          )}
          <FeedItemComments item={item} isExpanded={false} />
        </div>
      )}
    </>
  );
}
