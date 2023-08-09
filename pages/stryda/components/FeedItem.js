import { useEffect, useState } from "react";
import { usePrototypeData } from "../../../contexts/prototype";
import Avatar from "../../../components/Avatar/Avatar";
import Link from "next/link";
import GameIcon from "../../../components/GameIcon/GameIcon";

export default function FeedItem(props) {
  const prototype = usePrototypeData();
  const item = props.item;

  return (
    <>
      {item && (
        <div className="surface rounded">
          <div className="p-4 flex items-center gap-4">
            <Avatar id={item.author} size="avatar-sm" hasTooltip={true} />
            <div className="flex-1 overflow-hidden">
              <div className="truncate">
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
              <div className="flex items-center gap-2 text-sm text-ui-300">
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
                            <span className="icon icon-leave" />
                            <span>Edit match</span>
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
            <div className="flex flex-wrap items-center gap-4">
              <p
                className="text-lg text-ui-100"
                dangerouslySetInnerHTML={{
                  __html: item.meta.text,
                }}
              />
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
                    item.stats.hasWon ? " bg-success-300/25" : "bg-error-300/25"
                  }`}
                />{" "}
                <span>
                  {item.stats.scoreOwn} - {item.stats.scoreOpposite}
                </span>
              </div>
            </div>
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
          <div className="aspect-video bg-ui-400"></div>
          <div className="p-6 flex gap-4 items-center justify-between text-sm text-ui-300">
            <div className="flex gap-2 items-center">
              <div className="avatar-group -space-x-2">
                <div className="avatar avatar-circle avatar-tiny">
                  <div>
                    <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_1.jpg" />
                  </div>
                </div>
                <div className="avatar avatar-circle avatar-tiny">
                  <div>
                    <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_2.jpg" />
                  </div>
                </div>
                <div className="avatar avatar-circle avatar-tiny">
                  <div>
                    <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg" />
                  </div>
                </div>
              </div>
              <div>143 viewers</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
