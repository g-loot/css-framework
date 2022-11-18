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

export default function HomeBrawlSolo() {
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
      <div className="hidden">
        <button type="button" className="card-brawl-secondary card-stacked">
          <div className="card-image">
            <div className="card-image-content">
              <div>
                <div className="chip chip-sliced">
                  <span>Ongoing</span>
                </div>
              </div>
            </div>
            <div className="card-image-bg">
              <img
                src="https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-valorant-4.webp"
                alt=""
              />
            </div>
          </div>
          <div className="card-content">
            <div className="card-body">
              <div>
                <h2 className="text-2xl mb-2">Competitive Brawl</h2>
                <div>
                  <span className="icon icon-time-machine"></span>
                  <span>
                    Time left:{" "}
                    <Countdown
                      separator=":"
                      hasDays={false}
                      hasHours={true}
                      hasMinutes={true}
                      hasSeconds={true}
                    />
                  </span>
                </div>
              </div>
              <div>
                <label className="text-ui-300 uppercase text-sm">
                  Game mode
                </label>
                <p className="text-ui-200 font-bold">Competitive</p>
              </div>
            </div>
            <div className="card-meta">
              <div>
                <label className="text-ui-300 uppercase text-sm text-right">
                  Rewards
                </label>
                <div className="md:h-8">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center whitespace-nowrap gap-2">
                      <img
                        className="h-8"
                        src="https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-coin-unique.webp"
                        width="auto"
                        height="auto"
                        alt=""
                      />
                      <span className="font-headings font-bold text-2xl italic">
                        10 000
                      </span>
                    </div>
                    <div className="flex items-center whitespace-nowrap gap-2">
                      <img
                        className="h-8"
                        src="https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-ticket-unique.webp"
                        width="auto"
                        height="auto"
                        alt=""
                      />
                      <span className="font-headings font-bold text-2xl italic">
                        5
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </>
  );
}
