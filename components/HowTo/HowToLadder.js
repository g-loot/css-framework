import React, { useRef, useState } from "react";

import Accordion from "../Accordion/Accordion";

export default function HowToLadder(props) {

  return (
    <>
      <div className={`flex-1 surface accordion accordion-highlighted sm:rounded-lg ${props.additionalClassNames}`}>
        <Accordion
          header={
            <>
              <div className="item">
                <div className="item-image">
                  <div className="w-10 h-10 rounded bg-gradient-to-b from-ui-800 to-ui-700 flex items-center justify-center">
                    <span className="icon icon-reading text-gradient bg-gradient-to-b from-main to-blue-300 text-3xl" />
                  </div>
                </div>
                <div className="item-body">
                  <div className="p-2 item-title text-lg">
                    Ladder details / how to play
                  </div>
                </div>
                <div className="item-actions">
                  <div>
                    <span className="icon icon-24 icon-arrow-sm-down" />
                  </div>
                </div>
              </div>
            </>
          }
        >
          <div className="">
            <ul className="gap-2 p-2 grid grid-cols-2 md:grid-cols-3">
              <li className="p-3 rounded bg-gradient-to-b from-ui-800 to-ui-700/25">
                <h4 className="text-base uppercase text-ui-200 mb-1">
                  Objective
                </h4>
                <p className="text-sm text-ui-300 leading-relaxed">
                  Your score is based on your kills and assists. Kills provide
                  twice as many points as assists towards your match score.
                </p>
              </li>
              <li className="p-3 rounded bg-gradient-to-b from-ui-800 to-ui-700/25">
                <h4 className="text-base uppercase text-ui-200 mb-1">
                  Game mode
                </h4>
                <p className="text-sm text-ui-300 leading-relaxed">
                  Competitive 2v2 &amp; 3v3 (Ranked only).
                </p>
              </li>
              <li className="p-3 rounded bg-gradient-to-b from-ui-800 to-ui-700/25">
                <h4 className="text-base uppercase text-ui-200 mb-1">
                  Ladder points
                </h4>
                <p className="text-sm text-ui-300 leading-relaxed">
                  Your total Ladder points are based on your combined [number]
                  best Solo matches. Clan Ladder points are based on your
                  Clan&#39;s players with the highest Ladder points from their
                  matches.
                </p>
              </li>
              <li className="p-3 rounded bg-gradient-to-b from-ui-800 to-ui-700/25">
                <h4 className="text-base uppercase text-ui-200 mb-1">
                  Tiebreaker
                </h4>
                <p className="text-sm text-ui-300 leading-relaxed">Damage.</p>
              </li>
              <li className="p-3 rounded bg-gradient-to-b from-ui-800 to-ui-700/25">
                <h4 className="text-base uppercase text-ui-200 mb-1">
                  Ladder type
                </h4>
                <p className="text-sm text-ui-300 leading-relaxed">
                  Solo and Clan. Your matches count toward both the Solo and
                  Clan leaderboards. At least x members of the Clan must compete
                  in the Ladder for your Clan to appear on the leaderboard.
                </p>
              </li>
              <li className="p-3 rounded bg-gradient-to-b from-ui-800 to-ui-700/25">
                <h4 className="text-base uppercase text-ui-200 mb-1">
                  Ladder size
                </h4>
                <p className="text-sm text-ui-300 leading-relaxed">
                  Infinite. Each group has their own leaderboard which contains
                  up to [number] players in each Solo leaderboard. Clan
                  leaderboards don&#39;t have a limit.
                </p>
              </li>
            </ul>
            <div className="border-t border-ui-700 py-2 flex gap-2 items-center justify-center">
              <h4 className="text-base uppercase text-ui-200">
                Ladder ID
              </h4>
              <button
                type="button"
                className="button button-sm button-secondary"
              >
                <span>Copy</span>
                <span className="icon icon-document-copy" />
              </button>
            </div>
          </div>
        </Accordion>
      </div>
    </>
  );
}
