import React, { useContext, useState, useEffect } from "react";

import Lottie from "lottie-react";
import LottieExplosion from "@/assets/animations/explosion_stryda_1.json";
import { UiContext } from "@/contexts/ui.js";
import { VariablesContext } from "@/contexts/variables";
import { DataBattlepassRewards } from "@/mock-data/data-battlepass";
import ModalProfileBannerPurchaseCompleted from "../shop/profile-banner/modal-profilebannerpurchasecompleted";
import ModalAvatarFramePurchaseCompleted from "../shop/avatar-frame/modal-avatarframepurchasecompleted";

export default function ModalClaimBattlepassReward(props) {
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);
  const [submitting, setSubmitting] = useState(false);
  const [anim1, setAnim1] = useState(false);

  const rewardID = props.rewardID || 1;

  const getBattlepassRewardByID = (id) => {
    return DataBattlepassRewards.find((reward) => {
      return reward.id === parseInt(id);
    });
  };

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

  const EquipProfileBanner = (id) => {
    setSubmitting(true);
    window.location.href = `/stryda/profile/1?profilebanner=${id}`;
    setTimeout(() => {
      setSubmitting(false);
      uiContext.closeModal();
      //uiContext.openModal(<ModalProfileBannerPurchaseCompleted id={id} />);
    }, 1000);
  };

  const EquipAvatarFrame = (id) => {
    setSubmitting(true);
    window.location.href = `/stryda/profile/1?avatarframe=${id}`;
    setTimeout(() => {
      setSubmitting(false);
      uiContext.closeModal();
      //uiContext.openModal(<ModalAvatarFramePurchaseCompleted id={id} />);
    }, 1000);
  };

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
                  <div className="relative animate-fire-in animate-delay">
                    <div className="lottie-blur absolute inset-0 flex items-center justify-center">
                      <Lottie
                        animationData={LottieExplosion}
                        loop={false}
                        autoplay={true}
                      />
                    </div>
                    <div className="battlepass-reward-image">
                      <i
                        style={{
                          WebkitMaskImage:
                            "url(" +
                            getBattlepassRewardByID(rewardID).image +
                            ")",
                        }}
                      />
                      <img
                        src={`${
                          getBattlepassRewardByID(rewardID).image
                        }`}
                        width="100%"
                        height="auto"
                        alt={getBattlepassRewardByID(rewardID).name}
                      />
                    </div>
                  </div>

                  <div className="text-main text-2xl">
                    {getBattlepassRewardByID(rewardID).name}
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-action">
              {getBattlepassRewardByID(rewardID).type === "avatarframe" && (
                <button
                  type="button"
                  className={`button button-claim button-lg flex-1 ${
                    submitting ? "is-loading" : ""
                  }`}
                  onClick={() =>
                    EquipAvatarFrame(
                      getBattlepassRewardByID(rewardID).shopItemID
                    )
                  }
                >
                  <span>Equip</span>
                </button>
              )}
              {getBattlepassRewardByID(rewardID).type === "profilebanner" && (
                <button
                  type="button"
                  className={`button button-claim button-lg flex-1 ${
                    submitting ? "is-loading" : ""
                  }`}
                  onClick={() =>
                    EquipProfileBanner(
                      getBattlepassRewardByID(rewardID).shopItemID
                    )
                  }
                >
                  <span>Equip</span>
                </button>
              )}
              <button
                type="button"
                className={`button button-lg flex-1 ${
                  getBattlepassRewardByID(rewardID).type === "avatarframe" ||
                  getBattlepassRewardByID(rewardID).type === "profilebanner"
                    ? "button-secondary"
                    : "button-claim"
                } ${submitting ? "is-loading" : ""}`}
                onClick={closeModalWithDelay}
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
            animationData={LottieExplosion}
            loop={false}
            autoplay={true}
          />
        </div>
      </div>
      
    </>
  );
}
