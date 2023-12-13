import React, { useContext, useState, useEffect } from "react";

import { usePrototypeData } from "@/contexts/prototype";
import { UiContext } from "@/contexts/ui.js";
import Structure from "../components/Structure";
import ModalLevelUp from "../modal-levelup";
import CardMission from "@/pages/stryda/components/CardMission";
import Battlepass from "@/components/BattlePass/BattlePass";

export default function DemoVideoManager() {
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const selectedGame = prototype.getGameByID(prototype.defaultGameID);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [loading]);

  return (
    <>
      <Structure title="Profile" hiddenUI={true}></Structure>

      <section className="absolute inset-0 p-4 flex items-center justify-center">
        <div className="w-full max-w-xl">
         
        </div>
      </section>
    </>
  );
}
