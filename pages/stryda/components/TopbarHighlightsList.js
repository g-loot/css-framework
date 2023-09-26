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
    isCompleted: true,
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
    setProgressingItem(id);
    setStatus(status);
    onLoad(id, progress, status);
  }

  return (
    <ul className="p-2 space-y-2">
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
