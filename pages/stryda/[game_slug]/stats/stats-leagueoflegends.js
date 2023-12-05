import React, { useEffect, useState, useContext } from "react";

import Link from "next/link";
import { usePrototypeData } from "@/contexts/prototype";
import { UiContext } from "@/contexts/ui";
import { useRouter } from "next/router";
import Accordion from "../../../../components/Accordion/Accordion";
import { StatsLeagueOfLegendsChampions } from "@/mock-data/data-stats-leagueoflegends";
import { StatsLeagueOfLegendsRanks } from "@/mock-data/data-stats-leagueoflegends";
import { StatsLeagueOfLegendsSpells } from "@/mock-data/data-stats-leagueoflegends";
import { StatsLeagueOfLegendsItems } from "@/mock-data/data-stats-leagueoflegends";
import { StatsLeagueOfLegendsDemoFavoriteChampions } from "@/mock-data/data-stats-demo-leagueoflegends";
import { StatsLeagueOfLegendsDemoGeneral } from "@/mock-data/data-stats-demo-leagueoflegends";
import { StatsLeagueOfLegendsDemoLatestMatches } from "@/mock-data/data-stats-demo-leagueoflegends";
import LoadMore from "../../../../components/LoadMore/LoadMore";
import LoadMoreContainer from "../../../../components/LoadMore/LoadMoreContainer";
import ModalConnectIDLeagueOfLegends from "../../modal-connectIDleagueoflegends";

