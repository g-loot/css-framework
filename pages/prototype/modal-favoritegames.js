import React, { useContext, useState } from "react";

import Lottie from "lottie-react";
import LottieExplosion from "../../assets/animations/explosion-2.json";
import { UiContext } from "../../contexts/ui.js";
import { VariablesContext } from "../../contexts/variables";
import { usePrototypeData } from "../../contexts/prototype";

export default function ModalFavoriteGames(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const variablesContext = useContext(VariablesContext);
  const [submitting, setSubmitting] = useState(false);
  function closeModalWithDelay() {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.closeModal();
      setSubmitting(false);
    }, 1000);
  }

  return (
    <>
      <div className="relative z-10 max-w-md w-full">
        <div className="modal surface w-full">
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
              <div className="form-group flex flex-wrap justify-center gap-4 border-t border-ui-700 mt-4 pt-8">
                {prototype.games.map((game, gameIndex) => (
                  <label key={game.id} className="form-checkbox form-image">
                    <input
                      type="checkbox"
                      name={game.slug}
                      defaultChecked={game.isFavorite}
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
            <div className="modal-action justify-center">
              <button className={`button button-primary w-32 ${
                  submitting ? "is-loading" : ""
                }`}
                onClick={closeModalWithDelay}>
                <span>Save</span>
              </button>
              <button className="button button-secondary w-32" onClick={uiContext.closeModal}>
                <span>Clear all</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
