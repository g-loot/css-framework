import React, { useContext, useState } from "react";

import { UiContext } from "@/contexts/ui.js";
import { VariablesContext } from "@/contexts/variables.js";
import { usePrototypeData } from "@/contexts/prototype.js";
import Tooltip from "@/components/Tooltip/Tooltip.js";

export default function ModalConnectIDLeagueOfLegends(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const [submitting, setSubmitting] = useState(false);
  const [selectedGamesCount, setSelectedGamesCount] = useState(
    prototype.games.filter((g) => g.isFavorite).length
  );

  const [isLoLRegionSelected, setIsLoLRegionSelected] = useState(false);

  function selectLoLRegion(e) {
    setIsLoLRegionSelected(true);
  }

  function closeModalWithDelay() {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr({
        size: "medium",
        text: "Your League of Legends account has been connected",
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
              <h2 className="modal-title">Connect your account</h2>
              <div className="form-group form-select my-4">
                  <select
                    id="Leagueoflegends-region"
                    onChange={(e) => selectLoLRegion(e)}
                  >
                    <option disabled selected>
                      Select your region
                    </option>
                    <option>Brazil</option>
                    <option>Europe Nordic & East</option>
                    <option>Europe West</option>
                    <option>North America</option>
                    <option>Latin America North</option>
                    <option>Latin America South</option>
                    <option>Oceania</option>
                    <option>Russia</option>
                    <option>Turkey</option>
                    <option>Japan</option>
                    <option>Republic of Korea</option>
                    <option>The Philippines</option>
                    <option>Singapore, Malaysia, Indonesia</option>
                    <option>Taiwan, Hong Kong, Macao</option>
                    <option>Thailand</option>
                    <option>Vietnam</option>
                  </select>
                </div>
                <p className="text-ui-300 my-4 leading-tight">
                  By connecting my League of Legends account I acknowledge
                  making my profile public to all users.
                </p>
            </div>
            <div className="modal-action justify-center">
              <button
                type="button"
                onClick={closeModalWithDelay}
                disabled={!isLoLRegionSelected}
                className={`button button-primary flex-1 ${
                  submitting ? "is-loading" : ""
                }`}
              >
                <span className="icon icon-game-leagueoflegends-symbol" />
                <span>Connect my account</span>
              </button>
              <button
                className="button button-secondary flex-1"
                onClick={uiContext.closeModal}
              >
                <span>Cancel</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
