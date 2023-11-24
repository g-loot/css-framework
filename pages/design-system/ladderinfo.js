import Accordion from "@/components/Accordion/Accordion";
import React from "react";
import { getLayout } from "@/components/DesignSystem/DSLayout";

const DSpage = () => {
  return (
    <>
      <h1 className="mb-8">Ladder info</h1>

      {/* Ladder info 3 */}
      <div className="mb-12" id="ladder-info-3">
        <div className="pt-4">
          <div className="">
            <div className="flex gap-4 flex-col">
              <div className="flex-1 surface accordion accordion-highlighted rounded-lg">
                <Accordion
                  header={
                    <>
                      <div className="item">
                        <div className="item-image">
                          <div className="avatar avatar-xs avatar-simple">
                            <div>
                              <span className="icon icon-reading" />
                            </div>
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
                    <ul className="gap-2 p-2 grid grid-cols-3 grid-rows-2">
                      <li className="p-3 rounded bg-gradient-to-b from-ui-800 to-ui-700/25">
                        <h4 className="text-base uppercase text-ui-200 mb-1">
                          Objective
                        </h4>
                        <p className="text-sm text-ui-300 leading-relaxed">
                          Your score is based on your kills and assists. Kills
                          provide twice as many points as assists towards your
                          match score.
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
                          Your total Ladder points are based on your combined
                          [number] best Solo matches. Clan Ladder points are
                          based on your Clan&#39;s players with the highest
                          Ladder points from their matches.
                        </p>
                      </li>
                      <li className="p-3 rounded bg-gradient-to-b from-ui-800 to-ui-700/25">
                        <h4 className="text-base uppercase text-ui-200 mb-1">
                          Tiebreaker
                        </h4>
                        <p className="text-sm text-ui-300 leading-relaxed">
                          Damage.
                        </p>
                      </li>
                      <li className="p-3 rounded bg-gradient-to-b from-ui-800 to-ui-700/25">
                        <h4 className="text-base uppercase text-ui-200 mb-1">
                          Ladder type
                        </h4>
                        <p className="text-sm text-ui-300 leading-relaxed">
                          Solo and Clan. Your matches count toward both the Solo
                          and Clan leaderboards. At least x members of the Clan
                          must compete in the Ladder for your Clan to appear on
                          the leaderboard.
                        </p>
                      </li>
                      <li className="p-3 rounded bg-gradient-to-b from-ui-800 to-ui-700/25">
                        <h4 className="text-base uppercase text-ui-200 mb-1">
                          Ladder size
                        </h4>
                        <p className="text-sm text-ui-300 leading-relaxed">
                          Infinite. Each group has their own leaderboard which
                          contains up to [number] players in each Solo
                          leaderboard. Clan leaderboards don&#39;t have a limit.
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
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/h4wdeafs/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ladder info 1 */}
      <div className="mb-12" id="ladder-info-1">
        <div className="pt-4">
          <div className="">
            <div className="flex gap-4 flex-col">
              <ul className="flex-1 surface overflow-hidden rounded-lg flex flex-col lg:flex-row flex-wrap items-stretch">
                <li className="flex-1 p-4 border-b lg:border-b-0 lg:border-r border-ui-700">
                  <div
                    className="animate-slide-in-bottom animate-delay"
                    style={{ "--delay": "calc( 1 * 0.05s)" }}
                  >
                    <h4 className="text-base uppercase text-ui-400 mb-1">
                      Objective
                    </h4>
                    <p className="text-sm text-ui-200 leading-tight">
                      Most kills wins
                    </p>
                  </div>
                </li>
                <li className="flex-1 p-4 border-b lg:border-b-0 lg:border-r border-ui-700">
                  <div
                    className="animate-slide-in-bottom animate-delay"
                    style={{ "--delay": "calc( 2 * 0.05s)" }}
                  >
                    <h4 className="text-base uppercase text-ui-400 mb-1">
                      Tiebreaker
                    </h4>
                    <p className="text-sm text-ui-200 leading-tight">
                      Headshots from your 3 best matches decides a tie
                    </p>
                  </div>
                </li>
                <li className="flex-1 p-4 border-b lg:border-b-0 lg:border-r border-ui-700">
                  <div
                    className="animate-slide-in-bottom animate-delay"
                    style={{ "--delay": "calc( 3 * 0.05s)" }}
                  >
                    <h4 className="text-base uppercase text-ui-400 mb-1">
                      Game modes
                    </h4>
                    <p className="text-sm text-ui-200 leading-tight">
                      Competitive
                    </p>
                  </div>
                </li>
                <li className="flex-1 p-4 border-b lg:border-b-0 lg:border-r border-ui-700">
                  <div
                    className="animate-slide-in-bottom animate-delay"
                    style={{ "--delay": "calc( 4 * 0.05s)" }}
                  >
                    <h4 className="text-base uppercase text-ui-400 mb-1">
                      Ladder points
                    </h4>
                    <p className="text-sm text-ui-200 leading-tight">
                      Best 3 matches
                    </p>
                  </div>
                </li>
                <li className="flex-1 p-4">
                  <div
                    className="animate-slide-in-bottom animate-delay"
                    style={{ "--delay": "calc( 5 * 0.05s)" }}
                  >
                    <h4 className="text-base uppercase text-ui-400 mb-1">
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
                </li>
              </ul>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/ut530jcq/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ladder info 2 */}
      <div className="mb-12" id="ladder-info-2">
        <div className="pt-4">
          <div className="">
            <div className="flex gap-4 flex-col">
              <ul className="flex-1 surface overflow-hidden rounded-lg flex flex-col lg:flex-row flex-wrap items-stretch gap-2 p-2">
                <li
                  className="flex-1 p-3 rounded bg-gradient-to-b from-ui-900 to-ui-800 animate-slide-in-bottom animate-delay"
                  style={{ "--delay": "calc( 1 * 0.05s)" }}
                >
                  <h4 className="text-base uppercase text-ui-400 mb-1">
                    Objective
                  </h4>
                  <p className="text-sm text-ui-200 leading-tight">
                    Most kills wins
                  </p>
                </li>
                <li
                  className="flex-1 p-3 rounded bg-gradient-to-b from-ui-900 to-ui-800 animate-slide-in-bottom animate-delay"
                  style={{ "--delay": "calc( 2 * 0.05s)" }}
                >
                  <h4 className="text-base uppercase text-ui-400 mb-1">
                    Tiebreaker
                  </h4>
                  <p className="text-sm text-ui-200 leading-tight">
                    Headshots from your 3 best matches decides a tie
                  </p>
                </li>
                <li
                  className="flex-1 p-3 rounded bg-gradient-to-b from-ui-900 to-ui-800 animate-slide-in-bottom animate-delay"
                  style={{ "--delay": "calc( 3 * 0.05s)" }}
                >
                  <h4 className="text-base uppercase text-ui-400 mb-1">
                    Game modes
                  </h4>
                  <p className="text-sm text-ui-200 leading-tight">
                    Competitive
                  </p>
                </li>
                <li
                  className="flex-1 p-3 rounded bg-gradient-to-b from-ui-900 to-ui-800 animate-slide-in-bottom animate-delay"
                  style={{ "--delay": "calc( 4 * 0.05s)" }}
                >
                  <h4 className="text-base uppercase text-ui-400 mb-1">
                    Ladder points
                  </h4>
                  <p className="text-sm text-ui-200 leading-tight">
                    Best 3 matches
                  </p>
                </li>
                <li
                  className="flex-1 p-3 rounded bg-gradient-to-b from-ui-900 to-ui-800 animate-slide-in-bottom animate-delay"
                  style={{ "--delay": "calc( 5 * 0.05s)" }}
                >
                  <h4 className="text-base uppercase text-ui-400 mb-1">
                    Ladder ID
                  </h4>
                  <button
                    type="button"
                    className="button button-sm button-secondary"
                  >
                    <span>Copy</span>
                    <span className="icon icon-document-copy" />
                  </button>
                </li>
              </ul>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/85x0q7ky/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
