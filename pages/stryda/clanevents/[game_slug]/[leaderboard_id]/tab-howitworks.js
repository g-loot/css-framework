import React from "react";

import FAQ from "@/components/FAQ/FAQ";
import { usePrototypeData } from "@/contexts/prototype";

const HowitworksTabs = [
  {
    title: "Before entering a Clan Event",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1687351788/Stryda/illustrations/Clan_Seasons_HiW_Before_entering.jpg",
    content: [
      {
        type: "p",
        text: "Before entering a ladder make sure you have read and agree to our <a href='https://stryda.netlify.app/stryda/valorant/ladders?tab=how-it-works' class='link'>rules</a> and our <a href='https://stryda.gg/terms-conditions' class='link'>terms and conditions</a>.",
      },
      {
        type: "p",
        text: "Make sure you connected your Stryda account with your RIOT ID in your <a href='https://stryda.netlify.app/stryda/profile/setting' class='link'>settings</a>.",
      },
    ],
  },
  {
    title: "Playing with Clan members and climbing the leaderboard",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1687351788/Stryda/illustrations/Clan_Seasons_HiW_playing.jpg",
    content: [
      {
        type: "p",
        text: "To join the leaderboard, you or another member need to enter the Event by registering your Clan.",
      },
      {
        type: "p",
        text: "Several parties from a Clan can play at the same time.",
      },
      {
        type: "p",
        text: "The scores for each match played will be counted into the total for your Clan.",
      },
      {
        type: "p",
        text: "You and your Clan members can play as many matches as you want.",
      },
      {
        type: "p",
        text: "Start playing matches in-game with a full party of players from your Clan. Make sure the party consists of players from your Clan only.",
      },
    ],
  },
  {
    title: "If there is a tie between Clans",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1687351789/Stryda/illustrations/Clan_Seasons_HiW_tie.jpg",
    content: [
      {
        type: "p",
        text: "If there is a tie, there is tiebreakers that determine which Clan places higher.",
      },
      {
        type: "p",
        text: "If two Clans have the same scores and the same tiebreaker score, a second tiebreaker will be used to determine the winner.",
      },
    ],
  },
  {
    title: "If you leave your Clan in the middle of a Clan Event",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1687351788/Stryda/illustrations/Clan_Seasons_HiW_leave.jpg",
    content: [
      {
        type: "p",
        text: "If you leave a Clan in an ongoing Event and have contributed to the Clan by playing matches, you will still get rewarded if that Clan wins any rewards when the Clan Event ends.",
      },
      {
        type: "p",
        text: "The scores you contribute with still belong to the old Clan until the Clan Event ends.",
      },
    ],
  },
  {
    title: "If a game goes into maintenance",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1687351788/Stryda/illustrations/Clan_Seasons_HiW_maintenance.jpg",
    content: [
      {
        type: "p",
        text: "If Stryda or the game goes into maintenance, all stats stops being recorded.",
      },
      {
        type: "p",
        text: "Once the maintenance is over, the Event will continue. If there is a bigger issue or if the maintenance lasts for several days, Stryda will decide if the Event will continue.",
      },
      {
        type: "p",
        text: "Every player and Clan will be notified.",
      },
    ],
  },
  {
    title: "I am experiencing issues with the Clan Events",
    image:
      "https://res.cloudinary.com/gloot/image/upload/v1687351788/Stryda/illustrations/Clan_Seasons_HiW_issue.jpg",
    content: [
      {
        type: "p",
        text: "Note that stats can take some time to be updated.",
      },
      {
        type: "p",
        text: "Make sure you connected your Stryda account with your RIOT ID in your <a href='https://stryda.netlify.app/stryda/profile/setting' class='link'>settings</a>.",
      },
      {
        type: "p",
        text: "If the issue persists check out our <a href='http://help.stryda.gg/' target='_blank' class='link'>help articles</a> or <a href='http://help.stryda.gg/' target='_blank' class='link'>contact support</a>.",
      },
    ],
  },
];

export default function TabClanLeaderboardsHowItWorks() {
  const prototype = usePrototypeData();
  const selectedGame = prototype.getGameByID(prototype.defaultGameID);

  return (
    <>
      {selectedGame && (
        <>
          <section
            className="pb-12 animate-slide-in-bottom animate-delay"
            style={{ "--delay": "calc(1 * 0.05s)" }}
          >
            <div className="grid gap-8 grid-cols-1 xl:grid-cols-3 items-center">
              <img
                className="col-span-1 rounded-lg"
                src="https://res.cloudinary.com/gloot/image/upload/v1687351788/Stryda/illustrations/Clan_Seasons_HiW_intro.jpg"
                width="100%"
                height="auto"
                alt=""
              />
              <div className="col-span-2 px-4 sm:px-0">
                <h2 className="h4 mb-4">What is a Clan Event?</h2>
                <div className="columns-2 space-y-4 gap-8">
                  <p className="text-ui-300 leading-relaxed">
                    In Clan Events you and members from your Clan play games
                    together. You compete against other Clans on Stryda to climb
                    a leaderboard.
                  </p>
                  <ul className="list-inside list-disc space-y-4 text-ui-300 leading-relaxed">
                    <li>
                      Your party in the game need to be filled up with members
                      from your Clan only.
                    </li>
                    <li>
                      The scores coming in are based on your teams performance
                      while playing in the same party, in the game.
                    </li>
                    <li>
                      The scores are based on the specific objective described for the Event, e.g. wins minus losses.
                    </li>
                    <li>
                      You or someone from your Clan need to setup the Clan for the Event. This is only needed once.
                    </li>
                    <li>You can play as many matches as you want.</li>
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
              <h2 className="h4 mb-4">How the Clan Events work</h2>
            </div>
            <div className="overflow-y-hidden overflow-x-auto scrollbar-desktop overflow-y-hidden pt-4">
              <ul className="step step-label-bottom step-primary is-inactive min-w-[1000px] !pb-44">
                <li>
                  <div>
                    <i>1</i>
                    <div className="text-sm text-ui-300">
                      Make sure you connect your account with your RIOT ID
                    </div>
                    <span />
                  </div>
                </li>
                <li>
                  <a href="#">
                    <i>2</i>
                    <div className="text-sm text-ui-300">
                      Join the leaderboard by registering your Clan to an
                      ongoing Event
                    </div>
                    <span />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i>3</i>
                    <div className="text-sm text-ui-300">
                      Launch the game and create a full party with your Clan
                      members only
                    </div>
                    <span />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i>4</i>
                    <div className="text-sm text-ui-300">
                      Play as many matches as you want in the correct game mode
                    </div>
                    <span />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i>5</i>
                    <div className="text-sm text-ui-300">
                      The total score of the Clan are based on the specific
                      objective
                    </div>
                    <span />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i>6</i>
                    <div className="text-sm text-ui-300">
                      Once the Clan Event has ended, you can see the final results
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
              <h2 className="h4 mb-6">
                Learn everything about the Clan Events
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
