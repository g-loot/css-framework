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

  return (
    <>
      <PrototypeStructure title="Battlepass">
        <section className="mb-8 surface surface-dimmed p-4 sm:rounded animate-slide-in-bottom">
          <div className="p-4 flex flex-col lg:flex-row items-start justify-between pb-8 mb-8 gap-4 lg:gap-8 border-b border-ui-700">
            <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8">
              <h1>Battlepass</h1>
              <div className="flex-1 xl:border-l xl:border-ui-700 xl:pl-8 flex items-center">
                <p className="max-w-[50ch] text-ui-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vehicula ac diam sed interdum. Interdum et malesuada fames ac
                  ante ipsum primis in faucibus.
                </p>
              </div>
            </div>
            <Link href={`/prototype/profile/1${prototype.getURLparams()}`}>
              <div className="flex items-center gap-4 interactive">
                <Avatar id={1} hasTooltip={false} size="avatar-sm" />
                <div
                  className={`rounded-full bg-ui-700 border border-ui-600 -ml-10 h-10 pr-3 flex gap-2 items-center whitespace-nowrap ${
                    isPremium ? "text-premium-500" : "text-main"
                  }`}
                >
                  <span className="text-2xl pl-8">10 350</span>
                  <span className="icon icon-xp-symbol text-5xl" />
                </div>
              </div>
            </Link>
          </div>
          <Battlepass />
        </section>
      </PrototypeStructure>
    </>
  );
}
