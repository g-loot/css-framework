import React, { useState } from "react";

import Link from "next/link";
import Lottie from "lottie-react";
import LottieExplosion1 from "../../../../assets/animations/explosion-4.json";

export default function ValorantClashTabItem(props) {
  const [StartAnim1, setStartAnim1] = useState(false);

  function handleStartAnim1() {
    setStartAnim1(true);
    const timer = setTimeout(() => {
      setStartAnim1(false);
    }, 1000);
    return () => clearTimeout(timer);
  }

  return (
    <>
      <li
        className={`flex-1 animate-slide-in-right animate-delay relative ${(props.itemDisabled != undefined && props.itemDisabled === true) ? "pointer-events-none" : ""}`}
        onClick={handleStartAnim1}
        style={{
          "--delay": `calc( ${props.index} * 0.1s)`,
        }}
      >
        <Link href={`?tab=${props.itemURL}`}>
          <button
            type="button"
            className={`w-full min-w-[200px] lg:min-w-[0px] cursor-pointer hoverinside:opacity-100 hoverinside:translate-y-0 hoverinside:scale-100 relative rounded-2xl overflow-hidden bg-gradient-to-b p-0.5 transform-gpu active:scale-[0.99] transition duration-100 ${(props.itemDisabled != undefined && props.itemDisabled === true) ? "from-ui-800 to-ui-800" : "from-ui-500 to-ui-800"} ${
              props.selectedTab === props.itemURL ? "is-active" : ""
            }
            ${(props.itemDisabled != undefined && props.itemDisabled === true) ? "focus:outline-none pointer-events-none" : "focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-1 focus-visible:outline-main"}
            `}
          >
            <div className={`relative z-10 rounded-[calc(1rem-0.125rem)] bg-gradient-to-b w-full flex items-center justify-center text-center px-4 py-8 ${(props.itemDisabled != undefined && props.itemDisabled === true) ? "from-ui-900 to-ui-900" : "from-ui-900 to-ui-800"}`}>
              <div
                className={`font-headings leading-none tracking-wide select-none ${(props.itemDisabled != undefined && props.itemDisabled === true) ? "opacity-50" : ""}`}
              >
                <div
                  className={`text-2xl italic text-ui-300 origin-bottom hoverinside duration-500 transition ease-[cubic-bezier(0.8,0,0.2,1)] ${
                    props.selectedTab === props.itemURL
                      ? ""
                      : "opacity-40 scale-75"
                  }`}
                >
                  {props.itemSublabel}
                </div>
                <div
                  className={`text-4xl font-bold italic text-ui-100 origin-top hoverinside duration-700 transition-delay transition ease-[cubic-bezier(0.8,0,0.2,1)] ${
                    props.selectedTab === props.itemURL
                      ? ""
                      : "opacity-40 scale-75"
                  }`}
                  style={{
                    "--delay": `calc( 1 * 0.1s)`,
                  }}
                >
                  {props.itemLabel}
                </div>
              </div>
            </div>
            <div
              className={`hoverinside transition-all duration-500 ease-[cubic-bezier(0.5,0,0.5,1)] opacity-100 absolute z-0 inset-0 bg-gradient-to-b from-interaction-500 to-blue-500 ${
                props.selectedTab === props.itemURL ? "" : "translate-y-[100%]"
              }`}
            />
          </button>
        </Link>
        {StartAnim1 && (
          <div className="lottie-blur absolute z-20 inset-0 flex items-center justify-center">
            <Lottie
              animationData={LottieExplosion1}
              loop={false}
              autoplay={true}
              className="-translate-y-2"
            />
          </div>
        )}
      </li>
    </>
  );
}
