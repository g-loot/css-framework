import React, { useState, useContext } from "react";
import Lottie from "lottie-react";
import LottieExplosion from "../../assets/animations/explosion-1.json";
import Tooltip from "../Tooltip/Tooltip";
import { usePrototypeData } from "../../contexts/prototype";
import { useRouter } from "next/router";
import { VariablesContext } from "../../contexts/variables";
import Countdown from "../Countdown/Countdown";

export default function CardMissionSecondary(props) {
  const prototype = usePrototypeData();
  const variablesContext = useContext(VariablesContext);
  const mission = props.mission;
  const index = props.index;
  const { query } = useRouter();
  const isPremium = query.premium === "true" ? true : false;

  const [MissionRetrieved, setMissionRetrieved] = useState(false);
  function handleGetMission() {
    setMissionRetrieved(!MissionRetrieved);
    variablesContext.incrementAvailableMissions(1);
  }

  function calculatePercent(current, max) {
    return (100 * max) / current;
  }

  return (
    <>
      <div
        className={`revealer ${mission.isvisible === true ? "is-active" : ""} ${
          MissionRetrieved === true ? "is-active" : ""
        }`}
        key={mission}
      >
        <div className="revealer-front">
          <div className="card-mission card-secondary">
            <div className="card-overlay">
              {variablesContext.availableMissions < 2 ? (
                <>
                  {!MissionRetrieved && (
                    <button
                      className="button button-secondary mx-auto"
                      onClick={handleGetMission.bind(this)}
                    >
                      <span>Get new mission</span>
                    </button>
                  )}
                </>
              ) : (
                <div className="text-ui-100">
                  <h5>New missions in</h5>
                  <Countdown
                    hasLabels={true}
                    labelsAbbr={true}
                    hasDays={false}
                    hasHours={true}
                    hasMinutes={true}
                    hasSeconds={true}
                    labelClassName="text-base mr-2"
                    className="text-4xl"
                  />
                </div>
              )}
            </div>
            <div className="card-bg">
              <span
                style={{
                  backgroundImage: "url(" + mission.image + ")",
                }}
              />
            </div>
          </div>
        </div>
        <div className="revealer-back">
          <div
            className={`card-mission card-secondary ${
              mission.target === mission.current ? "is-inactive" : ""
            }`}
          >
            <div className="card-decoration"></div>
            <div className="card-body">
              <div className="card-title">{mission.name}</div>
              <div className="card-meta">
                {isPremium ? (
                  <div className="chip chip-reward chip-xp chip-inverted chip-sm">
                    <span>150</span>
                    <span className="icon icon-xp-symbol" />
                  </div>
                ) : (
                  <Tooltip
                    placement="top"
                    tooltip={
                      <div className="w-56 flex gap-4 text-sm">
                        <div className="relative -mt-3">
                          <span className="icon icon-xp-symbol-outline text-6xl text-gradient bg-gradient-to-b from-premium-300 to-premium-700" />
                          <div className="lottie-blur absolute -inset-1">
                            <Lottie
                              animationData={LottieExplosion}
                              loop={false}
                              autoplay={true}
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          Subscribe to Premium to earn an additional{" "}
                          <span className="text-premium-700">50% XP</span> on
                          each completed mission.
                        </div>
                      </div>
                    }
                  >
                    <div className="flex gap-1 items-center">
                      <div className="chip chip-reward chip-xp chip-sm">
                        <span>100</span>
                        <span className="icon icon-xp-symbol" />
                      </div>
                      <div className="chip chip-reward chip-xp chip-ghost chip-xs">
                        <span>+50</span>
                        <span className="icon icon-xp-symbol" />
                        <span>if Premium</span>
                      </div>
                    </div>
                  </Tooltip>
                )}
              </div>
              <div>
                <div className="text-sm text-ui-300">
                  {mission.current}/{mission.target}
                </div>
                <div
                  className="progressbar progressbar-sm"
                  style={{
                    "--percent": calculatePercent(
                      mission.target,
                      mission.current
                    ),
                  }}
                >
                  <div />
                </div>
              </div>
            </div>
            <div className="card-bg">
              <span
                style={{
                  backgroundImage: "url(" + mission.image + ")",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
