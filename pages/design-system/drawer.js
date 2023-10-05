import React, {useState} from "react";
import { getLayout } from "@/components/DesignSystem/DSLayout";

const DSpage = () => {
  const [isActive, setIsActive] = useState(false);


  return (
    <>
      <h1 className="mb-2">Drawer</h1>

      {/* Structure */}
      <div className="mb-12" id="structure">
        <h2 className="h3 mb-3">Structure</h2>

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
      <div className="mb-12" id="visible-desktop">
        <h2 className="h3 mb-3">Visible on desktop, hidden on mobile</h2>

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
      <div className="mb-12" id="right">
        <h2 className="h3 mb-3">Drawer right</h2>

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

      {/* Drawer right + mobile */}
      <div className="mb-12" id="right-mobile">
        <h2 className="h3 mb-3">Drawer right + mobile</h2>

        <div className="">
          <div className="">
            <div className="flex flex-col gap-4">
            <div className="drawer drawer-right drawer-mobile h-56 surface rounded-lg">
                <input
                  id="drawer-4"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col items-center justify-center">
                  Content
                  <div className="block lg:hidden">
                    <label
                      htmlFor="drawer-4"
                      className="button button-primary drawer-button"
                    >
                      Open drawer
                    </label>
                  </div>
                </div>
                <div className="drawer-side">
                  <label htmlFor="drawer-4" className="drawer-overlay"></label>
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
       <div className="mb-12" id="forced-javascript">
        <h2 className="h3 mb-3">Forced <small class="text-ui-300">javascript</small></h2>
        
        <div className="">
          <div className="">
            <div className="flex flex-col gap-4">
              <div className="surface rounded-lg p-8 grid place-content-center overflow-hidden">
                  <label className="switch switch-rotate button button-tertiary rounded-full">
                    <input type="checkbox" name="drawer-forced" checked={isActive} onChange={() => setIsActive(!isActive)} />
                    <div className="switch-off icon icon-24 icon-dots-vertical"></div>
                    <div className="switch-on icon icon-24 icon-e-remove"></div>
                  </label>

                  <div className={`drawer-side drawer-forced ${isActive ? 'is-active' : ''}`}>
                    <label className="switch switch-rotate button button-tertiary rounded-full">
                      <input type="checkbox" name="drawer-forced" checked={isActive} onChange={() => setIsActive(!isActive)} />
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
