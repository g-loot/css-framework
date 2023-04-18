import React, { useContext, useEffect, useState } from "react";

import Accordion from "../../../../../components/Accordion/Accordion";
import FAQ from "../../../../../components/FAQ/FAQ";
import Link from "next/link";
import ModalLadderHowitworksVideo from "../modal-howitworks-video";
import ModalContainer from "../../../../../components/Modal/ModalContainer";
import { usePrototypeData } from "../../../../../contexts/prototype";
import { UiContext } from "../../../../../contexts/ui";
import { useRouter } from "next/router";

const MissionsHowitworksTabs = [
  {
    title: "Before entering a Ladder",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1674737016/Stryda/illustrations/stryda_ladders.jpg",
    content: [
      {
        type: "p",
        text: "Before entering a ladder make sure you have read and agree to our <a href='https://stryda.netlify.app/prototype/valorant/ladders?tab=how-it-works' class='link'>rules</a> and our <a href='https://stryda.gg/terms-conditions' class='link'>terms and conditions</a>.",
      },
      {
        type: "p",
        text: "<span class='text-lg text-ui-100'>Playing Valorant</span>",
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
          "Make sure you have installed the Stryda App and the Tracker Plugin.",
          "The Stryda icon should appear in your game at the top left of your screen meaning everything is up and running to track your progress.",
        ],
      },
      {
        type: "p",
        text: "<a href='#' class='link link-main'>Download Stryda tracker</a>",
      },
    ],
  },
  {
    title: "Pay tokens to activate Ladder matches",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1674744257/Stryda/illustrations/double_tokens.jpg",
    content: [
      {
        type: "p",
        text: "Playing in a ladder requires Tokens. Each match costs a certain number of Tokens.",
      },
      {
        type: "p",
        text: "When you have spent a Token and activated a Ladder match, your next game match in the correct game mode will count towards the Ladder.",
      },
      {
        type: "p",
        text: "If you run out of Tokens, there are several ways to get more:",
      },
      {
        type: "ul",
        text: [
          "Buy Tokens in the Stryda wallet.",
          "Earn Tokens by completing Missions and unlocking Mission Rewards.",
          "Claim free Tokens in your Daily Login Streak.",
        ],
      },
    ],
  },
  {
    title: "Playing your matches & climbing the leaderboard",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1674744427/Stryda/illustrations/leaderboard_details.jpg",
    content: [
      {
        type: "p",
        text: "To join the leaderboard, you need to complete a certain number of matches depending on the rules of the Ladder you want to compete in.",
      },
      {
        type: "p",
        text: "When you have played the minimum amount of matches, your Ladder points will be added to the leaderboard. ",
      },
      {
        type: "p",
        text: "You can always play more matches as long as you have Tokens. Only your best matches will count.",
      },
    ],
  },
  {
    title: "Ladder levels & groups",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1674737013/Stryda/illustrations/brawl-rank_levels.jpg",
    content: [
      {
        type: "h3",
        text: "Ladder levels",
      },
      {
        type: "p",
        text: "Some Ladders put players into different levels based on their performance in previous ladders while others are open for everyone no matter the skill level. ",
      },
      {
        type: "p",
        text: "Note that your in-game rank and your Ladder level have no correlation whatsoever.",
      },
      {
        type: "h3",
        text: "Groups & leaderboards",
      },
      {
        type: "p",
        text: "Some Ladders are so big that they are split into smaller groups to give everyone a better chance to win.",
      },
      {
        type: "p",
        text: "Each group has its own leaderboard and rewards.",
      },
    ],
  },
  {
    title: "If there is a tie",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1674737017/Stryda/illustrations/tiebreaker.jpg",
    content: [
      {
        type: "p",
        text: "If there is a tie, the tiebreaker in your 3 best matches decides who wins.",
      },
      {
        type: "p",
        text: "If 2 users have the same points and the same tiebreaker score, a second tiebreaker will be used to determine the winner.",
      },
    ],
  },
  {
    title: "Playing with your clan",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1674737013/Stryda/illustrations/clans.jpg",
    content: [
      {
        type: "p",
        text: "In Clan Ladders, your Ladder matches count for both the Solo and the Clan leaderboards.",
      },
      {
        type: "p",
        text: "To play in a Clan Ladder, your Clan must have that game as one of their played games on the Clan profile.",
      },
      {
        type: "p",
        text: "Enough Clan members must play in the Ladder for the Clan to appear on the leaderboard.",
      },
      {
        type: "p",
        text: "The Clan Ladder points are made up of the best Ladder points from the best Clan players.",
      },
    ],
  },
  {
    title: "If you leave your clan in the middle of a Ladder",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1674737016/Stryda/illustrations/picture_gamer.jpg",
    content: [
      {
        type: "p",
        text: "If you leave a Clan in an ongoing Ladder and have contributed to the Clan by playing matches, you will still get rewarded if that Clan wins any rewards when the Ladder ends.",
      },
      {
        type: "p",
        text: "If you change Clans during an ongoing Ladder and have already played a Ladder match with the old Clan, you will not get rewards with the new Clan. ",
      },
      {
        type: "p",
        text: "The points you contribute with still belong to the old Clan until the Ladder ends. ",
      },
      {
        type: "p",
        text: "You are free to join a new Clan and get rewards with that Clan if you haven’t played matches in an ongoing Ladder with a previous Clan.",
      },
    ],
  },
  {
    title: "If a game goes into maintenance",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1674737015/Stryda/illustrations/maintenance.jpg",
    content: [
      {
        type: "p",
        text: "If Stryda or the game goes into maintenance, all stats stops being recorded. If you have started a Ladder match, you will get your Tokens back.",
      },
      {
        type: "p",
        text: "Any pending tokens activated to a ladder will be automatically refunded once it has been canceled/ended.",
      },
      {
        type: "p",
        text: "Once the maintenance is over, the Ladder will continue. If there is a bigger issue or if the maintenance lasts for several days, Stryda will decide if the Ladder will continue. If the Ladder is canceled, you will get your Tokens back",
      },
    ],
  },
  {
    title: "I am experiencing issues with the Ladders",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1674737014/Stryda/illustrations/error.jpg",
    content: [
      {
        type: "p",
        text: "If you are playing VALORANT, make sure your Riot and Stryda accounts are linked in <a href='#' class='link'>your settings</a>.",
      },
      {
        type: "p",
        text: "If you are playing PUBG: BATTLEGROUNDS, make sure your Steam and Stryda accounts are linked in <a href='#' class='link'>your settings</a>.",
      },
      {
        type: "p",
        text: "If you are playing any other game, make sure you have installed the Stryda App and the Tracker Plugin. Make sure the overlay is running with a green dot.",
      },
      {
        type: "p",
        text: "Note that stats can take some time to be updated.",
      },
      {
        type: "p",
        text: "If the issue persists check out our <a href='http://help.stryda.gg/' target='_blank' class='link'>help articles</a> or <a href='http://help.stryda.gg/' target='_blank' class='link'>contact support</a>.",
      },
    ],
  },
];

