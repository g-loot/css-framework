import React, { useContext, useEffect } from "react";
import Head from "next/head";
import Topbar from "./Topbar";
import Footer from "./Footer";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import ModalFavoriteGames from "../modal-favoritegames";

export default function Structure({ children, title, gamePicker }) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();

  useEffect(() => {
      if (typeof window !== 'undefined') {
          document.body.setAttribute("data-theme", "lighter");
      }
  }, []);

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
      <Topbar />
          {gamePicker && (
            <div className="relative z-10 bg-gradient-to-b from-ui-900/70 to-ui-900/50 border-b border-ui-700 flex items-center">
              <div className="container relative flex justify-start overflow-x-auto scrollbar-hidden">
                <nav className="flex gap-2 items-center justify-center mx-auto">
                  <ul className="flex items-center justify-center">
                    {prototype.games
                      .filter((g) => g.isFavorite)
                      .map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <button
                            type="button"
                            className={`group relative flex gap-2 items-center p-3 overflow-hidden select-none transition duration-100 ease-in-out outline-offset-[-1px] focus-visible:rounded focus-visible:outline focus-visible:outline-1 focus-visible:outline-main ${
                              item.id === prototype.defaultGameID
                                ? `text-game-${item.slug} pointer-events-none`
                                : "text-ui-300 hover:text-ui-100 hover:bg-ui-400/5 active:bg-ui-400/10"
                            } `}
                            onClick={() =>
                              prototype.defineDefaultGameID(item.id)
                            }
                          >
                            <span
                              className={`relative z-10 block transition ease-linear duration-[0s] group-active:translate-y-0.5 text-xl icon icon-game-${item.slug.replace(
                                /#|_/g,
                                ""
                              )}-symbol`}
                            />
                            <span className="relative z-10 block transition ease-linear duration-[0s] group-active:translate-y-0.5 text-sm uppercase">{item.name}</span>
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
          <div className="min-h-screen container sm:px-8">{children}</div>
          <Footer />
      {/*
      <div className="drawer min-h-full">
        <input id="drawer-1" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          
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
  */}
    </>
  );
}
