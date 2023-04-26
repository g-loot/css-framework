import { useContext, useEffect, useState } from "react";
import PrototypeStructure from "../../../components/Prototype/PrototypeStructure";
import Battlepass from "../../../components/BattlePass/BattlePass";
import { useRouter } from "next/router";
import { UiContext } from "../../../contexts/ui";
import Avatar from "../../../components/Avatar/Avatar";
import Link from "next/link";
import { usePrototypeData } from "../../../contexts/prototype";

export default function BattlepassPage() {
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const isPremium = query.premium === "true" ? true : false;

  function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

  return (
    <>
      <PrototypeStructure title="Battlepass">
      <section className="header surface sm:rounded-lg mb-4">
          <div className="header-content">
            <div className="header-body">
              <h1>Battlepass</h1>
              <p className="text-ui-300 max-w-[70ch] mt-4 mb-5">
                The Battlepass is how you turn your XP into useful stuff like
                  Coins or Tokens. Each time you reach a milestone in the
                  Battlepass, you unlock another reward. Battlepass and XP reset
                  each week so you&#39;ll always have something new to work towards.
              </p>
            </div>
          </div>
          <div className="header-bg">
            <img src="" alt="Battlepass" />
          </div>
        </section>
        <section className="mb-8 surface surface-dimmed p-4 relative sm:rounded animate-slide-in-bottom overflow-hidden">
        <div className="p-4 flex flex-col lg:flex-row items-start justify-between pb-8 mb-8 gap-4 lg:gap-8 border-b border-ui-700">
            <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8">
              <h2>Xmas mayhem</h2>
              <div className="flex-1 xl:border-l xl:border-ui-700 xl:pl-8 flex items-center">
                <p className="max-w-[50ch] text-ui-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vehicula ac diam sed interdum. Interdum et malesuada fames ac
                  ante ipsum primis in faucibus.
                </p>
              </div>
            </div>
          </div>
          <Battlepass className="relative z-10" />
          <img src="" alt="" className="absolute inset-0 z-0 pointer-events-none object-cover" />
        </section>
      </PrototypeStructure>
    </>
  );
}
