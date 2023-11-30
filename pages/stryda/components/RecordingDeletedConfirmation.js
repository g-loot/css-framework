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
        <div className="modal modal-center max-w-sm">
          <div className="modal-content">
            <div className="modal-body">
              <h2 className="modal-title">Delete recording</h2>
              <div className="my-3 card-recap w-72 mx-auto">
                <div className="card-image">
                  <div className="card-game">
                    <span className="icon icon-game-valorant-symbol text-game-valorant" />
                  </div>
                  <div className="card-date">4 min. ago</div>
                  <div className="card-user">
                    <div className="avatar avatar-simple avatar-xs">
                      <div>
                        <img src="https://res.cloudinary.com/gloot/image/upload/Stryda/stats/valorant/agent-avatar-cypher.webp" alt="" />
                      </div>
                    </div>
                    <span>Cypher</span>
                  </div>
                  <div className="card-meta">
                    <img src="https://res.cloudinary.com/gloot/image/upload/v1695129417/Stryda/stats/valorant/Game_Mode_Competitive.webp" alt="" />
                    <span>Competitive</span>
                    <span>Haven</span>
                  </div>
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/Stryda/stats/valorant/map-piazza.jpg"
                    alt=""
                  />
                </div>
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
