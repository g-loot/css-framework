import Accordion from "@/components/Accordion/Accordion";
import React from "react";
import { getLayout } from "@/components/DesignSystem/DSLayout";
import Anchor from "@/components/DesignSystem/DSanchor";

const DSpage = () => {
  return (
    <>
      <h1 className="mb-8">Accordion</h1>

      {/* Structure */}
      <div className="mb-12">
        <Anchor title="Structure" />

        <div className="mb-10">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-3">
              <div className="surface rounded-lg accordion">
                <Accordion
                  isopen
                  header={
                    <>
                      <div className="item">
                        <div className="item-image">
                          <div
                            className={`rounded h-10 w-10 flex items-center justify-center bg-gradient-to-b from-ui-900/50 to-ui-900/0 aspect-square text-game-valorant`}
                          >
                            <span
                              className={`icon icon-24 icon-game-valorant-symbol`}
                            />
                          </div>
                        </div>
                        <div className="item-body">
                          <div className="item-title text-xl">Valorant</div>
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
                  <ul className="menu menu-secondary menu-rounded px-2 pb-2">
                    <li>
                      <a tabIndex={1}>
                        <span className="icon icon-16 icon-missions" />
                        <span>Missions</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex={1}>
                        <span className="icon icon-16 icon-ladder" />
                        <span>Ladders</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex={1}>
                        <span className="icon icon-16 icon-showdown" />
                        <span>Tournaments</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex={1}>
                        <span className="icon icon-16 icon-statistics" />
                        <span>Stats</span>
                      </a>
                    </li>
                  </ul>
                </Accordion>
                <Accordion
                  header={
                    <>
                      <div className="item">
                        <div className="item-image">
                          <div
                            className={`rounded h-10 w-10 flex items-center justify-center bg-gradient-to-b from-ui-900/50 to-ui-900/0 aspect-square text-game-pubg`}
                          >
                            <span
                              className={`icon icon-24 icon-game-pubg-symbol`}
                            />
                          </div>
                        </div>
                        <div className="item-body">
                          <div className="item-title text-xl">
                            PUBG: BATTLEGROUNDS
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
                  <ul className="menu menu-secondary menu-rounded px-2 pb-2">
                    <li>
                      <a tabIndex={1}>
                        <span className="icon icon-16 icon-missions" />
                        <span>Missions</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex={1}>
                        <span className="icon icon-16 icon-ladder" />
                        <span>Ladders</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex={1}>
                        <span className="icon icon-16 icon-showdown" />
                        <span>Tournaments</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex={1}>
                        <span className="icon icon-16 icon-statistics" />
                        <span>Stats</span>
                      </a>
                    </li>
                  </ul>
                </Accordion>
                <Accordion
                  header={
                    <>
                      <div className="item">
                        <div className="item-image">
                          <div
                            className={`rounded h-10 w-10 flex items-center justify-center bg-gradient-to-b from-ui-900/50 to-ui-900/0 aspect-square text-game-rocketleague`}
                          >
                            <span
                              className={`icon icon-24 icon-game-rocketleague-symbol`}
                            />
                          </div>
                        </div>
                        <div className="item-body">
                          <div className="item-title text-xl">
                            Rocket League
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
                  <ul className="menu menu-secondary menu-rounded px-2 pb-2">
                    <li>
                      <a tabIndex={1}>
                        <span className="icon icon-16 icon-missions" />
                        <span>Missions</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex={1}>
                        <span className="icon icon-16 icon-ladder" />
                        <span>Ladders</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex={1}>
                        <span className="icon icon-16 icon-showdown" />
                        <span>Tournaments</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex={1}>
                        <span className="icon icon-16 icon-statistics" />
                        <span>Stats</span>
                      </a>
                    </li>
                  </ul>
                </Accordion>
              </div>
            </div>
            <div className="flex-2">
              <iframe
                className="rounded-lg"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/qejv3rwu/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* With highlighted header */}
      <div className="mb-12">
        <Anchor title="With highlighted header" />

        <div className="mb-10">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-3">
              <div className="surface rounded-lg accordion accordion-highlighted">
                <Accordion
                  isopen
                  header={
                    <>
                      <div className="item">
                        <div className="item-body">
                          <div className="p-2 item-title text-lg">
                            Before entering a Ladder
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
                  <div className="flex flex-col md:flex-row items-center gap-8 p-8">
                    <div className="flex-none grow-0">
                      <img
                        src="https://res.cloudinary.com/gloot/image/upload/v1672328330/Stryda/logos/stryda-logo-ladders.svg"
                        width="auto"
                        height="110"
                        className="mx-auto"
                      />
                    </div>
                    <div className="text-ui-300 space-y-4">
                      <p>
                        Make sure you have the Stryda Tracker installed and
                        running on your PC. See if everthing is working by
                        running the Stryda app on your PC, then start your game.
                      </p>
                      <p>
                        The Stryda icon should appear in your game with a green
                        dot. This means everything is up and running to track
                        your Mission progress.
                      </p>
                    </div>
                  </div>
                </Accordion>
                <Accordion
                  header={
                    <>
                      <div className="item">
                        <div className="item-body">
                          <div className="p-2 item-title text-lg">
                            Play your first matches to join the leaderboard
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
                  <div className="p-8 text-ui-300 space-y-4">
                    <p>
                      To join the leaderboard, you need to complete a certain
                      number of matches depending on the rules of the Ladder you
                      want to compete in.
                    </p>
                    <p>
                      When you have played the minimum amount of matches, your
                      Ladder points will be added to the leaderboard.
                    </p>
                    <p>
                      You can always play more matches as long as you have
                      Tokens. Only your best scores will count.
                    </p>
                  </div>
                </Accordion>
                <Accordion
                  header={
                    <>
                      <div className="item">
                        <div className="item-body">
                          <div className="p-2 item-title text-lg">
                            Pay tokens to activate Ladder matches
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
                  <div className="flex flex-col md:flex-row items-center gap-8 p-8">
                    <div className="flex-none grow-0">
                      <video
                        autoPlay
                        playsinline
                        muted
                        loop
                        preload
                        width="150"
                        height="150"
                      >
                        <source
                          src="https://res.cloudinary.com/gloot/video/upload/v1644396746/Marketing/202109_gloot2/3D/HomeStepToken.webm"
                          type="video/webm"
                        />
                        <img src="https://res.cloudinary.com/gloot/image/upload/v1644184592/Marketing/202109_gloot2/Square_token.png" />
                      </video>
                    </div>
                    <div className="text-ui-300 space-y-4">
                      <p>To play in the Ladder you need Tokens.</p>
                      <p>
                        Each match costs a certain number of Tokens. When you
                        have spent a Token and activated a Ladder match, your
                        next game match in the correct game mode will count
                        towards the Ladder.
                      </p>
                    </div>
                  </div>
                </Accordion>
              </div>
            </div>
            <div className="flex-2">
              <iframe
                className="rounded-lg"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/pc0w3eda/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
