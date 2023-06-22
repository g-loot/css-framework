import React, { useState, useContext } from "react";

import Footer from "../../components/Footer/Footer";
import { getLayout } from "../../components/DesignSystem/DSLayout";
import AchievementFrame from "../../components/Achievements/AchievementFrame";
import AchievementIcon from "../../components/Achievements/AchievementIcon";
import { UiContext } from "../../contexts/ui";
import { usePrototypeData } from "../../contexts/prototype";
import ModalAchievementReceived from "../prototype/modal-achievementreceived";

const DSpage = () => {
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const defaultAchievementLevel = 4;
  const achievementLevels = [0, 1, 2, 3, 4, 5];
  const [achievementLevel, setAchievementLevel] = useState(
    achievementLevels[defaultAchievementLevel]
  );

  function handleLevel(e) {
    setAchievementLevel(e.target.value);
  }

  function openModalAchievementReceived(item) {
    uiContext.openModal(<ModalAchievementReceived item={item} />);
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
              <AchievementFrame url="https://res.cloudinary.com/gloot/image/upload/v1678871888/Stryda/achievements/frames/achievement-frame-lvl1-animated.svg" />
              <AchievementIcon url="https://res.cloudinary.com/gloot/image/upload/v1678872380/Stryda/achievements/icons/achievement-icon-missionhunter.svg" />
            </div>
            <span></span>
          </div>
          <div className="w-32 h-32 achievement">
            <i />
            <i />
            <div className="achievement-level-2">
              <AchievementFrame url="https://res.cloudinary.com/gloot/image/upload/v1678871888/Stryda/achievements/frames/achievement-frame-lvl2-animated.svg" />
              <AchievementIcon url="https://res.cloudinary.com/gloot/image/upload/v1678872380/Stryda/achievements/icons/achievement-icon-juggernaut.svg" />
            </div>
          </div>
          <div className="w-32 h-32 achievement">
            <i />
            <i />
            <div className="achievement-level-3">
              <AchievementFrame url="https://res.cloudinary.com/gloot/image/upload/v1678871888/Stryda/achievements/frames/achievement-frame-lvl3-animated.svg" />
              <AchievementIcon url="https://res.cloudinary.com/gloot/image/upload/v1678872380/Stryda/achievements/icons/achievement-icon-ladderchampion.svg" />
            </div>
          </div>
          <div className="w-32 h-32 achievement">
            <i />
            <i />
            <div className="achievement-level-4">
              <AchievementFrame url="https://res.cloudinary.com/gloot/image/upload/v1678871888/Stryda/achievements/frames/achievement-frame-lvl4-animated.svg" />
              <AchievementIcon url="https://res.cloudinary.com/gloot/image/upload/v1678872380/Stryda/achievements/icons/achievement-icon-kingoftokens.svg" />
            </div>
          </div>
          <div className="w-32 h-32 achievement">
            <i />
            <i />
            <div className="achievement-level-5">
              <AchievementFrame url="https://res.cloudinary.com/gloot/image/upload/v1678871888/Stryda/achievements/frames/achievement-frame-lvl5-animated.svg" />
              <AchievementIcon url="https://res.cloudinary.com/gloot/image/upload/v1678872380/Stryda/achievements/icons/achievement-icon-strider.svg" />
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
                  onClick={openModalAchievementReceived.bind(
                    this,
                    prototype.getAchievementitemByID(1, 1),
                  )}
                >
                  <span>Open modal</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements List */}
      <div className="mb-12" id="achievements-list">
        <div className="flex justify-between mb-2">
          <h2 className="h3 mb-3">Achievements list</h2>
          <div className="form-group form-select flex items-center gap-2">
            <label htmlFor="colour" className="m-0">
              Level:
            </label>
            <select id="colour" onChange={(e) => handleLevel(e)}>
              {achievementLevels.map((value, key) => (
                <option
                  key={key}
                  value={value}
                  selected={defaultAchievementLevel === value}
                >
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {prototype
            .getAchievementsectionByID(1)
            .items.map((item, itemIndex) => (
              <>
                {!item.isDisabled && (
                  <div
                    key={itemIndex}
                    className={`surface sm:rounded-lg p-2 pr-4 flex items-center gap-6`}
                  >
                    <div
                      className={`w-32 h-32 achievement cursor-pointer ${
                        achievementLevel === "5" ? "is-completed" : ""
                      }`}
                      onClick={openModalAchievementReceived.bind(this, item)}
                    >
                      <i />
                      <i />
                      <div className={`achievement-level-${achievementLevel}`}>
                        <AchievementFrame
                          url={`https://res.cloudinary.com/gloot/image/upload/v1678871888/Stryda/achievements/frames/achievement-frame-lvl${achievementLevel}-animated.svg`}
                        />
                        <AchievementIcon
                          url={`https://res.cloudinary.com/gloot/image/upload/v1685365593/Stryda/achievements/icons/achievement-icon-${item.icon}.svg`}
                        />
                      </div>
                      {achievementLevel > 0 && (
                        <span className="text-sm uppercase">
                          Level {achievementLevel}
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="h5">{item.name}</h3>
                      <p className="text-ui-300 mt-2">{item.description}</p>
                    </div>
                  </div>
                )}
              </>
            ))}
        </div>
      </div>
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
