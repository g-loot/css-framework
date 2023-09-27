import React, { Fragment, useContext, useEffect, useState } from "react";

import { UiContext } from "@/contexts/ui";
import { useRouter } from "next/router";

import { usePrototypeData } from "@/contexts/prototype";
import WidgetUser from "@/pages/stryda/components/WidgetUser";
import Structure from "@/pages/stryda/components/Structure";
import Link from "next/link";
import Tooltip from "@/components/Tooltip/Tooltip";
import Avatar from "@/components/Avatar/Avatar";
import Loader from "@/pages/stryda/components/Loader";
import ModalGiftTokens from "../clans/modal-gift-tokens";
import PremiumLogo from "@/components/PremiumLogo/PremiumLogo";
import Feed from "@/pages/stryda/components/Feed";
import { VariablesContext } from "@/contexts/variables";
import CardMission from "@/pages/stryda/components/CardMission";
import CardLadder from "@/pages/stryda/components/CardLadder";
import ModalBuyTokens from "../wallet/modal-buytokens";
import Battlepass from "@/components/BattlePass/BattlePass";
import ButtonFeedback from "@/components/Button/ButtonFeedback";
import GameIcon from "@/components/GameIcon/GameIcon";
import WidgetCompetitions from "../components/WidgetCompetitions";
import WidgetBattlepass from "../components/WidgetBattlepass";
import WidgetMissions from "../components/WidgetMissions";
import WidgetFollowings from "../components/WidgetFollowings";

export default function Home() {
  const router = useRouter();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const variablesContext = useContext(VariablesContext);
  const isEmpty = query.empty === "true" ? true : false;

  function openModalBuyTokens() {
    uiContext.openModal(<ModalBuyTokens />);
  }

  return (
    <>
      <Structure title="Home" fullWidth={true}>
        <Loader
          loader={
            <section className="min-h-screen w-full flex flex-col sm:px-4 md:flex-row md:justify-around gap-8 lg:gap-14 py-8">
              <div className="w-[21rem] space-y-4 hidden md:block rounded surface is-loading min-h-[calc(100vh-116px)]" />
              <div className="flex-1 overflow-x-hidden">
                <div className="max-w-[550px] mx-auto space-y-4">
                  <div className="flex-1 rounded surface is-loading aspect-video" />
                  <div className="flex-1 rounded surface is-loading aspect-video" />
                  <div className="flex-1 rounded surface is-loading aspect-video" />
                  <div className="flex-1 rounded surface is-loading aspect-video" />
                </div>
              </div>
              <div className="w-[21rem] hidden xl:block rounded surface is-loading min-h-[calc(100vh-116px)]" />
            </section>
          }
        >
          <section className="min-h-screen w-full flex flex-col sm:px-4 md:flex-row md:justify-around gap-8 lg:gap-14 py-8">
            <div className="w-[21rem] space-y-4 hidden md:block">
              <WidgetUser hasActions={false} />
              <div
                className="sticky space-y-4"
                style={{ top: "calc(48px + 1rem)" }}
              >
                <WidgetBattlepass />
                <WidgetMissions />
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="max-w-[550px] mx-auto space-y-4">
                <Feed />
              </div>
            </div>
            <div className="w-[21rem] space-y-4 hidden xl:block">
              <WidgetCompetitions />
              <div
                className="sticky space-y-4"
                style={{ top: "calc(48px + 1rem)" }}
              >
                <WidgetFollowings />
              </div>
            </div>
          </section>
        </Loader>
      </Structure>
    </>
  );
}
