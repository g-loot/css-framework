import React, { useEffect, useRef, useState } from "react";

import Accordion from "../../../../components/Accordion/Accordion";
import Footer from "../../../../components/Footer/Footer";
import TopbarMarketing from "../../../../components/TopBarMarketing/TopbarMarketing";
import TournamentLeaderboard from "../../../api/pubg-season-6/data";
import { getLayout } from "../../../../components/Prototype/PrototypeLayout";

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

const PrototypePage = () => {
  const [SelectedTournament, setSelectedTournament] = useState(0);
  const [SelectedRound, setSelectedRound] = useState(0);
  const [SelectedGroup, setSelectedGroup] = useState(0);
  const [SelectedGame, setSelectedGame] = useState(0);
  const [Loading, setLoading] = useState(false);

  function switchLeaderboard(Tournament, Round, Group, Game) {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
      setSelectedTournament(Tournament);
      setSelectedRound(Round);
      setSelectedGroup(Group);
      setSelectedGame(Game);
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

  const screenshotRef = useRef();

  return (
    <>
      <TopbarMarketing />
      <section
        className="relative full-width bg-cover bg-no-repeat overflow-hidden bg-center pt-24"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/gloot/image/upload/v1655119438/Marketing/2022_PUBG_season_6/season-6-hero-bg.jpg)`,
        }}
      >
        <div className="container mx-auto max-w-xl flex flex-col relative pb-8">
          <img
            src="https://res.cloudinary.com/gloot/image/upload/v1655362920/Marketing/2022_PUBG_season_6/G-Loot_S6_logo.png"
            className="block 2xl:hidden mx-auto"
            width={200}
            height={200}
            alt="PUBG G-Loot Season 6"
          />

          <h1 className="text-center block mx-auto my-8 text-6xl uppercase">
            <span className="text-main">G-Loot</span> PUBG Season 6
          </h1>

          <div className="relative z-10 max-w-[100vw] px-2 lg:px-0">
            <iframe
              className="mx-auto max-w-[100%] block aspect-video h-auto rounded-2xl"
              src={`https://player.twitch.tv/?video=1465753668&parent=gloot-framework.netlify.app`}
              allowFullScreen={true}
              height={676}
              width={1082}
            ></iframe>
          </div>
          <img
            src="https://res.cloudinary.com/gloot/image/upload/v1655120411/Marketing/2022_PUBG_season_6/season_6-hero-julie.png"
            className="absolute z-20 pointer-events-none hidden lg:block -bottom-8 -left-[calc(1100px/2)] xl:-left-[calc(900px/2)] scale-75 origin-bottom lg:scale-100"
            width={770}
            height={686}
            alt="Julie"
          />
          <img
            src="https://res.cloudinary.com/gloot/image/upload/v1655362920/Marketing/2022_PUBG_season_6/G-Loot_S6_logo.png"
            className="absolute z-20 pointer-events-none hidden 2xl:block bottom-12 left-[calc(100%-212px)]"
            width={212}
            height={212}
            alt="PUBG G-Loot Season 6"
          />
        </div>
        <video
          className="absolute z-0 right-0 bottom-0 min-w-[100%] min-h-[100%] object-cover mix-blend-screen"
          autoPlay
          playsInline
          muted
          loop
          preload
          poster="https://res.cloudinary.com/gloot/video/upload/v1638395219/Marketing/202109_gloot2/sparks_1_backup.webm"
        >
          <source src="https://res.cloudinary.com/gloot/video/upload/v1638395219/Marketing/202109_gloot2/sparks_1.webm" />
        </video>
      </section>

      <section className="pb-24 bg-ui-900 min-h-screen">
        <div className="mx-auto max-w-xl flex overflow-x-auto scrollbar-desktop justify-start gap-4 bg-gradient-to-b from-mono-900/50 to-ui-900 px-4 py-8 sm:rounded-2xl">
          <div className="flex-1 flex justify-center gap-4 lg:gap-8 ">
            {TournamentLeaderboard.map((item, itemIndex) => (
              <>
                <div
                  onClick={() => switchLeaderboard(itemIndex, 0, 0, 0)}
                  className={`surface w-56 h-44 lg:w-80 lg:h-60 flex flex-col items-between justify-between rounded-lg items-center text-center transition-all duration-300 ease-in-out hover:-translate-y-2 cursor-pointer ease-in-out ${
                    SelectedTournament === itemIndex
                      ? "surface-main"
                      : "opacity-50"
                  }`}
                >
                  <div className="flex-1 flex flex-col justify-center items-center gap-2">
                    <div className="relative">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className={`relative z-0 h-16 w-16 lg:h-20 lg:w-20 mx-auto block transition-all duration-300 ease-in-out ${
                          SelectedTournament === itemIndex
                            ? "opacity-100 scale-100"
                            : "opacity-50 scale-75"
                        }`}
                      />
                      {/*
                      <img src={item.icon} alt={item.name} className={`relative z-0 h-16 w-16 lg:h-20 lg:w-20 mx-auto block transition-all ${SelectedTournament != itemIndex ? 'opacity-100 translate-y-0 duration-200' : 'opacity-0 -translate-y-4 duration-700'}`} />
                      <img src={item.iconcolor} alt={item.name} className={`absolute z-10 top-0 h-16 w-16 lg:h-20 lg:w-20 mx-auto block transition-all ${SelectedTournament === itemIndex ? 'opacity-100 translate-y-0 duration-700' : 'opacity-0 translate-y-4 duration-200'}`} />
                      */}
                    </div>
                    <h3 className="h4 text-lg lg:text-[1.5rem]">{item.name}</h3>
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
          className={`container max-w-[1280px] mx-auto max-w-xl mt-8 ${
            !TournamentLeaderboard[SelectedTournament].disabled ? "" : "hidden"
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
              <div className="text-sm text-ui-300 text-center mb-2 lg:mb-3 py-2 font-bold leading-none border-b border-ui-700">
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
                                    selected={gameIndex === SelectedGame}
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
                                  <div className="p-1 item-title font-headings font-bold text-lg italic">
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
                                    <div className="item-title font-headings font-bold">
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
                                            SelectedGame === gameIndex
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
                <div className="loader-gloot loader-xl">
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
                  <li className="item text-sm text-ui-300 text-center font-bold leading-none">
                    <div className="item-image w-16 hidden md:block">#</div>
                    <div className="item-image w-20 text-left">Party</div>
                    <div className="item-body flex-2 lg:flex-3"></div>
                    <div className="item-body">Total kills</div>
                    <div className="item-body">Kill points</div>
                    <div className="item-body">Placement points</div>
                    <div className="item-body">Total Score</div>
                  </li>
                  {randomArrayShuffle(
                    TournamentLeaderboard[SelectedTournament].rounds[
                      SelectedRound
                    ].groups[SelectedGroup].games[SelectedGame].results
                  ).map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className={`item surface lg:rounded-lg text-center ${
                        Loading === true
                          ? ""
                          : "animate-slide-in-bottom animate-delay"
                      }`}
                      style={{ "--delay": "calc(" + itemIndex + " * 0.05s)" }}
                    >
                      <div className="item-image w-16 hidden md:block">
                        <div
                          className={`chip chip-reward chip-xs chip-inverted h-6 min-w-[1.5rem] text-xs ${
                            itemIndex === 0 ? "chip-gold" : ""
                          } ${itemIndex === 1 ? "chip-silver" : ""} ${
                            itemIndex === 2 ? "chip-bronze" : ""
                          } ${itemIndex > 2 ? "chip-neutral" : ""}`}
                        >
                          <span>{itemIndex + 1}</span>
                        </div>
                      </div>
                      <div className="item-image w-20">
                        <div className="avatar avatar-md">
                          <div>
                            <img src={item.avatar} alt={item.name} />
                          </div>
                        </div>
                      </div>
                      <div className="item-body flex-2 lg:flex-3 text-left">
                        <div className="item-title font-headings font-bold italic text-xl text-ui-100">
                          {item.name}
                        </div>
                      </div>
                      <div className="item-body">
                        <span className="bg-gradient-to-b from-ui-900/50 to-ui-900/0 rounded-full px-3 py-1 text-ui-300 font-headings font-bold">
                          {item.total_kills}
                        </span>
                      </div>
                      <div className="item-body">
                        <span className="bg-gradient-to-b from-ui-900/50 to-ui-900/0 rounded-full px-3 py-1 text-ui-300 font-headings font-bold">
                          {item.kill_points}
                        </span>
                      </div>
                      <div className="item-body">
                        <span className="bg-gradient-to-b from-ui-900/50 to-ui-900/0 rounded-full px-3 py-1 text-ui-300 font-headings font-bold">
                          {item.placement_points}
                        </span>
                      </div>
                      <div className="item-body">
                        <span className="bg-gradient-to-b from-ui-900/50 to-ui-900/0 rounded-full px-3 py-1 text-ui-300 font-headings font-bold">
                          {item.total_score}
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
          className={`container max-w-[1320px] mx-auto max-w-xl mt-8 ${
            !TournamentLeaderboard[SelectedTournament].disabled
              ? "hidden"
              : "block"
          }`}
        >
          <div
            className={`h-44 flex items-center justify-center relative ${
              Loading === true ? "" : "animate-slide-in-bottom animate-delay"
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
                <div className="loader-gloot loader-xl">
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
                  <p className="text-lg text-ui-300 font-headings font-bold leading-tight">
                    This part of the tournament has not started yet. Come back
                    later.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

PrototypePage.getLayout = getLayout;

export default PrototypePage;
