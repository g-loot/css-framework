import React, { useContext, useEffect, useState } from "react";

import Link from "next/link";
import ModalBrawlHowitworksVideo from "./modal-howitworks-video";
import { UiContext } from "../../../../contexts/ui";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";

export default function BrawlsHeader(props) {
  const router = useRouter();
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const { game } = router.query;
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const freeEntry = query.freeentry === "true" ? true : false;
  const breadcrumbs = props.breadcrumbs;

  function openModalBrawlHowitworksVideo() {
    uiContext.openModal(
      <ModalBrawlHowitworksVideo></ModalBrawlHowitworksVideo>
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
                    <Link href={`/prototype/${selectedGame.slug}/brawls`}>
                      <a href="#">
                        <span> {selectedGame.name} Brawls</span>
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
                src="https://res.cloudinary.com/gloot/image/upload/v1657888944/Marketing/2022_prototype/Logo/samesize-brawl.svg"
                width="400"
                height="auto"
                alt=""
              />
            </div>
            <div className="header-body">
              {freeEntry ? (
                <>
                  <h1 className="h3 mb-2">
                    Compete for free!
                  </h1>
                  <p className="text-ui-300 max-w-[25ch] mb-2">
                    Use your stats to climb the Brawl leaderboard and win
                    prizes. No waiting, no dedicated servers. Play on your own
                    schedule!
                  </p>
                  <p className="text-blue-300 max-w-[25ch] mb-4">
                    <span className="font-bold">First time competing?</span>{" "}
                    Your entry Brawl is on us! Simply pick any Brawl you like
                    and claim your free Brawl!
                  </p>
                </>
              ) : (
                <>
                  <h1 className="h3 mb-2">Brawls</h1>
                  <p className="text-ui-300 max-w-[25ch] mb-4">
                    Use your stats to climb the Brawl leaderboard and win
                    prizes. No waiting, no dedicated servers. Play on your own
                    schedule!
                  </p>
                </>
              )}
              <div className="flex flex-col md:flex-row gap-2">
                <button
                  type="button"
                  className="button button-primary button-play"
                  onClick={openModalBrawlHowitworksVideo}
                >
                  <span className="icon icon-circle-caret-right" />
                  <span>Learn how to Brawl</span>
                </button>
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
              </div>
            </div>
          </div>
          <div className="header-bg">
            <img src={selectedGame.assets.heroBrawl} alt="Brawls" />
          </div>
        </section>
      )}
    </>
  );
}
