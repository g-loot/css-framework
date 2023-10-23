import React, { useEffect, useState, useContext } from "react";
import { usePrototypeData } from "@/contexts/prototype";
import Structure from "@/pages/stryda/components/Structure";
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
import Loader from "@/pages/stryda/components/Loader";

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
      <Structure title="Battle Pass">
        <Loader
          loader={
            <div className="flex flex-col gap-4 items-stretch my-8 min-h-screen">
              <div className="flex-1 surface is-loading rounded" />
              <div className="flex-4 surface is-loading rounded" />
            </div>
          }
        >
          {selectedBattlepass && (
            <>
              <section className="mt-4 mb-8 p-4 relative sm:rounded overflow-hidden">
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-start text-center lg:text-left lg:justify-between gap-4 lg:gap-8">
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
                      <p className="2xl:max-w-[50ch] text-ui-300">
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
                          milestone in the Battle Pass, you unlock another
                          reward. Battle Pass and XP reset each week so you will
                          always have something new to work towards.
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
              </section>

              <div className="absolute w-full h-full opacity-25 inset-0 pointer-events-none select-none">
                <i className="absolute z-10 h-36 inset-x-0 -bottom-px bg-gradient-to-b from-ui-900/0 via-ui-900/40 to-ui-900" />
                {getBattlepassByID(selectedBattlepassID).meta?.backgroundVideo ? (
                  <video
                  className="absolute w-full h-full inset-0 object-cover"
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
                  className="absolute w-full h-full inset-0 object-cover"
                />
                )}
                
              </div>

              {/* for demo purposes only */}
              {prototype.showDemo && (
                <section className="fixed z-[9999] bottom-4 left-4 surface-ui-500 rounded shadow-md p-4 pr-16 text-sm text-ui-100 flex flex-col items-start">
                  <div className="absolute top-1 right-1">
                    <button
                      type="button"
                      className="button button-sm button-secondary button-close"
                      onClick={() => prototype.setShowDemo(!prototype.showDemo)}
                    >
                      <span className="icon icon-e-remove" />
                    </button>
                  </div>

                  <button
                    type="button"
                    className="button button-sm button-ghost"
                    onClick={switchBattlepasses}
                  >
                    <span>Switch between various Battle Passes</span>
                  </button>
                  <button
                    type="button"
                    className="button button-sm button-ghost"
                    onClick={() =>
                      openModalBattlepassCompletedBonusSteps(false)
                    }
                  >
                    <span>Open Battle Pass completed: bonus steps</span>
                  </button>
                  <button
                    type="button"
                    className="button button-sm button-ghost"
                    onClick={() => openModalBattlepassCompletedBonusSteps(true)}
                  >
                    <span>
                      Open Battle Pass completed: bonus steps (premium)
                    </span>
                  </button>
                  <button
                    type="button"
                    className="button button-sm button-ghost"
                    onClick={() => openModalBattlepassCompletedClaim()}
                  >
                    <span>Open Battle Pass ended: claim previous rewards</span>
                  </button>
                  <button
                    type="button"
                    className="button button-sm button-ghost"
                    onClick={() => openModalBattlepassCompletedSummary()}
                  >
                    <span>Open Battle Pass ended: summary</span>
                  </button>
                  <button
                    type="button"
                    className="button button-sm button-ghost"
                    onClick={() => openModalBattlepassCompletedPremium()}
                  >
                    <span>Open Premium purchased</span>
                  </button>

                  <div className="form-group pl-4">
                    <div className="form-xs form-toggle">
                      <input
                        type="checkbox"
                        name="feed"
                        id="feed-premium"
                        onChange={() => {
                          prototype.togglePremium();
                        }}
                      />
                      <label htmlFor="feed-premium">Premium state</label>
                    </div>
                  </div>
                </section>
              )}
            </>
          )}
        </Loader>
      </Structure>
    </>
  );
}
