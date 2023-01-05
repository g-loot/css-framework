import React, { useContext, useState } from "react";

import Lottie from "lottie-react";
import LottieExplosion from "../../assets/animations/explosion-7.json";
import { UiContext } from "../../contexts/ui.js";
import { VariablesContext } from "../../contexts/variables";
import AchievementFrame from "../../components/Achievements/AchievementFrame";
import AchievementIcon from "../../components/Achievements/AchievementIcon";

export default function ModalAchievementReceived(props) {
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);
  const [submitting, setSubmitting] = useState(false);
  const level = props.level || 5;
  const icon = props.icon || "missionladder";
  const name = props.name || "Reward Ladder";
  const description =
    props.description || "Complete the entire mission ladder in 1 day.";
  const percent = props.percent || 50;
  const progress = props.progress || 12;
  const from = props.from || "24";
  const to = props.to || "300 XP";

  function closeModalWithDelay() {
    setSubmitting(true);
    window.location.href = "/prototype/profile/1/achievements";
    setTimeout(() => {
      setSubmitting(false);
      uiContext.closeModal();
    }, 1000);
  }

  return (
    <>
      <div className="relative z-10 max-w-sm w-full">
        <div className="modal surface-transparent w-full">
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
                Achievement unlocked
              </h2>
              <div className="animate-slide-in-bottom space-y-4 my-4 w-4/5 mx-auto">
                <div className="surface surface-halo rounded-xl mx-auto p-2">
                  <div className="w-full achievement">
                    <i />
                    <i />
                    <div className={`achievement-level-${level}`}>
                      <AchievementFrame
                        url={`https://res.cloudinary.com/gloot/image/upload/v1670405826/Marketing/2022_prototype/Achievements/achievement-frame-lvl${level}-animated.svg`}
                      />
                      <AchievementIcon
                        url={`https://res.cloudinary.com/gloot/image/upload/v1670332387/Marketing/2022_prototype/Achievements/achivement-icon-${icon}.svg`}
                      />
                    </div>
                    <div>
                      <div className="h4">{name}</div>
                      <div className="text-sm text-ui-300 uppercase font-bold">
                        Level {level}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 relative z-10">
                    <p>{description}</p>
                    <div className="flex items-center gap-4 leading-none pb-2">
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
                    <button
                    type="button"
                    className={`button button-claim w-full ${
                      submitting ? "is-loading" : ""
                    }`}
                    onClick={closeModalWithDelay}
                  >
                    <span>View achievements</span>
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="lottie-blur h-[75vh] w-[75vh] flex items-center justify-center">
          <Lottie
            animationData={LottieExplosion}
            loop={false}
            autoplay={true}
          />
        </div>
      </div>
    </>
  );
}
