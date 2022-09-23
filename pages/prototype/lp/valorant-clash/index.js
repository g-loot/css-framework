import React, { useEffect, useRef, useState } from "react";

import Aos from "aos";
import Footer from "../../../../components/Footer/Footer";
import ValorantClashTabFollow from "./tab-follow";
import ValorantClashTabItem from "./component-tabItem";
import ValorantClashTabLearnMore from "./tab-learnmore";
import ValorantClashTabPartake from "./tab-partake";
import { getLayout } from "../../../../components/Prototype/PrototypeLayout";
import { useRouter } from "next/router";

const TabsItems = [
  {
    sublabel: "I want to",
    label: "partake",
    url: "partake",
    component: ValorantClashTabPartake,
    disabled: false,
  },
  {
    sublabel: "I want to",
    label: "learn more",
    url: "learn-more",
    component: ValorantClashTabLearnMore,
    disabled: false,
  },
  {
    sublabel: "I want to",
    label: "watch stream",
    url: "watch-stream",
    component: ValorantClashTabFollow,
    disabled: false,
  },
];

const today = new Date().toISOString();
const registrationOpen = new Date("2022-10-03T07:00:00.959Z").toISOString();
const registrationClosed = new Date("2022-10-18T07:00:00.959Z").toISOString();
const competitionStarted = new Date("2022-10-18T07:00:00.959Z").toISOString();
const competitionFinished = new Date("2022-11-28T07:00:00.959Z").toISOString();

const PrototypePage = () => {
  const [competitionStatus, setCompetitionStatus] = useState(1);
  const [defaultTab, setDefaultTab] = useState("learn-more");

  useEffect(() => {
    console.log(today, registrationOpen)
    if (today < registrationOpen) {
      setDefaultTab('learn-more')
      console.log('Competition status:', 'registrations not yet started')
    } else if (today > registrationOpen && today < registrationClosed) {
      setDefaultTab('partake')
      console.log('Competition status:', 'registrations open')
    } else if (today > registrationClosed && today < competitionStarted) {
      setDefaultTab('learn-more')
      console.log('Competition status:', 'registrations closed & competition not started')
    } else if (today > competitionStarted) {
      setDefaultTab('watch-stream')
      console.log('Competition status:', 'competition started')
    } else if (today > competitionFinished) {
      setDefaultTab('watch-stream')
      console.log('Competition status:', 'finished')
    } else {
      console.log('Competition status:', 'unknown')
    }
  }, [])

  useEffect(() => {
    Aos.init({
      easing: "ease-out-quad",
    });

    window.addEventListener("load", Aos.refresh);
  }, []);

  const router = useRouter();
  const { tab } = router.query;
  const selectedTab = tab ? tab : defaultTab;

  return (
    <>
      <section className="relative z-0 pt-20 pb-24 border-b border-ui-800">
        <div className="relative z-20 container max-w-lg mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-center">
          <div>
            <img
              className="w-72 md:w-[450px] md:h-[320px] mx-auto md:mx-0"
              src="https://res.cloudinary.com/gloot/image/upload/v1663684817/Marketing/2022_Valorant_clash/G-Loot_Valorant_Clash_Logo.svg"
              width="auto"
              height="auto"
              alt=""
            />
          </div>
          <div className=" relative lg:border-l lg:border-ui-100/30 text-center lg:text-left px-4 lg:pr-0 lg:pl-8">
            <div className="h1 leading-none mb-4 flex items-baseline justify-center lg:justify-start">
              <h1 className="sr-only">Where clans collide</h1>
              <div className="relative overflow-hidden mr-3" aria-hidden="true">
                <span className="opacity-0">Where</span>
                <span
                  className="absolute inset-0 animate-slide-in-bottom animate-delay"
                  style={{ "--delay": "calc(2 * 0.2s)" }}
                >
                  Where
                </span>
              </div>
              <div className="relative overflow-hidden mr-3">
                <span className="opacity-0">clans</span>
                <span
                  className="absolute inset-0 animate-slide-in-bottom animate-delay"
                  style={{ "--delay": "calc(4 * 0.2s)" }}
                >
                  clans
                </span>
              </div>
              <div className="relative overflow-hidden">
                <span className="opacity-0">collide</span>
                <span
                  className="absolute inset-0 animate-slide-in-bottom animate-delay"
                  style={{ "--delay": "calc(6 * 0.2s)" }}
                >
                  <span className="text-gradient bg-gradient-to-r from-interaction-500 to-blue-500">
                    collide
                  </span>
                </span>
              </div>
            </div>
            <h2 className="font-headings text-2xl font-normal mb-3">
              OCTOBER 28 - NOVEMBER 27
            </h2>
            <p className="text-mono-100 opacity-75 max-w-xs text-lg mx-auto lg:mx-0">
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
      <section className="relative z-10 -mt-12">
        <nav>
          <ul className="container max-w-lg mx-auto flex items-center lg:justify-center p-4 gap-4 lg:gap-8 overflow-x-auto scrollbar-hidden whitespace-nowrap">
            {TabsItems.map((item, itemIndex) => (
              <ValorantClashTabItem
                key={itemIndex}
                index={itemIndex}
                itemSublabel={item.sublabel}
                itemLabel={item.label}
                itemURL={item.url}
                itemDisabled={item.disabled}
                selectedTab={selectedTab}
              />
            ))}
          </ul>
        </nav>
      </section>
      {TabsItems.map((item) => {
        if (item.url === selectedTab) {
          return React.createElement(item.component);
        }
      })}
      <Footer />
    </>
  );
};

PrototypePage.getLayout = getLayout;

export default PrototypePage;
