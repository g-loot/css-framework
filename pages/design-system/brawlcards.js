import React from "react";
import Tooltip from "../../components/Tooltip/Tooltip";
import { getLayout } from "../../components/DesignSystem/DSLayout";

const DSpage = () => {
  return (
    <>
      <h1 className="mb-2">Brawl cards</h1>

      {/* Structure */}
      <div className="mb-12" id="structure">
        <h2 className="h3 mb-3">Structure</h2>

        <div className="">
          <div className="flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-4">
              <div className="card-brawl">
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
                          <span className="countdown ">
                            <span style={{ "--value": 14 }}></span>:
                            <span style={{ "--value": 43 }}></span>:
                            <span style={{ "--value": 23 }}></span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="card-meta">
                    <div>
                      <label className="text-ui-300 uppercase text-sm">
                        Game mode
                      </label>
                      <p className="text-ui-200 font-bold">Competitive</p>
                    </div>
                    <div>
                      <label className="text-ui-300 uppercase text-sm text-right">
                        Reward
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

      {/* With additional content */}
      <div className="mb-12" id="with-additional-content">
        <h2 className="h3 mb-3">With additional content</h2>

        <div className="">
          <div className="flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-4">
              <div className="card-brawl">
                <div className="card-image">
                  <div className="card-image-content">
                    <div>
                      <div className="chip chip-sliced">
                        <span>Ongoing</span>
                      </div>
                    </div>
                    <div>
                      <figure className="avatar avatar-circle avatar-sm">
                        <div>
                          <img
                            src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_5.jpg"
                            alt=""
                          />
                        </div>
                        <i className="radar"></i>
                      </figure>
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
                            <div></div>
                            <span></span>
                          </a>
                        </li>
                        <li className="is-active">
                          <a href="#">
                            <i></i>
                            <div></div>
                            <span></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i></i>
                            <div></div>
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
                src="//jsfiddle.net/augustin_hiebel/26fL4u9s/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
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
                      <figure className="avatar avatar-circle avatar-sm">
                        <div>
                          <img
                            src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_5.jpg"
                            alt=""
                          />
                        </div>
                        <i className="radar"></i>
                      </figure>
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
                            <div></div>
                            <span></span>
                          </a>
                        </li>
                        <li className="is-active">
                          <a href="#">
                            <i></i>
                            <div></div>
                            <span></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i></i>
                            <div></div>
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
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
