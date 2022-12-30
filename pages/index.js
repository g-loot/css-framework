import React, { useRef, useState } from "react";

import DSHead from "../components/DesignSystem/DSHead";
import Footer from "../components/Footer/Footer";
import { FrameworkPages } from "./api/framework/pages";
import Link from "next/link";
import TopbarFramework from "../components/Topbar/Topbar-framework";
import { getLayout } from "../components/SiteLayout";

const lastestComponents = [
  {
    label: "Navbar",
    url: "/design-system/navbar",
  },
  {
    label: "Menu",
    url: "/design-system/menu",
  },
  {
    label: "Tables",
    url: "/design-system/tables",
  },
  {
    label: "File inputs",
    url: "/design-system/fileinputs",
  },
];

const lastestPages = [
  {
    label: "Solo leaderboard",
    url: "/prototype/valorant/brawls/0?tab=solo-leaderboard",
  },
  {
    label: "Your Brawl matches",
    url: "/prototype/valorant/brawls/0",
  },
  {
    label: "Ongoing brawls",
    url: "/prototype/valorant/brawls",
  },
  {
    label: "Missions",
    url: "/prototype/missions?game=0",
  },
  {
    label: "Wallet",
    url: "/prototype/wallet",
  },
  {
    label: "Profile",
    url: "/prototype/profile/1",
  },
  {
    label: "Teams",
    url: "/prototype/teams",
  },
  {
    label: "Shop",
    url: "/prototype/shop",
  },
  {
    label: "Premium",
    url: "/prototype/premium",
  },
  {
    label: "PUBG Season 6",
    url: "/prototype/pubg-season-6",
  },
  {
    label: "Home",
    url: "/prototype/home",
  },
];

