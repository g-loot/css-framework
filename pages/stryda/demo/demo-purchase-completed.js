import React, { useContext, useState, useEffect } from "react";

import { usePrototypeData } from "@/contexts/prototype";
import { UiContext } from "@/contexts/ui.js";
import Structure from "../components/Structure";
import ModalAvatarFramePurchaseCompleted from "../shop/avatar-frame/modal-avatarframepurchasecompleted";

export default function DemoPurchaseCompleted() {
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
        uiContext.openModal(
          <ModalAvatarFramePurchaseCompleted id={4} />
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
