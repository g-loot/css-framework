import React, { Fragment, useContext, useState, useEffect } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { VariablesContext } from "@/contexts/variables";
import Link from "next/link";
import GameIcon from "@/components/GameIcon/GameIcon";

const Line = ({ game, mission }) => {
  const prototype = usePrototypeData();
  return (
    <li className="p-1 flex items-center gap-1">
      <GameIcon game={game.id} size="text-lg" />
      <div className="card-category">
        <div
          className={`rarity ${
            mission.category === 1 ? "rarity-category-1" : ""
          } ${mission.category === 2 ? "rarity-category-2" : ""} ${
            mission.category === 3 ? "rarity-category-3" : ""
          } ${mission.category === 4 ? "rarity-category-4" : ""}`}
        >
          <span
            className={`icon ${
              mission.category === 1 ? "icon-category-1" : ""
            } ${mission.category === 2 ? "icon-category-2" : ""} ${
              mission.category === 3 ? "icon-category-3" : ""
            } ${mission.category === 4 ? "icon-category-4" : ""}`}
          />
        </div>
      </div>
      <div className="flex-1 truncate text-sm">
        <span>{mission.name}</span>
      </div>
      <div className="text-sm text-ui-300">
        {mission.current} / {mission.target}
      </div>
      {/* {!mission.hasClaimed && mission.target === mission.current && (
        <span className="icon icon-present text-main mr-2" />
      )} */}
    </li>
  );
};

export default function WidgetMissions(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const variablesContext = useContext(VariablesContext);

  return (
    <>
      <div className="surface rounded">
        <div className="flex items-baseline justify-between border-b border-b-ui-700 px-3 py-2">
          <Link href={`/stryda/missions${prototype.getURLparams()}`}>
            <h2 className="text-base text-ui-100 interactive">Missions</h2>
          </Link>
          {/*
                  <Link href={`/stryda/missions${prototype.getURLparams()}`}>
                    <a className="link link-hover text-ui-300 text-sm leading-none">
                      View all
                    </a>
                  </Link>
        */}
        </div>
        <div className="bg-ui-850">
          <ul className="p-1">
            {prototype.games
              .filter((i) => i.isFavorite)
              .map((game, gameIndex) => (
                <Fragment key={gameIndex}>
                  {game.missions
                    ?.filter((i) => i.isVisible && i.current === i.target)
                    .map((mission, missionIndex) => (
                      <Line key={missionIndex} mission={mission} game={game} />
                    ))}
                  {game.missions
                    ?.filter((i) => i.isVisible && i.current != i.target)
                    .map((mission, missionIndex) => (
                      <Line key={missionIndex} mission={mission} game={game} />
                    ))}
                </Fragment>
              ))}
          </ul>
        </div>
        <div className="border-t border-t-ui-700 p-2 space-y-2 text-center">
          <div className="text-sm text-ui-300">
            {12 - variablesContext.availableMissions} / 12 missions revealed
          </div>
          <Link href={`/stryda/missions${prototype.getURLparams()}`}>
            <button type="button" className="button button-sm button-secondary">
              <span>Reveal more missions</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
