import React, { useContext, useEffect, useState } from "react";

import Ad from "@/components/Ad/Ad";
import Countdown from "@/components/Countdown/Countdown";
import Link from "next/link";
import RewardLadder from "@/components/RewardLadder/RewardLadder";
import Tooltip from "@/components/Tooltip/Tooltip";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import CardMissionSecondary from "@/components/Card/CardMissionSecondary";
import ComponentRewardLadder from "./component-rewardladder";
import PremiumLogo from "@/components/PremiumLogo/PremiumLogo";
import XPBoostList from "@/components/XPBoostList/XPBoostList";
import Lottie from "lottie-react";
import LottieExplosion from "@/assets/animations/explosion_stryda_1.json";
import CardMissionTableTr from "@/components/Card/CardMissionTableTr";

export default function TabMissionsHistory() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const selectedGame = prototype.getGameByID(prototype.defaultGameID);
  const hasAds = query.ads === "true" ? true : false;
  const isPremium = prototype.isPremium;
  const [submitting, setSubmitting] = useState(false);

  function addToastWithDelay(toast) {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr(toast);
      setSubmitting(false);
    }, 1000);
  }



  return (
    <>
      {selectedGame && (
        <>
          <section>
            <div className="overflow-y-hidden overflow-x-auto scrollbar-desktop px-4 sm:px-0 pb-4">
              <table className="table table-rounded rounded-xl w-full">
                <tbody>
                  {selectedGame?.missions.map((mission, missionIndex) => (
                    <>
                      <CardMissionTableTr
                        key={missionIndex}
                        mission={mission}
                        index={missionIndex}
                      />
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-4 mb-8">
              <button type="button" className="button button-sm button-primary">
                <span>Load more</span>
              </button>
            </div>
          </section>
          <section className="py-8 grid grid-cols-1 xl:grid-cols-3 gap-y-4 xl:gap-x-4 items-stretch">
            <div
              className={`relative z-10 surface surface-dimmed p-8 flex flex-col gap-8 md:flex-row justify-center sm:rounded-lg text-center md:text-left ${
                hasAds ? "col-span-1" : "col-span-3"
              }`}
            >
              <PremiumLogo
                src="https://res.cloudinary.com/gloot/image/upload/v1672241197/Stryda/logos/stryda-premium-logo-main-white-animated.svg"
                width="210"
                height="auto"
                className="mx-auto md:mx-0"
              />
              <div className="md:border-l md:border-ui-700 pl-0 md:pl-8">
                <h4 className="text-3xl">
                  <span>Get</span>{" "}
                  <span className="text-premium-500">Stryda Premium</span>
                </h4>
                <p className="max-w-[50ch] text-sm text-ui-300 mx-auto mt-2 mb-5">
                  Increase your amount of XP you can earn each day with a{" "}
                  <Link href={`/stryda/premium${prototype.getURLparams()}`}>
                    <a className="link text-premium-500">Premium subscription</a>
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
            </div>
            <div
              className={`relative z-0 surface surface-dimmed col-span-2 sm:rounded-lg ${
                hasAds ? "pt-4" : "hidden"
              }`}
            >
              <div>
                <Ad width="728" height="90" />
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
