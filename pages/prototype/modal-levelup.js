import React, { useContext, useState } from "react";

import Lottie from "lottie-react";
import LottieExplosion from "../../assets/animations/explosion_stryda_1.json";
import { UiContext } from "../../contexts/ui.js";
import AnimatedNumber from "../../components/AnimatedNumber/AnimatedNumber";

export default function ModalLevelUp(props) {
  const uiContext = useContext(UiContext);
  const [submitting, setSubmitting] = useState(false);

  function closeModalWithDelay() {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      uiContext.closeModal();
    }, 1000);
  }

  return (
    <>
      <div className="relative z-10 max-w-sm w-full">
        <div className="modal modal-center surface-transparent w-full">
          <button
            type="button"
            className="button button-secondary button-close"
            onClick={uiContext.closeModal}
          >
            <span className="icon icon-e-remove" />
          </button>
          <div className="modal-content">
            <div className="modal-body">
              <h2 className="h4 modal-title animate-slide-in-top">
                Congratulations!
              </h2>
              <div className="animate-slide-in-bottom space-y-4 my-2 w-4/5 mx-auto">
                <div className="surface rounded-xl mx-auto p-2">
                  <div className="relative flex items-baselie justify-center gap-1 rounded bg-main p-8 mb-4">
                    <span className="stepper text-7xl lg:text-8xl font-headings text-ui-800">
                      <span style={{ "--value": "1" }} />
                      <span style={{ "--value": "4" }} />
                      <span style={{ "--value": "6" }} />
                    </span>
                    <span className="absolute h-4 w-4 top-2 left-2 border-t border-t-ui-800 border-l border-l-ui-800" />
                    <span className="absolute h-4 w-4 top-2 right-2 border-t border-t-ui-800 border-r border-r-ui-800" />
                    <span className="absolute h-4 w-4 bottom-2 left-2 border-b border-b-ui-800 border-l border-l-ui-800" />
                    <span className="absolute h-4 w-4 bottom-2 right-2 border-b border-b-ui-800 border-r border-r-ui-800" />
                  </div>
                  <h3>Level Up</h3>
                  <div className="flex justify-between items-baseline text-sm mt-2 mb-1">
                    <span>Level 146</span>
                    <span className="text-ui-300"><AnimatedNumber number={15000} /> XP</span>
                  </div>
                  <div
                    className="progressbar progressbar-secondary w-full mb-4"
                    style={{
                      "--percent": "75",
                      "--progress": "25",
                    }}
                  >
                    <div />
                    <div />
                  </div>
                  <button
                    type="button"
                    className={`button button-main w-full ${
                      submitting ? "is-loading" : ""
                    }`}
                    onClick={closeModalWithDelay}
                  >
                    <span>Got it</span>
                  </button>
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
