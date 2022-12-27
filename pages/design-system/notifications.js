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
        title: "You received a gift!",
        text: "Your Clanmate <a href='#' class='link font-bold'>Harriss</a> has sent you <span class='whitespace-nowrap text-purple-500'><span class='translate-y-0.5 icon icon-token'></span> <span class='font-bold'>30 tokens</span></span> as a gift.",
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
        url: "/prototype/clans/2",
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
        text: "You’ve been refunded <span class='whitespace-nowrap text-purple-500'><span class='translate-y-0.5 icon icon-token'></span> <span class='font-bold'>30 tokens</span></span> as game.name went into maintenance and your open activations were canceled.",
        time: "4 days",
      },
      {
        description: "Brawl has ended, tokens refunded",
        type: "brawl",
        intro: "Brawl",
        title: "You've been refunded",
        text: "You’ve been refunded <span class='whitespace-nowrap text-purple-500'><span class='translate-y-0.5 icon icon-token'></span> <span class='font-bold'>30 tokens</span></span> as the brawl.name Brawl has ended and your open activations were canceled.",
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
