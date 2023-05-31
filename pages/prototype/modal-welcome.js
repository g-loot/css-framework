import React, { useContext, useState } from "react";

import { UiContext } from "../../contexts/ui.js";
import { VariablesContext } from "../../contexts/variables.js";
import { usePrototypeData } from "../../contexts/prototype.js";
import ModalSelectYourGame from "./modal-selectyourgame.js";

export default function ModalWelcome(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const variablesContext = useContext(VariablesContext);
  const [submitting, setSubmitting] = useState(false);
  const [selectedGamesCount, setSelectedGamesCount] = useState(
    prototype.games.filter((g) => g.isFavorite).length
  );
  const [selectedGame, setSelectedGame] = useState(null);
  const [disabled, setDisable] = useState(false);

  const handlechange = (event) => {
    setSelectedGame(event.target.id);
    console.log("selectedGame", selectedGame);
  };

  function closeModalWithDelay() {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr({
        size: "medium",
        text: "Favorite games updated",
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

  function openModalSelectYourGame() {
    uiContext.openModal(<ModalSelectYourGame></ModalSelectYourGame>);
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
              <h2 className="modal-title">Welcome to Stryda</h2>
              <p>
                A community where you can play, compete and have fun with other
                likeminded players.
              </p>
              <div className="relative text-center">
                <span className="icon icon-reply text-gradient bg-gradient-t-r from-ui-100/20 to-ui-100/80" />
                <ul className="lg:grid lg:grid-cols-3">
                  <li>
                    <p>
                      Progress the Battlepass and get rewarded
                    </p>
                  </li>
                  <li>
                    <p>
                      Progress the Battlepass and get rewarded
                    </p>
                  </li>
                  <li>
                    <p>
                      Progress the Battlepass and get rewarded
                    </p>
                  </li>
                  <li>
                    <p>
                      Progress the Battlepass and get rewarded
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="modal-action justify-center">
              <button
                type="button"
                onClick={openModalSelectYourGame}
                className="button w-80 button-primary"
              >
                <span>Connect</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
