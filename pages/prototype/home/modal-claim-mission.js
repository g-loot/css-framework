import React, { useContext, useState } from "react";

import Lottie from "lottie-react";
import LottieExplosion from "../../../assets/animations/explosion_stryda_3.json";
import { UiContext } from "../../../contexts/ui.js";
import { VariablesContext } from "../../../contexts/variables";
import AnimatedNumber from "../../../components/AnimatedNumber/AnimatedNumber";
import { useRouter } from "next/router";
import XPBoostList from "../../../components/XPBoostList/XPBoostList";

export default function ModalClaimMission(props) {
  const uiContext = useContext(UiContext);
  const mission = props.mission;
  const variablesContext = useContext(VariablesContext);
  const xp = 50; //mission.xp !== undefined ? mission.xp : 50;
  const [submitting, setSubmitting] = useState(false);
  const { query } = useRouter();
  const isPremium = query.premium === "true" ? true : false;

  function percent() {
    if (isPremium) {
      return 1.65;
    } else {
      return 1.15;
    }
  }

  function closeModalWithDelay() {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr({
        size: "medium",
        text: "Reward claimed successfully",
        color: "green",
        autoDelete: true,
        autoDeleteDelay: 2500,
      });
      variablesContext.claimReward();
      uiContext.closeModal();
      setSubmitting(false);
    }, 1000);
  }

  return (
    <>
      <div className="relative z-10 max-w-sm w-full">
        <div className="modal w-full">
          <button
            type="button"
            className="button button-secondary button-close"
            onClick={uiContext.closeModal}
          >
            <span className="icon icon-e-remove" />
          </button>
          <div className="modal-content">
            <div className="modal-body text-center">
              <h2 className="modal-title animate-slide-in-top mb-6">
                Congratulations
              </h2>
              <XPBoostList isCompleted={false} isAnimated={true} />
              <div
                className=" animate-slide-in-bottom animate-delay"
                style={{ "--delay": "calc( 6 * 0.15s)" }}
              >
                <div className="flex gap-4 justify-center items-center mx-auto">
                  <div className="text-5xl text-gold-500 w-20 text-right">
                    <AnimatedNumber number={xp * percent()} />
                  </div>
                  <span className="icon icon-xp-symbol-outline text-8xl text-gold-500" />
                </div>
                <div className="mt-1 flex items-center gap-4 leading-none">
                  <div
                    className="progressbar progressbar-secondary w-full"
                    style={{
                      "--percent": 1200,
                      "--progress": 1200 + xp * percent(),
                    }}
                  >
                    <div />
                    <div />
                  </div>
                  <div className="flex-none mb-0.5 w-24 text-ui-300 text-sm text-right">
                    <span>
                      Total XP: <AnimatedNumber number={1200 + xp * percent()} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                className={`button button-claim button-lg w-72 ${
                  submitting ? "is-loading" : ""
                }`}
                onClick={closeModalWithDelay}
              >
                <span>Claim rewards</span>
              </button>
            </div>
              */}
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
