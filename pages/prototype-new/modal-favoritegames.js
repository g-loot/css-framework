import React, { useContext, useState } from "react";

import { UiContext } from "../../contexts/ui.js";
import { VariablesContext } from "../../contexts/variables";
import { usePrototypeData } from "../../contexts/prototype";

export default function ModalFavoriteGames(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const variablesContext = useContext(VariablesContext);
  const [submitting, setSubmitting] = useState(false);
  const [selectedGamesCount, setSelectedGamesCount] = useState(prototype.games.filter(g => g.isFavorite).length);
  const [disabled, setDisable] = useState(false);

  const handlechange = (event) => {
    if(event.target.checked) {
      setSelectedGamesCount(selectedGamesCount + 1);
    } else {
      setSelectedGamesCount(selectedGamesCount - 1);
    }
  };

  function closeModalWithDelay() {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr({size: "medium", text: "Favorite games updated", color: "green", autoDelete: true, autoDeleteDelay: 2500});
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
        <div className="modal w-full">
          <button
            type="button"
            className="button button-secondary button-close"
            onClick={uiContext.closeModal}
          >
            <span className="icon icon-e-remove" />
          </button>
          <div className="modal-content">
            <div className="modal-body text-center">
              <h2 className="modal-title">
                Edit your favorite games
              </h2>
              <p>It will help us customize the platform for you.</p>
              <div className="border-t border-ui-700 mt-4 pt-4">
                <div className="label mb-4 leading-tight">Click on the games you play the most</div>
                <div className="form-group flex flex-wrap justify-center gap-4">
                  {prototype.games.map((game, gameIndex) => (
                    <label key={game.id} className="form-checkbox form-image">
                      <input
                        type="checkbox"
                        name={game.slug}
                        defaultChecked={game.isFavorite}
                        onChange={handlechange}
                        setSelectedGamesCount={setSelectedGamesCount}
                      />
                      <span className="sr-only">{game.name}</span>
                      <div
                        className="w-36 h-48 bg-cover rounded-md"
                        style={{ backgroundImage: `url(${game.assets.cover})` }}
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-action justify-center">
              <button className={`button button-primary w-32 ${
                  submitting ? "is-loading" : ""
                }`}
                onClick={closeModalWithDelay}
                disabled={selectedGamesCount === 0}>
                <span>Save</span>
              </button>
              <button className="button button-secondary w-32" onClick={clearSelectedGame}>
                <span>Clear all</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
