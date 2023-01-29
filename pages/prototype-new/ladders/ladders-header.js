import React, { useContext, useEffect, useState } from "react";

import Link from "next/link";
import ModalLadderHowitworksVideo from "./modal-howitworks-video";
import { UiContext } from "../../../contexts/ui";
import { usePrototypeData } from "../../../contexts/prototype";
import { useRouter } from "next/router";

export default function LaddersHeader(props) {
  const router = useRouter();
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const { game } = router.query;
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const freeEntry = query.freeentry === "true" ? true : false;
  const breadcrumbs = props.breadcrumbs;

  function openModalLadderHowitworksVideo() {
    uiContext.openModal(
      <ModalLadderHowitworksVideo></ModalLadderHowitworksVideo>
    );
  }

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
      <section className="relative">
        <div className="absolute z-0 bg-gradient-to-b from-ui-850 to-ui-800 -inset-x-12 xl:-inset-x-24 bottom-0 -inset-y-4 border-b border-ui-700">
          <span
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/gloot/image/upload/v1674691791/Stryda/demo/ladders_header_1.jpg)",
            }}
          />
        </div>
        <div className="relative z-10 pt-32 pb-4">
          <h1 className="animate-slide-in-left">Ladders</h1>
          {freeEntry ? (
            <>
              <p className="text-ui-300 max-w-[70ch] mt-4 mb-2">
                Use your stats to climb the ladders and win prizes. No waiting,
                no dedicated servers. Play on your own schedule!
              </p>
              <p className="max-w-[70ch] mt-2">
                <span className="font-bold">First time competing?</span> Your
                entry ladder is on us! Simply pick any ladder you like and claim
                your free ladder!
              </p>
            </>
          ) : (
            <>
              <p className="max-w-[70ch] mt-2">
                Use your stats to climb the ladders and win prizes. No waiting,
                no dedicated servers. Play on your own schedule!
              </p>
            </>
          )}
        </div>
      </section>
    </>
  );
}
