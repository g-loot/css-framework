import React, { useContext, useEffect, useState } from "react";

import Link from "next/link";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";

export default function LaddersHeader(props) {
  const router = useRouter();
  const prototype = usePrototypeData();
  const selectedGame = prototype.getGameByID(prototype.defaultGameID);
  const breadcrumbs = props.breadcrumbs;

  return (
    <>
      {selectedGame && (
        <section className="header header-quaternary surface sm:rounded-lg mt-8 mb-4">
          <div className="header-content">
            <div className="header-body">
              <div className="flex flex-col lg:flex-row lg:items-end gap-4">
                <h1 className="text-7xl -mb-0.5">Clan Events</h1>
                <p className="text-ui-300 leading-tight">
                  Create a 5 people party with members from your Stryda Clan.
                  Play VALORANT together and start climbing the leaderboard!
                </p>
              </div>
              <div className="hidden flex flex-col md:flex-row gap-2">
                <Link
                  href={`/stryda/profile/settings${prototype.getURLparams()}`}
                >
                  <button type="button" className="button button-primary">
                    <span
                      className={`icon icon-game-${selectedGame.slug}-symbol`}
                    />
                    <span>Connect my account</span>
                  </button>
                </Link>
                <Link href={`/stryda/clans${prototype.getURLparams()}`}>
                  <button type="button" className="button button-secondary">
                    <span className="icon icon-multiple-12" />
                    <span>Search for Clans</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="header-bg">
            <img src={selectedGame.assets.heroV2} alt="" />
          </div>
        </section>
      )}
    </>
  );
}
