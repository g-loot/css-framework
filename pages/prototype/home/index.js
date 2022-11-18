import React, { useContext, useEffect, useState } from "react";

import Ad from "../../../components/Ad/Ad";
import Carousel from "../../../components/Carousel/Carousel";
import Countdown from "../../../components/Countdown/Countdown";
import DailyReward from "../../../components/DailyReward/DailyReward";
import Link from "next/link";
import ListItemBrawl from "../../../components/ListItem/ListItemBrawl";
import ModalBrawlHowitworksVideo from "../[game]/brawls/modal-howitworks-video";
import ModalClaimDailyRewards from "./modal-claim-dailyrewards";
import ModalClaimLadderRewards from "./modal-claim-dailyrewards";
import PrototypeStructure from "../../../components/Prototype/PrototypeStructure";
import RewardLadder from "../../../components/RewardLadder/RewardLadder";
import Tooltip from "../../../components/Tooltip/Tooltip";
import { UiContext } from "../../../contexts/ui";
import { VariablesContext } from "../../../contexts/variables";
import { usePrototypeData } from "../../../contexts/prototype";
import { useRouter } from "next/router";
import HomeBrawlSolo from "./component-brawls-solo";

export default function Home() {
  const router = useRouter();
  const { query } = useRouter();
  const hasAds = query.ads === "true" ? true : false;
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);
  const prototype = usePrototypeData();
  const modalClaimLadder = query.modalclaim === "true" ? true : false;
  const modalClaimDaily = query.modalclaimdaily === "true" ? true : false;
  const modalVideo = query.modalvideo === "true" ? true : false;
  const [dailyNumber, setDailyNumber] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  function openModalBrawlHowitworksVideo() {
    uiContext.openModal(
      <ModalBrawlHowitworksVideo></ModalBrawlHowitworksVideo>
    );
  }

  useEffect(() => {
    if (modalVideo) {
      openModalBrawlHowitworksVideo();
    }
  }, [modalVideo]);

  function openModalClaimDailyRewards() {
    uiContext.openModal(<ModalClaimDailyRewards></ModalClaimDailyRewards>);
  }

  function openModalClaimLadderRewards() {
    uiContext.openModal(<ModalClaimLadderRewards></ModalClaimLadderRewards>);
  }

  useEffect(() => {
    if (modalClaimDaily) {
      openModalClaimDailyRewards();
    }
  }, [modalClaimDaily]);

  useEffect(() => {
    if (modalClaimLadder) {
      openModalClaimLadderRewards();
    }
  }, [modalClaimLadder]);

  function addToastWithDelay(toast) {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr(toast);
      setSubmitting(false);
    }, 1000);
  }

  return (
    <>
      <PrototypeStructure title="Home">
        <Ad width="1005" height="300" />

        <section className="surface sm:rounded-lg overflow-hidden mb-8">
          <Carousel />
        </section>

        <section className="mb-8 animate-slide-in-bottom animate-delay"
          style={{ "--delay": "calc(1 * 0.05s)" }}>
          <h2 className="h6 mb-1">Your latest tracked match</h2>
          <div className="surface rounded-lg flex flex-col xl:flex-row xl:justify-between leading-none gap-2 xl:gap-8">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 mb-2 md:mb-0 p-2">
              <div className="flex gap-2 items-center">
                <div className="rounded bg-gradient-to-b from-ui-900/75 to-ui-900/25 p-2 flex items-center justify-center border border-ui-700">
                  <span className="icon text-3xl icon-game-pubg-symbol text-game-pubg" />
                </div>
                <h6 className="">PUBG: BATTLEGROUNDS</h6>
              </div>
              <div className="text-main font-headings text-lg uppercase italic font-bold">Victory</div>
            </div>
            <div className="flex flex-col sm:flex-row flex-1 sm:items-end xl:items-center gap-2 p-3 border-t border-ui-700 xl:border-none">
              <div className="flex flex-1 items-stretch justify-center sm:justify-start gap-2 text-sm text-ui-300 whitespace-nowrap">
                <span className="bg-ui-900/50 rounded p-2">11 kills</span>
                <span className="bg-ui-900/50 rounded p-2">14 assists</span>
                <span className="bg-ui-900/50 rounded p-2">5 deaths</span>
                <span className="bg-ui-900/50 rounded p-2">4 headshots</span>
              </div>
              <button
                className={`button button-sm button-primary ${
                  submitting ? "is-loading" : ""
                }`}
                onClick={addToastWithDelay.bind(this, {
                  icon: "f-check",
                  color: "green",
                  text: "Your stats have been updated.",
                  autoDelete: true,
                  autoDeleteDelay: 2500,
                })}
              >
                <span className="icon icon-16 icon-refresh-02" />
                <span>Request a stats update</span>
              </button>
            </div>
          </div>
        </section>

        <section
          className="mb-8 animate-slide-in-bottom animate-delay"
          style={{ "--delay": "calc(2 * 0.05s)" }}
        >
          <div className="flex gap-2 items-center justify-between mb-1">
            <div className="flex gap-2 items-center">
              <h2 className="h6">Brawls</h2>
            </div>
            <button type="button" className="button button-xs button-ghost">
              <span>Your Brawl history</span>
            </button>
          </div>
          <HomeBrawlSolo />

        </section>
      </PrototypeStructure>
    </>
  );
}
