import { useEffect, useState, useContext } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import Avatar from "@/components/Avatar/Avatar";
import Link from "next/link";
import FeedItemComments from "./FeedItemComments";
import FeedItemContextualMenu from "./FeedItemContextualMenu";
import FeedItemMatchTabHighlight from "./FeedItemMatchTabHighlight";
import FeedItemMatchTabSummary from "./FeedItemMatchTabSummary";
import FeedItemMatchTabActivity from "./FeedItemMatchTabActivity";

export default function FeedItemMatch(props) {
  const prototype = usePrototypeData();
  const item = props.item;
  const match = props.match;
  const autoPlay = props.autoPlay || false;
  const [viewMore, setViewMore] = useState(false);
  const [activeTab, setActiveTab] = useState();

  useEffect(() => {
    if (match.meta.media?.videoUrl) {
      setActiveTab("highlight");
    } else {
      setActiveTab("summary");
    }
  }, [item]);

  const checkIfTab = () => {
    if (!match.meta.media?.videoUrl && match.achievements?.length === 0) {
      return false;
    } else {
      return true;
    }
  };

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
              <div className="text-xs text-ui-300 px-1 whitespace-nowrap flex items-center gap-1">
                <span>{match.meta.dateTimeEnded}</span>
              </div>
            </div>
            <div className="flex-none self-start">
              <FeedItemContextualMenu
                item={item}
                match={match}
                autoPlay={autoPlay}
              />
            </div>
          </div>
          <div className="pl-2 sm:pl-3 pr-1 sm:pr-2 pt-1 pb-3 flex items-center justify-between gap-2">
            <Link
              href={`/stryda/activity/${item.id}${prototype.getURLparams()}`}
            >
              <button type="button" className="interactive">
                {match.meta.text && (
                  <p
                    className="text-base md:text-lg font-bold text-ui-100 leading-tight"
                    dangerouslySetInnerHTML={{
                      __html: match.meta.text,
                    }}
                  />
                )}
              </button>
            </Link>
          </div>
          {checkIfTab() && (
            <ul className="tabs tabs-stretch text-sm border-t border-ui-700 bg-gradient-to-b from-ui-850 to-ui-800">
              {match.meta.media?.videoUrl && (
                <li>
                  <button
                    type="button"
                    className={activeTab === "highlight" ? "is-active" : ""}
                    onClick={() => setActiveTab("highlight")}
                  >
                    <span>Highlight</span>
                  </button>
                </li>
              )}
              <li>
                <button
                  type="button"
                  className={activeTab === "summary" ? "is-active" : ""}
                  onClick={() => setActiveTab("summary")}
                >
                  <span>Summary</span>
                </button>
              </li>
              {match.achievements?.length > 0 && (
                <li>
                  <button
                    type="button"
                    className={activeTab === "activity" ? "is-active" : ""}
                    onClick={() => setActiveTab("activity")}
                  >
                    <span>Activity <span className="text-xs">({match.achievements.length})</span></span>
                  </button>
                </li>
              )}
            </ul>
          )}
          {activeTab === "highlight" && (
            <FeedItemMatchTabHighlight
              match={match}
              item={item}
              autoPlay={autoPlay}
            />
          )}
          {activeTab === "summary" && (
            <FeedItemMatchTabSummary match={match} item={item} />
          )}
          {activeTab === "activity" && (
            <FeedItemMatchTabActivity match={match} item={item} />
          )}
          <FeedItemComments item={item} isExpanded={false} />
        </div>
      )}
    </>
  );
}
