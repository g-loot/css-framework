import { useContext, useEffect, useRef, useState } from "react";

import { UiContext } from "@/contexts/ui";

export default function Alert(props) {
  const uiContext = useContext(UiContext);
  const [isClosing, setIsClosing] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const dismissable =
    props.dismissable !== undefined ? props.dismissable : true;
  const autoDelete = props.autoDelete !== undefined ? props.autoDelete : false;
  const autoDeleteDelay =
    props.autoDeleteDelay !== undefined ? props.autoDeleteDelay : 5000;
  const [heightValue, setHeightValue] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    setHeightValue(elementRef.current.clientHeight);
  }, []);

  useEffect(() => {
    if (autoDelete === true) {
      const interval = setTimeout(() => {
        setIsClosing(true);
      }, autoDeleteDelay);
      return () => {
        clearTimeout(interval);
      };
    }
  }, []);

  useEffect(() => {
    if (isClosing === true) {
      const interval = setTimeout(() => {
        uiContext.closeAlert(props.id);
      }, 440);
      return () => {
        clearTimeout(interval);
      };
    }
  }, [isClosing]);

  function closeAlert() {
    setIsClosing(true);
  }

  return (
    <div
      className={`transition-all duration-300 ease-in-out overflow-hidden ${
        isClosing ? "animate-fade-out" : ""
      }`}
      id={props.id}
      style={{ height: `${isClosing ? 0 : heightValue}px` }}
    >
      <div ref={elementRef}>
        <div
          className={`alert ${props.color === "green" ? "alert-green" : ""} ${
            props.color === "blue" ? "alert-blue" : ""
          } ${props.color === "orange" ? "alert-orange" : ""} ${
            props.color === "red" ? "alert-red" : ""
          }`}
          role="alert"
          aria-live="assertive"
        >
          <div>
            {props.icon && (
              <span className={`icon icon-24 icon-${props.icon}`} />
            )}
            {!props.icon && (
              <span
                className={`icon icon-24  ${
                  props.color === "green" ? "icon-f-check" : ""
                } ${props.color === "blue" ? "icon-c-info" : ""} ${
                  props.color === "orange" ? "icon-warning-sign" : ""
                } ${props.color === "red" ? "icon-s-warning" : ""}`}
              />
            )}
            <span>
              {props.title && <span className="alert-title">{props.title} </span>}
                <span
                className="alert-text"
                dangerouslySetInnerHTML={{
                  __html: props.text,
                }}
              />
            </span>
          </div>
          {dismissable && (
            <div className="flex-none">
              <button
                type="button"
                className="button button-sm button-ghost button-close"
                data-dismiss="alert"
                aria-label="Close"
                onClick={closeAlert}
              >
                <span className="icon icon-e-remove" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
