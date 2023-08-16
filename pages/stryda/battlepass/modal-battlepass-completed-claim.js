import React, { useContext, useState } from "react";

import { UiContext } from "@/contexts/ui.js";
import { usePrototypeData } from "@/contexts/prototype.js";
import { DataBattlepass } from "@/mock-data/data-battlepass.js";
import { DataBattlepassRewards } from "@/mock-data/data-battlepass.js";
import { useRouter } from "next/router.js";
import Lottie from "lottie-react";
import LottieExplosion from "@/assets/animations/Battlepass_Behind_1500ms.json";
import LottieExplosion2 from "@/assets/animations/Battlepass_Front_1500ms.json";
import ModalBattlepassCompletedSummary from "./modal-battlepass-completed-summary.js";

export default function ModalBattlepassCompletedClaim(props) {
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
      <div className="modal animate-delay"
        style={{
          "--delay": "calc(1 * 1s)",
        }}>
        <div className="modal-image">
          <img src={getBattlepassByID(selectedBattlepass).meta?.logo} alt={getBattlepassByID(selectedBattlepass).meta?.name} className="w-80" />
          <span
            style={{
              backgroundImage:
                "url("+ getBattlepassByID(selectedBattlepass).meta?.backgroundImage +")",
            }}
          />
        </div>
        <div className="modal-content">
          <div className="modal-body">
            <h2 className="modal-title">Battle Pass ended</h2>
            <p>
              The Battle Pass has ended. Congratulations for reaching <strong className="text-ui-100">tier 11</strong> of 15 tiers.
            </p>
            <p>
              It is now time to <strong className="text-ui-100">claim your past rewards</strong> before jumping into the new Battle Pass!
            </p>
            <p>
              Any ongoing missions have been reset.
            </p>
          </div>
          <div className="modal-action">
            <button
              type="button"
              className={`button button-claim ${
                submitting ? "is-loading" : ""
              }`}
              onClick={closeModalWithDelay}
            >
              <span className="icon icon-present animate-bounce" />
              <span>Claim &amp; see summary</span>
            </button>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="lottie-blur h-[85vh] w-[85vh] flex items-center justify-center">
          <Lottie
            animationData={LottieExplosion}
            loop={false}
            autoplay={true}
          />
        </div>
      </div>
      <div className="fixed inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="lottie-blur h-[85vh] w-[85vh] flex items-center justify-center">
          <Lottie
            animationData={LottieExplosion2}
            loop={false}
            autoplay={true}
          />
        </div>
      </div>
    </>
  );
}
