import PrototypeStructure from "../../../components/Prototype/PrototypeStructure";
import useFetch from "../../../hooks/use-fetch";
import { useRouter } from "next/router";
import Link from "next/link";
import FAQ from "../../../components/FAQ/FAQ";

const TabsItems = [
  {
    id: 1,
    subtitle: "Missions",
    title: "Compete & earn XP",
    url: "missions",
    icon: "icon-missions",
    img: "https://res.cloudinary.com/gloot/image/upload/v1662645307/Marketing/2022_prototype/Illustrations/missions_cards.webp",
    content: [
      {
        type: "p",
        text: "Missions add a little extra challenge to your game by giving you objectives to achieve while you play. These could range from winning a certain number of rounds to getting kills with a particular weapon and are available across all of our supported games.",
      },
      {
        type: "p",
        text: "To start competing in Missions, all you need to do is run the G-Loot PC app while you play.  Each time you successfully complete a Mission, you earn XP, which you use to claim Mission Rewards. You can complete a set number of Missions each day, and new ones appear every 24 hours. Keep an eye on the PC app and gloot.com to see your progress and check out what’s new.",
      },
    ],
  },
  {
    id: 2,
    subtitle: "Missions Rewards",
    title: "Reach milestione & unlock rewards",
    url: "missions-rewards",
    icon: "icon-military-medal",
    img: "https://res.cloudinary.com/gloot/image/upload/v1662645308/Marketing/2022_prototype/Illustrations/token_coin_piles.webp",
    content: [
      {
        type: "p",
        text: "Mission Rewards are how you turn your XP into useful stuff like Coins or Tokens. Each time you reach a milestone in the Mission Rewards, you unlock another reward.",
      },
      {
        type: "p",
        text: "Mission Rewards and XP reset each week so you'll always have something new to work towards.",
      },
    ],
  },
  {
    id: 3,
    subtitle: "Brawl",
    title: "Use stats to climb the leaderboard",
    url: "brawl",
    icon: "icon-brawl",
    img: "https://res.cloudinary.com/gloot/image/upload/v1662645306/Marketing/2022_prototype/Illustrations/brawl_leaderboard.webp",
    content: [
      {
        type: "p",
        text: "Brawls are weekly competitions where you compete against other G-Loot players in a leaderboard to earn bigger rewards.",
      },
      {
        type: "p",
        text: "Like Missions, Brawls are based on your game stats (such as kills or damage.) You don’t play directly against other competitors; you just need the G-Loot PC app running while you play.",
      },
      {
        type: "p",
        text: "Brawls use a “best-of” format. You can enter as many times as you want, and only your best scores count. That means if you lose your cool in a match and don’t perform as well as you’d like, you can try again, and your lower score won’t matter.",
      },
      {
        type: "p",
        text: "For each entry to a Brawl, you pay 1 Token. Your score from the next game round you play will go towards your Brawl total.",
      },
    ],
  },
  {
    id: 4,
    subtitle: "Premium",
    title: "Get more out of G-Loot",
    url: "premium",
    icon: "icon-fireworks",
    img: "https://res.cloudinary.com/gloot/image/upload/v1665067148/Marketing/2022_prototype/Illustrations/picture_premium_missions.webp",
    content: [
      {
        type: "p",
        text: "Get more out of G-Loot by subscribing to G-Loot Premium.",
      },
      {
        type: "ul",
        text: [
          "Get access to exclusive Premium Missions.",
          "Earn extra XP to reach your Rewards milestones faster.",
          "Enjoy the G-Loot experience without ads.",
        ],
      },
      {
        type: "p",
        text: "<a href='/prototype/premium' class='link link-main font-bold'>Learn more about Premium</a>",
      },
    ],
  },
  {
    id: 5,
    subtitle: "Coins & tokens",
    title: "Turn your gaming into cool prizes",
    url: "coins-tokens",
    icon: "icon-coin",
    img: "https://res.cloudinary.com/gloot/image/upload/v1662645306/Marketing/2022_prototype/Illustrations/coins_tokens.webp",
    content: [
      {
        type: "h4",
        text: "Coins",
      },
      {
        type: "p",
        text: "Turn your gaming time into cool prizes. Earn Coins when you play your games with G-Loot, and s pend them in the shop.",
      },
      {
        type: "h4",
        text: "Tokens",
      },
      {
        type: "p",
        text: "Tokens are how you pay to enter your scores in the Weekly Brawl. Tokens can be earned through Mission Rewards, Daily Loot Streaks, or bought from the shop.",
      },
    ],
  },
  {
    id: 6,
    subtitle: "Shop",
    title: "Spend your currency into prizes",
    url: "shop",
    icon: "icon-shop",
    img: "https://res.cloudinary.com/gloot/image/upload/v1662645308/Marketing/2022_prototype/Illustrations/shop_vouchers.webp",
    content: [
      {
        type: "p",
        text: "Turn your wins into prizes!",
      },
      {
        type: "p",
        text: "Earn Coins in Brawls and the Daily Loot Streak, and spend them in the shop. Give yourself extra motivation while you game by setting your eyes on a prize and working towards buying it.",
      },
      {
        type: "p",
        text: "Visit the <a href='/prototype/shop' class='link link-main font-bold'>G-Loot shop</a>.",
      },
    ],
  },
  {
    id: 7,
    subtitle: "Clans",
    title: "Be stronger with clans",
    url: "clans",
    icon: "icon-multiple-11",
    img: "https://res.cloudinary.com/gloot/image/upload/v1662645306/Marketing/2022_prototype/Illustrations/clans.webp",
    content: [
      {
        type: "p",
        text: "Enjoying community, but playing on your own, sharing success and improving together, competing while having fun, finally, hitting the leaderboard…Is it a dream? We call it a Clan!",
      },
      {
        type: "ul",
        text: [
          "You can be a member of only one Clan",
          "The best brawl score of each member adds up to the Clan",
          "No need to play all the games the Clan plays, one is enough.",
          "Look after top notch players, invite them to your Clan and rock the stage!",
        ],
      },
      {
        type: "p",
        text: "<a href='/prototype/clans' class='link link-main font-bold'>Ready to rock?</a>.",
      },
    ],
  },
  {
    id: 8,
    subtitle: "PC app",
    title: "Play games & track your stats",
    url: "pcapp",
    icon: "icon-statistics",
    img: "https://res.cloudinary.com/gloot/image/upload/v1662645307/Marketing/2022_prototype/Illustrations/overlay_ingame.webp",
    content: [
      {
        type: "p",
        text: "The G-Loot PC app is at the heart of the G-Loot experience. It’s what lets you track your stats while you play and take part in Missions, Brawls, and other competitions. When you run G-Loot and start playing a supported game, the app starts “listening” for certain game events such as kills or headshots.",
      },
      {
        type: "p",
        text: "These events are used to play in competitions, track your stats, and build up your player identity.",
      },
      {
        type: "p",
        text: "That’s it. Because all G-Loot is doing is listening for your game events, it can be very lightweight and doesn’t affect your game performance.",
      },
    ],
  },
];


