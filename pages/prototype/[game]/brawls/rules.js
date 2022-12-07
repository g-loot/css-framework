import React, { useContext, useEffect, useState } from "react";

import Ad from "../../../../components/Ad/Ad";
import ModalBrawlHowitworksVideo from "./modal-howitworks-video";
import PrototypeStructure from "../../../../components/Prototype/PrototypeStructure";
import TabBrawlsRules from "./tab-glootrules";
import { UiContext } from "../../../../contexts/ui";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import BrawlsHeader from "./brawls-header";

export default function BrawlsRules() {
  const router = useRouter();
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const { game } = router.query;
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
            <BrawlsHeader breadcrumbs="G-Loot rules" />
            <TabBrawlsRules />
          </>
        )}
      </PrototypeStructure>
    </>
  );
}
