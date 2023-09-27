import React, { useContext, useState, useRef, useEffect } from "react";

import { UiContext } from "@/contexts/ui.js";
import { usePrototypeData } from "@/contexts/prototype.js";
import FeedItemDetailsMatch from "./components/FeedItemDetailsMatch";

export default function ModalFeedItemViewer(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const item = props.item;
  const selectedTab = props.selectedTab;
  const editMode = props.editMode || false;

  const handleKeyDown = (e) => {
    if (e.key === "Escape" || e.keyCode === 27) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleCloseModal = () => {
    history.pushState(null, "", `/prototype/home`);
    uiContext.closeModal();
  };

  return (
    <>
      {item && (
        <>
          {!editMode && (
            <div className="fixed z-[51] top-4 right-4">
              <button
                type="button"
                className="button button-secondary button-close"
                onClick={handleCloseModal}
              >
                <span className="icon icon-e-remove" />
              </button>
            </div>
          )}
          <div className="modal surface-transparent max-w-lg modal-top">
            <div className="modal-content p-0">
              {item.type === "match" && (
                <FeedItemDetailsMatch
                  item={item}
                  match={prototype.getMatchByID(item.itemID)}
                  selectedTab={selectedTab}
                  editMode={editMode}
                />
              )}
            </div>
          </div>
          <button
            type="button"
            className="absolute z-0 inset-0"
            onClick={editMode ? null : handleCloseModal}
          />
        </>
      )}
    </>
  );
}
