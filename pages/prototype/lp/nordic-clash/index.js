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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="0"
          height="0"
          viewBox="0 0 480 480"
        >
          <defs>
            <filter
              id="screenLines"
              x="0vw"
              y="0vh"
              width="100vw"
              height="100vh"
            >
              <feFlood flood-color="#808080" result="neutral-gray" />
              <feTurbulence
                in="neutral-gray"
                type="fractalNoise"
                baseFrequency="0.001 10"
                numOctaves="10"
                stitchTiles="stitch"
                result="noise"
              />
              <feColorMatrix
                in="noise"
                type="saturate"
                values="0"
                result="destaturatedNoise"
              ></feColorMatrix>
              <feComponentTransfer in="desaturatedNoise" result="theNoise">
                <feFuncA type="table" tableValues="0 0 0.2 0"></feFuncA>
              </feComponentTransfer>
              <feBlend
                in="SourceGraphic"
                in2="theNoise"
                mode="soft-light"
                result="noisy-image"
              />
            </filter>

            <filter id="noise" x="0vw" y="0vh" width="100vw" height="100vh">
              <feFlood flood-color="#808080" result="neutral-gray" />
              <feTurbulence
                in="neutral-gray"
                type="fractalNoise"
                baseFrequency="0.3"
                seed="1"
                numOctaves="10"
                stitchTiles="stitch"
                result="noise"
              />
              <feColorMatrix
                in="noise"
                type="saturate"
                values="0"
                result="destaturatedNoise"
              ></feColorMatrix>
              <feComponentTransfer in="desaturatedNoise" result="theNoise">
                <feFuncA type="table" tableValues="0 0 0.2 0"></feFuncA>
              </feComponentTransfer>
              <feBlend
                in="SourceGraphic"
                in2="theNoise"
                mode="soft-light"
                result="noisy-image"
              />
            </filter>

            <filter id="Chromatic_aberration">
              <feOffset
                in="SourceGraphic"
                result="pre-red"
                dx="-6"
                dy="-0"
              ></feOffset>
              <feOffset
                in="SourceGraphic"
                result="yellow"
                dx="-6"
                dy="-0"
              ></feOffset>
              <feOffset
                in="SourceGraphic"
                result="pre-blue"
                dx="4"
                dy="4"
              ></feOffset>
              <feColorMatrix
                in="pre-red"
                type="matrix"
                result="red"
                values="0 0 0 0 1
                                                       0 0 0 0 0 
                                                       0 0 0 0 0 
                                                       0 0 0 1 0"
              ></feColorMatrix>
              <feColorMatrix
                in="pre-blue"
                type="matrix"
                result="blue"
                values="0 0 0 0 0
                                                       0 0 0 0 0 
                                                       0 0 0 0 1 
                                                       0 0 0 1 0"
              ></feColorMatrix>
              <feBlend
                mode="lighten"
                in="red"
                in2="blue"
                result="main"
              ></feBlend>
              <feBlend
                mode="multiply"
                in="main"
                in2="SourceGraphic"
                result="main1"
              ></feBlend>
              <feComposite
                in="SourceGraphic"
                in2="main1"
                operator="xor"
                result="comp"
              ></feComposite>
              <feMerge>
                <feMergeNode in="yellow"></feMergeNode>
                <feMergeNode in="comp"></feMergeNode>
              </feMerge>
            </filter>

            <filter id="Analog_noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.0001 0.0001"
                numOctaves="1"
                result="warp"
              ></feTurbulence>
              <feDisplacementMap
                xChannelSelector="R"
                yChannelSelector="G"
                scale="30"
                in="SourceGraphic"
                in2="warp"
              />
            </filter>

            <filter id="strangify">
              <feTurbulence
                type="fractalNoise"
                baseFrequency=".013"
                numOctaves="1"
                seed="46"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1.1 0"
              />
              <feComposite
                operator="in"
                in="SourceGraphic"
                result="intermediate-1"
              />

              <feComponentTransfer>
                <feFuncA type="table" tableValues="0 0 0 0 1 1 1" />
              </feComponentTransfer>
              <feGaussianBlur stdDeviation="4" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="1.5">
                  <animate
                    attributeName="slope"
                    values="1.5;1.5;1.8;1.5;1.5;3;0;3;1.1'1.5;1.1;1.4;1.5;1.4;2;1;0;1.5;1;1.5;1.5;1.5;1.5;"
                    dur="0.25s"
                    repeatCount="indefinite"
                  />
                </feFuncA>
              </feComponentTransfer>

              <feComposite operator="over" in2="intermediate-1" />
            </filter>
            <filter id="glitchshadow">
              <feGaussianBlur
                in="SourceAlpha"
                stdDeviation="0"
                result="blur"
              ></feGaussianBlur>
              <feOffset dx="0" dy="0" result="offsetblur">
                <animate
                  attributeName="dx"
                  from="0"
                  to="0"
                  begin="0s"
                  dur="0.1s"
                  repeatCount="indefinite"
                  values="-2.5;-1;-1;-1;2.5;0"
                  keyTimes="0;0.125;0.275;0.625;0.875;1"
                ></animate>
                <animate
                  attributeName="dy"
                  from="0"
                  to="0"
                  begin="0s"
                  dur="0.1s"
                  repeatCount="indefinite"
                  values="1;1.5;3;1.7;-1.7;0"
                  keyTimes="0;0.125;0.275;0.625;0.875;1"
                ></animate>
              </feOffset>
              <feOffset dx="60" dy="-12" result="offsetblur2" in="blur">
                <animate
                  attributeName="dx"
                  from="0"
                  to="0"
                  begin="0s"
                  dur="0.1s"
                  repeatCount="indefinite"
                  values="0;2.5;-1;-1;-1;-2"
                  keyTimes="0;0.125;0.275;0.625;0.875;1"
                ></animate>
                <animate
                  attributeName="dy"
                  from="0"
                  to="0"
                  begin="0s"
                  dur="0.1s"
                  repeatCount="indefinite"
                  values="0;-0.5;0.6;-1.5;0.75;0.5"
                  keyTimes="0;0.125;0.275;0.625;0.875;1"
                ></animate>
              </feOffset>
              <feComponentTransfer result="shadow1" in="offsetblur">
                <feFuncA type="linear" slope=".8"></feFuncA>
                <feFuncR type="discrete" tableValues="0"></feFuncR>
                <feFuncG type="discrete" tableValues="1"></feFuncG>
                <feFuncB type="discrete" tableValues="1"></feFuncB>
              </feComponentTransfer>
              <feComponentTransfer result="shadow2" in="offsetblur2">
                <feFuncA type="linear" slope=".8"></feFuncA>
                <feFuncR type="discrete" tableValues="1"></feFuncR>
                <feFuncG type="discrete" tableValues="0"></feFuncG>
                <feFuncB type="discrete" tableValues="1"></feFuncB>
              </feComponentTransfer>
              <feMerge>
                <feMergeNode in="shadow1"></feMergeNode>
                <feMergeNode in="shadow2"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
          </defs>
        </svg>
        <i className="absolute inset-0 pointer-events-none z-50 mix-blend-overlay opacity-40 bg-fixed bg-[length:100px_100px] bg-[url('https://res.cloudinary.com/gloot/image/upload/v1689232741/Stryda/marketing/campaigns/Nordic%20Clash/noise-black.jpg')]" />
        <section className="relative z-10 pt-28 pb-80">
          <div className="relative z-20 px-4">
            <div className="drop-shadow-[0_4px_0_rgba(0,0,0,0.2)]">
              <img
                src="https://res.cloudinary.com/gloot/image/upload/v1689235015/Stryda/logos/stryda-logo-ui-100.svg"
                width="auto"
                height="auto"
                alt="Stryda"
                className="mx-auto w-auto h-12 mb-10"
              />
              <img
                src="https://res.cloudinary.com/gloot/image/upload/v1689166223/Stryda/marketing/campaigns/Nordic%20Clash/Stryda_Nordic_Clash_logo.svg"
                width="auto"
                height="auto"
                alt="Stryda"
                className="relative z-0 mx-auto w-full max-w-md mb-8"
                style={{ filter: "url(#glitchshadow)" }}
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
                  <div className="text-ui-100 uppercase font-headings font-bold text-5xl xl:text-6xl blockreveal">
                    <span>$20 000</span>
                  </div>
                  <div
                    className="uppercase text-sm xl:text-base text-ui-100 blockreveal animate-delay"
                    style={{ "--delay": "0.1s" }}
                  >
                    <span>Prize pool</span>
                  </div>
                </div>
                <div>
                  <div
                    className="text-ui-100 uppercase font-headings font-bold text-5xl xl:text-6xl blockreveal animate-delay"
                    style={{ "--delay": "0.2s" }}
                  >
                    <span>OCT-DEC</span>
                  </div>
                  <div
                    className="uppercase text-sm xl:text-base text-ui-100 blockreveal animate-delay"
                    style={{ "--delay": "0.3s" }}
                  >
                    <span>Event duration</span>
                  </div>
                </div>
                <div>
                  <div
                    className="text-ui-100 uppercase font-headings font-bold text-5xl xl:text-6xl blockreveal animate-delay"
                    style={{ "--delay": "0.4s" }}
                  >
                    <span>ALL RANKS</span>
                  </div>
                  <div
                    className="uppercase text-sm xl:text-base text-ui-100 blockreveal animate-delay"
                    style={{ "--delay": "0.5s" }}
                  >
                    <span>inclusive</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute z-0 inset-0 flex items-center justify-center bg-ui-900/95 overflow-hidden">
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
              src="https://res.cloudinary.com/gloot/video/upload/v1689166247/Stryda/marketing/campaigns/Nordic%20Clash/SNC_5s_VB_Loop_1.mp4"
            ></video>
          </div>
        </section>
        <section className="relative z-10 bg-ui-100 text-center">
          <i
            className="absolute z-0 inset-x-0 h-8 bg-repeat-x bg-contain -top-px"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1689578093/Stryda/marketing/campaigns/Nordic%20Clash/ripped_paper.svg)`,
            }}
          />
          <i
            className="absolute z-0 inset-x-0 h-8 bg-repeat-x bg-contain -bottom-[calc(2rem-1px)]"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1689579057/Stryda/marketing/campaigns/Nordic%20Clash/ripped_paper_bottom.svg)`,
            }}
          />
          <div className="relative z-10 container flex items-end justify-center">
            <div className="flex-1 max-w-lg:hidden animate-slide-in-bottom animate-paused animate-delay">
              <img
                src="https://res.cloudinary.com/gloot/image/upload/v1689239647/Stryda/marketing/campaigns/Nordic%20Clash/agent_deadlock.png"
                className="w-full h-auto -mt-12"
                alt=""
                style={{ filter: "url(#glitchshadow)" }}
              />
            </div>
            <div className="flex-0 max-w-sm 2xl:max-w-[70ch] mx-auto py-24">
              <h2
                className="text-ui-900 font-headings font-bold leading-[0.93] animate-slide-in-bottom animate-paused animate-delay"
                style={{
                  "--delay": "calc(2 * 0.05s)",
                }}
              >
                <span className="text-5xl 2xl:text-6xl">
                  Who will be the Valorant
                </span>
                <br />
                <span className="text-7xl 2xl:text-8xl">Nordic Champions?</span>
              </h2>
              <p
                className="text-ui-900 text-xl leading-relaxed mt-4 animate-slide-in-bottom animate-paused animate-delay"
                style={{
                  "--delay": "calc(3 * 0.05s)",
                }}
              >
                Join the Stryda Nordic Clash, part of the VALORANT Championship
                Tour OFF//SEASON 2023. Compete for the title of Champions in the
                North and a slice of the exciting <b>$20,000</b> prize pool!
              </p>
              <p
                className="text-ui-900 leading-relaxed mt-6 animate-slide-in-bottom animate-paused animate-delay"
                style={{
                  "--delay": "calc(4 * 0.05s)",
                }}
              >
                Whether you&#39;re an experienced esports professional or not,
                VALORANT Nordic Clash is open to players of all skills level to
                compete in a unique new way. The only requirement: you must have
                at least 3 players from the Nordic regions in your team. Are you
                ready to test yourself against the modern-days Vikings? The
                tournament will kick off in October with a series of qualifiers
                played off with the Stryda leaderboards in Clans Events. Only
                the most skilled teams will emerge victorious and secure their
                place in the Grand Finale.
              </p>
            </div>
            <div className="flex-1 max-w-lg:hidden animate-slide-in-bottom animate-paused animate-delay">
              <img
                src="https://res.cloudinary.com/gloot/image/upload/v1689239647/Stryda/marketing/campaigns/Nordic%20Clash/agent_breach.png"
                className="w-full h-auto -mt-12"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="relative z-0 bg-ui-900 text-center">
          <div className="relative z-10 container max-w-sm 2xl:max-w-[70ch] mx-auto py-24">
            <div className="drop-shadow-[0_4px_0_rgba(0,0,0,0.2)]">
              <img
                src="https://res.cloudinary.com/gloot/image/upload/v1689235015/Stryda/logos/stryda-logo-ui-100.svg"
                width="auto"
                height="auto"
                alt="Stryda"
                className="mx-auto w-auto h-12 mb-10 animate-slide-in-bottom animate-paused animate-delay"
                style={{
                  "--delay": "calc(1 * 0.05s)",
                }}
              />
              <img
                src="https://res.cloudinary.com/gloot/image/upload/v1689166223/Stryda/marketing/campaigns/Nordic%20Clash/Stryda_Nordic_Clash_logo.svg"
                width="auto"
                height="auto"
                alt="Stryda"
                className="relative z-0 mx-auto w-full max-w-md mb-12 animate-slide-in-bottom animate-paused animate-delay"
                style={{
                  "--delay": "calc(2 * 0.05s)",
                }}
              />
            </div>
            <div className="drop-shadow-[0_2px_0_rgba(0,0,0,0.2)]">
              <p
                className="text-ui-100 text-xl leading-relaxed mt-6 animate-slide-in-bottom animate-paused animate-delay"
                style={{
                  "--delay": "calc(3 * 0.05s)",
                }}
              >
                Legends speak of an ancient Radianite-powered relic hidden in
                the farthest reaches of the North.
              </p>
              <p
                className="text-ui-100 text-xl leading-relaxed mt-6 animate-slide-in-bottom animate-paused animate-delay"
                style={{
                  "--delay": "calc(4 * 0.05s)",
                }}
              >
                For generations, brave warriors have fought and died trying to
                claim it for themselves.
              </p>
              <p
                className="text-ui-100 text-xl leading-relaxed mt-6 animate-slide-in-bottom animate-paused animate-delay"
                style={{
                  "--delay": "calc(5 * 0.05s)",
                }}
              >
                But now, a new battle begins! The Clans of the North have
                gathered for the ultimate test of skills; the last straw before
                conquering the powerful relic. Here, in the Nordic Clash
                Tournament, new VALORANT champions will rise and old legends
                might fall.
              </p>
              <p
                className="text-ui-100 text-xl leading-relaxed mt-6 animate-slide-in-bottom animate-paused animate-delay"
                style={{
                  "--delay": "calc(6 * 0.05s)",
                }}
              >
                Are you ready for the challenge? Only the worthy will secure
                their position as the strongest Clan in the North, claim the
                relic, and maybe - just maybe- a place in Valhalla itself.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute z-0 inset-0 flex items-center justify-center bg-ui-900/95 overflow-hidden">
            <i className="absolute z-10 inset-0 bg-ui-900 opacity-30" />
            <video
              autoPlay={true}
              playsInline
              loop
              muted
              preload
              width="100%"
              height="100%"
              className="scale-[3] lg:scale-100 w-auto h-full lg:w-full lg:h-auto relative z-0"
              src="https://res.cloudinary.com/gloot/video/upload/v1689577806/Stryda/marketing/campaigns/Nordic%20Clash/SNC_LOGO_Fill_5s_VB_Loop.mp4"
            ></video>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

PrototypePage.getLayout = getLayout;

export default PrototypePage;
