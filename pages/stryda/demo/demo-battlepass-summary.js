import React, { useContext, useState, useEffect } from "react";

import { usePrototypeData } from "@/contexts/prototype";
import { UiContext } from "@/contexts/ui.js";
import Structure from "../components/Structure";
import ModalBattlepassCompletedSummary from "../battlepass/modal-battlepass-completed-summary";

export default function DemoBattlepassSummary() {
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
        uiContext.openModal(
          <ModalBattlepassCompletedSummary />
        );
      }, 1000);
    }
  }, [loading]);

  return (
    <>
      <Structure title="Profile" hiddenUI={true}></Structure>
    </>
  );
}
