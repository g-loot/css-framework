import Accordion from "../../../../components/Accordion/Accordion";
import Link from "next/link";
import { useRouter } from "next/router";

const MissionsHowitworksTabs = [
  {
    title: "Before entering a Brawl",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1657714133/Marketing/2022_prototype/missions-howitworks-cpu.webp",
    paragraphs: [
      {
        text: "Make sure you have the G-Loot Tracker installed and running on your PC.",
      },
      {
        text: "See if everthing is working by running the G-Loot app on your PC, then start your game.",
      },
      {
        text: "The G-Loot icon should appear in your game with a green dot. This means everything is up and running to track your Mission progress.",
      },
    ],
  },
  {
    title: "Launch the game",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1657714133/Marketing/2022_prototype/missions-howitworks-launchgame.webp",
    paragraphs: [
      {
        text: "To join the leaderboard, you need to complete a certain numbert of matches depending on the rules of the Brawl you want to compete in.",
      },
      {
        text: "When you have played the minimum amount of matches, your Brawl points will be added to the leaderboard.",
      },
      {
        text: "You can always play more matches as long as you have Tokens. Only your best scores will count.",
      },
    ],
  },
  {
    title: "Pay tokens to activate Brawl matches",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1658483784/Marketing/2022_prototype/brawls-howitworks-tokens.webp",
    paragraphs: [
      {
        text: "To play in the Brawl you need Tokens.",
      },
      {
        text: "Each match costs a certain number of Tokens. When you have spent a Token and activated a Brawl match, your next game match in the correct game mode will count towards the Brawl.",
      },
    ],
  },
  {
    title: "Have the tracker running",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1657721633/Marketing/2022_prototype/missions-howitworks-cpu.webp",
    paragraphs: [
      {
        text: "To track your stats you need the G-Loot Tracker installed and running on your PC.",
      },
      {
        text: "The Tracker is lightweight and should not affect your gameplay.",
      },
      {
        text: "The Tracker makes it possible to play Brawls by recording your progress and stats while you play.",
      },
    ],
  },
  {
    title: "Launch the game",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1657721634/Marketing/2022_prototype/missions-howitworks-launchgame.webp",
    paragraphs: [
      {
        text: "When you launch your game, G-Loot will launch the Overlay.",
      },
      {
        text: "The Overlay is where you can see your Mission progress and the best scores from your Brawl rounds.",
      },
      {
        text: "The G-Loot Overlay will tell you if tracking is working or not, and will also notify you if something has gone wrong or if G-Loot goes into maintenance.",
      },
    ],
  },
  {
    title: "Play in the right mode",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1657721633/Marketing/2022_prototype/missions-howitworks-gamemode.webp",
    paragraphs: [
      {
        text: "To collect Brawl points, you need to play the game in the correct game mode. You can find the game mode, as well as other information about the Brawl, on the Brawl page.",
      },
      {
        text: "The Tracker will detect which game mode you are playing when you start your match. If you are in the correct game mode, the Tracker will automatically record your stats for the Brawl.",
      },
    ],
  },
  {
    title: "Only your best Brawl matches count",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1658483784/Marketing/2022_prototype/brawls-howitworks-bestmatches.webp",
    paragraphs: [
      {
        text: "To make Brawls as fair as possible, only the points from your best Brawl matches count on the leaderboard.",
      },
      {
        text: "This means that you can play as many matches you want if you have enough Tokens.",
      },
      {
        text: "If you do better than you did in an earlier match, your points will be updated to the higher number.",
      },
      {
        text: "If you do worse, your points will not change.",
      },
    ],
  },
  {
    title: "If you are out of token",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1658483784/Marketing/2022_prototype/brawls-howitworks-tokenspile.webp",
    paragraphs: [
      {
        text: "If run out of Tokens, there are several ways to get more.",
      },
      {
        text: "• Earn Tokens by completing Missions and unlocking Mission Rewards.",
      },
      {
        text: "• Buy Tokens in the G-Loot wallet.",
      },
      {
        text: "• Claim free Tokens in your Daily Loot Streak.",
      },
    ],
  },
  {
    title: "If there is a tie",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1658483784/Marketing/2022_prototype/brawls-howitworks-tiebreaker.webp",
    paragraphs: [
      {
        text: "If there is a tie, the tiebreaker in your 3 best matches decides who wins.",
      },
      {
        text: "If 2 users have the same points and the same tiebreaker score, a second tiebreaker will be used to determine the winner.",
      },
    ],
  },
  {
    title: "Rewards",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1657721634/Marketing/2022_prototype/missions-howitworks-premiumrewards.webp",
    paragraphs: [
      {
        text: "Competing in the Brawl earns you Coins which you can spend in the G-Loot shop.",
      },
      {
        text: "Some Brawls are also connected to tournaments like the Monthly Showdown. Winners of these Brawls earn tickets which they can use to compete in the Monthly Showdown.",
      },
    ],
  },
  {
    title: "If a game goes into maintenance",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1658483784/Marketing/2022_prototype/brawls-howitworks-maintenance.webp",
    paragraphs: [
      {
        text: "If G-Loot or the game goes into maintenance, all stats stops being recorded. If you have started a Brawl match, you will get your Tokens back.",
      },
      {
        text: "Once the maintenance is over, the Brawl will continue. If there is a bigger issue or if the maintenance lasts for several days, G-Loot will decide if the Brawl will continue. If the Brawl is canceled, you will get your Tokens back.",
      },
    ],
  },
];

