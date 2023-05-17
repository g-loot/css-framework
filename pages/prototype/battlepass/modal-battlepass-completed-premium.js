import React, { useContext, useState } from "react";

import { UiContext } from "../../../contexts/ui.js";
import { usePrototypeData } from "../../../contexts/prototype.js";
import { DataBattlepass } from "../../../mock-data/data-battlepass.js";
import { DataBattlepassRewards } from "../../../mock-data/data-battlepass.js";
import { useRouter } from "next/router.js";
import Lottie from "lottie-react";
import LottieExplosion from "../../../assets/animations/explosion_stryda_9.json";
import Battlepass from "../../../components/BattlePass/BattlePass.js";

export default function ModalBattlepassCompletedPremium(props) {
  const uiContext = useContext(UiContext);
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const isPremium = query.premium === "true" ? true : false;
  const selectedBattlepass = props.id || 0;
  const [submitting, setSubmitting] = useState(false);

  const getBattlepassByID = (id) => {
    return DataBattlepass.find((battlepasses) => {
      return battlepasses.id === parseInt(id);
    });
  };

  const getBattlepassStepByID = (id) => {
    return getBattlepassByID(selectedBattlepass).steps.find((step) => {
      return step.id === parseInt(id);
    });
  };
  const getBattlepassBonusSteps = () => {
    return getBattlepassByID(selectedBattlepass).steps.filter((step) => {
      return step.isBonus === true;
    });
  };

  const getBattlepassRewardByID = (id) => {
    return DataBattlepassRewards.find((reward) => {
      return reward.id === parseInt(id);
    });
  };

  function closeModalWithDelay() {
    setSubmitting(true);
    setTimeout(() => {
      uiContext.closeModal();
      uiContext.openToastr({
        size: "medium",
        text: "Premium rewards claimed",
        color: "green",
        autoDelete: true,
        autoDeleteDelay: 2500,
      });
      setSubmitting(false);
    }, 3000);
  }

  return (
    <>
      <div className="modal max-w-lg modal-center">
        <button
          type="button"
          className="button button-secondary button-close"
          onClick={uiContext.closeModal}
        >
          <span className="icon icon-e-remove" />
        </button>
        <div className="modal-content">
          <div className="modal-body">
            <h2 className="modal-title">Premium rewards unlocked</h2>
            <p className="mb-8">
              Thank you for getting Premium, you have now unlocked exclusive
              Battlepass rewards.
            </p>
            <Battlepass
              id={selectedBattlepass}
              isFinished={true}
              hasPremium={false}
            />
          </div>
          <div className="modal-action">
            <button
              type="button"
              className={`button button-primary w-full md:w-1/2 lg:w-1/3 ${
                submitting ? "is-loading" : ""
              }`}
              onClick={() => uiContext.closeModal()}
            >
              <span>Close</span>
            </button>
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
