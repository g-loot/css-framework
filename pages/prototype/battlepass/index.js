import React, { useEffect, useState, useContext } from "react";
import { usePrototypeData } from "@/contexts/prototype";
import PrototypeStructure from "@/components/Prototype/PrototypeStructure";
import Battlepass from "@/components/BattlePass/BattlePass";
import { DataBattlepass } from "@/mock-data/data-battlepass";
import Tooltip from "@/components/Tooltip/Tooltip";
import ResetsIn from "@/components/Countdown/ResetsIn";
import ModalBattlepassCompletedBonusSteps from "./modal-battlepass-completed-bonus";
import ModalBattlepassCompletedClaim from "./modal-battlepass-completed-claim";
import ModalBattlepassCompletedSummary from "./modal-battlepass-completed-summary";
import ModalBattlepassCompletedPremium from "./modal-battlepass-completed-premium";
import { UiContext } from "@/contexts/ui";
import { useRouter } from "next/router";

export default function BattlepassPage() {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const { query } = useRouter();
  const modalbonussteps = query.modalbonussteps === "true" ? true : false;
  const modalclaim = query.modalclaim === "true" ? true : false;
  const modalpremium = query.modalpremium === "true" ? true : false;
  const modalsummary = query.modalsummary === "true" ? true : false;
  const battlepassID =
    query.battlepass !== undefined ? parseInt(query.battlepass) : 0;
  const [selectedBattlepassID, setSelectedBattlepassID] =
    useState(battlepassID);
  const [selectedBattlepass, setSelectedBattlepass] = useState(null);

  useEffect(() => {
    setSelectedBattlepassID(battlepassID);
    setSelectedBattlepass(getBattlepassByID(selectedBattlepassID));
  }, [battlepassID]);

  const getBattlepassByID = (id) => {
    return DataBattlepass.find((battlepass) => {
      return battlepass.id === parseInt(id);
    });
  };

  function switchBattlepasses() {
    if (selectedBattlepassID < DataBattlepass.length - 1) {
      setSelectedBattlepassID(selectedBattlepassID + 1);
    } else {
      setSelectedBattlepassID(0);
    }
  }

  useEffect(() => {
    if (modalbonussteps) {
      openModalBattlepassCompletedBonusSteps(false);
    }
  }, [modalbonussteps]);

  const openModalBattlepassCompletedBonusSteps = (premium) => {
    uiContext.openModal(
      <ModalBattlepassCompletedBonusSteps
        id={selectedBattlepassID}
        isPremium={premium}
      />
    );
  };

  useEffect(() => {
    if (modalclaim) {
      openModalBattlepassCompletedClaim();
    }
  }, [modalclaim]);

  function openModalBattlepassCompletedClaim() {
    uiContext.openModal(
      <ModalBattlepassCompletedClaim id={selectedBattlepassID} />
    );
  }

  useEffect(() => {
    if (modalpremium) {
      openModalBattlepassCompletedPremium();
    }
  }, [modalpremium]);

  function openModalBattlepassCompletedPremium() {
    uiContext.openModal(
      <ModalBattlepassCompletedPremium id={selectedBattlepassID} />
    );
  }

  useEffect(() => {
    if (modalsummary) {
      openModalBattlepassCompletedSummary();
    }
  }, [modalsummary]);

  function openModalBattlepassCompletedSummary() {
    uiContext.openModal(
      <ModalBattlepassCompletedSummary id={selectedBattlepassID} />
    );
  }

  return (
    <>
      <PrototypeStructure title="Battle Pass">
        {selectedBattlepass && (
          <>
            <section className="mb-8 surface surface-dimmed p-4 relative sm:rounded overflow-hidden animate-slide-in-bottom">
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-start text-center lg:text-left lg:justify-between pb-4 mb-4 gap-4 lg:gap-8 border-b border-ui-100/10">
                <div className="flex-1 flex flex-col items-center lg:items-start 2xl:flex-row 2xl:items-center gap-4 2xl:gap-8">
                  <div
                    onClick={switchBattlepasses}
                    className="2xl:px-8 py-4 flex flex-col items-center justify-center gap-4 w-64 lg:w-72 2xl:w-96"
                  >
                    <img
                      src={getBattlepassByID(selectedBattlepassID).meta?.logo}
                      alt={getBattlepassByID(selectedBattlepassID).meta?.name}
                    />
                  </div>
                  <div className="flex-1 2xl:border-l 2xl:border-ui-100/10 2xl:pl-8 flex items-center">
                    <p className="2xl:max-w-[50ch] text-ui-300" onClick={openModalBattlepassCompletedClaim}>
                      {
                        getBattlepassByID(selectedBattlepassID).meta
                          ?.description
                      }
                    </p>
                  </div>
                </div>
                <div className="text-center lg:text-right flex justify-center lg:justify-end gap-2">
                  <Tooltip
                    tooltip={
                      <div className="max-w-xs text-sm text-center leading-tight">
                        The Battle Pass is how you turn your XP into useful
                        stuff like Coins or Tokens. Each time you reach a
                        milestone in the Battle Pass, you unlock another reward.
                        Battle Pass and XP reset each week so you will always
                        have something new to work towards.
                      </div>
                    }
                  >
                    <button className="text-ui-300 text-0">
                      <span className="icon icon-16 icon-c-info" />
                    </button>
                  </Tooltip>
                  <div className="chip chip-secondary">
                    <ResetsIn />
                  </div>
                </div>
              </div>
              <Battlepass id={selectedBattlepassID} />
              <div className="absolute z-0 w-full h-full inset-0 pointer-events-none select-none">
                <i className="absolute z-10 h-full w-1/4 inset-y-0 -left-px bg-gradient-to-l from-ui-850/0 via-ui-850/40 to-ui-850" />
                <i className="absolute z-10 h-full w-1/4 inset-y-0 -right-px bg-gradient-to-r from-ui-850/0 via-ui-850/40 to-ui-850" />
                <i className="absolute z-10 h-36 inset-x-0 -bottom-px bg-gradient-to-b from-ui-850/0 via-ui-850/40 to-ui-850" />
                {getBattlepassByID(selectedBattlepassID).meta?.backgroundVideo ? (
                  <video
                  className="absolute z-0 w-full h-full inset-0 object-cover"
                  autoPlay
                  playsInline
                  muted
                  loop
                  preload="true"
                  poster={getBattlepassByID(selectedBattlepassID).meta?.backgroundImage}
                >
                  <source src={getBattlepassByID(selectedBattlepassID).meta?.backgroundVideo} />
                </video>
                ) : (
                  <img
                  src={
                    getBattlepassByID(selectedBattlepassID).meta
                      ?.backgroundImage
                  }
                  alt=""
                  className="absolute z-0 w-full h-full inset-0 object-cover"
                />
                )}
                
              </div>
            </section>

            {/* for demo purposes only */}
            <section className="text-sm text-ui-100/0 hover:text-ui-100 flex flex-col items-stretch">
              <a onClick={() => prototype.togglePremium()}>
                Toggle Premium state {prototype.isPremium ? "ON" : "OFF"}
              </a>
              <a onClick={switchBattlepasses}>
                Switch between various Battle Passes
              </a>
              <a onClick={() => openModalBattlepassCompletedBonusSteps(false)}>
                Open Battle Pass completed: bonus steps
              </a>
              <a onClick={() => openModalBattlepassCompletedBonusSteps(true)}>
                Open Battle Pass completed: bonus steps (premium)
              </a>
              <a onClick={openModalBattlepassCompletedClaim}>
                Open Battle Pass ended: claim previous rewards
              </a>
              <a onClick={openModalBattlepassCompletedSummary}>
                Open Battle Pass ended: summary
              </a>
              <a onClick={openModalBattlepassCompletedPremium}>
                Open Premium purchased
              </a>
            </section>
          </>
        )}
      </PrototypeStructure>
    </>
  );
}