export default function StatsLeagueOfLegends() {
  const router = useRouter();
  const { query } = useRouter();
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedGeneralStat, setSelectedGeneralStat] = useState(0);
  const [selectedStat, setSelectedStat] = useState(null);
  const { game_slug } = router.query;
  const variant = query.variant ? query.variant : 0;
  const [loading, setLoading] = useState(true);
  const [maxMap, setMaxMap] = useState(3);
  const empty = query.empty === "true" ? true : false;
  const [isEmpty, setIsEmpty] = useState(empty);
  const [hasRiot, setHasRiot] = useState(true);
  const isPremium = prototype.isPremium;

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1200);
    }
  }, [loading]);

  useEffect(() => {
    if (isPremium) {
      setMaxMap(100);
    } else {
      setMaxMap(3);
    }
  }, [isPremium]);

  useEffect(() => {
    setSelectedGame(prototype.getGameBySlug(game_slug));
  }, [game_slug, prototype]);

  useEffect(() => {
    setSelectedGeneralStat(variant);
  }, [variant]);

  useEffect(() => {
    if (selectedGame != null) {
      prototype.defineDefaultGameID(selectedGame.id);
    }
  }, [selectedGame]);

  function switchVariants() {
    if (selectedGeneralStat < StatsLeagueOfLegendsDemoGeneral.length - 1) {
      setSelectedGeneralStat(selectedGeneralStat + 1);
    } else {
      setSelectedGeneralStat(0);
    }
  }

  const [submitting, setSubmitting] = useState(false);

  function addToastWithDelay(toast) {
    setSubmitting(true);

    setTimeout(() => {
      uiContext.openToastr(toast);
      setSubmitting(false);
    }, 1000);
  }

  const getGeneralStatsByID = (id) => {
    return StatsLeagueOfLegendsDemoGeneral.find((general) => {
      return general.id === parseInt(id);
    });
  };
  const getChampionByID = (id) => {
    return StatsLeagueOfLegendsChampions[id];
  };
  const getItemByID = (id) => {
    return StatsLeagueOfLegendsItems[id];
  };
  const getSpellByID = (id) => {
    return StatsLeagueOfLegendsSpells[id];
  };
  const getRankByID = (id) => {
    return StatsLeagueOfLegendsRanks.find((rank) => {
      return rank.id === parseInt(id);
    });
  };

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    setSelectedStat(getGeneralStatsByID(selectedGeneralStat));
  }, [selectedGeneralStat]);

  function openModalConnectIDLeagueOfLegends() {
    uiContext.openModal(<ModalConnectIDLeagueOfLegends />);
  }

  return (
    <>
      {selectedStat && (
        <>
          {isEmpty || !hasRiot ? (
            <>
              <section className="surface sm:rounded-lg p-4 pb-16 relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row gap-4 items-stretch justify-between min-h-[250px]">
                  <div className="flex flex-col gap-4 justify-between">
                    <div className="flex gap-4 items-start leading-tight">
                      <div className="p-2 rounded bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
                        <span className="icon text-3xl icon-game-leagueoflegends-symbol text-game-leagueoflegends" />
                      </div>
                      <div>
                        <h1 className="uppercase text-6xl">
                          League of Legends stats
                        </h1>
                        <div className="text-sm text-ui-300"></div>
                      </div>
                    </div>
                    <div className="mt-8 md:mb-8">
                      <p className="text-ui-300">
                        You have no stats tracked yet.
                      </p>
                      {!hasRiot && (
                        <>
                          <p className="text-ui-300 mt-2 mb-4">
                            Connect your League of Legends account and start
                            playing.
                          </p>
                          <button
                            type="button"
                            className="button button-primary"
                            onClick={openModalConnectIDLeagueOfLegends}
                          >
                            <span
                              className={`icon icon-game-${selectedGame.slug}-symbol`}
                            />
                            <span>Connect my account</span>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="absolute z-0 inset-0 flex items-end md:items-center justify-center opacity-25 md:opacity-100">
                  <img
                    className="absolute h-full w-full z-0 left-[33%] md:left-auto object-center object-cover"
                    src="https://res.cloudinary.com/gloot/image/upload/Stryda/stats/leagueoflegends/leagueoflegends-stats-hero-empty.jpg"
                    alt=""
                  />
                </div>
              </section>
              <section className="-mt-12 mb-16 px-4 lg:px-0">
                <div className="max-w-lg mx-auto accordion accordion-highlighted">
                  <div className="item lg:h-24 surface surface-ui-700 shadow-xl rounded-lg p-4">
                    <div className="item-body leading-tight grid grid-cols-2 lg:flex flex-wrap justify-around flex-1 gap-4 child:animate-delay">
                      {selectedGame.demo?.mainStats.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="pl-4 border-l border-ui-600 animate-slide-in-bottom animate-delay"
                          style={{
                            "--delay": `calc(${itemIndex} * 0.05s)`,
                          }}
                        >
                          <div className="text-xs lg:text-sm text-ui-200 uppercase">
                            {item.label}
                          </div>
                          <div className="text-main text-xl lg:text-3xl">
                            --
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <div className="my-16 text-center px-4 md:px-0">
                {!hasRiot && (
                  <>
                    <span className="icon icon-game-leagueoflegends-symbol text-7xl text-ui-400 mb-4" />
                    <div className="max-w-xs mx-auto">
                      <h2 className="h4">Connect and play!</h2>
                      <p className="mt-4 mb-6 text-ui-300">
                        Connect your League of Legends account and start playing
                        to see who your top champions are, how well you
                        performed in your last 20 matches or how much time you
                        have spent in League of Legends.
                      </p>
                      <button
                        type="button"
                        className="button button-primary w-full"
                        onClick={openModalConnectIDLeagueOfLegends}
                      >
                        <span className="icon icon-game-leagueoflegends-symbol" />
                        <span>Connect my account</span>
                      </button>
                    </div>
                  </>
                )}
                {isEmpty && (
                  <>
                    <div className="mx-auto mb-4 max-w-sm">
                      <img
                        src="https://res.cloudinary.com/gloot/image/upload/v1669821582/Marketing/2022_VALORANT_agent_generator/images/empty-leagueoflegends-character.png"
                        height="auto"
                        width="auto"
                        alt=""
                      />
                    </div>
                    <div className="max-w-xs mx-auto">
                      <h2 className="h4">Start playing!</h2>
                      <p className="mt-4 mb-6 text-ui-300">
                        Start playing to see who your top champions are, how
                        well you performed in your last 20 matches or how much
                        time you have spent in game.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              <section
                className={`surface sm:rounded-lg p-4 pb-16 relative overflow-hidden ${
                  loading ? "is-loading" : ""
                }`}
              >
                <div
                  onClick={switchVariants}
                  className="relative z-10 flex flex-col md:flex-row gap-4 items-stretch justify-between min-h-[250px]"
                >
                  <div className="flex flex-col gap-4 justify-between">
                    <div className="flex gap-4 items-start leading-tight">
                      <div className="p-2 rounded bg-gradient-to-b from-ui-900 to-ui-900/50 flex items-center justify-center">
                        <span className="icon text-3xl icon-game-leagueoflegends-symbol text-game-leagueoflegends" />
                      </div>
                      <div>
                        <h1 className="uppercase text-6xl">
                          League of Legends stats
                        </h1>
                        <div className="text-sm text-ui-300">
                          Last updated on 11 NOV 2024, 16:38 PM
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center">
                      <div
                        className={`avatar avatar-sm avatar-circle ${
                          prototype.getUserByID(1)?.avatar.isPremium
                            ? "avatar-premium"
                            : ""
                        }`}
                      >
                        <div>
                          <img
                            src={prototype.getUserByID(1)?.avatar}
                            alt="avatar"
                          />
                        </div>
                      </div>
                      <div className="leading-tight">
                        <div className="h5">
                          {prototype.getUserByID(1)?.nickname}
                        </div>
                        <div>
                          {
                            prototype.getUserByID(1)?.socials
                              .riotValorantNickname
                          }
                          <span className="text-sm text-ui-300">#8492</span>
                        </div>
                        <div className="text-ui-300 uppercase text-xs lg:text-sm">
                          Match played: <b>862</b>
                        </div>
                        <div className="text-ui-300 uppercase text-xs lg:text-sm">
                          Play time: <b>1439H</b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col gap-2 md:gap-4 items-center md:items-end justify-between pt-4 md:pt-0">
                    <div className="hidden md:block">
                      <button
                        className={`button button-sm button-tertiary ${
                          submitting ? "is-loading" : ""
                        }`}
                        onClick={addToastWithDelay.bind(this, {
                          icon: "f-check",
                          color: "green",
                          text: "Your stats have been updated.",
                          autoDelete: true,
                          autoDeleteDelay: 2500,
                        })}
                      >
                        <span className="icon icon-16 icon-refresh-02" />
                        <span>Update my stats</span>
                      </button>
                    </div>
                    <div className="md:text-right leading-none mb-2">
                      <div className="text-sm uppercase text-ui-300">
                        Top champion
                      </div>
                      <h2 className="font-headings font-bold uppercase text-5xl">
                        {getChampionByID(selectedStat.champion)?.name}
                      </h2>
                    </div>
                    <div className="md:text-right flex gap-2 items-center uppercase text-xs lg:text-sm text-ui-300">
                      <div>
                        <div>
                          <span>Rank</span>{" "}
                          <b className="text-ui-100">
                            {getRankByID(selectedStat.rank)?.name}
                          </b>
                        </div>
                        <div>
                          <b className="text-ui-100">100</b>{" "}
                          <span>League Points</span>
                        </div>
                      </div>
                      <img
                        className="h-28"
                        src={getRankByID(selectedStat.rank)?.picturePath}
                        height="auto"
                        width="auto"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="block md:hidden pt-4 md:pt-0">
                    <button
                      className={`button button-sm button-tertiary w-full ${
                        submitting ? "is-loading" : ""
                      }`}
                      onClick={addToastWithDelay.bind(this, {
                        icon: "f-check",
                        color: "green",
                        text: "Your stats have been updated.",
                        autoDelete: true,
                        autoDeleteDelay: 2500,
                      })}
                    >
                      <span className="icon icon-16 icon-refresh-02" />
                      <span>Update my stats</span>
                    </button>
                  </div>
                </div>
                <div className="absolute z-0 inset-0 opacity-25 md:opacity-40">
                  <div className="absolute inset-y-0 right-[10%] left-[20%] transform-gpu">
                    <span className="absolute z-10 inset-y-0 w-1/3 left-0 bg-gradient-to-r from-ui-800 to-ui-800/0" />
                    <span className="absolute top-1/ z-10 inset-y-0 w-1/3 right-0 bg-gradient-to-l from-ui-800 to-ui-800/0" />
                    <img
                      className="absolute z-0 w-full h-full object-cover object-[50%_10%] xl:object-[50%_20%] animate-slide-in-bottom"
                      src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${
                        getChampionByID(selectedStat.champion)?.name
                      }_0.jpg`}
                      alt={getChampionByID(selectedStat.champion)?.name}
                    />
                  </div>
                </div>
              </section>
              <section className="-mt-12 mb-16 px-4 lg:px-0">
                <div className="max-w-lg mx-auto accordion accordion-highlighted">
                  <div
                    className={`item lg:h-24 surface surface-ui-700 shadow-xl rounded-lg p-4 ${
                      loading ? "is-loading" : ""
                    }`}
                  >
                    <div className="item-body leading-tight grid grid-cols-2 lg:flex flex-wrap justify-around flex-1 gap-4 child:animate-delay">
                      {selectedGame.demo?.mainStats.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="pl-4 border-l border-ui-600 animate-slide-in-bottom animate-delay"
                          style={{
                            "--delay": `calc(${itemIndex} * 0.05s)`,
                          }}
                        >
                          <div className="text-xs lg:text-sm text-ui-200 uppercase">
                            {item.label}
                          </div>
                          <div className="text-main text-xl lg:text-3xl">
                            {item.value}
                          </div>
                          <div className="text-xs lg:text-sm text-ui-300">
                            Top 2.4%
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <section className="mb-4">
                <h2 className="h5 mx-4 md:mx-0">Most played champions</h2>
                <div className="overflow-y-hidden overflow-x-auto scrollbar-desktop pb-4 px-2 md:px-0">
                  <table
                    className={`table table-rounded rounded-lg w-full text-center min-w-lg ${
                      loading ? "is-loading" : ""
                    }`}
                  >
                    <thead>
                      <tr className="text-ui-400">
                        <th className="text-left">Champion</th>
                        <th>Time played</th>
                        <th>Matches</th>
                        <th>Win %</th>
                        <th>KDA</th>
                        <th>Avg K / D / A</th>
                        <th>CS @ 14</th>
                        <th>Gold @ 14</th>
                        <th>KPs @ 14</th>
                      </tr>
                    </thead>
                    <tbody className="child:overflow-hidden leading-tight">
                      {StatsLeagueOfLegendsDemoFavoriteChampions.slice(
                        0,
                        maxMap
                      ).map((item, itemIndex) => (
                        <tr key={itemIndex}>
                          <td className="p-0">
                            <div className="flex items-center gap-4 text-left w-24">
                              <img
                                className="w-16 h-16 rounded-l"
                                src={`https://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/${
                                  getChampionByID(item.champion)?.image.full
                                }`}
                                alt=""
                                width="auto"
                                height="auto"
                              />
                              <div>
                                <div className="text-ui-100 capitalize">
                                  {getChampionByID(item.champion)?.name}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>{item.timePlayed}</td>
                          <td>{item.matches}</td>
                          <td>{item.win}%</td>
                          <td>{item.kda}</td>
                          <td>{item.adr}</td>
                          <td>{item.cs}</td>
                          <td>{item.gold}%</td>
                          <td>{item.kps}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {!isPremium && (
                    <LoadMoreContainer
                      className="button-sm button-tertiary"
                      label="View more champions"
                    >
                      <div className="relative mb-2 -mt-2">
                        <div className="absolute z-10 inset-0 bg-gradient-to-b from-ui-900/50 to-ui-900 backdrop-blur-sm flex flex-col items-center justify-center">
                          <p className="text-ui-300 mb-2">
                            Get Premium to see the full overview of your stats.
                          </p>
                          <Link href="/stryda/premium">
                            <button
                              type="button"
                              className="button button-sm button-tertiary"
                            >
                              <span className="icon icon-crown text-premium-500" />
                              <span className="text-premium-500">
                                Get Premium
                              </span>
                            </button>
                          </Link>
                        </div>
                        <div className="h-32 overflow-hidden">
                          <table
                            className={`table table-rounded rounded-lg w-full text-center min-w-lg blur-sm ${
                              loading ? "is-loading" : ""
                            }`}
                          >
                            {StatsLeagueOfLegendsDemoFavoriteChampions.slice(
                              0,
                              maxMap
                            ).map((item, itemIndex) => (
                              <tr key={itemIndex}>
                                <td className="p-0">
                                  <div className="flex items-center gap-4 text-left w-24">
                                    <img
                                      className="w-16 h-16 rounded-l"
                                      src={`https://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/${
                                        getChampionByID(item.champion)?.image
                                          .full
                                      }`}
                                      alt=""
                                      width="auto"
                                      height="auto"
                                    />
                                    <div>
                                      <div className="text-ui-100 capitalize">
                                        {getChampionByID(item.champion)?.name}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td>{item.timePlayed}</td>
                                <td>{item.matches}</td>
                                <td>{item.win}%</td>
                                <td>{item.kda}</td>
                                <td>{item.adr}</td>
                                <td>{item.cs}</td>
                                <td>{item.gold}%</td>
                                <td>{item.kps}%</td>
                              </tr>
                            ))}
                          </table>
                        </div>
                      </div>
                    </LoadMoreContainer>
                  )}
                  {isPremium && (
                    <div className="text-center">
                      <LoadMore className="button-sm button-tertiary" />
                    </div>
                  )}
                </div>
              </section>
              <section className="mb-8">
                <h2 className="h5 mx-4 md:mx-0">Last 20 matches</h2>
                <div className="overflow-y-hidden overflow-x-auto scrollbar-desktop leading-tight pb-4">
                  {StatsLeagueOfLegendsDemoLatestMatches.slice(
                    0,
                    maxMap - 1
                  ).map((item, itemIndex) => (
                    <div key={itemIndex} className="mb-2 transform-gpu">
                      <div className="flex items-center gap-2 my-2 text-ui-400 text-xs lg:text-sm uppercase mx-4 md:mx-0">
                        <span className="icon icon-calendar-date-2" />
                        <span>{item.date}</span>
                      </div>
                      {item.matches
                        .slice(0, maxMap)
                        .map((match, matchIndex) => (
                          <div
                            key={matchIndex}
                            className="accordion min-w-lg overflow-hidden mb-2"
                          >
                            <Accordion
                              header={
                                <div
                                  className={`item surface sm:rounded-lg text-center ${
                                    match.hasWon ? "surface-halo halo-l" : ""
                                  }`}
                                >
                                  <div className="item-image">
                                    <div className="avatar avatar-sm avatar-diamond">
                                      <div>
                                        <img
                                          src={`https://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/${
                                            getChampionByID(
                                              selectedStat.champion
                                            )?.image.full
                                          }`}
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="item-body w-36 flex-none text-left">
                                    <div>
                                      <div className="text-ui-100 capitalize">
                                        {
                                          getChampionByID(
                                            getGeneralStatsByID(
                                              selectedGeneralStat
                                            )?.champion
                                          )?.name
                                        }
                                      </div>
                                      <div className="text-ui-300 font-normal capitalize">
                                        {match.mode}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="item-body flex-0 text-2xl text-center uppercase w-40">
                                    {match.hasWon ? (
                                      <span className="text-main">Victory</span>
                                    ) : (
                                      <span className="text-ui-300">
                                        Defeat
                                      </span>
                                    )}
                                  </div>
                                  {/*
                                  <div className="item-body flex-0 text-center w-40">
                                    {match.placement} place
                                  </div>
                                  */}
                                  <div className="item-body flex items-center justify-center gap-4">
                                    <div className="flex items-center gap-2">
                                      {match.spells?.map((item, itemIndex) => (
                                        <button
                                          key={itemIndex}
                                          type="button"
                                          className="tooltip-left"
                                          data-tooltip={
                                            getSpellByID(item)?.name
                                          }
                                        >
                                          <img
                                            src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/spell/${
                                              getSpellByID(item)?.image.full
                                            }`}
                                            alt=""
                                            className="w-8 h-8 object-cover rounded"
                                          />
                                        </button>
                                      ))}
                                    </div>
                                  </div>
                                  <div className="item-body flex-0 text-center w-40">
                                    <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                      {match.time}
                                    </div>
                                    <div>{match.duration}</div>
                                  </div>
                                  <div className="item-body flex-0 text-center w-40">
                                    <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                      K/D/A
                                    </div>
                                    <div>
                                      {match.kda.k} - {match.kda.d} -{" "}
                                      {match.kda.a}
                                    </div>
                                  </div>
                                  <div className="item-actions">
                                    <div>
                                      <span className="icon icon-24 icon-arrow-sm-down" />
                                    </div>
                                  </div>
                                </div>
                              }
                            >
                              <table className="table table-compact w-full text-center text-xs lg:text-sm">
                                <tbody>
                                  <tr className="bg-error-300/20 uppercase">
                                    <td
                                      className="text-error-300 text-left"
                                      colSpan={1}
                                    >
                                      Red team
                                    </td>
                                    <td></td>
                                    <td>Spells</td>
                                    {/*<td>Party</td>*/}
                                    <td>Rank</td>
                                    <td>K/D/A</td>
                                    <td>CS</td>
                                    <td>Wards</td>
                                    <td>Damage</td>
                                    <td>Items</td>
                                  </tr>
                                  {match.leaderboard.team1.map(
                                    (item, itemIndex) => (
                                      <tr
                                        key={itemIndex}
                                        className={`${
                                          itemIndex === 1
                                            ? "bg-blue-300/10"
                                            : ""
                                        }`}
                                      >
                                        <td className="w-6">
                                          <div className="avatar avatar-xs avatar-diamond ml-1">
                                            <div>
                                              <img
                                                src={`https://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/${
                                                  getChampionByID(item.champion)
                                                    ?.image.full
                                                }`}
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div
                                            className={`flex items-center gap-2 ${
                                              itemIndex === 1
                                                ? "text-main"
                                                : "font-normal"
                                            }`}
                                          >
                                            <span className="text-base">
                                              {item.nickname}
                                            </span>
                                            {/*
                                            <div className="rounded bg-gradient-to-b from-ui-100/20 to-ui-100/5 text-xs lg:text-sm uppercase p-1">
                                              #{item.tag}
                                            </div>
                                          */}
                                          </div>
                                        </td>
                                        <td className="w-24">
                                          <div className="flex items-center gap-2">
                                            {item.spells?.map(
                                              (item, itemIndex) => (
                                                <button
                                                  key={itemIndex}
                                                  type="button"
                                                  className="tooltip-left relative"
                                                  data-tooltip={
                                                    getSpellByID(item)?.name
                                                  }
                                                >
                                                  <img
                                                    src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/spell/${
                                                      getSpellByID(item)?.image
                                                        .full
                                                    }`}
                                                    alt=""
                                                    className="relative z-0 w-8 h-8 object-cover rounded"
                                                  />
                                                  <span className="absolute -bottom-2 -right-2 z-10 rounded-full px-1 py-0.5 text-xs text-center font-bold bg-ui-100 text-ui-800 leading-none">
                                                    x11
                                                  </span>
                                                </button>
                                              )
                                            )}
                                          </div>
                                        </td>
                                        {/*
                                        <td className="w-13">
                                          <div className="flex items-center justify-center gap-1 opacity-50 hover:opacity-100">
                                            <span className="icon icon-multiple-11" />
                                            <span>5</span>
                                          </div>
                                        </td>
                                                  */}
                                        <td className="w-13">
                                          <div
                                            data-tooltip={
                                              getRankByID(item.rank).name
                                            }
                                            className="tooltip-left"
                                          >
                                            <img
                                              className="h-8 mx-auto"
                                              src={
                                                getRankByID(item.rank)
                                                  .picturePath
                                              }
                                              height="auto"
                                              width="auto"
                                              alt=""
                                            />
                                          </div>
                                        </td>
                                        <td className="w-13">
                                          <div>32/8/2</div>
                                          <div>
                                            ({randomNumberInRange(0, 100)}%)
                                          </div>
                                        </td>
                                        <td className="w-13">
                                          <div>3</div>
                                          <div>6/0</div>
                                        </td>
                                        <td className="w-13">
                                          <div>124</div>
                                          <div>6.7 m</div>
                                        </td>
                                        <td className="w-13">
                                          <div>11,680</div>
                                        </td>
                                        <td className="w-52">
                                          <div className="flex items-center gap-2">
                                            {item.items?.map(
                                              (item, itemIndex) => (
                                                <button
                                                  key={itemIndex}
                                                  type="button"
                                                  className="tooltip-left"
                                                  data-tooltip={
                                                    getItemByID(item)?.name
                                                  }
                                                >
                                                  <img
                                                    src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${
                                                      getItemByID(item)?.image
                                                        .full
                                                    }`}
                                                    alt=""
                                                    className="w-8 h-8 object-cover rounded"
                                                  />
                                                </button>
                                              )
                                            )}
                                          </div>
                                        </td>
                                      </tr>
                                    )
                                  )}
                                  <tr className="bg-info-300/20 uppercase">
                                    <td
                                      className="text-info-300 text-left"
                                      colSpan={1}
                                    >
                                      Blue team
                                    </td>
                                    <td></td>
                                    <td>Spells</td>
                                    {/*<td>Party</td>*/}
                                    <td>Rank</td>
                                    <td>K/D/A</td>
                                    <td>CS</td>
                                    <td>Wards</td>
                                    <td>Damage</td>
                                    <td>Items</td>
                                  </tr>
                                  {match.leaderboard.team2.map(
                                    (item, itemIndex) => (
                                      <tr key={itemIndex}>
                                        <td className="w-6">
                                          <div className="avatar avatar-xs avatar-diamond ml-1">
                                            <div>
                                              <img
                                                src={`https://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/${
                                                  getChampionByID(item.champion)
                                                    ?.image.full
                                                }`}
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div
                                            className={`flex items-center gap-2`}
                                          >
                                            <span className="text-base">
                                              {item.nickname}
                                            </span>
                                            {/*
                                            <div className="rounded bg-gradient-to-b from-ui-100/20 to-ui-100/5 text-xs lg:text-sm uppercase p-1">
                                              #{item.tag}
                                            </div>
                                          */}
                                          </div>
                                        </td>
                                        <td className="w-24">
                                          <div className="flex items-center gap-2">
                                            {item.spells?.map(
                                              (item, itemIndex) => (
                                                <button
                                                  key={itemIndex}
                                                  type="button"
                                                  className="tooltip-left relative"
                                                  data-tooltip={
                                                    getSpellByID(item)?.name
                                                  }
                                                >
                                                  <img
                                                    src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/spell/${
                                                      getSpellByID(item)?.image
                                                        .full
                                                    }`}
                                                    alt=""
                                                    className="relative z-10 w-8 h-8 object-cover rounded"
                                                  />
                                                  <span className="absolute -bottom-2 -right-2 z-10 rounded-full px-1 py-0.5 text-xs text-center font-bold bg-ui-100 text-ui-800 leading-none">
                                                    x3
                                                  </span>
                                                </button>
                                              )
                                            )}
                                          </div>
                                        </td>
                                        {/*
                                        <td className="w-13">
                                          <div className="flex items-center justify-center gap-1 opacity-50 hover:opacity-100">
                                            <span className="icon icon-multiple-11" />
                                            <span>5</span>
                                          </div>
                                        </td>
                                                  */}
                                        <td className="w-13">
                                          <div
                                            data-tooltip={
                                              getRankByID(item.rank).name
                                            }
                                            className="tooltip-left"
                                          >
                                            <img
                                              className="h-8 mx-auto"
                                              src={
                                                getRankByID(item.rank)
                                                  .picturePath
                                              }
                                              height="auto"
                                              width="auto"
                                              alt=""
                                            />
                                          </div>
                                        </td>
                                        <td className="w-13">
                                          <div>32/8/2</div>
                                          <div>
                                            ({randomNumberInRange(0, 100)}%)
                                          </div>
                                        </td>
                                        <td className="w-13">
                                          <div>3</div>
                                          <div>6/0</div>
                                        </td>
                                        <td className="w-13">
                                          <div>124</div>
                                          <div>6.7 m</div>
                                        </td>
                                        <td className="w-13">
                                          <div>11,680</div>
                                        </td>
                                        <td className="w-52">
                                          <div className="flex items-center gap-2">
                                            {item.items?.map(
                                              (item, itemIndex) => (
                                                <button
                                                  key={itemIndex}
                                                  type="button"
                                                  className="tooltip-left"
                                                  data-tooltip={
                                                    getItemByID(item)?.name
                                                  }
                                                >
                                                  <img
                                                    src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${
                                                      getItemByID(item)?.image
                                                        .full
                                                    }`}
                                                    alt=""
                                                    className="w-8 h-8 object-cover rounded"
                                                  />
                                                </button>
                                              )
                                            )}
                                          </div>
                                        </td>
                                      </tr>
                                    )
                                  )}
                                </tbody>
                              </table>
                            </Accordion>
                          </div>
                        ))}
                    </div>
                  ))}
                  {!isPremium && (
                    <LoadMoreContainer
                      className="button-sm button-tertiary"
                      label="View more matches"
                    >
                      <div className="mb-2 relative">
                        <div className="absolute z-10 inset-0 bg-gradient-to-b from-ui-900/30 to-ui-900 backdrop-blur-sm flex flex-col items-center justify-center">
                          <p className="text-ui-300 mb-2">
                            Get Premium to see the full overview of your stats.
                          </p>
                          <Link href="/stryda/premium">
                            <button
                              type="button"
                              className="button button-sm button-tertiary"
                            >
                              <span className="icon icon-crown text-premium-500" />
                              <span className="text-premium-500">
                                Get Premium
                              </span>
                            </button>
                          </Link>
                        </div>

                        <div className="h-32 overflow-hidden relative z-0 blur-sm">
                          <div className="flex items-center gap-2 my-2 text-ui-400 text-xs lg:text-sm uppercase mx-4 md:mx-0">
                            <span className="icon icon-calendar-date-2" />
                            <span>NOV 6</span>
                          </div>
                          <div className="item surface sm:rounded-lg text-center surface-halo halo-l mb-2">
                            <div className="item-image">
                              <div className="avatar avatar-sm avatar-diamond">
                                <div>
                                  <img
                                    src="https://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/Jinx.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="item-body w-36 flex-none text-left">
                              <div>
                                <div className="text-ui-100 capitalize">
                                  Premium
                                </div>
                                <div className="text-ui-300 font-normal capitalize">
                                  -- • --
                                </div>
                              </div>
                            </div>
                            <div className="item-body flex-0 flex gap-2 items-center justify-around w-48">
                              <div className="text-2xl uppercase w-20 text-center">
                                <span className="text-main">Victory</span>
                              </div>
                              <div className="w-16">
                                <div className="text-ui-300 text-xl">
                                  <span className="text-success-300">--</span> -{" "}
                                  <span className="text-success-300">--</span>
                                </div>
                                <div className="text-sm text-ui-400 font-normal">
                                  -- place
                                </div>
                              </div>
                            </div>
                            <div className="item-body flex-1 flex gap-2 items-center justify-around">
                              <div>
                                <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                  --
                                </div>
                                <div>--</div>
                              </div>
                              <div>
                                <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                  K/D/A
                                </div>
                                <div>-- - -- - --</div>
                              </div>
                              <div>
                                <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                  KD
                                </div>
                                <div>--</div>
                              </div>
                              <div>
                                <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                  ADR
                                </div>
                                <div>--</div>
                              </div>
                              <div>
                                <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                  ACS
                                </div>
                                <div>--</div>
                              </div>
                              <div>
                                <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                  HS%
                                </div>
                                <div>--</div>
                              </div>
                            </div>
                            <div className="item-actions">
                              <div>
                                <span className="icon icon-24 icon-arrow-sm-down" />
                              </div>
                            </div>
                          </div>
                          <div className="item surface sm:rounded-lg text-center surface-halo halo-l mb-2">
                            <div className="item-image">
                              <div className="avatar avatar-sm avatar-diamond">
                                <div>
                                  <img
                                    src="https://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/Ahri.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="item-body w-36 flex-none text-left">
                              <div>
                                <div className="text-ui-100 capitalize">
                                  Premium
                                </div>
                                <div className="text-ui-300 font-normal capitalize">
                                  -- • --
                                </div>
                              </div>
                            </div>
                            <div className="item-body flex-0 flex gap-2 items-center justify-around w-48">
                              <div className="text-2xl uppercase w-20 text-center">
                                <span className="text-main">Victory</span>
                              </div>
                              <div className="w-16">
                                <div className="text-ui-300 text-xl">
                                  <span className="text-success-300">--</span> -{" "}
                                  <span className="text-success-300">--</span>
                                </div>
                                <div className="text-sm text-ui-400 font-normal">
                                  -- place
                                </div>
                              </div>
                            </div>
                            <div className="item-body flex-1 flex gap-2 items-center justify-around">
                              <div>
                                <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                  --
                                </div>
                                <div>--</div>
                              </div>
                              <div>
                                <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                  K/D/A
                                </div>
                                <div>-- - -- - --</div>
                              </div>
                              <div>
                                <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                  KD
                                </div>
                                <div>--</div>
                              </div>
                              <div>
                                <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                  ADR
                                </div>
                                <div>--</div>
                              </div>
                              <div>
                                <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                  ACS
                                </div>
                                <div>--</div>
                              </div>
                              <div>
                                <div className="text-ui-400 text-xs lg:text-sm uppercase">
                                  HS%
                                </div>
                                <div>--</div>
                              </div>
                            </div>
                            <div className="item-actions">
                              <div>
                                <span className="icon icon-24 icon-arrow-sm-down" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </LoadMoreContainer>
                  )}
                  {isPremium && (
                    <div className="text-center">
                      <LoadMore className="button-sm button-tertiary" />
                    </div>
                  )}
                </div>
              </section>
            </>
          )}
          {/* for demo purposes only */}
          {prototype.showDemo && (
            <section className="fixed z-[9999] bottom-4 left-4 surface-ui-500 rounded shadow-md p-4 pr-16 text-sm text-ui-100 flex flex-col items-start">
              <div className="absolute top-1 right-1">
                <button
                  type="button"
                  className="button button-sm button-secondary button-close"
                  onClick={() => prototype.setShowDemo(!prototype.showDemo)}
                >
                  <span className="icon icon-e-remove" />
                </button>
              </div>
              <button
                type="button"
                className="button button-sm button-tertiary w-full"
                onClick={switchVariants}
              >
                <span>Switch between various users</span>
              </button>
              <div className="form-group pl-4">
                <div className="form-xs form-toggle">
                  <input
                    type="checkbox"
                    name="feed"
                    id="feed-riot"
                    onClick={() => {
                      setIsEmpty(false);
                      setHasRiot(!hasRiot);
                    }}
                  />
                  <label htmlFor="feed-riot">
                    No Riot account connected State
                  </label>
                </div>
              </div>
              <div className="form-group pl-4">
                <div className="form-xs form-toggle">
                  <input
                    type="checkbox"
                    name="feed"
                    id="feed-empty"
                    onChange={() => {
                      setIsEmpty(!isEmpty);
                      setHasRiot(true);
                    }}
                  />
                  <label htmlFor="feed-empty">Empty State</label>
                </div>
              </div>
              <div className="form-group pl-4">
                <div className="form-xs form-toggle">
                  <input
                    type="checkbox"
                    name="feed"
                    id="feed-premium"
                    onChange={() => {
                      prototype.togglePremium();
                    }}
                  />
                  <label htmlFor="feed-premium">Has Premium</label>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
}
