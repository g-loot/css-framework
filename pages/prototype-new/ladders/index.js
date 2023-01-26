import React, { useContext, useEffect, useState } from "react";

import Ad from "../../../components/Ad/Ad";
import Link from "next/link";
import ModalLadderHowitworksVideo from "./modal-howitworks-video";
import PrototypeStructure from "../../../components/PrototypeNew/PrototypeStructure";
import { UiContext } from "../../../contexts/ui";
import { usePrototypeData } from "../../../contexts/prototype";
import { useRouter } from "next/router";
import TabLaddersOngoing from "./tab-laddersongoing";
import LaddersHeader from "./ladders-header";
import AnimatedNumber from "../../../components/AnimatedNumber/AnimatedNumber";

export default function Ladders() {
  const router = useRouter();
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const { game } = router.query;
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
        <LaddersHeader breadcrumbs="ladders" />
        <TabLaddersOngoing />
      </PrototypeStructure>
    </>
  );
}
