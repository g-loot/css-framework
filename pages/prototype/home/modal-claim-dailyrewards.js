import React, { useContext, useState } from "react";

import Lottie from "lottie-react";
import LottieExplosion from "../../../assets/animations/explosion-2.json";
import { UiContext } from "../../../contexts/ui.js";
import { VariablesContext } from "../../../contexts/variables";

export default function ModalClaimDailyRewards(props) {
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);
  const [submitting, setSubmitting] = useState(false);
  function closeModalWithDelay() {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr({size: "small", text: "Reward claimed successfully", color: "green", autoDelete: true, autoDeleteDelay: 2500});
      variablesContext.claimDailyReward();
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
              <h2 className="modal-title animate-slide-in-top">
                Congratulations
              </h2>
              <div className="flex gap-8 items-start justify-center leading-tight mt-4 animate-slide-in-bottom">
                <div className="">
                  <img
                    className="mx-auto"
                    src="https://res.cloudinary.com/gloot/image/upload/v1654171544/Marketing/2022_prototype/CurrencyRewards/Reward-centered-coin-small.png"
                    width="140"
                    height="auto"
                    alt=""
                  />
                  <div className="flex gap-2 items-baseline justify-center">
                    <div className="text-4xl font-headings text-gold-500">
                      5
                    </div>
                    <div className="font-headings font-bold uppercase text-lg text-gold-500">
                      Coins
                    </div>
                  </div>
                </div>
                <div className="">
                  <img
                    className="mx-auto"
                    src="https://res.cloudinary.com/gloot/image/upload/v1654171544/Marketing/2022_prototype/CurrencyRewards/Reward-centered-token-extrasmall.png"
                    width="140"
                    height="auto"
                    alt=""
                  />
                  <div className="flex gap-2 items-baseline justify-center">
                    <div className="text-4xl font-headings text-purple-500">
                      1
                    </div>
                    <div className="font-headings font-bold uppercase text-lg text-purple-500">
                      Token
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <button
                  type="button"
                  className={`button button-claim w-full ${
                    submitting ? "is-loading" : ""
                  }`}
                  onClick={closeModalWithDelay}
                >
                  <span>Claim rewards</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-0 flex items-center justify-center">
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
