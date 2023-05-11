import React, { useContext, useState } from "react";

import { UiContext } from "../../../contexts/ui.js";
import { usePrototypeData } from "../../../contexts/prototype.js";
import { DataBattlepass } from "../../../mock-data/data-battlepass.js";
import { DataBattlepassRewards } from "../../../mock-data/data-battlepass.js";
import { useRouter } from "next/router.js";
import Lottie from "lottie-react";
import LottieExplosion from "../../../assets/animations/explosion_stryda_1.json";

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
      <div className="modal max-w-md modal-center">
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
            <p>
              Congratulations on completing the Battlepass. Continue earning XP through the bonus steps.
            </p>
            <div>
              <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-8">
                {getBattlepassBonusSteps().map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={`battlepass-step animate-slide-in-bottom animate-delay ${
                      item.isPremium ? `is-premium` : ""
                    } ${item.isPremium && !isPremium ? `is-locked` : ""} ${
                      item.isBonus ? `is-bonus` : ""
                    }
                        `}
                    style={{
                      "--delay": "calc(" + itemIndex + " * 0.05s)",
                    }}
                  >
                    <div className="battlepass-info text-left px-2">
                      <div>{300 + 100 * item.id} XP</div>
                    </div>
                    <button
                      type="button"
                      className={`battlepass-content`}
                      data-tooltip={getBattlepassRewardByID(item.reward).name}
                    >
                      <div className="battlepass-decoration">
                        <span>{item.name}</span>
                      </div>
                      <div className="battlepass-body">
                        <img
                          src={`https://res.cloudinary.com/gloot/image/upload/v1680426016/Stryda/illustrations/battlepass/${
                            getBattlepassRewardByID(item.reward).image
                          }.png`}
                          width="100%"
                          height="auto"
                          alt={getBattlepassRewardByID(item.reward).name}
                        />
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="modal-action">
            <button
              type="button"
              className="button button-primary w-1/2 lg:w-1/3"
              onClick={uiContext.closeModal}
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
