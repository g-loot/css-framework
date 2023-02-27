import React, { useContext, useState } from "react";

import Lottie from "lottie-react";
import LottieExplosion from "../../../assets/animations/explosion_stryda_3.json";
import { UiContext } from "../../../contexts/ui.js";
import { VariablesContext } from "../../../contexts/variables";
import AnimatedNumber from "../../../components/AnimatedNumber/AnimatedNumber";
import { useRouter } from "next/router";
import XPBoostList from "../../../components/XPBoostList/XPBoostList";
import Link from "next/link";
import PremiumLogo from "../../../components/PremiumLogo/PremiumLogo";

const missionDefault = {
  name: "Get 6 assists",
  category: 1,
  label: "assists",
  current: 3,
  target: 6,
  isPremium: false,
  isVisible: true,
  hasClaimed: false,
  xp: 50,
  image:
    "https://res.cloudinary.com/gloot/image/upload/v1672672256/Stryda/demo/mission-valorant_3.jpg",
};

export default function ModalDiscardMission(props) {
  const uiContext = useContext(UiContext);
  const mission = props.mission || missionDefault;
  const variablesContext = useContext(VariablesContext);
  const [submitting, setSubmitting] = useState(false);
  const { query } = useRouter();
  const isPremium = query.premium === "true" ? true : false;

  function closeModalWithDelay() {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr({
        size: "medium",
        text: "Mission discarded successfully",
        color: "green",
        autoDelete: true,
        autoDeleteDelay: 2500,
      });
      variablesContext.claimReward();
      uiContext.closeModal();
      setSubmitting(false);
    }, 1000);
  }

  function handleBecomePremium() {
    uiContext.closeModal();
    window.location.href = "/prototype/premium";
  }

  return (
    <>
      <div className="modal max-w-sm modal-center">
        <button
          type="button"
          className="button button-secondary button-close"
          onClick={uiContext.closeModal}
        >
          <span className="icon icon-e-remove" />
        </button>
        {isPremium ? (
          <div className="modal-content">
            <div className="modal-body">
              <h2 className="modal-title">Discard mission?</h2>
              <p>
                You are about to discard the{" "}
                <span className="text-ui-100 font-bold">{mission?.name} </span>
                mission. By doing this you will be able to get a new one in any
                of your favorite games.
                <br />
                Are you sure?
              </p>
            </div>
            <div className="modal-action">
              <button
                type="button"
                className={`button button-primary ${
                  submitting ? "is-loading" : ""
                }`}
                onClick={closeModalWithDelay}
              >
                <span>Discard mission</span>
              </button>
              <button
                type="button"
                className="button button-secondary"
                onClick={uiContext.closeModal}
              >
                <span>Cancel</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="modal-content">
            <div className="modal-body">
              <PremiumLogo
                src="https://res.cloudinary.com/gloot/image/upload/v1672241197/Stryda/logos/stryda-premium-logo-main-white-animated.svg"
                width="210"
                height="auto"
                className="mx-auto mt-4 mb-6"
              />
              <p>
                <button
                  type="button"
                  onClick={handleBecomePremium}
                  className="text-premium-500 link"
                >
                  Premium members
                </button>{" "}
                can discard one mission per day for free.
              </p>
            </div>
            <div className="modal-action">
              <button
                type="button"
                className={`button button-premium${
                  submitting ? "is-loading" : ""
                }`}
                onClick={handleBecomePremium}
              >
                <span>Join Premium</span>
              </button>
              <button
                type="button"
                className="button button-secondary"
                onClick={uiContext.closeModal}
              >
                <span>Cancel</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
