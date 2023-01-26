import { useContext, useEffect, useState } from "react";

import Link from "next/link";
import Lottie from "lottie-react";
import LottieExplosion from "../../assets/animations/explosion_stryda_1.json";
import ModalDownloadStarted from "../../pages/prototype-new/modal-downloadstarted";
import Tooltip from "../Tooltip/Tooltip";
import { UiContext } from "../../contexts/ui";
import { usePrototypeData } from "../../contexts/prototype";
import { useRouter } from "next/router";
import Notification from "../Notification/Notification";
import { VariablesContext } from "../../contexts/variables";
import TopBarClaim from "../TopBarClaim/TopBarClaim";
import ModalBuyTokens from "../../pages/prototype-new/wallet/modal-buytokens";
import Countdown from "../Countdown/Countdown";
import Avatar from "../Avatar/Avatar";
import ModalAvatarEdit from "../../pages/prototype-new/profile/[user_id]/modal-avataredit";
import GameIcon from "../GameIcon/GameIcon";

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
        url: "/prototype-new/profile/1/achievements?modalachievement=true",
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
        url: "/prototype-new/clans/",
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
        url: "/prototype-new/clans/1",
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
        url: "/prototype-new/clans/1",
        time: "1 min.",
      },
      {
        description: "Token recieved",
        type: "clan",
        intro: "Clan",
        title: "You received a gift!",
        text: "Your Clanmate <a href='#' class='link font-bold'>Harriss</a> has sent you <span class='whitespace-nowrap text-currency-2-500'><span class='translate-y-0.5 icon icon-token'></span> <span class='font-bold'>30 tokens</span></span> as a gift.",
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
        url: "/prototype-new/clans/3",
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
        url: "/prototype-new/clans/1/applications",
        time: "2 days",
      },
    ],
  },
  {
    name: "Ladder",
    notifications: [
      {
        description: "Maintenance issue",
        type: "ladder",
        intro: "Ladder",
        title: "You've been refunded",
        text: "You’ve been refunded <span class='whitespace-nowrap text-currency-2-500'><span class='translate-y-0.5 icon icon-token'></span> <span class='font-bold'>30 tokens</span></span> as game.name went into maintenance and your open activations were canceled.",
        time: "4 days",
      },
      {
        description: "Ladder has ended, tokens refunded",
        type: "ladder",
        intro: "Ladder",
        title: "You've been refunded",
        text: "You’ve been refunded <span class='whitespace-nowrap text-currency-2-500'><span class='translate-y-0.5 icon icon-token'></span> <span class='font-bold'>30 tokens</span></span> as the ladder.name Ladder has ended and your open activations were canceled.",
        time: "5 days",
        read: true,
        accepted: true,
      },
      {
        description: "Ladder has ended, won a prize",
        type: "ladder",
        intro: "Ladder",
        title: "You won a prize!",
        text: "You finished <b class='text-ui-100'>#X</b> in the <a href='#' class='link font-bold'>ladder.name</a> Ladder and you won <span class='whitespace-nowrap text-currency-1-500'><span class='translate-y-0.5 icon icon-coin'></span> <span class='font-bold'>1000 coins</span></span>! Congrats!",
        time: "5 days",
        read: true,
        accepted: true,
      },
      {
        description: "Ladder has ended",
        type: "ladder",
        intro: "Ladder",
        title: "The Ladder.name has ended",
        text: "You finished <b class='text-ui-100'>#X</b>. Already looking forward to your epic comeback! ",
        time: "5 days",
        read: true,
        accepted: true,
      },
      {
        description: "Clan ladder has ended, won a prize",
        type: "ladder",
        intro: "Ladder",
        title: "Your clan won a prize!",
        text: "Your Clan finished <b class='text-ui-100'>#X</b> in the ladder.name Ladder so you’re granted <span class='whitespace-nowrap text-currency-1-500'><span class='translate-y-0.5 icon icon-coin'></span> <span class='font-bold'>1000 coins</span></span>! Congrats!",
        time: "5 days",
        read: true,
        accepted: true,
      },
      {
        description: "Clan ladder has ended",
        type: "ladder",
        intro: "Ladder",
        title: "The Ladder.name has ended",
        text: "Your clan finished <b class='text-ui-100'>#X</b>! Good luck next time!",
        time: "5 days",
        read: true,
        accepted: true,
      },
    ],
  },
];

