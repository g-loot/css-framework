import React, { useEffect, useState } from "react";

import { usePrototypeData } from "@/contexts/prototype";
import GamePicker from "../components/GamePicker";
import ButtonStatsUpdate from "@/components/ButtonStatsUpdate/ButtonStatsUpdate";

export default function StructureGamePage({ children, side, ...props }) {
  const prototype = usePrototypeData(); 
  const [loading, setLoading] = useState(true);
  const title = props.title || "";

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
      <div className="relative flex flex-col md:flex-row md:items-end md:justify-between md:gap-4 md:mb-8">
        <div className="order-2 md:order-1 flex items-center justify-between px-4 md:px-0 mb-6 mt-8 md:mb-2 md:mt-16">
          <h1 className="text-7xl">{title}</h1>
          <div className="block md:hidden">
            <ButtonStatsUpdate hasTooltip={false} />
          </div>
        </div>
        <GamePicker />
      </div>
      <div className="flex flex-col lg:flex-row lg:items-stretch gap-8">
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
