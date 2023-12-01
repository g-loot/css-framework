import React, { Fragment, useContext } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import Link from "next/link";
import GameIcon from "@/components/GameIcon/GameIcon";
import ModalVideoYoutubePlayer from "../modal-videoyoutubeplayer";

const Line = ({ game, ladder }) => {
  const prototype = usePrototypeData();
  return (
    <Link
      href={`/stryda/clanevents/${game.slug}/${
        ladder.id
      }${prototype.getURLparams()}`}
    >
      <li className="group p-1 flex items-center gap-1 interactive text-sm">
        <GameIcon game={game.id} size="text-lg" />
        <div className="flex-1 truncate">
          <span>{ladder.name}</span>
        </div>
        {ladder.status === "ongoing" && !ladder.isEnrolled && (
          <div className="text-xs text-info-500">Ongoing</div>
        )}
        {ladder.status === "ongoing" && ladder.isEnrolled && (
          <div className="text-xs text-main">Enrolled</div>
        )}
        {ladder.status === "finished" && ladder.hasClaim && (
          <button
            type="button"
            className="text-xs flex items-center gap-1 text-main"
          >
            <span>View results</span>
            <span className="icon icon-ctrl-right group-hover:translate-x-1 transition-all ease-in-out duration-150" />
          </button>
        )}
        {ladder.status === "finished" && !ladder.hasClaim && (
          <div className="text-xs text-ui-400">Ended</div>
        )}
      </li>
    </Link>
  );
};

export default function WidgetCompetitions(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const state = props.state || "normal";

  function openModalVideoYoutubePlayer(url) {
    uiContext.openModal(<ModalVideoYoutubePlayer url={url} />);
  }

  return (
    <>
      <div className="surface rounded">
        <div className="flex items-baseline justify-between border-b border-b-ui-700 px-3 py-2">
          <Link href={`/stryda/ladders${prototype.getURLparams()}`}>
            <h2 className="text-base text-ui-100 interactive">Ladders</h2>
          </Link>
          {/*
                  <Link href={`/stryda/ladders${prototype.getURLparams()}`}>
                    <a className="link link-hover text-ui-300 text-sm leading-none">
                      View all
                    </a>
                  </Link>
                              */}
        </div>
        {state === "normal" && (
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
        )}
        {state === "empty" && (
          <>
            <div className="bg-ui-850 p-4">
              <button
                type="button"
                className="rounded-4 overflow-hidden surface interactive"
                onClick={() => openModalVideoYoutubePlayer("Wso2JUKPP8o")}
              >
                <iframe
                  className="mx-auto aspect-video pointer-events-none"
                  width="100%"
                  height="auto"
                  src="https://www.youtube.com/embed/Wso2JUKPP8o?autoplay=0&rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </button>

              <p className="text-sm my-4">
                Have some fun and climb the leaderboards. Enter a Ladder
                with a Clan or fight solo. Your choice!
              </p>
              <Link href={`/stryda/ladders${prototype.getURLparams()}`}>
                  <button
                    type="button"
                    className="flex-1 button button-sm button-primary"
                  >
                    <span>Explore Ladders</span>
                  </button>
                </Link>
              {/* <div className="flex items-center gap-2 mt-4">
                <Link href={`/stryda/ladders${prototype.getURLparams()}`}>
                  <button
                    type="button"
                    className="flex-1 button button-sm button-primary"
                  >
                    <span>Explore Ladders</span>
                  </button>
                </Link>
                <Link href={`/stryda/clanevents${prototype.getURLparams()}`}>
                  <button
                    type="button"
                    className="flex-1 button button-sm button-primary"
                  >
                    <span>Find Clan Events</span>
                  </button>
                </Link>
              </div> */}
            </div>
          </>
        )}
      </div>
    </>
  );
}
