import React, { useContext, useState, useEffect } from "react";

import Lottie from "lottie-react";
import LottieExplosion from "../../../assets/animations/explosion_stryda_1.json";
import { UiContext } from "../../../contexts/ui.js";
import { VariablesContext } from "../../../contexts/variables";

export default function ModalClaimLadderRewards(props) {
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);
  const [submitting, setSubmitting] = useState(false);
  const [anim1, setAnim1] = useState(false);

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

  useEffect(() => {
    setTimeout(() => {
      setAnim1(true);
    }, 400);
  }, []);

  return (
    <>
      <div className="relative z-10 max-w-sm w-full">
        <div className="modal surface-transparent w-full">
          {/*
          <button
            type="button"
            className="button button-secondary button-close"
            onClick={uiContext.closeModal}
          >
            <span className="icon icon-e-remove" />
          </button>
          */}
          <div className="modal-content">
            <div className="modal-body text-center">
              <h2 className="modal-title animate-slide-in-top">
                Congratulations
              </h2>
              <div className="flex gap-8 items-start justify-center leading-tight mt-4">
                <div>
                  <div className="relative">
                    <div className="lottie-blur absolute inset-0 flex items-center justify-center">
                      <Lottie
                        animationData={LottieExplosion}
                        loop={false}
                        autoplay={true}
                      />
                    </div>
                    <img
                      className="mx-auto animate-fire-in animate-delay"
                      style={{ "--delay": "calc( 1 * 0.2s)" }}
                      src="https://res.cloudinary.com/gloot/image/upload/v1672157994/Stryda/currencies/Reward-centered-coin-medium.png"
                      width="180"
                      height="auto"
                      alt=""
                    />
                  </div>

                  <div className="flex gap-2 items-baseline justify-center">
                    <div className="text-4xl text-currency-1-500">15</div>
                    <div className="uppercase text-lg text-currency-1-500">Coins</div>
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <div className="lottie-blur absolute inset-0 flex items-center justify-center">
                      {anim1 && (
                        <Lottie
                          animationData={LottieExplosion}
                          loop={false}
                          autoplay={true}
                        />
                      )}
                    </div>
                    <img
                      className="mx-auto animate-fire-in animate-delay"
                      style={{ "--delay": "calc( 2 * 0.2s)" }}
                      src="https://res.cloudinary.com/gloot/image/upload/v1674486539/Stryda/currencies/Reward-centered-token-large.png"
                      width="180"
                      height="auto"
                      alt=""
                    />
                  </div>
                  <div className="flex gap-2 items-baseline justify-center">
                    <div className="text-4xl text-currency-2-500">3</div>
                    <div className="uppercase text-lg text-currency-2-500">Tokens</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-center">
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
          </div>
        </div>
      </div>
      {/*
      <div className="fixed inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="lottie-blur h-[75vh] w-[75vh] flex items-center justify-center">
          <Lottie
            animationData={LottieExplosion}
            loop={false}
            autoplay={true}
          />
        </div>
      </div>
      */}
    </>
  );
}
