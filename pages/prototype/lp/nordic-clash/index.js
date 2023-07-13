import React, { useEffect } from "react";

import Footer from "../../../../components/Footer/Footer";
import TopbarMarketing from "../../../../components/TopBarMarketing/TopbarMarketing";
import { getLayout } from "../../../../components/Prototype/PrototypeLayout";
import Link from "next/link";
import { dataValorantGuideRoles } from "../../../../mock-data/data-valorant-guide";

const inViewport = (elem) => {
  let allElements = document.querySelectorAll(elem);
  let windowHeight = window.innerHeight;
  const elems = () => {
    for (let i = 0; i < allElements.length; i++) {
      let viewportOffset = allElements[i].getBoundingClientRect();
      let top = viewportOffset.top;
      if (top < windowHeight) {
        allElements[i].classList.add("animate-running");
      } else {
        allElements[i].classList.remove("animate-running");
      }
    }
  };
  elems();
  window.addEventListener("scroll", elems);
};

const PrototypePage = () => {
  useEffect(() => {
    inViewport("[class*=animate-]");
  }, []);

  return (
    <>
      <TopbarMarketing />

      <div className="min-h-screen bg-ui-900 pb-24 relative">
        <i className="absolute inset-0 pointer-events-none z-50 mix-blend-overlay opacity-30 bg-fixed bg-[length:100px_100px] bg-[url('https://res.cloudinary.com/gloot/image/upload/v1689232741/Stryda/marketing/campaigns/Nordic%20Clash/noise-black.jpg')]" />
        <section className="relative z-10 pt-24 pb-80">
          <div className="relative z-20 px-4">
            <div className="drop-shadow-[0_4px_0_rgba(0,0,0,0.2)]">
            <img
              src="https://res.cloudinary.com/gloot/image/upload/v1689235015/Stryda/logos/stryda-logo-ui-100.svg"
              width="auto"
              height="auto"
              alt="Stryda"
              className="mx-auto w-auto h-12 mb-8"
              />
            <img
              src="https://res.cloudinary.com/gloot/image/upload/v1689166223/Stryda/marketing/campaigns/Nordic%20Clash/Stryda_Nordic_Clash_logo.svg"
              width="auto"
              height="auto"
              alt="Stryda"
              className="relative z-0 mx-auto w-full max-w-md mb-8"
              />
            </div>
            {/*
            <div className="relative mx-auto w-full max-w-md drop-shadow-[0_3px_0_rgba(0,0,0,0.1)]">
              <i
                className="absolute z-10 inset-0 bg-cover bg-[url('https://res.cloudinary.com/gloot/image/upload/v1689231755/Stryda/marketing/campaigns/Nordic%20Clash/logo_flag.jpg')]"
                style={{
                  WebkitMaskImage:
                    "url(https://res.cloudinary.com/gloot/image/upload/v1689166223/Stryda/marketing/campaigns/Nordic%20Clash/Stryda_Nordic_Clash_logo.svg)",
                  WebkitMaskSize: "cover",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                }}
              />
              <img
                src="https://res.cloudinary.com/gloot/image/upload/v1689166223/Stryda/marketing/campaigns/Nordic%20Clash/Stryda_Nordic_Clash_logo.svg"
                width="auto"
                height="auto"
                alt="Stryda"
                className="relative z-0 w-full h-auto mb-8"
              />
            </div>
            <div className="w-full max-w-md mx-auto px-10">
              <div className="bg-[#908161] [&>i]:bg-[#908161] grid grid-cols-1 md:grid-cols-3 text-center p-4 gap-4 leading-none relative">
                <i
                  className="absolute h-0.5 w-full -top-0.5 -scale-y-100"
                  style={{
                    clipPath:
                      "polygon(1% 0%, 2% 100%, 3% 0%, 9% 100%, 11% 1%, 21% 100%, 26% 5%, 30% 100%, 36% 2%, 43% 100%, 50% 1%, 51% 100%, 55% 0%, 63% 94%, 70% 0%, 71% 100%, 73% 0%, 81% 0%, 90% 100%, 91% 0%, 92% 100%, 99% 0%)",
                  }}
                />
                <i
                  className="absolute h-0.5 w-full -bottom-0.5"
                  style={{
                    clipPath:
                      "polygon(1% 0%, 4% 100%, 9% 0%, 13% 100%, 14% 20%, 19% 1%, 21% 100%, 26% 5%, 30% 100%, 36% 2%, 43% 100%, 50% 1%, 52% 100%, 61% 0%, 69% 94%, 70% 0%, 76% 100%, 81% 0%, 84% 100%, 91% 0%, 97% 100%, 99% 3%)",
                  }}
                />
                <i
                  className="absolute w-3 h-full -left-3"
                  style={{
                    clipPath:
                      "polygon(100% 0%, 0% 0%, 4% 6%, 0% 9%, 3% 9%, 0% 12%, 100% 15%, 0% 17%, 32% 19%, 0% 23%, 5% 24%, 1% 26%, 66% 30%, 0% 33%, 3% 36%, 0% 36%, 5% 39%, 1% 45%, 5% 49%, 0% 53%, 8% 59%, 0% 63%, 74% 65%, 0% 68%, 21% 72%, 0% 78%, 15% 82%, 2% 84%, 30% 87%, 5% 92%, 18% 93%, 0% 100%, 100% 100%)",
                  }}
                />
                <i
                  className="absolute w-3 h-full -right-3 -scale-x-100"
                  style={{
                    clipPath:
                      "polygon(100% 0%, 0% 0%, 9% 2%, 1% 6%, 100% 9%, 0% 12%, 13% 13%, 0% 16%, 3% 17%, 0% 25%, 11% 28%, 0% 35%, 5% 38%, 0% 40%, 37% 44%, 0% 46%, 9% 50%, 0% 52%, 64% 56%, 0% 58%, 9% 63%, 1% 64%, 4% 66%, 4% 74%, 1% 81%, 15% 84%, 5% 85%, 68% 88%, 0% 90%, 7% 93%, 0% 100%, 100% 100%)",
                  }}
                />
                <div>
                  <div className="text-ui-900 uppercase font-headings font-bold text-5xl drop-shadow-[0_3px_0_rgba(0,0,0,0)]">
                    $20 000
                  </div>
                  <div className="uppercase text-sm text-ui-900">
                    Prize pool
                  </div>
                </div>
                <div>
                  <div className="text-ui-900 uppercase font-headings font-bold text-5xl drop-shadow-[0_3px_0_rgba(0,0,0,0)]">
                    OCT-DEC
                  </div>
                  <div className="uppercase text-sm text-ui-900">
                    Event duration
                  </div>
                </div>
                <div>
                  <div className="text-ui-900 uppercase font-headings font-bold text-5xl drop-shadow-[0_3px_0_rgba(0,0,0,0)]">
                    ALL RANKS
                  </div>
                  <div className="uppercase text-sm text-ui-900">inclusive</div>
                </div>
              </div>
            </div>
            */}
            <div className="w-full max-w-md mx-auto px-10 drop-shadow-[0_2px_0_rgba(0,0,0,0.2)]">
              <div className="grid grid-cols-1 md:grid-cols-3 text-center p-4 gap-4 leading-none relative">
                <div>
                  <div className="text-ui-100 uppercase font-headings font-bold text-5xl">
                    $20 000
                  </div>
                  <div className="uppercase text-sm text-ui-100">
                    Prize pool
                  </div>
                </div>
                <div>
                  <div className="text-ui-100 uppercase font-headings font-bold text-5xl">
                    OCT-DEC
                  </div>
                  <div className="uppercase text-sm text-ui-100">
                    Event duration
                  </div>
                </div>
                <div>
                  <div className="text-ui-100 uppercase font-headings font-bold text-5xl">
                    ALL RANKS
                  </div>
                  <div className="uppercase text-sm text-ui-100">inclusive</div>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute z-0 inset-0 flex items-end justify-center bg-ui-900/95 overflow-hidden">
            <img
              src="https://res.cloudinary.com/gloot/image/upload/v1689166178/Stryda/marketing/campaigns/Nordic%20Clash/Hero_agent_silhouette.png"
              className="absolute z-10 -bottom-1 h-80 w-auto max-w-[none]"
              alt=""
            />
            <video
              autoPlay={true}
              playsInline
              loop
              muted
              preload
              width="100%"
              height="100%"
              className="scale-[3] lg:scale-100 w-auto h-full lg:w-full lg:h-auto relative z-0"
              src="https://res.cloudinary.com/gloot/video/upload/v1689166247/Stryda/marketing/campaigns/Nordic%20Clash/SNC_5s_VB_Loop.mp4"
            ></video>
          </div>
        </section>
        <section className="relative z-10 py-24 bg-ui-100 bg-fixed text-center">
          <div className="max-w-[70ch] mx-auto">
            <h2 className="text-ui-900 font-headings font-bold leading-[0.93]">
              <span className="text-6xl">Who will be the Valorant</span>
              <br />
              <span className="text-8xl">Nordic Champions?</span>
            </h2>
            <p className="text-ui-900 text-xl leading-relaxed mt-4">
              Join the Stryda Nordic Clash, part of the VALORANT Championship
              Tour OFF//SEASON 2023. Compete for the title of Champions in the
              North and a slice of the exciting <b>$20,000</b> prize pool!
            </p>
            <p className="text-ui-900 leading-relaxed mt-6">
              Whether you&#39;re an experienced esports professional or not,
              VALORANT Nordic Clash is open to players of all skills level to
              compete in a unique new way. The only requirement: you must have
              at least 3 players from the Nordic regions in your team. Are you
              ready to test yourself against the modern-days Vikings? The
              tournament will kick off in October with a series of qualifiers
              played off with the Stryda leaderboards in Clans Events. Only the
              most skilled teams will emerge victorious and secure their place
              in the Grand Finale.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

PrototypePage.getLayout = getLayout;

export default PrototypePage;
