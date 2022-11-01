import React, { useState, useEffect, useContext } from "react";
import Lottie from "lottie-react";
import LottieExplosion1 from "../../../../../assets/animations/explosion-4.json";
import LottieExplosion2 from "../../../../../assets/animations/explosion-2.json";
import { VariablesContext } from "../../../../../contexts/variables";


export default function BrawlPlacementItem(props) {
  const variablesContext = useContext(VariablesContext);

  const [StartAnim, setStartAnim] = useState(false);
  const [resultsDone, setResultsDone] = useState(false);
  const [shining, setShining] = useState(false);

  useEffect(() => {
    setStartAnim(true);
    const timer = setTimeout(() => {
      handleStartAnim();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setShining(false);
    const timer = setTimeout(() => {
      setShining(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [variablesContext.brawlStep]);

  useEffect(() => {
    if(variablesContext.brawlStep <=3) {
      if(variablesContext.brawlStep >= props.item?.step) {
        setResultsDone(false);
        const timer = setTimeout(() => {
          setResultsDone(true);
        }, 5000);
        return () => clearTimeout(timer);
      }
    } else {
      if(variablesContext.brawlStep === props.item?.step) {
        setResultsDone(false);
        const timer = setTimeout(() => {
          setResultsDone(true);
        }, 5000);
        return () => clearTimeout(timer);
      }
    }
  }, [variablesContext.brawlStep]);

  function handleStartAnim() {
    setStartAnim(true);
    const timer = setTimeout(() => {
      setStartAnim(false);
    }, 1000);
    return () => clearTimeout(timer);
  }

  function incrementBrawlStep(value) {
    if (variablesContext.brawlStep < 9) {
      variablesContext.incrementBrawlStep(value);
      if (variablesContext.brawlStep >= 3) {
      }
    } else {
      variablesContext.incrementBrawlStep(-9);
    }
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
          {(props.item?.step > 3 && variablesContext.brawlStep + 1 === props.item?.step) && (
            <div className="absolute z-20 inset-0 p-4 flex items-center justify-center overflow-hidden rounded-lg">
                <button
                  type="button"
                  className={`button button-sm button-primary button-currency button-token w-full animate-slide-in-bottom ${shining ? 'is-shining' : ''}`}
                  onClick={incrementBrawlStep.bind(this, 1)}
                >
                  <div>
                    <span>Activate</span>
                  </div>
                  <div>
                    <img
                      className="dropshadow-xs"
                      src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_token.png"
                      width="34"
                      height="34"
                      alt="coin"
                    />
                    <span>1</span>
                  </div>
                </button>
            </div>
          )}
          {variablesContext.brawlStep >= props.item?.step && (
            <div className="absolute z-10 inset-x-0 top-0 bottom-1 flex items-center justify-center lottie-blur">
              <Lottie animationData={LottieExplosion1} loop={false} />
              <Lottie animationData={LottieExplosion2} loop={false} />
            </div>
          )}
            <div className={`font-headings uppercase font-bold text-ui-300 text-xl italic ${props.item?.step > 3 && variablesContext.brawlStep + 1 === props.item?.step ? 'opacity-0' : ''}`}>
              Match {props.item?.step}
            </div>
            <div className={`w-12 h-12 rounded-full bg-gradient-to-b from-interaction-300 to-blue-500 flex items-center justify-center ${props.item?.step > 3 && variablesContext.brawlStep + 1 === props.item?.step ? 'opacity-0' : ''}`}>
              <span className="icon icon-lock text-xl text-ui-600" />
            </div>
        </div>
        <div className={`flip-back rounded-lg shadow-lg flex items-center justify-between px-4 gap-2 w-44 h-16 overflow-hidden ${!resultsDone ? 'animate-pulse surface-ui-600 surface surface-halo' : 'surface-ui-700'}`}>
          <div className={`font-headings uppercase font-bold text-ui-300 text-xl italic ${resultsDone ? 'text-ui-100' : 'text-ui-300'}`}>
            Match {props.item?.step}
          </div>
          <div className="flex items-center gap-1 italic font-bold font-headings text-blue-300">
            {resultsDone && (
              <>
                <span className="text-3xl animate-slide-in-right animate-delay" style={{ "--delay": "calc(1 * 0.05s)" }}>{props.item?.kills}</span>
              </>
            )}
            {!resultsDone && (
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
