import React, { useContext } from "react";

import { UiContext } from "@/contexts/ui";
import { getLayout } from "@/components/DesignSystem/DSLayout";
import Tooltip from "@/components/Tooltip/Tooltip";
import Anchor from "@/components/DesignSystem/DSanchor";

const DSpage = () => {
  const uiContext = useContext(UiContext);
  return (
    <>
      <h1 className="mb-8">Tooltips</h1>

      {/* Structure */}
      <div className="mb-12">
        <Anchor title="Structure" />

        {/* Small: structure */}
        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <p className="text-ui-300 mb-6">
                  You can display simple tootltips by adding a{" "}
                  <code
                    className="interactive text-xs"
                    onClick={() => {
                      uiContext.openToastr({
                        size: "small",
                        text: "attribute copied to your clipboard",
                        color: "green",
                        autoDelete: true,
                        autoDeleteDelay: 2500,
                      });
                      navigator.clipboard.writeText('data-feedback=""');
                    }}
                  >
                    &#91;data-tooltip=&#34;tooltip text&#34;&#93;
                  </code>{" "}
                  attribute on any element. The tooltip is creaed as a pseudo
                  element on the element itself, meaning it may be hidden if one
                  of his parents has an overflow hidden rule.
                </p>
                <div className="w-full flex items-center justify-center">
                  <div
                    className="chip chip-primary tooltip"
                    data-tooltip="Lorem ipsum dolor sit amet"
                  >
                    <span>Tooltip</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/5vcxgdbu/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Position */}
      <div className="mb-12">
        <Anchor title="Position" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Top{" "}
                    <div className="chip chip-xs chip-secondary pointer-events-none uppercase">
                      <span>default</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div
                      className="chip chip-primary"
                      data-tooltip="Lorem ipsum dolor sit amet"
                    >
                      <span>Tooltip</span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Right
                  </div>
                  <div className="flex-1">
                    <div
                      className="chip chip-primary tooltip-right"
                      data-tooltip="Lorem ipsum dolor sit amet"
                    >
                      <span>Tooltip</span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    left
                  </div>
                  <div className="flex-1">
                    <div
                      className="chip chip-primary tooltip-left"
                      data-tooltip="Lorem ipsum dolor sit amet"
                    >
                      <span>Tooltip</span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                    Bottom
                  </div>
                  <div className="flex-1">
                    <div
                      className="chip chip-primary tooltip-bottom"
                      data-tooltip="Lorem ipsum dolor sit amet"
                    >
                      <span>Tooltip</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/hupyntsg/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive positioning */}
      <div className="mb-12">
        <Anchor title="Responsive positioning" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <p className="text-ui-300 mb-6">
                  You can change the position of the tooltip based on the screen
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
                      navigator.clipboard.writeText("lg:tooltip-left");
                    }}
                  >
                    .&#123;xx&#x7D;:tooltip-&#123;position&#x7D;
                  </code>
                  .<br />
                  &#123;xx&#x7D; can be <code className="text-xs">
                    xs
                  </code>, <code className="text-xs">sm</code>,{" "}
                  <code className="text-xs">md</code>,{" "}
                  <code className="text-xs">lg</code>,{" "}
                  <code className="text-xs">xl</code>.
                </p>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/2 text-ui-400 text-right text-sm leading-tight">
                    In this example, the left tooltip will be displayed on the
                    right above 1024px (lg).
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-4 justify-center">
                      <div
                        className="chip chip-primary tooltip tooltip-left lg:tooltip-right"
                        data-tooltip="Lorem ipsum dolor sit amet"
                      >
                        <span>Tooltip</span>
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
                  src="//jsfiddle.net/augustin_hiebel/uqbxoakp/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Onboarding tooltip template */}
      <div className="mb-12">
        <Anchor title="Onboarding tooltip template" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 flex justify-center">
                <div className="tooltip-lg shadow-xl is-active w-72">
                  <div className="flex items-center justify-between mb-2 gap-2">
                    <h5 className="flex-1">Missions</h5>
                    <ul className="flex gap-1.5">
                      <li className="w-1.5 h-1.5 rounded-full bg-main" />
                      <li className="w-1.5 h-1.5 rounded-full bg-main" />
                      <li className="w-1.5 h-1.5 rounded-full bg-ui-400" />
                      <li className="w-1.5 h-1.5 rounded-full bg-ui-400" />
                      <li className="w-1.5 h-1.5 rounded-full bg-ui-400" />
                    </ul>
                    <button
                      type="button"
                      className="button button-ghost button-close button-sm"
                    >
                      <span className="icon icon-e-remove" />
                    </button>
                  </div>
                  <p className="text-sm mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi at eros scelerisque, luctus metus quis, lacinia dui.
                    Vestibulum sit amet ipsum nunc.
                  </p>
                  <div className="border-t border-ui-500 pt-3 flex items-center justify-between">
                    <a href="#" className="text-sm link">
                      Skip
                    </a>
                    <div className="flex gap-1.5">
                      <button className="button button-sm button-secondary">
                        <span>Previous</span>
                      </button>
                      <button className="button button-sm button-primary">
                        <span>Next</span>
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
                  src="//jsfiddle.net/augustin_hiebel/hx13jbLq/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Attention tooltip */}
      <div className="mb-12">
        <Anchor title="Attention tooltip" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 flex justify-center">
                <div className="flex-1 space-y-4">
                  <div className="w-full flex gap-4 items-center">
                    <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                      Top{" "}
                      <div className="chip chip-xs chip-secondary pointer-events-none uppercase">
                        <span>default</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div
                        className="tooltip tooltip-attention tooltip-top"
                        data-tooltip="Lorem ipsum dolor sit amet"
                      >
                        <button
                          type="button"
                          className="button button-main button-sm"
                        >
                          <span>Button label</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex gap-4 items-center">
                    <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                      Right
                    </div>
                    <div className="flex-1">
                      <div
                        className="tooltip tooltip-attention tooltip-right"
                        data-tooltip="Lorem ipsum dolor sit amet"
                      >
                        <button
                          type="button"
                          className="button button-main button-sm"
                        >
                          <span>Button label</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex gap-4 items-center">
                    <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                      left
                    </div>
                    <div className="flex-1">
                      <div
                        className="tooltip tooltip-attention tooltip-left"
                        data-tooltip="Lorem ipsum dolor sit amet"
                      >
                        <button
                          type="button"
                          className="button button-main button-sm"
                        >
                          <span>Button label</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex gap-4 items-center">
                    <div className="w-1/4 text-ui-400 text-right text-sm leading-tight">
                      Bottom
                    </div>
                    <div className="flex-1">
                      <div
                        className="tooltip tooltip-attention tooltip-bottom"
                        data-tooltip="Lorem ipsum dolor sit amet"
                      >
                        <button
                          type="button"
                          className="button button-main button-sm"
                        >
                          <span>Button label</span>
                        </button>
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
                  src="//jsfiddle.net/augustin_hiebel/c85pq6v7/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Attention responsive positioning */}
      <div className="mb-12">
        <Anchor title="Attention responsive positioning" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <p className="text-ui-300 mb-6">
                  You can change the position of the tooltip based on the screen
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
                      navigator.clipboard.writeText("lg:tooltip-left");
                    }}
                  >
                    .&#123;xx&#x7D;:tooltip-&#123;position&#x7D;
                  </code>
                  .<br />
                  &#123;xx&#x7D; can be <code className="text-xs">
                    xs
                  </code>, <code className="text-xs">sm</code>,{" "}
                  <code className="text-xs">md</code>,{" "}
                  <code className="text-xs">lg</code>,{" "}
                  <code className="text-xs">xl</code>.
                </p>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/2 text-ui-400 text-right text-sm leading-tight">
                    In this example, the bottom tooltip will be displayed on the
                    right above 1024px (lg).
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-4 justify-center">
                      <div
                        className="tooltip tooltip-attention tooltip-bottom lg:tooltip-right"
                        data-tooltip="Lorem ipsum dolor sit amet"
                      >
                        <button
                          type="button"
                          className="button button-main button-sm"
                        >
                          <span>Button label</span>
                        </button>
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
                  src="//jsfiddle.net/augustin_hiebel/1qvt0d39/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
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
