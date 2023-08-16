import { useEffect, useState } from "react";
import { usePrototypeData } from "@/contexts/prototype";
import Avatar from "@/components/Avatar/Avatar";
import Link from "next/link";
import GameIcon from "@/components/GameIcon/GameIcon";
import { StatsValorantMaps } from "@/mock-data/data-stats-valorant";
import FeedItemComments from "./FeedItemComments";

export default function FeedItemMatch(props) {
  const prototype = usePrototypeData();
  const item = props.item;
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

  const getMapByID = (id) => {
    return StatsValorantMaps.find((map) => {
      return map.id === parseInt(id);
    });
  };

  return (
    <>
      {item && (
        <div className="surface sm:rounded video">
          <div className="p-4 flex items-center gap-3">
            <Avatar id={item.author} size="avatar-sm" hasTooltip={true} />
            <div className="flex-1 overflow-hidden">
              <div className="truncate p-1">
                <Link
                  href={`/stryda/profile/${
                    item.author
                  }${prototype.getURLparams()}`}
                >
                  <span className="interactive truncate">
                    {prototype.getUserByID(item.author)?.nickname}
                  </span>
                </Link>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-ui-300 px-1">
                <GameIcon game={item.meta.game} size="sm:text-lg" />
                <span>{item.meta.mode}</span>
                <i className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-ui-300" />
                <span className="capitalize">
                  {getMapByID(item.meta.map).name}
                </span>
                <i className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-ui-300" />
                <span>{item.meta.dateTimeEnded}</span>
              </div>
            </div>
            <div className="flex-none self-start">
              <div className={`dropdown dropdown-left`}>
                <label
                  tabIndex="0"
                  className="button button-ghost rounded-full"
                >
                  <span className="icon icon-dots-vertical" />
                </label>
                <div
                  tabIndex="0"
                  className="dropdown-content bg-ui-600 w-52 p-1"
                >
                  <ul className="menu menu-rounded menu-secondary">
                    <li>
                      <button type="button">
                        <span className="icon icon-network-communication-1" />
                        <span>Share post</span>
                      </button>
                    </li>
                    {prototype.getUserByID(item.author).isYou ? (
                      <>
                        <li>
                          <button type="button">
                            <span className="icon icon-pen-2" />
                            <span>Edit post</span>
                          </button>
                        </li>
                        <li>
                          <button type="button">
                            <span className="icon icon-trash" />
                            <span>Delete post</span>
                          </button>
                        </li>
                      </>
                    ) : (
                      <li>
                        <button type="button">
                          <span className="icon icon-c-warning" />
                          <span>Report abuse</span>
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 sm:px-6 pt-2">
            <Link
              href={`/stryda/activity/${item.id}${prototype.getURLparams()}`}
            >
              <button
                type="button"
                className="flex flex-wrap items-center gap-4 interactive"
              >
                {item.meta.text && (
                  <p
                    className="text-lg md:text-xl font-bold text-ui-100"
                    dangerouslySetInnerHTML={{
                      __html: item.meta.text,
                    }}
                  />
                )}
                <div
                  className={`rounded px-2 py-1.5 text-xs sm:text-sm leading-none flex gap-2 items-center ${
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
              </button>
            </Link>
          </div>
          <div className="p-2 sm:p-4 overflow-x-auto scrollbar-hidden">
            <div className="flex items-between gap-4 justify-between">
              <div className="flex justify-start gap-4">
                <Link
                  href={`/stryda/activity/${
                    item.id
                  }${prototype.getURLparams()}`}
                >
                  <ul className="flex items-center divide-x divide-ui-500 leading-tight interactive py-2">
                    {item.stats.mainStats.map((mainStat, mainStatIndex) => (
                      <li key={mainStatIndex} className="px-5 first:pl-2">
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
              {item.achievements && (
                <Link
                  href={`/stryda/activity/${
                    item.id
                  }${prototype.getURLparams()}`}
                >
                  <div className="interactive relative z-10 w-24 h-auto grid place-content-center text-center">
                    <div className="text-2xl text-ui-100 pb-1">
                      {item.achievements.length}
                    </div>
                    <div className="absolute z-0 inset-0 grid place-content-center">
                      <span className="icon icon-laurel text-ui-400/50 text-7xl" />
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
          {item.meta.media && (
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
              src={item.meta.media.url}
            />
          )}
          <FeedItemComments item={item} />
        </div>
      )}
    </>
  );
}
