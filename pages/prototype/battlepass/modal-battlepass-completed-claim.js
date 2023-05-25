import React, { useContext, useState } from "react";

import { UiContext } from "../../../contexts/ui.js";
import { usePrototypeData } from "../../../contexts/prototype.js";
import { DataBattlepass } from "../../../mock-data/data-battlepass.js";
import { DataBattlepassRewards } from "../../../mock-data/data-battlepass.js";
import { useRouter } from "next/router.js";
import Lottie from "lottie-react";
import LottieExplosion from "../../../assets/animations/explosion_stryda_7.json";
import ModalBattlepassCompletedSummary from "./modal-battlepass-completed-summary.js";

export default function ModalBattlepassCompletedClaim(props) {
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
        text: "Rewards claimed",
        color: "green",
        autoDelete: true,
        autoDeleteDelay: 2500,
      });
      uiContext.openModal(<ModalBattlepassCompletedSummary />);
      setSubmitting(false);
    }, 3000);
  }

  return (
    <>
      <div className="modal">
        <button
          type="button"
          className="button button-secondary button-close"
          onClick={uiContext.closeModal}
        >
          <span className="icon icon-e-remove" />
        </button>
        <div className="modal-image">
          <img src={getBattlepassByID(selectedBattlepass).meta?.logo} alt={getBattlepassByID(selectedBattlepass).meta?.name} className=" w-80" />
          <span
            style={{
              backgroundImage:
                "url("+ getBattlepassByID(selectedBattlepass).meta?.backgroundImage +")",
            }}
          />
        </div>
        <div className="modal-content">
          <div className="modal-body">
            <h2 className="modal-title">Battlepass ended</h2>
            <p>
              The Battlepass has ended. Congratulations for reaching <strong className="text-ui-100">tier 11</strong> of 15 tiers.
            </p>
            <p>
              It is now time to <strong className="text-ui-100">claim your past rewards</strong> before jumping into the new Battlepass!
            </p>
          </div>
          <div className="modal-action">
            <button
              type="button"
              className={`button button-claim w-full ${
                submitting ? "is-loading" : ""
              }`}
              onClick={closeModalWithDelay}
            >
              <span className="icon icon-present animate-bounce" />
              <span>Claim rewards</span>
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
