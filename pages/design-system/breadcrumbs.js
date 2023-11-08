import React, { useState } from "react";

import Footer from "@/components/Footer/Footer";
import { getLayout } from "@/components/DesignSystem/DSLayout";
import Anchor from "@/components/DesignSystem/DSanchor";

const DSpage = () => {
  return (
    <>
      <h1 className="mb-8">Breadcrumbs</h1>

      {/* Structure */}
      <div className="mb-10">
        <Anchor title="Structure" />

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col">
              <div className="flex-1 space-y-4 surface rounded-lg px-4 py-12 flex justify-center">
                <nav className="breadcrumbs" aria-label="Breadcrumb">
                  <ol>
                    <li>
                      <a href="#">
                        <span className="icon icon-20 icon-home-2" />
                        <span>Home</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Games</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Tournaments</span>
                      </a>
                    </li>
                    <li aria-current="page">
                      <div>
                        <span>European Champions European Champions</span>
                      </div>
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/ycj35Lfp/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With animation */}
      <div className="mb-10">
        <Anchor title="With animation" />

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col">
              <div className="flex-1 space-y-4 surface rounded-lg px-4 py-12 flex justify-center">
                <nav className="breadcrumbs" aria-label="Breadcrumb">
                  <ol>
                    <li
                      className="animate-slide-in-top animate-delay"
                      style={{ "--delay": "calc(0 * 0.05s)" }}
                    >
                      <a href="#">
                        <span className="icon icon-20 icon-home-2" />
                        <span>Home</span>
                      </a>
                    </li>
                    <li
                      className="animate-slide-in-top animate-delay"
                      style={{ "--delay": "calc(1 * 0.05s)" }}
                    >
                      <a href="#">
                        <span>Games</span>
                      </a>
                    </li>
                    <li
                      className="animate-slide-in-top animate-delay"
                      style={{ "--delay": "calc(2 * 0.05s)" }}
                    >
                      <a href="#">
                        <span>Tournaments</span>
                      </a>
                    </li>
                    <li
                      className="animate-slide-in-top animate-delay"
                      style={{ "--delay": "calc(3 * 0.05s)" }}
                      aria-current="page"
                    >
                      <div>
                        <span>European Champions European Champions</span>
                      </div>
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/92tps3gL/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
