import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

import { DataScoreboards } from "@/mock-data/data-scoreboards";
import ScoreboardOverview from "./components/scoreboardOverview";

export default function TabScoreboardsOverview() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [isLoading]);

  const getGameScoreboardsByID = (id) => {
    return DataScoreboards.find((general) => {
      return general.id === parseInt(id);
    });
  };

  return (
    <>
      {isLoading ? (
        <section className="grid lg:grid-cols-2 gap-4">
          {getGameScoreboardsByID(0).scoreboards?.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="surface rounded is-loading aspect-cover"
            />
          ))}
        </section>
      ) : (
        <section className="grid xl:grid-cols-2 gap-4">
          {getGameScoreboardsByID(0).scoreboards?.map((item, itemIndex) => (
            <ScoreboardOverview key={itemIndex} item={item} />
          ))}
        </section>
      )}
    </>
  );
}
