import React, { useEffect, useState, useContext } from "react";
import { UiContext } from "../../../../../contexts/ui";
import { usePrototypeData } from "../../../../../contexts/prototype";
import { useRouter } from "next/router";

import { DataScoreboards } from "../../../../../mock-data/data-scoreboards";

export default function TabScoreboard(props) {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const { scoreboard_id } = router.query;
  const isEmpty = query.empty === "true" ? true : false;
  const selectedScoreboard = props.scoreboard || getScoreboardByID(1, 1);

  const getGameScoreboardsByID = (id) => {
    return DataScoreboards.find((general) => {
      return general.id === parseInt(id);
    });
  };

  const getScoreboardByID = (gameID, id) => {
    const selectedGameScoreboards = getGameScoreboardsByID(gameID);
    const selectedScoreboard = selectedGameScoreboards.scoreboards?.find(
      (scoreboard) => {
        return scoreboard.id === parseInt(id);
      }
    );
    return selectedScoreboard;
  };

  return (
    <>
      {selectedScoreboard && (
        <>
          DETAIL
          {selectedScoreboard.name}
        </>
      )}
    </>
  );
}