const Index = () => {
  const [checked, setChecked] = useState(false);
  const myRef = useRef(null);

  function SwitchTheme(isChecked, theme) {
    if (isChecked === false) {
      document.body.setAttribute("data-theme", theme);
    } else {
      document.body.setAttribute("data-theme", "");
    }
    setChecked(!checked);
  }

  return (
    <>
      <DSHead title="Welcome" />
      <div className="drawer">
        <input
          id="drawer-framework"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content" ref={myRef}>
          <div className="">
            <TopbarFramework />
          </div>
          <div className="relative z-10 pt-12 pb-24 px-4 min-h-[calc(100vh-54px)] flex items-center">
            <div className="container mx-auto">
              <div className="grid grid-cols-12 gap-6 items-stretch">
                <div className="col-span-12 lg:col-span-12 flex flex-col">
                  <div className="flex-1 lg:border-l border-ui-500 lg:pl-8 mb-12">
                    <div>
                      <div className="h4 text-ui-100 ">
                        Welcome to the
                      </div>
                      <h1 className="mb-8 lg:text-8xl mt-2">
                        <div>Stryda design system</div>
                      </h1>
                    </div>
                    <p className="text-ui-300 leading-relaxed max-w-md">
                      The Stryda design system is a collection of reusable
                      components, guided by a style guide, founded on a design
                      strategy. Here you will find all relevant resources needed
                      to build any number of applications or pages. The design
                      system aims to create efficient work flows, consistency
                      and alignment when designing for the end user.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                    <div
                      className="rounded-xl surface overflow-hidden transform-gpu flex flex-col gap-4 items-stretch w-full p-2 animate-slide-in-bottom animate-delay"
                      style={{ "--delay": "calc(1 * 0.05s)" }}
                    >
                      <div
                        className="flex-none aspect-landscape bg-cover bg-center rounded"
                        style={{
                          backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653289722/Marketing/2022_prototype/cover-designsystem.webp)`,
                        }}
                      ></div>
                      <div className="flex-1 flex flex-col items-start justify-start p-2">
                        <div className="flex items-baseline gap-2 mb-3">
                          <h2 className="h4">
                            CSS Framework
                          </h2>
                        </div>
                        <div className="text-ui-300 leading-tight">
                          A centralized CSS framework for speed and consistency.
                        </div>
                      </div>
                      <div className="flex flex-col lg:flex-row gap-2 px-2 pb-2">
                        <Link href="design-system/about">
                          <a className="button button-primary">
                            <span>Read the docs</span>
                          </a>
                        </Link>
                        <Link href="design-system/gettingstarted">
                          <a className="button button-secondary">
                            <span>Get started</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="rounded-xl surface overflow-hidden transform-gpu flex flex-col gap-4 items-stretch w-full p-2 animate-slide-in-bottom animate-delay"
                      style={{ "--delay": "calc(2 * 0.05s)" }}
                    >
                      <div
                        className="flex-none aspect-landscape bg-cover bg-center rounded"
                        style={{
                          backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1653289722/Marketing/2022_prototype/cover-prototype.webp)`,
                        }}
                      ></div>
                      <div className="flex-1 flex flex-col items-start justify-start p-2">
                        <div className="flex items-baseline gap-2 mb-3">
                          <h2 className="h4">Prototype</h2>
                        </div>
                        <div className="text-ui-300 leading-tight">
                          Functional prototype for testing purposes.
                        </div>
                      </div>
                      <div className="flex flex-col lg:flex-row gap-2 px-2 pb-2">
                        <Link href="prototype/home">
                          <a className="button button-primary">
                            <span>View prototype</span>
                          </a>
                        </Link>
                        <Link href="prototype">
                          <a className="button button-secondary">
                            <span>Page listing</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="rounded-xl surface overflow-hidden transform-gpu flex flex-col gap-4 items-stretch w-full p-2 animate-slide-in-bottom animate-delay"
                      style={{ "--delay": "calc(3 * 0.05s)" }}
                    >
                      <div
                        className="flex-none aspect-landscape bg-cover bg-center rounded"
                        style={{
                          backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1670433486/Marketing/2022_prototype/cover-componentlibrary.jpg)`,
                        }}
                      ></div>
                      <div className="flex-1 flex flex-col items-start justify-start p-2">
                        <div className="flex items-baseline gap-2 mb-3">
                          <h2 className="h4">Component library</h2>
                        </div>
                        <div className="text-ui-300 leading-tight">
                          Stryda react component library consuming the framework.
                        </div>
                      </div>
                      <div className="flex flex-col lg:flex-row gap-2 px-2 pb-2">
                        <Link href="https://developers.gloot.com/component-library/?path=/story/docs-getting-started-quick-start--page">
                          <a className="button button-primary" target="_blank">
                            <span>View components</span>
                            <span className="icon icon-box-arrow-top-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:hidden col-span-2 surface rounded-lg relative">
                  <div className="absolute inset-0 p-4 overflow-y-auto scrollbar-desktop">
                    <div className="hidden lg:block space-y-6">
                      <div>
                        <div className="px-2 mb-2 uppercase text-ui-200">
                          Latest components:
                        </div>
                        <ul className="menu menu-secondary menu-rounded">
                          {lastestComponents.map(
                            (lastestComponent, lastestComponentIndex) => (
                              <>
                                <li key={lastestComponent}>
                                  <Link href={lastestComponent.url}>
                                    <a>
                                      <span>{lastestComponent.label}</span>
                                    </a>
                                  </Link>
                                </li>
                              </>
                            )
                          )}
                        </ul>
                      </div>
                      <div>
                        <div className="px-2 mb-2 uppercase text-ui-200">
                          Latest pages:
                        </div>
                        <ul className="menu menu-secondary menu-rounded">
                          {lastestPages.map((lastestPage, lastestPageIndex) => (
                            <>
                              <li key={lastestPage}>
                                <Link href={lastestPage.url}>
                                  <a>
                                    <span>{lastestPage.label}</span>
                                  </a>
                                </Link>
                              </li>
                            </>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        <div className="drawer-side scrollbar-hidden">
          <label htmlFor="drawer-framework" className="drawer-overlay"></label>
          <aside className="w-80 bg-ui-800 border-r border-ui-700">
            <div className="sticky z-20 top-0 p-2 backdrop-blur-sm">
              <label
                htmlFor="drawer-framework"
                className="drawer-button button button-tertiary button-close"
              >
                <div className="icon icon-e-remove"></div>
              </label>
            </div>
            <div className="px-2 pb-2">
              <ul className="menu menu-rounded">
                {FrameworkPages.pages.map((page, pageIndex) => (
                  <li
                    key={page}
                    className={`${page.isDisabled ? "is-disabled" : ""}`}
                  >
                    <Link href={page.url}>
                      <a>
                        <span>{page.label}</span>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

Index.getLayout = getLayout;

export default Index;
