import Countdown from "@/components/Countdown/Countdown";
import React, { useContext } from "react";
import Tooltip from "@/components/Tooltip/Tooltip";
import { getLayout } from "@/components/DesignSystem/DSLayout";
import { UiContext } from "@/contexts/ui";
import Anchor from "@/components/DesignSystem/DSanchor";

const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();
const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

const DSpage = () => {
  const uiContext = useContext(UiContext);
  return (
    <>
      <h1 className="mb-8">Ladder cards</h1>

      {/*
      Primary cards (deprecated)
      <div className="mb-3 flex gap-2 items-baseline">
        <h2 className="h3">Primary cards</h2>
        <button className="chip chip-xs chip-secondary pointer-events-none uppercase">
          <span>default</span>
        </button>
      </div>

      <div className="mb-12">
        <Anchor title="Structure" />

        <div className="">
          <div className="flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-4">
              <button type="button" className="card-ladder">
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
                      <h2 className="text-2xl mb-2">Competitive Ladder</h2>
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
                            <span className="text-2xl">
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
                            <span className="text-2xl">
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

      <div className="mb-12">
        <Anchor title="With additional content" />

        <div className="">
          <div className="flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-4">
              <button type="button" className="card-ladder">
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
                      <h2 className="text-2xl mb-2">Competitive Ladder</h2>
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
                        <div className="text-3xl text-main">
                          2/3
                        </div>
                        <div className="text-ui-300 text-sm">
                          matches played to get your total Ladder points
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
                          src="https://res.cloudinary.com/gloot/image/upload/v1663684817/Marketing/2022_Valorant_clash/Stryda_Valorant_Clash_Logo.svg"
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

      <div className="mb-12" id="loading">
        <h2 className="h3 mb-3">Loading</h2>

        <div className="">
          <div className="flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-4">
              <div className="card-ladder is-loading">
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
                      <h2 className="text-2xl mb-2">Competitive Ladder</h2>
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
                            Solo &amp; Clan Ladder
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
                        <div className="text-3xl text-main">
                          2/3
                        </div>
                        <div className="text-ui-300 text-sm">
                          matches played to get your total Ladder points
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
      </div> */}

      {/* structure */}
      <div className="mb-12">
        <Anchor title="Structure" />

        <div className="">
          <div className="flex flex-col gap-4">
            <div className="flex-1 flex flex-wrap gap-4">
              <div className="card-ladder card-secondary">
                <div className="card-image">
                  <div className="card-image-content">
                    <div className="rounded bg-ui-800/90 p-0.5 pr-3 flex gap-2 items-center text-sm text-ui-200">
                      <div className="ml-0 p-1 border border-ui-700 rounded-sm bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
                        <span className="icon text-xl icon-game-pubg-symbol text-game-pubg" />
                      </div>
                      <span>Competitive</span>
                      <span className="card-status">Ongoing</span>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <div className="card-body">
                    <div>
                      <h2 className="h4 mb-2">Competitive Ladder</h2>
                      <div className="flex gap-4 items-center">
                        <div className="flex items-center whitespace-nowrap gap-2">
                          <img
                            className="h-6"
                            src="https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-coin-unique.webp"
                            width="auto"
                            height="auto"
                            alt=""
                          />
                          <span className="text-gold-500 text-sm">
                            5k - 30k
                          </span>
                        </div>
                        <div className="flex gap-1 items-center text-sm text-ui-300 whitespace-nowrap">
                          <span className="mr-1">Time Left:</span>
                          <span className="icon icon-clock" />
                          <span>23H</span>
                          <span>19M</span>
                          <span>13S</span>
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
                      <span className="text-sm text-ui-300">
                        423 players are partaking
                      </span>
                    </div>
                    <button
                      type="button"
                      className="button button-sm button-primary"
                    >
                      View Ladder
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
            </div>
            <div className="flex-1">
              <iframe
                className="rounded"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/yLu5rfpg/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Active */}
      <div className="mb-12">
        <Anchor title="Active" />

        <div className="">
          <p className="text-ui-300 mb-6">
            You can add make a secondary <b>active</b> card by adding the
            following class name:
            <code
              className="interactive text-xs"
              onClick={() => {
                uiContext.openToastr({
                  size: "small",
                  text: "class name to your clipboard",
                  color: "green",
                  autoDelete: true,
                  autoDeleteDelay: 2500,
                });
                navigator.clipboard.writeText("is-active");
              }}
            >
              .is-active
            </code>
            .<br />
            Active cards have a glow around them and their card status text
            color and animation is affected.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex-1 flex flex-wrap gap-4">
              <div className="card-ladder card-secondary is-active">
                <div className="card-image">
                  <div className="card-image-content">
                    <div className="rounded bg-ui-800/90 p-0.5 pr-3 flex gap-2 items-center text-sm text-ui-200">
                      <div className="ml-0 p-1 border border-ui-700 rounded-sm bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
                        <span className="icon text-xl icon-game-pubg-symbol text-game-pubg" />
                      </div>
                      <span>Competitive</span>
                      <span className="card-status">Partaking</span>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <div className="card-body">
                    <div>
                      <h2 className="h4 mb-2">Competitive Ladder</h2>
                      <div className="flex gap-4 items-center">
                        <div className="flex items-center whitespace-nowrap gap-2">
                          <img
                            className="h-6"
                            src="https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-coin-unique.webp"
                            width="auto"
                            height="auto"
                            alt=""
                          />
                          <span className="text-currency-1-500 text-sm">
                            5k - 30k
                          </span>
                        </div>
                        <div className="flex gap-1 items-center text-sm text-ui-300 whitespace-nowrap">
                          <span className="mr-1">Time Left:</span>
                          <span className="icon icon-clock" />
                          <span>23H</span>
                          <span>19M</span>
                          <span>13S</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-meta">
                    <div className="flex-1 flex items-center gap-4">
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
                        View Ladder
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
                src="//jsfiddle.net/augustin_hiebel/m1q7gLps/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* inactive */}
      <div className="mb-12">
        <Anchor title="Inactive" />

        <div className="">
          <p className="text-ui-300 mb-6">
            You can add make a secondary <b>inactive</b> card by adding the
            following class name:
            <code
              className="interactive text-xs"
              onClick={() => {
                uiContext.openToastr({
                  size: "small",
                  text: "class name to your clipboard",
                  color: "green",
                  autoDelete: true,
                  autoDeleteDelay: 2500,
                });
                navigator.clipboard.writeText("is-inactive");
              }}
            >
              .is-inactive
            </code>
            .<br />
            Inactive cards have dimmed down image and their card status text
            color is affected.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex-1 flex flex-wrap gap-4">
              <div className="card-ladder card-secondary is-inactive">
                <div className="card-image">
                  <div className="card-image-content">
                    <div className="rounded bg-ui-800/90 p-0.5 pr-3 flex gap-2 items-center text-sm text-ui-200">
                      <div className="ml-0 p-1 border border-ui-700 rounded-sm bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
                        <span className="icon text-xl icon-game-pubg-symbol text-game-pubg" />
                      </div>
                      <span>Competitive</span>
                      <span className="card-status">Finished</span>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <div className="card-body">
                    <div>
                      <h2 className="h4 mb-2">Competitive Ladder</h2>
                      <div className="flex gap-4 items-center">
                        <div className="flex items-center whitespace-nowrap gap-2">
                          <img
                            className="h-6"
                            src="https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-coin-unique.webp"
                            width="auto"
                            height="auto"
                            alt=""
                          />
                          <span className="text-gold-500 text-sm">
                            5k - 30k
                          </span>
                        </div>
                        <div className="text-sm text-ui-300">
                          This competition has ended
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
                      <span className="text-sm text-ui-300">
                        423 players are partaking
                      </span>
                    </div>
                    <button
                      type="button"
                      className="button button-sm button-primary"
                    >
                      View Ladder
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
            </div>
            <div className="flex-1">
              <iframe
                className="rounded"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/16fa8rvj/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* with overlay */}
      <div className="mb-12">
        <Anchor title="With overlay" />

        <div className="">
          <div className="flex flex-col gap-4">
            <div className="flex-1 flex flex-wrap gap-4">
              <div className="card-ladder card-secondary">
                <div className="card-overlay">
                  <div>
                    <div className="text-2xl text-ui-100">You won a prize!</div>
                    <button
                      type="button"
                      className="button button-claim is-shining"
                    >
                      <span className="icon icon-present animate-bounce" />
                      <span>Claim rewards</span>
                    </button>
                  </div>
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1672221451/Stryda/illustrations/card-rewarddoverlay-bg.png"
                    alt=""
                  />
                </div>
                <div className="card-image">
                  <div className="card-image-content">
                    <div className="rounded bg-ui-800/90 p-0.5 pr-3 flex gap-2 items-center text-sm text-ui-200">
                      <div className="ml-0 p-1 border border-ui-700 rounded-sm bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
                        <span className="icon text-xl icon-game-pubg-symbol text-game-pubg" />
                      </div>
                      <span>Competitive</span>
                      <span className="card-status">Finished</span>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <div className="card-body">
                    <div>
                      <h2 className="h4 mb-2">Competitive Ladder</h2>
                      <div className="flex gap-4 items-center">
                        <div className="text-sm text-ui-300">
                          This competition has ended
                        </div>
                        <div className="flex items-center whitespace-nowrap gap-2">
                          <img
                            className="h-6"
                            src="https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-coin-unique.webp"
                            width="auto"
                            height="auto"
                            alt=""
                          />
                          <span className="text-currency-1-500 text-sm">
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
                      <span className="text-sm text-ui-300">
                        423 players have partaken
                      </span>
                    </div>
                    <button
                      type="button"
                      className="button button-sm button-primary"
                    >
                      View Ladder
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
            </div>
            <div className="flex-1">
              <iframe
                className="rounded"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/d4vjskp9/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* horizontal */}
      <div className="mb-12">
        <Anchor title="Horizontal" />

        <div className="">
          <p className="text-ui-300 mb-6">
            You can make a secondary Ladder card horizontal by adding the
            following class name:
            <code
              className="interactive text-xs"
              onClick={() => {
                uiContext.openToastr({
                  size: "small",
                  text: "class name to your clipboard",
                  color: "green",
                  autoDelete: true,
                  autoDeleteDelay: 2500,
                });
                navigator.clipboard.writeText("card-horizontal");
              }}
            >
              .card-horizontal
            </code>
            .
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex-1 flex flex-wrap gap-4">
              <div className="card-ladder card-secondary card-horizontal">
                <div className="card-image">
                  <div className="card-image-content">
                    <div className="rounded bg-ui-800/90 p-0.5 pr-3 flex gap-2 items-center text-sm text-ui-200">
                      <div className="ml-0 p-1 border border-ui-700 rounded-sm bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
                        <span className="icon text-xl icon-game-pubg-symbol text-game-pubg" />
                      </div>
                      <span>Competitive</span>
                      <span className="card-status">Ongoing</span>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <div className="card-body">
                    <div>
                      <h2 className="h4 mb-2">Competitive Ladder</h2>
                      <div className="flex gap-4 items-center">
                        <div className="flex items-center whitespace-nowrap gap-2">
                          <img
                            className="h-6"
                            src="https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-coin-unique.webp"
                            width="auto"
                            height="auto"
                            alt=""
                          />
                          <span className="text-gold-500 text-sm">
                            5k - 30k
                          </span>
                        </div>
                        <div className="flex gap-1 items-center text-sm text-ui-300 whitespace-nowrap">
                          <span className="mr-1">Time Left:</span>
                          <span className="icon icon-clock" />
                          <span>23H</span>
                          <span>19M</span>
                          <span>13S</span>
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
                      <span className="text-sm text-ui-300">
                        423 players are partaking
                      </span>
                    </div>
                    <button
                      type="button"
                      className="button button-sm button-primary"
                    >
                      View Ladder
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
            </div>
            <div className="flex-1">
              <iframe
                className="rounded"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/gyh1jv6n/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary responsive horizontal */}
      <div className="mb-12">
        <Anchor title="Responsive horizontal" />

        <div className="">
          <p className="text-ui-300 mb-6">
            You can make a secondary Ladder card horizontal based on the screen
            size using the following class name:
            <code
              className="interactive text-xs"
              onClick={() => {
                uiContext.openToastr({
                  size: "small",
                  text: "class name to your clipboard",
                  color: "green",
                  autoDelete: true,
                  autoDeleteDelay: 2500,
                });
                navigator.clipboard.writeText("lg:card-horizontal");
              }}
            >
              .&#123;xx&#x7D;:card-horizontal
            </code>
            .<br />
            &#123;xx&#x7D; can be <code className="text-xs">xs</code>,{" "}
            <code className="text-xs">sm</code>,{" "}
            <code className="text-xs">md</code>,{" "}
            <code className="text-xs">lg</code>,{" "}
            <code className="text-xs">xl</code>.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex-1 flex flex-wrap gap-4">
              <div className="card-ladder card-secondary lg:card-horizontal">
                <div className="card-image">
                  <div className="card-image-content">
                    <div className="rounded bg-ui-800/90 p-0.5 pr-3 flex gap-2 items-center text-sm text-ui-200">
                      <div className="ml-0 p-1 border border-ui-700 rounded-sm bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
                        <span className="icon text-xl icon-game-pubg-symbol text-game-pubg" />
                      </div>
                      <span>Competitive</span>
                      <span className="card-status">Ongoing</span>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <div className="card-body">
                    <div>
                      <h2 className="h4 mb-2">Competitive Ladder</h2>
                      <div className="flex gap-4 items-center">
                        <div className="flex items-center whitespace-nowrap gap-2">
                          <img
                            className="h-6"
                            src="https://res.cloudinary.com/gloot/image/upload/v1658134262/Marketing/2022_prototype/CurrencyRewards/Reward-cropped-coin-unique.webp"
                            width="auto"
                            height="auto"
                            alt=""
                          />
                          <span className="text-currency-1-500 text-sm">
                            5k - 30k
                          </span>
                        </div>
                        <div className="flex gap-1 items-center text-sm text-ui-300 whitespace-nowrap">
                          <span className="mr-1">Time Left:</span>
                          <span className="icon icon-clock" />
                          <span>23H</span>
                          <span>19M</span>
                          <span>13S</span>
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
                      <span className="text-sm text-ui-300">
                        423 players are partaking
                      </span>
                    </div>
                    <button
                      type="button"
                      className="button button-sm button-primary"
                    >
                      View Ladder
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
            </div>
            <div className="flex-1">
              <iframe
                className="rounded"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/6u7xhz8k/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
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
