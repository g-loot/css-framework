import React from "react";
import { getLayout } from "../../components/DesignSystem/DSLayout";

const DSpage = () => {
  return (
    <>
      <h1 className="mb-2">Chips</h1>

      {/* default */}
      <div className="mb-12" id="default">
        <h2 className="h3 mb-3">Default</h2>

        {/* default: primary */}
        <div className="surface rounded-lg p-4">
          <div className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12">
            <h3 className="h4 mb-6 lg:mb-10">Primary</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Text only
                  </div>
                  <div className="flex-1">
                    <button type="button" className="chip chip-primary">
                      <span>Label</span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Icon + text
                  </div>
                  <div className="flex-1">
                    <button type="button" className="chip chip-primary">
                      <span className="icon icon-circle-caret-right" />
                      <span>Label</span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Text + icon
                  </div>
                  <div className="flex-1">
                    <button type="button" className="chip chip-primary">
                      <span>Label</span>
                      <span className="icon icon-circle-caret-right" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/05mw2vj6/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>

          {/* default: secondary */}
          <div className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12">
            <h3 className="h4 mb-6 lg:mb-10">Secondary</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Text only
                  </div>
                  <div className="flex-1">
                    <button type="button" className="chip chip-secondary">
                      <span>Label</span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Icon + text
                  </div>
                  <div className="flex-1">
                    <button type="button" className="chip chip-secondary">
                      <span className="icon icon-circle-caret-right" />
                      <span>Label</span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Text + icon
                  </div>
                  <div className="flex-1">
                    <button type="button" className="chip chip-secondary">
                      <span>Label</span>
                      <span className="icon icon-circle-caret-right" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/jm5q8oap/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>

          {/* default: Premium */}
          <div className="">
            <h3 className="h4 mb-6 lg:mb-10">Premium</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Text only
                  </div>
                  <div className="flex-1">
                    <button type="button" className="chip chip-premium">
                      <span>Label</span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Icon + text
                  </div>
                  <div className="flex-1">
                    <button type="button" className="chip chip-premium">
                      <span className="icon icon-circle-caret-right" />
                      <span>Label</span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Text + icon
                  </div>
                  <div className="flex-1">
                    <button type="button" className="chip chip-premium">
                      <span>Label</span>
                      <span className="icon icon-circle-caret-right" />
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Inverted
                  </div>
                  <div className="flex-1">
                    <button type="button" className="chip chip-premium chip-inverted">
                      <span>Label</span>
                      <span className="icon icon-circle-caret-right" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/6d1zj9xb/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>

          {/* default: XP */}
          <div className="">
            <h3 className="h4 mb-6 lg:mb-10">XP</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Normal
                  </div>
                  <div className="flex-1">
                    <button type="button" className="chip chip-xp">
                      <span>Label</span>
                    <span className="icon icon-xp-symbol"></span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Inverted
                  </div>
                  <div className="flex-1">
                    <button type="button" className="chip chip-xp chip-inverted">
                      <span>Label</span>
                    <span className="icon icon-xp-symbol"></span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/6d1zj9xb/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>

          {/* default: Token */}
          <div className="">
            <h3 className="h4 mb-6 lg:mb-10">Token</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Normal
                  </div>
                  <div className="flex-1">
                    <button type="button" className="chip chip-token">
                      <span>Label</span>
                    <span className="icon icon-token"></span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Inverted
                  </div>
                  <div className="flex-1">
                    <button type="button" className="chip chip-token chip-inverted">
                      <span>Label</span>
                    <span className="icon icon-token"></span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/6d1zj9xb/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>

          {/* default: Ticket */}
          <div className="">
            <h3 className="h4 mb-6 lg:mb-10">Ticket</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Normal
                  </div>
                  <div className="flex-1">
                    <button type="button" className="chip chip-ticket">
                      <span>Label</span>
                    <span className="icon icon-ticket"></span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Inverted
                  </div>
                  <div className="flex-1">
                    <button type="button" className="chip chip-ticket chip-inverted">
                      <span>Label</span>
                    <span className="icon icon-ticket"></span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/6d1zj9xb/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>

          {/* default: Ghost */}
          <div className="">
            <h3 className="h4 mb-6 lg:mb-10">Ghost</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Normal
                  </div>
                  <div className="flex-1">
                    <button type="button" className="chip chip-ghost">
                      <span>Label</span>
                    <span className="icon icon-ticket"></span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Inverted
                  </div>
                  <div className="flex-1">
                    <button type="button" className="chip chip-ghost chip-inverted">
                      <span>Label</span>
                    <span className="icon icon-ticket"></span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/6d1zj9xb/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With close button */}
      <div className="mb-12" id="with-close-button">
        <h2 className="mb-3">With close button</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Primary
                  </div>
                  <div className="flex-1">
                    <div className="chip chip-primary">
                      <span>Label</span>
                      <button type="button" className="button button-close">
                        <span className="icon icon-e-remove" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Secondary
                  </div>
                  <div className="flex-1">
                    <div className="chip chip-secondary">
                      <span>Label</span>
                      <button type="button" className="button button-close">
                        <span className="icon icon-e-remove" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/vhbtouan/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With avatar */}
      <div className="mb-12" id="with-avatar">
        <h2 className="mb-3">With avatar</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Primary
                  </div>
                  <div className="flex-1 flex items-center gap-2">
                    <div className="chip chip-primary">
                      <div className="avatar avatar-simple avatar-circle avatar-tiny">
                        <div>
                          <span className="icon icon-male"></span>
                        </div>
                      </div>
                      <span>Label</span>
                    </div>
                    <div className="chip chip-primary chip-sm">
                      <div className="avatar avatar-simple avatar-circle avatar-tiny">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_1.jpg" />
                        </div>
                      </div>
                      <span>Label</span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Secondary
                  </div>
                  <div className="flex-1 flex items-center gap-2">
                    <div className="chip chip-secondary">
                      <div className="avatar avatar-simple avatar-circle avatar-tiny">
                        <div>
                          <span className="icon icon-male"></span>
                        </div>
                      </div>
                      <span>Label</span>
                    </div>
                    <div className="chip chip-secondary chip-sm">
                      <div className="avatar avatar-simple avatar-circle avatar-tiny">
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_1.jpg" />
                        </div>
                      </div>
                      <span>Label</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/vhbtouan/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-12" id="sizes">
        <h2 className="mb-3">Sizes</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-8">
                <div className="w-full flex gap-4 items-start">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight pt-2">
                    Medium{" "}
                    <button
                      type="button"
                      className="chip chip-xs chip-secondary pointer-events-none uppercase"
                    >
                      <span>default</span>
                    </button>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-2">
                    <div className="chip chip-primary">
                      <span>Label</span>
                    </div>
                    <div className="chip chip-secondary">
                      <span className="icon icon-circle-caret-right" />
                      <span>Label</span>
                    </div>
                    <div className="chip chip-primary">
                      <span>Label</span>
                      <button type="button" className="button button-close">
                        <span className="icon icon-e-remove" />
                      </button>
                    </div>
                    <div className="chip chip-secondary">
                      <span>Label</span>
                      <button type="button" className="button button-close">
                        <span className="icon icon-e-remove" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-start">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight pt-2">
                    Small
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-2">
                    <div className="chip chip-sm chip-primary">
                      <span>Label</span>
                    </div>
                    <div className="chip chip-sm chip-secondary">
                      <span className="icon icon-circle-caret-right" />
                      <span>Label</span>
                    </div>
                    <div className="chip chip-sm chip-primary">
                      <span>Label</span>
                      <button type="button" className="button button-close">
                        <span className="icon icon-e-remove" />
                      </button>
                    </div>
                    <div className="chip chip-sm chip-secondary">
                      <span>Label</span>
                      <button type="button" className="button button-close">
                        <span className="icon icon-e-remove" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-start">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight pt-2">
                    Extra small
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-2">
                    <div className="chip chip-xs chip-primary">
                      <span>Label</span>
                    </div>
                    <div className="chip chip-xs chip-secondary">
                      <span className="icon icon-circle-caret-right" />
                      <span>Label</span>
                    </div>
                    <div className="chip chip-xs chip-primary">
                      <span>Label</span>
                      <button type="button" className="button button-close">
                        <span className="icon icon-e-remove" />
                      </button>
                    </div>
                    <div className="chip chip-xs chip-secondary">
                      <span>Label</span>
                      <button type="button" className="button button-close">
                        <span className="icon icon-e-remove" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/qLnc64pg/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Roundness */}
      <div className="mb-12" id="roundness">
        <h2 className="mb-3">Roundness</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 flex justify-center items-center gap-2">
                    <div className="chip chip-secondary rounded-xs">
                      <span className="icon icon-tv" />
                      <span>Tracker required</span>
                    </div>
                    <div className="chip chip-secondary rounded">
                      <span className="icon icon-tv" />
                      <span>Tracker required</span>
                    </div>
                    <div className="chip chip-secondary rounded-lg">
                      <span className="icon icon-tv" />
                      <span>Tracker required</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/ne4ayv7k/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sliced */}
      <div className="mb-12" id="sliced">
        <h2 className="mb-3">Sliced</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Default
                  </div>
                  <div className="flex-1">
                    <div className="chip chip-sliced">
                      <span>Label</span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Blue
                  </div>
                  <div className="flex-1">
                    <div className="chip chip-sliced chip-blue">
                      <span>Label</span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Gray
                  </div>
                  <div className="flex-1">
                    <div className="chip chip-sliced chip-gray">
                      <span>Label</span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Premium
                  </div>
                  <div className="flex-1">
                    <div className="chip chip-sliced chip-premium">
                      <span>Label</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/3m9k845g/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reward */}
      <div className="mb-12" id="reward">
        <h2 className="mb-3">Reward</h2>

        {/* Reward: XP */}
        <div className="surface rounded-lg p-4">
          <div className="border-b border-ui-700 pb-6 mb-6 lg:pb-12 lg:mb-12">
            <h3 className="h4 mb-6 lg:mb-10">
              XP{" "}
              <button
                type="button"
                className="chip chip-xs chip-secondary pointer-events-none uppercase"
              >
                <span>default</span>
              </button>
            </h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Normal{" "}
                    <button
                      type="button"
                      className="chip chip-xs chip-secondary pointer-events-none uppercase"
                    >
                      <span>default</span>
                    </button>
                  </div>
                  <div className="chip chip-xp">
                    <span className="icon icon-xp-symbol-outline" />
                    <span>500</span>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Inverted
                  </div>
                  <div className="chip chip-xp chip-inverted">
                    <span className="icon icon-xp-symbol-outline" />
                    <span>500</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/hoguz0ad/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Reward: token */}
          <div className="">
            <h3 className="h4 mb-6 lg:mb-10">Token</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Normal{" "}
                    <button
                      type="button"
                      className="chip chip-xs chip-secondary pointer-events-none uppercase"
                    >
                      <span>default</span>
                    </button>
                  </div>
                  <div className="chip chip-token">
                    <span className="icon icon-token" />
                    <span>10</span>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Inverted
                  </div>
                  <div className="chip chip-token chip-inverted">
                    <span className="icon icon-token" />
                    <span>10</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/dqkvh2rm/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Reward: ticket */}
          <div className="">
            <h3 className="h4 mb-6 lg:mb-10">Ticket</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Normal{" "}
                    <button
                      type="button"
                      className="chip chip-xs chip-secondary pointer-events-none uppercase"
                    >
                      <span>default</span>
                    </button>
                  </div>
                  <button type="button" className="chip chip-ticket">
                    <span className="icon icon-ticket" />
                    <span>1</span>
                  </button>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Inverted
                  </div>
                  <button type="button" className="chip chip-ticket chip-inverted">
                    <span className="icon icon-ticket" />
                    <span>1</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/my610f4g/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Reward: premium */}
          <div className="">
            <h3 className="h4 mb-6 lg:mb-10">Premium</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Normal{" "}
                    <button
                      type="button"
                      className="chip chip-xs chip-secondary pointer-events-none uppercase"
                    >
                      <span>default</span>
                    </button>
                  </div>
                  <button type="button" className="chip chip-premium">
                    <span className="icon icon-ticket" />
                    <span>1</span>
                  </button>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Inverted
                  </div>
                  <button type="button" className="chip chip-premium chip-inverted">
                    <span className="icon icon-ticket" />
                    <span>1</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/my610f4g/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Reward: neutral */}
          <div className="">
            <h3 className="h4 mb-6 lg:mb-10">Neutral</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Normal
                  </div>
                  <button type="button" className="chip chip-neutral">
                    <span className="icon icon-xp-symbol-outline" />
                    <span>500</span>
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/qhv65onx/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Reward: small */}
          <div className="">
            <h3 className="h4 mb-6 lg:mb-10">Small</h3>
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Small
                  </div>
                  <button type="button" className="chip chip-ticket chip-inverted chip-sm">
                    <span>2</span>
                    <span className="icon icon-ticket" />
                  </button>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight"></div>
                  <button type="button" className="chip chip-xp chip-inverted chip-sm">
                    <span>500</span>
                    <span className="icon icon-xp-symbol" />
                  </button>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight"></div>
                  <button type="button" className="chip chip-token chip-inverted chip-sm">
                    <span>500</span>
                    <span className="icon icon-token" />
                  </button>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight"></div>
                  <button type="button" className="chip chip-xp chip-ghost chip-sm">
                    <span>+100 premium</span>
                    <span className="icon icon-xp-symbol" />
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/5pgext1c/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* status */}
      <div className="mb-12" id="status">
        <h2 className="mb-3">Status</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Default{" "}
                    <button
                      type="button"
                      className="chip chip-xs chip-secondary pointer-events-none uppercase"
                    >
                      <span>default</span>
                    </button>
                  </div>
                  <div className="flex-1">
                    <button type="button" className="chip chip-status">
                      <span className="icon icon-calendar-date-2" />
                      <span>Label</span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Attention
                  </div>
                  <div className="flex-1">
                    <button
                      type="button"
                      className="chip chip-status chip-attention"
                    >
                      <span className="icon icon-warning-sign" />
                      <span>Label</span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Success
                  </div>
                  <div className="flex-1">
                    <button
                      type="button"
                      className="chip chip-status chip-success"
                    >
                      <span className="icon icon-check" />
                      <span>Label</span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Info
                  </div>
                  <div className="flex-1">
                    <button
                      type="button"
                      className="chip chip-status chip-info"
                    >
                      <span className="icon icon-c-info" />
                      <span>Label</span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Error
                  </div>
                  <div className="flex-1">
                    <button
                      type="button"
                      className="chip chip-status chip-error"
                    >
                      <span className="icon icon-s-ban" />
                      <span>Label</span>
                    </button>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Transparent
                  </div>
                  <div className="flex-1">
                    <button
                      type="button"
                      className="chip chip-status chip-transparent"
                    >
                      <span className="icon icon-calendar-date-2" />
                      <span>Label</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/mzwy035c/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
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
