import React, { useContext, useState } from "react";

import { UiContext } from "../../../contexts/ui.js";
import { usePrototypeData } from "../../../contexts/prototype.js";
import { DataBattlepass } from "../../../mock-data/data-battlepass.js";
import { DataBattlepassRewards } from "../../../mock-data/data-battlepass.js";
import { useRouter } from "next/router.js";
import Lottie from "lottie-react";
import LottieExplosion from "../../../assets/animations/explosion_stryda_1.json";
import Battlepass from "../../../components/BattlePass/BattlePass.js";
import ModalBattlepassCompletedPremium from "./modal-battlepass-completed-premium.js";
import ResetsIn from "../../../components/Countdown/ResetsIn.js";

export default function ModalBattlepassCompletedBonusSteps(props) {
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
            <h2 className="modal-title">Battlepass completed</h2>
            <p className="mb-8">
              Congratulations on reaching the final step on the Battlepass. Continue earning XP through the bonus steps.
            </p>
            <Battlepass id={selectedBattlepass} isFinished={true} hasPremium={true} />
            <p className="text-ui-300">
              <ResetsIn label="New Battlepass" status={2} />
            </p>
          </div>
          <div className="modal-action">
            <button
              type="button"
              className="button button-primary w-full md:w-1/2 lg:w-1/3"
              onClick={uiContext.closeModal}
            >
              <span>Explore bonus steps</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
