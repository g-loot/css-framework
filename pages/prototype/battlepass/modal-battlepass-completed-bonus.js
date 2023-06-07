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
import CarouselSingle, {
  CarouselItem,
} from "../../../components/Carousel/CarouselSingle.js";
import PremiumLogo from "../../../components/PremiumLogo/PremiumLogo.js";
import Slider from "../../../components/Slider/Slider.js";

export default function ModalBattlepassCompletedBonusSteps(props) {
  const uiContext = useContext(UiContext);
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const ispremium = props.isPremium || false;
  const isPremium = query.premium === "true" ? true : ispremium;
  console.log("isPremium", ispremium, isPremium);
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
      <div className={`modal max-w-md ${isPremium ? "" : "modal-center"}`}>
        {isPremium && (
          <div className="modal-image">
            <img
              src={getBattlepassByID(selectedBattlepass).meta?.logo}
              alt={getBattlepassByID(selectedBattlepass).meta?.name}
              className="w-80"
            />
            <span
              style={{
                backgroundImage:
                  "url(" +
                  getBattlepassByID(selectedBattlepass).meta?.backgroundImage +
                  ")",
              }}
            />
          </div>
        )}
        <div className="modal-content">
          <div className="modal-body">
            <h2 className="modal-title">Battlepass completed</h2>
            <p className="mb-8">
              Congratulations on reaching the final step of the Battlepass.
              <br />
              Continue earning rewards through the bonus steps.
            </p>
            {!isPremium && (
              <div className="relative">
                <div className="border-t border-ui-700 p-4 flex flex-col xl:flex-row gap-6 items-center justify-center">
                  <PremiumLogo
                    src="https://res.cloudinary.com/gloot/image/upload/v1684315905/Stryda/logos/stryda-premium-logo-main-white.svg"
                    width="auto"
                    height="60"
                    className="h-16"
                  />
                  <div className="max-w-[30ch] text-center xl:text-left space-y-2 xl:border-l xl:border-ui-700 xl:pl-6">
                    <p>
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
                </div>
                <Slider
                  itemWidth={397 + 16}
                  bgColor="from-ui-800 via-ui-800/90 to-ui-800/0"
                >
                  {getBattlepassPremiumSteps().map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="battlepass-step is-premium is-locked mt-5 animate-slide-in-bottom animate-delay"
                      style={{
                        "--delay": "calc(" + itemIndex + " * 0.1s)",
                      }}
                    >
                      <div className="battlepass-content">
                        <div className="battlepass-decoration">
                          <span>
                            {getBattlepassRewardByID(item.reward).name}
                          </span>
                        </div>
                        <div className="battlepass-body">
                          <img
                            src={`https://res.cloudinary.com/gloot/image/upload/v1680426016/Stryda/illustrations/battlepass/${
                              getBattlepassRewardByID(item.reward).image
                            }`}
                            width="100%"
                            height="auto"
                            alt={getBattlepassRewardByID(item.reward).name}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            )}

            {/*
            <Battlepass id={selectedBattlepass} isFinished={true} hasSummary={false} hasPremium={true} />
  */}
            <p className="text-ui-300">
              <ResetsIn label="New Battlepass" status={2} />
            </p>
          </div>
          <div className="modal-action">
            {!isPremium && (
              <button
                type="button"
                className="button button-tertiary flex-1"
                onClick={buyPremium}
              >
                <span className="icon icon-crown text-premium-500" />
                <span className="text-premium-500">Get Premium</span>
              </button>
            )}
            <button
              type="button"
              className="button button-primary flex-1"
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
