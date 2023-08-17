import React, { useEffect, useState, useContext } from "react";
import { UiContext } from "@/contexts/ui";
import ModalHighlightViewer from "../modal-highlightviewer";
import GameIcon from "@/components/GameIcon/GameIcon";
import { StatsValorantAgents } from "@/mock-data/data-stats-valorant";
import { StatsValorantRanks } from "@/mock-data/data-stats-valorant";
import { StatsValorantMaps } from "@/mock-data/data-stats-valorant";
import { StatsValorantWeapons } from "@/mock-data/data-stats-valorant";

export default function Video(props) {
  const uiContext = useContext(UiContext);
  const item = props.item;
  const hasMeta = props.hasMeta || false;
  const autoPlay = props.autoPlay || false;
  const id = RandomNumber(1000, 100000);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    setVideo(document.getElementById(`video_${id}`));
  }, [id]);

  useEffect(() => {
    if (video) {
      if (autoPlay) {
        video.play();
      } else {
        video.pause();
      }
    }
  }, [video, autoPlay]);

  function handleVideoPlay() {
    if (video) {
      video.play();
    }
  }
  function handleVideoPause() {
    if (video) {
      video.pause();
    }
  }

  function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function openModalHighlightViewer(item) {
    uiContext.openModal(<ModalHighlightViewer item={item} />);
  }

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
  const getWeaponByID = (id) => {
    return StatsValorantWeapons.find((weapon) => {
      return weapon.id === parseInt(id);
    });
  };

  return (
    <>
      {item && (
        <button
          type="button"
          className="interactive active:opacity-50 w-full"
          onMouseOver={handleVideoPlay}
          onMouseOut={handleVideoPause}
          onClick={() => openModalHighlightViewer(item)}
        >
          <div className="relative aspect-video w-full rounded-2 overflow-hidden bg-ui-700">
            <div className="absolute z-20 top-1 left-1">
              <GameIcon game={item.game} size="sm:text-lg" />
            </div>
            <video
              autoPlay={false}
              playsInline
              loop
              muted
              preload
              width="100%"
              height="100%"
              id={`video_${id}`}
              className="relative z-10 w-full"
              src={`${item.media?.url}#t=1`}
            ></video>
            <div className="absolute z-0 inset-0 grid place-content-center">
              <span className="icon icon-video text-ui-400 text-2xl" />
            </div>
          </div>
          {hasMeta && (
            <div className="flex gap-2 items-start mt-2">
              {item.stats?.agent && (
                <div className="avatar avatar-xs avatar-diamond ml-1">
                  <div>
                    <img
                      src={getAgentByID(item.stats.agent).picturePath}
                      alt=""
                    />
                  </div>
                </div>
              )}
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-ui-100 leading-tight">
                    AI generated text
                  </p>
                  <div
                    className={`rounded px-1.5 py-1 text-xs leading-none flex gap-2 items-center ${
                      item.stats.hasWon
                        ? " bg-success-500/10 text-success-300"
                        : "bg-error-500/10 text-error-300"
                    }`}
                  >
                    <span>{item.stats.hasWon ? "Victory" : "Defeat"}</span>{" "}
                    <i
                      className={`block h-4 w-px ${
                        item.stats.hasWon
                          ? " bg-success-300/25"
                          : "bg-error-300/25"
                      }`}
                    />{" "}
                    <span>
                      {item.stats.score.team1} - {item.stats.score.team2}
                    </span>
                  </div>
                </div>
                <div className="flex-1 flex items-center gap-2 text-xs sm:text-sm text-ui-300">
                  <span>{item.social?.views} views</span>
                  <i className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-ui-300" />
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          )}
        </button>
      )}
    </>
  );
}
