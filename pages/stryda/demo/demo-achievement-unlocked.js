import React, { useContext, useState, useEffect } from "react";

import ModalAchievementReceived from "../modal-achievementreceived";
import { UiContext } from "@/contexts/ui.js";
import Structure from "../components/Structure";

export default function DemoAchievementUnlocked() {
  const uiContext = useContext(UiContext);
  const item =  {
    id: 1,
    item: 1,
    level: 5,
    percent: 92,
    progress: 8,
    from: "300",
    to: "300",
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
        uiContext.openModal(<ModalAchievementReceived item={item} />);
      }, 1000);
    }
  }, [loading]);

  return (
    <>
      <Structure title="Profile" hiddenUI={true}></Structure>
    </>
  );
}
