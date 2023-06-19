import React, { useState, useContext } from "react";
import { UiContext } from "../../contexts/ui";

export default function ButtonSorting({ children, ...props }) {
  const uiContext = useContext(UiContext);
  const hasArrow = props.hasArrow !== undefined ? props.hasArrow : true;
  const [isSorted, setIsSorted] = useState(false);

  function handleSorted() {
    setIsSorted(!isSorted);
  }

  return (
    <button type="button" className="button button-sm button-ghost -mx-2.5" onClick={handleSorted}>
      <span>{children}</span>
      {hasArrow && (
        <span
          className={`icon ${
            isSorted ? "icon-arrow-sm-down" : "icon-arrow-sm-up"
          }`}
        />
      )}
    </button>
  );
}
