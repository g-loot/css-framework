import React, { useState } from "react";

import { getLayout } from "@/components/DesignSystem/DSLayout";

const DSpage = () => {
  
  return (
    <>
      <h1 className="mb-2">Glow</h1>

      {/* Structure */}
      <div className="mb-12" id="structure">
        <h2 className="h3 mb-3">Structure</h2>

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col ">
              <div className="h-96 relative">
                <div className="absolute z-0 rounded-full bg-gradient-to-r from-main via-blue-700 to-main/0 w-56 h-60 blur-3xl transform-gpu -rotate-45 -bottom-8 -left-12"></div>
                <div className="absolute z-0 rounded-full bg-gradient-to-r from-main via-blue-700 to-main/0 w-56 h-56 blur-3xl transform-gpu -top-8 -right-12 rotate-180"></div>
              </div>
              <div className="flex-1 relative z-10">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/ogf1dwx4/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
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
