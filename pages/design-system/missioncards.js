import React from "react";
import { getLayout } from "../../components/DesignSystem/DSLayout";
import Tooltip from "../../components/Tooltip/Tooltip";
import Lottie from "lottie-react";
import LottieExplosion from "../../assets/animations/explosion-1.json";

const DSpage = () => {
  return (
    <>
      <h1 className="mb-2">Mission cards</h1>

      {/* Structure */}
      <div className="mb-12" id="structure">
        <h2 className="h3 mb-3">Structure</h2>

        <div className="">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-start items-start">
              <div className="card-mission">
                <div className="card-decoration"></div>
                <div className="card-body">
                  <div className="card-title">Get 22 kills</div>
                  <div className="card-meta">
                    <Tooltip
                      tooltip={
                        <div className="w-56 flex gap-4 text-sm">
                          <div className="relative -mt-3">
                            <span className="icon icon-xp-symbol-outline text-6xl text-gradient bg-gradient-to-b from-premium-300 to-premium-700" />
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
                            <span className="font-bold text-premium-700">
                              50% XP
                            </span>{" "}
                            on each completed mission.
                          </div>
                        </div>
                      }
                    >
                      <div className="rounded-full border border-premium-300 bg-gradient-to-br from-premium-700 via-premium-700 to-premium-300 flex items-center leading-none">
                        <div className="rounded-full bg-ui-800 flex items-center gap-1 text-premium-500 px-2 py-0.5 border border-premium-300">
                          <span className="font-headings text-lg font-bold">
                            100
                          </span>
                          <span className="icon icon-xp-symbol text-3xl -my-4" />
                        </div>
                        <div className="flex items-center gap-1 text-ui-800 pl-1 pr-2">
                          <span className="icon icon-lock" />
                          <span className="font-bold">+50%XP</span>
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
                    alt="G-Loot Premium"
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
                    alt="G-Loot Premium"
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
