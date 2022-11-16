import React, { useState, useEffect, useRef, useContext } from "react";
import DailyReward from "../DailyReward/DailyReward";
import { VariablesContext } from "../../contexts/variables";
import { UiContext } from "../../contexts/ui";

export default function TopBarClaim(props) {
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);
  const [isActive, setActive] = useState(false);
  const ref = useRef(null);

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
            !variablesContext.dailyRewardClaimed ? "text-main animate-bounce" : ""
          }`}
        />
        <span
          className={`uppercase text-sm whitespace-nowrap ${
            !variablesContext.dailyRewardClaimed
              ? "text-gradient bg-gradient-to-tr from-main to-blue-500"
              : ""
          }`}
        >
          <span className="max-sm:hidden">Daily</span> Loot Streak
        </span>
      </label>
      <div tabIndex="1" className="dropdown-content w-96 p-1">
        <DailyReward />
      </div>
    </div>
  );
}
