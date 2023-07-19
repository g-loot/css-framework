import React, { useContext, useState, useEffect } from "react";

import Lottie from "lottie-react";
import LottieExplosionLvl1 from "../../assets/animations/explosion_stryda_5.json";
import LottieExplosionLvl2 from "../../assets/animations/explosion_stryda_6.json";
import LottieExplosionLvl3 from "../../assets/animations/explosion_stryda_7.json";
import LottieExplosionLvl4 from "../../assets/animations/explosion_stryda_8.json";
import LottieExplosionLvl5 from "../../assets/animations/explosion_stryda_9.json";
import { UiContext } from "../../contexts/ui.js";
import { usePrototypeData } from "../../contexts/prototype";
import AchievementFrame from "../../components/Achievements/AchievementFrame";
import AchievementIcon from "../../components/Achievements/AchievementIcon";

export default function ModalAchievementReceived(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const [submitting, setSubmitting] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(false);
  const item = props.item || prototype.getAchievementitemByID(1, 1);
  const level = item.level || 5;
  const percent = item.percent || 92;
  const progress = item.progress || 8;
  const from = item.from || "100";
  const to = item.to || "100";

  useEffect(() => {
    setSelectedAchievement(prototype.getAchievementitemByID(1, item.item));
  }, [item]);

  function LottieExplosion(level) {
    if (level === 1) {
      return LottieExplosionLvl1;
    } else if (level === 2) {
      return LottieExplosionLvl2;
    } else if (level === 3) {
      return LottieExplosionLvl3;
    } else if (level === 4) {
      return LottieExplosionLvl4;
    } else if (level === 5) {
      return LottieExplosionLvl5;
    }
  }

  const generateDescription = (description, to) => {
    const variable = to;
    const regex = /\[X\]/g;
    const string = description;
    const replacedString = string.replace(regex, variable);
    return replacedString;
  };

  function closeModalWithDelay() {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      uiContext.closeModal();
    }, 1000);
  }

  return (
    <>
      {selectedAchievement && (
        <>
          <div className="relative z-10 max-w-sm w-full">
            <div className="modal modal-center">
              <button
                type="button"
                className="button button-secondary button-close"
                onClick={uiContext.closeModal}
              >
                <span className="icon icon-e-remove" />
              </button>
              <div className="modal-content">
                <div className="modal-body text-center">
                  <h2 className="h4 modal-title animate-slide-in-top">
                    Achievement unlocked!
                  </h2>
                  <div className="animate-slide-in-bottom space-y-4 w-4/5 mx-auto">
                    <div className="w-full achievement">
                      <i />
                      <i />
                      <div className={`achievement-level-${level}`}>
                        <AchievementFrame
                          url={`https://res.cloudinary.com/gloot/image/upload/Stryda/achievements/frames/achievement-frame-lvl${level}-animated.svg`}
                        />
                        <AchievementIcon
                          url={`https://res.cloudinary.com/gloot/image/upload/Stryda/achievements/icons/achievement-icon-${selectedAchievement.icon}.svg`}
                        />
                      </div>
                      <div>
                        <div className="h4">{selectedAchievement.name}</div>
                        <div className="text-sm text-ui-300 uppercase font-bold">
                          Level {level}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 relative z-10">
                      <p className="leading-tight">
                        {generateDescription(
                          selectedAchievement.description,
                          to
                        )}
                      </p>
                      <div className="flex items-center gap-4 leading-none">
                        <div
                          className="progressbar progressbar-secondary w-full"
                          style={{
                            "--percent": percent,
                            "--progress": progress,
                          }}
                        >
                          <div />
                          <div />
                        </div>
                        <div className="flex-none mb-0.5">
                          <span>{from}</span> / <span>{to}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-action">
                  <button
                    type="button"
                    className={`button flex-1 button-primary ${
                      submitting ? "is-loading" : ""
                    }`}
                    onClick={() => {
                      uiContext.openToastr({
                        text: "Favorite achievement updated",
                        color: "green",
                        autoDelete: true,
                        autoDeleteDelay: 2500,
                      });
                      uiContext.closeModal();
                    }}
                  >
                    <span>Show on player card</span>
                  </button>
                  <button
                    type="button"
                    className={`button flex-1 button-secondary ${
                      submitting ? "is-loading" : ""
                    }`}
                    onClick={() => uiContext.closeModal()}
                  >
                    <span>Close</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-20 flex items-center justify-center pointer-events-none">
            <div className="lottie-blur h-[75vh] w-[75vh] flex items-center justify-center">
              <Lottie
                animationData={LottieExplosion(level)}
                loop={false}
                autoplay={true}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