export default function TabBrawlsHowItWorks() {
  const { query } = useRouter();
  const hasAds = query.ads === "true" ? true : false;
  return (
    <>
      <section
        className="pt-6 pb-12 animate-slide-in-bottom animate-delay"
        style={{ "--delay": "calc(1 * 0.05s)" }}
      >
        <div className="grid gap-8 grid-cols-1 xl:grid-cols-3 items-center">
          <img
            className="col-span-1 rounded-lg"
            src="https://res.cloudinary.com/gloot/image/upload/v1658493815/Marketing/2022_prototype/gloot-rules-intro.webp"
            width="100%"
            height="auto"
            alt=""
          />
          <div className="col-span-1 px-4 sm:px-0">
            <h2 className="text-3xl leading-none mb-4">G-Loot rules</h2>
            <p className="text-ui-300 leading-relaxed">
              G-Loot wants esports to be safe and fun for everyone, so we take
              player protection very seriously and investigate any suspicious
              activity. Make sure you read the rules before your first Brawl, so
              you know what you can and cannot do while playing on G-Loot! Here
              are some of our most important rules:
            </p>
          </div>
        </div>
      </section>
      <section
        className="pb-12 animate-slide-in-bottom animate-delay"
        style={{ "--delay": "calc(2 * 0.05s)" }}
      >
        <div className="px-4 sm:px-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 text-center gap-8">
          <div className="col-span-4 md:col-span-2 xl:col-span-1">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/gloot/image/upload/v1658494061/Marketing/2022_prototype/gloot-rules-multipleaccountsgame.webp"
              width="200"
              height="auto"
              alt=""
            />
            <h3 className="text-2xl my-4 leading-tight">On game account</h3>
            <p className="text-ui-300">
              Use one game account only. Playing from multiple game accounts
              while participating in G-Loot competitions is considered in-game
              smurfing.
            </p>
          </div>
          <div className="col-span-4 md:col-span-2 xl:col-span-1">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/gloot/image/upload/v1658494061/Marketing/2022_prototype/gloot-rules-accountsharing.webp"
              width="200"
              height="auto"
              alt=""
            />
            <h3 className="text-2xl my-4 leading-tight">
              No game account sharing
            </h3>
            <p className="text-ui-300">
              Do not share your game account or your G-Loot account with anyone
              (for example: you cannot use the same Valorant account on two
              G-Loot accounts). Do not sell or buy game- or G-Loot accounts.
            </p>
          </div>
          <div className="col-span-4 md:col-span-2 xl:col-span-1">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/gloot/image/upload/v1658494061/Marketing/2022_prototype/gloot-rules-multipleaccountsgloot.webp"
              width="200"
              height="auto"
              alt=""
            />
            <h3 className="text-2xl my-4 leading-tight">One G-Loot account</h3>
            <p className="text-ui-300">
              You may only have one G-Loot account. Do not create additional
              G-Loot accounts for any reason.
            </p>
          </div>
          <div className="col-span-4 md:col-span-2 xl:col-span-1">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/gloot/image/upload/v1658492148/Marketing/2022_prototype/gloot-rules-punish.webp"
              width="200"
              height="auto"
              alt=""
            />
            <h3 className="text-2xl my-4 leading-tight">No cheating</h3>
            <p className="text-ui-300">
              Cheating and abusing of any kind is a bannable offense. We take
              reports of cheating very seriously and investigate them
              thoroughly.
            </p>
          </div>
        </div>
      </section>
      <section
        className="pb-12 animate-slide-in-bottom animate-delay"
        style={{ "--delay": "calc(3 * 0.05s)" }}
      >
        <div className="px-4 sm:px-0 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="col-span-1 md:col-span-2 xl:col-span-1 surface sm:rounded-lg p-4 sm:p-8 flex items-center gap-8">
            <div className="flex flex-col justify-center items-center text-center w-32">
              <img
                src="https://play.gloot.com/dae4971e16db5ae2a3c310a757fe2f34.svg"
                width="100"
                height="auto"
              />
              <span className="text-xs text-ui-300 leading-tight">
                Brawls protected by G-Loot Player Protection
              </span>
            </div>
            <div className="flex-1 border-l border-ui-700 pl-8">
              <h3 className="text-2xl text-ui-200 mb-2 uppercase">Fair Play</h3>
              <div className="text-ui-300">
                <p>We promote Fair Play by:</p>
                <ul className="list-outside list-disc pl-4">
                  <li>
                    Having a set of rules that all players are obligied to
                    follow.
                  </li>
                  <li>Banning users that don’t play by the rules.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 xl:col-span-1 surface sm:rounded-lg p-4 sm:p-8 flex items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl text-ui-200 mb-2 uppercase">
                Need more help?
              </h3>
              <div className="text-ui-300">
                <p>
                  Join us on Discord and ask questions about the Brawl there.
                  <br />
                  Or, contact Support and send us a ticket.
                </p>
                <div className="flex gap-2 mt-4">
                  <a
                    href="https://help.gloot.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-sm button-primary"
                  >
                    <span className="icon icon-discord" />
                    <span>Join our Discord</span>
                  </a>

                  <a
                    href="https://help.gloot.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-sm button-secondary"
                  >
                    <span>Contact support</span>
                    <span className="icon icon-box-arrow-top-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
