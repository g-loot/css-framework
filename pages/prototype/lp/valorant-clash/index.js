import React, { useEffect, useRef, useState } from "react";

import Accordion from "../../../../components/Accordion/Accordion";
import Footer from "../../../../components/Footer/Footer";
import TopbarMarketing from "../../../../components/TopBarMarketing/TopbarMarketing";
import TournamentLeaderboard from "../../../api/pubg-season-6/data";
import { getLayout } from "../../../../components/Prototype/PrototypeLayout";

const PrototypePage = () => {
  return (
    <>
      <section className="relative py-60">

        <div className="relative z-20 container mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[50ch]">
            <h1 className="text-gradient bg-gradient-to-r from-interaction-300 to-blue-500 leading-none">
              Where clans collide
            </h1>
            <p>
            We are proud to announce their first Premier VALORANT tournament for all players in the EMEA region: G-Loot VALORANT Clash.
            </p>
          </div>
          <div>
            qsdqsdqsd
          </div>
        </div>
        <div className="absolute z-10 inset-0 bg-gradient-radial  from-ui-900/10 to-ui-900/80" />
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
    </>
  );
};

PrototypePage.getLayout = getLayout;

export default PrototypePage;
