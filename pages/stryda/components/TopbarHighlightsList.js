import { useEffect, useState, useRef } from "react";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import TopbarHighlightsListItem from "./TopbarHighlightsListItem";
import { dataMatches } from '@/mock-data/data-matches'; 

const Matches = [
  {
    id: 0,
    matchID: 1,
    isCompleted: false,
  },
  {
    id: 1,
    matchID: 2,
    isCompleted: false,
  },
  {
    id: 2,
    matchID: 4,
    isCompleted: true,
  },
  {
    id: 3,
    matchID: 5,
    isCompleted: true,
  },
];

export default function TopbarHighlightsList({ onLoad, ...props }) {
  const { query } = useRouter();
  const isEmpty = query.empty === "true" ? true : false;
  const [progressingItem, setProgressingItem] = useState(0);
  const [status, setStatus] = useState();

  const getMatchByID = (id) => {
    return dataMatches.find((match) => {
      return match.id === parseInt(id);
    });
  };

  function handleLoad(id, progress, status) {
    onLoad(id, progress);
    setProgressingItem(id);
    setStatus(status);
  }

  return (
    <ul className="max-h-[400px] bg-ui-700 overflow-x-hidden overflow-y-auto scrollbar-desktop p-2 space-y-2">
      {Matches.map((match, matchIndex) => (
        <TopbarHighlightsListItem
          key={matchIndex}
          delay={matchIndex}
          match={getMatchByID(match.matchID)}
          onLoad={handleLoad}
          disabled={progressingItem != match.matchID && status === "processing" && !match.isCompleted}
          finished={match.isCompleted}
        />
      ))}
    </ul>
  );
}
