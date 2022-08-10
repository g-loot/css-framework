import Accordion from "../../../../components/Accordion/Accordion";
import Link from "next/link";
import Sticky from "react-stickynode";
import { useRouter } from "next/router";

const Rules = [
  {
    title: "General",
    slug: "general",
    content: [
      {
        type: "p",
        text: "In special cases G-Loot, League Operations, and Tournament Operators reserve the right to override. remove, and/or add any rule stated below to guarantee fair play.",
      },
    ],
  },
  {
    title: "Player Eligibility",
    slug: "player-eligibility",
    sections: [
      {
        title: "Age",
        slug: "age",
        content: [
          {
            type: "ul",
            text: ["Players must be 16 years of age or older to participate."],
          },
        ],
      },
      {
        title: "Names & Images",
        slug: "names-images",
        content: [
          {
            type: "p",
            text: "Players must not use any names or images that:",
          },
          {
            type: "ul",
            text: [
              "Bear a resemblance to any brand or trademark that they don’t own.",
              "Is protected by third-party rights and the player does not have written permission to use it.",
              "Is trying to imitate a real person or entity other than themselves.",
              "Is discriminatory, including but not limited to any language and appearance in regards to ethnicity, nationality, race, gender, religion, and/or sexual orientation.",
            ],
          },
        ],
      },
      {
        title: "G-loot Platform",
        slug: "gloot-platform",
        content: [
          {
            type: "p",
            text: "Players must not use any names or images that:",
          },
          {
            type: "ul",
            text: [
              "Each player is only allowed to have one (1) G-Loot account.",
              "Players are only allowed to use their own G-Loot account.",
              "Players are required to reach out via our <a class='link link-main' href='#' target='_blank'>help.gloot.com</a> if they face issues with their one (1) G-Loot account.",
            ],
          },
        ],
      },
      {
        title: "Game Account",
        slug: "game-account",
        content: [
          {
            type: "ul",
            text: [
              "The player must have an active and eligible account in PUBG, This means that the user can't have an account with game bans or G-Loot bans as of the tournament.",
              "A player is only allowed to use their Game accounts. Said game account must have been created by the player and have only been used by the user. Bought, traded, or sold accounts are strictly forbidden.",
              "Players must have entered a complete and correct nickname on their game account and their G-Loot Profile before the tournament starts. Failure to do so will result in disqualification.",
              "PC Only (Steam)",
            ],
          },
          {
            type: "p",
            text: "A player is allowed to use one (1) emergency game account that they own and are the only user of. In the case of Temporary game bans. If a player needs to use said spare account they need to inform the tournament operator of their group and update their information on their profile before playing.",
          },
        ],
      },
      {
        title: "Tournament Requirements",
        slug: "tournament-requirements",
        content: [
          {
            type: "ul",
            text: ["A player can only attend one active tournament at a time."],
          },
        ],
      },
      {
        title: "Regions",
        slug: "regions",
        content: [
          {
            type: "ul",
            text: [
              "Aland Islands",
              "Albania",
              "Algeria",
              "Andorra",
              "Argentina",
              "Armenia",
              "Australia",
              "Austria",
              "Azerbaijan",
              "Bahrain",
              "Belgium",
              "Belize",
              "Bosnia and Herzegovina",
              "Brazil",
              "British Virgin Islands",
              "Bulgaria",
              "Canada",
              "Chile",
              "Colombia",
              "Costa Rica",
              "Croatia",
              "Cyprus",
              "Czech Republic",
              "Denmark",
              "Egypt",
              "El Salvador",
              "Estonia",
              "Falkland Islands",
              "Faroe Islands",
              "Finland",
              "France",
              "French Guiana",
              "Georgia",
              "Germany",
              "Gibraltar",
              "Greece",
              "Greenland",
              "Guatemala",
              "Guernsey",
              "Honduras",
              "Hungary",
              "Iceland",
              "Ireland",
              "Isle of Man",
              "Israel",
              "Italy",
              "Japan",
              "Jersey",
              "Jordan",
              "Kazakhstan",
              "Kosovo",
              "Kuwait",
              "Latvia",
              "Lebanon",
              "Liechtenstein",
              "Lithuania",
              "Luxembourg",
              "Malta",
              "Mexico",
              "Moldova",
              "Monaco",
              "Mongolia",
              "Montenegro",
              "Netherlands",
              "New Zealand",
              "Nicaragua",
              "North Macedonia",
              "Norway",
              "Palestine",
              "Panama",
              "Paraguay",
              "Peru",
              "Philippines",
              "Poland",
              "Portugal",
              "Puerto Rico",
              "Qatar",
              "Romania",
              "San Marino",
              "Saudi Arabia",
              "Serbia",
              "Slovakia",
              "Slovenia",
              "South Africa",
              "South Georgia and the South Sandwich Islands",
              "South Korea",
              "Spain",
              "Suriname",
              "Svalbard and Jan Mayen",
              "Sweden",
              "Switzerland",
              "Taiwan",
              "Thailand",
              "Tunisia",
              "Turkey",
              "U.S. Virgin Islands",
              "Ukraine",
              "United Arab Emirates",
              "United Kingdom",
              "United States",
              "United States Minor Outlying Islands",
              "Uruguay",
              "Vatican",
              "Vietnam",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Party Eligibility",
    slug: "party-eligibility",
    sections: [
      {
        title: "Names & Images",
        slug: "names-images",
        content: [
          {
            type: "p",
            text: "Team/Party names and logos are subject to approval by the G-Loot and must adhere to the game’s code of conduct. For example, Team/Party names and logos cannot:",
          },
          {
            type: "ul",
            text: [
              "Have a resemblance or be identical to any brand or trademark that they don’t own.",
              "Be protected by third-party rights and the team does not have written permission to use it.",
              "Attempt to imitate a real person or entity other than themselves.",
              "Include discriminatory names include any language regarding ethnicity, nationality, race, gender, religion, and/or sexual orientation.",
            ],
          },
        ],
      },
      {
        title: "Substitutions",
        slug: "substitutions",
        content: [
          {
            type: "ul",
            text: [
              "Substitutions are forbidden.",
            ],
          },
        ],
      },
      {
        title: "Tournament Party Management",
        slug: "tournament-party-management",
        content: [
          {
            type: "ul",
            text: [
              "A team’s tournament party must consist of four (4) players to be eligible to compete in the Tournament.",
              "Your party is allowed to play the tournament regardless of player amount.",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Game Lobby Settings",
    slug: "game-lobby-settings",
    sections: [
      {
        title: "Server Region",
        slug: "server-region",
        content: [
          {
            type: "ul",
            text: [
              "<b>NORTH AMERICA</b> will be hosted on <b>NA</b> servers.",
              "<b>EUROPE</b> will be hosted on <b>EU</b> servers.",
            ],
          },
          {
            type: "p",
            text: "Map settings will adhear to PUBG S.U.P.E.R settings",
          },
        ],
      },
      {
        title: "Substitutions",
        slug: "substitutions",
        content: [
          {
            type: "ul",
            text: [
              "Substitutions are forbidden.",
            ],
          },
        ],
      },
      {
        title: "Tournament Party Management",
        slug: "tournament-party-management",
        content: [
          {
            type: "ul",
            text: [
              "A team’s tournament party must consist of four (4) players to be eligible to compete in the Tournament.",
              "Your party is allowed to play the tournament regardless of player amount.",
            ],
          },
        ],
      },
      {
        title: "Replay & Media",
        slug: "replay-media",
        content: [
          {
            type: "p",
            text: "All players must have the replay function enabled in-game when you compete in any PUBG tournament at G-Loot. All replays and screenshots from the matches need to be saved for 14 days from the date the tournament ended. The admin team has the right to request the replay or screenshot at any time within these 14 days.",
          },
          {
            type: "p",
            text: "How to find your replays: press “Windows Key + R” and type “%localappdata%\TslGame\Saved\Demos”.",
          },
        ],
      },
    ],
  },
  {
    title: "Time Punctuality",
    slug: "time-punctuality",
    content: [
      {
        type: "ul",
        text: [
          "It is very important to follow the timeline for each tournament during an event hosted by G-Loot. All information for each tournament is subject to change so it’s every player’s responsibility to update himself on gloot.com and G-loot Discord server before and during the tournament/round/match or game starts regarding any changes..",
          "If a party is missing from the lobby when it is time to start the game it will be started without them if the Tournament Operator does not say otherwise.",
          "All matches will be played back to back so the party and players have to join the new game lobby as soon as possible.",
          "It is the responsibility of each party captain to read discord for important messages regarding the lobby they are assigned to at all times, especially in the early part of each new game if a server restart needs to be done.",
        ],
      },
    ],
  },
  {
    title: "Streaming & Broadcasting",
    slug: "streaming-broadcasting",
    content: [
      {
        type: "ul",
        text: [
          "If you decide to stream the match the minimum delay recommended is 10 minutes and have G-Loot in the title of the stream.",
          "If you stream, never show the server information on the stream. This may result in your party being disqualified.",
        ],
      },
    ],
  },
];
export default function TabTournamentsRules() {
  const { query } = useRouter();
  const hasAds = query.ads === "true" ? true : false;
  return (
    <>
      <section
        className="pt-6 pb-12 animate-slide-in-bottom animate-delay flex flex-col xl:flex-row xl:items-stretch gap-4 xl:gap-8"
        style={{ "--delay": "calc( 1 * 0.05s)" }}
      >
        <div className="flex-1 xl:flex-none xl:w-64 space-y-4">
          <Sticky
            top={0}
            bottomBoundary={1200}
          >
            <div className="">
              <h2 className="h6 mb-2 px-4 sm:px-0">Table of content</h2>
              <div className="max-h-screen overflow-y-auto surface sm:rounded-lg">
                <ul className="menu menu-secondary">
                  {Rules.map((rule, ruleIndex) => (
                    <>
                      {!rule.sections?.length && (
                        <li key={ruleIndex}>
                          <a href={`#${rule.slug}`}>
                            <span className="font-headings font-bold text-base uppercase">
                              {rule.title}
                            </span>
                          </a>
                        </li>
                      )}
                      {rule.sections?.length && (
                        <div className="accordion">
                          <Accordion
                            header={
                              <>
                                <div className="item">
                                  <div className="item-body">
                                    <div className="item-title font-headings font-bold uppercase">
                                      {rule.title}
                                    </div>
                                  </div>
                                  <div className="item-actions flex items-center gap-2">
                                    <div>
                                      <span className="icon icon-24 icon-arrow-sm-down" />
                                    </div>
                                  </div>
                                </div>
                              </>
                            }
                          >
                            <ul className="menu menu-secondary">
                              {rule.sections?.map((section, sectionItem) => (
                                <li key={sectionItem}>
                                  <a href={`#${rule.slug}-${section.slug}`}>
                                    <span className="pl-4">
                                      {section.title}
                                    </span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </Accordion>
                        </div>
                      )}
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </Sticky>
        </div>
        <div className="flex-1 space-y-4">
          <div className="surface surface-dimmed p-8 sm:rounded-lg max-w-md mx-auto leading-loose">
            {Rules.map((rule, ruleIndex) => (
              <div key={ruleIndex} className="space-y-6 mb-12 pb-12 border-b border-ui-700">
                <h2 key={ruleIndex} id={rule.slug} className="h3">
                  {rule.title}
                </h2>
                {rule.content?.map((content, contentIndex) => (
                  <>
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
                      <ul className=" list-outside pl-8 list-disc space-y-4 ">
                        {content.text.map((listItem, listItemIndex) => (
                          <li key={listItemIndex}
                            dangerouslySetInnerHTML={{
                              __html: listItem,
                            }}
                          />
                        ))}
                      </ul>
                    )}
                  </>
                ))}
                {rule.sections?.map((section, sectionIndex) => (
                  <div
                    key={sectionIndex}
                    id={`${rule.slug}-${section.slug}`}
                    className="space-y-4"
                  >
                    <h3 className="h5 mb-4">{section.title}</h3>
                    {section.content?.map((content, contentIndex) => (
                      <>
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
                          <ul className=" list-outside pl-8 list-disc space-y-4 ">
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
                      </>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
