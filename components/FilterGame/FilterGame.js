import React from "react";
import { UiContext } from "../../contexts/ui";
import { useContext } from "react";
import { usePrototypeData } from "../../contexts/prototype";
import ModalFavoriteGames from "../../pages/prototype-new/modal-favoritegames";

export default function FilterGame(props) {
  const prototype = usePrototypeData();
  const iconSize = props.size || "text-xl";
  const game = props.game || 1;
  const uiContext = useContext(UiContext);
  function openModalFavoriteGames() {
    uiContext.openModal(<ModalFavoriteGames></ModalFavoriteGames>);
  }

  return (
    <section className="flex gap-4 my-8">
      {prototype.games.map((game, gameIndex) => (
        <>
          {" "}
          {game.isFavorite && (
            <button
              type="button"
              className={`chip chip-secondary uppercase ${
                game.id === 1 ? "chip-inverted" : ""
              }`}
            >
              <span>{game.name}</span>
            </button>
          )}
        </>
      ))}
      <button
        type="button"
        onClick={openModalFavoriteGames}
        className="chip chip-secondary"
      >
        <span className="icon icon-options" />
      </button>
    </section>
  );
}
