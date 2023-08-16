import React, { useContext, useState } from "react";

import ListItemTournament from "@/components/ListItem/ListItemTournament";
import Lottie from "lottie-react";
import LottieExplosion from "@/assets/animations/explosion-2.json";
import { UiContext } from "@/contexts/ui.js";
import { VariablesContext } from "@/contexts/variables";
import { usePrototypeData } from "@/contexts/prototype";

export default function ModalTournamentSchedule(props) {
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
      <div className="relative z-10 max-w-sm w-full">
        <div className="modal w-full">
          <button
            type="button"
            className="button button-secondary button-close"
            onClick={uiContext.closeModal}
          >
            <span className="icon icon-e-remove" />
          </button>
          <div className="modal-content">
            <div className="modal-body">
              <h2 className="modal-title">
                Tournament schedule
              </h2>
              <div className="">
                <div className="label mb-1">Pending parties:</div>
                <ul className="space-x-2 lg:space-x-0 lg:space-y-2 flex lg:block">
                  {prototype.games.map((game, gameIndex) => (
                    <>
                      {game.tournaments?.map(
                        (tournament, tournamentIndex) => (
                          <>
                            {tournament.status === "ongoing" || tournament.status === "registration"  && (
                              <ListItemTournament game={game} tournament={tournament} />
                            )}
                          </>
                        )
                      )}
                    </>
                  ))}
                </ul>
              </div>
            </div>
            <div className="modal-action justify-center">
              <button
                className="button button-secondary w-32"
                onClick={uiContext.closeModal}
              >
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
