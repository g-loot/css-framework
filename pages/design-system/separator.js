import React from "react";
import { getLayout } from "@/components/DesignSystem/DSLayout";
import Anchor from "@/components/DesignSystem/DSanchor";

const DSpage = () => {
  return (
    <>
      <h1 className="mb-8">Separator</h1>

      {/* Structure */}
      <div className="mb-12">
        <Anchor title="Structure" />

        <div className="surface rounded-lg p-4">
          <hr className="separator my-8" />
        </div>

        <div className="mt-4">
          <iframe
            className="rounded"
            width="100%"
            height="100"
            src="//jsfiddle.net/augustin_hiebel/yvaz6wkL/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
          ></iframe>
        </div>
      </div>

      {/* Gradient */}
      <div className="mb-12">
        <Anchor title="Gradient" />

        <div className="surface rounded-lg p-4">
          <hr className="separator-gradient my-8" />
        </div>

        <div className="mt-4">
          <iframe
            className="rounded"
            width="100%"
            height="100"
            src="//jsfiddle.net/augustin_hiebel/tpgyq4en/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
          ></iframe>
        </div>
      </div>

      {/* Or */}
      <div className="mb-12">
        <Anchor title="Or" />

        <div className="surface rounded-lg p-4 space-y-8">
          <div className="text-ui-400 text-center text-sm leading-tight">
            Horizontal:
          </div>
          <div className="flex items-center justify-center gap-4 my-8">
            <hr className="separator flex-1" />
            <span className="uppercase">or</span>
            <hr className="separator flex-1" />
          </div>
          <div className="text-ui-400 text-center text-sm leading-tight mt-24">
            Vertical:
          </div>
          <div className="flex flex-col items-center justify-center gap-4 my-8 h-56">
            <hr className="separator separator-vertical flex-1" />
            <span className="uppercase">or</span>
            <hr className="separator separator-vertical flex-1" />
          </div>
        </div>

        <div className="mt-4">
          <iframe
            className="rounded"
            width="100%"
            height="300"
            src="//jsfiddle.net/augustin_hiebel/736rnygL/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
          ></iframe>
        </div>
      </div>
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
