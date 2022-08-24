import React, { useReducer } from 'react';

export const VariablesContext = React.createContext({
  brawlStep: 0,
  rewardClaimed: false,
  dailyRewardClaimed: false,
  incrementBrawlStep: function(){},
  claimReward: function(){},
  unclaimReward: function(){},
  claimDailyReward: function(){},
  unclaimDailyReward: function(){},
});

const defaultVariablesState = {
  brawlStep: 0,
  rewardClaimed: false,
  dailyRewardClaimed: false,
};
const variablesReducer = (state, action) => {
  if (action.type === 'INCREMENT_BRAWLSTEP') {
    let brawlStep = state.brawlStep;
    if(action.payload.incrementValue) {
      brawlStep = brawlStep + action.payload.incrementValue;
    } else {
      brawlStep = brawlStep + 1;
    }
    return {
      ...state,
      brawlStep,
    };
  } else if (action.type === 'REWARD_CLAIM') {
    return {
      ...state,
      rewardClaimed: true,
    };
  } else if (action.type === 'REWARD_UNCLAIM') {
    return {
      ...state,
      rewardClaimed: false,
    };
  } else if (action.type === 'DAILY_REWARD_CLAIM') {
    return {
      ...state,
      dailyRewardClaimed: true,
    };
  } else if (action.type === 'DAILY_REWARD_UNCLAIM') {
    return {
      ...state,
      dailyRewardClaimed: false,
    };
  }
};

const VariablesContextProvider = (props) => {
  const [variablesState, dispatchVariablesAction] = useReducer(variablesReducer, defaultVariablesState);

  const incrementBrawlStep = (incrementValue) => {
    dispatchVariablesAction({
      type: 'INCREMENT_BRAWLSTEP',
      payload: {
        incrementValue,
      }
    });
  };
  const claimReward = () => {
    dispatchVariablesAction({
      type: 'REWARD_CLAIM',
    });
  };
  const unclaimReward = () => {
    dispatchVariablesAction({
      type: 'REWARD_UNCLAIM',
    });
  };
  const claimDailyReward = () => {
    dispatchVariablesAction({
      type: 'DAILY_REWARD_CLAIM',
    });
  };
  const unclaimDailyReward = () => {
    dispatchVariablesAction({
      type: 'DAILY_REWARD_UNCLAIM',
    });
  };
  
  const variablesContext = {
    brawlStep: variablesState.brawlStep,
    rewardClaimed: variablesState.rewardClaimed,
    dailyRewardClaimed: variablesState.dailyRewardClaimed,
    incrementBrawlStep,
    claimReward,
    unclaimReward,
    claimDailyReward,
    unclaimDailyReward,
  };
  return (
    <VariablesContext.Provider value={variablesContext}>{props.children}</VariablesContext.Provider>
  );
};

export default VariablesContextProvider;
