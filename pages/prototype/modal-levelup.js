import { useContext, useState } from "react";

import Lottie from "lottie-react";
import LottieExplosion from "../../assets/animations/explosion_stryda_1.json";
import Avatar from "../../components/Avatar/Avatar";
import { UiContext } from "../../contexts/ui.js";

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
          <div className="modal-content px-6 py-8 gap-6">
            <div className="modal-body">
              <div className="flex flex-col items-center gap-6 rounded-xl w-full">
                <h2 className="animate-slide-in-top">You have leveled up!</h2>
                <div className="animate-slide-in-bottom flex flex-col items-center gap-6">
                  <div className="w-full relative">
                    <Avatar size="avatar-2xl" id={11} hasLevel={false} />
                    <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 z-30 bg-ui-700 rounded-full px-6 border border-ui-500">
                      <span className="stepper pt-1 font-medium text-4xl text-white">
                        <span style={{ "--value": "3" }} />
                        <span style={{ "--value": "1" }} />
                        <span style={{ "--value": "2" }} />
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl text-main">
                      You have reached{" "}
                      <span className="text-main inline-flex items-center justify-center gap-2">
                        <span className="font-medium">15000</span>
                        <span className="icon icon-xp-symbol text-4xl text-main" />
                      </span>
                    </h3>
                    <p>You are 10000 XP from next level.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-actions">
              <button
                type="button"
                className={`button button-main ${
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
