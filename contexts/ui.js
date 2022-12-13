import React, { useReducer, useState } from 'react';

export const UiContext = React.createContext({
  displayedModal: null,
  openModal: (name) => {},
  closeModal: (name) => {},
  displayedToasts: [],
  openToastr: (toastrName) => {},
  closeToastr: (id) => {},
});

const defaultUiState = {
  displayedModal: null,
  displayedToasts: [],
};
const uiReducer = (state, action) => {
  if (action.type === 'OPEN_MODAL') {
    const displayedModal = action.payload.name;
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
  } else if (action.type === 'OPEN_TOASTR') {
    const id = Date.now();
    const newToast = {...action.payload.toast, id};
    const displayedToasts = [...state.displayedToasts, newToast];
    return {
      ...state,
      displayedToasts,
    };
  } else if (action.type === 'CLOSE_TOASTR') {
    const displayedToasts = [...state.displayedToasts].filter(toast => toast.id != action.payload.id);
    return {
      ...state,
      displayedToasts,
    };
  }
};
const UiContextProvider = (props) => {
  const [uiState, dispatchUiAction] = useReducer(uiReducer, defaultUiState);

  const openModal = (name) => {
    dispatchUiAction({
      type: 'OPEN_MODAL',
      payload: {
        name,
      },
    });
  };

  const closeModal = (name) => {
    dispatchUiAction({
      type: 'CLOSE_MODAL',
      payload: {
        name,
      },
    });
  };

  const openToastr = (toast) => {
    dispatchUiAction({
      type: 'OPEN_TOASTR',
      payload: {
        toast,
      },
    });
  };

  const closeToastr = (id) => {
    dispatchUiAction({
      type: 'CLOSE_TOASTR',
      payload: {
        id,
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
    displayedToasts: uiState.displayedToasts,
    openToastr,
    closeToastr,
    clear,
  };
  return (
    <UiContext.Provider value={uiContext}>{props.children}</UiContext.Provider>
  );
};

export default UiContextProvider;
