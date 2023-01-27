import React, { useContext, useEffect, useState } from "react";

import Link from "next/link";
import { UiContext } from "../../../contexts/ui";
import { usePrototypeData } from "../../../contexts/prototype";
import { useRouter } from "next/router";

export default function MissionsHeader(props) {
  const router = useRouter();
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const { game } = router.query;
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const freeEntry = query.freeentry === "true" ? true : false;
  const breadcrumbs = props.breadcrumbs;

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game, prototype]);

  useEffect(() => {
    if (selectedGame != null) {
      prototype.defineDefaultGameID(selectedGame.id);
    }
  }, [selectedGame]);

  return (
    <>
      <div className="relative">
        <div className="absolute z-0 bg-ui-850 -inset-x-12 xl:-inset-x-24 bottom-0 -inset-y-4 border-b border-ui-700">
          <span className="absolute inset-0 bg-cover animate-fade-in" style={{backgroundImage: 'url(https://res.cloudinary.com/gloot/image/upload/v1674691791/Stryda/demo/ladders_header_1.jpg)'}}/>
        </div>
        <div className="relative z-10 pt-32 pb-4 flex items-end">
          {/*<img
            src="https://res.cloudinary.com/gloot/image/upload/v1674654182/Stryda/logos/stryda-logo-missions-simple.svg"
            height="auto"
            width="auto"
            alt="Missions"
            className="mb-1 h-20"
  />*/}
  <h1>Missions</h1>
        </div>
      </div>
    </>
  );
}
