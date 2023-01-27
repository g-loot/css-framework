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
                      up on the Weekly Ladder. You can buy more Tokens whenever
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
              <div className="relative w-16 hidden bg-ui-800 md:flex flex-col after:content-[''] after:w-px after:absolute after:inset-y-0 after:bg-ui-700 after:right-0 after:z-0">
                <i className="absolute z-40 lg:w-12 xl:w-24 h-screen left-0 translate-x-16 inset-y-0 from-ui-900 to-ui-900/0 bg-gradient-to-r" />
                <Link href={`/prototype-new/home${prototype.getURLparams()}`}>
                  <div className="relative z-10 grid place-content-center aspect-square border-b border-ui-700 text-0 cursor-pointer after:transition-colors after:duration-200 after:content-[''] after:absolute after:inset-0 after:bg-ui-850/0 hover:after:bg-ui-850 active:after:bg-ui-850">
                    <span className="icon relative z-10 icon-stryda-symbol text-main text-3xl" />
                  </div>
                </Link>
                <div className="relative z-50 flex-1 flex flex-col items-center justify-center -space-y-px">
                  <Link href={`/prototype-new/home${prototype.getURLparams()}`}>
                    <button
                      type="button"
                      className={`relative w-full aspect-square grid place-content-center transition-[color,background,transform,opacity] duration-200 ease-in-out active:before:bg-ui-900 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-ui-800 before:to-ui-900 before:border-y before:border-y-ui-700 before:origin-right before:duration-500 before:transition-all before:ease-[cubic-bezier(.7,0,.3,1)] hover:before:opacity-100 hover:before:translate-x-0 hover:before:scale-x-100 tooltip tooltip-right ${
                        router.pathname.endsWith("prototype") ||
                        router.pathname.includes("home")
                          ? "text-main"
                          : "before:opacity-0 before:-translate-x-0 before:scale-x-0"
                      }`}
                      data-tooltip="Home"
                    >
                      <span className="icon text-2xl relative z-10 icon-home-2" />
                    </button>
                  </Link>
                  <Link
                    href={`/prototype-new/missions${prototype.getURLparams()}`}
                  >
                    <button
                      type="button"
                      className={`relative w-full aspect-square grid place-content-center transition-[color,background,transform,opacity] duration-200 ease-in-out active:before:bg-ui-900 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-ui-800 before:to-ui-900 before:border-y before:border-y-ui-700 before:origin-right before:duration-500 before:transition-all before:ease-[cubic-bezier(.7,0,.3,1)] hover:before:opacity-100 hover:before:translate-x-0 hover:before:scale-x-100 tooltip tooltip-right ${
                        router.pathname.includes("missions")
                          ? "text-main"
                          : "before:opacity-0 before:-translate-x-0 before:scale-x-0"
                      }`}
                      data-tooltip="Missions"
                    >
                      <span className="icon text-2xl relative z-10 icon-crosshair" />
                    </button>
                  </Link>
                  <Link
                    href={`/prototype-new/ladders${prototype.getURLparams()}`}
                  >
                    <button
                      type="button"
                      className={`relative w-full aspect-square grid place-content-center transition-[color,background,transform,opacity] duration-200 ease-in-out active:before:bg-ui-900 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-ui-800 before:to-ui-900 before:border-y before:border-y-ui-700 before:origin-right before:duration-500 before:transition-all before:ease-[cubic-bezier(.7,0,.3,1)] hover:before:opacity-100 hover:before:translate-x-0 hover:before:scale-x-100 tooltip tooltip-right ${
                        router.pathname.includes("ladders")
                          ? "text-main"
                          : "before:opacity-0 before:-translate-x-0 before:scale-x-0"
                      }`}
                      data-tooltip="Ladders"
                    >
                      <span className="icon text-2xl relative z-10 icon-podium" />
                    </button>
                  </Link>
                  <Link
                    href={`/prototype-new/valorant/stats${prototype.getURLparams()}`}
                  >
                    <button
                      type="button"
                      className={`relative w-full aspect-square grid place-content-center transition-[color,background,transform,opacity] duration-200 ease-in-out active:before:bg-ui-900 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-ui-800 before:to-ui-900 before:border-y before:border-y-ui-700 before:origin-right before:duration-500 before:transition-all before:ease-[cubic-bezier(.7,0,.3,1)] hover:before:opacity-100 hover:before:translate-x-0 hover:before:scale-x-100 tooltip tooltip-right ${
                        router.pathname.includes("stats")
                          ? "text-main"
                          : "before:opacity-0 before:-translate-x-0 before:scale-x-0"
                      }`}
                      data-tooltip="Stats"
                    >
                      <span className="icon text-2xl relative z-10 icon-statistics" />
                    </button>
                  </Link>
                  <Link href={`/prototype-new/shop${prototype.getURLparams()}`}>
                    <button
                      type="button"
                      className={`relative w-full aspect-square grid place-content-center transition-[color,background,transform,opacity] duration-200 ease-in-out active:before:bg-ui-900 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-ui-800 before:to-ui-900 before:border-y before:border-y-ui-700 before:origin-right before:duration-500 before:transition-all before:ease-[cubic-bezier(.7,0,.3,1)] hover:before:opacity-100 hover:before:translate-x-0 hover:before:scale-x-100 tooltip tooltip-right ${
                        router.pathname.includes("shop")
                          ? "text-main"
                          : "before:opacity-0 before:-translate-x-0 before:scale-x-0"
                      }`}
                      data-tooltip="Shop"
                    >
                      <span className="icon text-2xl relative z-10 icon-shop" />
                    </button>
                  </Link>
                </div>
                <Link href={`/prototype-new/home${prototype.getURLparams()}`}>
                  <div className="relative z-10 grid place-content-center aspect-square border-t border-ui-700 text-0 cursor-pointer after:transition-colors after:duration-200 after:content-[''] after:absolute after:inset-0 after:bg-ui-850/0 hover:after:bg-ui-850 active:after:bg-ui-850">
                    <span className="icon relative z-10 icon-c-question text-ui-300 text-3xl" />
                  </div>
                </Link>
              </div>

              <div className="relative flex-1 overflow-hidden bg-ui-900 max-h-screen overflow-y-auto scrollbar scrollbar-hidden">
                <div className="max-w-3xl lg:px-12 xl:px-24 pt-4 w-full">
                  {children}
                </div>
                <Footer className="child:max-w-3xl child hidden" />
              </div>
              <div className="w-60 hidden lg:block bg-ui-800 border-l border-ui-700">
                <i className="absolute z-40 lg:w-12 xl:w-24 h-screen right-0 -translate-x-60 inset-y-0 from-ui-900 to-ui-900/0 bg-gradient-to-l" />

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
