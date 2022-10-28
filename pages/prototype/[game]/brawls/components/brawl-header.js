import React from "react";
import { usePrototypeData } from "../../../../../contexts/prototype";
import { useRouter } from "next/router";
import Countdown from "../../../../../components/Countdown/Countdown";

function calculateTimeLeft() {
  const year = new Date().getFullYear();
  const date = new Date().getTime();
  const difference = +new Date(`${year}-10-1`) - date;
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
}

const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();
const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

export default function BrawlHeader() {
  const router = useRouter();
  const prototype = usePrototypeData();
  const { game } = router.query;
  const { brawl_id } = router.query;

  return (
    <>
      <section className="surface sm:rounded-lg mb-4 p-4">
        <div className="flex flex-col md:flex-row gap-1 justify-between items-center">
          <div className="flex gap-1.5 items-center">
            <h1 className="text-2xl leading-none">
              {prototype.getBrawlByID(game, brawl_id)?.name}
            </h1>
          </div>
          <div className="flex gap-1 items-center justify-center xl:justify-end whitespace-nowrap font-headings font-bold italic">
            <span className="text-ui-300 uppercase">Time Left:</span>
            <span className="icon icon-clock text-interaction-300" />
            <Countdown
              separator={"  "}
              hasDays={false}
              hasHours={true}
              hasMinutes={true}
              hasSeconds={true}
              targetDate={dateTimeAfterThreeDays}
              hasLabels={true}
              labelsAbbr={true}
              labelClassName="text-base mr-1 block"
              className="text-interaction-300 uppercase text-base gap-1"
            />
          </div>
        </div>
        <hr className="separator my-4" />
        <div className="flex flex-col lg:flex-row gap-4 items-start justify-between leading-none">
          <div className="">
            <div className="flex items-center gap-1.5">
              <span className="icon icon-archery-target icon-20 text-ui-200" />
              <h2 className="text-lg text-ui-200 whitespace-nowrap">
                Objective:
              </h2>
            </div>
            <div className="pl-6 text-ui-300 text-sm">Kills</div>
          </div>
          <div className="">
            <div className="flex items-center gap-1.5">
              <span className="icon icon-handheld-console-2 icon-20 text-ui-200" />
              <h2 className="text-lg text-ui-200 whitespace-nowrap">
                Game mode:
              </h2>
            </div>
            <div className="pl-6 text-ui-300 text-sm">
              Competitive 2v2 & 3v3 (Ranked only)
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-1.5">
              <span className="icon icon-lightning icon-20 text-ui-200" />
              <h2 className="text-lg text-ui-200 whitespace-nowrap">
                Tiebreaker:
              </h2>
            </div>
            <div className="pl-6 text-ui-300 text-sm">
              Headshots from your 3 best matches decide a tie
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
