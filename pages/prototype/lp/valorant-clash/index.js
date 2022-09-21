import React, { useEffect, useRef, useState } from "react";

import Accordion from "../../../../components/Accordion/Accordion";
import Footer from "../../../../components/Footer/Footer";
import TopbarMarketing from "../../../../components/TopBarMarketing/TopbarMarketing";
import TournamentLeaderboard from "../../../api/pubg-season-6/data";
import { getLayout } from "../../../../components/Prototype/PrototypeLayout";

const PrototypePage = () => {
  return (
    <>
      <section className="relative py-24">
        <div className="relative z-20 container max-w-lg mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-center">
          <div>
            <img className="w-72 md:w-[450px]" src="https://res.cloudinary.com/gloot/image/upload/v1663684817/Marketing/2022_Valorant_clash/G-Loot_Valorant_Clash_Logo.svg" width="auto" height="auto" alt="" />
          </div>
          <div className="pl-8 relative border-l border-ui-100/30">
            <h1 className="leading-none mb-4 flex gap-3 items-baseline">
              <div className="relative overflow-hidden">
                <span className="opacity-0">Where</span>
                <span className="absolute inset-0 animate-slide-in-bottom animate-delay" style={{ "--delay": "calc(2 * 0.2s)" }}>
                Where
                </span>
              </div>
              <div className="relative overflow-hidden">
                <span className="opacity-0">clans</span>
                <span className="absolute inset-0 animate-slide-in-bottom animate-delay" style={{ "--delay": "calc(4 * 0.2s)" }}>
                clans
                </span>
              </div>
              <div className="relative overflow-hidden">
                <span className="opacity-0">collide</span>
                <span className="absolute inset-0 animate-slide-in-bottom animate-delay" style={{ "--delay": "calc(6 * 0.2s)" }}>
                  <span className="text-gradient bg-gradient-to-r from-interaction-300 to-blue-500">
                    collide
                  </span>
                </span>
              </div>
            </h1>
            <p className="max-w-xs text-lg">
              We are proud to announce their first Premier VALORANT tournament
              for all players in the EMEA region: G-Loot VALORANT Clash.
            </p>
          </div>
        </div>
        <div className="absolute z-10 inset-0 bg-gradient-radial-spotlight  from-ui-900/10 to-ui-900/80" />
        <video
          className="absolute z-0 right-0 bottom-0 min-w-[100%] min-h-[100%] object-cover"
          autoPlay
          playsInline
          muted
          loop
          preload
          poster="https://res.cloudinary.com/gloot/video/upload/v1638395219/Marketing/202109_gloot2/sparks_1_backup.webm"
        >
          <source src="https://res.cloudinary.com/gloot/video/upload/v1638395219/Marketing/202109_gloot2/sparks_1_backup.webm" />
          <source src="https://res.cloudinary.com/gloot/video/upload/v1663664282/Marketing/2022_Valorant_clash/GVC_teaser-scenes_landing-page_v2.mp4" />
        </video>
      </section>
      <section className="py-24">
        <div className="container max-w-md mx-auto flex items-center gap-8">
          <div className=" rounded-2xl bg-gradient-to-b from-ui-500 to-ui-700 p-1 hover:from-main hover:to-blue-500 transition-all ease-in-out duration-300">
            <div className="rounded-xl bg-gradient-to-b from-ui-900 to-ui-700 w-52 h-52">

            </div>
          </div>
        </div>

      </section>
    </>
  );
};

PrototypePage.getLayout = getLayout;

export default PrototypePage;
