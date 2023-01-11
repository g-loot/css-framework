import { useContext, useEffect } from "react";

import Link from "next/link";
import Lottie from "lottie-react";
import LottieExplosion from "../../assets/animations/explosion_stryda_1.json";
import ModalDownloadStarted from "../../pages/prototype/modal-downloadstarted";
import Tooltip from "../Tooltip/Tooltip";
import { UiContext } from "../../contexts/ui";
import { usePrototypeData } from "../../contexts/prototype";
import { useRouter } from "next/router";
import Notification from "../Notification/Notification";
import { VariablesContext } from "../../contexts/variables";
import TopBarClaim from "../TopBarClaim/TopBarClaim";
import ModalBuyTokens from "../../pages/prototype/wallet/modal-buytokens";
import Countdown from "../Countdown/Countdown";

const notificationsGroups = [
  {
    name: "Achievements",
    notifications: [
      {
        description: "Achievement unlocked",
        type: "achievement",
        intro: "Achivement",
        title: "You unlocked an achievement!",
        text: "Congratulations on unlocking the <a href='#' class='link font-bold'>Mission achievement Level 1</a>!",
        cta: "View",
        url: "/prototype/profile/1/achievements?modalachievement=true",
        time: "2 min.",
        read: false,
      },
    ],
  },
  {
    name: "Clan",
    notifications: [
      {
        description: "Clan kickout out",
        type: "clan",
        intro: "Clan",
        title: "You have been kicked out",
        text: "You have been removed from the <a href='#' class='link font-bold'>BBL Esports</a> Clan. Find a new clan!",
        cta: "View",
        url: "/prototype/clans/",
        time: "1 min.",
      },
      {
        description: "Application declined",
        type: "clan",
        intro: "Clan",
        title: "Your application was declined",
        text: "Your application to the <a href='#' class='link font-bold'>BBL Esports</a> clan was denied.",
        time: "1 min.",
      },
      {
        description: "Application accepted",
        type: "clan",
        intro: "Clan",
        title: "Your application was accepted",
        text: "Your application to the <a href='#' class='link font-bold'>BBL Esports</a> has been accepted. Welcome to the clan!",
        cta: "View",
        url: "/prototype/clans/1",
        time: "1 min.",
      },
      {
        description: "Invitation declined",
        type: "clan",
        intro: "Clan",
        title: "Invitation declined",
        text: "<a href='#' class='link font-bold'>Harriss</a> has declined your invitation.",
        time: "1 min.",
      },
      {
        description: "Invitation accepted",
        type: "clan",
        intro: "Clan",
        title: "Invitation accepted",
        text: "<a href='#' class='link font-bold'>Harriss</a> has accepted and joined your clan.",
        cta: "View",
        url: "/prototype/clans/1",
        time: "1 min.",
      },
      {
        description: "Token recieved",
        type: "clan",
        intro: "Clan",
        title: "You received a gift!",
        text: "Your Clanmate <a href='#' class='link font-bold'>Harriss</a> has sent you <span class='whitespace-nowrap text-gold-500'><span class='translate-y-0.5 icon icon-token'></span> <span class='font-bold'>30 tokens</span></span> as a gift.",
        time: "2 min.",
        read: false,
      },
      {
        description: "Clan invite",
        type: "clan",
        intro: "Clan",
        title: "You are getting noticed!",
        text: "You got invited to the <a href='#' class='link font-bold'>BBL Esports</a> Clan a while ago and haven't answered yet. If you don’t take action, the invitation will expire on 22.10.2022.",
        cta: "Invite",
        url: "/prototype/clans/3",
        time: "1 day",
      },
      {
        description: "Player application",
        type: "clan",
        intro: "Clan",
        title: "Your clan is getting noticed!",
        text: "<a href='#' class='link font-bold'>Mr Killa</a> wants to join your Clan! Take action, otherwise the application will expire on 22.10.2022.",
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-valorant_5.webp",
        cta: "Invite",
        url: "/prototype/clans/1/applications",
        time: "2 days",
      },
    ],
  },
  {
    name: "Brawl",
    notifications: [
      {
        description: "Maintenance issue",
        type: "brawl",
        intro: "Brawl",
        title: "You've been refunded",
        text: "You’ve been refunded <span class='whitespace-nowrap text-gold-500'><span class='translate-y-0.5 icon icon-token'></span> <span class='font-bold'>30 tokens</span></span> as game.name went into maintenance and your open activations were canceled.",
        time: "4 days",
      },
      {
        description: "Brawl has ended, tokens refunded",
        type: "brawl",
        intro: "Brawl",
        title: "You've been refunded",
        text: "You’ve been refunded <span class='whitespace-nowrap text-gold-500'><span class='translate-y-0.5 icon icon-token'></span> <span class='font-bold'>30 tokens</span></span> as the brawl.name Brawl has ended and your open activations were canceled.",
        time: "5 days",
        read: true,
        accepted: true,
      },
      {
        description: "Brawl has ended, won a prize",
        type: "brawl",
        intro: "Brawl",
        title: "You won a prize!",
        text: "You finished <b class='text-ui-100'>#X</b> in the <a href='#' class='link font-bold'>brawl.name</a> Brawl and you won <span class='whitespace-nowrap text-gold-500'><span class='translate-y-0.5 icon icon-coin'></span> <span class='font-bold'>1000 coins</span></span>! Congrats!",
        time: "5 days",
        read: true,
        accepted: true,
      },
      {
        description: "Brawl has ended",
        type: "brawl",
        intro: "Brawl",
        title: "The Brawl.name has ended",
        text: "You finished <b class='text-ui-100'>#X</b>. Already looking forward to your epic comeback! ",
        time: "5 days",
        read: true,
        accepted: true,
      },
      {
        description: "Clan brawl has ended, won a prize",
        type: "brawl",
        intro: "Brawl",
        title: "Your clan won a prize!",
        text: "Your Clan finished <b class='text-ui-100'>#X</b> in the brawl.name Brawl so you’re granted <span class='whitespace-nowrap text-gold-500'><span class='translate-y-0.5 icon icon-coin'></span> <span class='font-bold'>1000 coins</span></span>! Congrats!",
        time: "5 days",
        read: true,
        accepted: true,
      },
      {
        description: "Clan brawl has ended",
        type: "brawl",
        intro: "Brawl",
        title: "The Brawl.name has ended",
        text: "Your clan finished <b class='text-ui-100'>#X</b>! Good luck next time!",
        time: "5 days",
        read: true,
        accepted: true,
      },
    ],
  },
];

