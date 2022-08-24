import Accordion from "../../../../components/Accordion/Accordion";
import Link from "next/link";
import { useRouter } from "next/router";

const MissionsHowitworksTabs = [
  {
    title: "Finding a tournament",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1657714133/Marketing/2022_prototype/missions-howitworks-cpu.webp",
    paragraphs: [
      {
        text: "You can join lots of different types of tournaments on G-Loot. Tournaments can have different rewards, entry fees.",
      },
      {
        text: "Make sure to read the tournament rules and additional information before registering.",
      },
      {
        text: "<b class='text-main'>Showdown</b>: Monthly tournaments with a prize pool and your honor on the line! To compete, you need a Ticket from a tournament or Brawl.",
      },
      {
        text: "<b class='text-main'>Skirmish</b>: Tournaments for seasoned players and novices alike. Some offer rewards such as Tickets.",
      },
      {
        text: "<b class='text-main'>Open</b>: Casual tournaments for beginners and players who want to practice and get experience.",
      },
    ],
  },
  {
    title: "How to register to a tournament",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1657714133/Marketing/2022_prototype/missions-howitworks-launchgame.webp",
    paragraphs: [
      {
        text: "You can register to tournaments as a solo player or with your team.",
      },
      {
        text: "Some tournaments cost a Ticket to enter (icon for ticket) If registering with team each team member needs to have one ticket.",
      },
      {
        text: "<b class='text-main'>Solo</b>: Register as a solo player and you will be matched up with a party of other solo players.",
      },
      {
        text: "<b class='text-main'>Team</b>: Invite your teammates to play with you. Make sure all invited members accept the invitation so that you can play.",
      },
    ],
  },
  {
    title: "Solo party",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1657714133/Marketing/2022_prototype/missions-howitworks-launchgame.webp",
    paragraphs: [
      {
        text: "You will be matched up with other solo players. When we have found a full party for you, your party will be registered.",
      },
      {
        text: "<b class='text-main'>Discord</b>: Join the G-Loot Discord server to talk to other players in your party.",
      },
      {
        text: "Hover over the Discord icon next to the player’s name to see their Discord username.",
      },
    ],
  },
  {
    title: "Getting server info",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1657714133/Marketing/2022_prototype/missions-howitworks-launchgame.webp",
    paragraphs: [
      {
        text: "Log on to the G-Loot website before the tournament is due to start!",
      },
      {
        text: "You will see a drop down with your match connection information.",
      },
      {
        text: "<a href='https://help.gloot.com/kb/en/article/how-do-i-join-a-match' target='_blank' class='link link-main'>How do I join a match on G-Loot</a>",
      },
    ],
  },
  {
    title: "During tournament",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1657714133/Marketing/2022_prototype/missions-howitworks-launchgame.webp",
    paragraphs: [
      {
        text: "Join the G-Loot Discord server to get up-to-date information about your tournament.",
      },
      {
        text: "In the Discord server, you’ll find channels for specific games.",
      },
      {
        text: "If you need help during a tournament, you can contact the tournament operators through Discord.",
      },
    ],
  },
  {
    title: "After tournament",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1657714133/Marketing/2022_prototype/missions-howitworks-launchgame.webp",
    paragraphs: [
      {
        text: "After the tournament you will get your placement. That could be a place on the leaderboard or in a bracket.",
      },
      {
        text: "If you win a reward in a tournament, it will be available to claim once the results have been verified and approved.",
      },
      {
        text: "This might take up to 7 business days.",
      },
    ],
  },
  {
    title: "Why was my party cancelled?",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1657714133/Marketing/2022_prototype/missions-howitworks-launchgame.webp",
    paragraphs: [
      {
        text: "There are a few reasons for your party to have been canceled.",
      },
      {
        text: "Read more about canceled parties here: <a href='https://help.gloot.com/kb/en/article/why-was-my-tournament-enrollment-cancelled' target='_blank' class='link link-main'>why was my tournament enrollment canceled</a>",
      },
    ],
  },
  {
    title: "Can I leave a party?",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1657714133/Marketing/2022_prototype/missions-howitworks-launchgame.webp",
    paragraphs: [
      {
        text: "You can always leave a party before the tournament has started.",
      },
      {
        text: "If you created the party, you can remove your party from the tournament.",
      },
      {
        text: "Once the tournament has started, you cannot leave the party.",
      },
      {
        text: "Leaving the party at any point might cause your team to be disqualified.",
      },
    ],
  },
  {
    title: "My question isn't answer or I need more help",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1657714133/Marketing/2022_prototype/missions-howitworks-launchgame.webp",
    paragraphs: [
      {
        text: "If you have further questions or need help, you can contact our support team.",
      },
      {
        text: "Alternatively, join the G-Loot Discord to speak directly with the tournament operators.",
      },
    ],
  },
  
];

export default function TabTournamentsHowItWorks() {
  const { query } = useRouter();
  const hasAds = query.ads === "true" ? true : false;
  return (
    <>
      <section
        className="pt-12 animate-slide-in-bottom animate-delay"
        style={{ "--delay": "calc(1 * 0.05s)" }}
      >
        <div className="px-4 sm:px-0">
          <h2 className="text-2xl leading-none mb-4">How Tournaments work</h2>
        </div>
        <div className="overflow-x-auto scrollbar-desktop py-4">
          <ul className="step step-label-bottom step-primary is-inactive min-w-[1000px]">
            <li>
              <a href="#">
                <i>1</i>
                <div className="text-sm text-ui-300">Find a tournament.</div>
                <span />
              </a>
            </li>
            <li>
              <a href="#">
                <i>2</i>
                <div className="text-sm text-ui-300">
                  Register to a tournament.
                </div>
                <span />
              </a>
            </li>
            <li>
              <a href="#">
                <i>3</i>
                <div className="text-sm text-ui-300">
                  Join solo or with team.
                </div>
                <span />
              </a>
            </li>
            <li>
              <a href="#">
                <i>4</i>
                <div className="text-sm text-ui-300">Play tournament.</div>
                <span />
              </a>
            </li>
            <li>
              <a href="#">
                <i>5</i>
                <div className="text-sm text-ui-300">
                  Placement and rewards.
                </div>
                <span />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section
        className="py-12 animate-slide-in-bottom animate-delay"
        style={{ "--delay": "calc(2 * 0.05s)" }}
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
                        <Link href={`/prototype/premium${hasAds ? "?ads=true" : ""}`}>
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
