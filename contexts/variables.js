import React, { useReducer } from 'react';

export const VariablesContext = React.createContext({
  brawlStep: 0,
  rewardClaimed: false,
  incrementBrawlStep: function(){},
  claimReward: function(){},
  unclaimReward: function(){},
});

const defaultVariablesState = {
  brawlStep: 0,
  rewardClaimed: false,
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
  
  const variablesContext = {
    brawlStep: variablesState.brawlStep,
    rewardClaimed: variablesState.rewardClaimed,
    incrementBrawlStep,
    claimReward,
    unclaimReward,
  };
  return (
    <VariablesContext.Provider value={variablesContext}>{props.children}</VariablesContext.Provider>
  );
};

export default VariablesContextProvider;
