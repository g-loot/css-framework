import React, { useEffect, useState, useContext } from "react";
import PrototypeStructure from "../../../components/Prototype/PrototypeStructure";
import Battlepass from "../../../components/BattlePass/BattlePass";
import { DataBattlepass } from "../../../mock-data/data-battlepass";
import Tooltip from "../../../components/Tooltip/Tooltip";
import ResetsIn from "../../../components/Countdown/ResetsIn";
import ModalBattlepassCompletedBonusSteps from "./modal-battlepass-completed-bonus";
import ModalBattlepassCompletedClaim from "./modal-battlepass-completed-claim";
import ModalBattlepassCompletedSummary from "./modal-battlepass-completed-summary";
import ModalBattlepassCompletedPremium from "./modal-battlepass-completed-premium";
import { UiContext } from "../../../contexts/ui";
import { useRouter } from "next/router";

export default function BattlepassPage() {
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
  const uiContext = useContext(UiContext);

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
      openModalBattlepassCompletedBonusSteps();
    }
  }, [modalbonussteps]);

  function openModalBattlepassCompletedBonusSteps() {
    uiContext.openModal(
      <ModalBattlepassCompletedBonusSteps id={selectedBattlepassID} />
    );
  }

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
      openModalBattlepassCompletedSummary();
    }
  }, [modalpremium]);

  function openModalBattlepassCompletedSummary() {
    uiContext.openModal(
      <ModalBattlepassCompletedSummary id={selectedBattlepassID} />
    );
  }

  useEffect(() => {
    if (modalsummary) {
      openModalBattlepassCompletedPremium();
    }
  }, [modalsummary]);

  function openModalBattlepassCompletedPremium() {
    uiContext.openModal(
      <ModalBattlepassCompletedPremium id={selectedBattlepassID} />
    );
  }

  return (
    <>
      {selectedBattlepass && (
        <PrototypeStructure title="Battlepass">
          <section className="mb-8 surface surface-dimmed p-4 relative sm:rounded overflow-hidden animate-slide-in-bottom">
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start text-center lg:text-left lg:justify-between pb-4 mb-4 gap-4 lg:gap-8 border-b border-ui-100/10">
              <div className="flex-1 flex flex-col items-center lg:items-start 2xl:flex-row gap-4 2xl:gap-8">
                <h1 onClick={switchBattlepasses} className="pt-1.5">
                  {getBattlepassByID(selectedBattlepassID).meta?.name}
                </h1>
                <div className="flex-1 2xl:border-l 2xl:border-ui-100/10 2xl:pl-8 flex items-center">
                  <p className="2xl:max-w-[50ch] text-ui-300">
                    {getBattlepassByID(selectedBattlepassID).meta?.description}
                  </p>
                </div>
              </div>
              <div className="text-center lg:text-right flex justify-center lg:justify-end gap-2">
                <Tooltip
                  tooltip={
                    <div className="max-w-xs text-sm text-center leading-tight">
                      The Battlepass is how you turn your XP into useful stuff
                      like Coins or Tokens. Each time you reach a milestone in
                      the Battlepass, you unlock another reward. Battlepass and
                      XP reset each week so you will always have something new
                      to work towards.
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
            <img
              src={
                getBattlepassByID(selectedBattlepassID).meta?.backgroundImage
              }
              alt=""
              className="absolute w-full h-full inset-0 pointer-events-none object-cover object-bottom animate-fade-in"
            />
          </section>

          {/* for demo purposes only */}
          <section className="text-ui-100/0 hover:text-ui-100 inline-flex flex-col">
            <a onClick={openModalBattlepassCompletedBonusSteps}>
              Open Battlepass completed: bonus steps
            </a>
            <a onClick={openModalBattlepassCompletedClaim}>
              Open battlepass finished: claim previous rewards
            </a>
            <a onClick={openModalBattlepassCompletedSummary}>
              Open battlepass finished: summary
            </a>
            <a onClick={openModalBattlepassCompletedPremium}>
              Open Premium purchased
            </a>
          </section>
        </PrototypeStructure>
      )}
    </>
  );
}