export default function PrototypeSideRight() {
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
  const hasAvatarFrame = query.avatarframe || false;
  const [avatarFrame, setAvatarFrame] = useState(false);
  const modalAvatarEdit = query.modalavataredit === "true" ? true : false;

  useEffect(() => {
    if (modalDownloadStarted) {
      openModalDownloadStarted();
    }
  }, [modalDownloadStarted]);

  function openModalDownloadStarted() {
    uiContext.openModal(<ModalDownloadStarted></ModalDownloadStarted>);
  }

  function handleSearch() {
    window.location.href = `/prototype-new/search${prototype.getURLparams()}`;
  }

  function openModalBuyTokens() {
    uiContext.openModal(<ModalBuyTokens></ModalBuyTokens>);
  }

  useEffect(() => {
    if (hasAvatarFrame) {
      setAvatarFrame(prototype.getShopitemByID(1, hasAvatarFrame));
    }
  }, []);

  useEffect(() => {
    if (modalAvatarEdit) {
      openModalAvatarEdit(1);
    }
  }, [modalAvatarEdit]);

  function openModalAvatarEdit(id) {
    uiContext.openModal(<ModalAvatarEdit id={id} />);
  }

  return (
    <>
      <div className="p-2">
        <div className="flex gap-2 items-center">
          <div className="form-group">
            <div className="input-group">
              <button role="button" className="button button-ghost">
                <span className="icon icon-zoom" />
              </button>
              <input
                onFocus={handleSearch}
                type="text"
                name="search-field"
                id="search-field"
                className="input-sm !rounded-full"
                placeHolder="search"
              />
            </div>
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
                                  href={`/prototype-new/wallet${prototype.getURLparams()}`}
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
              <button
                type="button"
                className="button button-ghost rounded-full"
              >
                <span className="icon icon-arrow-sm-down text-ui-200" />
              </button>
            </div>

            <div tabIndex="1" className="dropdown-content bg-ui-600 w-52 p-1">
              <ul className="menu menu-rounded menu-secondary">
                <li>
                  <Link
                    href={`/prototype-new/profile/1${
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
                    href={`/prototype-new/wallet${prototype.getURLparams()}`}
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
                    href={`/prototype-new/profile/settings${
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
                    href={`/prototype-new/how-it-works${
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
      <div className="space-y-2 px-2">
        <div className="grid place-content-center">
          <div className="relative">
            <div
              className={`avatar avatar-xl avatar-circle ${
                prototype.getUserByID(1).isPremium ? "avatar-premium" : ""
              }`}
            >
              {avatarFrame && <img src={avatarFrame.image} alt="" />}
              <div>
                <img src={prototype.getUserByID(1).avatar} alt="avatar" />
              </div>
            </div>
            <button
              onClick={openModalAvatarEdit.bind(this, hasAvatarFrame)}
              type="button"
              className="button button-tertiary rounded-full absolute z-20 bottom-0 right-0"
            >
              <span className="icon icon-pen-2" />
            </button>
          </div>
        </div>

        <div
          className={`text-center pt-2 ${
            prototype.getUserByID(1).isPremium ? "text-premium-500" : ""
          }`}
        >
          {prototype.getUserByID(1).nickname}
        </div>
       
        <div className="flex justify-center gap-1">
          {prototype.getUserByID(1).games?.map((game, gameIndex) => (
            <div key={game.id} className="cursor-pointer p-1 flex items-center justify-center">
              <span
                className={`icon text-xl ${
                  prototype.getGameByID(game).slug === "apexlegends"
                    ? "icon-game-apexlegends-symbol text-game-apexlegends"
                    : ""
                } ${
                  prototype.getGameByID(game).slug === "csgo"
                    ? "icon-game-csgo-symbol text-game-csgo"
                    : ""
                }  ${
                  prototype.getGameByID(game).slug === "dota2"
                    ? "icon-game-dota2-symbol text-game-dota2"
                    : ""
                }  ${
                  prototype.getGameByID(game).slug === "leagueoflegends"
                    ? "icon-game-leagueoflegends-symbol text-game-leagueoflegends"
                    : ""
                }  ${
                  prototype.getGameByID(game).slug === "rocketleague"
                    ? "icon-game-rocketleague-symbol text-game-rocketleague"
                    : ""
                } ${
                  prototype.getGameByID(game).slug === "pubg"
                    ? "icon-game-pubg-symbol text-game-pubg"
                    : ""
                }  ${
                  prototype.getGameByID(game).slug === "valorant"
                    ? "icon-game-valorant-symbol text-game-valorant"
                    : ""
                }`}
              />
            </div>
          ))}
        </div>
        <div className="">
          <div className="rounded-full py-1 px-2 bg-ui-700 flex items-center justify-center gap-x-3 hoverhighlight mx-auto">
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
                          From <strong>Daily Login</strong> Streak and{" "}
                          <strong>Weekly Ladder winnings</strong>.
                        </div>
                      </li>
                    </ul>
                  </div>
                }
              >
                <Link href={`/prototype-new/wallet${prototype.getURLparams()}`}>
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
                        <div className="flex-1">To enter Weekly Ladders.</div>
                      </li>
                      <li className="flex gap-2 text-sm">
                        <div className=" w-12 uppercase">Get</div>
                        <div className="flex-1">
                          <strong>Missions, Daily Login Streak</strong> or{" "}
                          <strong>buy them</strong> directly from the Wallet.
                        </div>
                      </li>
                    </ul>
                  </div>
                }
              >
                <Link href={`/prototype-new/wallet${prototype.getURLparams()}`}>
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
                          <strong>Buy them</strong> directly from the Wallet.
                        </div>
                      </li>
                    </ul>
                  </div>
                }
              >
                <Link href={`/prototype-new/wallet${prototype.getURLparams()}`}>
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
        </div>
        <div className="text-center">
          <Link href="/prototype-new/profile/1">
            <button type="button" className="button button-secondary button-sm w-full">
              <span>View profile</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
