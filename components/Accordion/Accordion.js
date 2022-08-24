import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function Accordion(props) {
  const isOpen = props.isopen !== undefined ? props.isopen : false;
  const isSelected = props.isselected !== undefined ? props.isselected : false;
  const isClosed = props.isclosed !== undefined ? props.isclosed : false;
  const isDisabled = props.isdisabled !== undefined ? props.isdisabled : false;
  const buttonActivation =
    props.buttonActivation !== undefined ? props.buttonActivation : false;
  const [isActive, setActive] = useState(isOpen);
  const [heightValue, setHeightValue] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setActive(isOpen);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isClosed) {
      height = 0;
      setActive(false);
    }
  }, [isClosed]);

  useEffect(() => {
    if (elementRef.current) {
      setHeightValue(elementRef.current.clientHeight);
    }
  }, [elementRef]);

  useLayoutEffect(() => {
    function updateSize() {
      setHeightValue(elementRef.current.clientHeight);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [elementRef]);

  const handleToggle = (e) => {
    e.preventDefault();
    setActive(!isActive);
  };

  return (
    <>
      <div
        className={`accordion-item ${isActive ? "is-active" : ""} ${
          isSelected ? "is-selected" : ""
        } ${isDisabled ? "is-disabled pointer-events-none opacity-50" : ""}`}
      >
        {!buttonActivation && (
          <div className={`accordion-header`} onClick={handleToggle}>
            {props.header}
          </div>
        )}
        {buttonActivation && (
          <div
            className={`accordion-header flex items-center justify-between w-full`}
          >
            <div>{props.header}</div>
            <div className="hidden md:block">
              <button
                type="button"
                className="button button-ghost"
                onClick={handleToggle}
              >
                <label className="switch text-base">
                  <input type="checkbox" checked={isActive} />
                  <div className="switch-on">Collapse</div>
                  <div className="switch-off">Learn more</div>
                </label>
                <span className="icon icon-24 icon-arrow-sm-down" />
              </button>
            </div>
            <div className="block md:hidden">
              <button
                type="button"
                className="button button-ghost rounded-full"
                onClick={handleToggle}
              >
                <span className="icon icon-24 icon-arrow-sm-down" />
              </button>
            </div>
          </div>
        )}
        <div
          className={`accordion-collapse ${isClosed ? "h-0" : ""}`}
          style={{ height: `${isActive ? heightValue : 0}px` }}
        >
          <div ref={elementRef}>{props.children}</div>
        </div>
      </div>
    </>
  );
}