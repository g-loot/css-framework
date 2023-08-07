import React, { useContext } from "react";
import Head from "next/head";
import Topbar from "./Topbar";
import Footer from "./Footer";
import { UiContext } from "../../../contexts/ui";
import { usePrototypeData } from "../../../contexts/prototype";
import ModalFavoriteGames from "../modal-favoritegames";

export default function Structure({ children, title, gamePicker }) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  function openModalFavoriteGames() {
    uiContext.openModal(<ModalFavoriteGames />);
  }
  return (
    <>
      <Head>
        <title>{title} — Stryda v2</title>
        <meta name="description" content="Stryda Prototype" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/gloot/image/upload/v1671441061/Stryda/favicons/stryda-favicon.png"
        />
      </Head>
      <div className="drawer min-h-full">
        <input id="drawer-1" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Topbar />
          {gamePicker && (
            <div className="relative z-10 bg-gradient-to-b from-ui-900 to-ui-900/0 h-12 flex items-center">
              <div className="container relative flex justify-start overflow-x-auto scrollbar-hidden py-2">
                <nav className="flex gap-2 items-center justify-center mx-auto">
                  <ul className="tabs tabs-tertiary justify-center">
                    {prototype.games
                      .filter((g) => g.isFavorite)
                      .map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <button
                            type="button"
                            className={`${
                              item.id === prototype.defaultGameID
                                ? "is-active"
                                : ""
                            }`}
                            onClick={() =>
                              prototype.defineDefaultGameID(item.id)
                            }
                          >
                            <span
                              className={`icon icon-game-${item.slug.replace(
                                /#|_/g,
                                ""
                              )}-symbol`}
                            />
                            <span>{item.name}</span>
                          </button>
                        </li>
                      ))}
                  </ul>
                  <button
                    type="button"
                    className="button button-sm button-tertiary rounded-full"
                    onClick={openModalFavoriteGames}
                  >
                    <span className="icon icon-pen-2" />
                  </button>
                </nav>
              </div>
            </div>
          )}
          <div className="min-h-screen container">{children}</div>
          <Footer />
        </div>
        <div className="drawer-side">
          <label htmlFor="drawer-prototype" className="drawer-overlay"></label>
          <div className="p-4 overflow-y-auto w-1/2 lg:w-80 bg-ui-700 text-base-content">
            <ul className="menu">
              <li>
                <a>
                  <span>Item 1</span>
                </a>
              </li>
              <li>
                <a>
                  <span>Item 2</span>
                </a>
              </li>
              <li>
                <a>
                  <span>Item 3</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
