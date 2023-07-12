import React, { useContext } from "react";
import Head from "next/head";
import Topbar from "./Topbar";
import Footer from "./Footer";

export default function Structure({ children, title, fullWidth }) {
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
          <div className={`min-h-screen ${!fullWidth ? "container py-4" : ""}`}>
            {children}
          </div>
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