const HowItWorksFAQs = [
  {
    title: "Is G-Loot available on Mac/mobile/console?",
    content: [
      {
        type: "p",
        text: "Right now, G-Loot is only available on PC. We’re researching how we can bring G-Loot to more devices in the future, but there’s no timeline for this yet..",
      },
      {
        type: "p",
        text: "<a href='#' class='link link-main font-bold'>Check out the system requirements for G-Loot.</a>",
      },
    ],
  },
  {
    title: "I’m not a high-level player. Can I still use G-Loot?",
    content: [
      {
        type: "p",
        text: "Absolutely! There are plenty of different ways to compete to suit your style and ability.",
      },
    ],
  },
  {
    title: "Does G-Loot cost money to use?",
    content: [
      {
        type: "p",
        text: "It’s completely up to you. You can enter Missions, Brawls, and Tournaments using only virtual currencies that you earn on G-Loot. If you want to, you can purchase extra Tokens. You can also become a G-Loot Premium subscriber and get access to extra Missions and other perks.",
      },
    ],
  },
  {
    title: "Is G-Loot legal and safe?",
    content: [
      {
        type: "p",
        text: "Yes. You can learn more about our policies on the support pages, but the most important points are:",
      },
    ],
  },
  {
    title: "I have more questions or need help.",
    content: [
      {
        type: "p",
        text: "We’re always happy to answer any questions or concerns you might have. Please <a href='https://help.gloot.com/hc/en-us' class='link link-main font-bold'>get in touch with us.</a>.",
      },
    ],
  },
];

