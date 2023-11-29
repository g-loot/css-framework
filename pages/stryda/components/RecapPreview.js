import { useEffect, useState } from "react";
import FeedItemMatchTabHighlight from "./FeedItemMatchTabHighlight";
import FeedItemMatchTabSummary from "./FeedItemMatchTabSummary";
import FeedItemMatchTabActivity from "./FeedItemMatchTabActivity";
import { dataFeedItems } from "@/mock-data/data-feed";
import { dataMatches } from "@/mock-data/data-matches";
import Tooltip from "@/components/Tooltip/Tooltip";

export default function RecapPreview(props) {
  const item = props.item || dataFeedItems[0];
  const match = props.match || dataMatches[0];
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
      <div className="modal">
        <div className="modal-content p-0">
          <div className="modal-body">
            <h2 className="modal-title text-center p-4">Recap preview</h2>
            <div className="flex flex-col lg:flex-row lg:items-stretch lg:rounded-bl overflow-hidden">
              {item && match && (
                <div className="flex-1 order-2 lg:order-1 video text-0">
                  {checkIfTab() && (
                    <ul className="tabs tabs-stretch text-sm border-t border-ui-700 bg-gradient-to-b from-ui-850 to-ui-800">
                      {match.meta.media?.videoUrl && (
                        <li>
                          <button
                            type="button"
                            className={
                              activeTab === "highlight" ? "is-active" : ""
                            }
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
                            className={
                              activeTab === "activity" ? "is-active" : ""
                            }
                            onClick={() => setActiveTab("activity")}
                          >
                            <span>
                              Ladder{match.achievements.length > 1 && <>s</>}{" "}
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
                </div>
              )}
              <div className="w-full lg:w-72 order-1 lg:order-2 lg:border-l lg:border-t lg:border-ui-700 p-4 bg-ui-850 lg:flex lg:flex-col justify-between">
                <div className="space-y-2 mb-2">
                  <h2 className="h5">Publish recap post</h2>
                  <div className="form-group">
                    <label htmlFor="recap-comment">Comment</label>
                    <textarea
                      name="recap-comment"
                      id="recap-comment"
                      class="max-h-[200px] resize-none"
                      rows="6"
                      placeholder="e.g. I did a sweet 20 bomb!"
                    ></textarea>
                  </div>
                  <button
                    type="button"
                    className="button button-primary w-full"
                  >
                    <span>Save &amp; publish recap</span>
                  </button>
                </div>
                <div className="flex flex-col items-stretch gap-2 text-center">
                  <Tooltip tooltip={<>Coming soon!</>} placement="top">
                    <button
                      type="button"
                      disabled
                      className="button button-tertiary w-full"
                    >
                      <span>Edit in recap editor</span>
                    </button>
                  </Tooltip>
                  <button
                    type="button"
                    className="button button-tertiary w-full"
                  >
                    <span>Delete recording</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
