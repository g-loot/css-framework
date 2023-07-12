import React, { useContext, useEffect, useState } from "react";

import Link from "next/link";
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
            <div className="header-body">
              <h1>Clan Events</h1>
              <p className="text-ui-300 max-w-[70ch] mt-4 mb-5">
                Create a 5 people party with members from your Stryda Clan. Play
                VALORANT together and start climbing the leaderboard!
              </p>
              <div className="flex flex-col md:flex-row gap-2">
                <Link
                  href={`/prototype/profile/settings${prototype.getURLparams()}`}
                >
                  <button type="button" className="button button-primary">
                    <span className={`icon icon-game-${selectedGame.slug}-symbol`} />
                    <span>Connect my account</span>
                  </button>
                </Link>
                <Link href={`/prototype/clans${prototype.getURLparams()}`}>
                  <button type="button" className="button button-secondary">
                    <span className="icon icon-multiple-12" />
                    <span>Search for Clans</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="header-bg">
            <img src={selectedGame.assets.heroClanEvent} alt="Ladders" />
          </div>
        </section>
      )}
    </>
  );
}
