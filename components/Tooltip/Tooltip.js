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
              {props.tooltip}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
export default Tooltip;
