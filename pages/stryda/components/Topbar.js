import { useContext, useEffect, useState } from "react";

import Link from "next/link";
import Lottie from "lottie-react";
import { useRouter } from "next/router";
import LottieExplosion from "@/assets/animations/explosion_stryda_1.json";
import ModalDownloadStarted from "@/pages/stryda/modal-downloadstarted";
import Tooltip from "@/components/Tooltip/Tooltip";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import Notification from "@/components/Notification/Notification";
import { VariablesContext } from "@/contexts/variables";
import TopBarClaim from "@/components/TopBarClaim/TopBarClaim";
import ModalBuyTokens from "@/pages/stryda/wallet/modal-buytokens";
import Countdown from "@/components/Countdown/Countdown";
import Avatar from "@/components/Avatar/Avatar";
import { dataNotifications } from "@/mock-data/data-notifications";
import TopbarHighlights from "./TopbarHighlights";
import TopbarSearch from "./TopbarSearch";
import TopbarWallet from "./TopbarWallet";

export default function Topbar() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);
  const hasAds = query.ads === "true" ? true : false;
  const isEmpty = query.empty === "true" ? true : false;
  const modalDownloadStarted =
    query.modaldownloadstarted === "true" ? true : false;
  const isPremium = prototype.isPremium;
  const [hasBack, setHasBack] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (modalDownloadStarted) {
      openModalDownloadStarted();
    }
  }, [modalDownloadStarted]);

  useEffect(() => {
    if (window.history.length) {
      setHasBack(true);
    }
  }, [hasBack]);

  /*
  useEffect(() => {
    if (hasForward) {
      setHasForward(false);
    }
  }, [hasForward]);
  
  useEffect(() => {
    router.beforePopState((e) => {
      setHasForward(true);
    });
  }, []);
  
  */

  function openModalDownloadStarted() {
    uiContext.openModal(<ModalDownloadStarted></ModalDownloadStarted>);
  }

  function openModalBuyTokens() {
    uiContext.openModal(<ModalBuyTokens></ModalBuyTokens>);
  }

  function handleBack() {
    router.back();
  }
  function handleForward() {
    router.forward();
  }

  return (
    <>
      <div className="sticky top-0 z-50 bg-ui-700/95 navbar h-12 flex items-center border-b border-ui-500 shadow-xs">
        <div className="w-full px-2  relative">
          <div className="flex justify-between items-center lg:gap-4 mx-auto">
            <div className="flex justify-start items-center">
              <div className="hidden gap-2">
                <button
                  type="button"
                  className={`button button-tertiary rounded-full ${
                    hasBack ? "" : "opacity-50 pointer-events-none"
                  }`}
                  onClick={handleBack}
                >
                  <span className="icon icon-arrow-left" />
                </button>
                {/* <button
                  type="button"
                  className={`button button-tertiary rounded-full ${
                    hasForward ? "" : "opacity-50 pointer-events-none"
                  }`}
                  onClick={handleForward}
                >
                  <span className="icon icon-arrow-right" />
                </button> */}
              </div>
              <div className="hidden lg:flex gap-0 mr-2">
                <button
                  type="button"
                  className={`button button-ghost rounded-full `}
                  disabled={!hasBack}
                  onClick={handleBack}
                >
                  <span className="icon icon-arrow-left" />
                </button>
              </div>
              <div className="lg:hidden mr-2">
                <label className="switch switch-rotate button button-tertiary rounded-full">
                  <input
                    type="checkbox"
                    name="drawer-forced"
                    checked={isActive}
                    onChange={() => setIsActive(!isActive)}
                  />
                  <div className="switch-off icon icon-menu-8"></div>
                  <div className="switch-on icon icon-e-remove"></div>
                </label>
              </div>
              <ul className="hidden lg:flex tabs">
                <li>
                  <Link href={`/stryda/home${prototype.getURLparams()}`}>
                    <button
                      type="button"
                      className={`w-12 ${
                        router.pathname.endsWith("stryda") ||
                        router.pathname.includes("home")
                          ? "is-active"
                          : ""
                      }`}
                    >
                      <div className="absolute inset-0 grid place-content-center">
                        <span className="icon icon-stryda-symbol text-2xl" />
                      </div>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href={`/stryda/missions${prototype.getURLparams()}`}>
                    <button
                      type="button"
                      className={
                        router.pathname.includes("missions") ? "is-active" : ""
                      }
                    >
                      <span>Missions</span>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href={`/stryda/ladders${prototype.getURLparams()}`}>
                    <button
                      type="button"
                      className={
                        router.pathname.includes("ladders") ||
                        router.pathname.includes("clanevents")
                          ? "is-active"
                          : ""
                      }
                    >
                      <span>Competitions</span>
                      <span className="icon icon-arrow-sm-down" />
                    </button>
                  </Link>
                  <ul>
                    <li>
                      <Link href={`/stryda/ladders${prototype.getURLparams()}`}>
                        <a
                          className={
                            router.pathname.includes("ladders")
                              ? "is-active"
                              : ""
                          }
                        >
                          <span>Ladders</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/stryda/clanevents${prototype.getURLparams()}`}
                      >
                        <a
                          className={
                            router.pathname.includes("clanevents")
                              ? "is-active"
                              : ""
                          }
                        >
                          <span>Clan Events</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href={`/stryda/battlepass${prototype.getURLparams()}`}>
                    <button
                      type="button"
                      className={
                        router.pathname.includes("battlepass")
                          ? "is-active"
                          : ""
                      }
                    >
                      <span>Battle Pass</span>
                    </button>
                  </Link>
                </li>
                <li className="tab-premium">
                  <Link href={`/stryda/premium${prototype.getURLparams()}`}>
                    <button
                      type="button"
                      className={
                        router.pathname.includes("premium") ? "is-active" : ""
                      }
                    >
                      <span>Premium</span>
                      <span className="icon icon-crown text-lg" />
                    </button>
                  </Link>
                </li>
              </ul>
              <TopbarSearch />
            </div>
            <div className="flex justify-end items-center gap-1 sm:gap-2">
              <TopbarHighlights />
              <div className="flex items-center rounded-full bg-ui-500">
                <div className="z-20 dropdown dropdown-end">
                  <button
                    type="button"
                    tabIndex="1"
                    className="button button-ghost rounded-full"
                  >
                    <span
                      data-badge={!isEmpty ? "12" : ""}
                      className="leading-[0] after:absolute after:-right-3 after:top-1"
                    >
                      <span className="icon icon-alarm text-ui-200" />
                    </span>
                  </button>
                  <div
                    tabIndex="1"
                    className="dropdown-content bg-ui-500 w-[calc(100vw-100px)] sm:w-[420px] overflow-hidden rounded-xl shadow-xl"
                  >
                    {isEmpty && (
                      <div className="h-72 flex items-center justify-center text-center">
                        <div>
                          <span className="icon icon-smile text-6xl text-ui-500" />
                          <p className="text-sm text-ui-400 mt-2">
                            You&lsquo;re all caught up!
                          </p>
                          <p className="text-ui-300">
                            Check back later for new notifications.
                          </p>
                        </div>
                      </div>
                    )}
                    {!isEmpty && (
                      <>
                        <div className="flex items-center justify-between p-2 border-b border-ui-500 bg-gradient-to-b from-ui-500/25 to-ui-600">
                          <div className="form-group form-select">
                            <select id="favorite-game" className="input-sm">
                              <option defaultValue={true}>
                                Show all categories
                              </option>
                              <option>Clans</option>
                              <option>Ladders</option>
                              <option>Missions</option>
                              <option>Wallet</option>
                            </select>
                          </div>

                          <button
                            type="button"
                            className="button button-sm button-ghost"
                          >
                            <span className="icon icon-check-double" />
                            <span>Mark all as read</span>
                          </button>
                        </div>
                        <div className="max-h-[calc(100dvh-102px-1rem)] overflow-y-auto overflow-x-hidden scrollbar-desktop bg-ui-700 p-2 space-y-2">
                          {dataNotifications.map(
                            (notificationGroup, notificationGroupIndex) => (
                              <>
                                <div key={notificationGroupIndex}>
                                  <ul className="items-spaced space-y-2">
                                    {notificationGroup.notifications?.map(
                                      (notification, notificationIndex) => (
                                        <Notification
                                          key={notificationIndex}
                                          notification={notification}
                                        />
                                      )
                                    )}
                                  </ul>
                                </div>
                              </>
                            )
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <TopbarWallet />
                <div className="z-0 dropdown dropdown-end">
                  <div
                    tabIndex="1"
                    className="flex items-center rounded-full interactive pl-1"
                  >
                    <div className="avatar avatar-circle avatar-xs">
                      {prototype.getUserByID(1).shopItems.avatarFrame && (
                        <>
                          <img
                            src={
                              prototype.getShopitemByID(
                                1,
                                prototype.getUserByID(1).shopItems.avatarFrame
                              ).image
                            }
                            alt=""
                          />
                        </>
                      )}
                      <div>
                        <img
                          src={prototype.getUserByID(1).avatar}
                          alt="avatar"
                        />
                      </div>
                    </div>
                    <span className="icon icon-arrow-sm-down mx-2" />
                  </div>
                  <div
                    tabIndex="1"
                    className="dropdown-content bg-ui-500 w-52 p-1"
                  >
                    <ul className="menu menu-rounded menu-secondary">
                      <li>
                        <Link
                          href={`/stryda/profile/1${prototype.getURLparams()}`}
                        >
                          <button type="button" tabIndex="1">
                            <span className="icon icon-circle-09" />
                            <span>Profile</span>
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`/stryda/wallet${prototype.getURLparams()}`}
                        >
                          <button type="button" tabIndex="1">
                            <span className="icon icon-wallet-43" />
                            <span>Wallet</span>
                          </button>
                        </Link>
                      </li>
                      <li className="separator" />
                      <li>
                        <Link
                          href={`/stryda/profile/settings${prototype.getURLparams()}`}
                        >
                          <button type="button" tabIndex="1">
                            <span className="icon icon-cogwheel" />
                            <span>Settings</span>
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`/stryda/premium${prototype.getURLparams()}`}
                        >
                          <button type="button" tabIndex="1">
                            <span className="icon icon-crown" />
                            <span>Get Premium</span>
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`/stryda/patch-notes${prototype.getURLparams()}`}
                        >
                          <button type="button" tabIndex="1">
                            <span className="icon icon-notification" />
                            <span>Patch notes</span>
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`/stryda/recruit-a-friend/${prototype.getURLparams()}`}
                        >
                          <button type="button">
                            <span className="icon icon-b-love" />
                            <span>Recruit a friend</span>
                          </button>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`/stryda/how-it-works${prototype.getURLparams()}`}
                        >
                          <button type="button" tabIndex="1">
                            <span className="icon icon-file-article" />
                            <span>How Stryda works</span>
                          </button>
                        </Link>
                      </li>
                      <li>
                        <button
                          type="button"
                          tabIndex="1"
                          onClick={openModalDownloadStarted}
                          href="#"
                          rel="noopener noreferrer"
                        >
                          <span className="icon icon-data-download" />
                          <span>Download tracker</span>
                        </button>
                      </li>
                      <li className="separator" />
                      <li>
                        <div className="form-sm form-toggle !px-0 !py-0.5 w-full">
                          <input
                            type="checkbox"
                            name="ShowStates"
                            id="ShowStates"
                            defaultChecked={prototype.showDemo}
                            onChange={() =>
                              prototype.setShowDemo(!prototype.showDemo)
                            }
                          />
                          <label htmlFor="ShowStates">
                            Show hidden options
                          </label>
                        </div>
                      </li>
                      <li className="separator" />
                      <li>
                        <Link href={`/${prototype.getURLparams()}`}>
                          <button type="button" tabIndex="1">
                            <span className="icon icon-leave" />
                            <span>Log out</span>
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`drawer-side drawer-forced ${isActive ? "is-active" : ""}`}
      >
        <div className="pr-2 flex items-start gap-2 justify-between">
          <Link href={`/prototype/home${prototype.getURLparams()}`}>
            <a className="flex items-center gap-2 interactive m-2">
              <img
                width="110"
                height="auto"
                src="https://res.cloudinary.com/gloot/image/upload/v1672130648/Stryda/logos/stryda-logo-main-white.svg"
                alt="Stryda logo"
              />
            </a>
          </Link>
          <label className="switch switch-rotate button button-tertiary rounded-full">
            <input
              type="checkbox"
              name="drawer-forced"
              checked={isActive}
              onChange={() => setIsActive(!isActive)}
            />
            <div className="switch-off icon icon-dots-vertical"></div>
            <div className="switch-on icon icon-e-remove"></div>
          </label>
        </div>
      </div>
    </>
  );
}