export default function TopbarNew() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const variablesContext = useContext(VariablesContext);
  const hasAds = query.ads === "true" ? true : false;
  const isEmpty = query.empty === "true" ? true : false;
  const modalDownloadStarted =
    query.modaldownloadstarted === "true" ? true : false;
  const isPremium = query.premium === "true" ? true : false;

  useEffect(() => {
    if (modalDownloadStarted) {
      openModalDownloadStarted();
    }
  }, [modalDownloadStarted]);

  /*

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      e.preventDefault();
      if ((e.metaKey || e.ctrlKey) && e.code === "KeyC") {
        console.log("KeyC", variablesContext.newBrand);
        if(!variablesContext.newBrand) {
          variablesContext.brandOn();
        } else {
          variablesContext.brandOff();
        }
      }
    });
  });
  */

  function brandToggle() {
    if (!variablesContext.newBrand) {
      variablesContext.brandOn();
    } else {
      variablesContext.brandOff();
    }
  }

  function openModalDownloadStarted() {
    uiContext.openModal(<ModalDownloadStarted></ModalDownloadStarted>);
  }

  function openModalBuyTokens() {
    uiContext.openModal(<ModalBuyTokens></ModalBuyTokens>);
  }

  return (
    <div className="sticky top-0 z-50 bg-ui-850/90 navbar h-12 flex items-center border-b border-ui-700">
      <div className="container relative">
        <div
          className={`flex lg:gap-8 mx-auto px-2  ${hasAds ? "3xl:m-0" : ""}`}
        >
          <div className="flex-1 flex items-center justify-between">
            <div className="flex items-center">
              <div className="block lg:hidden">
                <label
                  htmlFor="drawer-prototype"
                  className="drawer-button button button-sm button-tertiary rounded-full"
                >
                  <div className="icon icon-menu-8 text-ui-200"></div>
                </label>
              </div>
              <ul className="hidden lg:flex tabs tabs-secondary overflow-visible">
                <li>
                  <Link href={`/prototype/home${prototype.getURLparams()}`}>
                    <a
                      className={` ${
                        router.pathname.endsWith("prototype") ? "is-active" : ""
                      } ${router.pathname.includes("home") ? "is-active" : ""}`}
                    >
                      <span className="text-sm uppercase">Home</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={`/prototype/shop${prototype.getURLparams()}`}>
                    <a
                      className={` ${
                        router.pathname.includes("shop") ? "is-active" : ""
                      }`}
                    >
                      <span className="text-sm uppercase">Shop</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={`/prototype/premium${prototype.getURLparams()}`}>
                    <a
                      className={` ${
                        router.pathname.includes("premium") ? "is-active" : ""
                      }`}
                    >
                      <span className="text-sm uppercase">Premium</span>
                    </a>
                  </Link>
                </li>
                <button
                  onClick={openModalBuyTokens}
                  type="button"
                  className="tab tab-secondary"
                >
                  <span>Get tokens</span>
                </button>
                {/*
                  <li>
                    <Link
                      href={`/prototype/tracker${prototype.getURLparams()}`}
                    >
                      <a
                        className={` ${
                          router.pathname.includes("tracker") ? "is-active" : ""
                        }`}
                      >
                        <div className="flex gap-2 items-center">
                          <span className="icon icon-data-download" />
                          <span className="text-sm uppercase">
                            Download tracker
                          </span>
                        </div>
                      </a>
                    </Link>
                  </li>
                      */}
              </ul>

              <TopBarClaim />
            </div>
            <div className="flex justify-end items-center gap-1 sm:gap-2">
              <div className="dropdown dropdown-center md:dropdown-end">
                <div
                  tabIndex="1"
                  className="flex items-center rounded-full bg-ui-700 interactive"
                >
                  <button
                    type="button"
                    className="w-[34px] button button-ghost rounded-full"
                  >
                    <div className="pointer-events-none absolute -inset-1 !m-0 rounded-full">
                      <i
                        className="absolute inset-px rounded-full border border-main/40 animate-pulse"
                        style={{ animationDuration: "4s" }}
                      />
                    </div>
                    <div className="text-sm font-bold text-ui-200 text-center pl-px">
                      <div className="infobanner is-active">
                        <div className="infobanner-front">
                          <span className="font-bold text-xs">{isPremium ? <>+165%</> : <>+15%</>}</span>
                        </div>
                        <div className="infobanner-back">
                          <span className="icon icon-lightning text-main mx-auto" />
                        </div>
                      </div>
                    </div>
                  </button>
                </div>

                <div
                  tabIndex="1"
                  className="dropdown-content bg-ui-700 w-[calc(100vw-100px)] sm:w-[300px] overflow-hidden rounded-xl shadow-xl"
                >
                  <h5 className="mx-2 mt-2">
                    XP Boosts
                  </h5>
                  <ul className="rounded-lg text-left text-sm p-2 leading-none">
                    {isPremium ? (
                      <li className="flex gap-2 py-1 items-center">
                        <div className="icon-20 icon icon-lightning text-premium-500" />
                        <div className="flex-1">Premium boost</div>
                        <div className="text-right text-premium-500">+50%</div>
                      </li>
                    ) : (
                      <li className="flex gap-2 py-1 items-center text-ui-400">
                        <div className="icon-20 icon icon-lightning" />
                        <div className="flex-1 line-through">Premium boost</div>
                        <div className="text-right line-through">+50%</div>
                      </li>
                    )}
                    <li className="flex gap-2 py-1 items-center">
                      <div className="icon-20 icon icon-lightning text-main" />
                      <div className="flex-1">Clan boost</div>
                      <div className="text-right text-main">
                        +10%
                      </div>
                    </li>
                    <li className="separator bg-ui-600" />
                    <li className="flex gap-2 py-1 items-center">
                      <div className="icon-20 icon icon-lightning text-main" />
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

              <Tooltip
                placement="bottom"
                tooltip={
                  <div className="relative text-sm">
                    <span>Search</span>
                  </div>
                }
              >
                <div className="rounded-full bg-ui-700 interactive">
                  <Link href={`/prototype/search${prototype.getURLparams()}`}>
                    <a className="button button-ghost rounded-full">
                      <span className="icon icon-zoom text-ui-200" />
                    </a>
                  </Link>
                </div>
              </Tooltip>

              <div className="flex gap-x-3 items-stretch justify-center bg-ui-700 min-w-[2.25rem] h-9 xl:px-3 rounded-full">
                <div className="inline-flex xl:hidden items-center">
                  <Tooltip
                    placement="bottom"
                    tooltip={
                      <div className="relative text-sm">
                        <span>View wallet</span>
                      </div>
                    }
                  >
                    <Link href={`/prototype/wallet${prototype.getURLparams()}`}>
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
                          <h6 className="mb-3 text-ui-100">Coins</h6>
                          <div className="absolute -top-6 -right-6 p-2">
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1673279976/Stryda/currencies/Reward-coin-face.png"
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
                          <ul className="leading-tight space-y-2">
                            <li className="flex gap-2 text-sm">
                              <div className=" w-12 uppercase">Use</div>
                              <div className="flex-1">
                                To purchase items in the Shop.
                              </div>
                            </li>
                            <li className="flex gap-2 text-sm">
                              <div className=" w-12 uppercase">Get</div>
                              <div className="flex-1">
                                From <strong>Daily Login</strong> Streak and{" "}
                                <strong>Weekly Brawl winnings</strong>.
                              </div>
                            </li>
                          </ul>
                        </div>
                      }
                    >
                      <Link
                        href={`/prototype/wallet${prototype.getURLparams()}`}
                      >
                        <div className="flex items-center gap-1 text-gold-500">
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
                          <h6 className="mb-3 text-ui-100">Token</h6>
                          <div className="absolute -top-6 -right-6 p-2">
                            <img
                              src="https://res.cloudinary.com/gloot/image/upload/v1673279976/Stryda/currencies/Reward-token-face.png"
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
                          <ul className="leading-tight space-y-2">
                            <li className="flex gap-2 text-sm">
                              <div className=" w-12 uppercase">Use</div>
                              <div className="flex-1">
                                To enter Weekly Brawls.
                              </div>
                            </li>
                            <li className="flex gap-2 text-sm">
                              <div className=" w-12 uppercase">Get</div>
                              <div className="flex-1">
                                <strong>Missions, Daily Login Streak</strong> or{" "}
                                <strong>buy them</strong> directly from the
                                Wallet.
                              </div>
                            </li>
                          </ul>
                        </div>
                      }
                    >
                      <Link
                        href={`/prototype/wallet${prototype.getURLparams()}`}
                      >
                        <div className="flex items-center gap-1 text-gold-500">
                          <span className="icon icon-20 icon-token" />
                          <span className="">
                            {prototype.getUserByID(1)?.wallet.tokens}
                          </span>
                        </div>
                      </Link>
                    </Tooltip>
                  </div>
                </div>
                {/*
                <div className="inline-flex">
                  <Tooltip
                    tooltip={
                      <div className="w-56 relative">
                        <h6 className="mb-3 text-ui-100">Tickets</h6>
                        <div className="absolute -top-3 -right-2">
                          <img
                            src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_tikethorizontal.png"
                            width="50"
                            height="50"
                            alt="tickets"
                            className=""
                          />
                          <div className="lottie-blur absolute -inset-1">
                            <Lottie
                              animationData={LottieExplosion}
                              loop={false}
                              autoplay={true}
                            />
                          </div>
                        </div>
                        <ul className="leading-tight space-y-2">
                          <li className="flex gap-2 text-sm">
                            <div className=" w-12 uppercase">Use</div>
                            <div className="flex-1">
                              To enter <strong>Monthly Tournaments</strong>.
                            </div>
                          </li>
                          <li className="flex gap-2 text-sm">
                            <div className=" w-12 uppercase">Get</div>
                            <div className="flex-1">
                              From <strong>Weekly Brawls</strong> winnings.
                            </div>
                          </li>
                        </ul>
                      </div>
                    }
                  >
                    <Link href={`/prototype/wallet${prototype.getURLparams()}`}>
                      <div className="flex items-center">
                        <img
                          src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_tikethorizontal.png"
                          width="32"
                          height="32"
                          alt="tickets"
                        />
                        <span className="text-sm ml-1 text-bronze-500">
                          {prototype.getUserByID(1)?.wallet.tickets}
                        </span>
                      </div>
                    </Link>
                  </Tooltip>
                </div>
                  */}
              </div>

              <div className="dropdown dropdown-end">
                <div
                  tabIndex="1"
                  className="flex items-center rounded-full bg-ui-700 interactive"
                >
                  <button
                    type="button"
                    className="button button-ghost rounded-full"
                  >
                    <span
                      data-badge={!isEmpty ? "12" : ""}
                      className="leading-[0] after:absolute after:-right-3 after:top-1 after:bg-error-300"
                    >
                      <span className="icon icon-alarm text-ui-200" />
                    </span>
                  </button>
                </div>

                <div
                  tabIndex="1"
                  className="dropdown-content bg-ui-700 w-[calc(100vw-100px)] sm:w-[420px] overflow-hidden rounded-xl shadow-xl"
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
                            <option selected>Show all categories</option>
                            <option>Clans</option>
                            <option>Brawls</option>
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
                        {notificationsGroups.map(
                          (notificationGroup, notificationGroupIndex) => (
                            <>
                              <div key={notificationGroupIndex}>
                                {/*
                                {notificationsGroups.length > 1 && (
                                  <h5 className="px-2 font-body uppercase text-ui-300 text-sm font-normal not-italic mb-2">
                                    {notificationGroup.name}
                                  </h5>
                                )}
                                */}
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
                              {/*
                        <div key={notificationGroupIndex}>
                          <h5 className="px-2 text-ui-300 text-sm mb-2">
                            {notificationGroup.name}
                          </h5>
                          <ul className="items-spaced space-y-2">
                            {notificationGroup.notifications?.map(
                              (notification, notificationIndex) => (
                                <Link
                                  key={notificationIndex}
                                  href={`/prototype/wallet${prototype.getURLparams()}`}
                                >
                                  <li
                                    className={`item rounded-xl item-interactive relative surface surface-ui-600 hover:opacity-50 ${
                                      notification.read ? "opacity-25" : ""
                                    }`}
                                  >
                                    <div className="item-image">
                                      <div className="avatar avatar-square avatar-simple avatar-md">
                                        <div>
                                          <img src={notification.image} />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="item-body leading-tight">
                                      <div className="text-ui-300 text-sm leading-tight">
                                        {notification.intro}
                                      </div>
                                      <div className="item-title text-ui-100 text-lg my-1">
                                        {notification.title}
                                      </div>
                                      <div className="text-ui-300 text-sm leading-tight">
                                        {notification.text}
                                      </div>
                                    </div>
                                    <div className="absolute top-2 right-4">
                                      <div className=" flex items-center justify-end gap-1">
                                        <div className="text-xs text-ui-300">
                                          {notification.time}
                                        </div>
                                        <i className="badge bg-error-500" />
                                      </div>
                                    </div>
                                  </li>
                                </Link>
                              )
                            )}
                          </ul>
                        </div>
                        */}
                            </>
                          )
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="dropdown dropdown-end">
                <div
                  tabIndex="1"
                  className="flex items-center rounded-full bg-ui-700 interactive"
                >
                  <div className="avatar avatar-simple avatar-circle avatar-xs">
                    <div>
                      <img
                        src={prototype.getUserByID(1)?.avatar}
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
                      <Link
                        href={`/prototype/profile/1${
                          hasAds ? "&ads=true" : ""
                        }`}
                      >
                        <a tabIndex="1">
                          <span className="icon icon-circle-09" />
                          <span>Profile</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/prototype/wallet${prototype.getURLparams()}`}
                      >
                        <a tabIndex="1">
                          <span className="icon icon-wallet-43" />
                          <span>Wallet</span>
                        </a>
                      </Link>
                    </li>
                    <li className="separator"></li>
                    <li>
                      <Link
                        href={`/prototype/profile/settings${
                          hasAds ? "&ads=true" : ""
                        }`}
                      >
                        <a tabIndex="1">
                          <span className="icon icon-cogwheel" />
                          <span>Settings</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/prototype/how-it-works${
                          hasAds ? "&ads=true" : ""
                        }`}
                      >
                        <a tabIndex="1">
                          <span className="icon icon-file-article" />
                          <span>How Stryda works</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <a
                        tabIndex="1"
                        onClick={openModalDownloadStarted}
                        href="#"
                        rel="noopener noreferrer"
                      >
                        <span className="icon icon-data-download" />
                        <span>Download tracker</span>
                      </a>
                    </li>
                    <li className="separator"></li>
                    <li>
                      <Link href={`/`}>
                        <a tabIndex="1">
                          <span className="icon icon-leave" />
                          <span>Log out</span>
                        </a>
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
