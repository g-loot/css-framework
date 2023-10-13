import React, { useEffect, useState } from "react";

import { usePrototypeData } from "@/contexts/prototype";
import GamePicker from "../components/GamePicker";
import ButtonStatsUpdate from "@/components/ButtonStatsUpdate/ButtonStatsUpdate";

export default function StructureGamePage({ children, side, ...props }) {
  const prototype = usePrototypeData();
  const [loading, setLoading] = useState(true);
  const title = props.title || "";
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
          <div className="block md:hidden">
            <ButtonStatsUpdate hasTooltip={false} hasLabel={false} />
          </div>
        </div>
        <GamePicker />
      </div>
      {selectedGame && !loading && (
        <div className="absolute z-0 -top-32 inset-x-0 animate-slide-in-bottom mix-blend-lighten"  style={{ animationDuration: "2s"}}>
          <img
            src={selectedGame.assets.heroV2}
            alt={selectedGame.name}
            className="opacity-75"
          />
        </div>
      )}
      <div className="relative z-20 flex flex-col lg:flex-row lg:items-stretch gap-8">
        <div className="w-full lg:w-56 lg:mb-8">
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
