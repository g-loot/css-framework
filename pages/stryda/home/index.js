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
                <div className="max-w-sm mx-auto space-y-4">
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
                {/*
                <div className="surface rounded px-4 py-6 text-center">
                  <PremiumLogo
                    src="https://res.cloudinary.com/gloot/image/upload/v1672241197/Stryda/logos/stryda-premium-logo-main-white-animated.svg"
                    width="180"
                    height="auto"
                    className="mx-auto"
                  />
                  <p className="px-4 text-ui-300 mx-auto mt-4 mb-5">
                    Increase your amount of XP you can earn each day with a{" "}
                    <Link href={`/stryda/premium${prototype.getURLparams()}`}>
                      <a className="link text-premium-500">
                        Premium subscription
                      </a>
                    </Link>
                    .
                  </p>
                  <div className="mx-auto mt-2">
                    <Link href={`/stryda/premium${prototype.getURLparams()}`}>
                      <a className="button button-premium is-shining">
                        <span>Get Premium</span>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="surface-ui-600 rounded aspect-square grid place-content-center text-center text-2xl text-ui-400">
                  <span>AD</span>
                </div>
                */}
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="max-w-sm mx-auto space-y-4">
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
                {/*
                <div className="surface surface-dimmed rounded text-center flex flex-col items-center px-4 pb-4">
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1680426016/Stryda/illustrations/battlepass/battlepass-reward-10.png"
                    alt=""
                    className="h-36 w-auto -mt-8 -mb-4 drop-shadow-xl"
                  />
                  <h5>Need tokens?</h5>
                  <p className="text-ui-300 mt-2 mb-3">
                    Buy more tokens to compete in Ladders.
                  </p>
                  <button
                    onClick={openModalBuyTokens}
                    type="button"
                    className="button button-primary px-4"
                  >
                    <span>Get tokens</span>
                  </button>
                </div>
                            */}
              </div>
            </div>
          </section>
        </Loader>
      </Structure>
    </>
  );
}
