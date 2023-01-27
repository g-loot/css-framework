import React, { useState } from "react";
import * as ReactDOM from "react-dom";
import { usePopperTooltip } from "react-popper-tooltip";

const Tooltip = (props) => {
  const tooltipPosition =
    props.placement !== undefined ? props.placement : "auto";
  const className = props.className || "";

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
        className={`inline-block ${props.tooltip ? "cursor-pointer" : ""} ${
          props.className
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
              className: `tooltip-container ${className}`,
            })}
          >
            <div
              className={`tooltip-lg ${
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
