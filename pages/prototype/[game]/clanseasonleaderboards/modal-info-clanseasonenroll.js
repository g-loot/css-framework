import React, { useContext, useState, useEffect } from "react";

import { UiContext } from "../../../../contexts/ui.js";
import { usePrototypeData } from "../../../../contexts/prototype.js";
import { VariablesContext } from "../../../../contexts/variables.js";
import { useRouter } from "next/router";
import ResetsIn from "../../../../components/Countdown/ResetsIn.js";

export default function ModalInfoClanSeasonEnroll(props) {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);
  const hasAds = query.ads === "true" ? true : false;
  const { tab } = router.query;
  const [submitting, setSubmitting] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const leaderboard_id = props.id || 0;
  const [selectedLeaderboard, setSelectedLeaderboard] = useState(null);
  const { game } = router.query;

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game, prototype]);

  useEffect(() => {
    setSelectedLeaderboard(
      prototype.getClanLeaderboardByID(game, leaderboard_id)
    );
  }, [leaderboard_id]);

  function closeModalWithDelay() {
    setSubmitting(true);

    setTimeout(() => {
      variablesContext.clanSeasonEnroll();
      uiContext.openToastr({
        size: "medium",
        text: "You have successfully enrolled your Clan to the Clan Season",
        color: "green",
        autoDelete: true,
        autoDeleteDelay: 2500,
      });
      variablesContext.incrementLadderStep(props.incrementNumber);
      uiContext.closeModal();
      setSubmitting(false);
    }, 1000);
  }

  return (
    <>
      {selectedLeaderboard && (
        <div className="relative z-10">
          <div className="modal">
            <button
              type="button"
              className="button button-secondary button-close"
              onClick={uiContext.closeModal}
            >
              <span className="icon icon-e-remove" />
            </button>
            <div className="modal-image">
              <img src={selectedLeaderboard.logo} alt="" className="w-80" />
              <span
                style={{
                  backgroundImage: "url(" + selectedLeaderboard.bg + ")",
                }}
              />
            </div>
            <div className="modal-content">
              <div className="modal-body">
                <h2 className="modal-title">Enter the Clan Season</h2>
                <p>
                  You are about to enter your Clan to the {selectedLeaderboard.name} Clan Season.
                </p>
                <p>
                  To climb the leaderboard, play matches in Competitive mode with a party composed only by members of your Clan.
                </p>
                <p>
                  This Clan Season <ResetsIn label="ends" />.
                </p>
              </div>
              <div className="modal-action">
                {/* 
          {submitting && <span>...Submitting</span>}
          {!submitting && (
            <button type="button" onClick={closeModalWithDelay}>
              Ok
            </button>
          )}
          */}
                <button
                  type="button"
                  className={`button button-primary ${
                    submitting ? "is-loading" : ""
                  }`}
                  onClick={closeModalWithDelay}
                >
                  <span>Yes, Enter with my Clan</span>
                </button>
                <button
                  type="button"
                  className={`button button-secondary ${
                    submitting ? "is-loading" : ""
                  }`}
                  onClick={() => uiContext.closeModal()}
                >
                  <span>Cancel</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
