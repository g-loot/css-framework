import React, { useContext, useEffect, useState } from "react";

import Ad from "../../../components/Ad/Ad";
import Countdown from "../../../components/Countdown/Countdown";
import Link from "next/link";
import RewardLadder from "../../../components/RewardLadder/RewardLadder";
import Tooltip from "../../../components/Tooltip/Tooltip";
import { UiContext } from "../../../contexts/ui";
import { usePrototypeData } from "../../../contexts/prototype";
import { useRouter } from "next/router";
import CardMissionSecondary from "../../../components/Card/CardMissionSecondary";

export default function TabStatsStats() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedGame, setSelectedGame] = useState(null);
  const hasAds = query.ads === "true" ? true : false;
  const isPremium = query.premium === "true" ? true : false;
  const { game } = router.query;
  const [submitting, setSubmitting] = useState(false);

  function addToastWithDelay(toast) {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr(toast);
      setSubmitting(false);
    }, 1000);
  }

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game]);

  return (
    <>
      
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 sm:mx-0 mb-16">
          {prototype.games.map((game, gameIndex) => (
            <>
              {game.isFavorite && (
                <div>
                  <h2 className="h5 mb-4">{game.name} stats</h2>
                  <div className="surface rounded aspect-landscape p-4">
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
    </>
  );
}
