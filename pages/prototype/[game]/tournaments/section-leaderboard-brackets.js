import React, { useContext, useEffect, useRef, useState } from "react";

import Accordion from "../../../../components/Accordion/Accordion";
import Link from "next/link";
import ModalContainer from "../../../../components/Modal/ModalContainer";
import { UiContext } from "../../../../contexts/ui";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";

const TournamentLeaderboard = [
  {
    title: "Super Weekend",
    matches: [
      {
        date: "May 5",
        time: "15:30 PM",
        url: "#",
        teams: [
          {
            clan: 1,
            score: 2,
            iswinning: true,
          },
          {
            clan: 2,
            score: 1,
          },
        ],
      },
      {
        date: "May 6",
        time: "15:30 PM",
        url: "#",
        teams: [
          {
            clan: 3,
            score: 5,
            iswinning: true,
          },
          {
            clan: 4,
            score: 1,
          },
        ],
      },
      {
        date: "May 5",
        time: "18:00 PM",
        url: "#",
        teams: [
          {
            clan: 5,
            score: 2,
          },
          {
            clan: 6,
            score: 3,
            iswinning: true,
          },
        ],
      },
      {
        date: "May 6",
        time: "18:00 PM",
        url: "#",
        teams: [
          {
            clan: 7,
            score: 7,
          },
          {
            clan: 8,
            score: 9,
            iswinning: true,
          },
        ],
      },
    ],
  },
  {
    title: "Qualifiers",
    matches: [
      {
        date: "May 10",
        time: "20:00 PM",
        url: "#",
        teams: [
          {
            clan: 1,
            score: 3,
            iswinning: true,
          },
          {
            clan: 4,
            score: 1,
          },
        ],
      },
      {
        date: "May 11",
        time: "20:00 PM",
        url: "#",
        teams: [
          {
            clan: 6,
            score: 1,
          },
          {
            clan: 8,
            score: 5,
            iswinning: true,
          },
        ],
      },
    ],
  },
  {
    title: "Grand Final",
    matches: [
      {
        date: "May 15",
        time: "20:30 PM",
        url: "#",
        teams: [
          {
            clan: 1,
            score: "?",
          },
          {
            clan: 8,
            score: "?",
          },
        ],
      },
    ],
  },
];

export default function SectionTournamentsLeaderboarBrackers() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const hasAds = query.ads === "true" ? true : false;
  const uiContext = useContext(UiContext);
  const [selectedGame, setSelectedGame] = useState(null);
  const { game } = router.query;
  const { tournament_id } = router.query;

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game));
  }, [game]);

  const [SelectedTournament, setSelectedTournament] = useState(0);
  const [SelectedRound, setSelectedRound] = useState(0);
  const [SelectedGroup, setSelectedGroup] = useState(0);
  const [SelectedGameround, setSelectedGameround] = useState(0);
  const [Loading, setLoading] = useState(false);

  function switchLeaderboard(Tournament, Round, Group, Game) {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
      setSelectedTournament(Tournament);
      setSelectedRound(Round);
      setSelectedGroup(Group);
      setSelectedGameround(Game);
    }, 1000);
    return () => clearTimeout(timer);
  }

  function selectLeaderboard(e) {
    const selectLeaderboardTarget = e.target.value.split(",");
    const selectTournament = selectLeaderboardTarget[0];
    const selectRound = selectLeaderboardTarget[1];
    const selectGroup = selectLeaderboardTarget[2];
    const selectGame = selectLeaderboardTarget[3];
    switchLeaderboard(selectTournament, selectRound, selectGroup, selectGame);
  }

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function randomArrayShuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  const screenshotRef = useRef();

  return (
    <>
      {selectedGame && (
        <>
          <section className="min-h-screen sm:rounded-lg mb-8">
            <div className="brackets-container scrollbar-desktop">
              <div className="brackets">
                {TournamentLeaderboard.map((round, roundIndex) => (
                  <>
                    <div className="bracket-round" key={roundIndex}>
                      <div className="bracket-title">
                        <span>{round.title}</span>
                      </div>
                      <ul>
                        {round.matches.map((match, matchIndex) => (
                          <li className="bracket-item" key={matchIndex}>
                            <div>
                              <div className="bracket-meta">
                                <div>
                                  <span className="icon icon-calendar-2" />
                                  <span>
                                    {match.date} • {match.time}
                                  </span>
                                </div>
                                <div>
                                  <a href={match.url}>Match details</a>
                                </div>
                              </div>
                              <ul className="bracket-teams">
                                {match.teams.map((team, teamIndex) => (
                                  <li
                                    className={`${
                                      team.iswinning ? "is-active" : ""
                                    }`}
                                    key={teamIndex}
                                  >
                                    <div className="avatar avatar-tiny">
                                      <div>
                                        <img
                                          src={
                                            prototype.getClanByID(team.clan)
                                              .avatar
                                          }
                                          alt={
                                            prototype.getClanByID(team.clan)
                                              .nickname
                                          }
                                        />
                                      </div>
                                    </div>
                                    <b>
                                      &#91;
                                      {prototype.getClanByID(team.clan)?.tag}
                                      &#93;{" "}
                                      {
                                        prototype.getClanByID(team.clan)
                                          .nickname
                                      }
                                    </b>
                                    <i>{team.score}</i>
                                  </li>
                                ))}
                              </ul>
                              <div className="bracket-info">
                                Upper bracket {roundIndex + 1}.{matchIndex + 1}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
