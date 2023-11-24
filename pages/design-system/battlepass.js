import React, { useContext, useState, useEffect } from "react";
import { getLayout } from "@/components/DesignSystem/DSLayout";
import Battlepass from "@/components/BattlePass/BattlePass";
import Anchor from "@/components/DesignSystem/DSanchor";

const DSpage = () => {

  return (
    <>
      <h1 className="mb-2">Battlepass</h1>

      {/* full */}
      <div className="mb-12">
        <Anchor title="Full" />
        <div className="pt-4">
          <div className="">
            <div className="flex gap-4 flex-col">
              <Battlepass />

              <div className="flex-1 hidden">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/c1nbf68L/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* medium */}
      <div className="mb-12">
        <Anchor title="Medium" />
        <div className="pt-4">
          <div className="">
            <div className="flex gap-4 flex-col">
              <Battlepass size="battlepass-md" />

              <div className="flex-1 hidden">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/c1nbf68L/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* with current */}
      <div className="mb-12">
        <Anchor title="With current product" />
        <div className="pt-4">
          <div className="">
            <div className="flex gap-4 flex-col">
              <h3 className="h4">Medium</h3>
              <Battlepass id={1} size="battlepass-md" />
              <h3 className="h4">Full</h3>
              <Battlepass id={1} />

              <div className="flex-1 hidden">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/c1nbf68L/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
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
