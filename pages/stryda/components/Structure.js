import React, { useContext, useEffect } from "react";
import Head from "next/head";
import Topbar from "./Topbar";
import Footer from "./Footer";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import ModalFavoriteGames from "../modal-favoritegames";

export default function Structure({
  children,
  title,
  gamePicker,
  hiddenUI,
  fullWidth,
}) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();

  const pageTitle = `${title} — Stryda v3`;

  function openModalFavoriteGames() {
    uiContext.openModal(<ModalFavoriteGames />);
  }
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Stryda Prototype" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/gloot/image/upload/v1671441061/Stryda/favicons/stryda-favicon.png"
        />
      </Head>
      {!hiddenUI && <Topbar />}
      <div className={`min-h-screen ${fullWidth ? "" : "container sm:px-8"}`}>
        {children}
      </div>
      {!hiddenUI && <Footer />}
    </>
  );
}
