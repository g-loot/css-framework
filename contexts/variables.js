import React, { useReducer } from "react";

export const VariablesContext = React.createContext({
  brawlStep: 0,
  availableMissions: 0,
  rewardClaimed: false,
  dailyRewardClaimed: false,
  newBrand: false,
  incrementBrawlStep: function () {},
  claimReward: function () {},
  unclaimReward: function () {},
  claimDailyReward: function () {},
  unclaimDailyReward: function () {},
});

const defaultVariablesState = {
  brawlStep: 0,
  availableMissions: 0,
  rewardClaimed: false,
  dailyRewardClaimed: false,
  newBrand: false,
};
const variablesReducer = (state, action) => {
  if (action.type === "INCREMENT_BRAWLSTEP") {
    let brawlStep = state.brawlStep;
    if (action.payload.incrementValue) {
      brawlStep = brawlStep + action.payload.incrementValue;
    } else {
      brawlStep = brawlStep + 1;
    }
    return {
      ...state,
      brawlStep,
    };
  }
  if (action.type === "INCREMENT_AVAILABLEMISSIONS") {
    let availableMissions = state.availableMissions;
    if (action.payload.incrementValue) {
      availableMissions = availableMissions + action.payload.incrementValue;
    } else {
      availableMissions = availableMissions + 1;
    }
    return {
      ...state,
      availableMissions,
    };
  } else if (action.type === "REWARD_CLAIM") {
    return {
      ...state,
      rewardClaimed: true,
    };
  } else if (action.type === "REWARD_UNCLAIM") {
    return {
      ...state,
      rewardClaimed: false,
    };
  } else if (action.type === "DAILY_REWARD_CLAIM") {
    return {
      ...state,
      dailyRewardClaimed: true,
    };
  } else if (action.type === "DAILY_REWARD_UNCLAIM") {
    return {
      ...state,
      dailyRewardClaimed: false,
    };
  } else if (action.type === "BRAND_ON") {
    console.log("BRAND_ON");
    return {
      ...state,
      newBrand: true,
    };
  } else if (action.type === "BRAND_OFF") {
    console.log("BRAND_OFF");
    return {
      ...state,
      newBrand: false,
    };
  }
};

const VariablesContextProvider = (props) => {
  const [variablesState, dispatchVariablesAction] = useReducer(
    variablesReducer,
    defaultVariablesState
  );

  const incrementBrawlStep = (incrementValue) => {
    dispatchVariablesAction({
      type: "INCREMENT_BRAWLSTEP",
      payload: {
        incrementValue,
      },
    });
  };
  const incrementAvailableMissions = (incrementValue) => {
    dispatchVariablesAction({
      type: "INCREMENT_AVAILABLEMISSIONS",
      payload: {
        incrementValue,
      },
    });
  };
  const claimReward = () => {
    dispatchVariablesAction({
      type: "REWARD_CLAIM",
    });
  };
  const unclaimReward = () => {
    dispatchVariablesAction({
      type: "REWARD_UNCLAIM",
    });
  };
  const claimDailyReward = () => {
    dispatchVariablesAction({
      type: "DAILY_REWARD_CLAIM",
    });
  };
  const unclaimDailyReward = () => {
    dispatchVariablesAction({
      type: "DAILY_REWARD_UNCLAIM",
    });
  };
  const brandOn = () => {
    document.body.classList.add("stryda");
    dispatchVariablesAction({
      type: "BRAND_ON",
    });
  };
  const brandOff = () => {
    document.body.classList.remove("stryda");
    dispatchVariablesAction({
      type: "BRAND_OFF",
    });
  };

  const variablesContext = {
    brawlStep: variablesState.brawlStep,
    availableMissions: variablesState.availableMissions,
    rewardClaimed: variablesState.rewardClaimed,
    dailyRewardClaimed: variablesState.dailyRewardClaimed,
    newBrand: variablesState.newBrand,
    incrementBrawlStep,
    incrementAvailableMissions,
    claimReward,
    unclaimReward,
    claimDailyReward,
    unclaimDailyReward,
    brandOn,
    brandOff,
  };
  return (
    <VariablesContext.Provider value={variablesContext}>
      {props.children}
    </VariablesContext.Provider>
  );
};

export default VariablesContextProvider;
