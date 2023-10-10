import React, { useContext, useEffect } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import ModalFavoriteGames from "../modal-favoritegames";

export default function StructureSubMenu({ children, side }) {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();

  return (
    <>
      Menu
      <div className="flex flex-col lg:flex-row lg:gap-4">
        <div className="">

        </div>
        {children}
      </div>
    </>
  );
}
