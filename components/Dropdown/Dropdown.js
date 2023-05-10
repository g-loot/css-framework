import React, { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import { usePopperTooltip } from "react-popper-tooltip";

const Dropdown = (props) => {
  const tooltipPosition =
    props.placement !== undefined ? props.placement : "auto";
  const alwaysVisible =
    props.alwaysVisible !== undefined ? props.alwaysVisible : false;
  const loading = props.isLoading !== undefined ? props.isLoading : false;
  const className = props.className || "";
  const [isLoading, setIsLoading] = useState(loading);

  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({
    closeOnOutsideClick: true,
    closeOnTriggerHidden: false,
    placement: tooltipPosition,
    interactive: true,
    ...(alwaysVisible ? { visible: true } : {}),
  });

  const placement = getTooltipProps()["data-popper-placement"];

  return (
    <>
      <button
        ref={setTriggerRef}
        className={`dropdown ${
          visible ? "dropdown-open" : "dropdown-closed"
        } ${className}`}
      >
          {props.children}
      </button>
      {visible &&
        props.tooltip &&
        ReactDOM.createPortal(
          <div
            ref={setTooltipRef}
            {...getTooltipProps({
              className: `tooltip-container`,
            })}
          >
            <div
              className={`tooltip-lg ${className} ${
                placement === "bottom" ? "tooltip-bottom" : ""
              } ${placement === "top" ? "tooltip-top" : ""} ${
                placement === "left" ? "tooltip-left" : ""
              } ${placement === "right" ? "tooltip-right" : ""}  ${
                visible ? "is-active" : ""
              }`}
            >
              {props.dropdown}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
export default Dropdown;
