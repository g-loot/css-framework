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
  const [hasForward, setHasForward] = useState(false);

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
    <div className="sticky top-0 z-40 bg-ui-700/95 navbar h-12 flex items-center border-b border-ui-500 shadow-xs">
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
            <div className="md:hidden">
              <label
                htmlFor="drawer-prototype"
                className="drawer-button button button-tertiary button-close"
              >
                <div className="icon icon-e-remove"></div>
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
                          router.pathname.includes("ladders") ? "is-active" : ""
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
                      router.pathname.includes("battlepass") ? "is-active" : ""
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
            {/* <Link href={`/stryda/search${prototype.getURLparams()}`}>
              <div className="bg-ui-500 rounded-full">
                <button
                  type="button"
                  className="button button-ghost rounded-full"
                >
                  <span className="icon icon-zoom text-ui-200" />
                </button>
              </div>
            </Link> */}

            {/* <div className="flex gap-x-3 items-stretch justify-center bg-ui-500 min-w-[2.25rem] h-9 xl:px-3 rounded-full">
              <div className="inline-flex xl:hidden items-center">
                <Tooltip
                  placement="bottom"
                  tooltip={
                    <div className="relative text-sm">
                      <span>View wallet</span>
                    </div>
                  }
                >
                  <Link href={`/stryda/wallet${prototype.getURLparams()}`}>
                    <div className="flex items-center">
                      <span className="icon icon-wallet-43" />
                    </div>
                  </Link>
                </Tooltip>
              </div>
              <div className="hidden xl:flex items-center gap-x-3 hoverhighlight">
                <div className="inline-flex">
                  <Tooltip
                    tooltip={
                      <div className="w-56 relative">
                        <h6 className="my-4 text-ui-100">Coins</h6>
                        <div className="absolute -top-8 -right-5 p-2">
                          <img
                            src="https://res.cloudinary.com/gloot/image/upload/v1674640634/Stryda/currencies/Reward-coin-face.png"
                            className="w-14 h-14"
                            alt=""
                          />
                          <div className="lottie-blur absolute -inset-1">
                            <Lottie
                              animationData={LottieExplosion}
                              loop={false}
                              autoplay={true}
                            />
                          </div>
                        </div>
                        <ul className="leading-tight space-y-2 mt-2">
                          <li className="flex gap-2 text-sm">
                            <div className=" w-12 uppercase">Use</div>
                            <div className="flex-1">
                              To purchase items in the Shop.
                            </div>
                          </li>
                          <li className="flex gap-2 text-sm">
                            <div className=" w-12 uppercase">Get</div>
                            <div className="flex-1">
                              From <strong>Ladder winnings</strong>.
                            </div>
                          </li>
                        </ul>
                      </div>
                    }
                  >
                    <Link href={`/stryda/wallet${prototype.getURLparams()}`}>
                      <div className="flex items-center gap-1 text-currency-1-500">
                        <span className="icon icon-20 icon-coin" />
                        <span className="">
                          {prototype.getUserByID(1)?.wallet.coins}
                        </span>
                      </div>
                    </Link>
                  </Tooltip>
                </div>
                <div className="inline-flex">
                  <Tooltip
                    tooltip={
                      <div className="w-56 relative">
                        <h6 className="my-4 text-ui-100">Token</h6>
                        <div className="absolute -top-8 -right-5 p-2">
                          <img
                            src="https://res.cloudinary.com/gloot/image/upload/v1674640634/Stryda/currencies/Reward-token-face.png"
                            className="w-14 h-14"
                            alt=""
                          />
                          <div className="lottie-blur absolute grid place-items-center -inset-1">
                            <Lottie
                              animationData={LottieExplosion}
                              loop={false}
                              autoplay={true}
                            />
                          </div>
                        </div>
                        <ul className="leading-tight space-y-2 mt-2">
                          <li className="flex gap-2 text-sm">
                            <div className=" w-12 uppercase">Use</div>
                            <div className="flex-1">To enter Ladders.</div>
                          </li>
                          <li className="flex gap-2 text-sm">
                            <div className=" w-12 uppercase">Get</div>
                            <div className="flex-1">
                              <strong>Missions</strong> or{" "}
                              <strong>buy them</strong> directly from the
                              Wallet.
                            </div>
                          </li>
                        </ul>
                      </div>
                    }
                  >
                    <Link href={`/stryda/wallet${prototype.getURLparams()}`}>
                      <div className="flex items-center gap-1 text-currency-2-500">
                        <span className="icon icon-20 icon-token" />
                        <span className="">
                          {prototype.getUserByID(1)?.wallet.tokens}
                        </span>
                      </div>
                    </Link>
                  </Tooltip>
                </div>
                <div className="inline-flex">
                  <Tooltip
                    tooltip={
                      <div className="w-56 relative">
                        <h6 className="my-4 text-ui-100">Power token</h6>
                        <div className="absolute -top-8 -right-5 p-2">
                          <img
                            src="https://res.cloudinary.com/gloot/image/upload/v1674640634/Stryda/currencies/Reward-powertoken-face.png"
                            className="w-14 h-14"
                            alt=""
                          />
                          <div className="lottie-blur absolute grid place-items-center -inset-1">
                            <Lottie
                              animationData={LottieExplosion}
                              loop={false}
                              autoplay={true}
                            />
                          </div>
                        </div>
                        <ul className="leading-tight space-y-2 mt-2">
                          <li className="flex gap-2 text-sm">
                            <div className=" w-12 uppercase">Use</div>
                            <div className="flex-1">To enter Power Plays.</div>
                          </li>
                          <li className="flex gap-2 text-sm">
                            <div className=" w-12 uppercase">Get</div>
                            <div className="flex-1">
                              <strong>Buy them</strong> directly from the
                              Wallet.
                            </div>
                          </li>
                        </ul>
                      </div>
                    }
                  >
                    <Link href={`/stryda/wallet${prototype.getURLparams()}`}>
                      <div className="flex items-center gap-1 text-currency-3-500">
                        <span className="icon icon-20 icon-powertoken" />
                        <span className="">
                          {prototype.getUserByID(1)?.wallet.powertokens}
                        </span>
                      </div>
                    </Link>
                  </Tooltip>
                </div>
              </div>
            </div> */}

            {/* <div className="dropdown dropdown-end">
              <div
                tabIndex="1"
                className="flex items-center rounded-full bg-ui-500 interactive"
              >
                <button
                  type="button"
                  className="w-9 h-9 button button-ghost rounded-full overflow-hidden"
                >
                  <div className="text-sm font-bold text-main text-center pl-px">
                    <div className="infobanner is-active">
                      <div className="infobanner-front">
                        <span className="font-bold text-xs">
                          {isPremium ? <>+165%</> : <>+15%</>}
                        </span>
                      </div>
                      <div className="infobanner-back">
                        <span className="icon icon-xp-symbol text-3xl text-main mx-auto" />
                      </div>
                    </div>
                  </div>
                </button>
              </div>

              <div
                tabIndex="1"
                className="dropdown-content bg-ui-500 w-[calc(100vw-100px)] sm:w-[300px] overflow-hidden rounded-xl shadow-xl"
              >
                <h5 className="mx-2 mt-2">XP Boosts</h5>
                <ul className="rounded-lg text-left text-sm p-2 leading-none">
                  {isPremium ? (
                    <li className="flex gap-2 py-1 items-center">
                      <div className="icon icon-e-add text-premium-500" />
                      <div className="flex-1">Premium boost</div>
                      <div className="text-right text-premium-500">+50%</div>
                    </li>
                  ) : (
                    <li className="flex gap-2 py-1 items-center text-ui-400">
                      <div className="icon icon-lock" />
                      <div className="flex-1">Premium boost</div>
                      <div className="icon icon-crown" />
                      <div className="text-right">+50%</div>
                    </li>
                  )}
                  <li className="flex gap-2 py-1 items-center">
                    <div className="icon icon-e-add text-main" />
                    <div className="flex-1">Clan boost</div>
                    <div className="text-right text-main">+10%</div>
                  </li>
                  <li className="separator mt-1 mb-0.5" />
                  <li className="flex gap-2 py-1 items-center">
                    <div className="icon icon-e-add text-main" />
                    <div className="flex-1 flex-col">
                      <div>New user boost</div>
                      <div>
                        <Countdown
                          separator={":"}
                          hasDays={true}
                          hasHours={true}
                          hasMinutes={true}
                          hasSeconds={true}
                          hasLabels={false}
                          labelsAbbr={false}
                          labelClassName=""
                          className="text-xs text-main"
                        />
                      </div>
                    </div>
                    <div className="text-right text-main">+5%</div>
                  </li>
                </ul>
              </div>
            </div> */}

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
              <div className="z-10 dropdown dropdown-end">
                <button
                  type="button"
                  tabIndex="1"
                  className="button button-ghost rounded-full"
                >
                  <span className="icon icon-wallet-43 text-ui-200" />
                </button>
                <div
                  tabIndex="1"
                  className="dropdown-content bg-ui-500 w-[calc(100vw-100px)] sm:w-[420px] overflow-hidden rounded-xl shadow-xl"
                >
                  {isEmpty && (
                    <div className="h-72 flex items-center justify-center text-center"></div>
                  )}
                  {!isEmpty && (
                    <>
                      <div className="p-2"></div>
                    </>
                  )}
                </div>
              </div>
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
                      <img src={prototype.getUserByID(1).avatar} alt="avatar" />
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
                      <Link href={`/stryda/wallet${prototype.getURLparams()}`}>
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
                      <Link href={`/stryda/premium${prototype.getURLparams()}`}>
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
                        <label htmlFor="ShowStates">Show hidden options</label>
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
  );
}
