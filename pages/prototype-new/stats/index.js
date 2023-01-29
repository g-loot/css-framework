import React, { useContext, useEffect, useState } from "react";

import Ad from "../../../components/Ad/Ad";
import Link from "next/link";
import PrototypeStructure from "../../../components/prototypeNew/PrototypeStructure";
import { UiContext } from "../../../contexts/ui";
import { usePrototypeData } from "../../../contexts/prototype";
import { useRouter } from "next/router";
import StatsHeader from "./stats-header";
import FilterGame from "../../../components/FilterGame/FilterGame";
import TabStatsStats from "./tab-stats";


export default function Stats() {
  const router = useRouter();
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const { game } = router.query;
  const uiContext = useContext(UiContext);

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game, prototype]);

  useEffect(() => {
    if (selectedGame != null) {
      prototype.defineDefaultGameID(selectedGame.id);
    }
  }, [selectedGame]);

  return (
    <>
      <PrototypeStructure title="Missions">
        <Ad width="1005" height="300" />
        <StatsHeader breadcrumbs="Stats" />
        <FilterGame />
        <TabStatsStats />
      </PrototypeStructure>
    </>
  );
}
