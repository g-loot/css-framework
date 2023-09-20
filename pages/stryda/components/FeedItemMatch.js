import { useEffect, useState } from "react";
import FeedItemComments from "./FeedItemComments";
import FeedItemMatchTabHighlight from "./FeedItemMatchTabHighlight";
import FeedItemMatchTabSummary from "./FeedItemMatchTabSummary";
import FeedItemMatchTabActivity from "./FeedItemMatchTabActivity";
import FeedItemMatchBase from "./FeedItemMatchBase";

export default function FeedItemMatch(props) {
  const item = props.item;
  const match = props.match;
  const autoPlay = props.autoPlay || false;
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
          <FeedItemMatchBase match={match} item={item} />
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
                    <span>
                      Activity{" "}
                      <span className="text-xs">
                        ({match.achievements.length})
                      </span>
                    </span>
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
