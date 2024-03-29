import React from "react";
import { getLayout } from "@/components/DesignSystem/DSLayout";
import Anchor from "@/components/DesignSystem/DSanchor";

const DSpage = () => {
  return (
    <>
      <h1 className="mb-2">Empty states</h1>

      {/* Structure */}
      <div className="mb-12">
        <Anchor title="Structure" />

        <div className="surface rounded-lg px-4 py-8 text-center">
          <div className="max-w-xs mx-auto">
            <span className="icon icon-ladder text-6xl text-ui-500" />
            <div className="mt-2 mb-6">
              <p className="text-sm text-ui-400">You have no active Ladder</p>
              <p className="text-lg text-ui-300">
                Click the button to browse available Ladders
              </p>
            </div>
            <button type="button" className="button button-primary">
              <span>Browse Ladders</span>
            </button>
          </div>
        </div>

        <div className="mt-4">
          <iframe
            className="rounded"
            width="100%"
            height="300"
            src="//jsfiddle.net/augustin_hiebel/a614r7Ly/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
          ></iframe>
        </div>
      </div>

      {/* Without button */}
      <div className="mb-12">
        <Anchor title="Without button" />

        <div className="surface rounded-lg px-4 py-8 text-center">
          <div className="max-w-sm mx-auto">
            <span className="icon icon-video text-6xl text-ui-500" />
            <div className="mt-2 mb-6">
              <p className="text-sm text-ui-400">
                You have no recorded matches
              </p>
              <p className="text-lg text-ui-300">
                Make sure Stryda is up and running when you play.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <iframe
            className="rounded"
            width="100%"
            height="300"
            src="//jsfiddle.net/augustin_hiebel/a614r7Ly/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
          ></iframe>
        </div>
      </div>

      {/* With skip button */}
      <div className="mb-12">
        <Anchor title="With skip button" />

        <div className="surface rounded-lg px-4 py-8 text-center">
          <div className="max-w-xs mx-auto">
            <span className="icon icon-smile text-6xl text-ui-500" />
            <div className="mt-2 mb-6">
              <p className="text-sm text-ui-400">
                You&lsquo;ve successfully signed up
              </p>
              <p className="text-lg text-ui-300">
                Click the button to invite your friends
              </p>
            </div>
            <button type="button" className="button button-main">
              <span>Invite your friends</span>
            </button>
            <div className="mt-4">
              <a
                className="text-interaction-500 hover:interaction-300"
                href="#"
              >
                Skip
              </a>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <iframe
            className="rounded"
            width="100%"
            height="300"
            src="//jsfiddle.net/augustin_hiebel/1j4ak6o3/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
          ></iframe>
        </div>
      </div>

      {/* With input */}
      <div className="mb-12">
        <Anchor title="With input" />

        <div className="surface rounded-lg px-4 py-8 text-center">
          <div className="max-w-xs mx-auto">
            <span className="icon icon-manga-63 text-6xl text-ui-500" />
            <div className="mt-2 mb-6">
              <p className="text-sm text-ui-400">
                You are not following anyone
              </p>
              <p className="text-lg text-ui-300">Start to meet new friends</p>
            </div>
            <div className="form-group">
              <div className="input-group">
                <button type="button" className="button button-primary">
                  <span>Search</span>
                </button>
                <input type="text" name="search-friends" id="search-friends" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <iframe
            className="rounded"
            width="100%"
            height="300"
            src="//jsfiddle.net/augustin_hiebel/dtsabyvx/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
          ></iframe>
        </div>
      </div>

      {/* With image */}
      <div className="mb-12">
        <Anchor title="With image" />

        <div className="surface rounded-lg px-4 py-8 text-center">
          <div className="max-w-xs mx-auto">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/gloot/image/upload/v1659691391/Marketing/2022_prototype/Decoration-chat.webp"
              width="220"
              height="auto"
              alt=""
            />
            <div className="mt-2 mb-6">
              <p className="text-sm text-ui-400">Chat with your Clan</p>
              <p className="text-lg text-ui-300">
                Coordinate and have fun together!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <iframe
            className="rounded"
            width="100%"
            height="300"
            src="//jsfiddle.net/augustin_hiebel/8jf0xzat/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
          ></iframe>
        </div>
      </div>
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
