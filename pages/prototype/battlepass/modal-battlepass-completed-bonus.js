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
import CarouselSingle, { CarouselItem } from "../../../components/Carousel/CarouselSingle.js";
import PremiumLogo from "../../../components/PremiumLogo/PremiumLogo.js";

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

  const getBattlepassRewardByID = (id) => {
    return DataBattlepassRewards.find((reward) => {
      return reward.id === parseInt(id);
    });
  };

  const getBattlepassBonusSteps = () => {
    return getBattlepassByID(selectedBattlepass).steps.filter((step) => {
      return step.isBonus === true;
    });
  };

  const getBattlepassPremiumSteps = () => {
    return getBattlepassByID(selectedBattlepass).steps.filter((step) => {
      return step.isPremium === true;
    });
  };

  function closeModalWithDelay() {
    setSubmitting(true);
    setTimeout(() => {
      uiContext.closeModal();
      setSubmitting(false);
    }, 3000);
  }

  function buyPremium() {
    uiContext.closeModal();
    uiContext.openModal(<ModalBattlepassCompletedPremium />);
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
              Congratulations on reaching the final step on the Battlepass.
              Continue earning XP through the bonus steps.
            </p>
            <div className="battlepass-container relative z-50">
              <div className="battlepass-summary">
                <div>
                  <div className="border-t border-ui-700 p-4 flex flex-col xl:flex-row gap-6 items-center overflow-hidden rounded-b relative">
                    <i className="absolute -z-10 w-[500px] h-[500px] -rotate-45 -top-[280px] -right-[250px] bg-gradient-to-br from-ui-700/50 via-ui-700/10 to-ui-700/0" />
                    <div>
                      <PremiumLogo
                        src="https://res.cloudinary.com/gloot/image/upload/f_auto/v1684315905/Stryda/logos/stryda-premium-logo-main-white.svg"
                        width="auto"
                        height="60"
                        className="h-16"
                      />
                    </div>
                    <div className="flex-1 text-center xl:text-left space-y-2 xl:border-l xl:border-ui-700 xl:pl-6">
                      <p className="max-w-[30ch]">
                        Unlock exclusive Premium rewards before the Battlepass
                        ends.
                      </p>
                      <button
                        type="button"
                        className="button button-premium is-shining"
                        onClick={buyPremium}
                      >
                        <span className="icon icon-crown" />
                        <span>Get Premium</span>
                      </button>
                    </div>
                    <div className="w-52">
                      <CarouselSingle autoPlay={false}>
                        {getBattlepassPremiumSteps().map((item, itemIndex) => (
                          <CarouselItem key={itemIndex}>
                            <div className="battlepass-step is-premium is-locked mt-5">
                              <div className="battlepass-content">
                                <div className="battlepass-decoration">
                                  <span>
                                    {getBattlepassRewardByID(item.reward).name}
                                  </span>
                                </div>
                                <div className="battlepass-body">
                                  <img
                                    src={`https://res.cloudinary.com/gloot/image/upload/f_auto/v1680426016/Stryda/illustrations/battlepass/${
                                      getBattlepassRewardByID(item.reward).image
                                    }.png`}
                                    width="100%"
                                    height="auto"
                                    alt={
                                      getBattlepassRewardByID(item.reward).name
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselSingle>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*
            <Battlepass id={selectedBattlepass} isFinished={true} hasSummary={false} hasPremium={true} />
  */}
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
