import React, { useReducer } from 'react';

export const UiContext = React.createContext({
  displayedModal: null,
  openModal: (modalName) => {},
  closeModal: (modalName) => {},
  displayedToastr: null,
  openToastr: (toastrName) => {},
  closeToastr: (toastrName) => {},
});

const defaultUiState = {
  displayedModal: null,
};
const uiReducer = (state, action) => {

  if (action.type === 'OPEN_MODAL') {
    const displayedModal = action.payload.modalName;

    return {
      ...state,
      displayedModal,
    };
  } else if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      displayedModal: null,
    };
  } else if (action.type === 'CLEAR') {
    return defaultUiState;
  }
};
const UiContextProvider = (props) => {
  const [uiState, dispatchUiAction] = useReducer(uiReducer, defaultUiState);

  const openModal = (modalName) => {
    dispatchUiAction({
      type: 'OPEN_MODAL',
      payload: {
        modalName,
      },
    });
  };

  const closeModal = (modalName) => {
    dispatchUiAction({
      type: 'CLOSE_MODAL',
      payload: {
        modalName,
      },
    });
  };

  const openToastr = (toastrName) => {
    dispatchUiAction({
      type: 'OPEN_TOASTR',
      payload: {
        toastrName,
      },
    });
  };

  const closeToastr = (toastrName) => {
    dispatchUiAction({
      type: 'CLOSE_TOASTR',
      payload: {
        toastrName,
      },
    });
  };

  const clear = () => {
    dispatchUiAction({
      type: 'CLEAR',
    });
  };

  const uiContext = {
    displayedModal: uiState.displayedModal,
    openModal,
    closeModal,
    displayedToastr: uiState.displayedToastr,
    openToastr,
    closeToastr,
    clear,
  };
  return (
    <UiContext.Provider value={uiContext}>{props.children}</UiContext.Provider>
  );
};

export default UiContextProvider;
