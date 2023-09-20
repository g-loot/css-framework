import React, { Fragment, useContext, useState, useEffect } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import Link from "next/link";
import GameIcon from "@/components/GameIcon/GameIcon";

const Line = ({ game, ladder }) => {
  const prototype = usePrototypeData();
  return (
    <Link
      href={`/stryda/clanevents/${game.slug}/${
        ladder.id
      }${prototype.getURLparams()}`}
    >
      <li className="p-1 flex items-center gap-1 interactive text-sm">
        <GameIcon game={game.id} size="text-lg" />
        <div className="flex-1 truncate">
          <span>{ladder.name}</span>
        </div>
        {ladder.status === "ongoing" && !ladder.isEnrolled && (
          <div className="text-info-500">Ongoing</div>
        )}
        {ladder.status === "ongoing" && ladder.isEnrolled && (
          <div className="text-main">Enrolled</div>
        )}
        {ladder.status === "finished" && ladder.hasClaim && (
          <span className="icon icon-present text-main mr-1" />
        )}
        {ladder.status === "finished" && !ladder.hasClaim && (
          <div className="text-ui-400">Ended</div>
        )}
      </li>
    </Link>
  );
};

export default function WidgetCompetitions(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();

  return (
    <>
      <div className="surface rounded">
        <div className="flex items-baseline justify-between border-b border-b-ui-700 px-3 py-2">
          <Link href={`/stryda/ladders${prototype.getURLparams()}`}>
            <h2 className="text-base text-ui-100 interactive">Competitions</h2>
          </Link>
          {/*
                  <Link href={`/stryda/ladders${prototype.getURLparams()}`}>
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
                  {game.clanLeaderboards
                    ?.filter((i) => i.status === "finished" && i.hasClaim)
                    .map((ladder, ladderIndex) => (
                      <Line key={ladderIndex} game={game} ladder={ladder} />
                    ))}
                  {game.ladders
                    ?.filter((i) => i.status === "finished" && i.hasClaim)
                    .map((ladder, ladderIndex) => (
                      <Line key={ladderIndex} game={game} ladder={ladder} />
                    ))}
                  {game.clanLeaderboards
                    ?.filter((i) => i.status === "ongoing" && i.isEnrolled)
                    .map((ladder, ladderIndex) => (
                      <Line key={ladderIndex} game={game} ladder={ladder} />
                    ))}
                  {game.ladders
                    ?.filter((i) => i.status === "ongoing" && i.isEnrolled)
                    .map((ladder, ladderIndex) => (
                      <Line key={ladderIndex} game={game} ladder={ladder} />
                    ))}
                </Fragment>
              ))}
          </ul>
        </div>
        {/*
                <div className="max-h-[600px] p-2 overflow-y-auto overflow-x-hidden scrollbar-desktop bg-ui-850">
                  <ul className="space-y-2">
                    {prototype.games
                      .filter((i) => i.isFavorite)
                      .map((game, gameIndex) => (
                        <Fragment key={gameIndex}>
                          {game.ladders
                            ?.filter(
                              (i) => i.status === "ongoing" && i.isEnrolled
                            )
                            .map((ladder, ladderIndex) => (
                              <CardLadder
                                key={ladderIndex}
                                size="card-sm"
                                ladder={ladder}
                                isHorizontal={false}
                                isGlobal={false}
                                isFluid={true}
                                gameID={game.id}
                              />
                            ))}
                        </Fragment>
                      ))}
                  </ul>
                </div>
                            */}
      </div>
    </>
  );
}
