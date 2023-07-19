import { useState, useEffect } from "react";
import Accordion from "../../../../components/Accordion/Accordion";
import Link from "next/link";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import FAQ from "../../../../components/FAQ/FAQ";

const HowitworksTabs = [
  {
    title: "Before you can do Missions",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1674737014/Stryda/illustrations/cpu_install.jpg",
    content: [
      {
        type: "p",
        text: "Before playing, ensure you have read and agreed to <a href='https://stryda.gg/terms-conditions' class='link'>Stryda’s terms and conditions</a>.",
      },
      {
        type: "p",
        text: "If you’re playing Valorant or PUBG, you need to connect your game account.",
      },
      {
        type: "p",
        text: "For any other game, download and install the Stryda App with the tracker plugin. The application is lightweight and won’t affect your gameplay. The App focuses on anti-cheat, ensuring fair practices for all Stryda users.",
      },
      {
        type: "p",
        text: "<a href='#' class='link link-main'>Download the Stryda App</a>",
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
        text: "Every time you successfully complete a Mission, you’ll earn XP, which you can use to claim rewards.",
      },
      {
        type: "p",
        text: "The XP you earn will be added to your player level and to the Battlepass. You will unlock a reward for each milestone you reach in the Battlepass. XP is accumulated from all games you play on Stryda. That means you gain XP from any game that Stryda supports. ",
      },
    ],
  },
  {
    title: "Battlepass",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1674737013/Stryda/illustrations/coins_tokens_xp.jpg",
    content: [
      {
        type: "p",
        text: "Every time you reach a milestone on your Battlepass, you unlock a new reward, increasingly more rewarding as you move deeper.",
      },
      {
        type: "p",
        text: "Each Battlepass lasts for a set period of time, make sure to check out its duration so that you don’t miss out on any rewards!",
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
        text: "Premium members receive a 50% XP boost on all completed Missions. Become a Premium member today to earn faster rewards!",
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
        text: "If you are playing Valorant, make sure you have connected your Riot account to Stryda. For PUBG, please check that your Steam account is connected to Stryda. Complete this from the <a href='#' class='link link-main'>settings page</a>.",
      },
      {
        type: "p",
        text: "If you are playing any other Stryda-supported games, you have to install the Stryda App and the tracker plugin. Make sure that the overlay is running, you will see a green dot visible. Note that stats can take some time to be updated. If the issue persists check out our <a href='http://help.stryda.gg/' target='_blank' rel='noopener noreferrer' class='link'>help articles</a>, or <a href='http://help.stryda.gg/' target='_blank' rel='noopener noreferrer' class='link'>contact support</a>.",
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
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 items-start">
                <img
                  className="rounded-lg"
                  src="https://res.cloudinary.com/gloot/image/upload/v1674737015/Stryda/illustrations/missions_cards.jpg"
                  width="100%"
                  height="auto"
                  alt=""
                />
                <div className="px-4 sm:px-0">
                  <h2 className="h4 mb-4">Missions</h2>
                  <p className="text-ui-300 leading-relaxed mb-2">
                    Missions are smaller objectives that you can complete
                    whenever you want. By completing Missions, you level up your
                    profile and progress in the Battlepass. You can complete
                    Missions across all the games available on Stryda.
                  </p>
                  <p className="text-ui-300 leading-relaxed">
                    Each day, you can reveal two new missions in any game you
                    like and you can have a maximum of nine missions active at
                    the same time.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 items-start">
                <img
                  className="rounded-lg"
                  src="https://res.cloudinary.com/gloot/image/upload/v1674737013/Stryda/illustrations/coins_tokens_xp.jpg"
                  width="100%"
                  height="auto"
                  alt=""
                />
                <div className="px-4 sm:px-0">
                  <h2 className="h4 mb-4">Battlepass</h2>
                  <p className="text-ui-300 leading-relaxed mb-2">
                    Every time you reach a milestone on your Battlepass, you
                    unlock a new reward, increasingly more rewarding as you move
                    deeper.
                  </p>
                  <p className="text-ui-300 leading-relaxed">
                    Each Battlepass lasts for a set period of time, make sure
                    to check out its duration so that you don’t miss out on any
                    rewards!
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
              <h2 className="h4 mb-4">How Missions and Battlepass work</h2>
            </div>
            <div className="overflow-x-auto scrollbar-desktop overflow-y-hidden py-4">
              <ul className="step step-label-bottom step-primary is-inactive min-w-[1000px] !pb-44">
                <li>
                  <div>
                    <i>1</i>
                    <div className="text-sm text-ui-300">
                      Ensure you meet all Stryda requirements by either
                      connecting your game account, or installing the Stryda
                      App, along with the tracker plugin.
                    </div>
                    <span />
                  </div>
                </li>
                <li>
                  <div>
                    <i>2</i>
                    <div className="text-sm text-ui-300">
                      Launch and play your game.
                    </div>
                    <span />
                  </div>
                </li>
                <li>
                  <div>
                    <i>3</i>
                    <div className="text-sm text-ui-300">
                      The progress of your missions will be updated
                      automatically once the match is finished.
                    </div>
                    <span />
                  </div>
                </li>
                <li>
                  <div>
                    <i>4</i>
                    <div className="text-sm text-ui-300">
                      Once a mission is completed, claim your XP and head over
                      to the Battlepass.
                    </div>
                    <span />
                  </div>
                </li>
                <li>
                  <div>
                    <i>5</i>
                    <div className="text-sm text-ui-300">
                      Claim your rewards.
                    </div>
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
              {HowitworksTabs.map((tab, tabIndex) => (
                <FAQ key={tabIndex} content={tab} />
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );
}
