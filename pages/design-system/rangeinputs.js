import React, { useState } from "react";

import { getLayout } from "../../components/DesignSystem/DSLayout";
import Anchor from "@/components/DesignSystem/DSanchor";

const DSpage = () => {
  const [rangeval, setRangeval] = useState(null);
  return (
    <>
      <h1 className="mb-8">Range</h1>

      {/* Structure */}
      <div className="mb-12">
        <Anchor title="Structure" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1 space-y-4">
                    <input
                      type="range"
                      className="form-range"
                      min="0"
                      max="100"
                      onChange={(event) => setRangeval(event.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/aLy8gzcu/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With ticks */}
      <div className="mb-12">
        <Anchor title="With ticks" />

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full flex gap-4 items-center">
                  <div className="flex-1">
                    <input
                      type="range"
                      className="form-range"
                      min="0"
                      max="100"
                      step="25"
                      onChange={(event) => setRangeval(event.target.value)}
                    />
                    <div className="w-full flex justify-between text-xs text-ui-400 px-2">
                      <span>|</span>
                      <span>|</span>
                      <span>|</span>
                      <span>|</span>
                      <span>|</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/uawsqjtm/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
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
