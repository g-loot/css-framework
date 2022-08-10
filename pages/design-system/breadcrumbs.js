import React, { useState } from "react";

import Footer from "../../components/Footer/Footer";
import { getLayout } from "../../components/DesignSystem/DSLayout";

const DSpage = () => {
  return (
    <>
      <h1 className="mb-2">Breadcrumbs</h1>

      {/* Footer */}
      <div className="mb-12" id="footer">
        <div className="pt-4">
          <div className="">
            <div className="flex gap-4 flex-col">
              <div className="flex-1 space-y-4 surface rounded-lg px-4 py-12 flex justify-center">
                <nav className="flex whitespace-nowrap" aria-label="Breadcrumb">
                  <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                      <a
                        href="#"
                        className="inline-flex gap-2 items-center text-sm text-ui-300 hover:text-ui-100 active:opacity-50 focus-visible:text-main focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-1 focus-visible:outline-main transition-colors duration-75"
                      >
                        <span className="icon icon-20 icon-home-2" />
                        <span>Home</span>
                      </a>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <span className="icon icon-20 text-ui-300 icon-arrow-sm-right" />
                        <a
                          href="#"
                          className="ml-1 text-sm text-ui-300 hover:text-ui-100 active:opacity-50 focus-visible:text-main focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-1 focus-visible:outline-main transition-colors duration-75 md:ml-2"
                        >
                          Games
                        </a>
                      </div>
                    </li>
                    <li aria-current="page" className="max-w-[20ch]">
                      <div className="flex items-center">
                        <span className="icon icon-20 text-ui-300 icon-arrow-sm-right" />
                        <span className="ml-1 text-sm text-ui-300 md:ml-2 overflow-hidden overflow-ellipsis">
                          Missions
                        </span>
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
