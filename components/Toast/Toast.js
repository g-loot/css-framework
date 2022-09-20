import { useContext, useEffect, useRef, useState } from "react";

import { UiContext } from "../../contexts/ui";

export default function Toast(props) {
  const uiContext = useContext(UiContext);
  const [isClosing, setIsClosing] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const autoDelete = props.autoDelete !== undefined ? props.autoDelete : false;
  const autoDeleteDelay = props.autoDeleteDelay !== undefined ? props.autoDeleteDelay : 5000;
  const [heightValue, setHeightValue] = useState(0);
  const elementRef = useRef(null);

  useEffect(()=> {
    setHeightValue(elementRef.current.clientHeight);
  }, []);

  useEffect(() => {
    if(autoDelete === true) {
      const interval = setTimeout(() => {
        setIsClosing(true)
      }, autoDeleteDelay);
      return () => {clearTimeout(interval);}
    }
  }, []);

  useEffect(() => {
    if(isClosing === true) {
      const interval = setTimeout(() => {
        uiContext.closeToastr(props.id);
      }, 440);
      return () => {clearTimeout(interval);}
    }
  }, [isClosing]);

  function closeToast() {
    setIsClosing(true);
  }

  return (
    <div className={`transition-all duration-300 ease-in-out overflow-hidden shadow-2xl rounded-lg ${isClosing ? "animate-fade-out" : ""}`} id={props.id} style={{ height: `${isClosing ? 0 : heightValue}px` }}>
      <div ref={elementRef} className="pb-px">
        <div
          className={`toast ${props.size === "small" ? "toast-sm" : ""} ${
            props.color === "green" ? "toast-green" : ""
          } ${props.color === "blue" ? "toast-blue" : ""} ${
            props.color === "orange" ? "toast-orange" : ""
          } ${props.color === "red" ? "toast-red" : ""}`}
          role="alert"
          aria-live="assertive"
        >
          {props.icon && <span className={`icon icon-20 icon-${props.icon}`} />}
          {!props.icon && <span className="icon icon-20 icon-c-info" />}
          <div>
            {props.title && (
              <div className="toast-title">
                {props.title}
              </div>
            )}
            <div className="toast-text">{props.text}</div>
            {props.buttons && (
              <div className="flex items-center gap-2 mt-2">
                <button type="button" className="button button-primary button-sm">
                  <span>Accept</span>
                </button>
                <button
                  type="button"
                  className="button button-tertiary button-sm"
                >
                  <span>Refuse</span>
                </button>
              </div>
            )}
          </div>
          <button
            type="button"
            className="button button-sm button-ghost button-close"
            data-dismiss="toast"
            aria-label="Close"
            onClick={closeToast}
          >
            <span className="icon icon-e-remove" />
          </button>
        </div>
      </div>
    </div>
  );
}
