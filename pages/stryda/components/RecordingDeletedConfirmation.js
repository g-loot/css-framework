import React, { useContext, useState, useRef } from "react";

import { UiContext } from "@/contexts/ui.js";
import { dataFeedItems } from "@/mock-data/data-feed";
import { dataMatches } from "@/mock-data/data-matches";
import FeedItemMatchTabSummary from "./FeedItemMatchTabSummary";

export default function RecordingDeletedConfirmation(props) {
  const uiContext = useContext(UiContext);
  const item = props.item || dataFeedItems[0];
  const match = props.match || dataMatches[0];

  return (
    <>
      {item && match && (
        <div className="modal modal-center max-w-md">
          <div className="modal-content">
            <div className="modal-body">
              <h2 className="modal-title">Delete recording</h2>
              <div className="mt-3 mb-2 rounded surface-ui-600 overflow-hidden">
                <FeedItemMatchTabSummary match={match} item={item} />
              </div>
              <p>
                Once you delete the match recording all video files connected to
                the match will be removed.
              </p>
              <p>Your match stats will still be available on Stryda.</p>
              <div className="modal-action">
                <button
                  type="button"
                  onClick={() => uiContext.closeModal()}
                  className="button w-32 button-primary"
                >
                  <span>Cancel</span>
                </button>
                <button
                  type="button"
                  onClick={() => uiContext.closeModal()}
                  className="button w-32 button-secondary"
                >
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
