import Link from "next/link";
import Lottie from "lottie-react";
import LottieExplosion from "../../assets/animations/explosion-1.json";
import Tooltip from "../Tooltip/Tooltip";
import { usePrototypeData } from "../../contexts/prototype";
import { useRouter } from "next/router";

export default function CardMission(props) {
  const prototype = usePrototypeData();
  const mission = props.mission;
  const index = props.index;
  const { query } = useRouter();
  const isPremium = query.premium === "true" ? true : false;

  function calculatePercent(current, max) {
    return (100 * max) / current;
  }

  return (
    <>
      <div
        key={mission}
        className={`card-mission surface mx-auto animate-slide-in-right animate-delay ${
          mission.isPremium === true ? "card-lockedNO" : ""
        }`}
        style={{
          "--delay": "calc((" + index + " + 5) * 0.05s)",
        }}
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
            ): (
              <Tooltip
              placement="top"
              tooltip={
                <div className="w-56 flex gap-4 text-sm">
                  <div className="relative -mt-3">
                    <span className="icon icon-xp-symbol-outline text-6xl text-premium-500" />
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
                    <span className="text-premium-700">
                      50% XP
                    </span>{" "}
                    on each completed mission.
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
            {/*<div className="chip chip-reward chip-xp chip-sm chip-inverted">
                <span className="icon icon-xp-symbol-outline" />
                <span>{mission.xp}</span>
          </div>*/}

            <div>
              {mission.current}/{mission.target} {mission.label}
            </div>
          </div>
          <div
            className="progressbar progressbar-sm"
            style={{
              "--percent": calculatePercent(mission.target, mission.current),
            }}
          >
            <div />
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
    </>
  );
}
