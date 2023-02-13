import { useContext, useEffect, useState } from "react";

import Link from "next/link";

import ModalDownloadStarted from "../../pages/prototype-new/modal-downloadstarted";
import { UiContext } from "../../contexts/ui";
import { usePrototypeData } from "../../contexts/prototype";
import { useRouter } from "next/router";
import Notification from "../Notification/Notification";
import { VariablesContext } from "../../contexts/variables";
import ModalBuyTokens from "../../pages/prototype-new/wallet/modal-buytokens";
import Countdown from "../Countdown/Countdown";
import ModalAvatarEdit from "../../pages/prototype-new/profile/[user_id]/modal-avataredit";
import TopBarClaimNew from "../TopBarClaim/TopBarClaimNew";
import PrototypeSideRightClan from "./PrototypeSideRightClan";
import PrototypeSideRightUser from "./PrototypeSideRightUser";
import GameIcon from "../GameIcon/GameIcon";
import PrototypeSideRightMissionsLadders from "./PrototypeSideRightMissionsLadders";

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
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const hasAds = query.ads === "true" ? true : false;
  const isEmpty = query.empty === "true" ? true : false;
  const modalDownloadStarted =
    query.modaldownloadstarted === "true" ? true : false;
  const isPremium = query.premium === "true" ? true : false;
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

  return (
    <>
      <div className="p-2 relative z-50 pt-12">
        <div className="flex gap-2 items-center justify-between mb-4 hidden">
          <Link href={`/prototype-new/search${prototype.getURLparams()}`}>
            <button
              type="button"
              className="button button-tertiary rounded-full"
            >
              <span className="icon icon-zoom text-ui-200" />
            </button>
          </Link>

          <TopBarClaimNew />
          
          <div className="dropdown dropdown-end">
            <button
              tabIndex="1"
              type="button"
              className="button button-tertiary rounded-full"
            >
              <span
                data-badge={!isEmpty ? "12" : ""}
                className="leading-[0] after:absolute after:-right-3 after:top-1 after:bg-error-300"
              >
                <span className="icon icon-alarm text-ui-200" />
              </span>
            </button>

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
                      className="button button-sm button-tertiary"
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
                        </>
                      )
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <button
              tabIndex="1"
              type="button"
              className="button button-tertiary rounded-full"
            >
              <span className="icon icon-arrow-sm-down text-ui-200" />
            </button>
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
      <PrototypeSideRightUser />
      <hr className="mt-4 mb-2" />
      <PrototypeSideRightClan />
      <hr className="mt-4 mb-2" />
      <PrototypeSideRightMissionsLadders />
    </>
  );
}
