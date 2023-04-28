import { useContext, useEffect, useState } from "react";
import PrototypeStructure from "../../../components/Prototype/PrototypeStructure";
import Battlepass from "../../../components/BattlePass/BattlePass";
import { useRouter } from "next/router";
import { UiContext } from "../../../contexts/ui";
import Avatar from "../../../components/Avatar/Avatar";
import Link from "next/link";
import { usePrototypeData } from "../../../contexts/prototype";
import { DataBattlepass } from "../../../mock-data/data-battlepass";

export default function BattlepassPage() {
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const isPremium = query.premium === "true" ? true : false;
  const battlepass = query.battlepass || 0;
  const [selectedBattlepass, setSelectedBattlepass] = useState(null);

  const getBattlepassByID = (id) => {
    return DataBattlepass.find((battlepasses) => {
      return battlepasses.id === parseInt(id);
    });
  };

  useEffect(() => {
    setSelectedBattlepass(getBattlepassByID(battlepass));
  }, [battlepass]);

  return (
    <>
      {selectedBattlepass && (
        <PrototypeStructure title="Battlepass">
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
          </section>
          <section className="mb-8 surface surface-dimmed p-4 relative sm:rounded overflow-hidden animate-slide-in-bottom">
            <div className="relative z-10 p-4 flex flex-col lg:flex-row items-start justify-between pb-8 mb-8 gap-4 lg:gap-8 border-b border-ui-100/10">
              <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8 text-center md:text-left">
                <h2>{selectedBattlepass.meta?.name}</h2>
                <div className="flex-1 xl:border-l xl:border-ui-100/10 xl:pl-8 flex items-center">
                  <p className="max-w-[50ch] text-ui-300">
                    {selectedBattlepass.meta?.description}
                  </p>
                </div>
              </div>
            </div>
            <Battlepass id={battlepass} />
            <img
              src={selectedBattlepass.meta?.backgroundImage}
              alt=""
              className="absolute w-full h-full inset-0 pointer-events-none object-cover object-bottom animate-fade-in"
            />
          </section>
        </PrototypeStructure>
      )}
    </>
  );
}
