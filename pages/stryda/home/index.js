import React, { useContext, useEffect, useState } from "react";

import { UiContext } from "../../../contexts/ui";
import { useRouter } from "next/router";

import { usePrototypeData } from "../../../contexts/prototype";
import WidgetUser from "../components/WidgetUser";
import Structure from "../components/Structure";

export default function Home() {
  const router = useRouter();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();
  const isEmpty = query.empty === "true" ? true : false;

  return (
    <>
      <Structure title="Home">
        <section className="min-h-full container flex flex-col lg:flex-row gap-4 py-4">
          <div className="w-80 xl:w-96">
            <WidgetUser />
          </div>
          <div className="flex-1">
            <div className="surface h-12 rounded-3"></div>
          </div>
          <div className="w-80 xl:w-96 max-w-xl:hidden">
            <div className="surface h-12 rounded-3"></div>
          </div>
        </section>
      </Structure>
    </>
  );
}
