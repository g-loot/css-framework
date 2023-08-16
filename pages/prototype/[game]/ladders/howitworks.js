import React, { useContext, useEffect, useState } from "react";

import Ad from "../../../../components/Ad/Ad";
import ModalLadderHowitworksVideo from "./modal-howitworks-video";
import PrototypeStructure from "../../../../components/Prototype/PrototypeStructure";
import TabLaddersHowItWorks from "./tab-howitworks";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import LaddersHeader from "./ladders-header";

export default function LaddersHowItWorks() {
  const router = useRouter();
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const { game } = router.query;
  const { tab } = router.query;
  const { query } = useRouter();
  const defaultTab = "ongoing";
  const uiContext = useContext(UiContext);

  function openModalLadderHowitworksVideo() {
    uiContext.openModal(
      <ModalLadderHowitworksVideo></ModalLadderHowitworksVideo>
    );
  }

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
      <PrototypeStructure title="Ladders">
        <Ad width="1005" height="300" />
        {selectedGame && (
          <>
            <LaddersHeader breadcrumbs="How it works" />
            <TabLaddersHowItWorks />
          </>
        )}
      </PrototypeStructure>
    </>
  );
}
