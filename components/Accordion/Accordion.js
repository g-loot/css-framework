import React, {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

export default function Accordion(props) {
  const isAnimated = props.isanimated !== undefined ? props.isanimated : true;
  const isOpen = props.isopen !== undefined ? props.isopen : false;
  const isSelected = props.isselected !== undefined ? props.isselected : false;
  const isClosed = props.isclosed !== undefined ? props.isclosed : false;
  const isDisabled = props.isdisabled !== undefined ? props.isdisabled : false;
  const buttonActivation =
    props.buttonActivation !== undefined ? props.buttonActivation : false;
  const buttonActivationSimple =
    props.buttonActivationSimple !== undefined
      ? props.buttonActivationSimple
      : false;
  const isNoHover = props.isNoHover !== undefined ? props.isNoHover : false;
  const [isActive, setActive] = useState(isOpen);
  const [heightValue, setHeightValue] = useState(0);
  const elementRef = useRef(null);
  const id = useId();

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

  const updateSize = () => {
    if (elementRef.current) {
      setHeightValue(elementRef.current.clientHeight);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

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

  const handleHeight = () => {
    if(isAnimated) {
      if (isActive) {
        return heightValue + "px";
      } else {
        return "0px";
      }
    } else {
      return "auto";
    }
  };

  const handleDisplay = () => {
    if(!isAnimated) {
      if (isActive) {
        return "block";
      } else {
        return "none";
      }
    } else {
      return "auto";
    }
  };

  return (
    <>
      <div
        className={`accordion-item ${isActive ? "is-active" : ""} ${
          isNoHover ? "is-nohover" : ""
        } ${isSelected ? "is-selected" : ""} ${
          isDisabled ? "is-disabled pointer-events-none opacity-50" : ""
        }`}
      >
        {!buttonActivation && (
          <button
            type="button"
            tabIndex={1}
            className="accordion-header"
            onClick={handleToggle}
            id={`${id}-accordion-content`}
            aria-expanded={isActive}
            aria-controls={`${id}-accordion-button`}
          >
            {props.header}
          </button>
        )}
        {buttonActivation && (
          <div
            className={`accordion-header flex items-center justify-between w-full`}
          >
            <div className="flex-1">{props.header}</div>
            <div className="hidden md:block">
              {buttonActivationSimple && (
                <button
                  type="button"
                  className="button button-ghost rounded-full mr-1"
                  onClick={handleToggle}
                >
                  <span className="icon icon-24 icon-arrow-sm-down" />
                </button>
              )}
              {!buttonActivationSimple && (
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
              )}
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
          style={{ height: `${handleHeight()}`, display: `${handleDisplay()}` }}
          id={`${id}-accordion-content`}
          aria-hidden={!isActive}
          aria-labelledby={`${id}-accordion-button`}
          role="region"
        >
          <div ref={elementRef}>{props.children}</div>
        </div>
      </div>
    </>
  );
}
