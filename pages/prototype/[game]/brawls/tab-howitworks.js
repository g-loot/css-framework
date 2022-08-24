import React, { useContext, useEffect } from "react";

import Accordion from "../../../../components/Accordion/Accordion";
import Link from "next/link";
import ModalBrawlHowitworksVideo from "./modal-howitworks-video";
import ModalContainer from "../../../../components/Modal/ModalContainer";
import { UiContext } from "../../../../contexts/ui";
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
  const uiContext = useContext(UiContext);
  const modalVideo = query.modalvideo === "true" ? true : false;

  function openModalBrawlHowitworksVideo() {
    uiContext.openModal(
      <ModalBrawlHowitworksVideo></ModalBrawlHowitworksVideo>
    );
  }

  useEffect(() => {
    if (modalVideo) {
      openModalBrawlHowitworksVideo();
    }
  }, [modalVideo]);

  return (
    <>
      <section
        className="py-12 animate-slide-in-bottom animate-delay"
        style={{ "--delay": "calc(1 * 0.05s)" }}
      >
        <div className="grid gap-8 grid-cols-1 xl:grid-cols-3 items-center">
          <img
            className="col-span-1 rounded-lg"
            src="https://res.cloudinary.com/gloot/image/upload/v1658478391/Marketing/2022_prototype/brawls-howitworks-intro.webp"
            width="100%"
            height="auto"
            alt=""
          />
          <div className="col-span-2 px-4 sm:px-0">
            <h2 className="text-2xl leading-none mb-4">What is a Brawl?</h2>
            <div className="columns-2 space-y-4 gap-8">
              <p className="text-ui-300 leading-relaxed">
                In Brawls you compete against other G-Loot players to climb a
                leaderboard.
              </p>
              <ul className="list-inside list-disc space-y-4 text-ui-300 leading-relaxed">
                <li>
                  Brawls are based on your stats, just like Missions. You don’t
                  need to be in the same server as the other Brawl players.
                </li>
                <li>
                  You earn Brawl points based on the objective, e.g. kills,
                  goals or score from the game.
                </li>
                <li>You need the G-Loot Tracker running while you play.</li>
                <li>
                  Brawls use a “best-of” format. You can enter as many times as
                  you want, and only your best scores count.
                </li>
                <li>
                  You need to complete a set numbers of matches before you can
                  join and see the Brawl leaderboard.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        className="pt-12 animate-slide-in-bottom animate-delay"
        style={{ "--delay": "calc(2 * 0.05s)" }}
      >
        <div className="px-4 sm:px-0">
          <h2 className="text-2xl leading-none mb-4">How Brawls work</h2>
        </div>
        <div className="surface sm:rounded-lg overflow-hidden max-w-sm mx-auto mb-4 relative">
          <div className="absolute inset-0 flex items-center justify-center bg-ui-900/50">
            <button
              type="button"
              className="button button-tertiary button-lg button-play"
              onClick={openModalBrawlHowitworksVideo}
            >
              <span className="icon icon-circle-caret-right"></span>
            </button>
          </div>
          <img
            src="https://res.cloudinary.com/gloot/image/upload/v1658478390/Marketing/2022_prototype/brawls-howitworks-video.webp"
            width="100%"
            height="auto"
            alt=""
          />
        </div>
        <div className="overflow-x-auto scrollbar-desktop py-4">
          <ul className="step step-label-bottom step-primary is-inactive min-w-[1000px]">
            <li>
              <a href="#">
                <i>1</i>
                <div className="text-sm text-ui-300">
                  Use Tokens to activate Brawl matches.
                </div>
                <span />
              </a>
            </li>
            <li>
              <a href="#">
                <i>2</i>
                <div className="text-sm text-ui-300">
                  Have the Tracker installed and running.
                </div>
                <span />
              </a>
            </li>
            <li>
              <a href="#">
                <i>3</i>
                <div className="text-sm text-ui-300">
                  Launch the game and play a match in the correct game mode.
                </div>
                <span />
              </a>
            </li>
            <li>
              <a href="#">
                <i>4</i>
                <div className="text-sm text-ui-300">
                  When each match is finished you will get your Brawl points.
                </div>
                <span />
              </a>
            </li>
            <li>
              <a href="#">
                <i>5</i>
                <div className="text-sm text-ui-300">
                  Join a leaderboard by playing the required matches.
                </div>
                <span />
              </a>
            </li>
            <li>
              <a href="#">
                <i>6</i>
                <div className="text-sm text-ui-300">
                  Once the Brawl finishes you can see the final results.
                </div>
                <span />
              </a>
            </li>
            <li>
              <a href="#">
                <i>7</i>
                <div className="text-sm text-ui-300">
                  Top players will be able to claim their rewards.
                </div>
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
            Learn everything about the Brawls
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
