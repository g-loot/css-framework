import React, { useContext, useEffect } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import ModalFavoriteGames from "../modal-favoritegames";

export default function GamePicker(props) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();

  return (
    <>
      <nav className="order-1 md:order-2 relative md:static mt-1 md:mt-0 flex justify-start px-4 sm:px-0 overflow-auto scrollbar-hidden">
        <ul className="tabs tabs-colored">
          {prototype.games
            // .filter((g) => g.isFavorite)
            .map((item, itemIndex) => (
              <li key={itemIndex}>
                <button
                  type="button"
                  className={`button-unstretch lg:button-stretch ${
                    item.id === prototype.getGameByID(prototype.defaultGameID).id ? "is-active" : ""
                  } `}
                  style={{ "--color": `var(--color-game-${item.slug})` }}
                  onClick={() => prototype.defineDefaultGameID(item.id)}
                >
                  <span
                    className={`text-xl icon icon-game-${item.slug.replace(
                      /#|_/g,
                      ""
                    )}-symbol`}
                  />
                  <span>
                    <span>{item.shortName}</span>
                  </span>
                </button>
              </li>
            ))}
        </ul>
        <span
          className="tabs-colored-shadow"
          style={{
            "--color": `var(--color-game-${
              prototype.getGameByID(prototype.defaultGameID).slug
            })`,
          }}
        />
      </nav>

      {/* <ul className="flex items-center justify-center">
              {prototype.games
                // .filter((g) => g.isFavorite)
                .map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <button
                      type="button"
                      className={`group relative flex gap-2 items-center p-3 overflow-hidden select-none transition duration-100 ease-in-out outline-offset-[-1px] focus-visible:rounded focus-visible:outline focus-visible:outline-1 focus-visible:outline-main ${
                        item.id === prototype.defaultGameID
                          ? `text-game-${item.slug} pointer-events-none`
                          : "text-ui-300 hover:text-ui-100 hover:bg-ui-400/5 active:bg-ui-400/10"
                      } `}
                      onClick={() => prototype.defineDefaultGameID(item.id)}
                    >
                      <span
                        className={`relative z-10 block transition ease-linear duration-[0s] group-active:translate-y-0.5 text-xl icon icon-game-${item.slug.replace(
                          /#|_/g,
                          ""
                        )}-symbol`}
                      />
                      <span className="relative z-10 block transition ease-linear duration-[0s] group-active:translate-y-0.5 text-sm uppercase">
                        {item.name}
                      </span>
                    </button>
                  </li>
                ))}
            </ul> */}
    </>
  );
}
