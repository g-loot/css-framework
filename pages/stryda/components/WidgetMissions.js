import React, { Fragment, useContext, useState, useEffect } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { VariablesContext } from "@/contexts/variables";
import Link from "next/link";
import GameIcon from "@/components/GameIcon/GameIcon";
import Countdown from "@/components/Countdown/Countdown";

const Line = ({ game, mission }) => {
  const prototype = usePrototypeData();
  return (
    <li className="p-1 flex items-center gap-1">
      <GameIcon game={game} size="text-lg" />
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
        {mission.current === mission.target ? (
          <span className="icon icon-present text-main mr-1" />
        ) : (
          <>
            {mission.current} / {mission.target}
          </>
        )}
      </div>
    </li>
  );
};

export default function WidgetMissions(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const variablesContext = useContext(VariablesContext);
  const state = props.state || "normal";
  const length = 5;
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    const allMissions = prototype.games
      .filter((game) => game.isFavorite)
      .flatMap((game) =>
        game.missions
          .filter((mission) => mission.isVisible)
          .map((mission) => ({
            ...mission,
            gameID: game.id,
          }))
      );

    const sortedData = [...allMissions];
    sortedData.sort(
      (a, b) => (b.current * 100) / b.target - (a.current * 100) / a.target
    );
    setMissions(sortedData);
  }, [prototype]);

  const [maxLinesLoader, setMaxLinesLoader] = useState(false);
  const [maxLines, setMaxLines] = useState(length);

  const handleMoreLines = () => {
    setMaxLinesLoader(true);
    const interval = setTimeout(() => {
      setMaxLinesLoader(false);
      setMaxLines(maxLines + length);
    }, 500);
    return () => {
      clearTimeout(interval);
    };
  };

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
        {state == "normal" && (
          <>
            <div className="bg-ui-850">
              <ul className="p-1">
                {missions.slice(0, maxLines).map((item, itemIndex) => (
                  <Line key={itemIndex} mission={item} game={item.gameID} />
                ))}
              </ul>
              {missions.length > maxLines && (
                <div className="px-2 pb-2 text-center">
                  <button
                    type="button"
                    className={`button button-ghost button-sm rounded w-full ${
                      maxLinesLoader ? "is-loading" : ""
                    }`}
                    onClick={() => handleMoreLines()}
                  >
                    <span>View more</span>
                  </button>
                </div>
              )}
            </div>
            <div className="border-t border-t-ui-700 p-2 space-y-2 text-center">
              <div className="text-sm text-ui-300">
                {12 - variablesContext.availableMissions} / 12 missions revealed
              </div>
              <Link href={`/stryda/missions${prototype.getURLparams()}`}>
                <button
                  type="button"
                  className="button button-sm button-secondary"
                >
                  <span>Reveal more missions</span>
                </button>
              </Link>
            </div>
          </>
        )}
        {state == "empty" && (
          <>
            <div className="bg-ui-850 p-4 text-center">
              <h3 className="text-base text-ui-100 mb-3">New missions in</h3>
              <Countdown
                separator=" "
                hasDays={false}
                hasHours={true}
                hasMinutes={true}
                hasSeconds={true}
                className="text-4xl text-ui-100"
              />
              <Link href={`/stryda/missions${prototype.getURLparams()}`}>
                <button
                  type="button"
                  className="button button-sm button-secondary mt-4"
                >
                  <span>Go to Missions page</span>
                </button>
              </Link>
            </div>
          </>
        )}
        {state === "onboarding" && (
          <>
            <div className="bg-ui-850 p-4">
              <div className="flex items-center gap-4">
                <p className="text-sm flex-1">Reveal Missions to earn XP</p>
              </div>
              <Link href={`/stryda/missions${prototype.getURLparams()}`}>
                <button
                  type="button"
                  className="button button-sm button-primary mt-4"
                >
                  <span>Find Missions to play</span>
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
