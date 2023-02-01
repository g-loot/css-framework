import Ad from "../Ad/Ad";
import Footer from "../Footer/Footer";
import Link from "next/link";
import PrototypeHead from "./PrototypeHead";
import PrototypeLeftMenu from "./PrototypeLeftMenu";
import PrototypeLeftMenuNew from "./PrototypeLeftMenuNew";
import Topbar from "../Topbar/Topbar";
import TopbarNew from "../Topbar/TopbarNew";
import { usePrototypeData } from "../../contexts/prototype";
import { useRouter } from "next/router";
import { VariablesContext } from "../../contexts/variables";
import React, { useContext } from "react";
import Avatar from "../Avatar/Avatar";
import PrototypeSideRight from "./PrototypeSideRight";

const manNavLinks = [
  {
    url: "home",
    slug: "home",
    label: "Home",
    icon: "icon-home-2",
  },
  {
    url: "missions",
    slug: "missions",
    label: "Missions",
    icon: "icon-crosshair",
  },
  {
    url: "ladders",
    slug: "ladders",
    label: "Ladders",
    icon: "icon-podium",
  },
  {
    url: "stats",
    slug: "stats",
    label: "Stats",
    icon: "icon-statistics",
  },
  {
    url: "shop",
    slug: "shop",
    label: "Shop",
    icon: "icon-shop",
  },
];

export default function PrototypeStructure({ children, title }) {
  const prototype = usePrototypeData();
  const { query } = useRouter();
  const hasAds = query.ads === "true" ? true : false;
  const hasContentCard = query.contentcard === "true" ? true : false;
  const variables = useContext(VariablesContext);
  const router = useRouter();
  return (
    <>
      <PrototypeHead title={title} />
      <div className="drawer">
        <input
          id="drawer-prototype"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content scrollbar-desktop scrollbar-secondary">
          <TopbarNew />
          <div className="relative">
            {hasContentCard && (
              <div className="fixed bottom-8 right-8 z-50">
                <div className="min-h-[300px] w-64 surface surface-ui-700 rounded-xl shadow-xl overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/gloot/image/upload/v1662645306/Marketing/2022_prototype/Illustrations/ladder_leaderboard.webp"
                    alt=""
                    className="object-cover aspect-video"
                  />
                  <button
                    type="button"
                    className="button button-tertiary button-sm button-close absolute top-2 right-2"
                  >
                    <span className="icon icon-e-remove" />
                  </button>
                  <div className="p-4">
                    <h6 className="leading-none">Buy more Tokens</h6>
                    <p className="text-sm mt-2">
                      Uh oh. Out of Tokens? Do not worry you do not have to give
                      up on the Ladder. You can buy more Tokens whenever
                      you need them. Visit your Wallet page to take advantage of
                      special bundle deals. Happy Laddering!
                    </p>
                    <button
                      type="button"
                      className="button button-primary button-sm w-full mt-3"
                    >
                      <span>Shop now</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-stretch h-screen">
              <div className="pl-2 py-2 flex items-stretch">
                <div className="relative w-16 hidden md:flex flex-col">
                  <i className="absolute z-40 lg:w-12 xl:w-24 h-[100dvh-0.5rem] left-0 translate-x-16 inset-y-0 from-ui-900/75 to-ui-900/0 bg-gradient-to-r" />
                  <div className="p-1 rounded-full surface mb-2">
                    <Link href={`/prototype-new/home${prototype.getURLparams()}`}>
                      <div className="relative z-10 grid place-content-center aspect-square text-0 cursor-pointer rounded-full hover:child:scale-90">
                        <span className="icon relative z-10 icon-stryda-symbol text-main text-3xl transition-transform duration-500 ease-[cubic-bezier(.7,0,.3,1)]" />
                      </div>
                    </Link>
                  </div>
                  <div className="flex-1 flex flex-col rounded-full surface">
                    <ul className="relative z-50 flex-1 flex flex-col items-center justify-center px-1.5 space-y-1.5">
                      {manNavLinks.map((item, itemIndex) => (
                        <>
                          <li key={itemIndex} className="w-full aspect-square flex items-center justify-center">
                            <Link
                              href={`/prototype-new/${
                                item.url
                              }${prototype.getURLparams()}`}
                            >
                              <button
                                type="button"
                                className={`flex-1 relative w-full aspect-square grid place-content-center transition-[color,background,transform,opacity] duration-200 ease-in-out active:before:bg-ui-900 before:content-[''] before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-t before:from-ui-850 before:to-ui-850 before:border before:border-ui-700 before:origin-right before:duration-200 before:transition-all before:ease-in-out before:rounded hover:before:opacity-100 hover:before:scale-100 hover:before:scale-x-100 tooltip tooltip-right ${
                                  router.pathname.includes(item.url)
                                    ? "text-main"
                                    : "before:opacity-0 before:scale-90 before:scale-x-0"
                                }`}
                                data-tooltip={item.label}
                              >
                                <span
                                  className={`icon text-2xl relative z-10 ${item.icon}`}
                                />
                              </button>
                            </Link>
                          </li>
                        </>
                      ))}
                    </ul>
                    <Link href={`/prototype-new/home${prototype.getURLparams()}`}>
                      <div className="relative z-10 grid place-content-center aspect-square border-t border-ui-700 text-0 cursor-pointer after:transition-colors after:duration-200 after:content-[''] after:absolute after:inset-0 after:bg-ui-850/0 hover:after:bg-ui-850 active:after:bg-ui-850">
                        <span className="icon relative z-10 icon-c-question text-ui-300 text-3xl" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative flex-1 overflow-hidden bg-ui-900 max-h-screen overflow-y-auto scrollbar scrollbar-hidden">
                <div className="max-w-3xl lg:px-12 xl:px-24 pt-4 w-full">
                  {children}
                </div>
                <Footer className="child:max-w-3xl child hidden" />
              </div>
              <div className="pr-2 py-2 flex items-stretch">
                <div className="w-60 hidden lg:block rounded-[1.75rem] bg-ui-800 border border-ui-600 h-[calc(100dvh-1rem)">
                  <i className="absolute z-40 lg:w-12 xl:w-24 h-[100dvh-0.5rem] right-0 -translate-x-[calc(15rem+0.5rem)] inset-y-0 from-ui-900/75 to-ui-900/0 bg-gradient-to-l" />
                  <PrototypeSideRight />
                  {hasAds && (
                    <div className="hidden 3xl:block absolute inset-y-0 right-0 w-[260px]">
                      <div className="sticky top-[68px]">
                        <Ad width="260" height="260" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="drawer-side scrollbar-hidden">
          <label htmlFor="drawer-prototype" className="drawer-overlay"></label>
          <aside className="w-72 bg-ui-850 border-r border-ui-700 flex flex-col shadow-2xl">
            <div className="h-12 flex items-center lg:items-start justify-between border-b border-ui-700 lg:pt-1 pl-7 pr-2 sticky z-10 top-0">
              <Link href={`/prototype/home${prototype.getURLparams()}`}>
                <a className="flex items-center gap-2 interactive">
                  <img
                    width="110"
                    height="auto"
                    src="https://res.cloudinary.com/gloot/image/upload/v1672130648/Stryda/logos/stryda-logo-main-white.svg"
                    alt="Stryda logo"
                  />
                </a>
              </Link>
              <div className="block md:hidden">
                <label
                  htmlFor="drawer-prototype"
                  className="drawer-button button button-tertiary button-close"
                >
                  <div className="icon icon-e-remove"></div>
                </label>
              </div>
            </div>
            <PrototypeLeftMenuNew />
          </aside>
        </div>
      </div>
    </>
  );
}
