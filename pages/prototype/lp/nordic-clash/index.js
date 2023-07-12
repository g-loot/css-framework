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

      <div className="min-h-screen pb-24">
        <section className="relative py-24">
          <img
            src="https://res.cloudinary.com/gloot/image/upload/v1672130648/Stryda/logos/stryda-logo-white.svg"
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
            className="mx-auto w-full max-w-md h-auto"
          />
<div className="absolute z-0 inset-0 grid place-content-center bg-ui-900/95">
                  <video
                    autoPlay={true}
                    playsInline
                    loop
                    muted
                    preload
                    width="100%"
                    height="100%"
                    className="w-full"
                    src=""
                  >
                  </video>
                </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

PrototypePage.getLayout = getLayout;

export default PrototypePage;
