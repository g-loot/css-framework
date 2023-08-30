import React, { useContext, useState, useEffect } from "react";

import { usePrototypeData } from "@/contexts/prototype";
import { UiContext } from "@/contexts/ui.js";
import Structure from "../components/Structure";
import ModalLevelUp from "../modal-levelup";

export default function DemoLevelUp() {
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
        uiContext.openModal(
          <ModalLevelUp />
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
