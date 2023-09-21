import { useEffect, useState, useContext } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import Avatar from "@/components/Avatar/Avatar";
import Link from "next/link";
import FeedItemComments from "./FeedItemComments";
import ReadMore from "@/components/ReadMore/ReadMore";
import AchievementFrame from "@/components/Achievements/AchievementFrame";
import AchievementIcon from "@/components/Achievements/AchievementIcon";

export default function FeedItemTrophy(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const item = props.item;
  return (
    <>
      {item && (
        <button type="button" className="surface sm:rounded w-full text-0">
          <div className="p-3 flex items-center gap-3 leading-tight text-base">
            <Avatar id={item.author} size="avatar-sm" hasTooltip={true} />
            <div className="flex-1 overflow-hidden">
              <div className="truncate p-1">
                <Link
                  href={`/stryda/profile/${
                    item.author
                  }${prototype.getURLparams()}`}
                >
                  <span
                    className={`interactive truncate ${
                      prototype.getUserByID(item.author)?.isPremium
                        ? "text-premium-500"
                        : ""
                    }`}
                  >
                    {prototype.getUserByID(item.author)?.nickname}
                  </span>
                </Link>
              </div>
              <div className="flex items-center gap-2 text-xs text-ui-300 px-1">
                <span>2 min. ago</span>
              </div>
            </div>
          </div>
          <div className="px-4 pt-2 pb-4 text-base">
            <p className="text-ui-300">
              {item.text.replace(
                "[x]",
                prototype.getUserByID(item.author)?.nickname
              )}
            </p>
          </div>
          <div className="flex items-center justify-center p-4 gap-4 bg-ui-850">
            <div className={`w-36 h-36 achievement`}>
              <i />
              <i />
              <div className={`achievement-level-${item.achievementLevel}`}>
                <AchievementFrame
                  url={`https://res.cloudinary.com/gloot/image/upload/v1678871888/Stryda/achievements/frames/achievement-frame-lvl${item.achievementLevel}-animated.svg`}
                />
                <AchievementIcon
                  url={`https://res.cloudinary.com/gloot/image/upload/v1678872380/Stryda/achievements/icons/achievement-icon-${
                    prototype.getAchievementitemByID(1, item.achievementID).icon
                  }.svg`}
                />
              </div>
            </div>
            <div>
              <h3 className="h5">
                <span>{prototype.getAchievementitemByID(1, item.achievementID).name}</span>{" "}
                <small className="uppercase">— level {item.achievementLevel}</small>
              </h3>
              <p className="text-ui-300 mt-2 text-sm">
                {
                  prototype.getAchievementitemByID(1, item.achievementID)
                    .description
                }
              </p>
            </div>
          </div>
          <FeedItemComments item={item} isExpanded={false} />
        </button>
      )}
    </>
  );
}
