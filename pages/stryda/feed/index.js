import React, { useContext, useEffect, useState } from "react";

import Ad from "../../../components/Ad/Ad";
import Carousel from "../../../components/Carousel/Carousel";
import Link from "next/link";
import PrototypeStructure from "../../../components/Prototype/PrototypeStructure";
import { UiContext } from "../../../contexts/ui";
import { useRouter } from "next/router";

import { usePrototypeData } from "../../../contexts/prototype";
import PrototypeHead from "../../../components/Prototype/PrototypeHead";
import Footer from "../../../components/Footer/Footer";

export default function Home() {
  const uiContext = useContext(UiContext);
  const prototype = usePrototypeData();

  return (
    <>
      <PrototypeHead title="Home" />
      <div className="drawer min-h-full">
        <input id="drawer-1" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="sticky top-0 flex items-center justify-between bg-ui-800/50 border-b border-ui-600  backdrop-blur-sm px-4 py-1">
            <div className="flex-0 text-0">
              <Link href="/">
                <button type="button" className="interactive">
                <span className="icon icon-stryda-symbol text-main text-4xl" />
                </button>
              </Link>
              <div className="sm:hidden">
                <label
                  htmlFor="drawer-1"
                  className="button button-primary drawer-button"
                >
                  Open drawer
                </label>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <nav>
                <ul class="menu menu-horizontal" role="menu">
                  <li>
                    <a>
                      <span>Home</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span>Battle Pass</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span>Missions</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span>Ladders</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span>Shop</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span>Premium</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="min-h-full h-[200vh]">
            qsdqsd
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="drawer-1" className="drawer-overlay"></label>
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
