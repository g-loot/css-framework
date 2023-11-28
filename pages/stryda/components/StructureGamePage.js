import React, { useEffect, useState } from "react";

import { usePrototypeData } from "@/contexts/prototype";
import GamePicker from "../components/GamePicker";
import ButtonStatsUpdate from "@/components/ButtonStatsUpdate/ButtonStatsUpdate";

export default function StructureGamePage({ children, side, ...props }) {
  const prototype = usePrototypeData();
  const [loading, setLoading] = useState(true);
  const title = props.title || "";
  const refreshButton = props.refreshButton || false;
  const selectedGame = prototype.getGameByID(prototype.defaultGameID);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 700);
    }
  }, [loading]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, [prototype.defaultGameID]);

  return (
    <>
      <div className="relative z-20 flex flex-col md:flex-row md:items-end md:justify-between md:gap-4 md:mb-8">
        <div className="order-2 md:order-1 flex items-center justify-between px-4 md:px-0 mb-6 mt-8 md:mb-2 md:mt-24">
          <h1 className="text-7xl">{title}</h1>
          {refreshButton && (
            <div className="block md:hidden">
              <ButtonStatsUpdate hasTooltip={false} hasLabel={false} />
            </div>
          )}
        </div>
        <GamePicker />
      </div>
      {selectedGame && !loading && (
        <div className="absolute z-0 top-0 inset-x-0 animate-slide-in-bottom mix-blend-lighten select-none" style={{ animationDuration: "2s"}}>
          <i className="absolute z-10 inset-0 bg-ui-900/20" />
          <i className="absolute z-10 inset-0 bg-gradient-to-b from-ui-900/0 via-ui-900/80 to-ui-900" />
          <img
            src={selectedGame.assets.heroV2}
            alt={selectedGame.name}
            className="relative z-0 opacity-10"
          />
        </div>
      )}
      <div className="relative z-20 flex flex-col lg:flex-row lg:items-stretch gap-8">
        <div className="w-full lg:w-[260px] lg:mb-8">
          <div className="lg:sticky top-16">{side}</div>
        </div>
        <div className="relative flex-1 min-h-[calc(100dvh-200px)]">
          {loading ? (
            <div className="absolute inset-0 grid place-content-center">
              <div role="loading" className="loader">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <>{children}</>
          )}
        </div>
      </div>
    </>
  );
}
