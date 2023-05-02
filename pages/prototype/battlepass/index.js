import { useEffect, useState } from "react";
import PrototypeStructure from "../../../components/Prototype/PrototypeStructure";
import Battlepass from "../../../components/BattlePass/BattlePass";
import { DataBattlepass } from "../../../mock-data/data-battlepass";
import Tooltip from "../../../components/Tooltip/Tooltip";
import ResetsIn from "../../../components/Countdown/ResetsIn";

export default function BattlepassPage() {
  const [selectedBattlepassID, setSelectedBattlepassID] = useState(0);
  const [selectedBattlepass, setSelectedBattlepass] = useState(null);

  const getBattlepassByID = (id) => {
    return DataBattlepass.find((battlepass) => {
      return battlepass.id === parseInt(id);
    });
  };

  useEffect(() => {
    setSelectedBattlepass(getBattlepassByID(0));
  }, [selectedBattlepassID]);

  function switchBattlepasses() {
    if (selectedBattlepassID < DataBattlepass.length - 1) {
      setSelectedBattlepassID(selectedBattlepassID + 1);
    } else {
      setSelectedBattlepassID(0);
    }
  }

  return (
    <>
      {selectedBattlepass && (
        <PrototypeStructure title="Battlepass">
          {/*
          <section className="header surface sm:rounded-lg mb-4">
            <div className="header-content">
              <div className="header-body">
                <h1>Battlepass</h1>
                <p className="text-ui-300 max-w-[70ch] mt-4 mb-5">
                  The Battlepass is how you turn your XP into useful stuff like
                  Coins or Tokens. Each time you reach a milestone in the
                  Battlepass, you unlock another reward. Battlepass and XP reset
                  each week so you&#39;ll always have something new to work
                  towards.
                </p>
              </div>
            </div>
            <div className="header-bg">
              <img src="" alt="Battlepass" />
            </div>
      </section>*/}
          <section className="mb-8 surface surface-dimmed p-4 relative sm:rounded overflow-hidden animate-slide-in-bottom">
            <div className="relative z-10 p-4 flex flex-col lg:flex-row items-start justify-between pb-8 mb-4 gap-4 lg:gap-8 border-b border-ui-100/10">
              <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8 text-center md:text-left">
                <h1 onClick={() => switchBattlepasses()}>
                  {getBattlepassByID(selectedBattlepassID).meta?.name}
                </h1>
                <div className="flex-1 xl:border-l xl:border-ui-100/10 xl:pl-8 flex items-center">
                  <p className="max-w-[50ch] text-ui-300">
                    {getBattlepassByID(selectedBattlepassID).meta?.description}
                  </p>
                </div>
              </div>
              <div className="text-right flex gap-2">
                <Tooltip
                  tooltip={
                    <div className="max-w-xs text-sm text-center leading-tight">
                      The Battlepass is how you turn your XP into useful stuff
                      like Coins or Tokens. Each time you reach a milestone in the
                      Battlepass, you unlock another reward. Battlepass and XP
                      reset each week so you will always have something new to
                      work towards.
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
        </PrototypeStructure>
      )}
    </>
  );
}
