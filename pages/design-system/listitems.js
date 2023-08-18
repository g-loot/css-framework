import React, { useState } from "react";

import { getLayout } from "@/components/DesignSystem/DSLayout";

const DSpage = () => {
  const [StartAnim, setStartAnim] = useState(false);

  function handleStartAnim() {
    setStartAnim(true);

    const timer = setTimeout(() => {
      setStartAnim(false);
    }, 1000);
    return () => clearTimeout(timer);
  }

  return (
    <>
      <h1 className="mb-2">List items</h1>

      {/* Structure */}
      <div className="mb-12" id="structure">
        <h2 className="h3 mb-3">Structure</h2>

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
              <div className="flex-1 surface rounded-xl overflow-hidden">
                <ul>
                  <li className="item">
                    <div className="item-image">
                      <div className="avatar avatar-xs">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_1.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title">Croc Esports</div>
                      <div className="text-ui-300 text-xs">3 members</div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-image">
                      <div className="avatar avatar-xs">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_2.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title">Kingzz</div>
                      <div className="text-ui-300 text-xs">3 members</div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-image">
                      <div className="avatar avatar-xs">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title">Angry Beavers</div>
                      <div className="text-ui-300 text-xs">3 members</div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-image">
                      <div className="avatar avatar-xs">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_4.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title">Bunny Hunger</div>
                      <div className="text-ui-300 text-xs">3 members</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/0mn7yqpo/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With no divide */}
      <div className="mb-12" id="with-no-divide">
        <h2 className="h3 mb-3">With no divide</h2>

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
              <div className="flex-1 surface rounded-xl overflow-hidden">
                <ul className="divide-y-0">
                  <li className="item">
                    <div className="item-image">
                      <div className="avatar avatar-xs">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_1.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title">Croc Esports</div>
                      <div className="text-ui-300 text-xs">3 members</div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-image">
                      <div className="avatar avatar-xs">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_2.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title">Kingzz</div>
                      <div className="text-ui-300 text-xs">3 members</div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-image">
                      <div className="avatar avatar-xs">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title">Angry Beavers</div>
                      <div className="text-ui-300 text-xs">3 members</div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-image">
                      <div className="avatar avatar-xs">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_4.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title">Bunny Hunger</div>
                      <div className="text-ui-300 text-xs">3 members</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/fwqt69r3/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With action */}
      <div className="mb-12" id="with-action">
        <h2 className="h3 mb-3">With action</h2>

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
              <div className="flex-1 surface rounded-lg overflow-hidden">
                <ul>
                  <li className="item">
                    <div className="item-image">
                      <div className="avatar avatar-xs">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_5.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title">Croc Esports</div>
                      <div className="text-ui-300 text-xs">3 members</div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Join team"
                        >
                          <span className="icon icon-b-add" />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-image">
                      <div className="avatar avatar-xs">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_6.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title">Kingzz</div>
                      <div className="text-ui-300 text-xs">3 members</div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Join team"
                        >
                          <span className="icon icon-b-add" />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-image">
                      <div className="avatar avatar-xs">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_7.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title">Angry Beavers</div>
                      <div className="text-ui-300 text-xs">3 members</div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Join team"
                        >
                          <span className="icon icon-b-add" />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-image">
                      <div className="avatar avatar-xs">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_8.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title">Bunny Hunger</div>
                      <div className="text-ui-300 text-xs">3 members</div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Join team"
                        >
                          <span className="icon icon-b-add" />
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/xj50zs89/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* As table */}
      <div className="mb-12" id="as-table">
        <h2 className="h3 mb-3">As table</h2>

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
              <div className="flex-1 surface rounded-lg overflow-hidden">
                <ul>
                  <li className="item">
                    <div className="item-image">
                      <div className="chip chip-reward chip-gold chip-xs chip-inverted h-6 w-6 text-xs">
                        <span>1</span>
                      </div>
                    </div>
                    <div className="item-image">
                      <div className="avatar avatar-tiny">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_9.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title">Croc Esports</div>
                    </div>
                    <div className="item-body text-center text-sm text-ui-300">
                      54
                    </div>
                    <div className="item-body text-center flex-2 hidden xl:block">
                      <div className="flex justify-center">
                        <div className="flex justify-center items-center px-3 gap-2 bg-gradient-to-b from-ui-900/50 to-ui-900/0 rounded-full">
                          <div className="flex items-center">
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-centered-coin-small.png"
                              width="34"
                              height="auto"
                            />
                            <span className="text-sm text-currency-1-500">16350</span>
                          </div>
                          {/*
                          <div className="flex items-center gap-1">
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1654152412/Marketing/2022_prototype/CurrencyRewards/Reward-centered-ticket-unique.png"
                              width="34"
                              height="auto"
                            />
                            <span className="text-sm text-currency-3-500">1</span>
                          </div>
  */}
                        </div>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="View details"
                        >
                          <span className="icon icon-a-chart" />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-image">
                      <div className="chip chip-reward chip-silver chip-xs chip-inverted h-6 w-6 text-xs">
                        <span>2</span>
                      </div>
                    </div>
                    <div className="item-image">
                      <div className="avatar avatar-tiny">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_10.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title">Kingzz</div>
                    </div>
                    <div className="item-body text-center text-sm text-ui-300">
                      27
                    </div>
                    <div className="item-body text-center flex-2 hidden xl:block">
                      <div className="flex justify-center">
                        <div className="flex justify-center items-center px-3 gap-2 bg-gradient-to-b from-ui-900/50 to-ui-900/0 rounded-full">
                          <div className="flex items-center">
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-centered-coin-small.png"
                              width="34"
                              height="auto"
                            />
                            <span className="text-sm text-gold-500">13100</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1654152412/Marketing/2022_prototype/CurrencyRewards/Reward-centered-ticket-unique.png"
                              width="34"
                              height="auto"
                            />
                            <span className="text-sm text-bronze-500">1</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="View details"
                        >
                          <span className="icon icon-a-chart" />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-image">
                      <div className="chip chip-reward chip-bronze chip-xs chip-inverted h-6 w-6 text-xs">
                        <span>3</span>
                      </div>
                    </div>
                    <div className="item-image">
                      <div className="avatar avatar-tiny">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_11.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title">Angry Beavers</div>
                    </div>
                    <div className="item-body text-center text-sm text-ui-300">
                      12
                    </div>
                    <div className="item-body text-center flex-2 hidden xl:block">
                      <div className="flex justify-center">
                        <div className="flex justify-center items-center px-3 gap-2 bg-gradient-to-b from-ui-900/50 to-ui-900/0 rounded-full">
                          <div className="flex items-center">
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-centered-coin-small.png"
                              width="34"
                              height="auto"
                            />
                            <span className="text-sm text-currency-1-500">10600</span>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="View details"
                        >
                          <span className="icon icon-a-chart" />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-image">
                      <div className="chip chip-reward chip-neutral chip-xs chip-inverted h-6 w-6 text-xs">
                        <span>4</span>
                      </div>
                    </div>
                    <div className="item-image">
                      <div className="avatar avatar-tiny">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_12.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title">Bunny Hunger</div>
                    </div>
                    <div className="item-body text-center text-sm text-ui-300">
                      10
                    </div>
                    <div className="item-body text-center flex-2 hidden xl:block">
                      <div className="flex justify-center">
                        <div className="flex justify-center items-center px-3 gap-2 bg-gradient-to-b from-ui-900/50 to-ui-900/0 rounded-full">
                          <div className="flex items-center">
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1653391336/Marketing/2022_prototype/CurrencyRewards/Reward-centered-coin-small.png"
                              width="34"
                              height="auto"
                            />
                            <span className="text-sm text-currency-1-500">8150</span>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="View details"
                        >
                          <span className="icon icon-a-chart" />
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/vet6bdh5/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With dimmed actions */}
      <div className="mb-12" id="with-dimmed-actions">
        <h2 className="h3 mb-3">With dimmed actions</h2>

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
              <div className="flex-1 surface rounded-lg overflow-hidden">
                <ul className="item-actions-dimmed">
                  <li className="item">
                    <div className="item-body">
                      <div className="item-title">Ladder #1</div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="View details"
                        >
                          <span className="icon icon-view" />
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Share"
                        >
                          <span className="icon icon-network-communication" />
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Delete"
                        >
                          <span className="icon icon-e-remove" />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-body">
                      <div className="item-title">Ladder #2</div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="View details"
                        >
                          <span className="icon icon-view" />
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Share"
                        >
                          <span className="icon icon-network-communication" />
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Delete"
                        >
                          <span className="icon icon-e-remove" />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-body">
                      <div className="item-title">Ladder #3</div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="View details"
                        >
                          <span className="icon icon-view" />
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Share"
                        >
                          <span className="icon icon-network-communication" />
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Delete"
                        >
                          <span className="icon icon-e-remove" />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-body">
                      <div className="item-title">Ladder #4</div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="View details"
                        >
                          <span className="icon icon-view" />
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Share"
                        >
                          <span className="icon icon-network-communication" />
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Delete"
                        >
                          <span className="icon icon-e-remove" />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-body">
                      <div className="item-title">Ladder #5</div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="View details"
                        >
                          <span className="icon icon-view" />
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Share"
                        >
                          <span className="icon icon-network-communication" />
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Delete"
                        >
                          <span className="icon icon-e-remove" />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-body">
                      <div className="item-title">Ladder #6</div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="View details"
                        >
                          <span className="icon icon-view" />
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Share"
                        >
                          <span className="icon icon-network-communication" />
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Delete"
                        >
                          <span className="icon icon-e-remove" />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-body">
                      <div className="item-title">Ladder #7</div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="View details"
                        >
                          <span className="icon icon-view" />
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Share"
                        >
                          <span className="icon icon-network-communication" />
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Delete"
                        >
                          <span className="icon icon-e-remove" />
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/gnfe8zrm/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With hidden actions */}
      <div className="mb-12" id="with-hidden-actions">
        <h2 className="h3 mb-3">With hidden actions</h2>

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
              <div className="flex-1 surface rounded-lg overflow-hidden">
                <ul className="item-actions-hidden">
                  <li className="item">
                    <div className="item-body">
                      <div className="item-title">Ladder #1</div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="View details"
                        >
                          <span className="icon icon-view" />
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Share"
                        >
                          <span className="icon icon-network-communication" />
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Delete"
                        >
                          <span className="icon icon-e-remove" />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-body">
                      <div className="item-title">Ladder #2</div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="View details"
                        >
                          <span className="icon icon-view" />
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Share"
                        >
                          <span className="icon icon-network-communication" />
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Delete"
                        >
                          <span className="icon icon-e-remove" />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-body">
                      <div className="item-title">Ladder #3</div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="View details"
                        >
                          <span className="icon icon-view" />
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Share"
                        >
                          <span className="icon icon-network-communication" />
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Delete"
                        >
                          <span className="icon icon-e-remove" />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-body">
                      <div className="item-title">Ladder #4</div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="View details"
                        >
                          <span className="icon icon-view" />
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Share"
                        >
                          <span className="icon icon-network-communication" />
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Delete"
                        >
                          <span className="icon icon-e-remove" />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-body">
                      <div className="item-title">Ladder #5</div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="View details"
                        >
                          <span className="icon icon-view" />
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Share"
                        >
                          <span className="icon icon-network-communication" />
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Delete"
                        >
                          <span className="icon icon-e-remove" />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-body">
                      <div className="item-title">Ladder #6</div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="View details"
                        >
                          <span className="icon icon-view" />
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Share"
                        >
                          <span className="icon icon-network-communication" />
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Delete"
                        >
                          <span className="icon icon-e-remove" />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-body">
                      <div className="item-title">Ladder #7</div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="View details"
                        >
                          <span className="icon icon-view" />
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Share"
                        >
                          <span className="icon icon-network-communication" />
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <button
                          className="button button-sm button-secondary rounded-full tooltip tooltip-left"
                          data-tooltip="Delete"
                        >
                          <span className="icon icon-e-remove" />
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/57s9pt4v/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive */}
      <div className="mb-12" id="interactive">
        <h2 className="h3 mb-3">Interactive</h2>

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
              <div className="flex-1 surface rounded-lg overflow-hidden">
                <ul className="item-interactive">
                  <li className="item">
                    <div className="item-body">
                      <div className="item-title">Ladder #1</div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-body">
                      <div className="item-title">Ladder #2</div>
                    </div>
                  </li>
                  <li className="item is-active">
                    <div className="item-body">
                      <div className="item-title">Ladder #3</div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-body">
                      <div className="item-title">Ladder #4</div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-body">
                      <div className="item-title">Ladder #5</div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-body">
                      <div className="item-title">Ladder #6</div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-body">
                      <div className="item-title">Ladder #7</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/hqka53j4/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* As notification */}
      <div className="mb-12" id="as-notification">
        <h2 className="h3 mb-3">As notification</h2>

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
              <div className="flex-1 surface rounded-lg overflow-hidden">
                <div className="item">
                  <div className="item-image">
                    <div className="avatar avatar-simple rounded-sm overflow-hidden">
                      <div>
                        <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_1.jpg" />
                      </div>
                    </div>
                  </div>
                  <div className="item-body">
                    <div className="text-xs text-ui-300">Game or Area</div>
                    <div className="item-title text-xl">
                      Notification title
                    </div>
                    <p className="text-sm text-ui-200">
                      Lorem ipsum dolor sit amet, consectetur adipisc ing elit
                    </p>
                  </div>
                  <div className="item-actions absolute top-2 right-2">
                    <div data-badge="." className="after:bg-error-300"></div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/emsrdyck/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* As header */}
      <div className="mb-12" id="as-header">
        <h2 className="h3 mb-3">As header</h2>

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
              <div className="flex-1 surface rounded-lg overflow-hidden">
                <div className="item">
                  <div className="item-image">
                    <div className="avatar avatar-tiny avatar-simple">
                      <div>
                        <span className="icon icon-chart-bar-33" />
                      </div>
                    </div>
                  </div>
                  <div className="item-body">
                    <div className="item-title">Your stats</div>
                  </div>
                  <div className="item-actions">
                    <div>
                      <span className="icon icon-24 icon-arrow-sm-down text-ui-300" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/sgneyr3w/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loading */}
      <div className="mb-12" id="loading">
        <h2 className="h3 mb-3">Loading</h2>

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
              <div className="flex-1 surface rounded-xl overflow-hidden">
                <ul className="is-loading">
                  <li className="item">
                    <div className="item-image">
                      <div className="avatar avatar-xs">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_1.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title">Croc Esports</div>
                      <div className="text-ui-300 text-xs">3 members</div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-image">
                      <div className="avatar avatar-xs">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_1.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title">Kingzz</div>
                      <div className="text-ui-300 text-xs">3 members</div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-image">
                      <div className="avatar avatar-xs">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_1.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title">Angry Beavers</div>
                      <div className="text-ui-300 text-xs">3 members</div>
                    </div>
                  </li>
                  <li className="item">
                    <div className="item-image">
                      <div className="avatar avatar-xs">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_1.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title">Bunny Hunger</div>
                      <div className="text-ui-300 text-xs">3 members</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/08sanf9d/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spaced */}
      <div className="mb-12" id="spaced">
        <h2 className="h3 mb-3">Spaced</h2>

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
              <div className="flex-1">
                <ul className="items-spaced space-y-2">
                  <li className="item rounded-xl">
                    <div className="item-image">
                      <div className="avatar avatar-xs">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_1.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title">Croc Esports</div>
                      <div className="text-ui-300 text-xs">3 members</div>
                    </div>
                  </li>
                  <li className="item rounded-xl">
                    <div className="item-image">
                      <div className="avatar avatar-xs">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_2.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title">Kingzz</div>
                      <div className="text-ui-300 text-xs">3 members</div>
                    </div>
                  </li>
                  <li className="item rounded-xl">
                    <div className="item-image">
                      <div className="avatar avatar-xs">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title">Angry Beavers</div>
                      <div className="text-ui-300 text-xs">3 members</div>
                    </div>
                  </li>
                  <li className="item rounded-xl">
                    <div className="item-image">
                      <div className="avatar avatar-xs">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_4.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title">Bunny Hunger</div>
                      <div className="text-ui-300 text-xs">3 members</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/gctr4vwz/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation */}
      <div className="mb-12" id="animation">
        <h2 className="h3 mb-3">Animation</h2>

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
              <div className="flex-1">
                <ul className="items-spaced space-y-2">
                  <li
                    className={`item rounded-lg ${
                      StartAnim === true
                        ? "animate-slide-in-bottom animate-delay"
                        : ""
                    }`}
                    style={{ "--delay": "calc(1 * 0.05s)" }}
                  >
                    <div className="item-image">
                      <div className="avatar avatar-xs">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_1.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title">Croc Esports</div>
                      <div className="text-ui-300 text-xs">3 members</div>
                    </div>
                  </li>
                  <li
                    className={`item rounded-lg ${
                      StartAnim === true
                        ? "animate-slide-in-bottom animate-delay"
                        : ""
                    }`}
                    style={{ "--delay": "calc(2 * 0.05s)" }}
                  >
                    <div className="item-image">
                      <div className="avatar avatar-xs">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_2.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title">Kingzz</div>
                      <div className="text-ui-300 text-xs">3 members</div>
                    </div>
                  </li>
                  <li
                    className={`item rounded-lg ${
                      StartAnim === true
                        ? "animate-slide-in-bottom animate-delay"
                        : ""
                    }`}
                    style={{ "--delay": "calc(3 * 0.05s)" }}
                  >
                    <div className="item-image">
                      <div className="avatar avatar-xs">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title">Angry Beavers</div>
                      <div className="text-ui-300 text-xs">3 members</div>
                    </div>
                  </li>
                  <li
                    className={`item rounded-lg ${
                      StartAnim === true
                        ? "animate-slide-in-bottom animate-delay"
                        : ""
                    }`}
                    style={{ "--delay": "calc(4 * 0.05s)" }}
                  >
                    <div className="item-image">
                      <div className="avatar avatar-xs">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_4.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title">Bunny Hunger</div>
                      <div className="text-ui-300 text-xs">3 members</div>
                    </div>
                  </li>
                  <li
                    className={`item rounded-lg ${
                      StartAnim === true
                        ? "animate-slide-in-bottom animate-delay"
                        : ""
                    }`}
                    style={{ "--delay": "calc(5 * 0.05s)" }}
                  >
                    <div className="item-image">
                      <div className="avatar avatar-xs">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_6.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="item-body">
                      <div className="item-title">DoubleM</div>
                      <div className="text-ui-300 text-xs">3 members</div>
                    </div>
                  </li>
                </ul>
                <div className="text-center mt-5">
                  <button
                    className="button button-tertiary mx-auto"
                    onClick={handleStartAnim.bind(this)}
                  >
                    <span>Play animation</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/pyd0z76f/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
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
