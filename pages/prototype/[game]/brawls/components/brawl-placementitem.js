import React, { useState, useEffect, useContext } from "react";
import Lottie from "lottie-react";
import LottieExplosion1 from "../../../../../assets/animations/explosion-4.json";
import LottieExplosion2 from "../../../../../assets/animations/explosion-2.json";
import { VariablesContext } from "../../../../../contexts/variables";


export default function BrawlPlacementItem(props) {
  const variablesContext = useContext(VariablesContext);

  const [StartAnim, setStartAnim] = useState(false);

  useEffect(() => {
    setStartAnim(true);
    const timer = setTimeout(() => {
      handleStartAnim();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function handleStartAnim() {
    setStartAnim(true);
    const timer = setTimeout(() => {
      setStartAnim(false);
    }, 1000);
    return () => clearTimeout(timer);
  }

  return (
    <>
    <div className="perspective shrink-0 ml-4 my-4 last:mr-20 animate-slide-in-right animate-delay" style={{
      "--delay": "calc((" + props.item?.step + ") * 0.05s)",
    }}>
      <div
        className={`w-44 h-16 flip flip-vertical animate-delay ${
          variablesContext.brawlStep >= props.item?.step ? "animate-flip" : ""
        }`}
        style={props.item?.step <= 3 ? {"--delay": "calc((" + props.item?.step + ") * 0.2s)"} : {}}
      >
        <div className={`flip-front rounded-lg surface-ui-700 shadow-lg flex items-center justify-between px-4 gap-2 w-44 h-16 transition-opacity duration-100 ${
          props.item?.step > 3 && variablesContext.brawlStep + 1 < props.item?.step ? "opacity-25" : ""
        }`}>
          {variablesContext.brawlStep >= props.item?.step && (
            <div className="absolute inset-x-0 top-0 bottom-1 flex items-center justify-center lottie-blur">
              <Lottie animationData={LottieExplosion1} loop={false} />
              <Lottie animationData={LottieExplosion2} loop={false} />
            </div>
          )}
          <div className="font-headings uppercase font-bold text-ui-300 text-xl italic">
            Match {props.item?.step}
          </div>
          <div className="w-12 h-12 rounded-full bg-gradient-to-b from-interaction-300 to-blue-500 flex items-center justify-center">
            <span className="icon icon-lock text-xl text-ui-600" />
          </div>
        </div>
        <div className="flip-back rounded-lg surface-ui-600 shadow-lg flex items-center justify-between px-4 gap-2 w-44 h-16 overflow-hidden">
          <div className="font-headings uppercase font-bold text-ui-100 text-xl italic">
            Match {props.item?.step}
          </div>
          <div className="flex items-center gap-1 italic font-bold font-headings text-blue-300">
            {variablesContext.brawlStep > props.item?.step && (
              <>
                <span className="text-3xl animate-slide-in-right animate-delay" style={{ "--delay": "calc(1 * 0.05s)" }}>{props.item?.kills}</span>
                <span className="text-xl animate-slide-in-right animate-delay" style={{ "--delay": "calc(2 * 0.05s)" }}>kills</span>
              </>
            )}
            {variablesContext.brawlStep === props.item?.step && (
              <>
                <span className="text-3xl">--</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
    {props.item?.step === 3 && (
      <div className="ml-4 my-4 flex items-center">
        <div className="w-9 h-9 rounded-full border border-ui-500 flex items-center justify-center">
          <span className="icon icon-arrow-right text-ui-300" />
        </div>
      </div>
    )}
    </>
  );
}
