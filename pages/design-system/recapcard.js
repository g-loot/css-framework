import React, { useState } from "react";
import { getLayout } from "@/components/DesignSystem/DSLayout";
import Anchor from "@/components/DesignSystem/DSanchor";
import Tooltip from "@/components/Tooltip/Tooltip";
import PremiumLogo from "@/components/PremiumLogo/PremiumLogo";
import RecapPreview from "../stryda/components/RecapPreview";
import RecapPublished from "../stryda/components/RecapPublished";
import RecordingDeletedConfirmation from "../stryda/components/RecordingDeletedConfirmation";

const RecapItem = ({ imageOverlay, rigthContent, actionContent }) => {
  return (
    <div className="card-recap">
      <div className="card-image">
        <div className="card-game">
          <span className="icon icon-game-valorant-symbol text-game-valorant" />
        </div>
        <div className="card-date">4 min. ago</div>
        <div className="card-user">
          <div className="avatar avatar-simple avatar-xs">
            <div>
              <img
                src="https://res.cloudinary.com/gloot/image/upload/Stryda/stats/valorant/agent-avatar-cypher.webp"
                alt=""
              />
            </div>
          </div>
          <span>Cypher</span>
        </div>
        <div className="card-meta">
          <img
            src="https://res.cloudinary.com/gloot/image/upload/v1695129417/Stryda/stats/valorant/Game_Mode_Competitive.webp"
            alt=""
          />
          <span>Competitive</span>
          <span>Haven</span>
        </div>
        <img
          src="https://res.cloudinary.com/gloot/image/upload/Stryda/stats/valorant/map-piazza.jpg"
          alt=""
        />
        {imageOverlay && <div className="card-overlay">{imageOverlay}</div>}
      </div>
      <div className="card-content">{rigthContent && <>{rigthContent}</>}</div>
      {actionContent && <div className="card-action">{actionContent}</div>}
    </div>
  );
};

