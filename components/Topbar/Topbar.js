import { useContext, useEffect } from "react";

import Link from "next/link";
import Lottie from "lottie-react";
import LottieExplosion from "../../assets/animations/explosion-1.json";
import ModalDownloadStarted from "../../pages/prototype/modal-downloadstarted";
import Tooltip from "../Tooltip/Tooltip";
import { UiContext } from "../../contexts/ui";
import { usePrototypeData } from "../../contexts/prototype";
import { useRouter } from "next/router";
import Avatar from "../Avatar/Avatar";

const notificationsGroups = [
  {
    name: "Today",
    notifications: [
      {
        intro: "Tournaments",
        title: "Party registered",
        text: "“party name” is a full party and now registered for the tournament, be ready to play!",
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-valorant_5.webp",
        time: "2 min.",
        read: false,
      },
      {
        intro: "Tournaments",
        title: "Tournament finished",
        text: "“Tournament name” is finished, go here to see your placement (icon)",
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634597/Marketing/2022_prototype/DummyContent/missions/mission-apexlegends_3.webp",
        time: "1 day",
        read: false,
      },
      {
        intro: "Tournaments",
        title: "Tournament canceled",
        text: "”tournament name” is canceled and will not be played.",
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634597/Marketing/2022_prototype/DummyContent/missions/mission-pubg_3.webp",
        time: "2 days",
        read: true,
      },
    ],
  },
  {
    name: "2 days ago",
    notifications: [
      {
        intro: "Tournaments",
        title: "Party registered",
        text: "“party name” is a full party and now registered for the tournament, be ready to play!",
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-valorant_5.webp",
        time: "2 min.",
        read: false,
      },
      {
        intro: "Tournaments",
        title: "Tournament finished",
        text: "“Tournament name” is finished, go here to see your placement (icon)",
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634597/Marketing/2022_prototype/DummyContent/missions/mission-apexlegends_3.webp",
        time: "1 day",
        read: false,
      },
      {
        intro: "Tournaments",
        title: "Tournament canceled",
        text: "”tournament name” is canceled and will not be played.",
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634597/Marketing/2022_prototype/DummyContent/missions/mission-pubg_3.webp",
        time: "2 days",
        read: true,
      },
    ],
  },
];

