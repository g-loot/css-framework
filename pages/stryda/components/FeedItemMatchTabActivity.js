import { useEffect, useState, useContext } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import Link from "next/link";
import FeedItemAchievement from "./FeedItemAchievement";
import ModalFeedItemViewer from "../modal-feeditemdetailsviewer";

export default function FeedItemMatchTabActivity(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const item = props.item;
  const match = props.match;
  const detailedView = props.detailedView || false;
  const [achievementsList, setAchievemetnsList] = useState([]);

  useEffect(() => {
    if (detailedView) {
      setAchievemetnsList(match.achievements);
    } else {
      setAchievemetnsList(match.achievements.slice(0,3));
    }
  }, [match]);

  function openFeedItemDetailsMatch(target) {
    uiContext.openModal(<ModalFeedItemViewer item={item} selectedTab={target ? target : "default"} />);
  }

  return (
    <>
      {item && match && (
        <div className={`bg-ui-850 relative flex flex-col items-center justify-between p-3 overflow-hidden ${detailedView ? '' : 'aspect-video'}`}>
          <ul className={`w-full text-sm flex-1 flex flex-col items-center justify-center leading-tight ${detailedView ? 'space-y-3' : 'space-y-1.5'}`}>
            {achievementsList.map((achievement, achievementIndex) => (
              <FeedItemAchievement
                key={achievementIndex}
                delay={achievementIndex}
                match={match}
                achievement={achievement}
                detailedView={detailedView}
              />
            ))}
          </ul>
          {!detailedView && match.achievements.length > 3 && (
            <div className="text-xs text-ui-300 animate-fade-in flex items-baseline justify-center gap-1.5">
              <span>This match generated scores in {match.achievements.length - 3} additional Ladder{match.achievements.length - 3 > 1 && <>s</>}</span>
              <button type="button" className="link link-main" onClick={() => !detailedView && openFeedItemDetailsMatch("activity")}>
                View all
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
