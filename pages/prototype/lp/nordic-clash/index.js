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

      <div className="min-h-screen bg-ui-900 relative">
        <i className="absolute inset-0 pointer-events-none z-50 mix-blend-overlay opacity-30 bg-fixed bg-[length:100px_100px] bg-[url('https://res.cloudinary.com/gloot/image/upload/v1689232741/Stryda/marketing/campaigns/Nordic%20Clash/noise-black.jpg')]" />
        <section className="relative z-10 pt-28 pb-80">
          <div className="relative z-20 px-4">
            <div className="drop-shadow-[0_4px_0_rgba(0,0,0,0.2)]">
              <div
                className="blockreveal animate-paused animate-delay mx-auto w-44 mb-10"
                style={{
                  "--delay": "calc(0 * 0.05s)",
                }}
              >
                <img
                  src="https://res.cloudinary.com/gloot/image/upload/v1689235015/Stryda/logos/stryda-logo-ui-100.svg"
                  width="auto"
                  height="auto"
                  alt="Stryda"
                />
              </div>
              <div
                className="blockreveal animate-paused animate-delay mx-auto w-full max-w-md mb-8"
                style={{
                  "--delay": "calc(2 * 0.05s)",
                }}
              >
                <img
                  src="https://res.cloudinary.com/gloot/image/upload/v1689166223/Stryda/marketing/campaigns/Nordic%20Clash/Stryda_Nordic_Clash_logo.svg"
                  width="auto"
                  height="auto"
                  alt="Stryda"
                />
              </div>
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
                  <div
                    className="text-ui-100 uppercase font-headings font-bold text-5xl xl:text-6xl blockreveal animate-paused animate-delay"
                    style={{
                      "--delay": "calc(10 * 0.05s)",
                    }}
                  >
                    <span>$20 000</span>
                  </div>
                  <div
                    className="uppercase text-sm xl:text-base text-ui-100 blockreveal animate-paused animate-delay"
                    style={{
                      "--delay": "calc(11 * 0.05s)",
                    }}
                  >
                    <span>Prize pool</span>
                  </div>
                </div>
                <div>
                  <div
                    className="text-ui-100 uppercase font-headings font-bold text-5xl xl:text-6xl blockreveal animate-paused animate-delay"
                    style={{
                      "--delay": "calc(12 * 0.05s)",
                    }}
                  >
                    <span>OCT-DEC</span>
                  </div>
                  <div
                    className="uppercase text-sm xl:text-base text-ui-100 blockreveal animate-paused animate-delay"
                    style={{
                      "--delay": "calc(13 * 0.05s)",
                    }}
                  >
                    <span>Event duration</span>
                  </div>
                </div>
                <div>
                  <div
                    className="text-ui-100 uppercase font-headings font-bold text-5xl xl:text-6xl blockreveal animate-paused animate-delay"
                    style={{
                      "--delay": "calc(14 * 0.05s)",
                    }}
                  >
                    <span>ALL RANKS</span>
                  </div>
                  <div
                    className="uppercase text-sm xl:text-base text-ui-100 blockreveal animate-paused animate-delay"
                    style={{
                      "--delay": "calc(15 * 0.05s)",
                    }}
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
              className="scale-[4] md:scale-[3] lg:scale-[2] 2xl:scale-100 w-auto h-full lg:w-full lg:h-auto relative z-0"
              src="https://res.cloudinary.com/gloot/video/upload/v1689166247/Stryda/marketing/campaigns/Nordic%20Clash/SNC_5s_VB_Loop_1.mp4"
            ></video>
          </div>
        </section>
        <section className="relative z-10 px-6 lg:px-0 bg-ui-100 text-center">
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
            <div
              className="flex-1 max-w-lg:hidden animate-slide-in-left animate-paused animate-delay"
              style={{
                "--delay": "calc(2 * 0.05s)",
              }}
            >
              <img
                src="https://res.cloudinary.com/gloot/image/upload/v1689239647/Stryda/marketing/campaigns/Nordic%20Clash/agent_deadlock.png"
                className="w-full h-auto -mt-12"
                alt=""
              />
            </div>
            <div className="flex-0 max-w-sm 2xl:max-w-[70ch] mx-auto py-28">
              <h2 className="text-ui-900 font-headings font-bold leading-[0.93]">
                <span
                  className="text-5xl 2xl:text-6xl blockreveal before:!bg-ui-900 animate-paused animate-delay"
                  style={{
                    "--delay": "calc(0 * 0.05s)",
                  }}
                >
                  <span>Who will be the Valorant</span>
                </span>
                <br />
                <span
                  className="text-7xl 2xl:text-8xl blockreveal before:!bg-ui-900 animate-paused animate-delay"
                  style={{
                    "--delay": "calc(2 * 0.05s)",
                  }}
                >
                  <span>Nordic Champions?</span>
                </span>
              </h2>
              <p
                className="text-ui-900 text-xl leading-relaxed mt-4 animate-slide-in-bottom animate-paused animate-delay"
                style={{
                  "--delay": "calc(4 * 0.05s)",
                }}
              >
                Join the Stryda Nordic Clash, part of the VALORANT Championship
                Tour OFF//SEASON 2023. Compete for the title of Champions in the
                North and a slice of the exciting{" "}
                <b className="bg-ui-900 text-ui-100 px-1">$20,000</b> prize
                pool!
              </p>
              <p
                className="text-ui-900 text-lg leading-relaxed my-6 animate-slide-in-bottom animate-paused animate-delay"
                style={{
                  "--delay": "calc(5 * 0.05s)",
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
              <div
                className="animate-slide-in-bottom animate-paused animate-delay"
                style={{
                  "--delay": "calc(6 * 0.05s)",
                }}
              >
                <button
                  type="button"
                  className="group relative uppercase text-lg bg-game-valorant px-6 py-4 leading-none overflow-hidden active:opacity-90 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-game-valorant active:outline active:outline-offset-2 active:outline-ui-900"
                >
                  <span className="block ease-[cubic-bezier(1,0,.2,1)] duration-300 group-hover:duration-[.4s] text-ui-900 group-hover:translate-x-[calc(100%+2rem)] group-hover:-skew-12">
                    Sign up
                  </span>
                  <span className="ease-[cubic-bezier(1,0,.2,1)] duration-[.4s] group-hover:duration-300 absolute inset-0 flex bg-ui-900 text-ui-100 items-center justify-center transition-all -skew-x-12 -translate-x-[calc(100%+1rem)] group-hover:translate-x-0 group-hover:skew-x-0">
                    <span>Sign up</span>
                  </span>
                </button>
              </div>
            </div>
            <div
              className="flex-1 max-w-lg:hidden animate-slide-in-right animate-paused animate-delay"
              style={{
                "--delay": "calc(2 * 0.05s)",
              }}
            >
              <img
                src="https://res.cloudinary.com/gloot/image/upload/v1689239647/Stryda/marketing/campaigns/Nordic%20Clash/agent_breach.png"
                className="w-full h-auto -mt-12"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="relative z-0 px-6 lg:px-0 bg-ui-900 text-center">
          <div className="relative z-20 container max-w-sm 2xl:max-w-[70ch] mx-auto py-32">
            <div className="drop-shadow-[0_4px_0_rgba(0,0,0,0.2)]">
              <div
                className="blockreveal animate-paused animate-delay mx-auto w-44 mb-10"
                style={{
                  "--delay": "calc(0 * 0.05s)",
                }}
              >
                <img
                  src="https://res.cloudinary.com/gloot/image/upload/v1689235015/Stryda/logos/stryda-logo-ui-100.svg"
                  width="auto"
                  height="auto"
                  alt="Stryda"
                />
              </div>
              <div
                className="blockreveal animate-paused animate-delay"
                style={{
                  "--delay": "calc(2 * 0.05s)",
                }}
              >
                <img
                  src="https://res.cloudinary.com/gloot/image/upload/v1689166223/Stryda/marketing/campaigns/Nordic%20Clash/Stryda_Nordic_Clash_logo.svg"
                  width="auto"
                  height="auto"
                  alt="Stryda"
                  className="relative z-0 mx-auto w-full max-w-md mb-12"
                />
              </div>
            </div>
            <div className="drop-shadow-[0_2px_0_rgba(0,0,0,0.2)]">
              <p
                className="text-ui-100 text-lg md:text-xl leading-relaxed mt-6 animate-slide-in-bottom animate-paused animate-delay"
                style={{
                  "--delay": "calc(3 * 0.05s)",
                }}
              >
                Legends speak of an ancient Radianite-powered relic hidden in
                the farthest reaches of the North.
              </p>
              <p
                className="text-ui-100 text-lg md:text-xl leading-relaxed mt-6 animate-slide-in-bottom animate-paused animate-delay"
                style={{
                  "--delay": "calc(4 * 0.05s)",
                }}
              >
                For generations, brave warriors have fought and died trying to
                claim it for themselves.
              </p>
              <p
                className="text-ui-100 text-lg md:text-xl leading-relaxed mt-6 animate-slide-in-bottom animate-paused animate-delay"
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
                className="text-ui-100 text-lg md:text-xl leading-relaxed my-6 animate-slide-in-bottom animate-paused animate-delay"
                style={{
                  "--delay": "calc(6 * 0.05s)",
                }}
              >
                Are you ready for the challenge? Only the worthy will secure
                their position as the strongest Clan in the North, claim the
                relic, and maybe - just maybe- a place in Valhalla itself.
              </p>
            </div>
            <div
              className="animate-slide-in-bottom animate-paused animate-delay"
              style={{
                "--delay": "calc(7 * 0.05s)",
              }}
            >
              <button
                type="button"
                className="group relative uppercase text-lg bg-game-valorant px-6 py-4 leading-none overflow-hidden active:opacity-90 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-game-valorant active:outline active:outline-offset-2 active:outline-ui-100"
              >
                <span className="block ease-[cubic-bezier(1,0,.2,1)] duration-300 group-hover:duration-[.4s] text-ui-900 group-hover:translate-x-[calc(100%+2rem)] group-hover:-skew-12">
                  Sign up
                </span>
                <span className="ease-[cubic-bezier(1,0,.2,1)] duration-[.4s] group-hover:duration-300 absolute inset-0 flex bg-ui-100 text-ui-900 items-center justify-center transition-all -skew-x-12 -translate-x-[calc(100%+1rem)] group-hover:translate-x-0 group-hover:skew-x-0">
                  <span>Sign up</span>
                </span>
              </button>
            </div>
          </div>
          <i className="absolute z-10 h-36 inset-x-0 -bottom-px bg-gradient-to-b from-ui-900/0 to-ui-900" />
          <div className="pointer-events-none absolute z-0 inset-0 flex items-center justify-center overflow-hidden">
            <i className="absolute z-10 inset-0 bg-ui-900 opacity-30" />
            <video
              autoPlay={true}
              playsInline
              loop
              muted
              preload
              width="100%"
              height="100%"
              className="scale-[4] md:scale-[3] lg:scale-[2] 2xl:scale-100 w-auto h-full lg:w-full lg:h-auto relative z-0"
              src="https://res.cloudinary.com/gloot/video/upload/v1689577806/Stryda/marketing/campaigns/Nordic%20Clash/SNC_LOGO_Fill_5s_VB_Loop.mp4"
            ></video>
          </div>
        </section>
        <section className="relative z-0 bg-ui-900 text-center lg:text-left">
          <div className="relative z-10 container px-6 flex flex-col lg:flex-row gap-8 items-center justify-center py-24">
            <div className="flex-3 lg:order-2">
              <video
                className="w-full h-auto"
                autoPlay
                playsInline
                muted
                loop
                preload="true"
              >
                <source
                  type="video/webm"
                  src="https://res.cloudinary.com/gloot/video/upload/v1689595118/Stryda/marketing/campaigns/Nordic%20Clash/SNC_Throphy_Idle_.png_0000-0120__4.webm"
                />

                <img
                  src="https://res.cloudinary.com/gloot/image/upload/v1689586856/Stryda/marketing/campaigns/Nordic%20Clash/trophy.png"
                  alt=""
                  className="w-full h-auto"
                />
              </video>
            </div>
            <div className="flex-2">
              <h2 className="text-ui-100 font-headings font-bold leading-[0.93] text-8xl">
                <span
                  className="blockreveal animate-paused animate-delay"
                  style={{
                    "--delay": "calc(0 * 0.05s)",
                  }}
                >
                  <span>Event schedule</span>
                </span>
                <br />
                <span
                  className="blockreveal animate-paused animate-delay"
                  style={{
                    "--delay": "calc(2 * 0.05s)",
                  }}
                >
                  <span>&amp; prize pool</span>
                </span>
              </h2>
              <p
                className="text-ui-100 text-lg md:text-xl leading-relaxed mt-4 animate-slide-in-bottom animate-paused animate-delay"
                style={{
                  "--delay": "calc(3 * 0.05s)",
                }}
              >
                The Nordic Clash qualifiers will be hosted on Stryda throughout
                the fall of 2023. There will be 2 qualifier Clans Events of
                around 1 month each, allowing players to join in at any time.
                Players will be divided based on skills level to ensure fairness
                and fun for everyone.
              </p>
              <p
                className="text-ui-100 text-lg md:text-xl leading-relaxed mt-6 animate-slide-in-bottom animate-paused animate-delay"
                style={{
                  "--delay": "calc(4 * 0.05s)",
                }}
              >
                The VALORANT Nordic Clash will culminate with a Grand Finale in
                December, where the top-performing Clans of every skill level
                will clash head-to-head to claim the title of Nordic Champions.
              </p>
              <p
                className="text-ui-100 text-lg md:text-xl leading-relaxed my-6 animate-slide-in-bottom animate-paused animate-delay"
                style={{
                  "--delay": "calc(5 * 0.05s)",
                }}
              >
                The total prize pool is{" "}
                <b className="bg-ui-100 text-ui-900 px-1">$20,000</b>, with{" "}
                <b className="bg-ui-100 text-ui-900 px-1">$15,000</b> cash and{" "}
                <b className="bg-ui-100 text-ui-900 px-1">$5,000</b> in skins,
                merch, and digital currencies. Everyone competing has a change
                to win prizes.
              </p>
              <div
                className="animate-slide-in-bottom animate-paused animate-delay"
                style={{
                  "--delay": "calc(6 * 0.05s)",
                }}
              >
                <button
                  type="button"
                  className="group relative uppercase text-lg bg-game-valorant px-6 py-4 leading-none overflow-hidden active:opacity-90 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-game-valorant active:outline active:outline-offset-2 active:outline-ui-100"
                >
                  <span className="block ease-[cubic-bezier(1,0,.2,1)] duration-300 group-hover:duration-[.4s] text-ui-900 group-hover:translate-x-[calc(100%+2rem)] group-hover:-skew-12">
                    Sign up
                  </span>
                  <span className="ease-[cubic-bezier(1,0,.2,1)] duration-[.4s] group-hover:duration-300 absolute inset-0 flex bg-ui-100 text-ui-900 items-center justify-center transition-all -skew-x-12 -translate-x-[calc(100%+1rem)] group-hover:translate-x-0 group-hover:skew-x-0">
                    <span>Sign up</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="relative z-0 bg-ui-900 text-center lg:text-left">
          <div className="relative z-10 container px-6 flex flex-col lg:flex-row gap-8 items-center justify-center pb-24">
            <div className="flex-3">
              <img
                src="https://res.cloudinary.com/gloot/image/upload/v1689603008/Stryda/marketing/campaigns/Nordic%20Clash/stryda_app.png"
                alt=""
                className="w-full h-auto"
              />
            </div>
            <div className="flex-2">
              <h2 className="text-ui-100 font-headings font-bold leading-[0.93] text-8xl">
                <span
                  className="blockreveal animate-paused animate-delay"
                  style={{
                    "--delay": "calc(0 * 0.05s)",
                  }}
                >
                  <span>Prepare to battle</span>
                </span>
                <br />
                <span
                  className="blockreveal animate-paused animate-delay"
                  style={{
                    "--delay": "calc(2 * 0.05s)",
                  }}
                >
                  <span>with Stryda</span>
                </span>
              </h2>
              <p
                className="text-ui-100 text-lg md:text-xl leading-relaxed mt-4 animate-slide-in-bottom animate-paused animate-delay"
                style={{
                  "--delay": "calc(3 * 0.05s)",
                }}
              >
                The VALORANT Nordic Clash qualifiers will be hosted exclusively
                on the Stryda platform with specific leaderboards.
              </p>
              <p
                className="text-ui-100 text-lg md:text-xl leading-relaxed mt-6 animate-slide-in-bottom animate-paused animate-delay"
                style={{
                  "--delay": "calc(4 * 0.05s)",
                }}
              >
                All you have to do is create your Clan, play together with your
                team, and place yourselves on the Clan Events&#39; leaderboard.
                Create your Clan and start training for the Nordic Clash with
                Stryda now!
              </p>
              <p
                className="text-ui-100 text-lg md:text-xl leading-relaxed my-6 animate-slide-in-bottom animate-paused animate-delay"
                style={{
                  "--delay": "calc(5 * 0.05s)",
                }}
              >
                Remember, at least three people in your Clan must be part of the
                Nordic Countries (Denmark, Norway, Sweden, Finland, and Iceland,
                as well as the Faroe Islands, Greenland, and Åland).
              </p>
              <div
                className="animate-slide-in-bottom animate-paused animate-delay"
                style={{
                  "--delay": "calc(6 * 0.05s)",
                }}
              >
                <button
                  type="button"
                  className="group relative uppercase text-lg bg-game-valorant px-6 py-4 leading-none overflow-hidden active:opacity-90 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-game-valorant active:outline active:outline-offset-2 active:outline-ui-100"
                >
                  <span className="block ease-[cubic-bezier(1,0,.2,1)] duration-300 group-hover:duration-[.4s] text-ui-900 group-hover:translate-x-[calc(100%+2rem)] group-hover:-skew-12">
                    Sign up
                  </span>
                  <span className="ease-[cubic-bezier(1,0,.2,1)] duration-[.4s] group-hover:duration-300 absolute inset-0 flex bg-ui-100 text-ui-900 items-center justify-center transition-all -skew-x-12 -translate-x-[calc(100%+1rem)] group-hover:translate-x-0 group-hover:skew-x-0">
                    <span>Sign up</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="relative z-10 pt-80 text-center">
          <div className="relative z-20 px-6 lg:px-0 pb-32 bg-ui-100">
            <div className="w-full max-w-md mx-auto">
              <h3
                className="text-ui-900 text-2xl uppercase blockreveal before:!bg-ui-900 animate-paused animate-delay mb-2"
                style={{
                  "--delay": "calc(2 * 0.05s)",
                }}
              >
                <span>What are you waiting for?</span>
              </h3>

              <h2 className="text-ui-900 font-headings font-bold leading-[0.93]">
                <span
                  className="text-8xl md:text-9xl blockreveal before:!bg-ui-900 animate-paused animate-delay"
                  style={{
                    "--delay": "calc(2 * 0.05s)",
                  }}
                >
                  <span>Sign up today</span>
                </span>
              </h2>
              <p
                className="text-ui-900 text-xl leading-relaxed mt-4 mb-6 animate-slide-in-bottom animate-paused animate-delay"
                style={{
                  "--delay": "calc(4 * 0.05s)",
                }}
              >
                Stryda Nordic Clash is part of the VALORANT Championship Tour
                OFF//SEASON 2023, in partnership with Riot. Compete with your
                Clan to claim a slice of the exciting{" "}
                <b className="bg-ui-900 text-ui-100 px-1">$20,000</b> prize
                pool!
              </p>
              <div
                className="animate-slide-in-bottom animate-paused animate-delay"
                style={{
                  "--delay": "calc(6 * 0.05s)",
                }}
              >
                <button
                  type="button"
                  className="group relative uppercase text-lg bg-game-valorant px-6 py-4 leading-none overflow-hidden active:opacity-90 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-game-valorant active:outline active:outline-offset-2 active:outline-ui-900"
                >
                  <span className="block ease-[cubic-bezier(1,0,.2,1)] duration-300 group-hover:duration-[.4s] text-ui-900 group-hover:translate-x-[calc(100%+2rem)] group-hover:-skew-12">
                    Sign up
                  </span>
                  <span className="ease-[cubic-bezier(1,0,.2,1)] duration-[.4s] group-hover:duration-300 absolute inset-0 flex bg-ui-900 text-ui-100 items-center justify-center transition-all -skew-x-12 -translate-x-[calc(100%+1rem)] group-hover:translate-x-0 group-hover:skew-x-0">
                    <span>Sign up</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute z-0 inset-0 flex items-center justify-center overflow-hidden">
            <img
              src="https://res.cloudinary.com/gloot/image/upload/v1689603342/Stryda/marketing/campaigns/Nordic%20Clash/Hero_agent_silhouette_white.png"
              className="absolute z-10 top-1 h-80 w-auto max-w-[none]"
              alt=""
            />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

PrototypePage.getLayout = getLayout;

export default PrototypePage;
