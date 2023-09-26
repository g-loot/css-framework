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
      <div className="w-full px-2 sm:px-4 relative">
        <div className="flex justify-between lg:gap-4 mx-auto">
          <div className="flex lg:flex-1 items-center">
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
            {/* <Link href={`/stryda/home${prototype.getURLparams()}`}>
              <a className="flex items-center gap-2 interactive shrink-0">
                <img
                  width="110"
                  height="auto"
                  src="https://res.cloudinary.com/gloot/image/upload/v1672130648/Stryda/logos/stryda-logo-main-white.svg"
                  alt="Stryda logo"
                  className="hidden md:block"
                />
                <span className="block md:hidden icon icon-stryda-symbol text-3xl text-main" />
              </a>
            </Link> */}
            {/*
            <Tooltip
              placement="bottom"
              tooltip={
                <div className="relative text-sm">
                  <span>Search</span>
                </div>
              }
            >
              <Link href={`/stryda/search${prototype.getURLparams()}`}>
                <a className="button button-ghost rounded-full">
                  <span className="icon icon-zoom text-ui-200" />
                </a>
              </Link>
            </Tooltip>
            */}
            <div className="hidden lg:flex gap-0 mr-2">
              <div
                className={`rounded-full bg-ui-500 ${
                  hasBack ? "" : "opacity-50 pointer-events-none"
                }`}
              >
                <button
                  type="button"
                  className={`button button-ghost rounded-full `}
                  disabled={!hasBack}
                  onClick={handleBack}
                >
                  <span className="icon icon-ctrl-left" />
                </button>
              </div>
              {/* <div
                className={`rounded-full bg-ui-500 ${
                  hasForward ? "" : "opacity-50 pointer-events-none"
                }`}
              >
                <button
                  type="button"
                  className={`button button-ghost rounded-full`}
                  disabled={!hasForward}
                  onClick={handleForward}
                >
                  <span className="icon icon-ctrl-right" />
                </button>
              </div> */}
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
                {/*
                <Link href={`/stryda/home${prototype.getURLparams()}`}>
                  <button
                    type="button"
                    className={
                      router.pathname.endsWith("stryda") ||
                      router.pathname.includes("home")
                        ? "is-active"
                        : ""
                    }
                  >
                    <span>Home</span>
                  </button>
                </Link>
                  */}
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
                        <span>Clan events</span>
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
              {/*
              <li>
                <Link href={`/stryda/shop${prototype.getURLparams()}`}>
                  <button
                    type="button"
                    className={
                      router.pathname.includes("shop") ? "is-active" : ""
                    }
                  >
                    <span>Shop</span>
                  </button>
                </Link>
              </li>
              <li>
                <Link href={`/stryda/premium${prototype.getURLparams()}`}>
                  <button
                    type="button"
                    className={
                      router.pathname.includes("premium") ? "is-active" : ""
                    }
                  >
                    <span>Premium</span>
                  </button>
                </Link>
              </li>
              <button
                onClick={openModalBuyTokens}
                type="button"
                className="tab tab-secondary"
              >
                <span>Get tokens</span>
              </button>
                  */}
            </ul>
          </div>
          <div className="flex lg:flex-1 items-center justify-center">

          </div>
          <div className="flex lg:flex-1 justify-end items-center gap-1 sm:gap-2">
            <TopbarHighlights />
            <Link href={`/stryda/search${prototype.getURLparams()}`}>
              <div className="bg-ui-500 rounded-full">
                <button
                  type="button"
                  className="button button-ghost rounded-full"
                >
                  <span className="icon icon-zoom text-ui-200" />
                </button>
              </div>
            </Link>
            <div className="dropdown dropdown-end">
              <div
                tabIndex="1"
                className="flex items-center rounded-full bg-ui-500 interactive"
              >
                <button
                  type="button"
                  className="button button-ghost rounded-full"
                >
                  <span
                    data-badge={!isEmpty ? "12" : ""}
                    className="leading-[0] after:absolute after:-right-3 after:top-1"
                  >
                    <span className="icon icon-alarm text-ui-200" />
                  </span>
                </button>
              </div>

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
                    <div className="flex items-center justify-between p-2">
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
                    <div className="max-h-[300px] overflow-y-auto scrollbar-desktop px-2 pb-2 space-y-2">
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

            <div className="dropdown dropdown-end">
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
            </div>

            <div className="dropdown dropdown-end">
              <div
                tabIndex="1"
                className="flex items-center rounded-full bg-ui-500 interactive"
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

              <div tabIndex="1" className="dropdown-content bg-ui-500 w-52 p-1">
                <ul className="menu menu-rounded menu-secondary">
                  <li>
                    <Link href={`/stryda/profile/1${prototype.getURLparams()}`}>
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
  );
}
