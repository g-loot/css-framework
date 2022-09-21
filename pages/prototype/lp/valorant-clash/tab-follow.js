import React, { useRef } from "react";
import { TwitchChat, TwitchPlayer } from "react-twitch-embed";

export default function ValorantClashTabFollow() {
  const embed = useRef(); // We use a ref instead of state to avoid rerenders.

  const handleReady = (e) => {
    embed.current = e;
  };
  return (
    <>
      <section
        className="py-12 animate-slide-in-bottom animate-delay"
        style={{ "--delay": "calc(1 * 0.1s)" }}
      >
        <div className="container max-w-xl px-4 mx-auto">
          <div className="drawer drawer-mobile h-[600px]">
            <input id="drawer-chat" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-start">
              <div className="rounded-xl overflow-hidden w-full">
                <TwitchPlayer
                  className="aspect-video !w-full !h-auto"
                  channel="riotgames"
                  autoplay
                  muted
                  onReady={handleReady}
                />
              </div>
              <div className="block lg:hidden mt-4">
              <label
                htmlFor="drawer-chat"
                className="button button-primary drawer-button"
              >
                Open chat
              </label>
              </div>
            </div>
            <div className="drawer-side">
              <label htmlFor="drawer-chat" className="drawer-overlay"></label>
              <div className="px-4 overflow-y-auto w-1/2 lg:w-80 bg-ui-700/0 text-base-content flex items-start">
                <div className="rounded-xl overflow-hidden">
                  <TwitchChat channel="riotgames" darkMode />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="py-12 animate-slide-in-bottom animate-delay"
        style={{ "--delay": "calc(2 * 0.1s)" }}
      >
        <div className="container max-w-2xl px-4 mx-auto flex items-stretch justify-center gap-4"></div>
      </section>
    </>
  );
}