export default function HowItWorks() {
  const router = useRouter();
  const { tab } = router.query;
  const defaultTab = "missions";
  const selectedTab = tab ? tab : defaultTab;

  return (
    <>
      <PrototypeStructure title="How it works">
        <section
          className="animate-slide-in-bottom animate-delay mb-4"
          style={{ "--delay": "calc(0 * 0.05s)" }}
        >
          <div className="header surface rounded-lg">
            <div className="header-content">
              <div className="header-body">
                <h1 className="text-4xl mb-4 leading-none">How G-Loot works</h1>
                <p className="text-ui-300 max-w-[70ch] mb-2">
                  G-Loot is an esports platform for PC where you can track your
                  gaming stats, play G-Loot Missions in your favorite games, and
                  compete in competitions and tournaments.
                </p>
                <p className="text-ui-300 max-w-[70ch]">
                  Prove to the world (and yourself) that you have got the skills
                  and win cool prizes.
                </p>
              </div>
            </div>
            <div className="header-bg">
              <img src="https://res.cloudinary.com/gloot/image/upload/v1667994151/Marketing/2022_prototype/HowItWorks_bg.jpg" />
            </div>
          </div>
        </section>
        <section
          className="flex flex-col lg:flex-row gap-4 lg:gap-8 lg:items-center animate-slide-in-bottom animate-delay mb-4"
          style={{ "--delay": "calc(1 * 0.05s)" }}
        >
          <div className="lg:w-1/3 xl:w-1/4 space-y-4 flex flex-col">
            <ul className="items-spaced item-interactive gap-1 px-2 lg:px-0 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-hidden lg:overflow-y-auto scrollbar-desktop">
              {TabsItems.map((item, itemIndex) => (
                <Link href={`?tab=${item.url}`} key={item.id}>
                  <li
                    className={`item duration-500 origin-left p-3 rounded-lg ${
                      selectedTab === item.url ? "surface surface-halo halo-r" : "opacity-50 scale-90"
                    }`}
                    style={{
                      "--delay": "calc(" + itemIndex + " * 0.05s)",
                    }}
                  >
                    <div className="item-body">
                      <div className="text-ui-300 text-xs uppercase">
                        {item.subtitle}
                      </div>
                      <div className="text-ui-100 item-title">{item.title}</div>
                    </div>
                    <div className="item-actions">
                      <div>
                        <span className={`icon text-3xl transition-all duration-500 ease-in-out ${item.icon} ${
                      selectedTab === item.url ? "text-gradient bg-gradient-to-b from-blue-300 to-main" : "text-ui-400 scale-75"
                    }`} />
                      </div>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex-1 px-4 lg:px-0">
            {TabsItems.map((item, itemIndex) => {
              if (item.url === selectedTab) {
                return (
                  <div key={item.id} className="flex flex-col xl:flex-row xl:items-center gap-4 lg:gap-8">
                    <div className="flex-1 animate-slide-in-left animate-delay"
                    style={{ "--delay": "calc(2 * 0.05s)" }}>
                      <img src={item.img} alt="" width="100%" height="auto" className="w-1/2 lg:w-full mx-auto" />
                    </div>
                    <div className="flex-1 animate-slide-in-left animate-delay space-y-8"
                    style={{ "--delay": "calc(1 * 0.05s)" }}>
                      <h2 className="h3">{item.subtitle}</h2>
                      {item.content.map((content, contentIndex) => (
                        <div key={contentIndex}>
                          {content.type === "p" && (
                            <p
                              dangerouslySetInnerHTML={{
                                __html: content.text,
                              }}
                            />
                          )}
                          {content.type === "h3" && (
                            <h3 className="h5 mb-4">{content.text}</h3>
                          )}
                          {content.type === "ul" && (
                            <ul className="list-bullet">
                              {content.text.map((listItem, listItemIndex) => (
                                <li
                                  key={listItemIndex}
                                  dangerouslySetInnerHTML={{
                                    __html: listItem,
                                  }}
                                />
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </section>
        <section
        className="py-12 animate-slide-in-bottom animate-delay"
        style={{ "--delay": "calc(2 * 0.05s)" }}
      >
        <div className="px-4 sm:px-0">
          <h2 className="h3 mb-6 text-center">
            FAQ
          </h2>
        </div>
        <div className="accordion accordion-highlighted surface sm:rounded-lg">
          {HowItWorksFAQs.map((tab, tabIndex) => (
            <FAQ key={tabIndex} content={tab} />
          ))}
        </div>
      </section>
      </PrototypeStructure>
    </>
  );
}
