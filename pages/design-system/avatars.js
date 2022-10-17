import React, { useContext } from "react";

import { UiContext } from "../../contexts/ui";
import { getLayout } from "../../components/DesignSystem/DSLayout";

const DSpage = () => {
  const uiContext = useContext(UiContext);
  return (
    <>
      <h1 className="mb-2">Avatars</h1>

      {/* Shapes */}
      <div className="mb-12" id="shapes">
        <h2 className="h3 mb-3">Shapes</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight"></div>
                  <div className="flex-1">
                    <div className="avatar">
                      <div>
                        <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_1.jpg" />
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
                  src="//jsfiddle.net/augustin_hiebel/djL5vgrp/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shapes */}
      <div className="mb-12" id="shapes">
        <h2 className="h3 mb-3">Shapes</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Circle
                  </div>
                  <div className="flex-1">
                    <div className="avatar avatar-circle">
                      <div>
                        <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_2.jpg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Squircle
                  </div>
                  <div className="flex-1">
                    <div className="avatar avatar-squircle">
                      <div>
                        <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_2.jpg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Diamond
                  </div>
                  <div className="flex-1">
                    <div className="avatar avatar-diamond">
                      <div>
                        <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_2.jpg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Hexagon
                  </div>
                  <div className="flex-1">
                    <div className="avatar avatar-hexagon">
                      <div>
                        <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_2.jpg" />
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
                  src="//jsfiddle.net/augustin_hiebel/vf5scmdb/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-12" id="sizes">
        <h2 className="h3 mb-3">Sizes</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Extra large
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-4 justify-start">
                      <div className="avatar avatar-xl">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg" />
                        </div>
                      </div>
                      <div className="avatar avatar-xl avatar-squircle">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Large{" "}
                    <button className="chip chip-xs chip-secondary pointer-events-none uppercase">
                      <span>default</span>
                    </button>
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-4 justify-start">
                      <div className="avatar">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg" />
                        </div>
                      </div>
                      <div className="avatar avatar-squircle">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Medium
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-4 justify-start">
                      <div className="avatar avatar-md">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg" />
                        </div>
                      </div>
                      <div className="avatar avatar-md avatar-squircle">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Small
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-4 justify-start">
                      <div className="avatar avatar-sm">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg" />
                        </div>
                      </div>
                      <div className="avatar avatar-sm avatar-squircle">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Extra small
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-4 justify-start">
                      <div className="avatar avatar-xs">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg" />
                        </div>
                      </div>
                      <div className="avatar avatar-xs avatar-squircle">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Tiny
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-4 justify-start">
                      <div className="avatar avatar-tiny">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg" />
                        </div>
                      </div>
                      <div className="avatar avatar-tiny avatar-squircle">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg" />
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
                  src="//jsfiddle.net/augustin_hiebel/3o7ztqgw/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rank */}
      <div className="mb-12" id="rank">
        <h2 className="h3 mb-3">Rank</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Light{" "}
                    <button className="chip chip-xs chip-secondary pointer-events-none uppercase">
                      <span>default</span>
                    </button>
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-4 justify-start">
                      <div className="avatar">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_5.jpg" />
                        </div>
                      </div>
                      <div className="avatar avatar-squircle">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_5.jpg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Gold
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-4 justify-start">
                      <div className="avatar avatar-gold">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_5.jpg" />
                        </div>
                      </div>
                      <div className="avatar avatar-gold avatar-squircle">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_5.jpg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Silver
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-4 justify-start">
                      <div className="avatar avatar-silver">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_5.jpg" />
                        </div>
                      </div>
                      <div className="avatar avatar-silver avatar-squircle">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_5.jpg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Bronze
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-4 justify-bronze">
                      <div className="avatar avatar-bronze">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_5.jpg" />
                        </div>
                      </div>
                      <div className="avatar avatar-bronze avatar-squircle">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_5.jpg" />
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
                  src="//jsfiddle.net/augustin_hiebel/s7or0umz/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status */}
      <div className="mb-12" id="status">
        <h2 className="h3 mb-3">Status</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Online{" "}
                    <button className="chip chip-xs chip-secondary pointer-events-none uppercase">
                      <span>default</span>
                    </button>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-4 justify-start items-center">
                      <div className="avatar avatar-circle">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_6.jpg" />
                        </div>
                        <i />
                      </div>
                      <div className="avatar avatar-circle avatar-sm">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_6.jpg" />
                        </div>
                        <i />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Disabled
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-4 justify-start items-center">
                      <div className="avatar avatar-circle">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_6.jpg" />
                        </div>
                        <i className="disabled" />
                      </div>
                      <div className="avatar avatar-circle avatar-sm">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_6.jpg" />
                        </div>
                        <i className="disabled" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Error
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-4 justify-start items-center">
                      <div className="avatar avatar-circle">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_6.jpg" />
                        </div>
                        <i className="error" />
                      </div>
                      <div className="avatar avatar-circle avatar-sm">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_6.jpg" />
                        </div>
                        <i className="error" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Attention
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-4 justify-start items-center">
                      <div className="avatar avatar-circle">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_6.jpg" />
                        </div>
                        <i className="attention" />
                      </div>
                      <div className="avatar avatar-circle avatar-sm">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_6.jpg" />
                        </div>
                        <i className="attention" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Info
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-4 justify-start items-center">
                      <div className="avatar avatar-circle">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_6.jpg" />
                        </div>
                        <i className="info" />
                      </div>
                      <div className="avatar avatar-circle avatar-sm">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_6.jpg" />
                        </div>
                        <i className="info" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Radar
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-4 justify-start items-center">
                      <div className="avatar avatar-circle">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_6.jpg" />
                        </div>
                        <i className="radar" />
                      </div>
                      <div className="avatar avatar-circle avatar-sm">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_6.jpg" />
                        </div>
                        <i className="radar info" />
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
                  src="//jsfiddle.net/augustin_hiebel/8jr1qg4x/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* simple */}
      <div className="mb-12" id="simple">
        <h2 className="h3 mb-3">Simple</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    No border
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-4 justify-start items-center">
                      <div className="avatar avatar-simple">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_9.jpg" />
                        </div>
                      </div>
                      <div className="avatar avatar-diamond avatar-simple">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_9.jpg" />
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
                  src="//jsfiddle.net/augustin_hiebel/mv2yx3r8/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With icon */}
      <div className="mb-12" id="with-icon">
        <h2 className="h3 mb-3">With icon</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Works with any icon
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-4 justify-start items-center">
                      <div className="avatar avatar-squircle">
                        <div>
                          <span className="icon icon-multiple-11" />
                        </div>
                      </div>
                      <div className="avatar avatar-squircle avatar-md">
                        <div>
                          <span className="icon icon-multiple-11" />
                        </div>
                      </div>
                      <div className="avatar avatar-squircle avatar-sm">
                        <div>
                          <span className="icon icon-multiple-11" />
                        </div>
                      </div>
                      <div className="avatar avatar-squircle avatar-xs">
                        <div>
                          <span className="icon icon-multiple-11" />
                        </div>
                      </div>
                      <div className="avatar avatar-squircle avatar-tiny">
                        <div>
                          <span className="icon icon-multiple-11" />
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
                  src="//jsfiddle.net/augustin_hiebel/L86wt5ok/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With placeholder */}
      <div className="mb-12" id="with-placeholder">
        <h2 className="h3 mb-3">With placeholder</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Works with any text
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-4 justify-start items-center">
                      <div className="avatar avatar-squircle">
                        <div>
                          <span>CG</span>
                        </div>
                      </div>
                      <div className="avatar avatar-squircle avatar-md">
                        <div>
                          <span>CG</span>
                        </div>
                      </div>
                      <div className="avatar avatar-squircle avatar-sm">
                        <div>
                          <span>CG</span>
                        </div>
                      </div>
                      <div className="avatar avatar-squircle avatar-xs">
                        <div>
                          <span>CG</span>
                        </div>
                      </div>
                      <div className="avatar avatar-squircle avatar-tiny">
                        <div>
                          <span>CG</span>
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
                  src="//jsfiddle.net/augustin_hiebel/y1wjg3p6/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive sizes */}
      <div className="mb-12" id="responsive-sizes">
        <h2 className="h3 mb-3">Responsive sizes</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <p className="text-ui-300 mb-6">
                  You can change the size of the avatar based on the screen size
                  using the following class name:{" "}
                  <code
                    className="interactive text-xs"
                    onClick={() => {
                      uiContext.openToastr({
                        size: "small",
                        text: "class name copied to your clipboard",
                        color: "green",
                        autoDelete: true,
                        autoDeleteDelay: 2500,
                      });
                      navigator.clipboard.writeText("sm:avatar-lg");
                    }}
                  >
                    .&#123;xx&#x7D;:avatar-&#123;xx&#x7D;
                  </code>.<br />
                  &#123;xx&#x7D; can be <code className="text-xs">xs</code>, <code className="text-xs">sm</code>,{" "}
                  <code className="text-xs">md</code>, <code className="text-xs">lg</code>, <code className="text-xs">xl</code>.
                </p>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/2 text-ui-400 text-right text-sm leading-tight">
                    In this example, the tiny avatar will become small above
                    768px (md), large above 1024px (lg) and extra large above
                    1280px (xl).
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-4 justify-start">
                      <div className="avatar avatar-tiny md:avatar-sm lg:avatar-lg xl:avatar-xl">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_3.jpg" />
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
                  src="//jsfiddle.net/augustin_hiebel/be9tLjf4/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
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
