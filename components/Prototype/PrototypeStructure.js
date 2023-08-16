import Ad from "../Ad/Ad";
import Footer from "../Footer/Footer";
import Link from "next/link";
import PrototypeHead from "./PrototypeHead";
import PrototypeLeftMenu from "./PrototypeLeftMenu";
import PrototypeLeftMenuNew from "./PrototypeLeftMenuNew";
import Topbar from "../Topbar/Topbar";
import { usePrototypeData } from "@/contexts/prototype";
import { useRouter } from "next/router";
import { VariablesContext } from "@/contexts/variables";
import { UiContext } from "@/contexts/ui";
import React, { useContext } from "react";

export default function PrototypeStructure({ children, title }) {
  const prototype = usePrototypeData();
  const { query } = useRouter();
  const uiContext = useContext(UiContext);
  const hasAds = query.ads === "true" ? true : false;
  const hasContentCard = query.contentcard === "true" ? true : false;
  const isNewStructure =
    query.newstructure === "true" || query.newstructure === undefined
      ? true
      : false;
  const variables = useContext(VariablesContext);
  return (
    <>
      {!isNewStructure && (
        <>
          <PrototypeHead title={title} />
          <div className="drawer">
            <input
              id="drawer-prototype"
              type="checkbox"
              className="drawer-toggle"
            />
            <div className="drawer-content">
              <Topbar />
              <div className="container relative">
                <div
                  className={`max-w-2xl flex lg:gap-8 mx-auto ${
                    hasAds ? "3xl:m-0" : ""
                  }`}
                >
                  <div className="w-56 hidden lg:block top-16 py-4">
                    <PrototypeLeftMenu />
                  </div>
                  <div className="flex-1 pt-4 pb-8 min-h-screen overflow-hidden">
                    {children}
                  </div>
                </div>
                {hasAds && (
                  <div className="hidden 3xl:block absolute inset-y-0 right-0 w-[260px]">
                    <div className="sticky top-[68px]">
                      <Ad width="260" height="260" />
                    </div>
                  </div>
                )}
              </div>
              <Footer />
            </div>
            <div className="drawer-side scrollbar-hidden">
              <label
                htmlFor="drawer-prototype"
                className="drawer-overlay"
              ></label>
              <aside className="w-80 bg-ui-850 border-r border-ui-700">
                <div className="sticky z-20 top-0 bg-ui-850/75 p-2 backdrop-blur-sm">
                  <label
                    htmlFor="drawer-prototype"
                    className="drawer-button button button-tertiary button-close"
                  >
                    <div className="icon icon-e-remove"></div>
                  </label>
                </div>
                <div className="px-2 pb-2">
                  <div className="rounded-lg bg-ui-850">
                    <PrototypeLeftMenu />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </>
      )}
      {isNewStructure && (
        <>
          <PrototypeHead title={title} />
          {/*
          <div className="fixed z-50 inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative animate-antoncat">
              <img
                src="https://res.cloudinary.com/gloot/image/upload/v1682078710/Stryda/demo/antoncat.gif"
                alt=""
                width="100%"
                height="auto"
              />
            </div>
          </div>
          */}
          <div className="drawer drawer-mobile drawer-framed">
            <input
              id="drawer-prototype"
              type="checkbox"
              className="drawer-toggle"
            />
            <div className="drawer-content scrollbar-hidden">
              <Topbar />
              <div className="container relative">
                <div id="alerts" className="alert-container"></div>

                <div
                  className={`max-w-2xl flex lg:gap-8 mx-auto px-0 md:px-10 xl:px-20 ${
                    hasAds ? "3xl:m-0" : ""
                  }`}
                >
                  <div className="flex-1 pt-4 pb-8 min-h-screen overflow-hidden">
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
                              Uh oh. Out of Tokens? Do not worry you do not have
                              to give up on the Ladder. You can buy more Tokens
                              whenever you need them. Visit your Wallet page to
                              take advantage of special bundle deals. Happy
                              Laddering!
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
                    {children}
                  </div>
                </div>
                {hasAds && (
                  <div className="hidden 3xl:block absolute inset-y-0 right-0 w-[260px]">
                    <div className="sticky top-[64px]">
                      <Ad width="260" height="260" />
                    </div>
                  </div>
                )}
              </div>
              <Footer className="max-w-2xl mx-auto px-0 md:px-10 xl:px-20" />
            </div>
            <div className="drawer-side scrollbar-hidden">
              <label
                htmlFor="drawer-prototype"
                className="drawer-overlay"
              ></label>
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
      )}
    </>
  );
}
