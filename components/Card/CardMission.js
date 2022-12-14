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
          mission.ispremium === true ? "card-lockedNO" : ""
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
              <div className="rounded-full border border-premium-300 bg-gradient-to-br from-premium-700 via-premium-700 to-premium-300 flex items-center leading-none">
                <div className="rounded-full flex items-center gap-1 text-ui-800 px-2 py-0.5 border border-premium-300">
                  <span className="font-headings text-lg font-bold">100</span>
                  <span className="icon icon-xp-symbol text-3xl -my-4" />
                </div>
              </div>
            ): (
            <Tooltip
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
                    <span className="font-bold text-premium-700">50% XP</span>{" "}
                    on each completed mission.
                  </div>
                </div>
              }
            >
              <div className="rounded-full border border-premium-300 bg-gradient-to-br from-premium-700 via-premium-700 to-premium-300 flex items-center leading-none">
                <div className="rounded-full bg-ui-800 flex items-center gap-1 text-premium-500 px-2 py-0.5 border border-premium-300">
                  <span className="font-headings text-lg font-bold">100</span>
                  <span className="icon icon-xp-symbol text-3xl -my-4" />
                </div>
                <div className="flex items-center gap-1 text-ui-800 pl-1 pr-2">
                  <span className="icon icon-lock" />
                  <span className="font-bold">+50%XP</span>
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
