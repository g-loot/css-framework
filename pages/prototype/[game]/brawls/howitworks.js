import React, { useContext, useEffect, useState } from "react";

import Ad from "../../../../components/Ad/Ad";
import ModalBrawlHowitworksVideo from "./modal-howitworks-video";
import PrototypeStructure from "../../../../components/Prototype/PrototypeStructure";
import TabBrawlsHowItWorks from "./tab-howitworks";
import { UiContext } from "../../../../contexts/ui";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import BrawlsHeader from "./brawls-header";

export default function BrawlsHowItWorks() {
  const router = useRouter();
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const { game } = router.query;
  const { tab } = router.query;
  const { query } = useRouter();
  const defaultTab = "ongoing";
  const uiContext = useContext(UiContext);

  function openModalBrawlHowitworksVideo() {
    uiContext.openModal(
      <ModalBrawlHowitworksVideo></ModalBrawlHowitworksVideo>
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
      <PrototypeStructure title="Brawls">
        <Ad width="1005" height="300" />
        {selectedGame && (
          <>
            <BrawlsHeader breadcrumb="How it works" />
            <TabBrawlsHowItWorks />
          </>
        )}
      </PrototypeStructure>
    </>
  );
}
