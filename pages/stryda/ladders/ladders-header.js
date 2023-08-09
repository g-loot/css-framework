import React, { useContext, useEffect, useState } from "react";

import Link from "next/link";
import ModalLadderHowitworksVideo from "./modal-howitworks-video";
import ModalConnectIDLeagueOfLegends from "../modal-connectIDleagueoflegends";
import { UiContext } from "../../../contexts/ui";
import { usePrototypeData } from "../../../contexts/prototype";
import { useRouter } from "next/router";

export default function LaddersHeader(props) {
  const router = useRouter();
  const prototype = usePrototypeData();
  const selectedGame = prototype.getGameByID(prototype.defaultGameID);
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const freeEntry = query.freeentry === "true" ? true : false;
  const breadcrumbs = props.breadcrumbs;

  function openModalLadderHowitworksVideo() {
    uiContext.openModal(
      <ModalLadderHowitworksVideo />
    );
  }

  function openModalConnectIDLeagueOfLegends() {
    uiContext.openModal(<ModalConnectIDLeagueOfLegends />);
  }

  

  

  return (
    <>
      {selectedGame && (
        <section className="header header-quaternary my-8">
          {breadcrumbs && (
            <div className="header-breadcrumbs">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <ol>
                  <li>
                    <Link href={`/stryda/home${prototype.getURLparams()}`}>
                      <a href="#">
                        <span className="icon icon-20 icon-home-2" />
                        <span>Home</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/stryda/ladders${prototype.getURLparams()}`}>
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
            <div className="header-body">
              {freeEntry ? (
                <>
                  <h1 className="h3 mb-2">Compete for free!</h1>
                  <p className="text-ui-300 mb-2">
                    Use your stats to climb the ladders and win prizes. No
                    waiting, no dedicated servers. Play on your own schedule!
                  </p>
                  <p className="text-main">
                    <span className="font-bold">First time competing?</span>{" "}
                    Your entry ladder is on us! Simply pick any ladder you like
                    and claim your free ladder!
                  </p>
                </>
              ) : (
                <>
                  <h1 className="mb-2">Ladders</h1>
                  <p className="text-ui-300">
                    Use your stats to climb the ladders and win prizes. No
                    waiting, no dedicated servers. Play on your own schedule!
                  </p>
                </>
              )}
              <div className="flex hidden flex-col md:flex-row gap-2 mt-4">
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
                    href={`/stryda/profile/settings${prototype.getURLparams()}`}
                  >
                    <button type="button" className="button button-secondary">
                      <span
                        className={`icon icon-game-${selectedGame.slug}-symbol`}
                      />
                      <span>Connect my account</span>
                    </button>
                  </Link>
                )}
                {selectedGame.needsRiot && (
                  <>
                    {selectedGame.slug === "leagueoflegends" ? (
                      <button
                        type="button"
                        className="button button-secondary"
                        onClick={openModalConnectIDLeagueOfLegends}
                      >
                        <span
                          className={`icon icon-game-${selectedGame.slug}-symbol`}
                        />
                        <span>Connect my account</span>
                      </button>
                    ) : (
                      <Link
                        href={`/stryda/profile/settings${prototype.getURLparams()}`}
                      >
                        <button
                          type="button"
                          className="button button-secondary"
                        >
                          <span
                            className={`icon icon-game-${selectedGame.slug}-symbol`}
                          />
                          <span>Connect my account</span>
                        </button>
                      </Link>
                    )}
                  </>
                )}
                {!selectedGame.needsSteam && !selectedGame.needsRiot && (
                  <Link
                    href={`/stryda/profile/settings${prototype.getURLparams()}`}
                  >
                    <button type="button" className="button button-secondary">
                      <span className="icon icon-windows-symbol" />
                      <span>Stryda App required</span>
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="header-bg">
            <img src={selectedGame.assets.heroV2} />
          </div>
        </section>
      )}
    </>
  );
}
