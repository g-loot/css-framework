import React, { useContext, useEffect, useState } from "react";

import Accordion from "../../../../../components/Accordion/Accordion";
import FAQ from "../../../../../components/FAQ/FAQ";
import Link from "next/link";
import ModalContainer from "../../../../../components/Modal/ModalContainer";
import { usePrototypeData } from "../../../../../contexts/prototype";
import { UiContext } from "../../../../../contexts/ui";
import { useRouter } from "next/router";
import Tooltip from "../../../../../components/Tooltip/Tooltip";
import Reward from "../../../../../components/Reward/Reward";

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

const rewardDistribClan = [
  {
    name: "1-10",
    rewards: [
      {
        type: "coin",
        value: 450000,
      },
    ],
  },
  {
    name: "11-20",
    rewards: [
      {
        type: "coin",
        value: 425000,
      },
    ],
  },
  {
    name: "21-50",
    rewards: [
      {
        type: "coin",
        value: 400000,
      },
    ],
  },
  {
    name: "51-150",
    rewards: [
      {
        type: "coin",
        value: 30000,
      },
    ],
  },
  {
    name: "151-300",
    rewards: [
      {
        type: "coin",
        value: 1500,
      },
    ],
  },
];

export default function TabClanLeaderboardsAbout() {
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

  return (
    <>
      {selectedGame && (
        <>
          <section
            className="pt-4 pb-8 animate-slide-in-bottom animate-delay"
            style={{ "--delay": "calc(1 * 0.05s)" }}
          >
            <div className="flex-1 surface sm:rounded-lg p-4 relative flex flex-col items-stretch">
              <div className="border-b border-ui-700 pb-4">
                <h2 className="text-2xl">About Clan Events</h2>
              </div>
              <div className="p-4 flex flex-col lg:flex-row items-center gap-8 leading-relaxed">
                <div className="flex-3 xl:columns-2 gap-8 space-y-4 order-2 lg:order-1 text-ui-300 leading-relaxed">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula ac diam sed interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam suscipit nibh eget scelerisque eleifend. Vestibulum eget gravida orci. Donec lorem justo, eleifend eget ultrices id, sagittis in nisi.
                  </p>
                  <p>
                    Nam dapibus nibh a odio blandit, ac pellentesque velit posuere. Aenean at pellentesque orci. Fusce egestas est leo, a blandit lectus tincidunt sed. In ullamcorper elit non ultricies mollis. Suspendisse non sem id turpis cursus fringilla id nec tellus. Sed efficitur hendrerit tempus. Phasellus nec lobortis nunc, eget laoreet lectus.
                  </p>
                  <ul className="list-outside list-disc space-y-4">
                    <li>
                      onec urna orci, interdum ac varius ut, luctus eget leo.
                    </li>
                    <li>
                      Quisque aliquam, massa at euismod tristique, magna augue
                      sagittis nunc, sit amet porta risus libero ut mi.
                    </li>
                    <li>
                      Vestibulum cursus lorem vitae nulla sodales, sed posuere
                      tortor efficitur.
                    </li>
                    <li>
                      Integer vestibulum semper nisi. Mauris porta accumsan sem
                      at fermentum. Nullam eu mattis risus.
                    </li>
                  </ul>
                </div>
                <div className="flex-2 order-1 lg:order-2">
                  <img
                    className="frounded"
                    src="https://res.cloudinary.com/gloot/image/upload/Stryda/illustrations/clan_season.png"
                    width="100%"
                    height="auto"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/*

            <div className="grid gap-8 grid-cols-1 xl:grid-cols-3 items-center">
              <div className="col-span-2 px-4 sm:px-0">
                <h2 className="h4 mb-4">Welcome to the Clan Events</h2>
                <div className="columns-2 space-y-4 gap-8">
                  <p className="text-ui-300 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin porta magna et nulla ultrices viverra.
                  </p>
                  <ul className="list-inside list-disc space-y-4 text-ui-300 leading-relaxed">
                    <li>
                      onec urna orci, interdum ac varius ut, luctus eget leo.
                    </li>
                    <li>
                      Quisque aliquam, massa at euismod tristique, magna augue
                      sagittis nunc, sit amet porta risus libero ut mi.
                    </li>
                    <li>
                      Vestibulum cursus lorem vitae nulla sodales, sed posuere
                      tortor efficitur.
                    </li>
                    <li>
                      Integer vestibulum semper nisi. Mauris porta accumsan sem
                      at fermentum. Nullam eu mattis risus.
                    </li>
                  </ul>
                </div>
              </div>
              <img
                className="col-span-1 rounded-lg"
                src="https://res.cloudinary.com/gloot/image/upload/v1682322125/Stryda/illustrations/clan_season.png"
                width="100%"
                height="auto"
                alt=""
              />
            </div>
      */}
          </section>
          <section
            className="pb-8 animate-slide-in-bottom"
            style={{ "--delay": "calc(2 * 0.05s)" }}
          >
            <div className="flex flex-col lg:flex-row items-stretch gap-8 mb-8">
              <div className="flex-2 surface sm:rounded-lg p-4 relative flex flex-col items-stretch">
                <div className="border-b border-ui-700 pb-4">
                  <h2 className="text-2xl">Reward distribution</h2>
                </div>
                <div className="flex-1 flex flex-col items-center mt-4">
                  <ul className="leading-none space-y-1 w-full">
                    <li className="flex justify-between gap-2 text-xs text-ui-300 uppercase px-4 pb-2 relative z-10">
                      <span>Position</span>
                      <div className="flex gap-2 items-center">
                        <span>Clan rewards</span>
                        <Tooltip
                          tooltip={
                            <div className="max-w-xs text-sm text-ui-200 leading-tight normal-case space-y-2">
                              <p>
                                Rewards will be distributed evenly to everyone
                                in the clan once the Ladder has ended.
                              </p>
                              <p>
                                For example, if the Clan reward is [number]
                                Coins and [number] Golden tickets - each Clan
                                member will split on the [number] Coins and
                                [number] Golden tickets.
                              </p>
                            </div>
                          }
                        >
                          <button className="text-ui-300 text-0">
                            <span className="icon icon-16 icon-c-info" />
                          </button>
                        </Tooltip>
                      </div>
                    </li>
                    {rewardDistribClan.map((reward, rewardIndex) => (
                      <li
                        key={reward}
                        className="flex items-center justify-between gap-2 rounded bg-ui-850/50 py-2 px-4 relative z-0 animate-slide-in-bottom animate-delay"
                        style={{
                          "--delay": "calc(" + rewardIndex + " * 0.05s)",
                        }}
                      >
                        <span className="text-lg">{reward.name}</span>
                        <div className="flex items-center justify-center gap-4">
                          {reward.rewards.map((reward, rewardIndex) => (
                            <>
                              <Reward
                                key={rewardIndex}
                                reward={reward}
                                gap="gap-2"
                                iconClassNames="text-lg"
                                textClassNames="text-lg"
                              />
                            </>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-1 surface sm:rounded-lg p-4 relative flex flex-col items-stretch">
                <div className="border-b border-ui-700 pb-4">
                  <h2 className="text-2xl">Coins</h2>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center text-ui-300 space-y-2 leading-relaxed">
                  <p>
                    Use Coins to buy gift cards in the Stryda shop. Get gift
                    cards for clothes, games, and more.
                  </p>
                  <p>
                    The higher you are on the Ladder leaderboards, the more
                    Coins you can win!
                  </p>
                </div>
                <div className="border-t border-ui-700 pt-4">
                  <Link href={`/prototype/shop`}>
                    <button type="button" className="button button-secondary">
                      <span>Visit the shop</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {/*
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
              */}
        </>
      )}
    </>
  );
}
