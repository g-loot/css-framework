import { useEffect, useState, useContext } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";

import FeedItemComments from "./FeedItemComments";
import ModalShareActivity from "../modal-shareactivity";
import FeedItemMatchTabActivity from "./FeedItemMatchTabActivity";
import FeedItemMatchTabSummary from "./FeedItemMatchTabSummary";
import FeedItemMatchTabHighlight from "./FeedItemMatchTabHighlight";
import FeedItemMatchBase from "./FeedItemMatchBase";
import FeedItemMatchTabStats from "./FeedItemMatchTabStats";

export default function FeedItemDetailsMatch(props) {
  const router = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const item = props.item;
  const match = props.match;
  const { tab } = router.query;
  const selectedTab = tab ? tab : props.selectedTab;
  const url = "/stryda/activity/";
  const defaultTab = selectedTab != "default" ? selectedTab : (match.meta.media?.videoUrl ? "highlight" : "summary");
  const [activeTab, setActiveTab] = useState(defaultTab);

  useEffect(() => {
    history.pushState(null, "", `${url}${item.id}`);
  }, []);

  useEffect(() => {
    history.pushState(null, "", `${url}${item.id}?tab=${activeTab}`);
  }, [activeTab]);

  function openModalShareActivity(item) {
    uiContext.openModal(<ModalShareActivity item={item} />);
  }

  return (
    <>
      {item && match && (
            <div className="surface rounded text-0">
              <div className="relative overflow-hidden rounded">
                <FeedItemMatchBase
                  match={match}
                  item={item}
                  detailedView={true}
                />

                {/* <div className="relative z-10 p-4 flex flex-col lg:flex-row items-start gap-4">
                  {match.meta.text && (
                    <div className="flex-1">
                      <p
                        className="text-lg font-bold text-ui-100 leading-tight"
                        dangerouslySetInnerHTML={{
                          __html: match.meta.text,
                        }}
                      />
                    </div>
                  )}
                  <MatchSneakPeak match={match} />
                </div>
                <div className="relative z-10 px-4 overflow-x-auto scrollbar-hidden">
                  <div className="flex flex-col items-start justify-center rounded border border-ui-700 bg-ui-850/80 backdrop-blur overflow-hidden">
                    <div className="w-full overflow-x-auto overflow-y-hidden scrollbar-hidden flex justify-start p-4">
                      <ul className="flex gap-4 items-center mx-auto text-center divide-x divide-ui-600 leading-tight">
                        {match.meta?.agent && (
                          <li className="text-0">
                            <div className="avatar avatar-sm avatar-diamond">
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
                        {match.stats.mainStats.map(
                          (mainStat, mainStatIndex) => (
                            <li key={mainStatIndex} className="pl-4">
                              <div className="text-sm text-ui-300">
                                {mainStat.label}
                              </div>
                              <div className="text-2xl text-ui-100">
                                {mainStat.value}
                              </div>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    {match.achievements.length > 0 && (
                      <div className="flex self-stretch items-center gap-4 lg:gap-8 border-t border-ui-700 py-4 px-4 lg:px-8">
                        <div className="hidden lg:grid place-content-center relative aspect-square border-r border-ui-700 pr-4 lg:pr-8">
                          <div className="relative grid place-content-center text-center">
                            <span className="icon icon-laurel text-ui-400/50 text-8xl" />
                            <div className="absolute z-0 inset-0 grid place-content-center">
                              <div className="text-3xl text-ui-100 pb-1">
                                {match.achievements.length}
                              </div>
                            </div>
                          </div>
                        </div>
                        <ul className="space-y-1 text-sm leading-tight">
                          {match.achievements.map(
                            (achievement, achievementIndex) => (
                              <FeedItemAchievement
                                key={achievementIndex}
                                match={match}
                                achievement={achievement}
                              />
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div className="relative z-10 p-4">
                  <ul className="surface-ui-600 rounded overflow-hidden tabs tabs-stretch shadow-md divide-x divide-ui-500">
                    {match.meta.media && (
                      <li>
                        <button
                          type="button"
                          className={`${tabOn ? "is-active" : ""}`}
                          onClick={() => setTabOn(!tabOn)}
                        >
                          <span>
                            {match.meta.media.videoUrl ? (
                              <>Video highlight</>
                            ) : (
                              <>End screen</>
                            )}
                          </span>
                        </button>
                      </li>
                    )}
                    <li>
                      <button
                        type="button"
                        className={`${!tabOn ? "is-active" : ""}`}
                        onClick={() => setTabOn(!tabOn)}
                      >
                        <span>stats</span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="absolute z-0 inset-0 flex items-end md:items-center justify-center opacity-25 md:opacity-50 mix-blend-lighten rounded-t overflow-hidden">
                  <i className="absolute z-10 inset-0 bg-gradient-to-b from-ui-800/50 to-ui-800" />
                  <img
                    className="absolute z-0 object-cover left-[33%] md:left-auto object-center animate-slide-in-bottom"
                    src={getAgentByID(match.meta.agent).backgroundPath}
                    alt=""
                  />
                </div> */}
              </div>

              <div className="flex justify-start overflow-auto scrollbar-hidden md:block">
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
                  <li>
                    <button
                      type="button"
                      className={activeTab === "stats" ? "is-active" : ""}
                      onClick={() => setActiveTab("stats")}
                    >
                      <span>Stats &amp; scoreboard</span>
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
                  <li>
                    <button
                      type="button"
                      className={activeTab === "comments" ? "is-active" : ""}
                      onClick={() => setActiveTab("comments")}
                    >
                      <span>Comments
                          <span className="text-xs">
                            ({item.social.comments.length})
                          </span>
                      </span>
                    </button>
                  </li>
                </ul>
              </div>

              {activeTab === "highlight" && (
                <FeedItemMatchTabHighlight
                  match={match}
                  item={item}
                  autoPlay={true}
                  detailedView={true}
                />
              )}
              {activeTab === "summary" && (
                <FeedItemMatchTabSummary
                  match={match}
                  item={item}
                  detailedView={true}
                />
              )}
              {activeTab === "activity" && (
                <FeedItemMatchTabActivity
                  match={match}
                  item={item}
                  detailedView={true}
                />
              )}
              {activeTab === "stats" && (
                <FeedItemMatchTabStats
                  match={match}
                  item={item}
                  detailedView={true}
                />
              )}
              <FeedItemComments
                item={item}
                isExpanded={activeTab === "comments" ? true : false}
                detailedView={true}
              />
            </div>
      )}
    </>
  );
}
