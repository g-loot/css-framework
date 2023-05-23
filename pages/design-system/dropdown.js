import React, { useEffect, useRef, useState } from "react";

import { getLayout } from "../../components/DesignSystem/DSLayout";

const DSpage = () => {
  const [isActive, setActive] = useState(false);
  const ref = useRef(null);

  const dropdownActive = (e) => {
    e.preventDefault();
    setActive(!isActive);
  };

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setActive(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  
  return (
    <>
      <h1 className="mb-2">Dropdown</h1>

      {/* Structure */}
      <div className="mb-12" id="structure">
        <h2 className="h3 mb-3">Structure</h2>
        <div className="surface rounded-lg p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-center items-center">
              <div className="dropdown">
                <label tabIndex="1" className="button button-primary">
                  <span className="icon icon-arrow-sm-down" />
                  <span>Click me</span>
                </label>
                <div tabIndex="1" className="dropdown-content w-52 p-1">
                  <ul className="menu menu-rounded">
                    <li>
                      <a tabIndex="1">
                        <span>Item 1</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex="1">
                        <span>Item 2</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex="1">
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
                src="//jsfiddle.net/augustin_hiebel/czxg1ort/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Align to end */}
      <div className="mb-12" id="align-end">
        <h2 className="h3 mb-3">Align to end</h2>
        <div className="surface rounded-lg p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-center items-center">
              <div className="dropdown dropdown-end">
                <label tabIndex="1" className="button button-primary">
                  <span>Click me</span>
                  <span className="icon icon-arrow-sm-down" />
                </label>
                <div tabIndex="1" className="dropdown-content w-52 p-1">
                  <ul className="menu menu-rounded">
                    <li>
                      <a tabIndex="1">
                        <span>Item 1</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex="1">
                        <span>Item 2</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex="1">
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
                src="//jsfiddle.net/augustin_hiebel/zkb0j2ea/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontally centered */}
      <div className="mb-12" id="horizontally-centered">
        <h2 className="h3 mb-3">Horizontally centered</h2>
        <div className="surface rounded-lg p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-center items-center">
              <div className="dropdown dropdown-center">
                <label tabIndex="1" className="button button-primary">
                  <span>Click me</span>
                  <span className="icon icon-arrow-sm-down" />
                </label>
                <div tabIndex="1" className="dropdown-content w-52 p-1">
                  <ul className="menu menu-rounded">
                    <li>
                      <a tabIndex="1">
                        <span>Item 1</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex="1">
                        <span>Item 2</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex="1">
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
                src="//jsfiddle.net/augustin_hiebel/ot7yv5sn/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown top */}
      <div className="mb-12" id="dropdown-top">
        <h2 className="h3 mb-3">Dropdown top</h2>
        <div className="surface rounded-lg p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-center items-center">
              <div className="dropdown dropdown-top">
                <label tabIndex="1" className="button button-primary">
                  <span className="icon icon-arrow-sm-up" />
                  <span>Click me</span>
                </label>
                <div tabIndex="1" className="dropdown-content w-52 p-1">
                  <ul className="menu menu-rounded">
                    <li>
                      <a tabIndex="1">
                        <span>Item 1</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex="1">
                        <span>Item 2</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex="1">
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
                src="//jsfiddle.net/augustin_hiebel/vdsua3qn/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown top / align to end */}
      <div className="mb-12" id="dropdown-top-align-end">
        <h2 className="h3 mb-3">Dropdown top / align to end</h2>
        <div className="surface rounded-lg p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-center items-center">
              <div className="dropdown dropdown-top dropdown-end">
                <label tabIndex="1" className="button button-primary">
                  <span>Click me</span>
                  <span className="icon icon-arrow-sm-up" />
                </label>
                <div tabIndex="1" className="dropdown-content w-52 p-1">
                  <ul className="menu menu-rounded">
                    <li>
                      <a tabIndex="1">
                        <span>Item 1</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex="1">
                        <span>Item 2</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex="1">
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
                src="//jsfiddle.net/augustin_hiebel/dLc1nvoh/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown top / horizontally centered */}
      <div className="mb-12" id="dropdown-top-horizontally-centered">
        <h2 className="h3 mb-3">Dropdown top / horizontally centered</h2>
        <div className="surface rounded-lg p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-center items-center">
              <div className="dropdown dropdown-top dropdown-center">
                <label tabIndex="1" className="button button-primary">
                  <span>Click me</span>
                  <span className="icon icon-arrow-sm-up" />
                </label>
                <div tabIndex="1" className="dropdown-content w-52 p-1">
                  <ul className="menu menu-rounded">
                    <li>
                      <a tabIndex="1">
                        <span>Item 1</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex="1">
                        <span>Item 2</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex="1">
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
                src="//jsfiddle.net/augustin_hiebel/dLc1nvoh/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown left */}
      <div className="mb-12" id="dropdown-left">
        <h2 className="h3 mb-3">Dropdown left</h2>
        <div className="surface rounded-lg p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-center items-center">
              <div className="dropdown dropdown-left">
                <label tabIndex="1" className="button button-primary">
                  <span className="icon icon-arrow-sm-left" />
                  <span>Click me</span>
                </label>
                <div tabIndex="1" className="dropdown-content w-52 p-1">
                  <ul className="menu menu-rounded">
                    <li>
                      <a tabIndex="1">
                        <span>Item 1</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex="1">
                        <span>Item 2</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex="1">
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
                src="//jsfiddle.net/augustin_hiebel/zn8e1bmg/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown left / align to end */}
      <div className="mb-12" id="dropdown-left-align-end">
        <h2 className="h3 mb-3">Dropdown left / align to end</h2>
        <div className="surface rounded-lg p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-center items-center">
              <div className="dropdown dropdown-left dropdown-end">
                <label tabIndex="1" className="button button-primary">
                  <span className="icon icon-arrow-sm-left" />
                  <span>Click me</span>
                </label>
                <div tabIndex="1" className="dropdown-content w-52 p-1">
                  <ul className="menu menu-rounded">
                    <li>
                      <a tabIndex="1">
                        <span>Item 1</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex="1">
                        <span>Item 2</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex="1">
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
                src="//jsfiddle.net/augustin_hiebel/r69v18Ld/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown right */}
      <div className="mb-12" id="dropdown-right">
        <h2 className="h3 mb-3">Dropdown right</h2>
        <div className="surface rounded-lg p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-center items-center">
              <div className="dropdown dropdown-right">
                <label tabIndex="1" className="button button-primary">
                  <span>Click me</span>
                  <span className="icon icon-arrow-sm-right" />
                </label>
                <div tabIndex="1" className="dropdown-content w-52 p-1">
                  <ul className="menu menu-rounded">
                    <li>
                      <a tabIndex="1">
                        <span>Item 1</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex="1">
                        <span>Item 2</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex="1">
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
                src="//jsfiddle.net/augustin_hiebel/056fr2sv/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown right / align to end */}
      <div className="mb-12" id="dropdown-right-align-end">
        <h2 className="h3 mb-3">Dropdown right / align to end</h2>
        <div className="surface rounded-lg p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-center items-center">
              <div className="dropdown dropdown-right dropdown-end">
                <label tabIndex="1" className="button button-primary">
                  <span>Click me</span>
                  <span className="icon icon-arrow-sm-right" />
                </label>
                <div tabIndex="1" className="dropdown-content w-52 p-1">
                  <ul className="menu menu-rounded">
                    <li>
                      <a tabIndex="1">
                        <span>Item 1</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex="1">
                        <span>Item 2</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex="1">
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
                src="//jsfiddle.net/augustin_hiebel/3Ls9kz6e/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Open (forced) */}
      <div className="mb-12" id="open-force">
        <h2 className="h3 mb-3">
          Open (forced){" "}
          <small className="text-ui-300">javascript</small>
        </h2>
        <div className="surface rounded-lg p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-center items-center">
              <div ref={ref} className={`dropdown ${isActive ? "dropdown-open" : "dropdown-closed"}`}>
                <label tabIndex="1" className="button button-primary" onClick={dropdownActive}>
                  <span>Click me</span>
                  <span className="icon icon-arrow-sm-down" />
                </label>
                <div tabIndex="1" className="dropdown-content w-52 p-1">
                  <ul className="menu menu-rounded">
                    <li>
                      <a tabIndex="1">
                        <span>Item 1</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex="1">
                        <span>Item 2</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex="1">
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
                src="//jsfiddle.net/augustin_hiebel/w03vp2bj/embedded/js/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* On hover */}
      <div className="mb-12" id="on-hover">
        <h2 className="h3 mb-3">On hover</h2>

        <div className="surface rounded-lg p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-center items-center">
              <div className="dropdown dropdown-hover">
                <label tabIndex="1" className="button button-primary">
                  <span>Click me</span>
                  <span className="icon icon-arrow-sm-down" />
                </label>
                <div tabIndex="1" className="dropdown-content w-52 p-1">
                  <ul className="menu menu-rounded">
                    <li>
                      <a tabIndex="1">
                        <span>Item 1</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex="1">
                        <span>Item 2</span>
                      </a>
                    </li>
                    <li>
                      <a tabIndex="1">
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
                src="//jsfiddle.net/augustin_hiebel/zqw3L5bn/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown in navbar */}
      <div className="mb-12" id="in-navbar">
        <h2 className="h3 mb-3">Dropdown in navbar</h2>

        <div className="surface rounded-lg p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-center items-center">
              <div className="w-full surface surface-ui-700 rounded-xl p-2 flex items-center justify-between">
                <a
                  href="#"
                  className="text-0 rounded-full bg-ui-800 border border-ui-600 p-1 block"
                >
                  <span className="icon icon-stryda-symbol text-main text-2xl" />
                </a>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex="1"
                    className="flex items-center rounded-full border border-ui-600 bg-ui-600/25 interactive"
                  >
                    <div className="avatar avatar-circle avatar-xs">
                      <div>
                        <img
                          src="https://res.cloudinary.com/gloot/image/upload/v1655292255/Marketing/2022_prototype/DummyContent/avatars/avatar_user_5.jpg"
                          alt="avatar"
                        />
                      </div>
                    </div>
                    <span className="icon icon-arrow-sm-down mx-2" />
                  </div>

                  <div
                    tabIndex="1"
                    className="dropdown-content bg-ui-600 w-52 p-1"
                  >
                    <ul className="menu menu-rounded menu-secondary">
                      <li>
                        <a tabIndex="1">
                          <span className="icon icon-circle-09" />
                          <span>Profile</span>
                        </a>
                      </li>
                      <li>
                        <a tabIndex="1">
                          <span className="icon icon-wallet-43" />
                          <span>Wallet</span>
                        </a>
                      </li>
                      <li className="separator"></li>
                      <li>
                        <a tabIndex="1">
                          <span className="icon icon-cogwheel" />
                          <span>Settings</span>
                        </a>
                      </li>
                      <li>
                        <a tabIndex="1">
                          <span className="icon icon-file-article" />
                          <span>How Stryda works</span>
                        </a>
                      </li>
                      <li>
                        <a
                          tabIndex="1"
                          href="#"
                          rel="noopener noreferrer"
                        >
                          <span className="icon icon-cloud-data-download" />
                          <span>Download tracker</span>
                        </a>
                      </li>
                      <li className="separator"></li>
                      <li>
                        <a tabIndex="1">
                          <span className="icon icon-leave" />
                          <span>Log out</span>
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
                src="//jsfiddle.net/augustin_hiebel/378d6x2q/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
          </div>
        </div>
      </div>


      {/* Responsive positioning */}
      <div className="mb-12" id="responsive-positioning">
        <h2 className="h3 mb-3">Responsive positioning</h2>

        <div className="surface rounded-lg p-4">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <p className="text-ui-300 mb-6">
                  You can change the position of the dropdown based on the screen
                  size using the following class name:
                  <code
                    className="interactive text-xs"
                    onClick={() => {
                      uiContext.openToastr({
                        size: "small",
                        text: "class name to your clipboard",
                        color: "green",
                        autoDelete: true,
                        autoDeleteDelay: 2500,
                      });
                      navigator.clipboard.writeText("lg:dropdown-start");
                    }}
                  >
                    .&#123;xx&#x7D;:dropdown-&#123;position&#x7D;
                  </code>
                  .<br />
                  &#123;xx&#x7D; can be <code className="text-xs">
                    xs
                  </code>, <code className="text-xs">sm</code>,{" "}
                  <code className="text-xs">md</code>,{" "}
                  <code className="text-xs">lg</code>,{" "}
                  <code className="text-xs">xl</code>.
                </p>
                <div className="w-full flex gap-4 items-center">
                  <div className="w-1/2 text-ui-400 text-right text-sm leading-tight">
                    In this example, the tooltip will be displayed aligned on end by default, but will be centered above 1024px (lg).
                  </div>
                  <div className="dropdown dropdown-end lg:dropdown-center">
                    <label tabIndex="1" className="button button-primary">
                      <span>Click me</span>
                      <span className="icon icon-arrow-sm-down" />
                    </label>
                    <div tabIndex="1" className="dropdown-content w-52 p-1">
                      <ul className="menu menu-rounded">
                        <li>
                          <a tabIndex="1">
                            <span>Item 1</span>
                          </a>
                        </li>
                        <li>
                          <a tabIndex="1">
                            <span>Item 2</span>
                          </a>
                        </li>
                        <li>
                          <a tabIndex="1">
                            <span>Item 3</span>
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
                  src="//jsfiddle.net/augustin_hiebel/17t08vup/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
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
