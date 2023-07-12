import React, { useReducer } from "react";

export const VariablesContext = React.createContext({
  ladderStep: 0,
  availableMissions: 4,
  rewardClaimed: false,
  dailyRewardClaimed: false,
  clanLeaderboardEnrolled: false,
  incrementLadderStep: function () {},
  claimReward: function () {},
  unclaimReward: function () {},
  claimDailyReward: function () {},
  unclaimDailyReward: function () {},
});

const defaultVariablesState = {
  ladderStep: 0,
  availableMissions: 4,
  rewardClaimed: false,
  dailyRewardClaimed: false,
  clanLeaderboardEnrolled: false,
};

const variablesReducer = (state, action) => {
  if (action.type === "INCREMENT_LADDERSTEP") {
    let ladderStep = state.ladderStep;
    if (action.payload.incrementValue) {
      ladderStep = ladderStep + action.payload.incrementValue;
    } else {
      ladderStep = ladderStep + 1;
    }
    return {
      ...state,
      ladderStep,
    };
  }
  if (action.type === "INCREMENT_AVAILABLEMISSIONS") {
    let availableMissions = state.availableMissions;
    if (action.payload.incrementValue) {
      availableMissions = availableMissions - action.payload.incrementValue;
    } else {
      availableMissions = availableMissions - 1;
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
  } else if (action.type === "CLAN_SEASON_ENROLL") {
    return {
      ...state,
      clanLeaderboardEnrolled: true,
    };
  }
};

const VariablesContextProvider = (props) => {
  const [variablesState, dispatchVariablesAction] = useReducer(
    variablesReducer,
    defaultVariablesState
  );

  const incrementLadderStep = (incrementValue) => {
    dispatchVariablesAction({
      type: "INCREMENT_LADDERSTEP",
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
  const clanEventEnroll = () => {
    dispatchVariablesAction({
      type: "CLAN_SEASON_ENROLL",
    });
  };

  const variablesContext = {
    ladderStep: variablesState.ladderStep,
    availableMissions: variablesState.availableMissions,
    rewardClaimed: variablesState.rewardClaimed,
    dailyRewardClaimed: variablesState.dailyRewardClaimed,
    clanLeaderboardEnrolled: variablesState.clanLeaderboardEnrolled,
    newBrand: variablesState.newBrand,
    incrementLadderStep,
    incrementAvailableMissions,
    claimReward,
    unclaimReward,
    claimDailyReward,
    unclaimDailyReward,
    clanEventEnroll,
  };
  return (
    <VariablesContext.Provider value={variablesContext}>
      {props.children}
    </VariablesContext.Provider>
  );
};

export default VariablesContextProvider;
