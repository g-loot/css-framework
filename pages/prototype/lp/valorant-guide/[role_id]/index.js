import React, { useEffect, useContext, useState } from "react";

import Footer from "../../../../../components/Footer/Footer";
import TopbarMarketing from "../../../../../components/TopBarMarketing/TopbarMarketing";
import { getLayout } from "../../../../../components/Prototype/PrototypeLayout";
import { useRouter } from "next/router";
import { dataValorantGuideRoles } from "../../../../../mock-data/data-valorant-guide";
import ModalValorantGuideVideo from "../modal-video";
import { UiContext } from "../../../../../contexts/ui";
import Link from "next/link";

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
  const router = useRouter();
  const { role_id } = router.query;
  const [item, setItem] = useState(null);
  const uiContext = useContext(UiContext);

  const getRoleBySlug = (slug) => {
    return dataValorantGuideRoles.find((role) => {
      return role.slug === slug;
    });
  };

  useEffect(() => {
    setItem(getRoleBySlug(role_id));
  }, [role_id]);

  useEffect(() => {
    inViewport("[class*=animate-]");
  }, [item]);

  function openModalValorantGuideVideo() {
    uiContext.openModal(<ModalValorantGuideVideo />);
  }

  return (
    <>
      <TopbarMarketing />

      <div className="min-h-screen">
        {item && (
          <>
            <section className="relative mt-24 mb-12">
              <div
                className="relative z-0 animate-slide-in-bottom animate-paused animate-delay after:content-[''] after:h-1/4 after:w-full after:absolute after:bottom-0 after:inset-x-0 after:bg-gradient-to-t after:from-ui-900 after:to-ui-900/0 scale-150 md:scale-100"
                style={{
                  "--delay": "calc(1 * 0.05s)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full max-w-xl mx-auto"
                />
              </div>
              <div className="container relative z-10 text-center px-6 sm:px-0 -mt-12 sm:-mt-24">
                <img
                  className="w-20 h-20 mx-auto brightness-[5000] animate-slide-in-bottom animate-paused animate-delay"
                  style={{
                    "--delay": "calc(2 * 0.05s)",
                  }}
                  src={item.icon}
                  alt={item.name}
                />
                <h1
                  className="h1 text-7xl sm:text-[7.5rem] max-w-[22ch] sm:mx-auto mt-8 mb-4 animate-slide-in-bottom animate-paused animate-delay"
                  style={{
                    "--delay": "calc(3 * 0.05s)",
                  }}
                >
                  {role_id}
                </h1>
                <div
                  className="max-w-lg mx-auto space-y-4 leading-relaxed text-lg animate-slide-in-bottom animate-paused animate-delay"
                  style={{
                    "--delay": "calc(4 * 0.05s)",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: item.longDescription,
                  }}
                ></div>
              </div>
            </section>
            {item.agents?.map((agent, agentIndex) => (
              <section
                key={agentIndex}
                className="container max-w-2xl mt-24 mb-12 overflow-hidden"
              >
                <div className="container max-w-xl relative z-0 flex flex-col lg:flex-row lg:items-center overflow-hidden">
                  <div className="flex-3 py-8 px-6 xl:px-0 ">
                    <h3
                      className="h5 font-headings text-4xl sm:text-5xl leading-[0.85] text-ui-300 uppercase animate-slide-in-bottom animate-paused animate-delay"
                      style={{
                        "--delay": "calc(1 * 0.05s)",
                      }}
                    >
                      Learn how to play /
                    </h3>
                    <div
                      className="flex gap-4 items-end animate-slide-in-bottom animate-paused animate-delay"
                      style={{
                        "--delay": "calc(2 * 0.05s)",
                      }}
                    >
                      <h3 className="h4 font-headings text-7xl sm:text-[7.5rem] leading-[0.85] font-bold uppercase text-main">
                        {agent.name}
                      </h3>
                      <img
                        className="w-12 h-12 -translate-y-2 sm:-translate-y-3"
                        src={item.icon}
                        alt={item.name}
                      />
                    </div>
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="block md:hidden animate-slide-in-bottom animate-paused animate-delay"
                      style={{
                        "--delay": "calc(3 * 0.05s)",
                      }}
                    />
                    <ul
                      className="mt-6 mb-7 flex items-stretch gap-8 leading-none overflow-x-auto scrollbar-hidden child:border-l child:border-l-ui-500 child:pl-4 animate-slide-in-bottom animate-paused animate-delay"
                      style={{
                        "--delay": "calc(3 * 0.05s)",
                      }}
                    >
                      <li>
                        <div className="uppercase text-sm text-ui-300 mb-1">
                          Role
                        </div>
                        <div>{item.nameSingular}</div>
                      </li>
                      <li>
                        <div className="uppercase text-sm text-ui-300 mb-1">
                          Real name
                        </div>
                        <div>{agent.realName}</div>
                      </li>
                      <li>
                        <div className="uppercase text-sm text-ui-300 mb-1">
                          Country
                        </div>
                        <div>{agent.country}</div>
                      </li>
                    </ul>
                    <div
                      className="space-y-4 leading-relaxed sm:max-w-[40ch] animate-slide-in-bottom animate-paused animate-delay"
                      style={{
                        "--delay": "calc(4 * 0.05s)",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: agent.bio,
                      }}
                    />
                  </div>
                  <div className="flex-4 relative animate-fade-in animate-paused">
                    <div
                      className="md:absolute inset-0 grid place-content-center pt-0 md:pt-4 p-4 animate-slide-in-bottom animate-paused animate-delay"
                      style={{
                        "--delay": "calc(5 * 0.05s)",
                      }}
                    >
                      <div
                        className="surface rounded-[.75rem] overflow-hidden w-full md:w-96 mx-auto md:mt-36 relative animate-scale-in drop-shadow-xl cursor-pointer group"
                        onClick={openModalValorantGuideVideo}
                      >
                        <div className="absolute z-30 inset-0 flex items-center justify-center pointer-events-none">
                          <button
                            type="button"
                            className="button button-primary button-lg button-play group-hover:scale-125"
                          >
                            <span className="icon icon-circle-caret-right"></span>
                          </button>
                        </div>
                        <span className="absolute inset-0 z-10 bg-ui-900 opacity-50 group-hover:opacity-20 transition-opacity duration-300 ease" />
                        <img
                          src="https://res.cloudinary.com/gloot/image/upload/v1684999497/Stryda/marketing/website/valorant-guide/valorant-stats-video-cover.jpg"
                          width="100%"
                          height="auto"
                          alt=""
                          className="relative z-0 aspect-video object-cover object-center"
                        />
                      </div>
                    </div>
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="hidden md:block pointer-events-none w-1/2 lg:w-full h-auto mx-auto"
                    />
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="hidden md:block pointer-events-none absolute -left-1/3 top-2/3 sm:-left-1/2 sm:-bottom-1/2 opacity-20 blur-md sm:blur-2xl sm:scale-150 brightness-150 -scale-y-100 transform-gpu"
                    />
                  </div>
                </div>
                <ul className="relative z-10 border-y border-ui-600 bg-ui-900 sm:divide-x divide-ui-600 py-8 gap-y-8 grid md:grid-cols-2 xl:grid-cols-4">
                  {agent.abilities?.map((ability, abilityIndex) => (
                    <li
                      key={abilityIndex}
                      className="flex items-start gap-4 px-6 animate-slide-in-bottom animate-paused animate-delay"
                      style={{
                        "--delay": "calc(" + abilityIndex + " * 0.05s)",
                      }}
                    >
                      <img src={ability.icon} alt="" className="w-12 h-12" />
                      <div>
                        <h5 className="text-ui-100">
                          &#91;
                          {ability.defaultKey}
                          &#93; {ability.name}
                        </h5>
                        <p className="text-sm mt-1">{ability.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
            <section className="container max-w-xl relative my-24">
              <div className="lg:text-center px-6 xl:px-0 mb-12 md:mb-0">
                <h2 className="h1 mb-4">Discover other roles</h2>
                <p className="text-lg leading-relaxed max-w-md mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  egestas nibh quam, eget ultrices turpis imperdiet eu. Donec
                  non dui vitae tortor tempus imperdiet vel ac erat. Ut a
                  sagittis nibh.
                </p>
              </div>
              <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {dataValorantGuideRoles.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="relative py-12 overflow-hidden animate-slide-in-bottom animate-paused animate-delay"
                    style={{
                      "--delay": "calc(" + itemIndex + " * 0.05s)",
                    }}
                  >
                    <div className="relative w-full z-0 after:content-[''] after:h-1/3 after:w-full after:absolute after:bottom-0 after:inset-x-0 after:bg-gradient-to-t after:from-ui-900 after:to-ui-900/0 scale-150 md:scale-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-60 object-cover object-center"
                      />
                    </div>
                    <div className="container max-w-lg relative z-20 -mt-6 md:-mt-12 px-6 xl:px-0 after:content-[''] after:absolute after:z-10 after:blur-lg after:bg-ui-900 after:inset-0">
                      <div className="relative z-20">
                        <h3 className="h4 font-headings text-4xl leading-[0.85] text-ui-200 uppercase">
                          VALORANT role
                        </h3>
                        <div className="flex gap-4 items-center">
                          <h3 className="h4 font-headings text-6xl leading-[0.85] font-bold uppercase text-main">
                            {item.name}
                          </h3>
                        </div>
                        <div className="mt-4 mb-5 space-y-4 leading-relaxed max-w-[40ch]">
                          <p
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          />
                        </div>
                        <Link href={`${item.slug}`}>
                          <a className="group cursor-pointer text-main hover:opacity-80 active:opacity-80 rounded outline-offset-2 focus-visible:outline focus-visible:outline-main transition-[color,background,transform,opacity] duration-200 ease-in-out flex items-center gap-2">
                            <span>Learn more</span>
                            <span className="group-hover:translate-x-1 transition-transform duration-200 ease icon icon-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

PrototypePage.getLayout = getLayout;

export default PrototypePage;
