import React from "react";
import { getLayout } from "@/components/DesignSystem/DSLayout";

const DSpage = () => {
  return (
    <>
      <h1 className="mb-2">Navbar</h1>

      {/* With title */}
      <div className="mb-12" id="navbar-with-title">
        <h2 className="h3 mb-3">With title</h2>
        <div className="surface rounded-lg p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-center items-center">
              <div className="navbar bg-ui-900/95 rounded-lg shadow-lg">
                <div className="navbar-content container">
                  <a className="button button-ghost rounded-full">
                    <span>Stryda</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <iframe
                className="rounded"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/ofseLxwn/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* With title and button */}
      <div className="mb-12" id="navbar-with-title-button">
        <h2 className="h3 mb-3">With title and button</h2>
        <div className="surface rounded-lg p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-center items-center">
              <div className="navbar bg-ui-900/95 rounded-lg shadow-lg">
                <div className="navbar-content container">
                  <a className="button button-ghost rounded-full">
                    <span>Stryda</span>
                  </a>
                  <a className="button button-ghost rounded-full">
                    <span className="icon icon-dots" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <iframe
                className="rounded"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/s5yzfknL/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* With buttons at start and end */}
      <div className="mb-12" id="navbar-with-icons-start-end">
        <h2 className="h3 mb-3">With buttons at start and end</h2>
        <div className="surface rounded-lg p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-center items-center">
              <div className="navbar bg-ui-900/95 rounded-lg shadow-lg">
                <div className="navbar-content container">
                  <div className="flex-none">
                    <a className="button button-ghost rounded-full">
                      <span className="icon icon-menu-8" />
                    </a>
                  </div>
                  <div className="flex-1">
                    <a className="button button-ghost rounded-full">
                      <span>Stryda</span>
                    </a>
                  </div>
                  <div className="flex-none">
                    <a className="button button-ghost rounded-full">
                      <span className="icon icon-dots" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <iframe
                className="rounded"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/pqf26h4v/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* With menu */}
      <div className="mb-12" id="navbar-with-menu">
        <h2 className="h3 mb-3">With menu</h2>
        <div className="surface rounded-lg p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-center items-center">
              <div className="navbar bg-ui-900/95 rounded-lg shadow-lg">
                <div className="navbar-content container">
                  <div className="flex-1">
                    <a className="button button-ghost rounded-full">
                      <span>Stryda</span>
                    </a>
                  </div>
                  <div className="flex-none">
                    <ul className="menu menu-horizontal" role="menu">
                      <li>
                        <a>
                          <span>Home</span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span>Parent</span>
                        </a>
                        <ul>
                          <li>
                            <a>
                              <span>Submenu 1</span>
                            </a>
                          </li>
                          <li>
                            <a>
                              <span>Submenu 2</span>
                            </a>
                          </li>
                          <li>
                            <a>
                              <span>Submenu 3</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a>
                          <span>Missions</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <iframe
                className="rounded"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/k1w4negm/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* With search input and dropdown */}
      <div className="mb-12" id="navbar-with-search-dropdown">
        <h2 className="h3 mb-3">With search input and dropdown</h2>
        <div className="surface rounded-lg p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-center items-center">
              <div className="navbar bg-ui-900/95 rounded-lg shadow-lg">
                <div className="navbar-content container">
                  <div className="flex-1">
                    <a className="button button-ghost rounded-full">
                      <span>Stryda</span>
                    </a>
                  </div>
                  <div className='flex-none form-group"'>
                    <div className="form-group">
                      <input
                        type="password"
                        name="first-name"
                        id="first-name"
                        placeholder="Search"
                        className="input-sm"
                      />
                    </div>
                  </div>
                  <div className="flex-none flex items-center ml-1">
                    <div className="dropdown dropdown-end">
                      <div
                        tabIndex="0"
                        className="avatar avatar-circle avatar-xs "
                      >
                        <div>
                          <img src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_5.jpg" />
                        </div>
                      </div>
                      <div
                        tabIndex="0"
                        className="dropdown-content bg-ui-600 w-52 p-1"
                      >
                        <ul className="menu menu-rounded">
                          <li>
                            <a>
                              <span className="icon icon-wallet-43" />
                              <span>Wallet</span>
                            </a>
                          </li>
                          <li>
                            <a>
                              <span className="icon icon-circle-09" />
                              <span>Public profile</span>
                            </a>
                          </li>
                          <li>
                            <a>
                              <span className="icon icon-cogwheel" />
                              <span>Settings</span>
                            </a>
                          </li>
                          <li>
                            <a>
                              <span className="icon icon-leave" />
                              <span>Log out</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <iframe
                className="rounded"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/a5g2ntuv/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
