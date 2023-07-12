import React, { useContext, useState, useEffect } from "react";

import { UiContext } from "../../../../contexts/ui.js";
import { usePrototypeData } from "../../../../contexts/prototype.js";
import { VariablesContext } from "../../../../contexts/variables.js";
import { useRouter } from "next/router";
import ResetsIn from "../../../../components/Countdown/ResetsIn.js";

export default function ModalClanEventOnboarding(props) {
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
      variablesContext.clanEventEnroll();
      uiContext.openToastr({
        size: "medium",
        text: "You have successfully enrolled your Clan to the Clan Event",
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
          <div className="modal modal-center w-full max-w-lg">
            <button
              type="button"
              className="button button-secondary button-close"
              onClick={uiContext.closeModal}
            >
              <span className="icon icon-e-remove" />
            </button>
            <div className="modal-content">
              <div className="modal-body">
                <h2 className="modal-title">Welcome to Clan Events</h2>
                <p>Play with your Clan and compete against other Clans.</p>
                <div className="flex flex-col lg:flex-row gap-8 items-start mt-4 max-w-md mx-auto child:animate-delay">
                  <div className="flex-1 space-y-8 animate-fade-in">
                    <video
                      autoPlay={true}
                      playsInline
                      loop
                      muted
                      preload
                      width="100%"
                      height="100%"
                      className="w-full rounded border border-ui-700"
                      src="https://res.cloudinary.com/gloot/video/upload/v1687418485/Stryda/videos/Clan_Seasons_onboarding_playing.mp4"
                    >
                      <img src="https://res.cloudinary.com/gloot/image/upload/v1687418644/Stryda/illustrations/Clan_Season_onboarding_playing.jpg" />
                    </video>
                    <p className="px-4">
                      Create a party in VALORANT with <b className="text-ui-100">5 Clan members</b>.
                    </p>
                  </div>
                  <div className="flex-1 space-y-8 animate-fade-in">
                    <video
                      autoPlay={true}
                      playsInline
                      loop
                      muted
                      preload
                      width="100%"
                      height="100%"
                      className="w-full rounded border border-ui-700"
                      src="https://res.cloudinary.com/gloot/video/upload/v1687424019/Stryda/videos/Clan_Season_onboarding_leaderboard.mp4"
                    >
                      <img src="https://res.cloudinary.com/gloot/image/upload/v1687418642/Stryda/illustrations/Clan_Season_onboarding_leaderboard.jpg" />
                    </video>
                    <p className="px-4">
                      Play matches and beat other Clans on Stryda to climb the
                      leaderboard.
                    </p>
                  </div>
                </div>
              </div>
              <div className="modal-action">
                <button
                  type="button"
                  className={`button button-primary`}
                  onClick={uiContext.closeModal}
                >
                  <span>Explore Season</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
