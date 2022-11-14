import Accordion from "../../components/Accordion/Accordion";
import React from "react";
import { getLayout } from "../../components/DesignSystem/DSLayout";
import Link from "next/link";
import Notification from "../../components/Notification/Notification";

const notificationsGroups = [
  {
    name: "Clan",
    notifications: [
      {
        description: "Token recieved",
        type: "clan",
        intro: "Clan",
        title: "You received a gift",
        text: "<a href='#' class='link font-bold'>Harriss</a> a member of your Clan <a href='#' class='link font-bold'>TeamClash</a> is sending you <span class='whitespace-nowrap'><img src='https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_token.png' alt='' class='w-7 h-7 -my-1 -mr-0.5 inline drop-shadow-sm' /> <span class='font-bold text-purple-500'>30 tokens</span></span> as a gift.",
        time: "2 min.",
        read: false,
      },
      {
        description: "Clan invite",
        type: "clan",
        intro: "Clan",
        title: "You are getting noticed!",
        text: "<a href='#' class='link font-bold'>Harriss</a> MayorPain the Leader of Clan <a href='#' class='link font-bold'>TeamClash</a> invited you to join their Clan, and you haven't answered yet. If you do nothing, the invitation will expire on 22.10.2022..",
        cta: "Invite",
        time: "1 day",
      },
      {
        description: "Player application",
        type: "clan",
        intro: "Clan",
        title: "Your clan is getting noticed!",
        text: "<a href='#' class='link font-bold'>Harriss</a> wants to join your Clan <a href='#' class='link font-bold'>TeamClash</a>, and you haven't answered yet. If you do nothing, the invitation will expire on 22.10.2022..",
        image:
          "https://res.cloudinary.com/gloot/image/upload/v1657634601/Marketing/2022_prototype/DummyContent/missions/mission-valorant_5.webp",
        cta: "Invite",
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
        title: "Maintenance issue",
        text: "You have been refunded <span class='whitespace-nowrap'><img src='https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_token.png' alt='' class='w-7 h-7 -my-1 -mr-0.5 inline drop-shadow-sm' /> <span class='font-bold text-purple-500'>30 tokens</span></span> game.name went into maintenance and your open activations were cancelled.",
        time: "4 days",
      },
      {
        description: "Brawl has ended, tokens refunded",
        type: "brawl",
        intro: "Brawl",
        title: "The Brawl.name has ended",
        text: "You have been refunded <span class='whitespace-nowrap'><img src='https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_token.png' alt='' class='w-7 h-7 -my-1 -mr-0.5 inline drop-shadow-sm' /> <span class='font-bold text-purple-500'>30 tokens</span></span> has ended and your open activations were cancelled.",
        time: "5 days",
        read: true,
        accepted: true,
      },
      {
        description: "Brawl has ended, won a prize",
        type: "brawl",
        intro: "Brawl",
        title: "You won a price",
        text: "<a href='#' class='link font-bold'>brawl.name</a> has ended and you finished <b class='text-ui-100'>#X</b>. You won <span class='whitespace-nowrap'><img src='https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_coin.png' alt='' class='w-7 h-7 -my-1 -mr-0.5 inline drop-shadow-sm' /> <span class='font-bold text-gold-500'>1000 coins</span></span>",
        time: "5 days",
        read: true,
        accepted: true,
      },
      {
        description: "Brawl has ended",
        type: "brawl",
        intro: "Brawl",
        title: "The Brawl.name has ended",
        text: "<a href='#' class='link font-bold'>brawl.name</a> has ended and you finished <b class='text-ui-100'>#X</b>. Better luck next time.",
        time: "5 days",
        read: true,
        accepted: true,
      },
      {
        description: "Clan brawl has ended, won a prize",
        type: "brawl",
        intro: "Brawl",
        title: "Your clan won a price",
        text: "<a href='#' class='link font-bold'>brawl.name</a> has ended and your clan finished <b class='text-ui-100'>#X</b>. You won <span class='whitespace-nowrap'><img src='https://res.cloudinary.com/gloot/image/upload/v1638282344/Marketing/202109_gloot2/Square_coin.png' alt='' class='w-7 h-7 -my-1 -mr-0.5 inline drop-shadow-sm' /> <span class='font-bold text-gold-500'>1000 coins</span></span>",
        time: "5 days",
        read: true,
        accepted: true,
      },
      {
        description: "Clan brawl has ended",
        type: "brawl",
        intro: "Brawl",
        title: "The Brawl.name has ended",
        text: "<a href='#' class='link font-bold'>brawl.name</a> has ended and your clan finished <b class='text-ui-100'>#X</b>. Better luck next time.",
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

      {notificationsGroups.map((notificationGroup, notificationGroupIndex) => (
        <>
          <div key={notificationGroupIndex} className="mb-8">
            <h2 className="h4 mb-4">{notificationGroup.name}</h2>
            <ul className="items-spaced space-y-3">
              {notificationGroup.notifications?.map(
                (notification, notificationIndex) => (
                  <li
                    key={notificationIndex}
                    className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8"
                  >
                    <div className="order-2 md:order-1 w-full sm:w-[420px] ">
                      <Notification notification={notification} />
                    </div>
                    <p className="order-1 md:order-2 text-ui-300">
                      {notification.description}
                    </p>
                  </li>
                )
              )}
            </ul>
          </div>
        </>
      ))}
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
