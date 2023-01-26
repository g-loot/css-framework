import React, { useContext, useEffect, useState } from "react";

import Ad from "../../../components/Ad/Ad";
import Link from "next/link";
import PrototypeStructure from "../../../components/PrototypeNew/PrototypeStructure";
import { UiContext } from "../../../contexts/ui";
import { usePrototypeData } from "../../../contexts/prototype";
import { useRouter } from "next/router";
import TabMissionsMissions from "./tab-missions";
import MissionsHeader from "./missions-header";

export default function Ladders() {
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
        <MissionsHeader breadcrumbs="Missions" />
        <TabMissionsMissions />
      </PrototypeStructure>
    </>
  );
}
