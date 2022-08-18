import React, { useState } from "react";

import { usePopperTooltip } from "react-popper-tooltip";

const Tooltip = (props) => {
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({});

  const placement = getTooltipProps()["data-popper-placement"];

  return (
    <>
      <div ref={setTriggerRef} className="cursor-pointer">
        {props.children}
      </div>
      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({ className: "tooltip-container" })}
        >
          <div
            className={`tooltip-lg ${
              placement === "bottom" ? "tooltip-bottom" : ""
            } ${placement === "top" ? "tooltip-top" : ""} ${
              visible ? "is-active" : ""
            }`}
          >
            {props.tooltip}
          </div>
        </div>
      )}
    </>
  );
};
export default Tooltip;