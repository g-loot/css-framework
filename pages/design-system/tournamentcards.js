import React from "react";
import { getLayout } from "@/components/DesignSystem/DSLayout";

const DSpage = () => {
  return (
    <>
      <h1 className="mb-2">Tournament cards</h1>

      {/* Showdown */}
      <div className="mb-12" id="showdown">
        <h2 className="h3 mb-3">Showdown</h2>

        <div className="">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 xl:flex-2 flex justify-start items-start">
              <button type="button" className="card-tournament">
                <div className="card-decoration">
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1653224681/Marketing/2022_prototype/Logo/Showdown-sameheight.svg"
                    width="auto"
                    height="auto"
                    alt="Stryda Showdown"
                  />
                  <div className="chip chip-secondary chip-xs">
                    <span>Valorant europe</span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="chip chip-sm chip-sliced">
                    <span>Open</span>
                  </div>
                  <div className="card-title">Stryda Monthly Showdown</div>
                  <div className="flex gap-2 text-sm text-ui-300 items-center">
                    <span className="icon icon-calendar-date-2" />
                    <span>Aug 11 • 01:00 AM</span>
                  </div>
                  <div className="card-meta">
                    <div>
                      <label>Entry</label>
                      <div>
                        <div className="chip chip-reward chip-ticket chip-inverted chip-sm">
                          <span className="icon icon-ticket" />
                          <span>1 ticket</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label>Prize Pool</label>
                      <div className="text-gradient bg-gradient-to-b from-premium-700 via-premium-300 to-premium-700">
                        $50 000
                      </div>
                    </div>
                    <div>
                      <ul>
                        <li>4v4</li>
                        <li>64 slots</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-bg">
                  <span
                    style={{
                      backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644831593/Marketing/202109_gloot2/tournament-apexlegends_1.jpg)`,
                    }}
                  />
                </div>
              </button>
            </div>
            <div className="flex-1 xl:flex-3">
              <iframe
                className="rounded"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/w32p0hLf/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Skirmish */}
      <div className="mb-12" id="skirmish">
        <h2 className="h3 mb-3">Skirmish</h2>

        <div className="">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 xl:flex-2 flex justify-start items-start">
              <button type="button" className="card-tournament">
                <div className="card-decoration">
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1653224681/Marketing/2022_prototype/Logo/Skirmish-sameheight.svg"
                    width="auto"
                    height="auto"
                    alt="Stryda Skirmish"
                  />
                  <div className="chip chip-secondary chip-xs">
                    <span>Global</span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="chip chip-sm chip-sliced chip-blue">
                    <span>Ongoing</span>
                  </div>
                  <div className="card-title">Stryda Skirmish Tournament</div>
                  <div className="flex gap-2 text-sm text-ui-300 items-center">
                    <span className="icon icon-calendar-date-2" />
                    <span>Aug 11 • 01:00 AM</span>
                  </div>
                  <div className="card-meta">
                    <div>
                      <label>Entry</label>
                      <div className="font-bold">FREE</div>
                    </div>
                    <div>
                      <label>Prize Pool</label>
                      <div>
                        <div className="chip chip-reward chip-ticket chip-inverted chip-sm">
                          <span className="icon icon-ticket" />
                          <span>1 ticket</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <ul>
                        <li>4v4</li>
                        <li>64 slots</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-bg">
                  <span
                    style={{
                      backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644831593/Marketing/202109_gloot2/tournament-valorant_1.jpg)`,
                    }}
                  />
                </div>
              </button>
            </div>
            <div className="flex-1 xl:flex-3">
              <iframe
                className="rounded"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/4w1gyz7h/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Open */}
      <div className="mb-12" id="open">
        <h2 className="h3 mb-3">Open</h2>

        <div className="">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 xl:flex-2 flex justify-start items-start">
              <button type="button" className="card-tournament">
                <div className="card-decoration">
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1653224681/Marketing/2022_prototype/Logo/Open-sameheight.svg"
                    width="auto"
                    height="auto"
                    alt="Stryda Open"
                  />
                  <div className="chip chip-secondary chip-xs">
                    <span>Global</span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="chip chip-sm chip-sliced chip-gray">
                    <span>Finished</span>
                  </div>
                  <div className="card-title">Stryda Open Tournament</div>
                  <div className="flex gap-2 text-sm text-ui-300 items-center">
                    <span className="icon icon-calendar-date-2" />
                    <span>Aug 11 • 01:00 AM</span>
                  </div>
                  <div className="card-meta">
                    <div>
                      <label>Entry</label>
                      <div className="font-bold">FREE</div>
                    </div>
                    <div>
                      <label>Prize Pool</label>
                      <div>
                        <div className="chip chip-reward chip-ticket chip-inverted chip-sm">
                          <span className="icon icon-ticket" />
                          <span>1 ticket</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <ul>
                        <li>4v4</li>
                        <li>64 slots</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-bg">
                  <span
                    style={{
                      backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644831593/Marketing/202109_gloot2/tournament-pubg_1.jpg)`,
                    }}
                  />
                </div>
              </button>
            </div>
            <div className="flex-1 xl:flex-3">
              <iframe
                className="rounded"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/qmzxehk5/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
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
            <div className="flex-1 xl:flex-2 flex justify-start items-start">
              <div className="card-tournament is-loading">
                <div className="card-decoration">
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1653224681/Marketing/2022_prototype/Logo/Open-sameheight.svg"
                    width="auto"
                    height="auto"
                    alt="Stryda Showdown"
                  />
                  <div className="chip chip-secondary chip-xs">
                    <span>Global</span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="chip chip-sm chip-sliced chip-gray">
                    <span>Finished</span>
                  </div>
                  <div className="card-title">Stryda Open Tournament</div>
                  <div className="flex gap-2 text-sm text-ui-300 items-center">
                    <span className="icon icon-calendar-date-2" />
                    <span>Aug 11 • 01:00 AM</span>
                  </div>
                  <div className="card-meta">
                    <div>
                      <label>Entry</label>
                      <div className="font-bold">FREE</div>
                    </div>
                    <div>
                      <label>Prize Pool</label>
                      <div>
                        <div className="chip chip-reward chip-ticket chip-inverted chip-sm">
                          <span className="icon icon-ticket" />
                          <span>1 ticket</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <ul>
                        <li>4v4</li>
                        <li>64 slots</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-bg">
                  <span
                    style={{
                      backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1644831593/Marketing/202109_gloot2/tournament-pubg_1.jpg)`,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 xl:flex-3">
              <iframe
                className="rounded"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/5ycrswhx/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
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
