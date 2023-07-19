import React, { useEffect, useState, useContext } from "react";

import Ad from "../../../../components/Ad/Ad";
import Structure from "../../components/Structure";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import StatsValorant from "./stats-valorant";
import StatsLeagueOfLegends from "./stats-leagueoflegends";

export default function Stats() {
  const router = useRouter();
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const { game } = router.query;

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game, prototype]);

  return (
    <>
      {selectedGame && (
        <Structure title="Stats">
          <Ad width="1005" height="300" />
          {selectedGame.slug === "valorant" && <StatsValorant />}
          {selectedGame.slug === "leagueoflegends" && <StatsLeagueOfLegends />}
        </Structure>
      )}
    </>
  );
}
