import React from "react";
import { getLayout } from "@/components/DesignSystem/DSLayout";
import Anchor from "@/components/DesignSystem/DSanchor";

const DSpage = () => {
  return (
    <>
      <h1 className="mb-8">Menu</h1>

      {/* primary */}
      <div className="mb-12">
        <Anchor title="Primary" />

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
              <div className="flex-1 surface rounded overflow-hidden">
                <ul className="menu" role="menu">
                  <li>
                    <button>
                      <span>Missions</span>
                    </button>
                  </li>
                  <li>
                    <button className="is-active">
                      <span>Ladders</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <span>Tournaments</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <span>Stats</span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/dwjbm4fn/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* secondary */}
      <div className="mb-12">
        <Anchor title="Secondary" />

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
              <div className="flex-1 surface rounded overflow-hidden">
                <ul className="menu menu-secondary">
                  <li>
                    <button>
                      <span>Missions</span>
                    </button>
                  </li>
                  <li>
                    <button className="is-active">
                      <span>Ladders</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <span>Tournaments</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <span>Stats</span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/uo6p2nve/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* with icons */}
      <div className="mb-12">
        <Anchor title="With icons" />

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
              <div className="flex-1 surface rounded overflow-hidden">
                <ul className="menu" role="menu">
                  <li>
                    <button>
                      <span className="icon icon-missions" />
                      <span>Missions</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <span className="icon icon-ladder" />
                      <span>Ladders</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <span className="icon icon-showdown" />
                      <span>Tournaments</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <span className="icon icon-d-chart" />
                      <span>Stats</span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/7rsbogxn/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* with separators */}
      <div className="mb-12">
        <Anchor title="With separators" />

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
              <div className="flex-1 surface rounded overflow-hidden">
                <ul className="menu" role="menu">
                  <li>
                    <button>
                      <span>Home</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <span>Profile</span>
                    </button>
                  </li>
                  <li className="separator"></li>
                  <li>
                    <button>
                      <span>Missions</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <span>Ladders</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <span>Tournaments</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <span>Stats</span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/8no2mx4g/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rounded */}
      <div className="mb-12">
        <Anchor title="Rounded" />

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
              <div className="flex-1 surface rounded-lg p-1">
                <ul className="menu menu-rounded" role="menu">
                  <li>
                    <button>
                      <span>Home</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <span>Profile</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <span>Missions</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <span>Ladders</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <span>Tournaments</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <span>Stats</span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/75qy032g/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Horizontal */}
      <div className="mb-12">
        <Anchor title="Horizontal" />

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
              <div className="flex-1 surface rounded">
                <ul className="menu menu-horizontal" role="menu">
                  <li>
                    <button>
                      <span>Home</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <span>Profile</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <span>Missions</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <span>Ladders</span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/vd9gayus/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Responsive (vertical by default, horizontal on large screen) */}
      <div className="mb-12">
        <Anchor title="Responsive" />
        <p className="text-ui-300 mb-3">
          Vertical by default, horizontal on large screen
        </p>

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
              <div className="flex-1 surface rounded">
                <ul className="menu lg:menu-horizontal" role="menu">
                  <li>
                    <button>
                      <span>Home</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <span>Profile</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <span>Missions</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <span>Ladders</span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/8p3gy7am/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Vertical with submenu */}
      <div className="mb-12">
        <Anchor title="Vertical with submenu" />

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
              <div className="flex-1 surface rounded">
                <ul className="menu" role="menu">
                  <li>
                    <button>
                      <span>Home</span>
                    </button>
                  </li>
                  <li>
                    <button className="flex justify-between">
                      <span>Parent</span>
                      <span className="icon icon-arrow-sm-right" />
                    </button>
                    <ul>
                      <li>
                        <button>
                          <span>Submenu 1</span>
                        </button>
                      </li>
                      <li>
                        <button>
                          <span>Submenu 2</span>
                        </button>
                      </li>
                      <li>
                        <button>
                          <span>Submenu 3</span>
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <button>
                      <span>Missions</span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/f75x03ok/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal with submenu */}
      <div className="mb-12">
        <Anchor title="Horizontal with submenu" />

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
              <div className="flex-1 surface rounded p-1">
                <ul className="menu menu-horizontal" role="menu">
                  <li>
                    <button>
                      <span>Home</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <span className="flex gap-2">
                        <span>Parent</span>
                        <span className="icon icon-arrow-sm-down" />
                      </span>
                    </button>
                    <ul>
                      <li>
                        <button>
                          <span>Submenu 1</span>
                        </button>
                      </li>
                      <li>
                        <button>
                          <span>Submenu 2</span>
                        </button>
                      </li>
                      <li>
                        <button>
                          <span>Submenu 3</span>
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <button>
                      <span>Missions</span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="300"
                  src="//jsfiddle.net/augustin_hiebel/vwyL7euo/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loading */}
      <div className="mb-12">
        <Anchor title="Loading" />

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-start">
              <div className="flex-1 surface rounded overflow-hidden">
                <ul className="menu is-loading" role="menu">
                  <li>
                    <button>
                      <span className="icon icon-missions" />
                      <span>Missions</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <span className="icon icon-ladder" />
                      <span>Ladders</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <span className="icon icon-showdown" />
                      <span>Tournaments</span>
                    </button>
                  </li>
                  <li>
                    <button>
                      <span className="icon icon-d-chart" />
                      <span>Stats</span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="160"
                  src="//jsfiddle.net/augustin_hiebel/fv34o8hr/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
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
