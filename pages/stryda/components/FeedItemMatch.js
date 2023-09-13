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
  const [viewMore, setViewMore] = useState(false);

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

  function openModalHighlightViewer(match) {
    uiContext.openModal(<ModalHighlightViewer item={match} />);
  }

  return (
    <>
      {item && match && (
        <div className="surface sm:rounded video text-0">
          <div className="p-3 flex items-center gap-3 leading-tight text-base">
            <Avatar id={match.user} size="avatar-sm" hasTooltip={true} />
            <div className="flex-1 overflow-hidden leading-tight">
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
              <div className="text-xs text-ui-300 px-1 whitespace-nowrap">
                {match.meta.dateTimeEnded} • {match.meta.mode}
                {/* • {getMapByID(match.meta.map).name} */}
              </div>
            </div>
            <div className="flex-none self-start">
              <FeedItemContextualMenu item={item} match={match} />
            </div>
          </div>
          <div className="pl-2 sm:pl-3 pr-1 sm:pr-2 pt-1 pb-3 flex items-end gap-2">
            <Link
              href={`/stryda/activity/${item.id}${prototype.getURLparams()}`}
            >
              <button
                type="button"
                className="flex-1 flex flex-wrap items-start gap-1 interactive"
              >
                {match.meta.text && (
                  <p
                    className="text-base md:text-lg font-bold text-ui-100 leading-tight"
                    dangerouslySetInnerHTML={{
                      __html: match.meta.text,
                    }}
                  />
                )}
                <div
                  className={`rounded px-2 py-1 text-xs leading-none flex gap-2 items-center ${
                    match.stats.hasWon
                      ? " bg-success-500/10 text-success-300"
                      : "bg-error-500/10 text-error-300"
                  }`}
                >
                  <span>{match.stats.hasWon ? "Victory" : "Defeat"}</span>
                  {/* {" "}
                  <i
                    className={`block h-4 w-px ${
                      match.stats.hasWon
                        ? " bg-success-300/25"
                        : "bg-error-300/25"
                    }`}
                  />{" "}
                  <span>
                    {match.stats.score.team1} - {match.stats.score.team2}
                  </span> */}
                </div>
              </button>
            </Link>
            <div className="flex-none">
              <button
                type="button"
                className="button button-sm button-ghost rounded"
                onClick={() => setViewMore(!viewMore)}
              >
                <span
                  className={`icon ${
                    viewMore ? "icon-arrow-sm-up" : "icon-arrow-sm-down"
                  }`}
                />
                <span>{viewMore ? <>Less</> : <>More</>} details</span>
              </button>
            </div>
          </div>
          {viewMore && (
            <>
              <div className="p-2 pt-1 overflow-x-auto scrollbar-hidden">
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
                                  src={
                                    getAgentByID(match.meta.agent).picturePath
                                  }
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
                    </Link>
                  </div>
                </div>
              </div>
              {match.achievements && (
                <ul className="px-4 pb-4 text-sm space-y-1 leading-tight">
                  {match.achievements.map((achievement, achievementIndex) => (
                    <FeedItemAchievement
                      key={achievementIndex}
                      user={match.user}
                      achievement={achievement}
                    />
                  ))}
                </ul>
              )}
            </>
          )}
          {match.meta.media ? (
            <>
              {match.meta.media.videoUrl && (
                <button
                  type="button border-y border-ui-700"
                  onClick={() => openModalHighlightViewer(match)}
                >
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
              )}
              {match.meta.media.imageUrl && (
                <Link
                  href={`/stryda/activity/${
                    item.id
                  }${prototype.getURLparams()}`}
                >
                  <img src={match.meta.media.imageUrl} alt="" />
                </Link>
              )}
            </>
          ) : (
            <>
              {match.meta.map && (
                <Link
                  href={`/stryda/activity/${
                    item.id
                  }${prototype.getURLparams()}`}
                >
                  <div className="aspect-landscape relative interactive grid place-content-center border-y border-ui-700">
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
