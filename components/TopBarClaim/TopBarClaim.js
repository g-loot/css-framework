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

  useEffect(() => {
    console.log('variables ', variablesContext.rewardClaimed);
  }, [variablesContext]);

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
      className={`dropdown dropdown-center pb-0.5 ${
        isActive ? "dropdown-open" : "dropdown-closed"
      }`}
    >
      <label
        tabIndex="1"
        className="interactive flex items-center gap-2 text-ui-300 py-3"
        onClick={dropdownActive}
      >
        <span
          className={`icon icon-present ${
            !variablesContext.rewardClaimed ? "" : "text-main"
          }`}
        />
        <span
          className={`uppercase text-sm ${
            !variablesContext.rewardClaimed
              ? ""
              : "text-gradient bg-gradient-to-tr from-main to-blue-500"
          }`}
        >
          Daily Loot Streak
        </span>
      </label>
      <div tabIndex="1" className="dropdown-content w-96 p-1">
        <DailyReward />
      </div>
    </div>
  );
}
