import React, { useContext, useEffect, useState } from "react";

import Accordion from "../../../../components/Accordion/Accordion";
import Link from "next/link";
import ModalAddDiscord from "./modal-add-discord";
import ModalContainer from "../../../../components/Modal/ModalContainer";
import Reward from "../../../../components/Reward/Reward";
import SectionTournamentsLeaderboarBrackers from "./section-leaderboard-brackets";
import SectionTournamentsLeaderboardTable from "./section-leaderboard-table";
import { UiContext } from "@/contexts/ui";
import moment from "moment";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";

export default function TabTournamentsLeaderboard() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const hasAds = query.ads === "true" ? true : false;
  const uiContext = useContext(UiContext);
  const [selectedGame, setSelectedGame] = useState(null);
  const { game } = router.query;
  const { tournament_id } = router.query;

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game]);

  return (
    <>
      {selectedGame && (
        <div className="min-h-screen">
          {prototype.getTournamentByID(game, tournament_id).details
            .leaderboardType === "table" && (
            <SectionTournamentsLeaderboardTable />
          )}
          {prototype.getTournamentByID(game, tournament_id).details
            .leaderboardType === "brackets" && (
            <SectionTournamentsLeaderboarBrackers />
          )}
        </div>
      )}
    </>
  );
}
