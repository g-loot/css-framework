import React, { useEffect, useState, useContext } from "react";

import Ad from "../../../../components/Ad/Ad";
import Structure from "@/pages/stryda/components/Structure";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import StatsValorant from "./stats-valorant";
import StatsLeagueOfLegends from "./stats-leagueoflegends";

export default function Stats() {
  const router = useRouter();
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const { game_slug } = router.query;

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game_slug));
  }, [game_slug, prototype]);

  return (
    <>
      {selectedGame && (
        <Structure title="Stats">
          <Ad width="1005" height="300" />
          <div className="my-8">
            {selectedGame.slug === "valorant" && <StatsValorant />}
            {selectedGame.slug === "leagueoflegends" && (
              <StatsLeagueOfLegends />
            )}
          </div>
        </Structure>
      )}
    </>
  );
}