const DSpage = () => {
  const ButtonStretchy = ({ children, ...props }) => {
    const [isActive, setIsActive] = useState(true);

    const handleClick = () => {
      setIsActive(!isActive);
    };

    return (
      <button
        type="button"
        className={`button button-unstretch md:button-stretch button-secondary ${
          props.variant ? props.variant : ""
        } ${isActive ? "is-active" : ""}`}
        onClick={handleClick}
      >
        {children}
      </button>
    );
  };

  return (
    <>
      <h1 className="mb-8">Recap card</h1>

      <div className="mb-8">
        <Anchor title="Structure" />
        <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
          <div className="flex-1 sm:w-[420px] space-y-4">
            <RecapItem state="ready" />
            <div className="flex items-stretch gap-1">
              <div className="flex-1 border-x border-b border-ui-100 h-4 rounded-b text-sm text-center">
                <div className="relative h-4 mt-4 w-px border-l border-ui-100 mx-auto">
                  <span className="absolute -bottom-4 -translate-x-1/2 translate-y-2">
                    Overlay
                  </span>
                </div>
              </div>
              <div className="w-44 border-x border-b border-ui-100 h-4 rounded-b text-sm text-center">
                <div className="relative h-4 mt-4 w-px border-l border-ui-100 mx-auto">
                  <span className="absolute -bottom-4 -translate-x-1/2 translate-y-2">
                    Content
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <iframe
              className="rounded"
              width="100%"
              height="360"
              src="//jsfiddle.net/augustin_hiebel/q2d8w9v3/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <Anchor title="Status: paused" />
        <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
          <div className="flex-1 sm:w-[420px]">
            <RecapItem
              state="ready"
              imageOverlay={
                <Tooltip
                  tooltip={
                    <div className="w-60">
                      The Recap creation has been paused.
                    </div>
                  }
                  placement="right"
                >
                  <div className="rounded-full p-3 bg-ui-800/75 backdrop-blur-sm">
                    <span className="icon text-xl icon-button-pause text-ui-200" />
                  </div>
                </Tooltip>
              }
              rigthContent={
                <>
                  <h5>Recap paused</h5>
                  <p>
                    Finish your in-game match to continue rendering your Recap
                    video.
                  </p>
                </>
              }
            />
          </div>
          <div className="flex-1">
            <iframe
              className="rounded"
              width="100%"
              height="200"
              src="//jsfiddle.net/augustin_hiebel/m4j0owbs/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <Anchor title="Status: error" />
        <div className="mb-2">
          <ButtonStretchy variant="button-error">
            <span className="text-sm">
              <span>Something went wrong</span>
            </span>
            <span className="icon icon-warning-sign" />
          </ButtonStretchy>
        </div>
        <Anchor title="Processing failed" level={3} />
        <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
          <div className="flex-1 sm:w-[420px]">
            <RecapItem
              state="ready"
              imageOverlay={
                <Tooltip
                  tooltip={
                    <div className="w-60">
                      Something happened while processing your recording. Make
                      sure you have at least x GB available on your computer.
                    </div>
                  }
                  placement="right"
                >
                  <div className="rounded-full p-3 bg-ui-800/75 backdrop-blur-sm">
                    <span className="icon text-xl icon-warning-sign text-error-500" />
                  </div>
                </Tooltip>
              }
              rigthContent={
                <>
                  <div className="flex-1 flex items-center justify-center">
                    <p>Could not create a recording from your match </p>
                  </div>
                  <div className="w-full flex gap-2 items-center">
                    <button
                      type="button"
                      className="flex-1 button button-sm button-secondary"
                    >
                      <span>Try again</span>
                    </button>
                    <button
                      type="button"
                      className="button button-sm button-tertiary rounded-full"
                    >
                      <span className="icon icon-trash" />
                    </button>
                  </div>
                </>
              }
            />
          </div>
          <div className="flex-1">
            <iframe
              className="rounded"
              width="100%"
              height="200"
              src="//jsfiddle.net/augustin_hiebel/gbk173Le/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
            ></iframe>
          </div>
        </div>
        <Anchor title="Creation failed" level={3} />
        <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
          <div className="flex-1 sm:w-[420px]">
            <RecapItem
              state="ready"
              imageOverlay={
                <Tooltip
                  tooltip={
                    <div className="w-60">
                      Something happened while processing your recording. Make
                      sure you have at least x GB available on your computer.
                    </div>
                  }
                >
                  <div className="rounded-full p-3 bg-ui-800/75 backdrop-blur-sm">
                    <span className="icon text-xl icon-warning-sign text-error-500" />
                  </div>
                </Tooltip>
              }
              rigthContent={
                <>
                  <div className="flex-1 flex items-center justify-center">
                    <p>Creating your Recap video failed</p>
                  </div>
                  <div className="w-full flex gap-2 items-center">
                    <button
                      type="button"
                      className="flex-1 button button-sm button-secondary"
                    >
                      <span>Try again</span>
                    </button>
                    <button
                      type="button"
                      className="button button-sm button-tertiary rounded-full"
                    >
                      <span className="icon icon-trash" />
                    </button>
                  </div>
                </>
              }
            />
          </div>
          <div className="flex-1">
            <iframe
              className="rounded"
              width="100%"
              height="200"
              src="//jsfiddle.net/augustin_hiebel/a62kot7j/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
            ></iframe>
          </div>
        </div>
        <Anchor title="Recording corrupted" level={3} />
        <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
          <div className="flex-1 sm:w-[420px]">
            <RecapItem
              state="ready"
              imageOverlay={
                <div className="rounded-full p-3 bg-ui-800/75 backdrop-blur-sm">
                  <span className="icon text-xl icon-warning-sign text-error-500" />
                </div>
              }
              rigthContent={
                <>
                  <div className="flex-1 flex items-center justify-center">
                    <p>Could not create a recording from your match</p>
                  </div>
                  <button
                    type="button"
                    className="w-full button button-sm button-secondary"
                  >
                    <span>Remove</span>
                  </button>
                </>
              }
            />
          </div>
          <div className="flex-1">
            <iframe
              className="rounded"
              width="100%"
              height="200"
              src="//jsfiddle.net/augustin_hiebel/a62kot7j/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
            ></iframe>
          </div>
        </div>
        <Anchor title="Not enough moments" level={3} />
        <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
          <div className="flex-1 sm:w-[420px]">
            <RecapItem
              state="ready"
              rigthContent={
                <>
                  <h5>Not enough moments</h5>
                  <p>
                    Stryda needs at least 3 moments from the match in order to
                    create a Recap video.
                  </p>
                </>
              }
            />
          </div>
          <div className="flex-1">
            <iframe
              className="rounded"
              width="100%"
              height="200"
              src="//jsfiddle.net/augustin_hiebel/c6at5oew/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
            ></iframe>
          </div>
        </div>
        <Anchor title="Recording is missing / removed" level={3} />
        <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
          <div className="flex-1 sm:w-[420px]">
            <RecapItem
              state="ready"
              rigthContent={
                <>
                  <h5>Recording removed</h5>
                  <p>
                    Recording of this match have been deleted to make room for
                    new matches. Manage space in your{" "}
                    <a href="#" className="link">
                      settings
                    </a>
                    .
                  </p>
                </>
              }
            />
          </div>
          <div className="flex-1">
            <iframe
              className="rounded"
              width="100%"
              height="200"
              src="//jsfiddle.net/augustin_hiebel/ovkLhutn/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <Anchor title="Status: processing" />
        <div className="mb-2">
          <ButtonStretchy>
            <div className="progresscontainer" style={{ "--percent": 50 }}>
              <div>
                <span className="text-sm">Processing...</span>
              </div>
              <div>
                <span className="text-sm">Processing...</span>
              </div>
            </div>
            <span>
              <span>Processing...</span>
            </span>
            <span className="icon icon-video" />
          </ButtonStretchy>
        </div>
        <Anchor title="Queueing" level={3} />
        <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
          <div className="flex-1 sm:w-[420px]">
            <RecapItem
              state="ready"
              imageOverlay={
                <Tooltip
                  tooltip={
                    <div className="w-60">
                      This match is currently in queue and will continue once
                      the other match is done.
                    </div>
                  }
                  placement="right"
                >
                  <div className="rounded-full p-3 bg-ui-800/75 backdrop-blur-sm">
                    <div role="loading" className="loader loader-xs">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                </Tooltip>
              }
              rigthContent={<h5>Waiting in queue...</h5>}
            />
          </div>
          <div className="flex-1">
            <iframe
              className="rounded"
              width="100%"
              height="200"
              src="//jsfiddle.net/augustin_hiebel/u4rsgLnm/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
            ></iframe>
          </div>
        </div>
        <Anchor title="Downsampling & uploading" level={3} />
        <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
          <div className="flex-1 sm:w-[420px]">
            <RecapItem
              state="ready"
              rigthContent={
                <div className="progresscontainer" style={{ "--percent": 25 }}>
                  <div className="space-y-1.5">
                    <div className="text-xs font-bold">Step 1 of 3</div>
                    <div className="text-2xl font-bold">25%</div>
                    <div className="text-base">Finding moments</div>
                    <span className="text-xs whitespace-normal px-2">
                      Do not close Stryda
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-xs font-bold">Step 1 of 3</div>
                    <div className="text-2xl font-bold">25%</div>
                    <div className="text-base">Finding moments</div>
                    <span className="text-xs whitespace-normal px-2">
                      Do not close Stryda
                    </span>
                  </div>
                </div>
              }
            />
          </div>
          <div className="flex-1">
            <iframe
              className="rounded"
              width="100%"
              height="200"
              src="//jsfiddle.net/augustin_hiebel/jga5rt0p/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
            ></iframe>
          </div>
        </div>
        <Anchor title="Analyzing" level={3} />
        <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
          <div className="flex-1 sm:w-[420px]">
            <RecapItem
              state="ready"
              rigthContent={
                <div className="progresscontainer" style={{ "--percent": 50 }}>
                  <div className="space-y-1.5">
                    <div className="text-xs font-bold">Step 2 of 3</div>
                    <div className="text-2xl font-bold">50%</div>
                    <div className="text-base">Analyzing moments</div>
                    <span className="text-xs whitespace-normal px-2">
                      Do not close Stryda
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-xs font-bold">Step 2 of 3</div>
                    <div className="text-2xl font-bold">50%</div>
                    <div className="text-base">Analyzing moments</div>
                    <span className="text-xs whitespace-normal px-2">
                      Do not close Stryda
                    </span>
                  </div>
                </div>
              }
            />
          </div>
          <div className="flex-1">
            <iframe
              className="rounded"
              width="100%"
              height="200"
              src="//jsfiddle.net/augustin_hiebel/hn47xy69/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
            ></iframe>
          </div>
        </div>
        <Anchor title="Rendering & uploading" level={3} />
        <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
          <div className="flex-1 sm:w-[420px]">
            <RecapItem
              state="ready"
              rigthContent={
                <div className="progresscontainer" style={{ "--percent": 75 }}>
                  <div className="space-y-1.5">
                    <div className="text-xs font-bold">Step 3 of 3</div>
                    <div className="text-2xl font-bold">75%</div>
                    <div className="text-base">Creating Recap</div>
                    <span className="text-xs whitespace-normal px-2">
                      Do not close Stryda
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-xs font-bold">Step 3 of 3</div>
                    <div className="text-2xl font-bold">75%</div>
                    <div className="text-base">Creating Recap</div>
                    <span className="text-xs whitespace-normal px-2">
                      Do not close Stryda
                    </span>
                  </div>
                </div>
              }
            />
          </div>
          <div className="flex-1">
            <iframe
              className="rounded"
              width="100%"
              height="200"
              src="//jsfiddle.net/augustin_hiebel/hn47xy69/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <Anchor title="Status: finished" />
        <div className="mb-2">
          <ButtonStretchy variant="button-success">
            <span className="text-sm">
              <span>Recaps ready</span>
            </span>
            <span className="icon icon-video" data-badge="4" />
          </ButtonStretchy>
        </div>
        <Anchor title="Recap ready" level={3} />
        <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
          <div className="flex-1 sm:w-[420px]">
            <RecapItem
              state="ready"
              rigthContent={
                <>
                  <div className="flex-1 flex items-center justify-center">
                    <h5>This match is ready to be Recapped!</h5>
                  </div>
                  <div className="w-full flex gap-2 items-center">
                    <button
                      type="button"
                      className="flex-1 button button-sm button-primary"
                    >
                      <span>Create Recap</span>
                    </button>
                    <button
                      type="button"
                      className="button button-sm button-tertiary rounded-full"
                    >
                      <span className="icon icon-trash" />
                    </button>
                  </div>
                </>
              }
            />
          </div>
          <div className="flex-1">
            <iframe
              className="rounded"
              width="100%"
              height="200"
              src="//jsfiddle.net/augustin_hiebel/gvoz8mne/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
            ></iframe>
          </div>
        </div>
        <Anchor title="Recap rendered (not viewed)" level={3} />
        <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
          <div className="flex-1 sm:w-[420px]">
            <RecapItem
              state="ready"
              imageOverlay={
                <button
                  type="button"
                  class="button button-success button-lg rounded-full"
                >
                  <span class="icon icon-triangle-right" />
                </button>
              }
              rigthContent={
                <>
                  <div className="w-full flex-1 flex items-stretch justify-between">
                    <div className="flex-1 flex flex-col items-start justify-around text-left pl-1 leading-normal">
                      <h5>Recap created</h5>
                      <ul>
                        <li>Length: 00:59:00</li>
                        <li>Moments: 10</li>
                      </ul>
                    </div>
                    <div className="flex flex-col justify-between">
                      <Tooltip
                        tooltip={
                          <ul class="menu menu-rounded w-44">
                            <li>
                              <button>
                                <span>Open in Recap editor</span>
                              </button>
                            </li>
                            <li>
                              <button>
                                <span>Publish Recap</span>
                              </button>
                            </li>
                          </ul>
                        }
                      >
                        <button
                          type="button"
                          className="button button-sm button-tertiary rounded-full"
                        >
                          <span className="icon icon-dots-vertical" />
                        </button>
                      </Tooltip>
                      <button
                        type="button"
                        className="button button-sm button-tertiary rounded-full"
                      >
                        <span className="icon icon-trash" />
                      </button>
                    </div>
                  </div>
                </>
              }
            />
          </div>
          <div className="flex-1">
            <iframe
              className="rounded"
              width="100%"
              height="200"
              src="//jsfiddle.net/augustin_hiebel/gvoz8mne/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <Anchor title="Status: not premium" />
        <div className="mb-2">
          <ButtonStretchy variant="button-success">
            <span className="text-sm">
              <span>New matches found</span>
            </span>
            <span className="icon icon-video" data-badge="2" />
          </ButtonStretchy>
        </div>
        <Anchor title="Advertising Premium" level={3} />
        <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8">
          <div className="flex-1 sm:w-[420px]">
            <RecapItem
              state="ready"
              imageOverlay={
                <button
                  type="button"
                  class="button button-primary button-lg rounded-full"
                >
                  <span class="icon icon-triangle-right" />
                </button>
              }
              rigthContent={
                <>
                  <h5>Check it out Stryda Recap videos!</h5>
                  <p>This is an example of a Recap video</p>
                </>
              }
              actionContent={
                <button
                  type="button"
                  className="group surface flex items-center px-6 py-3 gap-4 interactive rounded-b"
                >
                  <PremiumLogo
                    src="https://res.cloudinary.com/gloot/image/upload/v1672241197/Stryda/logos/stryda-premium-logo-main-white-animated.svg"
                    width="145"
                    height="auto"
                    className="mx-auto"
                  />
                  <p className="flex-1 text-sm leading-tight">
                    Get Recaps of{" "}
                    <b className="text-ui-100">your best moments</b> in your
                    favorite games - automatically!
                  </p>
                  <span className="icon icon-ctrl-right text-premium-500 group-hover:translate-x-1 group-hover:text-ui-100 transition-all ease-in-out duration-150" />
                </button>
              }
            />
          </div>
          <div className="flex-1">
            <iframe
              className="rounded"
              width="100%"
              height="200"
              src="//jsfiddle.net/augustin_hiebel/2rfyLagu/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <Anchor title="Modals" />
        <Anchor title="Recap preview" level={3} />
        <div className="mb-4">
          <RecapPreview />
        </div>
        <Anchor title="Recap published" level={3} />
        <div className="mb-4 max-w-sm">
          <RecapPublished />
        </div>
        <Anchor title="Delete recording confirmation" level={3} />
        <div className="mb-4 max-w-sm">
          <RecordingDeletedConfirmation />
        </div>
      </div>
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
