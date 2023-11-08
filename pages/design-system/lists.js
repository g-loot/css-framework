import React from "react";
import { getLayout } from "@/components/DesignSystem/DSLayout";
import Anchor from "@/components/DesignSystem/DSanchor";

const DSpage = () => {
  return (
    <>
      <h1 className="mb-8">Lists</h1>

      {/* Bullet list */}
      <div className="mb-12">
        <Anchor title="Bullet list" />

        {/* simple list */}
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <ul className="list-bullet">
                  <li>Get access to exclusive premium missions.</li>
                  <li>
                    Earn extra XP to reach your Rewards milestones faster.
                  </li>
                  <li>Enjoy the Stryda experience without ads.</li>
                </ul>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/52aLcjkb/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Colors */}
      <div className="mb-12">
        <Anchor title="Colors" />

        {/* simple list */}
        <div className="surface rounded-lg p-4">
          <div className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12">
            <h3 className="h4 mb-6 lg:mb-10">Premium</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <ul className="list-bullet list-premium">
                  <li>Get access to exclusive premium missions.</li>
                  <li>
                    Earn extra XP to reach your Rewards milestones faster.
                  </li>
                  <li>Enjoy the Stryda experience without ads.</li>
                </ul>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/ad6jn0zh/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12">
            <h3 className="h4 mb-6 lg:mb-10">Blue</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <ul className="list-bullet list-blue">
                  <li>Get access to exclusive premium missions.</li>
                  <li>
                    Earn extra XP to reach your Rewards milestones faster.
                  </li>
                  <li>Enjoy the Stryda experience without ads.</li>
                </ul>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/xvos2dbj/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="h4 mb-6 lg:mb-10">Purple</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <ul className="list-bullet list-purple">
                  <li>Get access to exclusive premium missions.</li>
                  <li>
                    Earn extra XP to reach your Rewards milestones faster.
                  </li>
                  <li>Enjoy the Stryda experience without ads.</li>
                </ul>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/b2wh7y9e/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
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
