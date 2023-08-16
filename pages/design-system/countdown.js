import React, { useEffect, useState } from "react";

import Countdown from "@/components/Countdown/Countdown";
import { getLayout } from "@/components/DesignSystem/DSLayout";

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

const DSpage = () => {
  console.log(dateTimeAfterThreeDays);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const id = setInterval(() => {
      console.log(calculateTimeLeft());
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <h1 className="mb-2">Countdown</h1>

      {/* Structure */}
      <div className="mb-12" id="structure">
        <h2 className="h3 mb-3">Structure</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <Countdown />
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/chnr8gbk/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className="mb-12" id="typography">
        <h2 className="h3 mb-3">Typography</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 text-center">
                <Countdown className="text-5xl font-headings" />
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/3c0gf9mx/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clock countdown */}
      <div className="mb-12" id="clock-countdown">
        <h2 className="h3 mb-3">Clock countdown</h2>

        <div className="surface rounded-lg p-4">
          <div className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12">
            <h3 className="h4 mb-6 lg:mb-10">With colons</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4 flex justify-center">
                <Countdown
                  separator=":"
                  hasDays={false}
                  hasHours={true}
                  hasMinutes={true}
                  hasSeconds={true}
                  className="text-5xl font-headings"
                />
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/z796tLpm/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12">
            <h3 className="h4 mb-6 lg:mb-10">With labels</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 flex justify-center items-baseline gap-2">
                <Countdown
                  hasDays={false}
                  hasHours={true}
                  hasMinutes={false}
                  hasSeconds={false}
                  className="text-5xl font-headings"
                  targetDate={dateTimeAfterThreeDays}
                />
                <small className="text-ui-300 text-xl">
                  hours
                </small>
                <Countdown
                  hasDays={false}
                  hasHours={false}
                  hasMinutes={true}
                  hasSeconds={false}
                  className="text-5xl font-headings"
                  targetDate={dateTimeAfterThreeDays}
                />
                <small className="text-ui-300 text-xl">
                  minutes
                </small>

                <Countdown
                  hasDays={false}
                  hasHours={false}
                  hasMinutes={false}
                  hasSeconds={true}
                  className="text-5xl font-headings"
                  targetDate={dateTimeAfterThreeDays}
                />
                <small className="text-ui-300 text-xl">
                  seconds
                </small>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/cgjvx4uq/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12">
            <h3 className="h4 mb-6 lg:mb-10">With labels under</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 flex flex-wrap justify-center gap-5 text-center">
                <div className="flex flex-col gap-1">
                  <Countdown
                    hasDays={false}
                    hasHours={true}
                    hasMinutes={false}
                    hasSeconds={false}
                    className="text-5xl font-headings"
                    targetDate={dateTimeAfterThreeDays}
                  />
                  <small className="text-ui-300 text-sm uppercase leading-none">
                    hours
                  </small>
                </div>
                <div className="flex flex-col gap-1">
                  <Countdown
                    hasDays={false}
                    hasHours={false}
                    hasMinutes={true}
                    hasSeconds={false}
                    className="text-5xl font-headings"
                    targetDate={dateTimeAfterThreeDays}
                  />
                  <small className="text-ui-300 text-sm uppercase leading-none">
                    minutes
                  </small>
                </div>
                <div className="flex flex-col gap-1">
                  <Countdown
                    hasDays={false}
                    hasHours={false}
                    hasMinutes={false}
                    hasSeconds={true}
                    className="text-5xl font-headings"
                    targetDate={dateTimeAfterThreeDays}
                  />
                  <small className="text-ui-300 text-sm uppercase leading-none">
                    seconds
                  </small>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/3w5js2gn/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12">
            <h3 className="h4 mb-6 lg:mb-10">In chip</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 flex flex-wrap justify-center gap-5 text-center">
                <div className="chip chip-secondary">
                  <span className="icon icon-time-machine" />
                  <span>
                    <span>Resets in</span>{" "}
                    <Countdown
                      separator=":"
                      hasDays={false}
                      hasHours={true}
                      hasMinutes={true}
                      hasSeconds={true}
                      targetDate={dateTimeAfterThreeDays}
                    />
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/8dt9nhcb/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="h4 mb-6 lg:mb-10">In boxes</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 flex flex-wrap justify-center gap-5 text-center">
                <div className="flex flex-wrap justify-center gap-5 text-center">
                  <div className="w-28 flex flex-col gap-1 rounded-xl bg-gradient-radial-spotlight from-ui-500 to-ui-700 p-4">
                    <Countdown
                      hasDays={false}
                      hasHours={true}
                      hasMinutes={false}
                      hasSeconds={false}
                      className="text-5xl font-headings"
                      targetDate={dateTimeAfterThreeDays}
                    />
                    <small className="text-ui-300 text-sm uppercase leading-none">
                      hours
                    </small>
                  </div>
                  <div className="w-28 flex flex-col gap-1 rounded-xl bg-gradient-radial-spotlight from-ui-500 to-ui-700 p-4">
                    <Countdown
                      hasDays={false}
                      hasHours={false}
                      hasMinutes={true}
                      hasSeconds={false}
                      className="text-5xl font-headings"
                      targetDate={dateTimeAfterThreeDays}
                    />
                    <small className="text-ui-300 text-sm uppercase leading-none">
                      minutes
                    </small>
                  </div>
                  <div className="w-28 flex flex-col gap-1 rounded-xl bg-gradient-radial-spotlight from-ui-500 to-ui-700 p-4">
                    <Countdown
                      hasDays={false}
                      hasHours={false}
                      hasMinutes={false}
                      hasSeconds={true}
                      className="text-5xl font-headings"
                      targetDate={dateTimeAfterThreeDays}
                    />
                    <small className="text-ui-300 text-sm uppercase leading-none">
                      seconds
                    </small>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/8xe6h9Lf/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
