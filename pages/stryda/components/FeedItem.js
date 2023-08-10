import { useEffect, useState } from "react";
import { usePrototypeData } from "../../../contexts/prototype";
import Avatar from "../../../components/Avatar/Avatar";
import Link from "next/link";
import GameIcon from "../../../components/GameIcon/GameIcon";
import Tooltip from "../../../components/Tooltip/Tooltip";

export default function FeedItem(props) {
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

  return (
    <>
      {item && (
        <div className="surface rounded video">
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
              <div className="flex items-center gap-2 text-sm text-ui-300 px-1">
                <GameIcon game={item.meta.game} size="text-lg" />
                <span>{item.meta.gameMode}</span>
                <i className="w-1 h-1 rounded-full bg-ui-300" />
                <span>{item.meta.map}</span>
                <i className="w-1 h-1 rounded-full bg-ui-300" />
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
                    {prototype.getUserByID(item.author).isYou ? (
                      <>
                        <li>
                          <button type="button">
                            <span className="icon icon-pen-2" />
                            <span>Edit post</span>
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
          <div className="px-6 pt-2">
            <Link
              href={`/stryda/activity/${item.id}${prototype.getURLparams()}`}
            >
              <button
                type="button"
                className="flex flex-wrap items-center gap-4 interactive"
              >
                {item.meta.text && (
                  <p
                    className="text-lg text-ui-100"
                    dangerouslySetInnerHTML={{
                      __html: item.meta.text,
                    }}
                  />
                )}
                <div
                  className={`rounded px-2 py-1.5 text-sm leading-none flex gap-2 items-center ${
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
                    {item.stats.scoreOwn} - {item.stats.scoreOpposite}
                  </span>
                </div>
              </button>
            </Link>
          </div>
          <div className="p-4 overflow-x-auto scrollbar-hidden">
            <div className="flex justify-start">
              <Link
                href={`/stryda/activity/${item.id}${prototype.getURLparams()}`}
              >
                <ul className="flex items-center divide-x divide-ui-500 leading-tight interactive py-2">
                  {item.stats.mainStats.map((mainStat, mainStatIndex) => (
                    <li key={mainStatIndex} className="px-6 first:pl-2">
                      <div className="text-sm text-ui-300">
                        {mainStat.label}
                      </div>
                      <div className="text-xl text-ui-100">
                        {mainStat.value}
                      </div>
                    </li>
                  ))}
                </ul>
              </Link>
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
          <div className="p-6 flex gap-4 items-center justify-between text-sm text-ui-300">
            <div className="flex items-center gap-2">
              {item.social?.views && (
                <>
                  <div className="avatar-group -space-x-1 mr-1">
                    {item.social.views.slice(0, 3).map((user, userIndex) => (
                      <Avatar id={user} key={userIndex} size="avatar-tiny" />
                    ))}
                  </div>
                  <Tooltip
                    placement="top"
                    tooltip={
                      <ul className="text-xs leading-snug">
                        {item.social.views
                          .slice(0, 5)
                          .map((user, userIndex) => (
                            <li key={userIndex}>
                              {prototype.getUserByID(user).nickname}
                            </li>
                          ))}
                        {item.social.views.length > 5 && (
                          <li>+ {item.social.views.length - 5}</li>
                        )}
                      </ul>
                    }
                  >
                    <button type="button">
                      {item.social.views.length} view
                      {item.social.views.length > 1 && <>s</>}
                    </button>
                  </Tooltip>
                </>
              )}
              {item.social?.likes && (
                <>
                  <i className="w-1 h-1 rounded-full bg-ui-300" />
                  <Tooltip
                    placement="top"
                    tooltip={
                      <ul className="text-xs leading-snug">
                        {item.social.likes.users
                          .slice(0, 5)
                          .map((user, userIndex) => (
                            <li key={userIndex}>
                              {prototype.getUserByID(user).nickname}
                            </li>
                          ))}
                        {item.social.likes.users.length > 5 && (
                          <li>+ {item.social.likes.users.length - 5}</li>
                        )}
                      </ul>
                    }
                  >
                    <button type="button">
                      {item.social.likes.users.length} like
                      {item.social.likes.users.length > 1 && <>s</>}
                    </button>
                  </Tooltip>
                </>
              )}
              {item.social?.comments && (
                <>
                  <i className="w-1 h-1 rounded-full bg-ui-300" />
                  <span>
                    {item.social.comments.length} comment
                    {item.social.comments.length > 1 && <>s</>}
                  </span>
                </>
              )}
            </div>
          </div>
          {item.social?.comments && (
            <ul className="px-6 pt-2 pb-6 space-y-6">
              {item.social.comments.map((comment, commentIndex) => (
                <li key={commentIndex} className="flex items-start gap-3">
                  <Avatar
                    id={comment.author}
                    size="avatar-xs"
                    hasTooltip={true}
                  />
                  <div className="text-sm">
                    <div className="truncate p-1">
                      <Link
                        href={`/stryda/profile/${
                          comment.author
                        }${prototype.getURLparams()}`}
                      >
                        <span className="interactive truncate font-bold">
                          {prototype.getUserByID(comment.author)?.nickname}
                        </span>
                      </Link>
                    </div>
                    <p
                      className="text-sm text-ui-300 px-1"
                      dangerouslySetInnerHTML={{
                        __html: comment.text,
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
}
