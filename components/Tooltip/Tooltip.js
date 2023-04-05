import React, { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import { usePopperTooltip } from "react-popper-tooltip";

const Tooltip = (props) => {
  const tooltipPosition =
    props.placement !== undefined ? props.placement : "auto";
  const loading =
    props.isLoading !== undefined ? props.isLoading : false;
  const className = props.className || "";
  const [isLoading, setIsLoading] = useState(loading);
  
  function handleHover() {
    if (loading) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 700);
    }
  }

  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({
    placement: tooltipPosition,
  });

  const placement = getTooltipProps()["data-popper-placement"];

  return (
    <>
      <div
        ref={setTriggerRef}
        onMouseEnter={handleHover}
        className={`inline-flex ${props.tooltip ? "cursor-pointer" : ""} ${
          className
        }`}
      >
        {props.children}
      </div>
      {visible &&
        props.tooltip &&
        ReactDOM.createPortal(
          <div
            ref={setTooltipRef}
            {...getTooltipProps({
              className: `tooltip-container ${isLoading ? 'is-loading' : ''}`,
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
              {props.tooltip}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
export default Tooltip;
