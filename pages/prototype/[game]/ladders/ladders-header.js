import React, { useContext, useEffect, useState } from "react";

import Link from "next/link";
import ModalLadderHowitworksVideo from "./modal-howitworks-video";
import { UiContext } from "../../../../contexts/ui";
import { usePrototypeData } from "../../../../contexts/prototype";
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
      {selectedGame && (
        <section className="header surface sm:rounded-lg mb-4">
          {breadcrumbs && (
            <div className="header-breadcrumbs">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <ol>
                  <li>
                    <Link href={`/prototype/home`}>
                      <a href="#">
                        <span className="icon icon-20 icon-home-2" />
                        <span>Home</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/prototype/${selectedGame.slug}/ladders`}>
                      <a href="#">
                        <span> {selectedGame.name} Ladders</span>
                      </a>
                    </Link>
                  </li>
                  <li aria-current="page">
                    <div>
                      <span>{breadcrumbs}</span>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
          )}
          <div className="header-content">
            <div className="header-image">
              <img
                src="https://res.cloudinary.com/gloot/image/upload/v1674657396/Stryda/logos/stryda-logo-ladders.svg"
                width="186"
                alt=""
              />
            </div>
            <div className="header-body">
              {freeEntry ? (
                <>
                  <h1 className="h3 mb-2">
                    Compete for free!
                  </h1>
                  <p className="text-ui-300 mb-2">
                    Use your stats to climb the ladders and win
                    prizes. No waiting, no dedicated servers. Play on your own
                    schedule!
                  </p>
                  <p className="text-main mb-4">
                    <span className="font-bold">First time competing?</span>{" "}
                    Your entry ladder is on us! Simply pick any ladder you like
                    and claim your free ladder!
                  </p>
                </>
              ) : (
                <>
                  <p className="text-ui-300 mb-4">
                    Use your stats to climb the ladders and win
                    prizes. No waiting, no dedicated servers. Play on your own
                    schedule!
                  </p>
                </>
              )}
              <div className="flex flex-col md:flex-row gap-2">
                <button
                  type="button"
                  className="button button-primary button-play"
                  onClick={openModalLadderHowitworksVideo}
                >
                  <span className="icon icon-circle-caret-right" />
                  <span>How to join the Ladder</span>
                </button>
                {selectedGame.needsSteam && (
                <Link
                  href={`/prototype/profile/settings${prototype.getURLparams()}`}
                >
                  <button
                    type="button"
                    className="button button-secondary"
                  >
                    <span className="icon icon-steam" />
                    <span>Steam required</span>
                  </button>
                </Link>
                )}
                {selectedGame.needsRiot && (
                <Link
                  href={`/prototype/profile/settings${prototype.getURLparams()}`}
                >
                  <button
                    type="button"
                    className="button button-secondary"
                  >
                    <span className="icon icon-riotgames-symbol" />
                    <span>Riot required</span>
                  </button>
                </Link>
                )}
                {!selectedGame.needsSteam && !selectedGame.needsRiot && (
                <Link
                  href={`/prototype/profile/settings${prototype.getURLparams()}`}
                >
                  <button
                    type="button"
                    className="button button-secondary"
                  >
                    <span className="icon icon-windows-symbol" />
                    <span>Stryda App required</span>
                  </button>
                </Link>
                )}
              </div>
            </div>
          </div>
          <div className="header-bg">
            <img src={selectedGame.assets.heroLadder} alt="Ladders" />
          </div>
        </section>
      )}
    </>
  );
}
