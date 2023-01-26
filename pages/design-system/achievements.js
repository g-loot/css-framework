import React, { useState, useContext } from "react";

import Footer from "../../components/Footer/Footer";
import { getLayout } from "../../components/DesignSystem/DSLayout";
import AchievementFrame from "../../components/Achievements/AchievementFrame";
import AchievementIcon from "../../components/Achievements/AchievementIcon";
import { UiContext } from "../../contexts/ui";
import ModalAchievementReceived from "../prototype/modal-achievementreceived";

const DSpage = () => {
  const uiContext = useContext(UiContext);
  function openModal() {
    uiContext.openModal(<ModalAchievementReceived />);
  }
  return (
    <>
      <h1 className="mb-2">Achievements</h1>

      {/* Structure */}
      <div className="mb-12" id="structure">
        <h2 className="h3 mb-3">Structure</h2>
        <div className="pt-4 surface sm:rounded-lg p-4 flex flex-wrap items-center justify-center gap-8 mb-4">
          <div className="w-32 h-32 achievement">
            <i />
            <i />
            <div className="achievement-level-1">
              <AchievementFrame url="https://res.cloudinary.com/gloot/image/upload/v1670405826/Marketing/2022_prototype/Achievements/achievement-frame-lvl1-animated.svg" />
              <AchievementIcon url="https://res.cloudinary.com/gloot/image/upload/v1670332387/Marketing/2022_prototype/Achievements/achivement-icon-mission.svg" />
            </div>
            <span></span>
          </div>
          <div className="w-32 h-32 achievement">
            <i />
            <i />
            <div className="achievement-level-2">
              <AchievementFrame url="https://res.cloudinary.com/gloot/image/upload/v1670405826/Marketing/2022_prototype/Achievements/achievement-frame-lvl2-animated.svg" />
              <AchievementIcon url="https://res.cloudinary.com/gloot/image/upload/v1670332387/Marketing/2022_prototype/Achievements/achivement-icon-missionladder.svg" />
            </div>
          </div>
          <div className="w-32 h-32 achievement">
            <i />
            <i />
            <div className="achievement-level-3">
              <AchievementFrame url="https://res.cloudinary.com/gloot/image/upload/v1670405826/Marketing/2022_prototype/Achievements/achievement-frame-lvl3-animated.svg" />
              <AchievementIcon url="https://res.cloudinary.com/gloot/image/upload/v1670332387/Marketing/2022_prototype/Achievements/achivement-icon-streak.svg" />
            </div>
          </div>
          <div className="w-32 h-32 achievement">
            <i />
            <i />
            <div className="achievement-level-4">
              <AchievementFrame url="https://res.cloudinary.com/gloot/image/upload/v1670405826/Marketing/2022_prototype/Achievements/achievement-frame-lvl4-animated.svg" />
              <AchievementIcon url="https://res.cloudinary.com/gloot/image/upload/v1670332387/Marketing/2022_prototype/Achievements/achivement-icon-sololadder.svg" />
            </div>
          </div>
          <div className="w-32 h-32 achievement">
            <i />
            <i />
            <div className="achievement-level-5">
              <AchievementFrame url="https://res.cloudinary.com/gloot/image/upload/v1670405826/Marketing/2022_prototype/Achievements/achievement-frame-lvl5-animated.svg" />
              <AchievementIcon url="https://res.cloudinary.com/gloot/image/upload/v1670332387/Marketing/2022_prototype/Achievements/achivement-icon-clansupporter.svg" />
            </div>
          </div>
        </div>
        <iframe
          className="rounded"
          width="100%"
          height="300"
          src="//jsfiddle.net/augustin_hiebel/wyd2ro39/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
        ></iframe>
      </div>

      {/* Modal */}
      <div className="mb-12" id="modal">
        <h2 className="h3 mb-3">Modal</h2>

        <div className="mb-10">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-3">
              <div className="surface rounded-lg p-4 text-center">
                <button
                  type="button"
                  className="button button-primary"
                  onClick={openModal}
                >
                  <span>Open modal</span>
                </button>
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