export default function Topbar() {
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const hasAds = query.ads === "true" ? true : false;
  const modalDownloadStarted =
    query.modaldownloadstarted === "true" ? true : false;

  useEffect(() => {
    if (modalDownloadStarted) {
      openModalDownloadStarted();
    }
  }, [modalDownloadStarted]);

  function openModalDownloadStarted() {
    uiContext.openModal(<ModalDownloadStarted></ModalDownloadStarted>);
  }

  return (
    <div className="sticky top-0 z-50 bg-ui-800/50 navbar">
      <div className="container relative">
        <div
          className={`max-w-2xl flex gap-4 lg:gap-8 items-center px-2 sm:px-0 mx-auto ${
            hasAds ? "3xl:m-0" : ""
          }`}
        >
          <div className="w-56 flex items-center gap-2">
            <div className="block lg:hidden">
              <label
                htmlFor="drawer-prototype"
                className="drawer-button button button-sm button-tertiary rounded-full"
              >
                <div className="icon icon-menu-8"></div>
              </label>
            </div>
            <Link href="/">
              <a className="flex items-center gap-2 interactive">
                <span className="block md:hidden icon icon-stryda-symbol text-main text-3xl" />
                <img
                  className="hidden md:block"
                  width="123"
                  height="64"
                  src="https://res.cloudinary.com/gloot/image/upload/v1672130648/Stryda/logos/stryda-logo-main-white.svg"
                  alt="Stryda logo"
                />
              </a>
            </Link>
            <Tooltip
              tooltip={
                <div className="w-56 relative">
                  <h6 className="mb-3 leading-tight">
                    Welcome to the
                    <br />
                    Stryda Beta
                  </h6>
                  <div className="absolute -top-2 -right-2 p-2">
                    <span className="icon icon-stryda-symbol text-3xl text-main" />
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
                      <div className="flex-1">
                        If you encounter any bugs, glitches, lack of
                        functionality, or other problems, or if you have any
                        feedback, please reach out to us.
                      </div>
                    </li>
                  </ul>
                </div>
              }
            >
              <span className="hidden md:block px-2 py-0.5 rounded bg-ui-900/90 text-main uppercase tracking-wider">
                Beta
              </span>
            </Tooltip>
          </div>
          <div className="flex-1 flex items-center justify-end lg:justify-between">
            <div className="hidden lg:flex gap-2 items-center ml-2 xl:ml-0">
              <div className="flex space-x-3 items-center border border-ui-600 bg-ui-800/50 pr-2 rounded-full hoverhighlight">
                <div className="inline-flex">
                  <Tooltip
                    tooltip={
                      <div className="w-56 relative">
                        <h6 className="mb-3 leading-tight">Coins</h6>
                        <div className="absolute -top-3 -right-2">
                          <img
                            src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_coin.png"
                            width="50"
                            height="50"
                            alt="coins"
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
                    <div className="flex items-center">
                      <img
                        src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_coin.png"
                        width="32"
                        height="32"
                        alt="coins"
                      />
                      <span className="text-sm text-currency-1-500">
                        {prototype.getUserByID(1)?.wallet.coins}
                      </span>
                    </div>
                  </Tooltip>
                </div>
                <div className="inline-flex">
                  <Tooltip
                    tooltip={
                      <div className="w-56 relative">
                        <h6 className="mb-3 leading-tight">Token</h6>
                        <div className="absolute -top-3 -right-2">
                          <img
                            src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_token.png"
                            width="50"
                            height="50"
                            alt="tokens"
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
                    <div className="flex items-center">
                      <img
                        src="https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_token.png"
                        width="32"
                        height="32"
                        alt="tokens"
                      />
                      <span className="text-sm text-purple-500">
                        {prototype.getUserByID(1)?.wallet.tokens}
                      </span>
                    </div>
                  </Tooltip>
                </div>
                <div className="inline-flex">
                  <Tooltip
                    tooltip={
                      <div className="w-56 relative">
                        <h6 className="mb-3 leading-tight">Tickets</h6>
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
                  </Tooltip>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  type="button"
                  className="button button-claim button-sm"
                  onClick={openModalDownloadStarted}
                >
                  <span>Download tracker</span>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-end">
              
              <div className="flex justify-end items-center gap-1 sm:gap-2">
              <Tooltip
                placement="bottom"
                tooltip={
                  <div className="relative text-sm">
                    <span>Search clans</span>
                  </div>
                }
              >
                <div className="rounded-full border border-ui-700 bg-ui-800 interactive">
                  <Link
                    href={`/prototype/clans/search${prototype.getURLparams()}`}
                  >
                    <a className="button button-sm button-ghost rounded-full">
                      <span className="icon icon-zoom text-ui-200" />
                    </a>
                  </Link>
                </div>
              </Tooltip>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex="1"
                    className="flex items-center rounded-full border border-ui-700 bg-ui-800 interactive"
                  >
                    <Avatar id={1} />
                    
                  </div>

                  <div
                    tabIndex="1"
                    className="dropdown-content bg-ui-600 w-52 p-1"
                  >
                    <ul className="menu menu-rounded menu-secondary">
                      <li>
                        <Link
                          href={`/prototype/profile/1${prototype.getURLparams()}`}
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
                          href={`/prototype/profile/settings${prototype.getURLparams()}`}
                        >
                          <a tabIndex="1">
                            <span className="icon icon-cogwheel" />
                            <span>Settings</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`/prototype/profile/1${prototype.getURLparams()}`}
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
                          <span className="icon icon-cloud-data-download" />
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
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex="1"
                    className="flex items-center rounded-full border border-ui-700 bg-ui-800 interactive"
                  >
                    <button
                      type="button"
                      className="button button-sm button-ghost rounded-full"
                    >
                      <span data-badge=".">
                        <span className="icon icon-alarm text-ui-200" />
                      </span>
                    </button>
                    <span className="icon icon-arrow-sm-down mr-2" />
                  </div>

                  <div
                    tabIndex="1"
                    className="dropdown-content bg-ui-800 w-[320px] sm:w-[420px] overflow-hidden shadow-xl"
                  >
                    <div className="flex items-center justify-between mb-2 p-2">
                      <h4 className="text-2xl ml-2 pt-1">Notifications</h4>
                      <button
                        type="button"
                        className="button button-sm button-secondary"
                      >
                        <span>Settings</span>
                      </button>
                    </div>
                    <div className="max-h-[300px] overflow-y-auto scrollbar-desktop px-2 space-y-4">
                      {notificationsGroups.map(
                        (notificationGroup, notificationGroupIndex) => (
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
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
