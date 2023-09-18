import { useEffect, useState, useContext } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import Link from "next/link";
import FeedItemAchievement from "./FeedItemAchievement";

export default function FeedItemMatchTabActivity(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const item = props.item;
  const match = props.match;

  return (
    <>
      {item && match && (
        <div className="aspect-video bg-ui-850 relative flex flex-col items-center justify-between p-3">
          <ul className="w-full text-sm flex-1 flex flex-col items-center justify-center space-y-1.5 leading-tight">
            {match.achievements.map((achievement, achievementIndex) => (
              <FeedItemAchievement
                key={achievementIndex}
                delay={achievementIndex}
                match={match}
                achievement={achievement}
              />
            ))}
          </ul>
          <div className="text-xs text-ui-300 animate-fade-in">
            This match generated scores in {match.achievements.length} Ladder{match.achievements.length > 1 && <>s</>}
          </div>
        </div>
      )}
    </>
  );
}
