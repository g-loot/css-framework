import { useEffect, useState, useContext } from "react";
import { UiContext } from "@/contexts/ui";
import { usePrototypeData } from "@/contexts/prototype";
import Avatar from "@/components/Avatar/Avatar";
import Link from "next/link";
import GameIcon from "@/components/GameIcon/GameIcon";
import Tooltip from "@/components/Tooltip/Tooltip";
import { StatsValorantAgents } from "@/mock-data/data-stats-valorant";
import { StatsValorantRanks } from "@/mock-data/data-stats-valorant";
import { StatsValorantWeapons } from "@/mock-data/data-stats-valorant";
import { StatsValorantMaps } from "@/mock-data/data-stats-valorant";
import FeedItemComments from "./FeedItemComments";
import ModalShareActivity from "../modal-shareactivity";
import FeedItemContextualMenu from "./FeedItemContextualMenu";
import FeedItemAchievement from "./FeedItemAchievement";

export default function FeedItemDetailsMatch(props) {
  const prototype = usePrototypeData();
  const uiContext = useContext(UiContext);
  const item = props.item;
  const match = props.match;
  const [tabOn, setTabOn] = useState(true);

  useEffect(() => {
    if (!match.meta.media) {
      setTabOn(false);
    }
  }, [match]);

  const getAgentByID = (id) => {
    return StatsValorantAgents.find((agent) => {
      return agent.id === parseInt(id);
    });
  };
  const getRankByID = (id) => {
    return StatsValorantRanks.find((rank) => {
      return rank.id === parseInt(id);
    });
  };
  const getMapByID = (id) => {
    return StatsValorantMaps.find((map) => {
      return map.id === parseInt(id);
    });
  };
  const getWeaponByID = (id) => {
    return StatsValorantWeapons.find((weapon) => {
      return weapon.id === parseInt(id);
    });
  };

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function openModalShareActivity(item) {
    uiContext.openModal(<ModalShareActivity item={item} />);
  }

  return (
    <>
      {item && match && (
        <div className="surface rounded">
          <div className="relative overflow-hidden rounded-t">
            <div className="relative z-10 p-2 lg:p-4 flex items-center gap-3">
              <Avatar id={match.user} size="avatar-sm" hasTooltip={true} />
              <div className="flex-1 overflow-hidden leading-tight">
                <div className="truncate p-1 flex items-end gap-2">
                  <Link
                    href={`/stryda/profile/${
                      match.user
                    }${prototype.getURLparams()}`}
                  >
                    <span
                      className={`interactive truncate text-lg ${
                        prototype.getUserByID(match.user)?.isPremium
                          ? "text-premium-500"
                          : ""
                      }`}
                    >
                      {prototype.getUserByID(match.user)?.nickname}
                    </span>
                  </Link>
                  {prototype.getUserByID(match.user)?.socials
                    .riotValorantNickname && (
                    <Tooltip
                      placement="top"
                      tooltip={
                        <span className="text-sm">Click to copy RIOT ID</span>
                      }
                    >
                      <button
                        type="button"
                        className="chip chip-sm chip-secondary rounded"
                        onClick={() => {
                          uiContext.openToastr({
                            size: "small",
                            text: "RIOT ID copied to your clipboard",
                            color: "green",
                            autoDelete: true,
                            autoDeleteDelay: 2500,
                          });
                          navigator.clipboard.writeText("is-loading");
                        }}
                      >
                        <span className="text-ui-300">
                          {
                            prototype.getUserByID(match.user)?.socials
                              .riotValorantNickname
                          }
                          #
                          {
                            prototype.getUserByID(match.user)?.socials
                              .riotValorantHashtag
                          }
                        </span>
                      </button>
                    </Tooltip>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-ui-300 px-1">
                  <span>{match.meta.dateTimeEnded}</span>
                  <i className="w-0.5 h-0.5 lg:w-1 lg:h-1 rounded-full bg-ui-300" />
                  <span>{match.meta.duration}</span>
                </div>
              </div>
              <div className="flex-none self-start">
                <FeedItemContextualMenu item={item} match={match} />
              </div>
            </div>
            <div className="relative z-10 p-4 lg:p-6 flex flex-col lg:flex-row items-start gap-4 lg:gap-6 ">
              {match.meta.text && (
                <div className="flex-1 order-2 lg:order-1">
                  <p
                    className="text-lg md:text-2xl font-bold text-ui-100 leading-tight"
                    dangerouslySetInnerHTML={{
                      __html: match.meta.text,
                    }}
                  />
                </div>
              )}
              <div className="order-1 lg:order-2 flex gap-2 items-center surface surface-ui-700 rounded-2 p-1">
                <GameIcon game={match.meta.game} size="text-lg" />
                <span className="text-sm text-ui-300 capitalize">
                  {match.meta.mode}
                </span>
                <i className="w-0.5 h-0.5 lg:w-1 lg:h-1 rounded-full bg-ui-300" />
                <span className="text-sm text-ui-300 capitalize">
                  {getMapByID(match.meta.map).name}
                </span>
                <div
                  className={`rounded px-2 py-1.5 text-sm leading-none flex gap-2 items-center ${
                    match.stats.hasWon
                      ? " bg-success-500/10 text-success-300"
                      : "bg-error-500/10 text-error-300"
                  }`}
                >
                  <span>{match.stats.hasWon ? "Victory" : "Defeat"}</span>{" "}
                  <i
                    className={`block h-4 w-px ${
                      match.stats.hasWon
                        ? " bg-success-300/25"
                        : "bg-error-300/25"
                    }`}
                  />{" "}
                  <span>
                    {match.stats.score.team1} - {match.stats.score.team2}
                  </span>
                </div>
              </div>
            </div>
            <div className="relative z-10 px-4 lg:px-6 overflow-x-auto scrollbar-hidden">
              <div className="flex flex-col items-start justify-center rounded border border-ui-700 bg-ui-850/80 backdrop-blur overflow-hidden">
                <div className="w-full overflow-x-auto overflow-y-hidden scrollbar-hidden flex justify-start p-4">
                  <ul className="flex gap-x-8 gap-y-4 items-center mx-auto text-center divide-x divide-ui-600 leading-tight">
                    {match.meta?.agent && (
                      <li className="text-0">
                        <div className="avatar avatar-sm avatar-diamond">
                          <div>
                            <img
                              src={getAgentByID(match.meta.agent).picturePath}
                              alt=""
                            />
                          </div>
                        </div>
                      </li>
                    )}
                    {match.stats.mainStats.map((mainStat, mainStatIndex) => (
                      <li key={mainStatIndex} className="pl-8">
                        <div className="text-sm text-ui-300">
                          {mainStat.label}
                        </div>
                        <div className="text-2xl text-ui-100">
                          {mainStat.value}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {match.achievements && (
                  <div className="flex self-stretch items-center gap-4 lg:gap-8 border-t border-ui-700 py-4 px-4 lg:px-8">
                    <div className="hidden lg:grid place-content-center relative aspect-square border-r border-ui-700 pr-4 lg:pr-8">
                      <div className="relative grid place-content-center text-center">
                        <span className="icon icon-laurel text-ui-400/50 text-8xl" />
                        <div className="absolute z-0 inset-0 grid place-content-center">
                          <div className="text-3xl text-ui-100 pb-1">
                            {match.achievements.length}
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-1 text-sm lg:text-base leading-tight">
                      {match.achievements.map(
                        (achievement, achievementIndex) => (
                          <FeedItemAchievement
                            key={achievementIndex}
                            user={match.user}
                            achievement={achievement}
                          />
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="relative z-10 p-4 lg:p-6">
              <ul className="surface-ui-600 rounded overflow-hidden tabs tabs-stretch shadow-md divide-x divide-ui-500">
                {match.meta.media && (
                  <li>
                    <button
                      type="button"
                      className={`${tabOn ? "is-active" : ""}`}
                      onClick={() => setTabOn(!tabOn)}
                    >
                      <span>Video highlight</span>
                    </button>
                  </li>
                )}
                <li>
                  <button
                    type="button"
                    className={`${!tabOn ? "is-active" : ""}`}
                    onClick={() => setTabOn(!tabOn)}
                  >
                    <span>Leaderboard</span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="absolute z-0 inset-0 flex items-end md:items-center justify-center opacity-25 md:opacity-50 mix-blend-lighten rounded-t overflow-hidden">
              <i className="absolute z-10 inset-0 bg-gradient-to-b from-ui-800/50 to-ui-800" />
              <img
                className="absolute z-0 object-cover left-[33%] md:left-auto object-center animate-slide-in-bottom"
                src={getAgentByID(match.meta.agent).backgroundPath}
                alt=""
              />
            </div>
          </div>

          {tabOn ? (
            <>
              {match.meta.media && (
                <video
                  autoPlay={true}
                  controls
                  playsInline
                  loop
                  muted
                  width="100%"
                  height="auto"
                  className="w-full"
                  id={`video_${item.id}`}
                  src={match.meta.media.url}
                />
              )}
            </>
          ) : (
            <div className="overflow-x-auto scrollbar-hidden border-y border-ui-700 bg-ui-850">
              <table className="table table-compact w-full text-center text-xs lg:text-sm">
                <tbody>
                  <tr className="bg-success-300/20 uppercase">
                    <td className="text-success-300 text-left">Team 1</td>
                    <td></td>
                    <td>Rank</td>
                    <td>ACS</td>
                    <td>K</td>
                    <td>D</td>
                    <td>A</td>
                    <td>+/-</td>
                    <td>K/D</td>
                    <td>ADR</td>
                    <td>HS%</td>
                    <td>FK</td>
                    <td>FD</td>
                    <td>MK</td>
                    <td>ECO</td>
                  </tr>
                  {match.stats.leaderboard.team1.map((item, itemIndex) => (
                    <tr
                      key={itemIndex}
                      className={`${itemIndex === 1 ? "bg-blue-300/10" : ""}`}
                    >
                      <td className="w-6">
                        <div className="avatar avatar-xs avatar-diamond ml-1">
                          <div>
                            <img
                              src={getAgentByID(item.agent).picturePath}
                              alt=""
                            />
                          </div>
                        </div>
                      </td>
                      <td>
                        <div
                          className={`flex items-center gap-2 ${
                            itemIndex === 1 ? "text-main" : "font-normal"
                          }`}
                        >
                          <span className="text-base">{item.nickname}</span>
                          <div className="rounded bg-gradient-to-b from-ui-100/20 to-ui-100/5 text-xs lg:text-sm uppercase p-1">
                            #{item.tag}
                          </div>
                        </div>
                      </td>
                      <td className="w-13">
                        <div
                          data-tooltip={getRankByID(item.rank).name}
                          className="tooltip-left"
                        >
                          <img
                            className="h-8 mx-auto"
                            src={getRankByID(item.rank).picturePath}
                            height="auto"
                            width="auto"
                            alt=""
                          />
                        </div>
                      </td>
                      <td className="w-13">{randomNumberInRange(0, 20)}</td>
                      <td className="w-13">{randomNumberInRange(0, 20)}</td>
                      <td className="w-13">{randomNumberInRange(0, 20)}</td>
                      <td className="w-13">{randomNumberInRange(0, 20)}</td>
                      <td
                        className={`w-13 ${
                          item.isPlus ? "text-success-300" : "text-error-300"
                        }`}
                      >
                        {item.isPlus ? <span>+</span> : <span>-</span>}
                        {randomNumberInRange(0, 20)}
                      </td>
                      <td className="w-13">{randomNumberInRange(0, 500)}</td>
                      <td className="w-13">{randomNumberInRange(0, 20)}</td>
                      <td className="w-13">{randomNumberInRange(0, 100)}%</td>
                      <td className="w-13">{randomNumberInRange(0, 10)}</td>
                      <td className="w-13">{randomNumberInRange(0, 5)}</td>
                      <td className="w-13">{randomNumberInRange(0, 5)}</td>
                      <td className="w-13">{randomNumberInRange(0, 100)}</td>
                    </tr>
                  ))}
                  <tr className="bg-error-300/20 uppercase">
                    <td className="text-error-300 text-left">Team 2</td>
                    <td></td>
                    <td>Rank</td>
                    <td>ACS</td>
                    <td>K</td>
                    <td>D</td>
                    <td>A</td>
                    <td>+/-</td>
                    <td>K/D</td>
                    <td>ADR</td>
                    <td>HS%</td>
                    <td>FK</td>
                    <td>FD</td>
                    <td>MK</td>
                    <td>ECO</td>
                  </tr>
                  {match.stats.leaderboard.team2.map((item, itemIndex) => (
                    <tr key={itemIndex}>
                      <td className="w-6">
                        <div className="avatar avatar-xs avatar-diamond ml-1">
                          <div>
                            <img
                              src={getAgentByID(item.agent).picturePath}
                              alt=""
                            />
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center gap-2 font-normal">
                          <span className="text-base">{item.nickname}</span>
                          <div className="rounded bg-gradient-to-b from-ui-100/20 to-ui-100/5 text-xs lg:text-sm uppercase p-1">
                            #{item.tag}
                          </div>
                        </div>
                      </td>
                      <td className="w-13">
                        <div
                          data-tooltip={getRankByID(item.rank).name}
                          className="tooltip-left"
                        >
                          <img
                            className="h-8 mx-auto"
                            src={getRankByID(item.rank).picturePath}
                            height="auto"
                            width="auto"
                            alt=""
                          />
                        </div>
                      </td>
                      <td className="w-13">{randomNumberInRange(0, 20)}</td>
                      <td className="w-13">{randomNumberInRange(0, 20)}</td>
                      <td className="w-13">{randomNumberInRange(0, 20)}</td>
                      <td className="w-13">{randomNumberInRange(0, 20)}</td>
                      <td
                        className={`w-13 ${
                          item.isPlus ? "text-success-300" : "text-error-300"
                        }`}
                      >
                        {item.isPlus ? <span>+</span> : <span>-</span>}
                        {randomNumberInRange(0, 20)}
                      </td>
                      <td className="w-13">{randomNumberInRange(0, 500)}</td>
                      <td className="w-13">{randomNumberInRange(0, 20)}</td>
                      <td className="w-13">{randomNumberInRange(0, 100)}%</td>
                      <td className="w-13">{randomNumberInRange(0, 10)}</td>
                      <td className="w-13">{randomNumberInRange(0, 5)}</td>
                      <td className="w-13">{randomNumberInRange(0, 5)}</td>
                      <td className="w-13">{randomNumberInRange(0, 100)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div id="comments">
            <FeedItemComments item={item} />
          </div>
        </div>
      )}
    </>
  );
}
