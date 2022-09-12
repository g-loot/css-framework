import React from "react";
import TextareaExpandable from "../../components/Textarea/TextareaExpandable";
import { getLayout } from "../../components/DesignSystem/DSLayout";

const DSpage = () => {
  return (
    <>
      <h1 className="mb-2">Lists</h1>

      {/* Bullet list */}
      <div className="mb-12" id="bullet-list">
        <h2 className="h3 mb-3">Bullet list</h2>

        {/* simple list */}
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <ul className="list-bullet">
                  <li>
                    Get access to exclusive premium missions.
                  </li>
                  <li>
                    Earn extra XP to reach your Rewards milestones faster.
                  </li>
                  <li>
                    Enjoy the G-Loot experience without ads.
                  </li>
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
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
