import Countdown from "../../components/Countdown/Countdown";
import React from "react";
import Tooltip from "../../components/Tooltip/Tooltip";
import { getLayout } from "../../components/DesignSystem/DSLayout";

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
  return (
    <>
      <h1 className="mb-2">Brawl cards</h1>

      <div className="mb-3 flex gap-2 items-baseline">
        <h2 className="h3">Primary cards</h2>
        <button className="chip chip-xs chip-secondary pointer-events-none uppercase">
          <span>default</span>
        </button>
      </div>
      {/* Structure */}
      <div className="mb-12" id="structure">
        <h2 className="h4 mb-3">Structure</h2>

        <div className="">
          <div className="flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-4">
              <button type="button" className="card-brawl">
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
                      <div className="chip chip-sm chip-secondary">
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
            <div className="flex-1">
              <iframe
                className="rounded"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/1ypr38wg/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* With additional content */}
      <div className="mb-12" id="with-additional-content">
        <h2 className="h4 mb-3">With additional content</h2>

        <div className="">
          <div className="flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-4">
              <button type="button" className="card-brawl">
                <div className="card-image">
                  <div className="card-image-content">
                    <div>
                      <div className="chip chip-sliced">
                        <span>Ongoing</span>
                      </div>
                    </div>
                    <div>
                      <div className="avatar avatar-circle avatar-sm">
                        <div>
                          <img
                            src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_5.jpg"
                            alt=""
                          />
                        </div>
                        <i className="radar"></i>
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
                      <div className="chip chip-sm chip-secondary">
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
                      <div className="flex gap-1.5 items-baseline">
                        <div className="font-headings font-bold text-3xl italic text-main">
                          2/3
                        </div>
                        <div className="text-ui-300 text-sm">
                          matches played to get your total Brawl points
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-meta">
                    <div className="flex justify-center">
                      <Tooltip
                        tooltip={
                          <div className="max-w-xs text-sm text-center leading-tight">
                            Place high on the Clan leaderboard for a chance to
                            quality for VALORANT Clash
                          </div>
                        }
                      >
                        <img
                          alt=""
                          height="300px"
                          width="200px"
                          src="https://res.cloudinary.com/gloot/image/upload/v1663684817/Marketing/2022_Valorant_clash/G-Loot_Valorant_Clash_Logo.svg"
                        />
                      </Tooltip>
                    </div>
                    <div className="w-60">
                      <ul className="step step-primary step-sm w-full max-w-xs">
                        <li>
                          <a href="#">
                            <i></i>
                            <div />
                            <span></span>
                          </a>
                        </li>
                        <li className="is-active">
                          <a href="#">
                            <i></i>
                            <div />
                            <span></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i></i>
                            <div />
                            <span></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div className="flex-1">
              <iframe
                className="rounded"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/26fL4u9s/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-3 flex gap-2 items-baseline">
        <h2 className="h3">Status</h2>
      </div>

      {/* Loading */}
      <div className="mb-12" id="loading">
        <h2 className="h3 mb-3">Loading</h2>

        <div className="">
          <div className="flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-4">
              <div className="card-brawl is-loading">
                <div className="card-image">
                  <div className="card-image-content">
                    <div>
                      <div className="chip chip-sliced">
                        <span>Ongoing</span>
                      </div>
                    </div>
                    <div>
                      <div className="avatar avatar-circle avatar-sm">
                        <div>
                          <img
                            src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_5.jpg"
                            alt=""
                          />
                        </div>
                        <i className="radar"></i>
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
                      <div className="chip chip-sm chip-secondary">
                        <span className="icon icon-time-machine"></span>
                        <span>
                          Time left:{" "}
                          <span className="countdown ">
                            <span style={{ "--value": 14 }}></span>:
                            <span style={{ "--value": 43 }}></span>:
                            <span style={{ "--value": 23 }}></span>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div>
                      <Tooltip
                        tooltip={
                          <div className="max-w-xs text-sm text-center leading-tight">
                            Solo &amp; Clan Brawl
                          </div>
                        }
                      >
                        <div className="flex items-center gap-2 text-xl text-ui-300">
                          <span className="icon icon-profile-2"></span>
                          <span className="">/</span>
                          <span className="icon icon-multiple-12"></span>
                        </div>
                      </Tooltip>
                    </div>
                  </div>
                  <div className="card-meta">
                    <div>
                      <div className="flex gap-1.5 items-baseline">
                        <div className="font-headings font-bold text-3xl italic text-main">
                          2/3
                        </div>
                        <div className="text-ui-300 text-sm">
                          matches played to get your total Brawl points
                        </div>
                      </div>
                    </div>
                    <div className="w-60">
                      <ul className="step step-primary step-sm w-full max-w-xs">
                        <li>
                          <a href="#">
                            <i></i>
                            <div />
                            <span></span>
                          </a>
                        </li>
                        <li className="is-active">
                          <a href="#">
                            <i></i>
                            <div />
                            <span></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i></i>
                            <div />
                            <span></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <iframe
                className="rounded"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/Lq5ap92f/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-3 flex gap-2 items-baseline">
        <h2 className="h3">Secondary cards</h2>
      </div>

      {/* Stacked */}
      <div className="mb-12" id="secondary-stacked">
        <h2 className="h4 mb-3">Stacked</h2>

        <div className="">
          <div className="flex flex-col gap-4">
            <div className="flex-1 flex flex-wrap gap-4">
              <div className="card-brawl card-secondary card-stacked is-active">
                <div className="card-image">
                  <div className="card-image-content">
                    <div className="rounded bg-ui-800/90 backdrop-blur-sm p-0.5 pr-3 flex gap-2 items-center text-sm text-ui-200">
                      <div className="ml-0 p-1 border border-ui-700 rounded-sm bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
                        <span className="icon text-xl icon-game-pubg-symbol text-game-pubg" />
                      </div>
                      <span>Competitive</span>
                      <span className="text-main card-status">Partaking</span>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <div className="card-body">
                    <div>
                      <h2 className="text-3xl mb-2 uppercase">
                        Competitive Brawl
                      </h2>
                      <div className="flex gap-4">
                        <div className="flex text-sm gap-1 items-center whitespace-nowrap">
                          <span className="text-ui-300 mr-1">Time Left:</span>
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
                            className="text-interaction-300 uppercase text-sm gap-1 font-bold"
                          />
                        </div>
                        <div className="flex items-center whitespace-nowrap gap-2">
                          <img
                            className="h-6"
                            src="https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-coin-unique.webp"
                            width="auto"
                            height="auto"
                            alt=""
                          />
                          <span className="font-bold text-gold-500 text-sm">
                            10 000
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-meta">
                    <div className="flex-1 flex items-center gap-4 leading-tight">
                      <div className="flex-none avatar avatar-circle avatar-xs">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_1.jpg" />
                        </div>
                      </div>
                      <div className="infobanner is-active">
                        <div className="flex gap-2 infobanner-front">
                          <div>
                            <div className="uppercase text-xs text-ui-300">
                              Points
                            </div>
                            <div className="text-sm font-bold">1120</div>
                          </div>
                          <div>
                            <div className="uppercase text-xs text-ui-300">
                              Position
                            </div>
                            <div className="text-sm font-bold">#243</div>
                          </div>
                        </div>
                        <div className="infobanner-back absolute inset-0 flex items-center text-sm">
                          <div className="animate-pulse text-ui-300">
                            Waiting for your 3 matches...
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-end">
                      <button
                        type="button"
                        className="button button-sm button-primary"
                      >
                        Go to Brawl
                      </button>
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
              <div className="card-brawl card-secondary card-stacked">
                <div className="card-image">
                  <div className="card-image-content">
                    <div className="rounded bg-ui-800/90 backdrop-blur-sm p-0.5 pr-3 flex gap-2 items-center text-sm text-ui-200">
                      <div className="ml-0 p-1 border border-ui-700 rounded-sm bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
                        <span className="icon text-xl icon-game-pubg-symbol text-game-pubg" />
                      </div>
                      <span>Competitive</span>
                      <span className="text-blue-300 card-status">Ongoing</span>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <div className="card-body">
                    <div>
                      <h2 className="text-3xl mb-2 uppercase">
                        Competitive Brawl
                      </h2>
                      <div className="flex gap-4">
                        <div className="flex text-sm gap-1 items-center whitespace-nowrap">
                          <span className="text-ui-300 mr-1">Time Left:</span>
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
                            className="text-interaction-300 uppercase text-sm gap-1 font-bold"
                          />
                        </div>
                        <div className="flex items-center whitespace-nowrap gap-2">
                          <img
                            className="h-6"
                            src="https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-coin-unique.webp"
                            width="auto"
                            height="auto"
                            alt=""
                          />
                          <span className="font-bold text-gold-500 text-sm">
                            10 000
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-meta">
                    <div className="flex items-center gap-2">
                      <div className="avatar-group -space-x-2">
                        <div className="avatar avatar-circle avatar-tiny">
                          <div>
                            <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_1.jpg" />
                          </div>
                        </div>
                        <div className="avatar avatar-circle avatar-tiny">
                          <div>
                            <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_2.jpg" />
                          </div>
                        </div>
                        <div className="avatar avatar-circle avatar-tiny">
                          <div>
                            <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg" />
                          </div>
                        </div>
                        
                      </div>
                      <span className="text-sm text-ui-300">423 players are partaking</span>
                    </div>
                    <button
                      type="button"
                      className="button button-sm button-primary"
                    >
                      Explore
                    </button>
                  </div>
                </div>
                <div className="card-image-bg">
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1660720108/Marketing/2022_prototype/DummyContent/banners/banner-valorant-4.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="card-brawl card-secondary">
                <div className="card-image">
                  <div className="card-image-content">
                    <div className="rounded bg-ui-800/90 backdrop-blur-sm p-0.5 pr-3 flex gap-2 items-center text-sm text-ui-200">
                      <div className="ml-0 p-1 border border-ui-700 rounded-sm bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
                        <span className="icon text-xl icon-game-pubg-symbol text-game-pubg" />
                      </div>
                      <span>Competitive</span>
                      <span className="text-main card-status">Partaking</span>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <div className="card-body">
                    <div>
                      <h2 className="text-3xl mb-2 uppercase">
                        Competitive Brawl
                      </h2>
                      <div className="flex gap-4">
                        <div className="flex text-sm gap-1 items-center whitespace-nowrap">
                          <span className="text-ui-300 mr-1">Time Left:</span>
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
                            className="text-interaction-300 uppercase text-sm gap-1 font-bold"
                          />
                        </div>
                        <div className="flex items-center whitespace-nowrap gap-2">
                          <img
                            className="h-6"
                            src="https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-coin-unique.webp"
                            width="auto"
                            height="auto"
                            alt=""
                          />
                          <span className="font-bold text-gold-500 text-sm">
                            10 000
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-meta">
                    <div className="flex-1 flex items-center gap-4 leading-tight">
                      <div className="flex-none avatar avatar-circle avatar-xs">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_1.jpg" />
                        </div>
                      </div>
                      <div className="infobanner is-active">
                        <div className="flex gap-2 infobanner-front">
                          <div>
                            <div className="uppercase text-xs text-ui-300">
                              Points
                            </div>
                            <div className="text-sm font-bold">1120</div>
                          </div>
                          <div>
                            <div className="uppercase text-xs text-ui-300">
                              Position
                            </div>
                            <div className="text-sm font-bold">#243</div>
                          </div>
                        </div>
                        <div className="infobanner-back absolute inset-0 flex items-center text-sm">
                          <div className="animate-pulse text-ui-300">
                            Waiting for your 3 matches...
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-end">
                      <button
                        type="button"
                        className="button button-sm button-primary"
                      >
                        Go to Brawl
                      </button>
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
            </div>
            <div className="flex-1">
              <iframe
                className="rounded"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/1ypr38wg/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
