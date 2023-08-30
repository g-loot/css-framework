import { useContext, useState } from "react";

import Lottie from "lottie-react";
import LottieExplosion from "@/assets/animations/explosion_stryda_1.json";
import Avatar from "@/components/Avatar/Avatar";
import { UiContext } from "@/contexts/ui.js";

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
        <div className="modal modal-center">
          <div className="modal-content">
            <div className="modal-body">
              <h2
                className="animate-fade-in animate-delay"
                style={{
                  "--delay": "calc(5 * 0.5s)",
                }}
              >
                Level up!
              </h2>
              <div className="mt-8 mb-4 relative flex items-center justify-center">
                <div className="absolute -inset-16 z-20 flex items-center justify-center pointer-events-none">
                  <div className="lottie-blur h-full aspect-square flex items-center justify-center">
                    <Lottie
                      animationData={LottieExplosion}
                      loop={false}
                      autoplay={true}
                    />
                  </div>
                </div>
                <div className="animate-fire-in relative">
                  <Avatar size="avatar-2xl" id={1} hasLevel={false} />
                </div>
                <div
                  className="absolute bottom-0 z-30 bg-ui-700 rounded-full px-6 border border-ui-400 animate-fire-in animate-delay"
                  style={{
                    "--delay": "calc(1 * 0.5s)",
                  }}
                >
                  <span className="stepper font-medium text-4xl text-white leading-tight">
                    <span style={{ "--value": "3" }} />
                    <span style={{ "--value": "1" }} />
                    <span style={{ "--value": "2" }} />
                  </span>
                </div>
              </div>
              <h3
                className="text-2xl text-main animate-fade-in animate-delay"
                style={{
                  "--delay": "calc(5 * 0.5s)",
                }}
              >
                You have reached{" "}
                <span className="text-main inline-flex items-center justify-center gap-2">
                  <span>15 000</span>
                  <span className="icon icon-xp-symbol text-5xl text-main" />
                </span>
              </h3>
              <p
                className="text-ui-100 animate-fade-in animate-delay"
                style={{
                  "--delay": "calc(5 * 0.5s)",
                }}
              >
                10 000 XP until next level
              </p>
            </div>
            <div className="modal-action">
              <button
                type="button"
                className={`button button-main w-full md:w-1/2 ${
                  submitting ? "is-loading" : ""
                } animate-slide-in-bottom`}
                onClick={closeModalWithDelay}
              >
                <span>Got it</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
