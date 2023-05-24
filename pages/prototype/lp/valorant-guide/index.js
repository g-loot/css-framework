import React, { useEffect, useRef, useState } from "react";

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

      <div className="min-h-screen">
        <section className="relative pt-96 pb-24">
          <div className="container relative z-10 sm:text-center px-6 sm:px-0">
            <h1
              className="h1 max-w-[22ch] sm:mx-auto mb-24 animate-slide-in-bottom animate-paused animate-delay"
              style={{
                "--delay": "calc(2 * 0.05s)",
              }}
            >
              Our complete guide to all VALORANT agents
            </h1>
            <h2
              className="text-main font-headings text-6xl leading-[0.85] font-bold animate-slide-in-bottom animate-paused animate-delay"
              style={{
                "--delay": "calc(3 * 0.05s)",
              }}
            >
              What&#39;s your playstyle?
            </h2>
            <div
              className="mt-6 space-y-4 leading-relaxed text-lg animate-slide-in-bottom animate-paused animate-delay"
              style={{
                "--delay": "calc(4 * 0.05s)",
              }}
            >
              <p>
                Each VALORANT agent comes with different abilities and techniques.
              </p>
              <p>
                If you want to improve your games it&#39;s important to learn a few
                strategies and agents that work with your playstyle.
              </p>
              <p>
                This guide will give you an overview of all current VALORANT
                agents; if you want to learn more expand and read the guide for
                each single agent.
              </p>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/gloot/image/upload/v1684845722/Stryda/marketing/website/valorant-guide/valorant-guide-home-hero.jpg"
            alt=""
            className="absolute z-0 h-[660px] w-full top-0 object-cover object-center animate-slide-in-bottom animate-paused animate-delay"
            style={{
              "--delay": "calc(1 * 0.05s)",
            }}
          />
        </section>

        {dataValorantGuideRoles.map((item, itemIndex) => (
          <section key={itemIndex} className="relative py-12 overflow-hidden">
            <div className="relative z-0 animate-fade-in animate-paused after:content-[''] after:h-1/4 after:w-full after:absolute after:bottom-0 after:inset-x-0 after:bg-gradient-to-t after:from-ui-900 after:to-ui-900/0 scale-150 md:scale-100">
              <img
                src={item.image}
                alt={item.name}
                className="w-full max-w-xl mx-auto"
              />
            </div>
            <div className="container max-w-lg relative z-20 -mt-12 md:-mt-24 px-6 xl:px-0 after:content-[''] after:absolute after:z-10 after:blur-xl after:bg-ui-900 after:inset-0">
              <div className="relative z-20">
                <h3 className="h4 font-headings text-5xl sm:text-6xl leading-[0.85] text-ui-200 uppercase animate-slide-in-bottom animate-paused animate-delay"
                  style={{
                    "--delay": "calc(1 * 0.05s)",
                  }}>
                  VALORANT role
                </h3>
                <div className="flex gap-3 sm:gap-4 items-center animate-slide-in-bottom animate-paused animate-delay"
                  style={{
                    "--delay": "calc(2 * 0.05s)",
                  }}>
                  <h3 className="h4 font-headings text-7xl sm:text-8xl leading-[0.85] font-bold uppercase text-main">
                    {item.name}
                  </h3>
                  <img
                    className="w-12 h-12 sm:w-16 sm:h-16 -translate-y-0.5"
                    src={item.icon}
                    alt={item.name}
                  />
                </div>
                <div className="mt-4 mb-6 space-y-4 leading-relaxed max-w-[40ch] animate-slide-in-bottom animate-paused animate-delay"
                  style={{
                    "--delay": "calc(3 * 0.05s)",
                  }}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.description,
                    }}
                  />
                </div>
                <Link href={`valorant-guide/${item.slug}`}>
                  <button type="button" className="button button-secondary animate-slide-in-bottom animate-paused animate-delay"
                  style={{
                    "--delay": "calc(4 * 0.05s)",
                  }}>
                    <span>Learn more about {item.name}</span>
                  </button>
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </>
  );
};

PrototypePage.getLayout = getLayout;

export default PrototypePage;
