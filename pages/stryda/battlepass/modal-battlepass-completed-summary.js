import React, { useContext, useState } from "react";

import { UiContext } from "@/contexts/ui.js";
import { usePrototypeData } from "@/contexts/prototype.js";
import { DataBattlepass } from "@/mock-data/data-battlepass.js";
import { DataBattlepassRewards } from "@/mock-data/data-battlepass.js";
import { useRouter } from "next/router.js";
import Lottie from "lottie-react";
import LottieExplosion from "@/assets/animations/explosion_stryda_1.json";
import Battlepass from "@/components/BattlePass/BattlePass.js";

export default function ModalBattlepassCompletedSummary(props) {
  const uiContext = useContext(UiContext);
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const isPremium = prototype.isPremium;
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
      window.location.href = "/stryda/battlepass";
      uiContext.closeModal();
      setSubmitting(false);
    }, 500);
  }

  return (
    <>
      <div className="modal max-w-lg modal-center">
        <div className="modal-content">
          <div className="modal-body">
            <h2 className="modal-title">Battle Pass ended</h2>
            <p className="mb-8">Here is a summary of your Battle Pass rewards</p>
            <Battlepass id={selectedBattlepass} isFinished={true} hasPremium={isPremium} hasCountdown={false} />
          </div>
          <div className="modal-action">
            <button
              type="button"
              className={`button button-primary w-1/2 lg:w-1/3 ${
                submitting ? "is-loading" : ""
              }`}
              onClick={closeModalWithDelay}
            >
              <span>Explore new Battle Pass</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
