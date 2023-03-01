import React, { useState, useContext } from "react";
import { UiContext } from "../../contexts/ui";

export default function ButtonSorting({props, children}) {
  const uiContext = useContext(UiContext);
  const [isSorted, setIsSorted] = useState(false);

  function handleSorted() {
    setIsSorted(!isSorted);
  }

  return (
    <button type="button" className="button button-sm button-ghost" onClick={handleSorted}>
      <span>{children}</span>
      <span
        className={`icon ${
          isSorted ? "icon-arrow-sm-down" : "icon-arrow-sm-up"
        }`}
      />
    </button>
  );
}
