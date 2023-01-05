import React, { useState, useEffect, useRef, useContext } from "react";
import DailyReward from "../DailyReward/DailyReward";
import { VariablesContext } from "../../contexts/variables";
import { UiContext } from "../../contexts/ui";
import Lottie from "lottie-react";
import LottieExplosion from "../../assets/animations/explosion_stryda_4.json";

export default function TopBarClaim(props) {
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);
  const [isActive, setActive] = useState(false);
  const ref = useRef(null);
  const [StartAnim1, setStartAnim1] = useState(false);

  const dropdownActive = (e) => {
    e.preventDefault();
    setActive(!isActive);
  };

  const handleClickOutside = (e) => {
    if (uiContext.displayedModal === null) {
      if (ref.current && !ref.current.contains(e.target)) {
        setActive(false);
      }
    }
  };

  function handleStartAnim1() {
    setStartAnim1(true);
    const timer = setTimeout(() => {
      setStartAnim1(false);
    }, 2300);
    return () => clearTimeout(timer);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleStartAnim1();
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  /*
  useEffect(() => {
    setStartAnim1(false);
    const timer = setTimeout(() => {
      setStartAnim1(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [StartAnim1]);
  */

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <div
      ref={ref}
      className={`dropdown lg:dropdown-center pt-0.5 ${
        isActive ? "dropdown-open" : "dropdown-closed"
      }`}
    >
      <label
        tabIndex="1"
        className="tab tab-secondary"
        onClick={dropdownActive}
      >
        <span
          className={`icon icon-present ${
            !variablesContext.dailyRewardClaimed
              ? "text-main animate-bounce"
              : ""
          }`}
        />
        <div
          className={`relative uppercase text-sm whitespace-nowrap ${
            !variablesContext.dailyRewardClaimed ? "text-main" : ""
          }`}
        >
          <span className="relative z-10">
            <span className="max-sm:hidden">Daily Loot</span> Streak
          </span>
        </div>
        {StartAnim1 && !variablesContext.dailyRewardClaimed && (
          <div className="absolute z-0 -top-0.5 bottom-0.5 flex items-center justify-center lottie-blur">
            <Lottie
              animationData={LottieExplosion}
              loop={false}
              autoplay={true}
            />
          </div>
        )}
      </label>
      <div tabIndex="1" className="dropdown-content w-96 p-1">
        <DailyReward />
      </div>
    </div>
  );
}
