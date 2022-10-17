import React from "react";
import { getLayout } from "../../components/DesignSystem/DSLayout";

const DSpage = () => {
  return (
    <>
      <h1 className="mb-2">Surfaces</h1>

      {/* Normal */}
      <div className="mb-10" id="normal">
        <h2 className="h3 mb-3">Normal</h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 surface rounded-lg aspect-square"></div>
          <div className="flex-1">
            <iframe
              className="rounded-lg"
              width="100%"
              height="300"
              src="//jsfiddle.net/augustin_hiebel/zvsfkj25/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Dimmed */}
      <div className="mb-10" id="dimmed">
        <h2 className="h3 mb-3">Dimmed</h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 surface-dimmed rounded-lg aspect-square"></div>
          <div className="flex-1">
            <iframe
              className="rounded-lg"
              width="100%"
              height="300"
              src="//jsfiddle.net/augustin_hiebel/m175kudq/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Colors */}
      <div className="mb-10" id="colors">
        <h2 className="h3 mb-3">Colors</h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4">
            <div className="surface-ui-900 rounded-lg aspect-square"></div>
            <div className="surface-ui-800 rounded-lg aspect-square"></div>
            <div className="surface-ui-700 rounded-lg aspect-square"></div>
            <div className="surface-ui-600 rounded-lg aspect-square"></div>
          </div>
          <div className="flex-1">
            <iframe
              className="rounded-lg"
              width="100%"
              height="300"
              src="//jsfiddle.net/augustin_hiebel/azv786dn/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Highlight */}
      <div className="mb-10" id="highlight">
        <h2 className="h3 mb-3">Highlight</h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 space-y-4">
            <div className="surface surface-highlight-main rounded-lg h-24" />
            <div className="surface surface-highlight-blue rounded-lg h-24" />
            <div className="surface surface-highlight-premium rounded-lg h-24" />
          </div>
          <div className="flex-1">
            <iframe
              className="rounded-lg"
              width="100%"
              height="300"
              src="//jsfiddle.net/augustin_hiebel/g1qde5x2/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Halo surface */}
      <div className="mb-10" id="halo-surface">
        <h2 className="h3 mb-3">Halo surface</h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4">
            <div className="surface surface-halo rounded-lg aspect-square"></div>
            <div className="surface surface-halo halo-l rounded-lg aspect-square"></div>
            <div className="surface surface-halo halo-r rounded-lg aspect-square"></div>
            <div className="surface surface-halo halo-t rounded-lg aspect-square"></div>
          </div>
          <div className="flex-1">
            <iframe
              className="rounded-lg"
              width="100%"
              height="300"
              src="//jsfiddle.net/augustin_hiebel/ucvtxz19/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Responsive surfaces */}
      <div className="mb-12" id="responsive-surfaces">
        <h2 className="h3 mb-3">Responsive surfaces</h2>

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <p className="text-ui-300 mb-6">
                  You can change the surface based on the screen size using the
                  following class name:{" "}
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
                      navigator.clipboard.writeText("sm:surface");
                    }}
                  >
                    .&#123;xx&#x7D;:surface;
                  </code>
                  .<br />
                  &#123;xx&#x7D; can be <code className="text-xs">
                    xs
                  </code>, <code className="text-xs">sm</code>,{" "}
                  <code className="text-xs">md</code>,{" "}
                  <code className="text-xs">lg</code>,{" "}
                  <code className="text-xs">xl</code>.
                </p>
                <div className="text-ui-300">
                  In this example, the UI 600 surface will become dimmed above
                  768px (md) and normal above 1280px (xl).
                </div>
                <div className="flex-1 surface-ui-600 md:surface-dimmed xl:surface rounded-lg h-56" />
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/5h3r4pcw/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
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
