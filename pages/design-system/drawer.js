import React, { useState } from "react";
import { getLayout } from "@/components/DesignSystem/DSLayout";
import Anchor from "@/components/DesignSystem/DSanchor";

const DSpage = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <h1 className="mb-8">Drawer</h1>

      {/* Structure */}
      <div className="mb-12" >
        <Anchor title="Structure" />

        <div className="">
          <div className="">
            <div className="flex flex-col gap-4">
              <div className="drawer h-56 surface rounded-lg">
                <input
                  id="drawer-1"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col items-center justify-center">
                  <label
                    htmlFor="drawer-1"
                    className="button button-primary drawer-button"
                  >
                    Open drawer
                  </label>
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
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/p9odrkh0/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visible on desktop, hidden on mobile */}
      <div className="mb-12">
        <Anchor title="Visible on desktop, hidden on mobile" />

        <div className="">
          <div className="">
            <div className="flex flex-col gap-4">
              <div className="drawer drawer-mobile h-56 surface rounded-lg">
                <input
                  id="drawer-2"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col items-center justify-center">
                  <div className="block lg:hidden">
                    <label
                      htmlFor="drawer-2"
                      className="button button-primary drawer-button"
                    >
                      Open drawer
                    </label>
                  </div>
                </div>
                <div className="drawer-side">
                  <label htmlFor="drawer-2" className="drawer-overlay"></label>
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
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/Le08fh36/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer right */}
      <div className="mb-12">
        <Anchor title="Drawer right" />

        <div className="">
          <div className="">
            <div className="flex flex-col gap-4">
              <div className="drawer drawer-right h-56 surface rounded-lg">
                <input
                  id="drawer-3"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col items-center justify-center">
                  <label
                    htmlFor="drawer-3"
                    className="button button-primary drawer-button"
                  >
                    Open drawer
                  </label>
                </div>
                <div className="drawer-side">
                  <label htmlFor="drawer-3" className="drawer-overlay"></label>
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
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/wtr8zq2n/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Forced javascript */}
      <div className="mb-12">
        <Anchor title="Structure" small="javascript" />

        <div className="">
          <div className="">
            <div className="flex flex-col gap-4">
              <div className="surface rounded-lg p-8 grid place-content-center overflow-hidden">
                <label className="switch switch-rotate button button-tertiary rounded-full">
                  <input
                    type="checkbox"
                    name="drawer-forced"
                    checked={isActive}
                    onChange={() => setIsActive(!isActive)}
                  />
                  <div className="switch-off icon icon-24 icon-dots-vertical"></div>
                  <div className="switch-on icon icon-24 icon-e-remove"></div>
                </label>
                <div
                  className={`drawer-side drawer-forced ${
                    isActive ? "is-active" : ""
                  }`}
                >
                  <label className="switch switch-rotate button button-tertiary rounded-full">
                    <input
                      type="checkbox"
                      name="drawer-forced"
                      checked={isActive}
                      onChange={() => setIsActive(!isActive)}
                    />
                    <div className="switch-off icon icon-24 icon-dots-vertical"></div>
                    <div className="switch-on icon icon-24 icon-e-remove"></div>
                  </label>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/p9odrkh0/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
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
