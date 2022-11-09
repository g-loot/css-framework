import Accordion from "../../components/Accordion/Accordion";
import React from "react";
import { getLayout } from "../../components/DesignSystem/DSLayout";
import Link from "next/link";

const notificationsGroups = [
  {
    name: "New",
    notifications: [
      {
        type: "clan",
        intro: "Clan",
        title: "Clan invite",
        text: "<a href='#' class='link font-bold'>augieaugie</a> has invited you to join his clan <a href='#' class='link font-bold'>[CHA] We are the Champions</a>.",
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-valorant_5.webp",
        time: "2 min.",
        read: false,
        accepted: undefined,
      },
      {
        type: "clan",
        intro: "Clan",
        title: "Clan invite",
        text: "<a href='#' class='link font-bold'>augieaugie</a> has invited you to join his clan <a href='#' class='link font-bold'>[CHA] We are the Champions</a>.",
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634597/Marketing/2022_prototype/DummyContent/missions/mission-apexlegends_3.webp",
        time: "1 day",
        read: true,
        accepted: true,
      },
      {
        type: "clan",
        intro: "Clan",
        title: "Clan invite",
        text: "<a href='#' class='link font-bold'>friendlyfire</a> has invited you to join his clan <a href='#' class='link font-bold'>[MAL] Maltese falcons</a>.",
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-valorant_5.webp",
        time: "2 days",
        read: true,
        accepted: false,
      },
      {
        type: "clan",
        intro: "Clan",
        title: "Clan invite",
        text: "<a href='#' class='link font-bold'>augieaugie</a> has invited you to join his clan <a href='#' class='link font-bold'>[CHA] We are the Champions</a>.",
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-valorant_5.webp",
        time: "4 days",
        read: true,
        accepted: undefined,
      },
      {
        type: "clan",
        intro: "Clan",
        title: "Clan invite",
        text: "<a href='#' class='link font-bold'>augieaugie</a> has invited you to join his clan <a href='#' class='link font-bold'>[CHA] We are the Champions</a>.",
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634597/Marketing/2022_prototype/DummyContent/missions/mission-apexlegends_3.webp",
        time: "5 days",
        read: true,
        accepted: true,
      },
    ],
  },
];

const DSpage = () => {
  return (
    <>
      <h1 className="mb-2">Notifications</h1>

      {/* Showdown */}
      <div className="mb-12" id="showdown">
        <h2 className="h3 mb-3">Showdown</h2>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
          {notificationsGroups.map(
            (notificationGroup, notificationGroupIndex) => (
              <>
                <div key={notificationGroupIndex}>
                  {notificationsGroups.length > 1 && (
                    <h5 className="px-2 font-body uppercase text-ui-300 text-sm font-normal not-italic mb-2">
                      {notificationGroup.name}
                    </h5>
                  )}
                  <ul className="items-spaced space-y-2">
                    {notificationGroup.notifications?.map(
                      (notification, notificationIndex) => (
                        <li
                          key={notificationIndex}
                          className={`rounded-lg relative surface  shadow-md ${
                            notification.read
                              ? "surface-ui-700 opacity-75"
                              : "surface-ui-600"
                          }`}
                        >
                          {!notification.read && (
                            <i
                              className={`absolute top-2 right-2 badge bg-error-300`}
                            />
                          )}

                          <div className="flex items-center justify-between p-2 pr-6 gap-2">
                            <div className="rounded w-7 h-7 bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
                              {notification.type === "clan" && (
                                <span className="icon icon-multiple-12 text-ui-300" />
                              )}
                              {notification.type === "game" && (
                                <span
                                  className={`icon icon-game-${
                                    prototype.getGameBySlug(notification.game)
                                      .slug
                                  }-symbol text-game-${
                                    prototype.getGameBySlug(notification.game)
                                      .slug
                                  }`}
                                />
                              )}
                            </div>
                            <div className="flex-1 flex items-baseline justify-between">
                              <div className="text-ui-300 text-sm">
                                {notification.intro}
                              </div>
                              <div className="text-xs text-ui-300">
                                {notification.time}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col md:flex-row items-stretch px-2 pb-2 gap-4">
                            <div className="flex-1">
                              <h6 className="font-body uppercase text-sm font-bold not-italic leading-none mb-2">
                                {notification.title}
                              </h6>
                              <p
                                className="text-ui-300 text-sm leading-tight"
                                dangerouslySetInnerHTML={{
                                  __html: notification.text,
                                }}
                              />
                            </div>
                            <div className="md:w-20 flex flex-row md:flex-col md:justify-end gap-2 leading-none text-center">
                              {notification.accepted === undefined && (
                                <>
                                  <button
                                    type="button"
                                    className="button button-secondary button-xs md:w-full"
                                  >
                                    <span>Decline</span>
                                  </button>
                                  <button
                                    type="button"
                                    className="button button-primary button-xs md:w-full"
                                  >
                                    <span>Accept</span>
                                  </button>
                                </>
                              )}
                              {notification.accepted === true && (
                                <>
                                  <span className="text-main text-xl icon icon-check" />
                                  <span className="text-main text-xs mb-1">
                                    Invitation accepted
                                  </span>
                                </>
                              )}
                              {notification.accepted === false && (
                                <>
                                  <span className="text-error-300 text-xl icon icon-e-remove" />
                                  <span className="text-error-300 text-xs mb-1">
                                    Invitation declined
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                          <div className="item-body leading-tight"></div>
                          <div className="absolute top-2 right-4"></div>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </>
            )
          )}
          </div>
          <div className="flex-1">
              <iframe
                className="rounded"
                width="100%"
                height="300"
                src="//jsfiddle.net/augustin_hiebel/w32p0hLf/embedded/html/dark/?bodyColor=333366&menuColor=1F1F42&fontColor=FFFFFF&accentColor=13F094"
              ></iframe>
            </div>
        </div>
      </div>
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
