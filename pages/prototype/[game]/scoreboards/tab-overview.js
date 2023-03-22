import React, { useEffect, useState, useContext } from "react";
import { UiContext } from "../../../../contexts/ui";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";


export default function TabScoreboardsOverview() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const isEmpty = query.empty === "true" ? true : false;


  return (
    <>
      OVERVIEW
    </>
  );
}
