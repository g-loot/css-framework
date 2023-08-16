import React, { useContext, useState } from "react";

import { UiContext } from "@/contexts/ui.js";
import { VariablesContext } from "@/contexts/variables.js";
import { usePrototypeData } from "@/contexts/prototype.js";

export default function ModalSelectYourGame(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const variablesContext = useContext(VariablesContext);
  const [submitting, setSubmitting] = useState(false);
  const [selectedGamesCount, setSelectedGamesCount] = useState(
    prototype.games.filter((g) => g.isFavorite).length
  );
  const selectedGame = prototype.getGameByID(prototype.defaultGameID);
  const [disabled, setDisable] = useState(false);

  const handlechange = (event) => {
    setSelectedGame(prototype.getGameBySlug(event.target.id));
  };

  function closeModalWithDelay() {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr({
        size: "medium",
        text: "Your profile has been updated",
        color: "green",
        autoDelete: true,
        autoDeleteDelay: 2500,
      });
      uiContext.closeModal();
      setSubmitting(false);
    }, 1000);
  }

  function clearSelectedGame() {
    setSelectedGamesCount(0);
  }

  return (
    <>
      <div className="relative z-10 max-w-md w-full">
        <div className="modal modal-center w-full">
          <button
            type="button"
            className="button button-secondary button-close"
            onClick={uiContext.closeModal}
          >
            <span className="icon icon-e-remove" />
          </button>
          <div className="modal-content">
            <div className="modal-body text-center">
              <h2 className="modal-title">Select your game</h2>
              <p>Add or edit more games later.</p>
              <div className="border-t border-ui-700 mt-4 pt-4">
                <div className="form-group flex flex-wrap justify-center gap-4">
                  {prototype.games.map((game, gameIndex) => (
                    <label key={game.id} className="form-radio form-image">
                      <input
                        type="radio"
                        name="games"
                        id={game.slug}
                        onChange={handlechange}
                      />
                      <span className="sr-only">{game.name}</span>
                      <div
                        className="w-28 h-40 bg-cover rounded-md"
                        style={{ backgroundImage: `url(${game.assets.cover})` }}
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-action justify-center">
              {!selectedGame ? (
                <button
                  type="button"
                  className="button w-80 button-primary is-disabled"
                >
                  <span>Connect</span>
                </button>
              ) : (
                <>
                  {selectedGame.hasAPI && (
                    <button
                      type="button"
                      onClick={() => closeModalWithDelay()}
                      className={`button w-80 button-primary ${
                        submitting ? "is-loading" : ""
                      }`}
                    >
                      <span
                        className={`icon icon-game-${selectedGame.slug}-symbol`}
                      />
                      <span>Connect my account</span>
                    </button>
                  )}
                  {selectedGame === "pubg" && (
                    <button
                      type="button"
                      onClick={() => closeModalWithDelay()}
                      className={`button w-80 button-primary ${
                        submitting ? "is-loading" : ""
                      }`}
                    >
                      <span className={`icon icon-${selectedGame}`} />
                      <span>Connect with Steam</span>
                    </button>
                  )}
                  {selectedGame !== "pubg" && !selectedGame.hasAPI && (
                    <button
                      type="button"
                      onClick={() => closeModalWithDelay()}
                      className={`button w-80 button-primary ${
                        submitting ? "is-loading" : ""
                      }`}
                    >
                      <span className="icon icon-data-download" />
                      <span>Download Stryda</span>
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
