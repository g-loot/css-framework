import React, { useState, useContext } from "react";
import { UiContext } from "@/contexts/ui";

export default function ButtonSorting({ children, ...props }) {
  const uiContext = useContext(UiContext);
  const hasArrow = props.hasArrow !== undefined ? props.hasArrow : true;
  const [isSorted, setIsSorted] = useState(false);
  const [isActive, setIsActive] = useState(false);

  function handleSorted() {
    setIsSorted(!isSorted);
  }

  return (
    <>
      {!hasArrow ? (
        <span className="button button-sm button-ghost -mx-2.5 pointer-events-none">
          {children}
        </span>
      ) : (
        <button
          type="button"
          className={`button button-sm button-ghost -mx-2.5 ${
            isActive ? "child:text-ui-100" : ""
          }`}
          onClick={() => {
            setIsSorted(!isSorted);
            setIsActive(true);
          }}
        >
          <span>{children}</span>
          {isActive ? (
            <span
              className={`icon ${
                isSorted ? "icon-arrow-sm-down" : "icon-arrow-sm-up"
              }`}
            />
          ) : (
            <span className="icon icon-i-delete" />
          )}
        </button>
      )}
    </>
  );
}
