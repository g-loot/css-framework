import React, { useContext, useEffect, useRef, useState } from "react";

import Accordion from "../../../../components/Accordion/Accordion";
import Link from "next/link";
import ModalContainer from "../../../../components/Modal/ModalContainer";
import { UiContext } from "../../../../contexts/ui";
import { usePrototypeData } from "../../../../contexts/prototype";
import { useRouter } from "next/router";
import LeaderboardWings from "../../../../components/LeaderboardWings/LeaderboardWings";

const TournamentLeaderboard = [
  {
    name: "Open Qualifer EU",
    icon: "https://res.cloudinary.com/gloot/image/upload/v1655191500/Marketing/2022_PUBG_season_6/pubg_season_6_icon_open_white.svg",
    iconcolor:
      "https://res.cloudinary.com/gloot/image/upload/v1655191500/Marketing/2022_PUBG_season_6/pubg_season_6_icon_open_colored.png",
    date: "June 27 - July 3",
    region: "EU",
    rounds: [
      {
        name: "Round 1",
        groups: [
          {
            name: "Group 1",
            date: "June 27",
            time: "15:30 PM",
            games: [
              {
                name: "Game 1",
                results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
              },
              {
                name: "Game 2",
                results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
              },
            ],
          },
        ],
      },
      {
        name: "Round 2",
        groups: [
          {
            name: "Group 1",
            date: "June 27",
            time: "15:30 PM",
            games: [
              {
                name: "Game 1",
                results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
              },
              {
                name: "Game 2",
                results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Open Qualifer MEA",
    icon: "https://res.cloudinary.com/gloot/image/upload/v1655191500/Marketing/2022_PUBG_season_6/pubg_season_6_icon_open_white.svg",
    iconcolor:
      "https://res.cloudinary.com/gloot/image/upload/v1655191500/Marketing/2022_PUBG_season_6/pubg_season_6_icon_open_colored.png",
    date: "June 27 - July 3",
    region: "EMEA",
    rounds: [
      {
        name: "Round 1",
        groups: [
          {
            name: "Group 1",
            date: "June 27",
            time: "15:30 PM",
            games: [
              {
                name: "Game 1",
                results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
              },
              {
                name: "Game 2",
                results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
              },
            ],
          },
        ],
      },
      {
        name: "Round 2",
        groups: [
          {
            name: "Group 1",
            date: "June 27",
            time: "15:30 PM",
            games: [
              {
                name: "Game 1",
                results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
              },
              {
                name: "Game 2",
                results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Super Weekend",
    icon: "https://res.cloudinary.com/gloot/image/upload/v1655191500/Marketing/2022_PUBG_season_6/pubg_season_6_icon_superwkd_white.svg",
    iconcolor:
      "https://res.cloudinary.com/gloot/image/upload/v1655191500/Marketing/2022_PUBG_season_6/pubg_season_6_icon_superwkd_colored.png",
    date: "July 7 - 10",
    region: "World",
    rounds: [
      {
        name: "Round 1",
        groups: [
          {
            name: "Group 1",
            date: "July 7",
            time: "15:30 PM",
            games: [
              {
                name: "Game 1",
                results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
              },
              {
                name: "Game 2",
                results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
              },
            ],
          },
        ],
      },
      {
        name: "Round 2",
        groups: [
          {
            name: "Group 1",
            date: "July 7",
            time: "15:30 PM",
            games: [
              {
                name: "Game 1",
                results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
              },
              {
                name: "Game 2",
                results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Grand Final",
    icon: "https://res.cloudinary.com/gloot/image/upload/v1655191500/Marketing/2022_PUBG_season_6/pubg_season_6_icon_final_white.svg",
    iconcolor:
      "https://res.cloudinary.com/gloot/image/upload/v1655191500/Marketing/2022_PUBG_season_6/pubg_season_6_icon_final_colored.png",
    date: "July 22-24",
    region: "World",
    disabled: true,
    rounds: [
      {
        name: "Round 1",
        groups: [
          {
            name: "Group 1",
            date: "July 22",
            time: "15:30 PM",
            games: [
              {
                name: "Game 1",
                results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
              },
              {
                name: "Game 2",
                results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
              },
            ],
          },
        ],
      },
      {
        name: "Round 2",
        groups: [
          {
            name: "Group 1",
            date: "July 22",
            time: "15:30 PM",
            games: [
              {
                name: "Game 1",
                results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
              },
              {
                name: "Game 2",
                results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default function SectionTournamentsLeaderboardTable() {
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
          <section
            className="min-h-screen animate-slide-in-bottom animate-delay sm:rounded-lg mb-8"
            style={{ "--delay": "calc(1 * 0.05s)" }}
          >
            <div className="mx-auto max-w-xl flex overflow-x-auto scrollbar-desktop justify-start gap-4 py-4">
              <div className="flex-1 flex justify-center gap-4 lg:gap-8 ">
                {TournamentLeaderboard.map((item, userIndex) => (
                  <>
                    <div
                      onClick={() => switchLeaderboard(userIndex, 0, 0, 0)}
                      className={`surface w-56 h-44 lg:w-64 lg:h-44 flex flex-col items-between justify-between rounded-lg items-center text-center transition-all duration-300 ease-in-out hover:-translate-y-2 cursor-pointer ease-in-out ${
                        SelectedTournament === userIndex
                          ? "surface-main"
                          : "opacity-50"
                      }`}
                    >
                      <div className="flex-1 flex flex-col justify-center items-center gap-2">
                        <div className="relative">
                          <img
                            src={item.icon}
                            alt={item.name}
                            className={`relative z-0 h-12 w-12 lg:h-14 lg:w-14 mx-auto block transition-all duration-300 ease-in-out ${
                              SelectedTournament === userIndex
                                ? "opacity-100 scale-100"
                                : "opacity-50 scale-75"
                            }`}
                          />
                          {/*
                      <img src={item.icon} alt={item.name} className={`relative z-0 h-16 w-16 lg:h-20 lg:w-20 mx-auto block transition-all ${SelectedTournament != userIndex ? 'opacity-100 translate-y-0 duration-200' : 'opacity-0 -translate-y-4 duration-700'}`} />
                      <img src={item.iconcolor} alt={item.name} className={`absolute z-10 top-0 h-16 w-16 lg:h-20 lg:w-20 mx-auto block transition-all ${SelectedTournament === userIndex ? 'opacity-100 translate-y-0 duration-700' : 'opacity-0 translate-y-4 duration-200'}`} />
                      */}
                        </div>
                        <div className="text-lg lg:text-[1.5rem] font-headings">
                          {item.name}
                        </div>
                      </div>
                      <div className="w-full border-t border-ui-700 flex text-ui-300 text-sm leading-tight">
                        <div className="px-1.5 py-3 flex-2 border-r border-ui-700">
                          <span>{item.date}</span>
                        </div>
                        <div className="px-1.5 py-3 flex-1">
                          <span>{item.region}</span>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>

            <div
              className={`container mx-auto max-w-xl mt-8 ${
                !TournamentLeaderboard[SelectedTournament].disabled
                  ? ""
                  : "hidden"
              }`}
            >
              <div className="hidden justify-end gap-4 mb-8">
                <button type="button" className="button button-secondary">
                  <span className="icon icon-data-download" />
                  <span>Download leaderboard</span>
                </button>
              </div>
              <div className="flex flex-col lg:flex-row gap-4 ">
                <div
                  className={`w-full lg:w-64 ${
                    Loading === true ? "opacity-0NO" : ""
                  }`}
                >
                  <div className="text-sm text-ui-300 text-center mb-2 lg:mb-3 py-2 leading-none border-b border-ui-700">
                    Leaderboard
                  </div>

                  <div className="block lg:hidden px-2 lg:px-0 pb-2">
                    <div className="form-group form-select">
                      <select onChange={(e) => selectLeaderboard(e)}>
                        {TournamentLeaderboard[SelectedTournament].rounds.map(
                          (round, roundIndex) => (
                            <>
                              <option disabled key={roundIndex}>
                                {round.name.toUpperCase()}
                              </option>
                              {round.groups.map((group, groupIndex) => (
                                <>
                                  <option
                                    disabled
                                    key={groupIndex}
                                    selected={groupIndex === SelectedGroup}
                                  >
                                    &#160;&#160;&#160;{group.name}
                                  </option>
                                  {group.games.map((game, gameIndex) => (
                                    <>
                                      <option
                                        key={gameIndex}
                                        value={[
                                          SelectedTournament,
                                          roundIndex,
                                          groupIndex,
                                          gameIndex,
                                        ]}
                                        selected={
                                          gameIndex === SelectedGameround
                                        }
                                      >
                                        &#160;&#160;&#160;&#160;&#160;&#160;
                                        {game.name}
                                      </option>
                                    </>
                                  ))}
                                </>
                              ))}
                            </>
                          )
                        )}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2 lg:space-y-3 hidden lg:block">
                    {TournamentLeaderboard[SelectedTournament].rounds.map(
                      (round, roundIndex) => (
                        <>
                          <div
                            className={`surface rounded-lg accordion ${
                              Loading === true
                                ? ""
                                : "animate-slide-in-bottomNO animate-delay"
                            }`}
                            style={{
                              "--delay": "calc(" + roundIndex + " * 0.05s)",
                            }}
                          >
                            <Accordion
                              key={roundIndex}
                              header={
                                <>
                                  <div className="item py-1">
                                    <div className="item-body">
                                      <div className="p-1 item-title text-lg">
                                        {round.name}
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
                              <div>
                                {round.groups.map((group, groupIndex) => (
                                  <>
                                    <div className="item py-1">
                                      <div className="item-body pl-4">
                                        <div className="item-title font-bold">
                                          {group.name}
                                        </div>
                                        <div className="text-xs text-ui-300 flex items-center gap-1">
                                          <span className="icon icon-calendar" />
                                          <span>
                                            {group.date} • {group.time}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="item-actions hidden">
                                        <div>
                                          <span className="icon icon-20 icon-arrow-sm-down" />
                                        </div>
                                      </div>
                                    </div>
                                    <ul className="menu">
                                      {group.games.map((game, gameIndex) => (
                                        <>
                                          <li key={gameIndex}>
                                            <a
                                              onClick={() =>
                                                switchLeaderboard(
                                                  SelectedTournament,
                                                  roundIndex,
                                                  groupIndex,
                                                  gameIndex
                                                )
                                              }
                                              className={`${
                                                SelectedRound === roundIndex &&
                                                SelectedGroup === groupIndex &&
                                                SelectedGameround === gameIndex
                                                  ? "is-active"
                                                  : ""
                                              }`}
                                            >
                                              <span className="pl-8">
                                                {game.name}
                                              </span>
                                            </a>
                                          </li>
                                        </>
                                      ))}
                                    </ul>

                                    {/*
                              <Accordion key={groupIndex} header={(
                                <>
                                
                                  <div className='item py-1'>
                                    <div className='item-body'>
                                      <div className='item-title'>
                                        {group.name}
                                      </div>
                                      <div className='text-xs text-ui-300 flex items-center gap-1'>
                                        <span className='icon icon-calendar'/>
                                        <span>{group.date} • {group.time}</span>
                                      </div>
                                    </div>
                                    <div className='item-actions'>
                                      <div>
                                        <span className='icon icon-20 icon-arrow-sm-down'/>
                                      </div>
                                    </div>
                                  </div>
                                </>
                                
                              )}>
                                {group.games.map((game, gameIndex) => (
                                  <>
                                    <button type='button' key={gameIndex} onClick={() => switchLeaderboard(gameIndex)} className='block w-full text-left pl-8 pr-2 py-2 text-sm border-b border-ui-700 hover:text-ui-400'>
                                      {game.name}
                                    </button>
                                  </>
                                ))}
                              </Accordion>
                                */}
                                  </>
                                ))}
                              </div>
                            </Accordion>
                          </div>
                        </>
                      )
                    )}
                  </div>
                </div>
                <div className="flex-1 relative">
                  <div
                    className={`absolute inset-x-0 top-0 h-96 flex items-center ${
                      Loading === true ? "block" : "hidden"
                    }`}
                  >
                    <div className="loader-stryda loader-xl">
                      <div>
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                  </div>

                  <div className={`${Loading === true ? "opacity-0" : ""}`}>
                    <ul ref={screenshotRef} className="space-y-2 lg:space-y-3">
                      <li className="item text-sm uppercase  whitespace-nowrap text-ui-300 text-center leading-none">
                        <div className="item-image w-16 hidden md:block">#</div>
                        <div className="item-image w-20 text-left">Party</div>
                        <div className="item-body flex-2 lg:flex-3"></div>
                        <div className="item-body overflow-ellipsis">
                          Total kills
                        </div>
                        <div className="item-body overflow-ellipsis">
                          Kill points
                        </div>
                        <div className="item-body overflow-ellipsis">
                          Placement points
                        </div>
                        <div className="item-body overflow-ellipsis">
                          Total Score
                        </div>
                      </li>
                      {randomArrayShuffle(
                        TournamentLeaderboard[SelectedTournament].rounds[
                          SelectedRound
                        ].groups[SelectedGroup].games[SelectedGameround].results
                      ).map((user, userIndex) => (
                        <li
                          key={userIndex}
                          className={`item surface lg:rounded-lg text-center ${
                            Loading === true
                              ? ""
                              : "animate-slide-in-bottom animate-delay"
                          } ${
                            prototype.getUserByID(user)?.isYou
                              ? "surface-highlight-blue"
                              : ""
                          }`}
                          style={{
                            "--delay": "calc(" + userIndex + " * 0.05s)",
                          }}
                        >
                          <div className="item-image w-16 hidden relative md:flex items-center justify-center">
                            <LeaderboardWings id={userIndex} />
                          </div>
                          <div className="item-image w-20">
                            <Link
                              href={`/prototype/profile/${
                                prototype.getUserByID(user).id
                              }${prototype.getURLparams()}`}
                            >
                              <div className="avatar avatar-circle avatar-md interactive">
                                <div>
                                  <img
                                    src={prototype.getUserByID(user).avatar}
                                    alt={prototype.getUserByID(user).nickname}
                                  />
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div className="item-body flex-2 lg:flex-3 text-left">
                            <Link
                              href={`/prototype/profile/${
                                prototype.getUserByID(user).id
                              }${prototype.getURLparams()}`}
                            >
                              <div className="item-title text-xl text-ui-100 interactive">
                                {prototype.getUserByID(user).nickname}
                              </div>
                            </Link>
                          </div>
                          <div className="item-body">
                            <span className="bg-gradient-to-b from-ui-900/50 to-ui-900/0 rounded-full px-3 py-1 text-ui-300 font-bold">
                              {randomNumberInRange(10, 200)}
                            </span>
                          </div>
                          <div className="item-body">
                            <span className="bg-gradient-to-b from-ui-900/50 to-ui-900/0 rounded-full px-3 py-1 text-ui-300 font-bold">
                              {randomNumberInRange(10, 200)}
                            </span>
                          </div>
                          <div className="item-body">
                            <span className="bg-gradient-to-b from-ui-900/50 to-ui-900/0 rounded-full px-3 py-1 text-ui-300 font-bold">
                              {randomNumberInRange(10, 200)}
                            </span>
                          </div>
                          <div className="item-body">
                            <span className="bg-gradient-to-b from-ui-900/50 to-ui-900/0 rounded-full px-3 py-1 text-ui-300 font-bold">
                              {randomNumberInRange(10, 200)}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`container mx-auto max-w-xl mt-8 ${
                !TournamentLeaderboard[SelectedTournament].disabled
                  ? "hidden"
                  : "block"
              }`}
            >
              <div
                className={`h-44 flex items-center justify-center relative ${
                  Loading === true
                    ? ""
                    : "animate-slide-in-bottom animate-delay"
                }`}
                style={{ "--delay": "0.05s" }}
              >
                <div
                  className={`relative z-0 surface surface-dimmed rounded-lg px-4 py-8 text-center mt-28`}
                >
                  <div
                    className={`absolute z-10 inset-0 flex items-center ${
                      Loading === true ? "flex" : "hidden"
                    }`}
                  >
                    <div className="loader-stryda loader-xl">
                      <div>
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`max-w-xs mx-auto ${
                      Loading === true ? "opacity-0" : ""
                    }`}
                  >
                    <span className="icon icon-game-pubg-symbol text-6xl text-ui-400 mt-4" />
                    <div className="mt-2 mb-6">
                      <p className="text-lg text-ui-300 leading-tight">
                        This part of the tournament has not started yet. Come
                        back later.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
