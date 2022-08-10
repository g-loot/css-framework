import Accordion from "../../../../components/Accordion/Accordion";
import Link from "next/link";
import { useRouter } from "next/router";

const MissionsHowitworksTabs = [
  {
    title: "Before you can do Missions & earn Mission Rewards",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1657714133/Marketing/2022_prototype/missions-howitworks-cpu.webp",
    paragraphs: [
      {
        text: "To complete Missions and earn rewards, you need to connect your Steam account to G-Loot. Go to your profile to connect Steam. Make sure you have the G-Loot Tracker installed and running on your PC. The application is lightweight and should not affect your gameplay. The Tracker is partly an anti-cheat to help us keep G-Loot free from users abusing the platform. Download G-Loot Tracker.",
      },
    ],
  },
  {
    title: "Launch the game",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1657714133/Marketing/2022_prototype/missions-howitworks-launchgame.webp",
    paragraphs: [
      {
        text: "When you launch your game, G-Loot Tracker will launch the Overlay. The Overlay is where you can see your Mission progress and the best scores from your Brawl rounds.",
      },
    ],
  },
  {
    title: "Daily Missions & how they are tracked",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1660131014/Marketing/2022_prototype/missions-howitworks-missions.webp",
    paragraphs: [
      {
        text: "To start competing in Missions, you need to connect your Steam account and run the G-Loot Tracker while you play. When your match has finished within the game, we will fetch the stats from that game and update your Mission progress. Sometimes it can take a while to get the stats from the latest match. Please, contact support if you are having trouble getting the stats for the past x hours. You can complete a set number of Missions each day, and new ones appear every 24 hours.",
      },
    ],
  },
  {
    title: "Play in the right mode",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1657714133/Marketing/2022_prototype/missions-howitworks-gamemode.webp",
    paragraphs: [
      {
        text: "Some Missions must be played in certain game modes. Make sure to check before you play.",
      },
    ],
  },
  {
    title: "How XP works",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1657714133/Marketing/2022_prototype/missions-howitworks-xp.webp",
    paragraphs: [
      {
        text: "You will earn XP from each Daily Mission The XP you earn will be added to the Mission Rewards.",
      },
      {
        text: "For each milestone you reach in the Mission rewards, you will unlock a reward. XP is accumulated from all games you play on G-Loot. That means you can get XP from any game that is supported by G-Loot. Your XP will reset after a week and can not be transferred to the next week. XP is accumulated from all games you play on G-Loot. That means you can get XP from any game that is supported by G-Loot.",
      },
      {
        text: "Your XP will reset after a week and can not be transfered to the next week.",
      },
    ],
  },
  {
    title: "Mission Rewards",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1657714133/Marketing/2022_prototype/missions-howitworks-rewards.webp",
    paragraphs: [
      {
        text: "Mission Rewards are how you turn your XP into useful stuff like Coins or Tokens. Each time you reach a milestone in the Mission Rewards, you unlock another reward. Mission Rewards reset each week so you`ll always have something new to work towards.",
      },
    ],
  },
  {
    title: "Premium Missions",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1657714133/Marketing/2022_prototype/missions-howitworks-premiummissions.webp",
    paragraphs: [
      {
        text: "By getting a Premium subscription you will increase your daily amount of Missions and unlock the Premium Missions.",
      },
      {
        text: "You will then be able to earn more XP towards your Mission Rewards. If you are not a Premium subscriber, you will still progress in the Premium Missions but cannot earn XP from completing them. That means if you change your mind about Premium, you will unlock the XP right away.",
      },
    ],
  },
  {
    title: "Premium Rewards",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1657714133/Marketing/2022_prototype/missions-howitworks-premiumrewards.webp",
    paragraphs: [
      {
        text: "Become a Premium member to increase the number of rewards you can earn during the week.",
      },
    ],
    hasButtonReward: true,
  },
];