export default function TabClanLeaderboardsHowItWorks() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const hasAds = query.ads === "true" ? true : false;
  const uiContext = useContext(UiContext);
  const modalVideo = query.modalvideo === "true" ? true : false;
  const [selectedGame, setSelectedGame] = useState(null);
  const { game } = router.query;

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game]);

  function openModalLadderHowitworksVideo() {
    uiContext.openModal(
      <ModalLadderHowitworksVideo></ModalLadderHowitworksVideo>
    );
  }

  useEffect(() => {
    if (modalVideo) {
      openModalLadderHowitworksVideo();
    }
  }, [modalVideo]);

  return (
    <>
      {selectedGame && (
        <>
          <section
            className="py-12 animate-slide-in-bottom animate-delay"
            style={{ "--delay": "calc(1 * 0.05s)" }}
          >
            <div className="grid gap-8 grid-cols-1 xl:grid-cols-3 items-center">
              <img
                className="col-span-1 rounded-lg"
                src="https://res.cloudinary.com/gloot/image/upload/v1674745238/Stryda/illustrations/ladder_leaderboard.jpg"
                width="100%"
                height="auto"
                alt=""
              />
              <div className="col-span-2 px-4 sm:px-0">
                <h2 className="h4 mb-4">What is a Ladder?</h2>
                <div className="columns-2 space-y-4 gap-8">
                  <p className="text-ui-300 leading-relaxed">
                    In Ladders you compete against other Stryda players and/or
                    Clans to climb a leaderboard.
                  </p>
                  <ul className="list-inside list-disc space-y-4 text-ui-300 leading-relaxed">
                    <li>
                      Ladders are based on your stats, just like Missions. You
                      don’t need to be in the same server as the other Ladder
                      players.
                    </li>
                    <li>
                      You earn Ladder points based on the objective, e.g. kills,
                      goals or score from the game.
                    </li>
                    <li>
                      For Valorant and PUBG: BATTLEGROUNDS you need to connect
                      your Riot and Steam accounts respectively to Stryda; for
                      all the other games you need the Stryda App running while
                      you play.
                    </li>
                    <li>
                      Ladders use a “best-of” format. You can enter as many
                      times as you want, and only your best scores count.
                    </li>
                    <li>
                      You need to complete a set numbers of matches before you
                      can join and see the Ladder leaderboard.
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
              <h2 className="h4 mb-4">How the Ladder works</h2>
            </div>
            <div className="surface sm:rounded-lg overflow-hidden max-w-sm mx-auto mb-4 relative">
              <div className="absolute inset-0 flex items-center justify-center bg-ui-900/50">
                <button
                  type="button"
                  className="button button-primary button-lg button-play"
                  onClick={openModalLadderHowitworksVideo}
                >
                  <span className="icon icon-circle-caret-right"></span>
                </button>
              </div>
              <img
                src="https://res.cloudinary.com/gloot/image/upload/v1676383443/Stryda/illustrations/ladders_howitworks_video.jpg"
                width="100%"
                height="auto"
                alt=""
              />
            </div>
            <div className="overflow-x-auto scrollbar-desktop overflow-y-hidden pt-4">
              <ul className="step step-label-bottom step-primary is-inactive min-w-[1000px] !pb-44">
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
                  <a href="#">
                    <i>2</i>
                    <div className="text-sm text-ui-300">
                      Use Tokens to activate Ladder matches
                    </div>
                    <span />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i>3</i>
                    <div className="text-sm text-ui-300">
                      Launch the game and play matches in the correct game mode
                    </div>
                    <span />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i>4</i>
                    <div className="text-sm text-ui-300">
                      Your total Ladder points are based on the specific amount
                      of matches required
                    </div>
                    <span />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i>5</i>
                    <div className="text-sm text-ui-300">
                      Once the Ladder finishes you can see the final results
                    </div>
                    <span />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i>6</i>
                    <div className="text-sm text-ui-300">
                      Top players/Clans will be able to claim their rewards
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
              <h2 className="h4 mb-6">Learn everything about the Ladders</h2>
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
