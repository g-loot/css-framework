import React, { useState } from "react";
import { getLayout } from "../../components/DesignSystem/DSLayout";
import Tooltip from "../../components/Tooltip/Tooltip";
import Lottie from "lottie-react";
import LottieExplosion from "../../assets/animations/explosion-1.json";
import GameIcon from "../../components/GameIcon/GameIcon";

const DSpage = () => {
  const [StartAnim1, setStartAnim1] = useState(false);
  function handleStartAnim1() {
    setStartAnim1(!StartAnim1);
  }
  return (
    <>
      <h1 className="mb-2">Mission cards</h1>

      {/* Structure */}
      <div className="mb-12" id="structure">
        <h2 className="h3 mb-3">Structure</h2>

        <div className="">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex flex-col gap-4 justify-start items-start">
              <div className="card-mission">
                <div className="card-decoration"></div>
                <div className="card-body">
                  <div className="card-title">Get 22 kills</div>
                  <div className="card-meta">
                    <Tooltip
                      tooltip={
                        <div className="w-56 flex gap-4 text-sm">
                          <div className="relative -mt-3">
                            <span className="icon icon-xp-symbol-outline text-6xl text-premium-500" />
                            <div className="lottie-premium absolute -inset-1">
                              <Lottie
                                animationData={LottieExplosion}
                                loop={false}
                                autoplay={true}
                              />
                            </div>
                          </div>
                          <div className="flex-1">
                            Subscribe to Premium to earn an additional{" "}
                            <span className="text-premium-700">50% XP</span> on
                            each completed mission.
                          </div>
                        </div>
                      }
                    >
                      <div className="flex gap-1 items-center">
                        <div className="chip chip-xp chip-inverted chip-sm">
                          <span>100</span>
                          <span className="icon icon-xp-symbol" />
                        </div>
                        <div className="chip chip-xp chip-ghost chip-sm">
                          <span>+50</span>
                          <span className="icon icon-xp-symbol" />
                          <span>if Premium</span>
                        </div>
                      </div>
                    </Tooltip>
                    <div>50/100 kills</div>
                  </div>
                  <div
                    className="progressbar progressbar-sm"
                    style={{ "--percent": "75" }}
                  >
                    <div />
                  </div>
                </div>
                <div className="card-bg">
                  <span
                    style={{
                      backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653310937/Marketing/2022_prototype/DummyContent/mission-pubg_1.jpg)`,
                    }}
                  />
                </div>
              </div>
              <div className="card-mission">
                <div className="card-decoration"></div>
                <div className="card-body">
                  <div className="card-title">Get 22 kills</div>
                  <div className="card-meta">
                    <div className="chip chip-xp chip-inverted chip-sm">
                      <span>150</span>
                      <span className="icon icon-xp-symbol" />
                    </div>
                    <div>50/100 kills</div>
                  </div>
                  <div
                    className="progressbar progressbar-sm"
                    style={{ "--percent": "75" }}
                  >
                    <div />
                  </div>
                </div>
                <div className="card-bg">
                  <span
                    style={{
                      backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653310937/Marketing/2022_prototype/DummyContent/mission-pubg_1.jpg)`,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <iframe
                className="rounded"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/16r43ftn/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Premium locked */}
      <div className="mb-12" id="premium-locked">
        <h2 className="h3 mb-3">Premium locked</h2>

        <div className="">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-start items-start">
              <div className="card-mission card-locked">
                <div className="card-decoration">
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1653293407/Marketing/2022_prototype/Premium_logo.png"
                    width="auto"
                    height="auto"
                    alt="Stryda Premium"
                  />
                </div>
                <div className="card-body">
                  <div className="card-title">Get 3 double kills</div>
                  <div className="card-meta">
                    <div className="chip chip-reward chip-xp chip-sm chip-inverted">
                      <span className="icon icon-xp-symbol-outline" />
                      <span>100</span>
                    </div>
                    <div>2/3 double kills</div>
                  </div>
                  <div
                    className="progressbar progressbar-sm"
                    style={{ "--percent": "66" }}
                  >
                    <div />
                  </div>
                </div>
                <div className="card-bg">
                  <span
                    style={{
                      backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653310937/Marketing/2022_prototype/DummyContent/mission-valorant_1.jpg)`,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <iframe
                className="rounded"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/98xh1p0b/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Premium unlocked */}
      <div className="mb-12" id="premium-unlocked">
        <h2 className="h3 mb-3">Premium unlocked</h2>

        <div className="">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-start items-start">
              <div className="card-mission card-unlocked">
                <div className="card-decoration">
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1653293407/Marketing/2022_prototype/Premium_logo.png"
                    width="auto"
                    height="auto"
                    alt="Stryda Premium"
                  />
                </div>
                <div className="card-body">
                  <div className="card-title">Get 6 assists</div>
                  <div className="card-meta">
                    <div className="chip chip-reward chip-xp chip-sm chip-inverted">
                      <span className="icon icon-xp-symbol-outline" />
                      <span>100</span>
                    </div>
                    <div>2/6 assists</div>
                  </div>
                  <div
                    className="progressbar progressbar-sm"
                    style={{ "--percent": "33" }}
                  >
                    <div />
                  </div>
                </div>
                <div className="card-bg">
                  <span
                    style={{
                      backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653310937/Marketing/2022_prototype/DummyContent/mission-apexlegends_1.jpg)`,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <iframe
                className="rounded"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/e7cxnho0/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Premium interactive */}
      <div className="mb-12" id="premium-interactive">
        <h2 className="h3 mb-3">Premium interactive</h2>

        <div className="">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-start items-start">
              <div className="card-mission card-interactive">
                <div className="card-decoration"></div>
                <div className="card-body">
                  <div className="card-title">Get 10 shots on goal</div>
                  <div className="card-meta">
                    <div className="chip chip-reward chip-xp chip-sm chip-inverted">
                      <span className="icon icon-xp-symbol-outline" />
                      <span>100</span>
                    </div>
                    <div>9/10 shots on goal</div>
                  </div>
                  <div
                    className="progressbar progressbar-sm"
                    style={{ "--percent": "90" }}
                  >
                    <div />
                  </div>
                </div>
                <div className="card-bg">
                  <span
                    style={{
                      backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653310937/Marketing/2022_prototype/DummyContent/mission-rocketleague_1.jpg)`,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <iframe
                className="rounded"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/z4b9y2dh/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary */}
      <div className="mb-12" id="secondary">
        <h2 className="h3 mb-3">Secondary</h2>

        <div className="">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex flex-col gap-4 justify-start items-start">
              <div className="card-mission card-secondary">
                <div className="card-decoration"></div>
                <div className="card-body">
                  <div className="card-title">
                    Get 15 kills with the Operator
                  </div>
                  <div className="card-meta">
                    <Tooltip
                      tooltip={
                        <div className="w-56 flex gap-4 text-sm">
                          <div className="relative -mt-3">
                            <span className="icon icon-xp-symbol-outline text-6xl text-premium-500" />
                            <div className="lottie-blur absolute -inset-1">
                              <Lottie
                                animationData={LottieExplosion}
                                loop={false}
                                autoplay={true}
                              />
                            </div>
                          </div>
                          <div className="flex-1">
                            Subscribe to Premium to earn an additional{" "}
                            <span className="text-premium-700">50% XP</span> on
                            each completed mission.
                          </div>
                        </div>
                      }
                    >
                      <div className="flex gap-1 items-center">
                        <div className="chip chip-xp chip-sm">
                          <span>100</span>
                          <span className="icon icon-xp-symbol" />
                        </div>
                        <div className="chip chip-ghost chip-sm">
                          <span>+50</span>
                          <span className="icon icon-xp-symbol" />
                          <span>if Premium</span>
                        </div>
                      </div>
                    </Tooltip>
                  </div>
                  <div>
                    <div className="text-sm text-ui-300">50/100 kills</div>
                    <div
                      className="progressbar progressbar-sm"
                      style={{ "--percent": "75" }}
                    >
                      <div />
                    </div>
                  </div>
                </div>
                <div className="card-bg">
                  <span
                    style={{
                      backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653310937/Marketing/2022_prototype/DummyContent/mission-pubg_1.jpg)`,
                    }}
                  />
                </div>
              </div>
              <div className="card-mission card-secondary">
                <div className="card-decoration">
                  <GameIcon size="text-base" />
                </div>
                <div className="card-body">
                  <div className="card-title">Get 22 kills</div>
                  <div className="card-meta">
                    <div className="chip chip-xp chip-inverted chip-sm">
                      <span>150</span>
                      <span className="icon icon-xp-symbol" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-ui-300">50/100 kills</div>
                    <div
                      className="progressbar progressbar-sm"
                      style={{ "--percent": "75" }}
                    >
                      <div />
                    </div>
                  </div>
                </div>
                <div className="card-bg">
                  <span
                    style={{
                      backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653310937/Marketing/2022_prototype/DummyContent/mission-pubg_1.jpg)`,
                    }}
                  />
                </div>
              </div>

              <div
                className={`revealer ${StartAnim1 === true ? "is-active" : ""}`}
              >
                <div className="revealer-front">
                  <div className="card-mission card-secondary">
                    <div className="card-overlay">
                      <button
                        className="button button-secondary mx-auto"
                        onClick={handleStartAnim1.bind(this)}
                      >
                        <span>Get new mission</span>
                      </button>
                    </div>
                    <div className="card-bg">
                      <span
                        style={{
                          backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653310937/Marketing/2022_prototype/DummyContent/mission-pubg_1.jpg)`,
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="revealer-back">
                  <div className="card-mission card-secondary">
                    <div className="card-decoration">
                      <GameIcon size="text-base" />
                    </div>
                    <div className="card-body">
                      <div className="card-title">Get 22 kills</div>
                      <div className="card-meta">
                        <div className="chip chip-xp chip-inverted chip-sm">
                          <span>150</span>
                          <span className="icon icon-xp-symbol" />
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-ui-300">50/100 kills</div>
                        <div
                          className="progressbar progressbar-sm"
                          style={{ "--percent": "75" }}
                        >
                          <div />
                        </div>
                      </div>
                    </div>
                    <div className="card-bg">
                      <span
                        style={{
                          backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653310937/Marketing/2022_prototype/DummyContent/mission-pubg_1.jpg)`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <iframe
                className="rounded"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/16r43ftn/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Loading */}
      <div className="mb-12" id="status-loading">
        <h2 className="h3 mb-3">Loading</h2>

        <div className="">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-start items-start">
              <div className="card-mission is-loading">
                <div className="card-decoration"></div>
                <div className="card-body">
                  <div className="card-title">Get 10 shots on goal</div>
                  <div className="card-meta">
                    <div className="chip chip-reward chip-xp chip-sm chip-inverted">
                      <span className="icon icon-xp-symbol-outline" />
                      <span>100</span>
                    </div>
                    <div>9/10 shots on goal</div>
                  </div>
                  <div
                    className="progressbar progressbar-sm"
                    style={{ "--percent": "90" }}
                  >
                    <div />
                  </div>
                </div>
                <div className="card-bg">
                  <span
                    style={{
                      backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653310937/Marketing/2022_prototype/DummyContent/mission-rocketleague_1.jpg)`,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <iframe
                className="rounded"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/p0x59wf1/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
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
