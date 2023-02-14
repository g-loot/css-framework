import { useState, useEffect } from "react";
import Accordion from "../../../../components/Accordion/Accordion";
import Link from "next/link";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import FAQ from "../../../../components/FAQ/FAQ";

const MissionsHowitworksTabs = [
  {
    title: "Before you can do Missions",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1674737014/Stryda/illustrations/cpu_install.jpg",
    content: [
      {
        type: "p",
        text: "<span class='text-lg text-ui-100'>Playing VALORANT</span>",
      },
      {
        type: "ul",
        text: ["Make sure you connected your Riot account on Stryda"],
      },
      {
        type: "p",
        text: "<span class='text-lg text-ui-100'>Playing PUBG: BATTLEGROUNDS</span>",
      },
      {
        type: "ul",
        text: ["Make sure you connected your Steam account on Stryda"],
      },
      {
        type: "p",
        text: "<span class='text-lg text-ui-100'>Playing any other game</span>",
      },
      {
        type: "ul",
        text: [
          "Make sure you have installed the Stryda App and the tracker plugin.",
          "The Stryda icon should appear in your game at the top left of your screen meaning everything is up and running to track your Mission progress.",
        ],
      },
      {
        type: "p",
        text: "<a href='#' class='link link-main'>Download the Stryda App</a>",
      },
    ],
  },
  {
    title: "Play in the right mode",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1674737015/Stryda/illustrations/gamemode.jpg",
    content: [
      {
        type: "p",
        text: "Some Missions must be played in certain game modes. Make sure to check before you play.",
      },
    ],
  },
  {
    title: "How XP works",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1674737017/Stryda/illustrations/XP.jpg",
    content: [
      {
        type: "p",
        text: "Each time you successfully complete a Mission, you earn XP, which you use to claim Battle Pass Rewards.",
      },
      {
        type: "p",
        text: "The XP you earn will be added to the Battle Pass. For each milestone you reach in the Battle Pass, you will unlock a reward. XP is accumulated from all games you play on Stryda. That means you can get XP from any game that is supported by Stryda.",
      },
      {
        type: "p",
        text: "Your XP will reset after the Battle Pass ends and can not be transferred to the next Battle Pass.",
      },
    ],
  },
  {
    title: "Battle Pass",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1674737013/Stryda/illustrations/coins_tokens_xp.jpg",
    content: [
      {
        type: "p",
        text: "The Battle Pass turns your XP into useful stuff like Coins or Tokens. Each time you reach a milestone in the Battle Pass, you unlock another reward. The Battle Pass resets each week so you will always have something new to work towards.",
      },
    ],
  },
  {
    title: "Premium Rewards",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1674741728/Stryda/illustrations/premium_xp.jpg",
    content: [
      {
        type: "p",
        text: "Premium member get a 50% XP boost on all completed missions.",
      },
      {
        type: "p",
        text: "Become a Premium member today to earn rewards faster!",
      },
    ],
    hasButtonReward: true,
  },
  {
    title: "I am experiencing issues with the Missions",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1674737014/Stryda/illustrations/error.jpg",
    content: [
      {
        type: "p",
        text: "If you are playing VALORANT, make sure your Riot and Stryda accounts are linked in <a href='#' class='link link-main'>your settings</a>.",
      },
      {
        type: "p",
        text: "If you are playing PUBG: BATTLEGROUNDS, make sure your Steam and Stryda accounts are linked in <a href='#' class='link link-main'>your settings</a>.",
      },
      {
        type: "p",
        text: "If you are playing any other game, make sure you have installed the Stryda App and the tracker plugin. Make sure the overlay is running with a green dot.",
      },
      {
        type: "p",
        text: "Note that stats can take some time to be updated.",
      },
    ],
  },
];

export default function TabMissionsHowItWorks() {
  const prototype = usePrototypeData();
  const [selectedGame, setSelectedGame] = useState(null);
  const router = useRouter();
  const { game } = router.query;

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game]);

  return (
    <>
      {selectedGame && (
        <>
          <section
            className="py-12 animate-slide-in-bottom animate-delay"
            style={{ "--delay": "calc(1 * 0.05s)" }}
          >
            <div className="grid gap-8 grid-cols-1 xl:grid-cols-2">
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 items-center">
                <img
                  className="rounded-lg"
                  src="https://res.cloudinary.com/gloot/image/upload/v1674737015/Stryda/illustrations/missions_cards.jpg"
                  width="100%"
                  height="auto"
                  alt=""
                />
                <div className="px-4 sm:px-0">
                  <h2 className="h4 mb-4">Missions</h2>
                  <p className="text-ui-300 leading-relaxed">
                    Missions are daily objectives that reset every 24 hours. By
                    completing missions you earn XP that allow you to progress
                    on a weekly Battle pass with multiple rewards to claim. You
                    can complete missions across all the games available on
                    Stryda.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 items-center">
                <img
                  className="rounded-lg"
                  src="https://res.cloudinary.com/gloot/image/upload/v1674737013/Stryda/illustrations/coins_tokens_xp.jpg"
                  width="100%"
                  height="auto"
                  alt=""
                />
                <div className="px-4 sm:px-0">
                  <h2 className="h4 mb-4">Battle Pass</h2>
                  <p className="text-ui-300 leading-relaxed">
                    Each time you reach a milestone on the current Battle Pass,
                    you unlock a reward which could be either Tokens, Coins or a
                    combination of both. Battle Pass reset each week so you
                    always have something new to work towards.
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
              <h2 className="h4 mb-4">How Missions and Battle Pass work</h2>
            </div>
            <div className="overflow-x-auto scrollbar-desktop py-4">
              <ul className="step step-label-bottom step-primary is-inactive min-w-[1000px]">
                <li>
                  <div>
                    <i>1</i>
                    <div className="text-sm text-ui-300">
                      Make sure you meet the requirements. Dependent on the
                      game; either connect your game or install the Tracker
                      Plugin
                    </div>
                    <span />
                  </div>
                </li>
                <li>
                  <div>
                    <i>2</i>
                    <div className="text-sm text-ui-300">Launch your game</div>
                    <span />
                  </div>
                </li>
                <li>
                  <div>
                    <i>4</i>
                    <div className="text-sm text-ui-300">
                      Play a match in the correct game mode
                    </div>
                    <span />
                  </div>
                </li>
                <li>
                  <div>
                    <i>5</i>
                    <div className="text-sm text-ui-300">
                      The missions will be updated automatically once the match
                      is finished
                    </div>
                    <span />
                  </div>
                </li>
                <li>
                  <div>
                    <i>6</i>
                    <div className="text-sm text-ui-300">
                      XP will be added to the Battle Pass when you complete a
                      mission
                    </div>
                    <span />
                  </div>
                </li>
                <li>
                  <div>
                    <i>7</i>
                    <div className="text-sm text-ui-300">Claim your reward</div>
                    <span />
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section
            className="py-12 animate-slide-in-bottom animate-delay"
            style={{ "--delay": "calc(3 * 0.05s)" }}
          >
            <div className="px-4 sm:px-0">
              <h2 className="h4 mb-6">
                Step by step - How to complete Missions and earn Rewards
              </h2>
            </div>
            <div className="accordion accordion-highlighted surface sm:rounded-lg">
              {MissionsHowitworksTabs.map((tab, tabIndex) => (
                <FAQ key={tabIndex} content={tab} />
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );
}
