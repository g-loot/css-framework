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
  const hasAds = query.ads === "true" ? true : false;

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
            <Tooltip
              tooltip={
                <div className="w-56 relative">
                  <h6 className="mb-3">Tickets</h6>
                  <div className="absolute -top-3 -right-2">
                    <img
                      src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_tikethorizontal.png"
                      width="50"
                      height="50"
                      alt="tickets"
                      className=""
                    />
                    <div className="lottie-blur absolute -inset-1">
                      <Lottie
                        animationData={LottieExplosion}
                        loop={false}
                        autoplay={true}
                      />
                    </div>
                  </div>
                  <ul className="leading-tight space-y-2">
                    <li className="flex gap-2 text-sm">
                      <div className=" w-12 font-bold uppercase">Use</div>
                      <div className="flex-1">
                        To enter <strong>Monthly Tournaments</strong>.
                      </div>
                    </li>
                    <li className="flex gap-2 text-sm">
                      <div className=" w-12 font-bold uppercase">Get</div>
                      <div className="flex-1">
                        From <strong>Weekly Brawls</strong> winnings.
                      </div>
                    </li>
                  </ul>
                </div>
              }
            >
              <div className="chip chip-reward chip-xp chip-sm chip-inverted">
                <span className="icon icon-xp-symbol-outline" />
                <span>{mission.xp}</span>
              </div>
            </Tooltip>

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
