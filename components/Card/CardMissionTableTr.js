import React, { useState, useContext, useEffect } from "react";
import Lottie from "lottie-react";
import LottieExplosion from "@/assets/animations/explosion_stryda_1.json";
import Tooltip from "../Tooltip/Tooltip";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import { VariablesContext } from "@/contexts/variables";
import Countdown from "../Countdown/Countdown";
import ModalClaimMission from "@/pages/stryda/home/modal-claim-mission";
import { UiContext } from "@/contexts/ui";
import XPBoostList from "../XPBoostList/XPBoostList";

export default function CardMissionTableTr(props) {
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);
  const mission = props.mission;
  const index = props.index;
  const { query } = useRouter();
  const isPremium = prototype.isPremium;
  const modalClaimMission = query.modalclaimmission === "true" ? true : false;
  const gameSlug = props.gameSlug || "valorant";
  const [hasClaimed, setHasClaimed] = useState(mission.hasClaimed);

  useEffect(() => {
    if (modalClaimMission) {
      openModalClaimMission();
    }
  }, [modalClaimMission]);

  const [MissionRetrieved, setMissionRetrieved] = useState(false);

  function handleGetMission() {
    setMissionRetrieved(!MissionRetrieved);
    variablesContext.incrementAvailableMissions(1);
  }

  function openModalClaimMission() {
    setHasClaimed(true);
    uiContext.openModal(
      <ModalClaimMission mission={mission}></ModalClaimMission>
    );
  }

  function calculatePercent(current, max) {
    return (100 * max) / current;
  }

  return (
    <>
      <tr
        className="animate-slide-in-bottom animate-delay leading-tight"
        style={{
          "--delay": "calc(" + index + " * 0.05s)",
        }}
      >
        <td className="relative p-0 w-24 after:content-[''] after:absolute after:z-10 after:right-0 after:inset-y-0 after:w-2/3 after:bg-gradient-to-r after:from-ui-800/0 after:to-ui-800">
          <img
            src={mission.image}
            alt={mission.name}
            className="relative z-0 aspect-square object-cover h-24 rounded-l mix-blend-luminosity grayscale opacity-50"
          />
        </td>
        <td>{mission.name}</td>
        <td>
          <div
            className={`rarity ${
              mission.category === 1 ? "rarity-category-1" : ""
            } ${mission.category === 2 ? "rarity-category-2" : ""} ${
              mission.category === 3 ? "rarity-category-3" : ""
            } ${mission.category === 4 ? "rarity-category-4" : ""}`}
          >
            <span
              className={`icon ${
                mission.category === 1 ? "icon-category-1" : ""
              } ${mission.category === 2 ? "icon-category-2" : ""} ${
                mission.category === 3 ? "icon-category-3" : ""
              } ${mission.category === 4 ? "icon-category-4" : ""}`}
            />
            <span>
              {mission.category === 1 && <>common</>}
              {mission.category === 2 && <>rare</>}
              {mission.category === 3 && <>epic</>}
              {mission.category === 4 && <>legendary</>}
            </span>
          </div>
        </td>
        <td>
          <>
            {isPremium ? (
              <Tooltip placement="top" tooltip={<XPBoostList />}>
                <button
                  type="button"
                  className={`chip chip-sm ${
                    mission.target === mission.current
                      ? "chip-xp chip-inverted"
                      : "chip-secondary"
                  }`}
                >
                  <span>{Math.round(mission.xp * 1.65)}</span>
                  <span className="icon icon-xp-symbol" />
                </button>
              </Tooltip>
            ) : (
              <div className="flex gap-1 items-center">
                <Tooltip placement="top" tooltip={<XPBoostList />}>
                  <button type="button" className={`chip chip-sm chip-xp`}>
                    <span>{mission.xp}</span>
                    <span className="icon icon-xp-symbol" />
                  </button>
                </Tooltip>
                <Tooltip
                  placement="top"
                  tooltip={
                    <div className="w-56 flex gap-4 text-sm">
                      <div className="relative -mt-3">
                        <span className="icon icon-crown text-6xl text-premium-500" />
                        <div className="lottie-premium absolute -inset-1">
                          <Lottie
                            animationData={LottieExplosion}
                            loop={false}
                            autoplay={true}
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        Subscribe to Premium to earn an additional{" "}
                        <span className="text-premium-500">50% XP</span> on each
                        completed mission.
                      </div>
                    </div>
                  }
                >
                  <button type="button" className="chip chip-premium chip-sm">
                    <span>+{mission.xp / 2}</span>
                    <span className="icon icon-crown text-sm" />
                  </button>
                </Tooltip>
              </div>
            )}
          </>
        </td>
        <td className="pr-4">
          <div className="flex items-center justify-end">
            <div className="checkmark checkmark-sm is-active">
              <i />
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}
