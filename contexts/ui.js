import React, { useReducer, useState } from "react";

export const UiContext = React.createContext({
  displayedModal: null,
  openModal: (name) => {},
  closeModal: (name) => {},
  displayedToasts: [],
  openToastr: (toastrName) => {},
  closeToastr: (id) => {},
  displayedAlerts: [],
  openAlert: (alertName) => {},
  closeAlert: (id) => {},
});

const defaultUiState = {
  displayedModal: null,
  displayedToasts: [],
  displayedAlerts: [],
};
const uiReducer = (state, action) => {
  if (action.type === "OPEN_MODAL") {
    const displayedModal = action.payload.name;
    return {
      ...state,
      displayedModal,
    };
  } else if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      displayedModal: null,
    };
  } else if (action.type === "CLEAR") {
    return defaultUiState;
  } else if (action.type === "OPEN_TOASTR") {
    const id = Date.now();
    const newToast = { ...action.payload.toast, id };
    const displayedToasts = [...state.displayedToasts, newToast];
    return {
      ...state,
      displayedToasts,
    };
  } else if (action.type === "CLOSE_TOASTR") {
    const displayedToasts = [...state.displayedToasts].filter(
      (toast) => toast.id != action.payload.id
    );
    return {
      ...state,
      displayedToasts,
    };
  } else if (action.type === "OPEN_ALERT") {
    const id = Date.now();
    const newAlert = { ...action.payload.alert, id };
    const displayedAlerts = [...state.displayedAlerts, newAlert];
    return {
      ...state,
      displayedAlerts,
    };
  } else if (action.type === "CLOSE_ALERT") {
    const displayedAlerts = [...state.displayedAlerts].filter(
      (alert) => alert.id != action.payload.id
    );
    return {
      ...state,
      displayedAlerts,
    };
  }
};
const UiContextProvider = (props) => {
  const [uiState, dispatchUiAction] = useReducer(uiReducer, defaultUiState);

  const openModal = (name) => {
    dispatchUiAction({
      type: "OPEN_MODAL",
      payload: {
        name,
      },
    });
  };

  const closeModal = (name) => {
    dispatchUiAction({
      type: "CLOSE_MODAL",
      payload: {
        name,
      },
    });
  };

  const openToastr = (toast) => {
    dispatchUiAction({
      type: "OPEN_TOASTR",
      payload: {
        toast,
      },
    });
  };

  const closeToastr = (id) => {
    dispatchUiAction({
      type: "CLOSE_TOASTR",
      payload: {
        id,
      },
    });
  };

  const openAlert = (alert) => {
    dispatchUiAction({
      type: "OPEN_ALERT",
      payload: {
        alert,
      },
    });
  };

  const closeAlert = (id) => {
    dispatchUiAction({
      type: "CLOSE_ALERT",
      payload: {
        id,
      },
    });
  };

  const clear = () => {
    dispatchUiAction({
      type: "CLEAR",
    });
  };

  const uiContext = {
    displayedModal: uiState.displayedModal,
    openModal,
    closeModal,
    displayedToasts: uiState.displayedToasts,
    openToastr,
    closeToastr,
    displayedAlerts: uiState.displayedAlerts,
    openAlert,
    closeAlert,
    clear,
  };
  return (
    <UiContext.Provider value={uiContext}>{props.children}</UiContext.Provider>
  );
};

export default UiContextProvider;