export default function TabMissionsHowItWorks() {
  const { query } = useRouter();
  const hasAds = query.ads === "true" ? true : false;
  return (
    <>
      <section
        className="py-12 animate-slide-in-bottom animate-delay"
        style={{ "--delay": "calc(1 * 0.05s)" }}
      >
        <div className="grid gap-8 grid-cols-1 xl:grid-cols-2">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 items-center">
            <img
              className="rounded-lg"
              src="https://res.cloudinary.com/gloot/image/upload/v1660131014/Marketing/2022_prototype/missions-howitworks-missions.webp"
              width="100%"
              height="auto"
              alt=""
            />
            <div className="px-4 sm:px-0">
              <h2 className="text-2xl leading-none mb-4">What are Missions?</h2>
              <p className="text-ui-300 leading-relaxed">
                Daily missions are daily objectives that resets every 24 hours.
                By completing Missions you will earn XP. The XP from all your
                Missions goes into the Weekly Mission Rewards. You can complete
                Daily Missions across the different games on G-Loot.
              </p>
            </div>
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 items-center">
            <img
              className="rounded-lg"
              src="https://res.cloudinary.com/gloot/image/upload/v1660131014/Marketing/2022_prototype/missions-howitworks-rewards.webp"
              width="100%"
              height="auto"
              alt=""
            />
            <div className="px-4 sm:px-0">
              <h2 className="text-2xl leading-none mb-4">
                What are Mission Rewards?
              </h2>
              <p className="text-ui-300 leading-relaxed">
                Mission Rewards are how you turn your XP into useful stuff like
                Coins or tokens. Each time you reach a milestone in the Mission
                rewards, you unlock another reward. Mission rewards reset each
                week so you will always have something new to work towards.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="pt-12 animate-slide-in-bottom animate-delay"
        style={{ "--delay": "calc(2 * 0.05s)" }}
      >
        <div className="px-4 sm:px-0">
          <h2 className="text-2xl leading-none mb-4">
            How Missions and Missions Rewards work
          </h2>
        </div>
        <div className="overflow-x-auto scrollbar-desktop py-4">
          <ul className="step step-label-bottom step-primary is-inactive min-w-[1000px]">
            <li>
              <a href="#">
                <i>1</i>
                <div className="text-sm text-ui-300">
                  Connect your Steam account to G-Loot.
                </div>
                <span />
              </a>
            </li>
            <li>
              <a href="#">
                <i>2</i>
                <div className="text-sm text-ui-300">
                  Have the G-Loot tracker installed and running.
                </div>
                <span />
              </a>
            </li>
            <li>
              <a href="#">
                <i>3</i>
                <div className="text-sm text-ui-300">Launch your game.</div>
                <span />
              </a>
            </li>
            <li>
              <a href="#">
                <i>4</i>
                <div className="text-sm text-ui-300">
                  Play a match in the correct game mode.
                </div>
                <span />
              </a>
            </li>
            <li>
              <a href="#">
                <i>5</i>
                <div className="text-sm text-ui-300">
                  The missions will be updated automatically once the match is
                  finished.
                </div>
                <span />
              </a>
            </li>
            <li>
              <a href="#">
                <i>6</i>
                <div className="text-sm text-ui-300">
                  XP will be added to the Mission Rewards when you complete a
                  mission.
                </div>
                <span />
              </a>
            </li>
            <li>
              <a href="#">
                <i>7</i>
                <div className="text-sm text-ui-300">Claim your reward.</div>
                <span />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section
        className="py-12 animate-slide-in-bottom animate-delay"
        style={{ "--delay": "calc(3 * 0.05s)" }}
      >
        <div className="px-4 sm:px-0">
          <h2 className="text-2xl leading-none mb-6">
            Step by step - How to complete Missions and earn Rewards
          </h2>
        </div>
        <div className="accordion surface sm:rounded-lg">
          {MissionsHowitworksTabs.map((tab, tabIndex) => (
            <>
              <Accordion
                key={tab}
                header={
                  <>
                    <div className="item">
                      <div className="item-body">
                        <div className="p-2 item-title font-headings font-bold text-lg italic">
                          {tab.title}
                        </div>
                      </div>
                      <div className="item-actions">
                        <div>
                          <span className="icon icon-24 icon-arrow-sm-down" />
                        </div>
                      </div>
                    </div>
                  </>
                }
              >
                <div className="p-4 sm:p-8">
                  <div className="max-w-md mx-auto grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
                    <div className="surface rounded-lg overflow-hidden">
                      <img
                        src={tab.image}
                        width="100%"
                        height="auto"
                        className=""
                      />
                    </div>
                    <div className=" text-ui-300 space-y-4 leading-relaxed">
                      {tab.paragraphs.map((paragraph, paragraphIndex) => (
                        <p
                          key={paragraph}
                          dangerouslySetInnerHTML={{
                            __html: paragraph.text,
                          }}
                        />
                      ))}
                      {tab.hasButtonReward && (
                        <Link href={`premium${hasAds ? "?ads=true" : ""}`}>
                          <a className="button button-premium is-shining">
                            <span>Join G-Loot Premium</span>
                          </a>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </Accordion>
            </>
          ))}
        </div>
      </section>
    </>
  );
}
