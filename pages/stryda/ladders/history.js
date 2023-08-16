import React, { useContext, useEffect, useState } from "react";

import Ad from "@/components/Ad/Ad";
import ModalLadderHowitworksVideo from "./modal-howitworks-video";
import Structure from "@/pages/stryda/components/Structure";
import TabLaddersHistory from "./tab-history";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import LaddersHeader from "./ladders-header";

export default function LaddersHistory() {
  const router = useRouter();
  const prototype = usePrototypeData();
  const selectedGame = prototype.getGameByID(prototype.defaultGameID);
  const uiContext = useContext(UiContext);

  function openModalLadderHowitworksVideo() {
    uiContext.openModal(
      <ModalLadderHowitworksVideo></ModalLadderHowitworksVideo>
    );
  }

  

  

  return (
    <>
      <Structure title="Ladders">
        <Ad width="1005" height="300" />
        {selectedGame && (
          <>
            <LaddersHeader breadcrumbs="History" />
            <TabLaddersHistory />
          </>
        )}
      </Structure>
    </>
  );
}
