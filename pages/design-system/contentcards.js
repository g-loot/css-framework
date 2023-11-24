import React from "react";
import { getLayout } from "@/components/DesignSystem/DSLayout";
import Anchor from "@/components/DesignSystem/DSanchor";

const DSpage = () => {
  return (
    <>
      <h1 className="mb-8">Content card</h1>

      {/* Structure */}
      <div className="mb-12">
        <Anchor title="Structure" />

        <div className="">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-start items-start">
              <div className="card w-96">
                <div className="card-image">
                  <figure>
                    <img
                      src="https://res.cloudinary.com/gloot/image/upload/v1644831543/Marketing/202109_gloot2/mission-dota2_1.jpg"
                      alt="Dota 2"
                    />
                  </figure>
                </div>
                <div className="card-body">
                  <h3 className="card-title text-2xl">
                    New missions available
                  </h3>
                  <p className="text-ui-200">
                    We just released a bunch of new missions for Dota 2. Check
                    them out.
                  </p>
                  <div className="card-actions">
                    <button type="button" className="button button-primary">
                      <span>Learn more</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <iframe
                className="rounded"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/4m1bjexf/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* With chips */}
      <div className="mb-12">
        <Anchor title="With chips" />

        <div className="">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-start items-start">
              <div className="card w-96">
                <div className="card-image">
                  <figure>
                    <img
                      src="https://res.cloudinary.com/gloot/image/upload/v1644831543/Marketing/202109_gloot2/mission-csgo_5.jpg"
                      alt="CS:GO"
                    />
                  </figure>
                </div>
                <div className="card-body">
                  <h3 className="card-title text-2xl flex items-center gap-2">
                    <span>New missions available </span>
                    <div className="chip chip-sm chip-sliced">
                      <span>New</span>
                    </div>
                  </h3>
                  <p className="text-ui-200">
                    We just released a bunch of new missions for CS:GO. Check
                    them out.
                  </p>
                  <div className="card-actions">
                    <div className="chip chip-sm chip-secondary">
                      <span>Most kills</span>
                    </div>
                    <div className="chip chip-sm chip-secondary">
                      <span>Most damage</span>
                    </div>
                    <div className="chip chip-sm chip-secondary">
                      <span>Most double kills</span>
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
                src="//jsfiddle.net/augustin_hiebel/wzrbfnc6/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* With cover image */}
      <div className="mb-12">
        <Anchor title="With cover image" />

        <div className="">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-start items-start">
              <div className="card card-cover w-96">
                <div className="card-image">
                  <figure>
                    <img
                      src="https://res.cloudinary.com/gloot/image/upload/v1644831629/Marketing/202109_gloot2/mission-valorant_1.jpg"
                      alt="CS:GO"
                    />
                  </figure>
                </div>
                <div className="card-body">
                  <h3 className="card-title text-2xl">Showdown open</h3>
                  <p className="text-ui-200">
                    Our VALORANT Showdown registration just opened. Time to
                    suscribe!
                  </p>
                  <div className="card-actions">
                    <button type="button" className="button button-primary">
                      <span>Learn more</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <iframe
                className="rounded"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/kvnmy8re/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* With no image */}
      <div className="mb-12">
        <Anchor title="With no image" />

        <div className="">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-start items-start">
              <div className="card w-96">
                <div className="card-body">
                  <h3 className="card-title text-2xl">Showdown open</h3>
                  <p className="text-ui-200">
                    Our VALORANT Showdown registration just opened. Time to
                    suscribe!
                  </p>
                  <div className="card-actions">
                    <button type="button" className="button button-primary">
                      <span>Learn more</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <iframe
                className="rounded"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/x9vtz3er/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* With custom color */}
      <div className="mb-12">
        <Anchor title="With custom color" />

        <div className="">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-start items-start">
              <div className="card w-96 bg-gradient-to-r from-premium-300 to-premium-700">
                <div className="card-body text-ui-700">
                  <h3 className="card-title text-2xl text-ui-700">Premium</h3>
                  <p>
                    Join Stryda Premium to unlock the full gaming experience.
                  </p>
                  <div className="card-actions">
                    <button type="button" className="button button-tertiary">
                      <span>View plans</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <iframe
                className="rounded"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/n62p18cb/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
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
