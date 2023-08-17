import Accordion from "@/components/Accordion/Accordion";
import Link from "next/link";
import { useRouter } from "next/router";

const HowToPlay = [
  {
    title: "Getting started",
    description:
      "Tournaments are esports competitions that take place in real time, on shared servers. Some tournaments are free to enter, while others require an entry fee such as Tickets. For some tournaments, you’ll need to have an existing team. Others can be joined solo or without a complete team.",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1660050649/Marketing/2022_prototype/tournaments-howitworks-ticket.webp",
    even: true,
    steps: [
      {
        title: "Check tournament details",
        description:
          "Check the details of the tournament on the Overview page so you know what kind of tournament you are competing in.",
      },
      {
        title: "Entry fee",
        description:
          "If there is an entry fee, everyone in your party will need to use it. Tournaments with entry fees are non-refundable, so make sure you only join tournaments you’re sure you can compete in.",
      },
      {
        title: "Sync your Game ID",
        description:
          "Make sure you have added your Game ID to your profile page. You cannot compete in a tournament without this information.",
      },
    ],
  },
  {
    title: "Forming a party",
    description:
      "Check the Overview to see which kind of party you’ll need for this tournament. Tournaments can be Team Party or Mixed Party.",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1660050649/Marketing/2022_prototype/tournaments-howitworks-party.webp",
    even: false,
    steps: [
      {
        title: "Team party",
        description:
          "To enter these tournaments you will need to create a party using members of one of your teams. If you don’t have any teams yet, you can create on your Profile before joining the tournament. Once you have enough people in your team, you can register for the tournament and invite them to join your party. Once someone is invited, they will be automatically included in your party, so make sure they will be able to play before you invite them. The person who creates the party becomes the captain. They will need to check the team in for their matches.",
      },
      {
        title: "Mixed party",
        description:
          "In these tournaments, you can enter even if you are not already part of a team or if you don’t have a full team.",
      },
      {
        title: "Find a party",
        description:
          "You can enter a Tournament solo and be placed in a random party.",
      },
      {
        title: "Create a party",
        description:
          "You can create your own party with members of teams you are in. If you don’t have enough people for a full party, we will assign solo players to join you.",
      },
    ],
  },
  {
    title: "In game",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1660050649/Marketing/2022_prototype/tournaments-howitworks-game.webp",
    even: true,
    steps: [
      {
        description:
          "Make sure you are ready and in the Discord server before your match starts. Don't forget to [add your Discord ID to your Stryda account] so we can contact you with important updates about the Tournaments.",
        discord: true,
      },
      {
        description:
          "Start up your game and join the match server.",
      },
      {
        description:
          "After the match, return to Stryda to see your score.",
      }
    ],
  },
  {
    title: "After the tournament",
    description: "After a tournament ends you will be able to view the final leaderboard and get information about any prize you will receive.",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1660052222/Marketing/2022_prototype/tournaments-howitworks-after.webp",
    even: false,
  },
];

export default function TabTournamentsHowToPlay() {
  const { query } = useRouter();
  const hasAds = query.ads === "true" ? true : false;
  return (
    <>
      {HowToPlay.map((howto, howtoIndex) => (
        <section
          key={howto}
          className="pt-6 pb-12 max-w-lg mx-auto animate-slide-in-bottom animate-delay"
          style={{
            "--delay": "calc(" + howtoIndex + " * 0.05s)",
          }}
        >
          <div className="flex gap-12 items-center flex-col lg:flex-row">
            <div
              className={`flex-1 overflow-hidden flex flex-col items-center justify-center ${
                howto.even ? "order-1 lg:order-1" : "order-1 lg:order-2"
              }`}
            >
              <img
                className="max-w-md"
                src={howto.image}
                width="100%"
                height="auto"
                alt=""
              />
            </div>
            <div
              className={`flex-1 overflow-hidden flex flex-col items-start justify-center px-4 lg:px-0 max-w-sm ${
                howto.even ? "order-2 lg:order-2" : "order-2 lg:order-1"
              }`}
            >
              <h2 className="h4">{howto.title}</h2>
              {howto.description && (
                <p className="text-ui-300 mt-4">{howto.description}</p>
              )}
              {howto.steps && (
                <ul className="mt-6">
                  {howto.steps?.map((step, stepIndex) => (
                    <li
                      key={step}
                      className="relative flex gap-4 items-start pb-6"
                    >
                      <div className="relative z-10 flex-none h-6 w-6 rounded-full bg-gradient-radial from-blue-500/50 to-blue-300/10 mt-0.5">
                        <span className="bg-main absolute inset-1.5 rounded-full bg-gradient-radial-spotlight from-interaction-500/50 to-interaction-300/10" />
                      </div>
                      {stepIndex !== howto.steps.length - 1 && (
                        <span className="absolute z-0 w-px top-3 bottom-0 bg-ui-700 left-3" />
                      )}

                      <div className="relative z-10 flex-1">
                        {step.title && (
                          <h3 className="h6 mb-2">{step.title}</h3>
                        )}
                        <p className="text-ui-300">{step.description}</p>
                        {step.discord && (
                          <div className="surface rounded-lg py-2 px-4 inline-flex items-center gap-4 mt-4">
                            <span className="flex-none icon icon-discord text-4xl" />
                            <div>
                              <div><b>Stryda Discord</b></div>
                              <div><a className="link" href="https://discord.gg/gloot" target="_blank" rel="noopener noreferrer">https://discord.gg/gloot</a></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
